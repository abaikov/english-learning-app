import { createAction } from '@reduxjs/toolkit';

export const WordCardTranslationAppearedAction = createAction<{ word: string }>('WordCardTranslationAppearedAction')
