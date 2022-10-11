import { createAction } from '@reduxjs/toolkit';

export const WordCardRepeatItAgainLaterButtonClickAction = createAction<{ word: string }>('WordCardRepeatItAgainLaterButtonClickAction');
