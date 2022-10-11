import { IStoreState } from '../../../redux/type/IStoreState';
import { WordProgressListEntityAdapter } from './WordProgressListEntityAdapter';

export const WordProgressListSelector = WordProgressListEntityAdapter.getSelectors(
    (state: IStoreState) => state.wordProgressList
);
