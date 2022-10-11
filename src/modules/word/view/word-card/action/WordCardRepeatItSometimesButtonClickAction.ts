import { createAction } from '@reduxjs/toolkit';

export const WordCardRepeatItSometimesButtonClickAction = createAction<{ word: string }>('WordCardRepeatItSometimesButtonClickAction')
