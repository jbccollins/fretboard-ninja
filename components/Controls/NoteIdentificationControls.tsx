import { useEffect, useState } from "react";
import ControlButton from "./ControlButton"
import { getDefaultNoteIdentificationContextValue, useNoteIdentificationContext } from "@/context/NoteIdentification/context"
import { FretString, FretStringNote, Note } from "@/lib/types";
import isEqual from "lodash.isequal";
import { extractNotesFromFretString, generateFretStringOptions } from "@/lib/utils/noteIdentification";

const defaultNoteIdentificationContextValue = getDefaultNoteIdentificationContextValue();

export default function NoteIdentificationControls() {
  const noteIdentificationContext = useNoteIdentificationContext()
  const handleIdentificationButtonClick = (buttonId: string) => {
    console.log('buttonId', buttonId)
  }
  useEffect(() => {
    const previous = noteIdentificationContext.value.currentIdentification
    const setValue = noteIdentificationContext.setValue;
    const fretStringOptions = generateFretStringOptions(previous)
    const fretStringNotes: FretStringNote[] = fretStringOptions.map((fretString: FretString) => {
      const notes = extractNotesFromFretString(fretString)
      return {
        fretString,
        note: notes[Math.floor(Math.random() * notes.length)] // random note from notes
      }
    })

    noteIdentificationContext.setValue({
      ...noteIdentificationContext.value,
      options: fretStringNotes
    })
    if (isEqual(noteIdentificationContext.value, defaultNoteIdentificationContextValue)) {
      console.log('fretStringNotes', fretStringNotes)
      const randomFretString = fretStringOptions[Math.floor(Math.random() * 4)]
      setValue({
        ...noteIdentificationContext.value,
        currentIdentification: {
          fret: randomFretString.fret,
          string: randomFretString.string
        },
      })
    }
  }, [noteIdentificationContext.value.currentIdentification])

  return (
    <div className="h-full w-full flex flex-wrap justify-between">
      {
        noteIdentificationContext.value.options.map(({ fretString, note }) => {
          const id = `${fretString.string}-${fretString.fret}`
          return (<div key={id}
            className="w-1/2 h-1/2 flex justify-center items-center">
            <ControlButton
              id={id}
              onClick={handleIdentificationButtonClick}
            >
              {note}
            </ControlButton>
          </div>)

        })
      }
    </div>
  )
}