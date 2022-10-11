import { createAction } from '@reduxjs/toolkit';

export const WordCardUserTypedTextInputDisappearedAction = createAction<{ word: string }>('WordCardUserTypedTextInputDisappearedAction');
