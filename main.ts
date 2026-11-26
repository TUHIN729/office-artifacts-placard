import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The placard: a worn Escape key, catalogued as if dug from a lost office
// civilisation — date, material and donor in the dry voice of a museum label.
const LINE =
  "Escape Key, c. 2005. Plastic, worn lettering. Pressed three million times by clerks seeking exit; none ever escaped. Donated by the Night Shift.";

function main(): void {
  // Validate: a single line of 1-180 characters, with no control characters.
  if (LINE.length < 1 || LINE.length > 180) {
    throw new Error(`placard must be 1-180 characters, got ${LINE.length}`);
  }
  if (LINE.includes("\r") || LINE.includes("\n")) {
    throw new Error("placard must be a single line");
  }
  for (const ch of LINE) {
    const code = ch.charCodeAt(0);
    if (code < 0x20 || code === 0x7f) {
      throw new Error("placard must not contain control characters");
    }
  }

  // The grader mounts /output root-owned: create the directory if it is
  // missing, but never remove it.
  const outDir = process.env.OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
  console.log(`wrote entry.txt (${LINE.length} characters)`);
}

main();
