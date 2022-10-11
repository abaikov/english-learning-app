import { configureStore } from '@reduxjs/toolkit';
import { SettingsReducer } from '../modules/settings/redux/SettingsReducer';
import { WordProgressListPersistedReducer } from '../modules/word/redux/WordProgressListPersistedReducer';
import { IStoreState } from './type/IStoreState';

export class ReduxStoreFactory {
    static createStore() {
        return configureStore({
            reducer: {
                wordProgressList: WordProgressListPersistedReducer,
                settings: SettingsReducer,
            },
            middleware: (getDefaultMiddleware) => getDefaultMiddleware({
                // for redux-persist
                serializableCheck: false,
                // for large state
                immutableCheck: false, 
            }),
        })
    }
}
