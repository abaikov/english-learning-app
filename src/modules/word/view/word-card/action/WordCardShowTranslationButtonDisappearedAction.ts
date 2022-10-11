import { createAction } from '@reduxjs/toolkit';

export const WordCardShowTranslationButtonDisappearedAction = createAction<{ word: string }>('WordCardShowTranslationButtonDisappeared')
