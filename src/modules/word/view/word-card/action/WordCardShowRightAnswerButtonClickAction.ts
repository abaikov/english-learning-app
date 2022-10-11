import { createAction } from '@reduxjs/toolkit';

export const WordCardShowRightAnswerButtonClickAction = createAction<{ word: string }>('WordCardShowRightAnswerButtonClickAction')
