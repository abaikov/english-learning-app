import { connect } from 'react-redux';
import { IStoreState } from '../../../../redux/type/IStoreState';
import { WordScreen } from './WordScreen';

export const WordScreenConnected = connect(
    (state: IStoreState) => {
        return {
            currentWord: state.wordProgressList.currentWord
        }
    }
)(WordScreen)
