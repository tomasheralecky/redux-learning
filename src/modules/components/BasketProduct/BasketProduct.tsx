import { ProductProps } from '../Product/Product';
import { removeFromCart, updateBasketItemCount } from '../../store/actions';
import { useDispatch } from 'react-redux';
import React, { useState, useEffect } from 'react';

const BasketProduct = (item: ProductProps) => {
    const dispatch = useDispatch();
    const [amount, setAmount] = useState(item.count);

    const handleRemoveFromCart = (item: ProductProps) => {
        dispatch(removeFromCart(item));
    };

    const handleWrittenAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(e.target.value);
        const formattedValue = isNaN(value) || value <= 0 ? 1 : value;
        dispatch(
            updateBasketItemCount({
                ...item,
                count: formattedValue,
            }),
        );
    };

    const handleAmount = (sign: string) => {
        const value = sign === '+' ? amount + 1 : amount - 1;
        const formattedValue = value <= 0 ? 1 : value;
        dispatch(
            updateBasketItemCount({
                ...item,
                count: formattedValue,
            }),
        );
    };

    useEffect(() => {
        setAmount(item.count);
    }, [item.count]);

    return (
        <li className="basket__product" key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <p>{item.price} Kč</p>
            <p>Množství {item.count}</p>
            <div>
                <button onClick={() => handleAmount('+')}>+</button>
                <input type="number" value={amount} onChange={(e) => handleWrittenAmount(e)} />
                <button onClick={() => handleAmount('-')}>-</button>
            </div>
            <button onClick={() => handleRemoveFromCart(item)}>Odebrat z košíku</button>
        </li>
    );
};

export default BasketProduct;
