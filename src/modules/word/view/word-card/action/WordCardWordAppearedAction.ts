import { createAction } from '@reduxjs/toolkit';

export const WordCardWordAppearedAction = createAction<{ word: string }>('WordCardWordAppearedAction')
