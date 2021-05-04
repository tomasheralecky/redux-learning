import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import basketReducer, { BasketStateProps } from './basketReducer';
import deliveryPaymentReducer, { DeliveryPaymentStateProps } from './deliveryPaymentReducer';
import invoicingReducer, { InvoicingStateProps } from './invoicingReducer';

import storage from 'redux-persist/lib/storage';

export interface StoreProps {
    basketState: BasketStateProps;
    deliveryPaymentState: DeliveryPaymentStateProps;
    invoicingState: InvoicingStateProps;
}

const rootReducer = combineReducers({
    basketState: basketReducer,
    deliveryPaymentState: deliveryPaymentReducer,
    invoicingState: invoicingReducer,
});

const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

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
