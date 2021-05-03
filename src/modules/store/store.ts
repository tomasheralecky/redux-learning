import { configureStore } from '@reduxjs/toolkit';
import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import reducer from './reducer';

import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, reducer);

let devTools = false;
try {
    devTools = process.env.NODE_ENV === 'development';
} catch (error) {
    devTools = false;
}

export const store = configureStore({
    reducer: persistedReducer,
    devTools,
});

export const persistor = persistStore(store);
