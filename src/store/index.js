import React from 'react'
import { combineReducers, createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { authReducer } from './auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
const persistConfig = {
    storage: AsyncStorage,
    key: 'root',
}
   
const rootReducer = combineReducers({
    auth: persistReducer(persistConfig, authReducer)
});

const rootStore = createStore(rootReducer)
const persisTor = persistStore(rootStore);

export {
    rootStore,
    persisTor
};