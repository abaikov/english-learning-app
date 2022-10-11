import { ECardContentState } from './ECardContentState';
import { ECardState } from './ECardState';
import { ECardStatus } from './ECardStatus';
import { ICardExample } from './ICardExample';

export interface ICardProps {
    status: ECardStatus
    state: ECardState
    contentState: ECardContentState

    text: string
    translation: string

    phonetic?: string
    level?: string

    repetitionStage: number
    rightAnswersCount: number
    wrongAnswersCount: number

    examples?: ICardExample[]
    hintExample?: string | null
    hintExampleButtonText: string
    onSkipExampleButtonClick: () => void
    onExampleDisappeared: () => void

    userTypedText?: string | null
    userTypedTextInputPlaceholder: string
    onUserTypedTextChange: (userTypedText: string) => void
    onUserTypedTextSubmit: () => void
    onShowRightAnswerButtonClick: () => void
    onUserTypedTextInputAppeared: () => void
    onUserTypedTextInputErrorAnimationEnd: () => void
    onUserTypedTextInputDisappeared: () => void

    onTextAppeared: () => void

    onShowTranslationButtonClick: () => void
    onShowTranslationButtonDisappeared: () => void
    onTranslationAppeared: () => void

    onCardAppeared: () => void
    onCardDisappeared: () => void

    onIAlreadyKnowItButtonClick: () => void
    onRepeatItSometimesButtonClick: () => void
    onWantToLearnItButtonClick: () => void
    onNotOkButtonClick: () => void
    onOkButtonClick: () => void
    onRepeatItAgainLaterButtonClick: () => void
}
