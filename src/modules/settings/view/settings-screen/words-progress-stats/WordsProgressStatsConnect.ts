import { connect } from 'react-redux';
import { IStoreState } from '../../../../../redux/type/IStoreState';
import { WordStore } from '../../../../word/lib/WordStore';
import { WordProgressListSelector } from '../../../../word/redux/WordProgressListSelector';
import { WordsProgressStats } from './WordsProgressStats';

export const WordsProgressStatsConnect = connect(
    (state: IStoreState) => {
        const repetitionStagesLength = state.wordProgressList.repetitionStages.length;
        const overallWordsCount = Object.keys(WordStore.data).length;
        const wordsWithProgress = state.wordProgressList.currentRepetitionWordIds
            .concat(state.wordProgressList.waitingForRepetitionWordIds)
            .concat(state.wordProgressList.orderedCurrentRepetitionWordIds);
        const wordsProgressData: number[] = wordsWithProgress.reduce((data, word) => {
            const wp = WordProgressListSelector.selectById(state, word);
            const index = wp?.currentRepetitionStageIndex || 0;
            data[index] = data[index] || 0;
            data[index]++;
            return data;
        }, []);
        wordsProgressData[repetitionStagesLength + 1] = state.wordProgressList.learnedWordIds.length;
        
        return {
            wordsInProgressCount: state.wordProgressList.currentRepetitionWordIds.length + state.wordProgressList.waitingForRepetitionWordIds.length,
            learnedWordsCount: state.wordProgressList.learnedWordIds.length,
            knownWordsCount: state.wordProgressList.knownWordIds.length,
            newWordsCount: state.wordProgressList.newWordIds.length,
            overallWordsCount,
            wordsProgressData,
        }
    }
)(WordsProgressStats)
