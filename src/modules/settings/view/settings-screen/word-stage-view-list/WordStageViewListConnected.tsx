import { connect } from 'react-redux';
import { IStoreState } from '../../../../../redux/type/IStoreState';
import { WordProgressDefaultRepetitionSchedule } from '../../../../word/lib/WordProgressDefaultRepetitionSchedule';
import { WordStageViewList } from './WordStageViewList';

export const WordStageViewListConnected = connect(
    (state: IStoreState) => {
        return {
            stages: WordProgressDefaultRepetitionSchedule
        }
    }
)(WordStageViewList);
