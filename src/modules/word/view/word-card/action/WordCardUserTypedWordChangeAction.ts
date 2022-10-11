import { createAction } from '@reduxjs/toolkit';

export const WordCardUserTypedWordChangeAction = createAction<{
    word: string,
    userTypedWord: string,
}>('WordCardUserTypedWordChangeAction')
