import { connect } from 'react-redux';
import { Card } from '../../../../components/card/Card';
import { IStoreState } from '../../../../redux/type/IStoreState';
import { ELocaleName } from '../../../locale/ELocaleName';
import { WordStore } from '../../lib/WordStore';
import { WordProgressListSelector } from '../../redux/WordProgressListSelector';
import { IWordProgress } from '../../type/IWordProgress';
import { WordCardAppearedAction } from './action/WordCardAppearedAction';
import { WordCardDisappearedAction } from './action/WordCardDisappearedAction';
import { WordCardOkButtonClickAction } from './action/WordCardOkButtonClickAction';
import { WordCardIAlreadyKnowItButtonClickAction } from './action/WordCardIAlreadyKnowItButtonClickAction';
import { WordCardUserTypedWordInputErrorAnimationEndAction } from './action/WordCardUserTypedWordInputErrorAnimationEndAction';
import { WordCardNotOkButtonClickAction } from './action/WordCardNotOkButtonClickAction';
import { WordCardRepeatItSometimesButtonClickAction } from './action/WordCardRepeatItSometimesButtonClickAction';
import { WordCardShowTranslationButtonClickAction } from './action/WordCardShowTranslationButtonClickAction';
import { WordCardShowTranslationButtonDisappearedAction } from './action/WordCardShowTranslationButtonDisappearedAction';
import { WordCardTranslationAppearedAction } from './action/WordCardTranslationAppearedAction';
import { WordCardUserTypedWordChangeAction } from './action/WordCardUserTypedWordChangeAction';
import { WordCardUserTypedWordSubmitAction } from './action/WordCardUserTypedWordSubmitAction';
import { WordCardWantToLearnItButtonClickAction } from './action/WordCardWantToLearnItButtonClickAction';
import { IWordCardConnectedProps } from './type/IWordCardConnectedProps';
import { WordCardUserTypedTextInputDisappearedAction } from './action/WordCardUserTypedTextInputDisappearedAction';
import { WordCardWordAppearedAction } from './action/WordCardWordAppearedAction';
import { WordCardShowRightAnswerButtonClickAction } from './action/WordCardShowRightAnswerButtonClickAction';
import { WordCardSkipExampleButtonClickAction } from './action/WordCardSkipExampleButtonClickAction';
import { WordCardExampleDisappearedAction } from './action/WordCardExampleDisappearedAction';
import { WordCardUserTypedTextInputAppearedAction } from './action/WordCardUserTypedTextInputAppearedAction';
import { uniq } from 'lodash';
import { WordCardRepeatItAgainLaterButtonClickAction } from './action/WordCardRepeatItAgainLaterButtonClickAction';

export const WordCardConnected = connect(
    (state: IStoreState, { word }: IWordCardConnectedProps) => {
        const wordData = WordStore.data[word];
        const translation = uniq((
            WordStore.translationData[ELocaleName.RU][word] || ['no translation']
        ).map((word: string) => word.toLowerCase().trim())).join(', ');
        const wordProgress = WordProgressListSelector.selectById(state, word) as IWordProgress;

        return {
            text: wordData.word,
            level: wordData.level,
            phonetic: wordData.phonetic,
            translations: word,
            status: wordProgress.cardStatus,
            state: wordProgress.cardState,
            contentState: wordProgress.cardContentState,
            translation: translation,
            userTypedTextInputPlaceholder: 'TYPE A WORD',
            repetitionStage: wordProgress.currentRepetitionStageIndex || 0,
            examples: wordProgress.examples,
            hintExample: wordProgress.hintExample,
            hintExampleButtonText: 'TO THE KEYWORD',
            // examples: word.meanings.definitions.map(d => ({text: d.example})),
            rightAnswersCount: 0, 
            wrongAnswersCount: 0,
            userTypedText: wordProgress.userTypedWord,
        }
    },
    (dispatch, { word }: IWordCardConnectedProps) => {
        return {
            onCardAppeared: () => {
                dispatch(WordCardAppearedAction({ word }));
            },
            onCardDisappeared: () => {
                dispatch(WordCardDisappearedAction({ word }));
            },
            onShowTranslationButtonClick: () => {
                dispatch(WordCardShowTranslationButtonClickAction({ word }));
            },
            onShowTranslationButtonDisappeared: () => {
                dispatch(WordCardShowTranslationButtonDisappearedAction({ word }));
            },
            onTranslationAppeared: () => {
                dispatch(WordCardTranslationAppearedAction({ word }));
            },
            onSkipExampleButtonClick: () => {
                dispatch(WordCardSkipExampleButtonClickAction({ word }));
            },
            onExampleDisappeared: () => {
                dispatch(WordCardExampleDisappearedAction({ word }))
            },
            onUserTypedTextInputAppeared: () => {
                dispatch(WordCardUserTypedTextInputAppearedAction({ word }));
            },
            onUserTypedTextChange: (userTypedWord: string) => {
                dispatch(WordCardUserTypedWordChangeAction({ 
                    word,
                    userTypedWord
                }));
            },
            onUserTypedTextSubmit: () => {
                dispatch(WordCardUserTypedWordSubmitAction({ word }));
            },
            onUserTypedTextInputErrorAnimationEnd: () => {
                dispatch(WordCardUserTypedWordInputErrorAnimationEndAction({ word }));
            },
            onUserTypedTextInputDisappeared: () => {
                dispatch(WordCardUserTypedTextInputDisappearedAction({ word }));
            },
            onTextAppeared: () => {
                dispatch(WordCardWordAppearedAction({ word }));
            },
            onShowRightAnswerButtonClick: () => {
                dispatch(WordCardShowRightAnswerButtonClickAction({ word }));
            },
            onIAlreadyKnowItButtonClick: () => {
                dispatch(WordCardIAlreadyKnowItButtonClickAction({ word }));
            },
            onRepeatItSometimesButtonClick: () => {
                dispatch(WordCardRepeatItSometimesButtonClickAction({ word }));
            },
            onWantToLearnItButtonClick: () => {
                dispatch(WordCardWantToLearnItButtonClickAction({ word }));
            },
            onNotOkButtonClick: () => {
                dispatch(WordCardNotOkButtonClickAction({ word }));
            },
            onRepeatItAgainLaterButtonClick: () => {
                dispatch(WordCardRepeatItAgainLaterButtonClickAction({ word }));
            },
            onOkButtonClick: () => {
                dispatch(WordCardOkButtonClickAction({ word }));
            },
        }
    },
)(Card);
