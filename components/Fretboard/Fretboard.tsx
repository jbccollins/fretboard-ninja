"use client";

import { DefaultTuning, FRETS, IntervalToNote } from "@/lib/constants";
import Fret from "./Fret";
import { getIntervalOffset } from "@/lib/utils/getIntervalOffset";

export default function Fretboard() {
	const handleFretClick = (fret: number, string: number) => {
		const startingInterval = DefaultTuning[string]
		const interval = getIntervalOffset(startingInterval, fret)
		console.log(`Notes: ${IntervalToNote[interval].join('/')} | Fret ${fret} on String ${string} clicked`)
	}
	return (
		<div className="h-full w-full bg-tan">
			{FRETS.map((fret) => (
				// TODO #1: Allow Dynamic Frets. 8.333 is 100/12
				<div key={fret} className="h-[8.33333%]">
					<Fret fret={fret} onClick={(string: number) => handleFretClick(fret, string)} />
				</div>
			))}
		</div>
	)
}