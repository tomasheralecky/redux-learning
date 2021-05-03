import { addToCart } from '../../store/actions';
import { useDispatch } from 'react-redux';
import React, { useState } from 'react';

export interface ProductProps {
    id: number;
    title: string;
    description: string;
    price: number;
    count: number | 0;
}

const Product = (item: ProductProps) => {
    const dispatch = useDispatch();
    const [amount, setAmount] = useState(1);

    const handleAddToCart = (item: ProductProps) => {
        dispatch(
            addToCart({
                ...item,
                count: amount,
            }),
        );
    };

    const handleWrittenAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(e.target.value);
        const formattedValue = isNaN(value) || value <= 0 ? 1 : value;
        setAmount(formattedValue);
    };

    const handleAmount = (sign: string) => {
        const value = sign === '+' ? amount + 1 : amount - 1;
        const formattedValue = value <= 0 ? 1 : value;
        setAmount(formattedValue);
    };

    return (
        <div className="product" key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <p>{item.price} Kč</p>
            <div>
                <button onClick={() => handleAmount('+')}>+</button>
                <input type="number" value={amount} onChange={(e) => handleWrittenAmount(e)} />
                <button onClick={() => handleAmount('-')}>-</button>
            </div>
            <button onClick={() => handleAddToCart(item)}>Přidat do košíku</button>
        </div>
    );
};

export default Product;
