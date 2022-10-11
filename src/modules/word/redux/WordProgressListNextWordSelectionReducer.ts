import { ECardStatus } from '../../../components/card/type/ECardStatus';
import { IWordProgressList } from '../type/IWordProgressList';
import { WordProgressListEntityAdapter } from './WordProgressListEntityAdapter';
import { sample, remove, upperFirst } from 'lodash';
import { ECardState } from '../../../components/card/type/ECardState';
import { ECardContentState } from '../../../components/card/type/ECardContentState';
import { EWordProgressResolution } from '../type/EWordProgressResolution';
import { WordStore } from '../lib/WordStore';
import { ICardExample } from '../../../components/card/type/ICardExample';
import { WordProgressDefaultRepetitionSchedule } from '../lib/WordProgressDefaultRepetitionSchedule';

const selector = WordProgressListEntityAdapter.getSelectors();

export class WordProgressListNextWordSelectionReducer {
    static getExamplesForWord(word: string) {
        const examples: ICardExample[] = [];
        WordStore.data[word].meanings.forEach(meaning => {
            meaning.definitions.forEach(defenition => {
                if (defenition.example) {
                    examples.push({
                        title: `${upperFirst(meaning.partOfSpeech)}: ${upperFirst(defenition.definition)}`,
                        text: upperFirst(defenition.example)
                    });
                } else {
                    examples.push({
                        title: `${upperFirst(meaning.partOfSpeech)}: ${upperFirst(defenition.definition)}`
                    });
                }
            })
        });
        return examples;
    }

    static getHintExample(word: string) {
        const examples = WordProgressListNextWordSelectionReducer.getExamplesForWord(word)
            .filter(example => !!example.text);
        return !!examples.length ? sample(examples).text : null;
    }

    static selectNewWord(state: IWordProgressList) {
        if (state.newWordIds.length) {
            // If we have any words with undefined status
            state.currentWord = sample(state.newWordIds);
            remove(state.newWordIds, w => w == state.currentWord);
        } else {
            // else we get the first word from learned (aka memorized)
            // words array 
            state.currentWord = state.learnedWordIds[0];
            remove(state.learnedWordIds, w => w == state.currentWord);
        }
    }

    static reduce(state: IWordProgressList, word: string) {
        // scratch for persist storage, will removed later
        state.orderedCurrentRepetitionWordIds = state.orderedCurrentRepetitionWordIds || [];

        const now = Date.now();
        remove(state.currentRepetitionWordIds, (w) => w == word);

        const schedule = WordProgressDefaultRepetitionSchedule;

        // fulfill current words repetition array
        const wordsOnRepetitionForCurrentRepetition = remove(state.waitingForRepetitionWordIds, (word) => {
            const wordProgress = selector.selectById(state, word);
            const lastRepetition = wordProgress?.lastRepetitionCheckpointAt || 0;
            const currentRepetitionCheckpoint = schedule[
                (wordProgress?.currentRepetitionStageIndex || 0)
            ];

            return now > lastRepetition + currentRepetitionCheckpoint.interval
        })

        if (wordsOnRepetitionForCurrentRepetition.length) {
            state.currentRepetitionWordIds = state.currentRepetitionWordIds.concat(
                wordsOnRepetitionForCurrentRepetition
            );
        }

        // select next word
        const wordProgress = selector.selectById(state, word);
        const cardStatus = wordProgress?.newCardStatus || wordProgress?.cardStatus;
        const currentRepetitionWordsCount = state.currentRepetitionWordIds.length;
        

        if (cardStatus == ECardStatus.KNOWN) {
            // we will show new words until user finds unknown word
            WordProgressListNextWordSelectionReducer.selectNewWord(state);
        } else {
            const orderedWord = state.orderedCurrentRepetitionWordIds.splice(0,1)[0];
            if (!!orderedWord) {
                state.currentWord = orderedWord;
            } else if (currentRepetitionWordsCount < 5) {
                // there are too few words in the current repetition array
                // so we must select our next word from the new words array
                WordProgressListNextWordSelectionReducer.selectNewWord(state);
            } else if (currentRepetitionWordsCount > 10) {
                // there are too many words in the current repetition array
                // so we must select our next word form this array
                state.currentWord = state.currentRepetitionWordIds[0];
                remove(state.currentRepetitionWordIds, w => w == state.currentWord);
            } else {
                // else - we can select our next word randomly
                if (Math.random() > 0.5) {
                    state.currentWord = state.currentRepetitionWordIds[0];
                    remove(state.currentRepetitionWordIds, w => w == state.currentWord);
                } else {
                    WordProgressListNextWordSelectionReducer.selectNewWord(state);
                }
            }
        }

        //init next word
        const nextWordProgress = selector.selectById(state, state.currentWord);
        const nextWordStageIndex = Math.min(
            nextWordProgress?.currentRepetitionStageIndex || 0, 
            schedule.length - 1
        );
        const nextWordStage = schedule[nextWordStageIndex];
        const examples: ICardExample[] = WordProgressListNextWordSelectionReducer.getExamplesForWord(
                state.currentWord
            );
        const nextWordNeedsHint = (
            nextWordStage.hintEnabled &&
            ((nextWordProgress?.repetitionCountInTheSameStage || 0) == 0)
        );
        const hintExample = nextWordNeedsHint
            ? WordProgressListNextWordSelectionReducer.getHintExample(
                state.currentWord
            ) 
            : null;
        
        WordProgressListEntityAdapter.upsertOne(state, {
            id: state.currentWord,

            cardState: ECardState.APPEARING,
            cardContentState: (nextWordProgress?.cardStatus == ECardStatus.UNDEFINED || !nextWordProgress?.cardStatus) 
                ? ECardContentState.TEXT_ONLY
                : hintExample 
                    ? ECardContentState.HINT_EXAMPLE
                    : ECardContentState.USER_TYPED_TEXT_INPUT,
            cardStatus: nextWordProgress?.cardStatus || ECardStatus.UNDEFINED,
            
            resolution: null,
            userTypedWord: null,
            repetitionCountInTheSameStage: nextWordProgress?.repetitionCountInTheSameStage || 0,
            currentRepetitionStageIndex: nextWordProgress?.currentRepetitionStageIndex || 0,
            examples,
            hintExample,
        });

        // update current word
        const prevStageIndex = Math.min(
            wordProgress?.currentRepetitionStageIndex || 0, 
            schedule.length - 1
        );
        const newRepetitionCount = wordProgress?.resolution == EWordProgressResolution.SUCCESS
                ? (wordProgress?.repetitionCountInTheSameStage || 0) + 
                    ((
                        wordProgress?.hintExample || 
                        prevStageIndex == 0
                    ) ? 1 : 2)
                : 0;
        const currentStage = schedule[prevStageIndex];
        const repetitionMaxCountForStage = (prevStageIndex == 0 || currentStage.hintEnabled)
            ? 2
            : 1;
        const currentRepetitionStageIndex = wordProgress?.resolution == EWordProgressResolution.SUCCESS
                ? newRepetitionCount >= repetitionMaxCountForStage
                    ? (wordProgress?.currentRepetitionStageIndex || 0) + 
                        (wordProgress?.cardStatus == ECardStatus.ON_REPEAT ? 2 : 1)
                    : (wordProgress?.currentRepetitionStageIndex || 0)
                : wordProgress?.resolution == EWordProgressResolution.REPEAT_IT_AGAIN_LATER
                    ? wordProgress?.currentRepetitionStageIndex || 0
                    : 0;
        
        if (cardStatus == ECardStatus.KNOWN) {
            state.knownWordIds.push(word);
        } else if (newRepetitionCount >= repetitionMaxCountForStage) {
            if (currentRepetitionStageIndex >= schedule.length) {
                state.learnedWordIds.push(word);
            } else {
                state.waitingForRepetitionWordIds.push(word);
            }
        } else if (newRepetitionCount == 0 && currentRepetitionStageIndex == 0) {
            state.orderedCurrentRepetitionWordIds[2] = word;
        } else {
            state.currentRepetitionWordIds.push(word);
        }

        WordProgressListEntityAdapter.upsertOne(state, {
            id: word,
            
            newCardStatus: null,
            cardStatus,
            userTypedWord: null,
            resolution: null,

            repetitionCountInTheSameStage: newRepetitionCount % repetitionMaxCountForStage,
            currentRepetitionStageIndex,
            initialRepetitionStageAt: wordProgress?.initialRepetitionStageAt || now,
            lastRepetitionCheckpointAt: (
                wordProgress?.resolution == EWordProgressResolution.SUCCESS &&
                newRepetitionCount >= repetitionMaxCountForStage
            )
                ? now
                : wordProgress?.lastRepetitionCheckpointAt
        });
    }
}
