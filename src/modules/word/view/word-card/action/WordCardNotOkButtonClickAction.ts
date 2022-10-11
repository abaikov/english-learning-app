import { createAction } from '@reduxjs/toolkit';

export const WordCardNotOkButtonClickAction = createAction<{ word: string }>('WordCardNotOkButtonClickAction');
