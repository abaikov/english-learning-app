import { createAction } from '@reduxjs/toolkit';

export const WordCardIAlreadyKnowItButtonClickAction = createAction<{ word: string }>('WordCardIAlreadyKnowItButtonClickAction')
