import { createAction } from '@reduxjs/toolkit';

export const WordCardUserTypedWordInputErrorAnimationEndAction = createAction<{ word: string }>('WordCardUserTypedWordInputErrorAnimationEndAction');
