import { createAction } from '@reduxjs/toolkit';

export const WordCardExampleDisappearedAction = createAction<{ word: string }>('WordCardExampleDisappearedAction')
