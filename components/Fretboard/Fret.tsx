"use client";

import { STRINGS } from "@/lib/constants"
import Inlay from "./Inlay";

type Props = {
    fret: number,
    onClick?: (stringNumber: number) => void
}

export default function Fret({ fret, onClick }: Props) {
    const handleClick = (stringNumber: number) => {
        if (onClick) {
            onClick(stringNumber)
        }
    }
    const hasClickHandler = onClick !== undefined
    return (
        <div className="h-full w-full relative">
            <div className="h-full w-full relative flex">
                {STRINGS.map((string) => (
                    // TODO: #2: Allow Dynamic Strings. 16.6666 is 100/6
                    <div key={string} className={`h-full w-[16.6666%] ${hasClickHandler && 'hover:bg-gray-400 cursor-pointer'}`} onClick={() => handleClick(string)}>
                        <div className="h-full w-[4px] mx-auto bg-white" />
                    </div>
                ))}
            </div>
            <div className="absolute h-full w-full pointer-events-none top-0">
                <Inlay fret={fret} />
            </div>
            <div className="bg-black w-full h-[4px] absolute bottom-0" />
        </div>
    )
}