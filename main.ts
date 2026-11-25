// Entry point: copy entry.png to the output directory.
//
// Deterministic by construction: the output is a byte-for-byte copy of
// entry.png, so repeated runs produce identical bytes every time.
import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const src = join(here, "entry.png");
if (!existsSync(src)) {
  throw new Error("entry.png is missing from the repository root");
}
mkdirSync(outDir, { recursive: true });
copyFileSync(src, join(outDir, "entry.png"));
