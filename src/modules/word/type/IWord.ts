import { EWordLevel } from './EWordLevel';
import { IWordMeaning } from './IWordMeaning';

export interface IWord {
    word: string;
    phonetic: string;
    origin: string;
    meanings: IWordMeaning[];
    level: EWordLevel;
}
