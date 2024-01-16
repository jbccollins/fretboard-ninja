'use client';

import { DefaultTuning, FRETS, IntervalToNote } from '@/lib/constants';
import Fret from './Fret';
import { getIntervalOffset } from '@/lib/utils/interval';
import { useNoteIdentificationContext } from '@/context/NoteIdentification/context';

export default function Fretboard() {
  const noteIdentificationContext = useNoteIdentificationContext();

  const handleFretClick = (fret: number, string: number) => {
    const startingInterval = DefaultTuning[string];
    const interval = getIntervalOffset(startingInterval, fret);
    console.log(
      `Notes: ${IntervalToNote[interval].join('/')} | Fret ${fret} on String ${string} clicked`
    );
  };

  const identifyString = noteIdentificationContext.value.currentIdentification.string;
  const identifyFret = noteIdentificationContext.value.currentIdentification.fret;
  return (
    <div className='h-full w-full bg-tan border-l-4 border-r-4 border-black'>
      {FRETS.map((fret) => (
        // TODO #1: Allow Dynamic Frets. 8.333 is 100/12
        <div key={fret} className='h-[8.33333%]'>
          <Fret
            identifyString={identifyFret === fret ? identifyString : undefined}
            fret={fret}
            onClick={(string: number) => handleFretClick(fret, string)}
          />
        </div>
      ))}
    </div>
  );
}
