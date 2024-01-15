import { FretboardInlay, Interval, Note } from "./types"

export const STRINGS = [0, 1, 2, 3, 4, 5]
export const FRETS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

export const IntervalToNote: Record<Interval, Note[]> = {
    1: [Note.A],
    2: [Note.ASharp, Note.BFlat],
    3: [Note.B],
    4: [Note.C],
    5: [Note.CSharp, Note.DFlat],
    6: [Note.D],
    7: [Note.DSharp, Note.EFlat],
    8: [Note.E],
    9: [Note.F],
    10: [Note.FSharp, Note.GFlat],
    11: [Note.G],
    12: [Note.GSharp, Note.AFlat],
}

export const FretToFretboardInlay: Record<number, FretboardInlay> = {
    3: FretboardInlay.Dot,
    5: FretboardInlay.Dot,
    7: FretboardInlay.Dot,
    9: FretboardInlay.Dot,
    12: FretboardInlay.DoubleDot,
    15: FretboardInlay.Dot,
    17: FretboardInlay.Dot,
    19: FretboardInlay.Dot,
    21: FretboardInlay.Dot,
    24: FretboardInlay.DoubleDot,
}

export const DefaultTuning: Interval[] = [8, 1, 6, 11, 3, 8]