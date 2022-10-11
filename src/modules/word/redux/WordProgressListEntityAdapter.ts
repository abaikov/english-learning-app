import { createEntityAdapter } from '@reduxjs/toolkit';
import { IWordProgress } from '../type/IWordProgress';

export const WordProgressListEntityAdapter = createEntityAdapter<Partial<IWordProgress>>();
