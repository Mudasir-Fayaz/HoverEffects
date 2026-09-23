import { chmodSync, existsSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const binDir = join(root, "node_modules", ".bin");
const shim = join(binDir, "wrangler");
const target = join(root, "node_modules", "wrangler", "bin", "wrangler.js");

if (existsSync(shim) || !existsSync(target)) {
  process.exit(0);
}

writeFileSync(
  shim,
  '#!/bin/sh\nexec node "$(dirname "$0")/../wrangler/bin/wrangler.js" "$@"\n',
);
chmodSync(shim, 0o755);
console.log("[hoverefx] created node_modules/.bin/wrangler shim");
