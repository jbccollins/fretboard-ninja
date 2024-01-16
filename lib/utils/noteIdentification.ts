import { FretString, Note } from "@/lib/types";
import { DefaultTuning, IntervalToNote } from "@/lib/constants";
import { getIntervalOffset, getRandomNoteFromInterval } from "./interval";

// Generate a 4 options that are not the same fret and string as the current option
// Also avoid generating two fret/string combos that end up being the same note
export function generateFretStringOptions(excluded: FretString): FretString[] {
  let fretStrings: FretString[] = [];
  let generated: { [key: string]: boolean } = {};
  let seenNotes: Note[] = [];

  generated[`${excluded.fret}${excluded.string}`] = true; // Exclude current FretString

  while (fretStrings.length < 4) {
    let fret = Math.floor(Math.random() * 12) + 1; // Generate random number between 1 and 12
    let string = Math.floor(Math.random() * 6); // Generate random number between 0 and 5

    if (!generated[`${fret}${string}`]) {
      const notes = extractNotesFromFretString({ fret, string })
      const note = notes[0]
      if (seenNotes.includes(note)) {
        continue
      } else {
        seenNotes.push(note)
      }
      let fretString: FretString = {
        fret: fret,
        string: string
      };
      fretStrings.push(fretString);
      generated[`${fret}${string}`] = true;
    }
  }
  return fretStrings;
}

export function extractNotesFromFretString({ fret, string }: FretString): Note[] {
  const interval = getIntervalOffset(DefaultTuning[string], fret)
  const notes = IntervalToNote[interval]
  return notes
}
