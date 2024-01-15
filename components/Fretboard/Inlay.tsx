import { FretToFretboardInlay } from "@/lib/constants";
import { FretboardInlay } from "@/lib/types"

function DotInlay() {
    return (
        <div className="w-3 h-3 rounded-full bg-black" />
    )
}

function DoubleDotInlay() {
    return (
        <div className="flex gap-2">
            <DotInlay />
            <DotInlay />
        </div>
    )
}

type Props = {
    fret: number,
}
export default function Inlay({ fret }: Props) {
    if (FretToFretboardInlay[fret] === undefined) {
        return false;
    }
    return (
        <div className="flex items-center justify-center h-full w-full">
            {FretToFretboardInlay[fret] === FretboardInlay.Dot && <DotInlay />}
            {FretToFretboardInlay[fret] === FretboardInlay.DoubleDot && <DoubleDotInlay />}
        </div>
    )
}