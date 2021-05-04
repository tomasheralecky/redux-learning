import { InvoicingProps } from '../../Invoicing';
import { PayloadAction } from '@reduxjs/toolkit';
import { UPDATE_INVOICING_INFO, ORDER_CONFIRMATION } from './actionTypes';

export interface InvoicingStateProps {
    invoicing: InvoicingProps;
}

export const InitState: InvoicingStateProps = {
    invoicing: {
        email: '',
        name: '',
        phone: '',
        address: '',
        city: '',
        zip: '',
    },
};

const handleUpdateInvoicingInfo = (state: InvoicingStateProps, payload: InvoicingProps) => {
    return {
        ...state,
        invoicing: payload,
    };
};

export default function invoicingReducer(state = InitState, action: PayloadAction<InvoicingProps>) {
    switch (action.type) {
        case UPDATE_INVOICING_INFO:
            return handleUpdateInvoicingInfo(state, action.payload);
        case ORDER_CONFIRMATION:
            return {
                ...state,
                invoicing: InitState.invoicing,
            };
        default:
            return state;
    }
}
