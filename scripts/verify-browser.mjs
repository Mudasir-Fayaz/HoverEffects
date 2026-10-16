/**
 * Headless-Edge verification harness for the HoverEffects gallery.
 * Usage: node scripts/verify-browser.mjs <url> [--port 9222]
 * Starts its own Edge instance, drives it via CDP, and prints a state report
 * for every effect preview on the page: visible content, image loads,
 * console errors, overflow, focus behaviour, and hover transforms.
 */

import { spawn } from "node:child_process";
import { writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = dirname(fileURLToPath(import.meta.url));
const OUT_DIR = join(ROOT, "..", "docs", "verify");
mkdirSync(OUT_DIR, { recursive: true });

const EDGE =
  process.env.EDGE ||
  "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe";
const PORT = 9333;
const TARGET = process.argv[2] ?? "http://localhost:3000/category/cards";

const edge = spawn(EDGE, [
  "--headless=new",
  "--disable-gpu",
  "--no-first-run",
  "--no-default-browser-check",
  `--remote-debugging-port=${PORT}`,
  "about:blank",
]);

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function waitForJson(url, tries = 60) {
  for (let i = 0; i < tries; i++) {
    try {
      const res = await fetch(url);
      if (res.ok) return res.json();
    } catch {}
    await sleep(250);
  }
  throw new Error(`CDP endpoint not ready: ${url}`);
}

let nextId = 0;
class Cdp {
  constructor(ws) {
    this.ws = ws;
    this.pending = new Map();
    this.events = [];
    ws.addEventListener("message", (event) => {
      const msg = JSON.parse(event.data);
      if (msg.id && this.pending.has(msg.id)) {
        const { resolve, reject } = this.pending.get(msg.id);
        this.pending.delete(msg.id);
        if (msg.error) reject(new Error(JSON.stringify(msg.error)));
        else resolve(msg.result);
      } else if (msg.method) {
        this.events.push(msg);
      }
    });
  }
  send(method, params = {}) {
    const id = ++nextId;
    return new Promise((resolve, reject) => {
      this.pending.set(id, { resolve, reject });
      this.ws.send(JSON.stringify({ id, method, params }));
    });
  }
}

async function evaluate(cdp, expression) {
  const result = await cdp.send("Runtime.evaluate", {
    expression,
    returnByValue: true,
    awaitPromise: true,
  });
  if (result.exceptionDetails) {
    return { error: result.exceptionDetails.text };
  }
  return result.result.value;
}

async function main() {
  const pages = await waitForJson(`http://127.0.0.1:${PORT}/json/list`);
  const page = pages.find((p) => p.type === "page");
  const ws = new WebSocket(page.webSocketDebuggerUrl);
  await new Promise((resolve, reject) => {
    ws.addEventListener("open", resolve);
    ws.addEventListener("error", reject);
  });
  const cdp = new Cdp(ws);
  await cdp.send("Runtime.enable");
  await cdp.send("Page.enable");
  await cdp.send("Network.enable");
  await cdp.send("Log.enable");

  const report = { url: TARGET, console: [], images: [], effects: [], overflow: false, notes: [] };

  await cdp.send("Page.navigate", { url: TARGET });
  await sleep(3500);
  await evaluate(cdp, "document.fonts?.ready?.catch(() => null)");
  await sleep(1200);

  const snapshot = await evaluate(
    cdp,
    `(() => {
      const out = { console: [], effects: [], overflow: false, viewport: [innerWidth, innerHeight] };
      try {
        const errors = [];
        const probe = document.querySelector('.effect-preview-root');
        const roots = probe ? probe.querySelectorAll('[class*="he-"]') : [];
        out.effects = [...document.querySelectorAll('.effect-preview-root > *')].map((el, index) => {
          const text = (el.innerText || '').trim();
          const imgs = [...el.querySelectorAll('img')].map((img) => ({
            src: (img.currentSrc || img.src || '').slice(0, 110),
            loaded: img.complete && img.naturalWidth > 0,
          }));
          const links = [...el.querySelectorAll('a')].map((a) => a.getAttribute('href'));
          return {
            index,
            tag: el.tagName,
            cls: (el.className || '').toString().slice(0, 60),
            text: text.slice(0, 60),
            imgs,
            links,
          };
        });
        out.overflow = document.documentElement.scrollWidth > innerWidth + 1;
      } catch (e) {
        out.console.push('snapshot error: ' + e.message);
      }
      return out;
    })()`,
  );

  report.console.push(...(snapshot.console ?? []));
  report.overflow = snapshot.overflow;
  report.effects = snapshot.effects ?? [];

  // Check for console errors produced during load
  const consoleEvents = cdp.events.filter(
    (e) => e.method === "Runtime.consoleAPICalled" && ["error", "warning"].includes(e.params.type),
  );
  for (const e of consoleEvents.slice(0, 12)) {
    const text = e.params.args
      .map((a) => a.value ?? a.description ?? "")
      .join(" ")
      .slice(0, 160);
    report.console.push(`[${e.params.type}] ${text}`);
  }
  const exceptions = cdp.events.filter((e) => e.method === "Runtime.exceptionThrown");
  for (const e of exceptions.slice(0, 12)) {
    report.console.push(
      `[exception] ${e.params.exceptionDetails?.text ?? ""} ${e.params.exceptionDetails?.exception?.description ?? ""}`.slice(0, 200),
    );
  }

  // Interaction probes on the first effect root: hover transform, focus state.
  const probe = await evaluate(
    cdp,
    `(() => {
      const root = document.querySelector('.effect-preview-root > *');
      if (!root) return null;
      const before = getComputedStyle(root).transform;
      const evt = new PointerEvent('pointerenter', { bubbles: true });
      root.dispatchEvent(evt);
      const move = new PointerEvent('pointermove', { bubbles: true, clientX: 40, clientY: 30 });
      root.dispatchEvent(move);
      return { before, after: getComputedStyle(root).transform };
    })()`,
  );
  report.notes.push(`pointer probe: ${JSON.stringify(probe)}`);

  const focusProbe = await evaluate(
    cdp,
    `(() => {
      const root = document.querySelector('.effect-preview-root > *');
      if (!root) return null;
      root.focus();
      return { focused: document.activeElement === root, cls: root.className };
    })()`,
  );
  report.notes.push(`focus probe: ${JSON.stringify(focusProbe)}`);

  const name = TARGET.replace(/[^a-z0-9]+/gi, "-").replace(/^-|-$/g, "");
  writeFileSync(
    join(OUT_DIR, `${name}.json`),
    JSON.stringify(report, null, 2),
    "utf-8",
  );

  const broken = report.effects.filter((e) => e.imgs.some((i) => !i.loaded));
  const empty = report.effects.filter((e) => e.text.length === 0);
  const dead = report.effects.filter((e) => e.links.some((l) => l === "#" || l === ""));

  console.log(`URL: ${TARGET}`);
  console.log(`effects: ${report.effects.length}`);
  console.log(`console messages: ${report.console.length}`);
  for (const line of report.console.slice(0, 10)) console.log(`  ${line}`);
  console.log(`overflow: ${report.overflow}`);
  console.log(`broken images: ${broken.length}`, broken.map((e) => e.cls).join(", "));
  console.log(`empty text: ${empty.length}`);
  console.log(`dead links: ${dead.length}`);
  console.log(`notes: ${JSON.stringify(report.notes)}`);
  console.log(`report written to docs/verify/${name}.json`);

  ws.close();
  edge.kill();
}

main().catch((err) => {
  console.error(err);
  edge.kill();
  process.exit(1);
});