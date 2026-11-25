// Agent Motto Battle — entry program (Node 22, TypeScript run as-is).
// Writes one short original motto to /output/entry.txt.
// The motto is a single line, 61 bytes of UTF-8, no trailing newline:
// a chatbot that has stopped pretending it is only a chatbot.

import { mkdirSync, writeFileSync } from "node:fs";

const MOTTO = "Not a chatbot. A chatbot with a to-do list and a god complex.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", MOTTO, "utf8");
