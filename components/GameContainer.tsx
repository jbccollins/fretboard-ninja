'use client';

import {
    NoteIdentificationContext,
    NoteIdentificationContextValue,
    getDefaultNoteIdentificationContextValue,
} from '@/context/NoteIdentification/context';
import Fretboard from './Fretboard/Fretboard';
import { useState } from 'react';
import Controls from './Controls/Controls';

const defaultNoteIdentificationContextValue = getDefaultNoteIdentificationContextValue();

export default function GameContainer() {
    const [noteIdentificationContextValue, setNoteIdentificationContextValue] =
        useState<NoteIdentificationContextValue>(defaultNoteIdentificationContextValue);
    const noteIdentificationContext = {
        value: noteIdentificationContextValue,
        setValue: setNoteIdentificationContextValue,
    };
    return (
        <NoteIdentificationContext.Provider value={noteIdentificationContext}>
            <div className='relative h-full'>
                <div className='fretboard-container mx-auto h-[calc(100%-120px)] w-full max-w-64'>
                    <Fretboard />
                </div>
                <div className='game-controls-container mx-auto h-[120px] w-full max-w-64 bg-red'>
                    <Controls />
                </div>
            </div>
        </NoteIdentificationContext.Provider>
    );
}
