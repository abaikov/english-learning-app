import { createAction } from '@reduxjs/toolkit';

export const WordCardUserTypedWordSubmitAction = createAction<{ word: string }>('WordCardUserTypedWordSubmitAction');
