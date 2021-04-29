import { ADD_TO_CART, REMOVE_FROM_CART, UPDATE_BASKET_ITEM_COUNT } from './actionTypes';

export const addToCart = item => ({
    type: ADD_TO_CART,
    payload: item
})

export const removeFromCart = itemId => ({
    type: REMOVE_FROM_CART,
    payload: itemId
})

export const updateBasketItemCount = item => ({
    type: UPDATE_BASKET_ITEM_COUNT,
    payload: item
})
