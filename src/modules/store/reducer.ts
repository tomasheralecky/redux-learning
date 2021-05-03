import { ADD_TO_CART, REMOVE_FROM_CART, UPDATE_BASKET_ITEM_COUNT } from './actionTypes';
import { PayloadAction } from '@reduxjs/toolkit';
import { ProductProps } from '../components/Product/Product';

export interface InitStateProps {
    basketItems: ProductProps[];
    basketTotalPrice: number;
}

const InitState: InitStateProps = {
    basketItems: [],
    basketTotalPrice: 0,
};

const handleBasketTotalPrice = (items: ProductProps[]) => {
    let totalPrice = 0;
    items.forEach((item) => {
        const price = item.count * item.price;
        totalPrice += price;
    });
    return totalPrice;
};

const handleAddToCart = (state: InitStateProps, payload: ProductProps) => {
    const sameItem = state.basketItems.some((item) => item.id === payload.id);
    if (sameItem) {
        const filtered = state.basketItems.map((item) => {
            if (item.id === payload.id) {
                return {
                    ...item,
                    count: item.count + payload.count,
                };
            }
            return item;
        });
        return {
            ...state,
            basketItems: filtered,
            basketTotalPrice: handleBasketTotalPrice(filtered),
        };
    }
    return {
        ...state,
        basketItems: [...state.basketItems, payload],
        basketTotalPrice: handleBasketTotalPrice([...state.basketItems, payload]),
    };
};

const handleRemoveFromCart = (state: InitStateProps, payload: ProductProps) => {
    const filtered = state.basketItems.filter((basketItem) => basketItem.id !== payload.id);
    return {
        ...state,
        basketItems: filtered,
        basketTotalPrice: handleBasketTotalPrice(filtered),
    };
};

const handleUpdateBasketItemCount = (state: InitStateProps, payload: ProductProps) => {
    const filtered = state.basketItems.map((item) => {
        if (item.id === payload.id) {
            return {
                ...item,
                count: payload.count,
            };
        }
        return item;
    });

    return {
        ...state,
        basketItems: filtered,
        basketTotalPrice: handleBasketTotalPrice(filtered),
    };
};

export default function reducer(state = InitState, action: PayloadAction<ProductProps>) {
    switch (action.type) {
        case ADD_TO_CART:
            return handleAddToCart(state, action.payload);
        case REMOVE_FROM_CART:
            return handleRemoveFromCart(state, action.payload);
        case UPDATE_BASKET_ITEM_COUNT:
            return handleUpdateBasketItemCount(state, action.payload);
        default:
            return state;
    }
}
