import { useEffect, useState } from "react";
import ControlButton from "./ControlButton"
import { useNoteIdentificationContext } from "@/context/NoteIdentification/context"
import { ActiveButtonIdStatus, FretString, FretStringNote, Note } from "@/lib/types";
import isEqual from "lodash.isequal";
import { extractNotesFromFretString, generateFretStringOptions } from "@/lib/utils/noteIdentification";

export default function NoteIdentificationControls() {
  const noteIdentificationContext = useNoteIdentificationContext()
  const [activeButtonIdStatus, setActiveButtonIdStatus] = useState<ActiveButtonIdStatus | null>(null)
  const handleIdentificationButtonClick = (buttonId: string) => {
    console.log('buttonId', buttonId)
    const [string, fret] = buttonId.split('-')
    const currentIdentification = noteIdentificationContext.value.currentIdentification
    const isCorrect = isEqual(currentIdentification, {
      string: Number(string),
      fret: Number(fret)
    })
    if (isCorrect) {
      console.log('correct')
      setActiveButtonIdStatus(ActiveButtonIdStatus.CORRECT)
    } else {
      setActiveButtonIdStatus(ActiveButtonIdStatus.INCORRECT)
      console.log('incorrect')
    }
    setTimeout(() => {
      setActiveButtonIdStatus(null)
      configureNoteIdentificationGame()

    }, 1000)
  }

  const configureNoteIdentificationGame = (initial?: boolean) => {
    const fretStringOptions = initial ? generateFretStringOptions() : generateFretStringOptions(noteIdentificationContext.value.currentIdentification)
    const fretStringNotes: FretStringNote[] = fretStringOptions.map((fretString: FretString) => {
      const notes = extractNotesFromFretString(fretString)
      return {
        fretString,
        note: notes[Math.floor(Math.random() * notes.length)] // random note from notes
      }
    })
    const randomFretString = fretStringOptions[Math.floor(Math.random() * 4)]
    noteIdentificationContext.setValue({
      ...noteIdentificationContext.value,
      options: fretStringNotes,
      currentIdentification: {
        fret: randomFretString.fret,
        string: randomFretString.string
      },
    })
  }

  useEffect(() => {
    configureNoteIdentificationGame(true)
  }, [])

  return (
    <div className="h-full w-full flex flex-wrap justify-between">
      {
        noteIdentificationContext.value.options.map(({ fretString, note }) => {
          const {
            fret,
            string
          } = noteIdentificationContext.value.currentIdentification
          const id = `${fretString.string}-${fretString.fret}`
          let status = null;
          if (fret === fretString.fret && string === fretString.string) {
            status = activeButtonIdStatus
          }
          return (<div key={id}
            className="w-1/2 h-1/2 flex justify-center items-center">
            <ControlButton
              id={id}
              onClick={handleIdentificationButtonClick}
              status={status}
              disabled={activeButtonIdStatus !== null}
            >
              {note}
            </ControlButton>
          </div>)

        })
      }
    </div>
  )
}