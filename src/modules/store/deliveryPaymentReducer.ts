import { DeliveryMethodProps } from '../components/DeliveryMethods/DeliveryMethods';
import { PayloadAction } from '@reduxjs/toolkit';
import { PaymentMethodProps } from '../components/PaymentMethods/PaymentMethods';
import { UPDATE_DELIVERY_METHOD, UPDATE_PAYMENT_METHOD, ORDER_CONFIRMATION } from './actionTypes';

export interface DeliveryPaymentStateProps {
    delivery: DeliveryMethodProps;
    payment: PaymentMethodProps;
}

export const InitState: DeliveryPaymentStateProps = {
    delivery: { id: '', label: '' },
    payment: { id: '', label: '' },
};

const handleUpdateDeliveryMethod = (
    state: DeliveryPaymentStateProps,
    payload: DeliveryMethodProps,
) => {
    return {
        ...state,
        delivery: payload,
    };
};

const handleUpdatePaymentMethod = (
    state: DeliveryPaymentStateProps,
    payload: DeliveryMethodProps,
) => {
    return {
        ...state,
        payment: payload,
    };
};

export default function deliveryPaymentReducer(
    state = InitState,
    action: PayloadAction<DeliveryMethodProps | PaymentMethodProps>,
) {
    switch (action.type) {
        case UPDATE_DELIVERY_METHOD:
            return handleUpdateDeliveryMethod(state, action.payload);
        case UPDATE_PAYMENT_METHOD:
            return handleUpdatePaymentMethod(state, action.payload);
        case ORDER_CONFIRMATION:
            return {
                ...state,
                delivery: InitState.delivery,
                payment: InitState.payment,
            };
        default:
            return state;
    }
}
