import words from '../../../../assets/words.json';
import ruTranslations from '../../../../assets/ru-RU.json';
import { ELocaleName } from '../../locale/ELocaleName';
import { IWord } from '../type/IWord';

export class WordStore {
    static get data() {
        return words as {[word: string]: IWord};
    }

    static translationData = {
        [ELocaleName.RU]: ruTranslations
    }
}
