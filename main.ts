import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Dear Human: The AI Breakup Line — writes the single breakup line to
// /output/entry.txt. Node 22, stdlib only, no network, no wall clock,
// no files outside the repo (bot dir) and the output dir.
const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const line = readFileSync(join(botDir, "entry.txt"), "utf8").replace(/\r?\n$/, "");
if (line.length === 0 || line.length > 200) {
  throw new Error(`entry line must be 1-200 characters, got ${line.length}`);
}

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), line, "utf8");
