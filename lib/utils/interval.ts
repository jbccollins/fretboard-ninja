import { Interval, Note } from '@/lib/types';
import { IntervalToNote, NoteToInterval } from '../constants';

export function getIntervalOffset(
  startingInteval: Interval,
  halfSteps: number
): Interval {
  let value = (startingInteval + halfSteps) % 12;
  if (value === 0) {
    value = 12;
  }
  return value as Interval;
}

export function getNotesFromInterval(interval: Interval): Note[] {
  return IntervalToNote[interval];
}

export function getIntervalFromNote(note: Note): Interval {
  return NoteToInterval[note];
}

export function getRandomNoteFromInterval(interval: Interval): Note {
  const notes = getNotesFromInterval(interval);
  return notes[Math.floor(Math.random() * notes.length)];
}
