import { createAction } from '@reduxjs/toolkit';

export const WordCardWantToLearnItButtonClickAction = createAction<{ word: string }>('WordCardWantToLearnItButtonClickAction');
