import { ADD_TO_CART, REMOVE_FROM_CART, UPDATE_BASKET_ITEM_COUNT } from './actionTypes';

const initState = {
    basketItems: [],
    basketTotalPrice: 0,
}

const handleBasketTotalPrice = (items) => {
    let totalPrice = 0;
    items.forEach((item) => {
        const price = item.count * item.price;
        totalPrice += price;
    })
    return totalPrice;
}

const handleAddToCart = (state, payload) => {
    const sameItem = state.basketItems.some(item => item.id === payload.id);
    if (sameItem) {
        const filtered = state.basketItems.map((item) => {
            if (item.id === payload.id) {
                return {
                    ...item,
                    count: item.count + payload.count
                }
            }
            return item;
        })
        return {
            ...state,
            basketItems: filtered,
            basketTotalPrice: handleBasketTotalPrice(filtered)
        }
    }
    return {
        ...state,
        basketItems: [...state.basketItems, payload],
        basketTotalPrice: handleBasketTotalPrice([...state.basketItems, payload])
    }
}

const handleRemoveFromCart = (state, payload) => {
    const filtered = state.basketItems.filter(basketItem => basketItem.id !== payload);
    return {
        ...state,
        basketItems: filtered,
        basketTotalPrice: handleBasketTotalPrice(filtered)
    }
}

const handleUpdateBasketItemCount = (state, payload) => {
    const filtered = state.basketItems.filter(basketItem => basketItem.id === payload.id ? payload : basketItem);
    return {
        ...state,
        basketItems: filtered,
        basketTotalPrice: handleBasketTotalPrice(filtered)
    }
}

export default function reducer(state = initState, action) {
    switch(action.type) {
        case ADD_TO_CART:
            return handleAddToCart(state, action.payload);
        case REMOVE_FROM_CART:
            return handleRemoveFromCart(state, action.payload);
        case UPDATE_BASKET_ITEM_COUNT:
            return handleUpdateBasketItemCount(state, action.payload);
        default:
            return state;
    };
}
