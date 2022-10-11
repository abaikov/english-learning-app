import { ISettings } from '../../modules/settings/type/ISettings';
import { IWordProgressList } from '../../modules/word/type/IWordProgressList';

export interface IStoreState {
    wordProgressList: IWordProgressList
    settings: ISettings
}
