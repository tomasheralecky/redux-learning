import { ADD_TO_CART, REMOVE_FROM_CART, UPDATE_BASKET_ITEM_COUNT } from './actionTypes';
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
