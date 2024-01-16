'use client';

import { STRINGS } from '@/lib/constants';
import Inlay from './Inlay';

function IdentifierDot() {
  return <div className='identifier-dot h-4 w-4 rounded-full bg-red' />;
}


type Props = {
  fret: number;
  identifyString: number | undefined;
  onClick?: (stringNumber: number) => void;
};

export default function Fret({ fret, onClick, identifyString }: Props) {
  const handleClick = (stringNumber: number) => {
    if (onClick) {
      onClick(stringNumber);
    }
  };
  const hasClickHandler = onClick !== undefined;
  return (
    <div className='relative h-full w-full'>
      {/* Fret Line */}
      <div className='absolute bottom-0 h-[4px] w-full bg-black' />
      {/* Strings */}
      <div className='relative flex h-full w-full'>
        {STRINGS.map((string) => {
          return (
            // TODO: #2: Allow Dynamic Strings. 16.6666 is 100/6
            <div
              key={string}
              className={`relative h-full w-[16.6666%] ${hasClickHandler && 'cursor-pointer hover:bg-gray-400 hover:bg-opacity-60'}`}
              onClick={() => handleClick(string)}
            >
              <div className='mx-auto h-full w-[4px] bg-white' />
              {identifyString === string && (
                <div className="absolute top-0 pointer-events-none flex items-center justify-center h-full w-full">
                  <IdentifierDot />
                </div>
              )}
            </div>
          )
        })}
      </div>
      {/* Inlays */}
      <div className='pointer-events-none absolute top-0 h-full w-full'>
        <Inlay fret={fret} />
      </div>
    </div>
  );
}
