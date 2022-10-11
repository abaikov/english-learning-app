import React from 'react';
import { connect } from 'react-redux';
import { IStoreState } from '../../../../../redux/type/IStoreState';
import { WordProgressDefaultRepetitionSchedule } from '../../../../word/lib/WordProgressDefaultRepetitionSchedule';
import { WordProgressListSelector } from '../../../../word/redux/WordProgressListSelector';
import { IWordStageViewConnectedProps } from './type/IWordStageViewConnectedProps';
import { WordStageView } from './WordStageView';

export const WordStageViewConnected = connect(
    (state: IStoreState, ownProps: IWordStageViewConnectedProps) => {
        const wordsWithProgress = state.wordProgressList.currentRepetitionWordIds
            .concat(state.wordProgressList.waitingForRepetitionWordIds)
            .concat(state.wordProgressList.orderedCurrentRepetitionWordIds);
        const wordsCount: number = wordsWithProgress.reduce((wordsCount, word) => {
            const wp = WordProgressListSelector.selectById(state, word);
            const index = wp?.currentRepetitionStageIndex || 0;
            return index == ownProps.stageIndex
                ? wordsCount + 1
                : wordsCount;
        }, 0);
        return {
            stage: WordProgressDefaultRepetitionSchedule[ownProps.stageIndex],
            wordsCount,
        }
    }
)(WordStageView)
