import { ECardContentState } from '../../../components/card/type/ECardContentState';
import { ECardState } from '../../../components/card/type/ECardState';
import { ECardStatus } from '../../../components/card/type/ECardStatus';
import { ICardExample } from '../../../components/card/type/ICardExample';
import { EWordProgressResolution } from './EWordProgressResolution';

export interface IWordProgress {
    id: string,

    cardState: ECardState
    cardStatus: ECardStatus
    newCardStatus?: ECardStatus | null
    cardContentState: ECardContentState

    userTypedWord?: string | null
    resolution?: EWordProgressResolution | null
    examples?: ICardExample[] 
    hintExample?: string | null


    repetitionCountInTheSameStage?: number | null
    /** current repetition interval index from schedule - 1 */
    currentRepetitionStageIndex?: number | null
    /** unix time in ms */
    initialRepetitionStageAt?: number
    /** unix time in ms */
    lastRepetitionCheckpointAt?: number
}
