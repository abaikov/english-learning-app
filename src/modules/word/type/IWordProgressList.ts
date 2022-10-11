import { EntityState } from '@reduxjs/toolkit';
import { IWordProgress } from './IWordProgress';
import { IWordRepetitionStage } from './IWordRepetitionStage';

export interface IWordProgressList extends EntityState<Partial<IWordProgress>> {
    currentRepetitionWordIds: string[]
    orderedCurrentRepetitionWordIds: string[]
    newWordIds: string[]
    waitingForRepetitionWordIds: string[]
    learnedWordIds: string[]
    knownWordIds: string[]

    currentWord: string
    //array with time intervals between repetitions
    repetitionStages: IWordRepetitionStage[]

    wordsCount: number
}
