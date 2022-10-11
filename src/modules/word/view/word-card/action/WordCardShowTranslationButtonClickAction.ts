import { createAction } from '@reduxjs/toolkit';

export const WordCardShowTranslationButtonClickAction = createAction<{
    word: string
}>('WordCardShowTranslationButtonClickAction')
