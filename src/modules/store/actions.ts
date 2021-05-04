import {
    ADD_TO_CART,
    REMOVE_FROM_CART,
    UPDATE_BASKET_ITEM_COUNT,
    UPDATE_DELIVERY_METHOD,
    UPDATE_PAYMENT_METHOD,
    UPDATE_INVOICING_INFO,
    ORDER_CONFIRMATION,
} from './actionTypes';
import { DeliveryMethodProps } from '../components/DeliveryMethods/DeliveryMethods';
import { InvoicingProps } from '../../Invoicing';
import { PaymentMethodProps } from '../components/PaymentMethods/PaymentMethods';
import { ProductProps } from '../components/Product/Product';

export const addToCart = (item: ProductProps) => ({
    type: ADD_TO_CART,
    payload: item,
});

export const removeFromCart = (item: ProductProps) => ({
    type: REMOVE_FROM_CART,
    payload: item,
});

export const updateBasketItemCount = (item: ProductProps) => ({
    type: UPDATE_BASKET_ITEM_COUNT,
    payload: item,
});

export const updateDeliveryMethod = (delivery: DeliveryMethodProps) => ({
    type: UPDATE_DELIVERY_METHOD,
    payload: delivery,
});

export const updatePaymentMethod = (payment: PaymentMethodProps) => ({
    type: UPDATE_PAYMENT_METHOD,
    payload: payment,
});

export const updateInvoicingInfo = (invoicing: InvoicingProps) => ({
    type: UPDATE_INVOICING_INFO,
    payload: invoicing,
});

export const orderConfirmation = () => ({
    type: ORDER_CONFIRMATION,
});
