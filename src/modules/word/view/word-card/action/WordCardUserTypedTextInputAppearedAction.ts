import { createAction } from '@reduxjs/toolkit';

export const WordCardUserTypedTextInputAppearedAction = createAction<{ word: string }>('WordCardUserTypedTextInputAppearedAction')
