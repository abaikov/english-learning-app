import AsyncStorage from '@react-native-community/async-storage';
import persistReducer from 'redux-persist/es/persistReducer';
import { WordProgressListReducer } from './WordProgressListReducer';


export const WordProgressListPersistedReducer = persistReducer(
    {
        key: 'WordProgressList',
        storage: AsyncStorage
    },
    WordProgressListReducer
)
