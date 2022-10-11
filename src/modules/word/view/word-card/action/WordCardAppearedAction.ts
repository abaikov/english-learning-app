import { createAction } from '@reduxjs/toolkit';

export const WordCardAppearedAction = createAction<{ word: string }>('WordCardAppearedAction');
