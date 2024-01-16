import { FretString, FretStringNote, Note } from '@/lib/types';
import cloneDeep from 'lodash.clonedeep';
import { createContext, useContext } from 'react';

export type NoteIdentificationContextValue = {
	currentIdentification: FretString;
	options: FretStringNote[];
};

export type NoteIdentificationContext = {
	value: NoteIdentificationContextValue;
	setValue: (value: NoteIdentificationContextValue) => void;
};

const defaultNoteIdentificationContext: NoteIdentificationContext = {
	value: {
		currentIdentification: {
			fret: -1,
			string: -1,
		},
		options: [],
	},
	setValue: (value: NoteIdentificationContextValue) => { }
};

export const getDefaultNoteIdentificationContextValue =
	(): NoteIdentificationContextValue => cloneDeep(defaultNoteIdentificationContext.value);

export const NoteIdentificationContext =
	createContext<NoteIdentificationContext | undefined>(undefined);

export function useNoteIdentificationContext(): NoteIdentificationContext {
	const c = useContext(NoteIdentificationContext);
	if (c === undefined) {
		throw new Error(
			'useNoteIdentificationContext must be used with a defined NoteIdentificationContext. You probably forgot to wrap your component in a <NoteIdentificationContext.Provider>.'
		);
	}
	return c
}
