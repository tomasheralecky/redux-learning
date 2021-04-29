import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCart, updateBasketItemCount } from '../Store/actions';

const BasketProduct = (item) => {
    const dispatch = useDispatch();
    const [amount, setAmount] = useState(item.item.count);

    const handleRemoveFromCart = (itemId) => {
        dispatch(removeFromCart(itemId))
    }

    const handleWrittenAmount = (e) => {
        const value = parseInt(e.target.value);
        const formattedValue = isNaN(value) || value <= 0 ? 1 : value;
        item.item.count = formattedValue;
        dispatch(updateBasketItemCount(item.item));
    }

    const handleAmount = (sign) => {
        const value = sign === '+' ? amount + 1 : amount - 1;
        const formattedValue = value <= 0 ? 1 : value;
        item.item.count = formattedValue;
        dispatch(updateBasketItemCount(item.item));
    }

    useEffect(() => {
        setAmount(item.item.count)
    }, [item.item.count])

    return (
        <li key={item.item.id}>
            <h3>{item.item.title}</h3>
            <p>{item.item.description}</p>
            <p>{item.item.price} Kč</p>
            <p>Množství {item.item.count}</p>
            <div>
                <button onClick={() => handleAmount('+')}>+</button>
                <input type="number" value={amount} onChange={(e) => handleWrittenAmount(e)} />
                <button onClick={() => handleAmount('-')}>-</button>
            </div>
            <button onClick={() => handleRemoveFromCart(item.item.id)}>Odebrat z košíku</button>
        </li>
    );
}

export default BasketProduct;
