import { createReducer } from '@reduxjs/toolkit';
import { WordStore } from '../lib/WordStore';
import { sample } from 'lodash';
import { WordProgressListEntityAdapter } from './WordProgressListEntityAdapter';
import { ECardState } from '../../../components/card/type/ECardState';
import { ECardStatus } from '../../../components/card/type/ECardStatus';
import { ECardContentState } from '../../../components/card/type/ECardContentState';
import { WordCardAppearedAction } from '../view/word-card/action/WordCardAppearedAction';
import { WordCardShowTranslationButtonClickAction } from '../view/word-card/action/WordCardShowTranslationButtonClickAction';
import { WordCardShowTranslationButtonDisappearedAction } from '../view/word-card/action/WordCardShowTranslationButtonDisappearedAction';
import { WordCardTranslationAppearedAction } from '../view/word-card/action/WordCardTranslationAppearedAction';
import { WordCardIAlreadyKnowItButtonClickAction } from '../view/word-card/action/WordCardIAlreadyKnowItButtonClickAction';
import { WordCardDisappearedAction } from '../view/word-card/action/WordCardDisappearedAction';
import { SettingsScreenResetProgressConfirmAcceptedAction } from '../../settings/view/settings-screen/reset-progress-confirm/action/SettingsScreenResetProgressConfirmAcceptedAction';
import { WordCardUserTypedWordChangeAction } from '../view/word-card/action/WordCardUserTypedWordChangeAction';
import { WordCardWantToLearnItButtonClickAction } from '../view/word-card/action/WordCardWantToLearnItButtonClickAction';
import { WordCardRepeatItSometimesButtonClickAction } from '../view/word-card/action/WordCardRepeatItSometimesButtonClickAction';
import { IWordProgressList } from '../type/IWordProgressList';
import { WordProgressListNextWordSelectionReducer } from './WordProgressListNextWordSelectionReducer';
import { WordCardUserTypedWordSubmitAction } from '../view/word-card/action/WordCardUserTypedWordSubmitAction';
import { WordCardUserTypedWordInputErrorAnimationEndAction } from '../view/word-card/action/WordCardUserTypedWordInputErrorAnimationEndAction';
import { WordCardUserTypedTextInputDisappearedAction } from '../view/word-card/action/WordCardUserTypedTextInputDisappearedAction';
import { WordCardWordAppearedAction } from '../view/word-card/action/WordCardWordAppearedAction';
import { WordCardOkButtonClickAction } from '../view/word-card/action/WordCardOkButtonClickAction';
import { EWordProgressResolution } from '../type/EWordProgressResolution';
import { WordCardNotOkButtonClickAction } from '../view/word-card/action/WordCardNotOkButtonClickAction';
import { WordCardShowRightAnswerButtonClickAction } from '../view/word-card/action/WordCardShowRightAnswerButtonClickAction';
import { WordCardExampleDisappearedAction } from '../view/word-card/action/WordCardExampleDisappearedAction';
import { WordCardSkipExampleButtonClickAction } from '../view/word-card/action/WordCardSkipExampleButtonClickAction';
import { WordCardUserTypedTextInputAppearedAction } from '../view/word-card/action/WordCardUserTypedTextInputAppearedAction';
import { WordProgressDefaultRepetitionSchedule } from '../lib/WordProgressDefaultRepetitionSchedule';
import { WordCardRepeatItAgainLaterButtonClickAction } from '../view/word-card/action/WordCardRepeatItAgainLaterButtonClickAction';
import { AppPersistInitedAction } from '../../app/redux/action/AppPersistInitedAction';

const selector = WordProgressListEntityAdapter.getSelectors();

const getInitialState = () => {
    const initialDeck = Object.keys(WordStore.data)
    const currentWord = sample(initialDeck)
    const allOfTheWords = Object.keys(WordStore.data);
    const initialState = {
        ...WordProgressListEntityAdapter.setOne(
            WordProgressListEntityAdapter.getInitialState(),
            {
                id: currentWord,
                cardStatus: ECardStatus.UNDEFINED,
                cardState: ECardState.APPEARING,
                cardContentState: ECardContentState.TEXT_ONLY,
                userTypedWord: null,
                repetitionCountInTheSameStage: 0,
                currentRepetitionStageIndex: 0,
                examples: WordProgressListNextWordSelectionReducer.getExamplesForWord(currentWord),
                hintExample: WordProgressListNextWordSelectionReducer.getHintExample(currentWord),
            }
        ),
        newWordIds: allOfTheWords,
        wordsCount: allOfTheWords.length,
        currentRepetitionWordIds: [] as string[],
        orderedCurrentRepetitionWordIds: [] as string[],
        learnedWordIds: [] as string[],
        waitingForRepetitionWordIds: [] as string[],
        knownWordIds: [] as string[],
        currentWord: currentWord,
        repetitionStages: WordProgressDefaultRepetitionSchedule
    } as IWordProgressList;

    return initialState;
}

export const WordProgressListReducer = createReducer<IWordProgressList>(getInitialState(), (builder) => {
    builder
        .addCase(WordCardAppearedAction, (state, action) => {
            WordProgressListEntityAdapter.upsertOne(state, {
                id: action.payload.word,
                
                cardState: ECardState.DISPLAYING,
            });
        })
        .addCase(WordCardDisappearedAction, (state, action) => {
            const word = action.payload.word;
            WordProgressListNextWordSelectionReducer.reduce(state, word);
        })
        .addCase(WordCardShowTranslationButtonClickAction, (state, action) => {
            WordProgressListEntityAdapter.upsertOne(state, {
                id: action.payload.word,
                
                cardContentState: ECardContentState.SHOW_TRANSLATION_BUTTON_HIDDING,
            });
        })
        .addCase(WordCardShowTranslationButtonDisappearedAction, (state, action) => {
            WordProgressListEntityAdapter.upsertOne(state, {
                id: action.payload.word,
                
                cardContentState: ECardContentState.TEXT_WITH_TRANLATION_AND_EXAMPLES_APPEARING,
            });
        })
        .addCase(WordCardTranslationAppearedAction, (state, action) => {
            WordProgressListEntityAdapter.upsertOne(state, {
                id: action.payload.word,
                
                cardContentState: ECardContentState.TEXT_WITH_TRANLATION_AND_EXAMPLES,
            });
        })
        .addCase(WordCardIAlreadyKnowItButtonClickAction, (state, action) => {
            WordProgressListEntityAdapter.upsertOne(state, {
                id: action.payload.word,
                
                cardState: ECardState.DISAPPEARING,
                newCardStatus: ECardStatus.KNOWN,
            });
        })
        .addCase(WordCardWantToLearnItButtonClickAction, (state, action) => {
            WordProgressListEntityAdapter.upsertOne(state, {
                id: action.payload.word,
                
                cardState: ECardState.DISAPPEARING,
                newCardStatus: ECardStatus.ON_STUDY,
            });
        })
        .addCase(WordCardRepeatItSometimesButtonClickAction, (state, action) => {
            WordProgressListEntityAdapter.upsertOne(state, {
                id: action.payload.word,
                
                cardState: ECardState.DISAPPEARING,
                newCardStatus: ECardStatus.ON_REPEAT,
            });
        })
        .addCase(WordCardOkButtonClickAction, (state, action) => {
            WordProgressListEntityAdapter.upsertOne(state, {
                id: action.payload.word,
                
                resolution: EWordProgressResolution.SUCCESS,
                cardState: ECardState.DISAPPEARING,
            });
        })
        .addCase(WordCardRepeatItAgainLaterButtonClickAction, (state, action) => {
            WordProgressListEntityAdapter.upsertOne(state, {
                id: action.payload.word,
                
                resolution: EWordProgressResolution.REPEAT_IT_AGAIN_LATER,
                cardState: ECardState.DISAPPEARING,
            });
        })
        .addCase(WordCardNotOkButtonClickAction, (state, action) => {
            WordProgressListEntityAdapter.upsertOne(state, {
                id: action.payload.word,
                
                resolution: EWordProgressResolution.FAIL,
                cardState: ECardState.DISAPPEARING,
            });
        })
        .addCase(WordCardSkipExampleButtonClickAction, (state, action) => {
            WordProgressListEntityAdapter.upsertOne(state, {
                id: action.payload.word,
                
                cardContentState: ECardContentState.HINT_EXAMPLE_HIDDING,
            });
        })
        .addCase(WordCardExampleDisappearedAction, (state, action) => {
            WordProgressListEntityAdapter.upsertOne(state, {
                id: action.payload.word,
                
                cardContentState: ECardContentState.USER_TYPED_TEXT_INPUT_APPEARING,
            });
        })
        .addCase(WordCardUserTypedTextInputAppearedAction, (state, action) => {
            WordProgressListEntityAdapter.upsertOne(state, {
                id: action.payload.word,
                
                cardContentState: ECardContentState.USER_TYPED_TEXT_INPUT,
            });
        })
        .addCase(WordCardUserTypedWordChangeAction, (state, action) => {
            WordProgressListEntityAdapter.upsertOne(state, {
                id: action.payload.word,

                userTypedWord: action.payload.userTypedWord,
            });
        })
        .addCase(WordCardUserTypedWordSubmitAction, (state, action) => {
            const word = action.payload.word;
            const wordProgress = selector.selectById(state, word);
            const isRight = wordProgress?.userTypedWord?.trim().toLowerCase() == word;

            if (isRight) {
                WordProgressListEntityAdapter.upsertOne(state, {
                    id: action.payload.word,

                    cardContentState: ECardContentState.USER_TYPED_TEXT_INPUT_HIDDING,
                });
            } else {
                WordProgressListEntityAdapter.upsertOne(state, {
                    id: action.payload.word,

                    cardContentState: ECardContentState.USER_TYPED_TEXT_ERROR_ANIMATION,
                });
            }
        })
        .addCase(WordCardShowRightAnswerButtonClickAction, (state, action) => {
            WordProgressListEntityAdapter.upsertOne(state, {
                    id: action.payload.word,

                    cardContentState: ECardContentState.USER_TYPED_TEXT_INPUT_HIDDING,
                });
        })
        .addCase(WordCardUserTypedWordInputErrorAnimationEndAction, (state, action) => {
            WordProgressListEntityAdapter.upsertOne(state, {
                id: action.payload.word,

                cardContentState: ECardContentState.USER_TYPED_TEXT_INPUT,
            });
        })
        .addCase(WordCardUserTypedTextInputDisappearedAction, (state, action) => {
            WordProgressListEntityAdapter.upsertOne(state, {
                id: action.payload.word,

                cardContentState: ECardContentState.TEXT_WITH_EXAMPLES_APPEARING,
            });
        })
        .addCase(WordCardWordAppearedAction, (state, action) => {
            WordProgressListEntityAdapter.upsertOne(state, {
                id: action.payload.word,

                cardContentState: ECardContentState.TEXT_WITH_EXAMPLES,
            });
        })
        .addCase(AppPersistInitedAction, (state, action) => {
            // WE NEED THIS TO ADD WORDS TO THE PERSISTED STATE
            const allOfTheWords = Object.keys(WordStore.data)
            if (state.wordsCount != allOfTheWords.length) {
                allOfTheWords.forEach(word => {
                    const weHaveThisWord = state.newWordIds.indexOf(word) != -1 ||
                        !!selector.selectById(state, word);
    
                    if (!weHaveThisWord) {
                        state.newWordIds.push(word);
                    }
                });
                state.wordsCount = allOfTheWords.length;
            }
        })
        .addCase(SettingsScreenResetProgressConfirmAcceptedAction, (state, action) => {
            return getInitialState();
        });
});
