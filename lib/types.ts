export type Interval = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
export enum Note {
  'A' = 'A',
  'ASharp' = 'A#',
  'BFlat' = 'Bb',
  'B' = 'B',
  'C' = 'C',
  'CSharp' = 'C#',
  'DFlat' = 'Db',
  'D' = 'D',
  'DSharp' = 'D#',
  'EFlat' = 'Eb',
  'E' = 'E',
  'F' = 'F',
  'FSharp' = 'F#',
  'GFlat' = 'Gb',
  'G' = 'G',
  'GSharp' = 'G#',
  'AFlat' = 'Ab',
}

export enum FretboardInlay {
  'Dot' = 'Dot',
  'DoubleDot' = 'DoubleDot',
}

export enum ActiveButtonIdStatus {
  CORRECT = 'correct',
  INCORRECT = 'incorrect'
}

export type FretString = {
  fret: number;
  string: number;
};

export type FretStringNote = {
  fretString: FretString;
  note: Note;
};