import { createAction } from '@reduxjs/toolkit';

export const WordCardSkipExampleButtonClickAction = createAction<{ word: string }>('WordCardSkipExampleButtonClickAction')
