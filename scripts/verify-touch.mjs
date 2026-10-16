/**
 * Touch activation verification harness for the HoverEffects gallery.
 * Usage: bun scripts/verify-touch.mjs [url]
 *
 * Emulates a phone (touch, hover:none) in headless Edge and taps previews with
 * real touch input, then asserts:
 *   - CSS-only effects replay their hover state while a preview is active
 *     (`.effect-preview-root.touch-active` + duplicated `#touch-hover-rules`),
 *   - JS pointer-tracking effects (spotlight etc.) re-enter after release,
 *   - tooltip previews open and auto-close,
 *   - a scroll gesture cancels the activation,
 *   - tapping elsewhere ends the previous activation.
 */

import { spawn } from "node:child_process";

const EDGE =
  process.env.EDGE ||
  "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe";
const PORT = 9444;
const BASE = (process.argv[2] ?? "http://localhost:3000").replace(/\/$/, "");
const PROFILE = `${process.env.TEMP ?? "C:/Windows/Temp"}/opencode/hoverefx-edge-touch-${Date.now()}`;

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

let failures = 0;
const passes = [];
const consoleErrors = [];

function check(name, ok, detail) {
  if (ok) {
    passes.push(name);
    console.log(`  PASS ${name}`);
  } else {
    failures += 1;
    console.error(`  FAIL ${name}${detail ? ` — ${detail}` : ""}`);
  }
}

/* ---------------------------------------------------------------- CDP ---- */

class CDP {
  constructor(ws) {
    this.ws = ws;
    this.nextId = 0;
    this.pending = new Map();
    this.listeners = [];
    ws.onmessage = (event) => {
      const msg = JSON.parse(event.data);
      if (msg.id !== undefined && this.pending.has(msg.id)) {
        const { resolve, reject } = this.pending.get(msg.id);
        this.pending.delete(msg.id);
        if (msg.error) reject(new Error(JSON.stringify(msg.error)));
        else resolve(msg.result);
      } else if (msg.method) {
        for (const listener of this.listeners) listener(msg);
      }
    };
  }

  onMessage(listener) {
    this.listeners.push(listener);
  }

  send(method, params = {}, sessionId) {
    const id = ++this.nextId;
    return new Promise((resolve, reject) => {
      this.pending.set(id, { resolve, reject });
      this.ws.send(JSON.stringify({ id, method, params, sessionId }));
    });
  }
}

async function cdpEndpoint() {
  for (let i = 0; i < 60; i += 1) {
    try {
      const response = await fetch(`http://127.0.0.1:${PORT}/json/version`);
      const info = await response.json();
      if (info.webSocketDebuggerUrl) return info.webSocketDebuggerUrl;
    } catch {
      // Edge still starting.
    }
    await sleep(250);
  }
  throw new Error("Edge DevTools endpoint never came up");
}

/* ------------------------------------------------------------ runner ---- */

const edge = spawn(
  EDGE,
  [
    "--headless=new",
    "--disable-gpu",
    "--no-first-run",
    "--no-default-browser-check",
    `--remote-debugging-port=${PORT}`,
    `--user-data-dir=${PROFILE}`,
    "about:blank",
  ],
  { stdio: "ignore" },
);

let cdp;
let session;

async function evaluate(expression) {
  const result = await cdp.send(
    "Runtime.evaluate",
    { expression, returnByValue: true, awaitPromise: true },
    session,
  );
  if (result.exceptionDetails) {
    throw new Error(
      `page exception: ${result.exceptionDetails.exception?.description ?? "unknown"}`,
    );
  }
  return result.result.value;
}

async function waitFor(expression, timeoutMs = 60000) {
  const started = Date.now();
  while (Date.now() - started < timeoutMs) {
    try {
      const value = await evaluate(expression);
      if (value) return value;
    } catch {
      // Page may be mid-navigation.
    }
    await sleep(200);
  }
  throw new Error(`timed out waiting for: ${expression}`);
}

async function goto(path) {
  // The PWA service worker claims the page shortly after first load and the
  // app reloads once on controllerchange — wait until the page is stable
  // across a reload-free window before interacting with it.
  for (let attempt = 0; attempt < 4; attempt += 1) {
    await cdp.send("Page.navigate", { url: `${BASE}${path}` }, session);
    await sleep(300);
    await waitFor(`document.readyState === "complete"`, 90000);
    const mark = `m${Date.now()}-${attempt}`;
    await evaluate(`window.__settleMark = ${JSON.stringify(mark)}`);
    for (let stable = 0; stable < 24; stable += 1) {
      await sleep(500);
      const current = await evaluate(`window.__settleMark`).catch(() => null);
      if (current === mark && stable >= 4) {
        await sleep(1000); // run out any lazy compile/hydration stragglers
        return;
      }
      if (current !== mark) break;
    }
  }
  throw new Error(`page never settled: ${path}`);
}

async function centerOf(selector) {
  return evaluate(`(() => {
    const el = document.querySelector(${JSON.stringify(selector)});
    if (!el) return null;
    el.scrollIntoView({ block: "center", behavior: "instant" });
    const rect = el.getBoundingClientRect();
    return { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 };
  })()`);
}

async function touchStart(x, y) {
  await cdp.send(
    "Input.dispatchTouchEvent",
    { type: "touchStart", touchPoints: [{ x, y }] },
    session,
  );
}

async function touchMove(x, y) {
  await cdp.send(
    "Input.dispatchTouchEvent",
    { type: "touchMove", touchPoints: [{ x, y }] },
    session,
  );
}

async function touchEnd() {
  await cdp.send(
    "Input.dispatchTouchEvent",
    { type: "touchEnd", touchPoints: [] },
    session,
  );
}

async function tapSelector(selector, selectorForPoint) {
  const point = await centerOf(selectorForPoint ?? selector);
  if (!point) throw new Error(`selector not found: ${selectorForPoint ?? selector}`);
  await touchStart(point.x, point.y);
  await sleep(90);
  await touchEnd();
  await sleep(120);
  return point;
}

/**
 * A dev-server cold compile can deliver HTML before React hydrates the
 * preview; tapping then would do nothing (or follow the raw anchor href).
 * Probe with synthetic touch pointer events on the preview root until the
 * component's own listeners react (bubble opens), then reset cleanly.
 */
async function waitForTooltipHydration() {
  for (let attempt = 0; attempt < 25; attempt += 1) {
    const opened = await evaluate(`(async () => {
      const root = document.querySelector("#tooltip-soft-fade .he-tooltip-soft-fade");
      if (!root) return false;
      const bubble = root.querySelector(".tip-bubble");
      if (!bubble) return false;
      root.dispatchEvent(new PointerEvent("pointerenter", { pointerType: "touch", composed: true }));
      await new Promise((resolve) => setTimeout(resolve, 220));
      const open = bubble.classList.contains("is-open");
      root.dispatchEvent(new PointerEvent("pointerleave", { pointerType: "touch", composed: true }));
      await new Promise((resolve) => setTimeout(resolve, 620));
      return open;
    })()`);
    if (opened === true) return;
    await sleep(400);
  }
  throw new Error("tooltip preview never hydrated");
}

/* ------------------------------------------------------------- tests ---- */

async function main() {
  const endpoint = await cdpEndpoint();
  const ws = new WebSocket(endpoint);
  await new Promise((resolve, reject) => {
    ws.onopen = resolve;
    ws.onerror = reject;
  });
  cdp = new CDP(ws);
  cdp.onMessage((msg) => {
    if (msg.method === "Runtime.exceptionThrown") {
      consoleErrors.push(
        msg.params.exceptionDetails?.exception?.description ?? "exception",
      );
    }
    if (
      msg.method === "Runtime.consoleAPICalled" &&
      msg.params.type === "error"
    ) {
      consoleErrors.push(
        (msg.params.args ?? []).map((arg) => arg.value ?? arg.description).join(" "),
      );
    }
  });

  const { targetId } = await cdp.send("Target.createTarget", {
    url: "about:blank",
  });
  ({ sessionId: session } = await cdp.send("Target.attachToTarget", {
    targetId,
    flatten: true,
  }));

  await cdp.send("Page.enable", {}, session);
  await cdp.send("Runtime.enable", {}, session);
  await cdp.send(
    "Emulation.setDeviceMetricsOverride",
    { width: 390, height: 844, deviceScaleFactor: 3, mobile: true },
    session,
  );
  await cdp.send(
    "Emulation.setTouchEmulationEnabled",
    { enabled: true, maxTouchPoints: 5 },
    session,
  );
  await cdp.send(
    "Emulation.setEmulatedMedia",
    {
      features: [
        { name: "hover", value: "none" },
        { name: "pointer", value: "coarse" },
        { name: "any-pointer", value: "coarse" },
      ],
    },
    session,
  );

  console.log(`\n== cards: CSS hover replay ==`);
  await goto("/category/cards");
  await waitFor(`!!document.querySelector("#card-title-underline .effect-preview-root")`);

  const before = await evaluate(`(() => {
    const el = document.querySelector("#card-title-underline .underline");
    return el ? getComputedStyle(el).backgroundSize : null;
  })()`);
  await tapSelector("#card-title-underline .effect-preview-root");
  await sleep(250);

  const activeDuring = await evaluate(
    `document.querySelector("#card-title-underline .effect-preview-root")?.classList.contains("touch-active") ?? null`,
  );
  const injected = await evaluate(
    `!!document.querySelector("#touch-hover-rules")`,
  );
  const after = await evaluate(`(() => {
    const el = document.querySelector("#card-title-underline .underline");
    return el ? getComputedStyle(el).backgroundSize : null;
  })()`);

  check("wrapper gets .touch-active on tap", activeDuring === true);
  check("hover rules injected into #touch-hover-rules", injected === true);
  check(
    "CSS hover state replays while active",
    before !== null && after !== null && before !== after,
    `background-size ${before} -> ${after}`,
  );

  await sleep(3200);
  const activeAfter = await evaluate(
    `document.querySelector("#card-title-underline .effect-preview-root")?.classList.contains("touch-active") ?? null`,
  );
  const reverted = await evaluate(`(() => {
    const el = document.querySelector("#card-title-underline .underline");
    return el ? getComputedStyle(el).backgroundSize : null;
  })()`);
  check("window ends after read delay (.touch-active removed)", activeAfter === false);
  check(
    "CSS state reverts after window",
    reverted === before,
    `background-size ${reverted} !== ${before}`,
  );

  console.log(`\n== cards: scroll gesture cancels ==`);
  await evaluate(`window.scrollTo({ top: 0, behavior: "instant" })`);
  await sleep(150);
  const scrollPoint2 = await centerOf("#card-title-underline .effect-preview-root");
  await touchStart(scrollPoint2.x, scrollPoint2.y);
  await sleep(60);
  for (let step = 1; step <= 6; step += 1) {
    await touchMove(scrollPoint2.x, scrollPoint2.y - step * 25);
    await sleep(16);
  }
  await touchEnd();
  await sleep(250);
  const scrollY = await evaluate(`window.scrollY`);
  const activeAfterScroll = await evaluate(
    `document.querySelector("#card-title-underline .effect-preview-root")?.classList.contains("touch-active") ?? null`,
  );
  check("gesture scrolled the page", typeof scrollY === "number" && scrollY > 40, `scrollY=${scrollY}`);
  check("scroll gesture cancels activation", activeAfterScroll === false, `touch-active=${activeAfterScroll}`);

  console.log(`\n== cards: JS pointer tracking ==`);
  await goto("/category/cards?effect=card-pointer-spotlight");
  await waitFor(`!!document.querySelector("#card-pointer-spotlight .effect-preview-root")`);
  await tapSelector("#card-pointer-spotlight .effect-preview-root");
  await sleep(450);
  const liveDuring = await evaluate(
    `document.querySelector("#card-pointer-spotlight .he-card-pointer-spotlight")?.classList.contains("is-live") ?? null`,
  );
  const glowTransform = await evaluate(`(() => {
    const glow = document.querySelector("#card-pointer-spotlight .glow");
    return glow ? glow.style.transform : null;
  })()`);
  check("spotlight is live after tap release", liveDuring === true);
  check(
    "spotlight glow positioned by tap",
    typeof glowTransform === "string" && glowTransform.includes("translate3d"),
    String(glowTransform),
  );

  await sleep(2800);
  const liveAfter = await evaluate(
    `document.querySelector("#card-pointer-spotlight .he-card-pointer-spotlight")?.classList.contains("is-live") ?? null`,
  );
  check("spotlight resets after window", liveAfter === false);

  console.log(`\n== cards: tapping elsewhere ends window ==`);
  await evaluate(`window.scrollTo({ top: 0, behavior: "instant" })`);
  await sleep(150);
  await tapSelector("#card-pointer-spotlight .effect-preview-root");
  await sleep(400);
  const liveBeforeOutside = await evaluate(
    `document.querySelector("#card-pointer-spotlight .he-card-pointer-spotlight")?.classList.contains("is-live") ?? null`,
  );
  await tapSelector("#card-pointer-spotlight h3");
  await sleep(350);
  const activeAfterOutside = await evaluate(
    `document.querySelector("#card-pointer-spotlight .effect-preview-root")?.classList.contains("touch-active") ?? null`,
  );
  const liveAfterOutside = await evaluate(
    `document.querySelector("#card-pointer-spotlight .he-card-pointer-spotlight")?.classList.contains("is-live") ?? null`,
  );
  check("preview live before outside tap", liveBeforeOutside === true);
  check("outside tap ends activation window", activeAfterOutside === false);
  check("outside tap resets JS state", liveAfterOutside === false);

  console.log(`\n== tooltips: bubble opens and closes ==`);
  await goto("/category/tooltips?effect=tooltip-soft-fade");
  await waitFor(`!!document.querySelector("#tooltip-soft-fade .tip-trigger")`);
  await waitForTooltipHydration();
  await tapSelector("#tooltip-soft-fade .tip-trigger");
  await sleep(550);
  const openDuring = await evaluate(
    `document.querySelector("#tooltip-soft-fade .tip-bubble")?.classList.contains("is-open") ?? null`,
  );
  check("tooltip opens on tap", openDuring === true);

  await sleep(3400);
  const openAfter = await evaluate(
    `document.querySelector("#tooltip-soft-fade .tip-bubble")?.classList.contains("is-open") ?? null`,
  );
  check("tooltip closes after window", openAfter === false);

  const relevantErrors = consoleErrors.filter(
    (message) => !/favicon|manifest|sw\.js|service worker/i.test(message),
  );
  check("no console errors", relevantErrors.length === 0, relevantErrors.join(" | "));

  console.log(
    `\n${passes.length} passed, ${failures} failed${relevantErrors.length ? ` (${relevantErrors.length} console errors)` : ""}\n`,
  );
}

main()
  .catch((error) => {
    failures += 1;
    console.error(`\nharness error: ${error.message}`);
  })
  .finally(async () => {
    try {
      await cdp?.send("Browser.close");
    } catch {
      // Browser may already be gone.
    }
    edge.kill();
    process.exit(failures > 0 ? 1 : 0);
  });
