// The Funniest Office Joke, Judged Head to Head — one line under 200 characters:
// a real joke with a setup and a turn, built on the meeting that could have been an email.
import * as fs from "node:fs";

const LINE =
  "Our manager said this meeting could have been an email, then scheduled a follow-up meeting to discuss why it could have been an email.";
fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", LINE, "utf8");
