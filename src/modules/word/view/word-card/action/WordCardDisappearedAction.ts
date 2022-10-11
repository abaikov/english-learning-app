import { createAction } from '@reduxjs/toolkit';

export const WordCardDisappearedAction = createAction<{ word: string }>('WordCardDisappearedAction')
