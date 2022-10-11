import { createAction } from '@reduxjs/toolkit';

export const WordCardOkButtonClickAction = createAction<{ word: string }>('WordCardOkButtonClickAction');
