import { FretToFretboardInlay } from '@/lib/constants';
import { FretboardInlay } from '@/lib/types';

function DotInlay() {
  return <div className='h-3 w-3 rounded-full bg-black' />;
}

function DoubleDotInlay() {
  return (
    <div className='flex gap-2'>
      <DotInlay />
      <DotInlay />
    </div>
  );
}

type Props = {
  fret: number;
};
export default function Inlay({ fret }: Props) {
  if (FretToFretboardInlay[fret] === undefined) {
    return false;
  }
  return (
    <div className='flex h-full w-full items-center justify-center'>
      {FretToFretboardInlay[fret] === FretboardInlay.Dot && <DotInlay />}
      {FretToFretboardInlay[fret] === FretboardInlay.DoubleDot && (
        <DoubleDotInlay />
      )}
    </div>
  );
}
