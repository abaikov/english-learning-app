import { EPartOfSpeach } from './EPartOfSpeach';
import { IWordDefinition } from './IWordDefinition';

export interface IWordMeaning {
    partOfSpeech: EPartOfSpeach,
    definitions: IWordDefinition[]
}
