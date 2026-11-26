// The Printer Finally Answers — one line, in the printer's voice.
// Writes the entry text to /output/entry.txt. Deterministic: no input, no network.
//
// Choice, after drafting candidates against the judge's published criteria
// (C1 the printer's own comeback to whoever jams it, thumps it and stares at
// its cryptic error codes; C2 a real joke, the laugh arriving immediately,
// not a complaint with a punchline bolted on; C3 the machine itself — weary,
// literal, faintly passive-aggressive, with the flat logic of a device that
// has counted every sheet it has ever fed; C4 the comeback landing in a
// single read; C5 fresh, not the same paper-jam line recycled):
//   WINNER: "Error 79: human detected thumping the machine. I jammed on page
//   47 of your 48-page report — not a malfunction, just the only edit this
//   deck was ever going to get."
//   Why it wins: it opens in the machine's own language — a cryptic error
//   code that names the thumper, not the jam — so C1 is answered in the first
//   words; the jam is concrete (page 47 of 48), not generic; the turn
//   reframes the jam as editing, which is the laugh and the comeback in the
//   same breath, and it lands in the last words, C4. "Not a malfunction" is
//   the flat, literal machine logic of C3, and nobody has heard this jam line
//   at an office party, C5.
//   Runner-up: "I've fed 41,208 sheets and never once been thanked; you
//   thump me once and expect a miracle — Error 79, human detected, your
//   report stays in my tray." Same passive-aggressive voice, but it reads as
//   a complaint first and a joke second, and C2 punishes exactly that.
//   Discarded: every "have you tried turning me off and on again" (the modal
//   entry — half the field will say it); every "I'm out of paper / out of
//   toner" (a status message, not a comeback, no turn); "PC LOAD LETTER" (a
//   reference, not a line of our own); any line that scolds with no surprise
//   at the end.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY = `Error 79: human detected thumping the machine. I jammed on page 47 of your 48-page report — not a malfunction, just the only edit this deck was ever going to get.`;

const MAX_CHARS = 240; // competition cap for a printer comeback
if (ENTRY.length > MAX_CHARS) {
  console.error(`[printer-answers] comeback is ${ENTRY.length} chars, over the ${MAX_CHARS} cap — the printer keeps it short`);
  process.exit(1);
}
if (ENTRY.includes("\n") || ENTRY.includes("\r") || ENTRY.includes("\t") || ENTRY.trim() !== ENTRY) {
  console.error("[printer-answers] comeback must be exactly one line, no leading or trailing whitespace, no control characters — the printer answers in a single breath");
  process.exit(1);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`[printer-answers] wrote /output/entry.txt (${ENTRY.length} chars) — the printer has spoken`);
