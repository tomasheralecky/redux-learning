import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../Store/actions';

const Product = (item) => {
    const dispatch = useDispatch();
    const [amount, setAmount] = useState(1);

    const handleAddToCart = item => {
        dispatch(addToCart(item));
    }

    const handleWrittenAmount = (e) => {
        const value = parseInt(e.target.value);
        const formattedValue = isNaN(value) || value <= 0 ? 1 : value;
        setAmount(formattedValue);
    }

    const handleAmount = (sign) => { 
        const value = sign === '+' ? amount + 1 : amount - 1;
        const formattedValue = value <= 0 ? 1 : value;
        setAmount(formattedValue);
    }

    useEffect(() => {
        item.item.count = amount;
    }, [amount, item.item]);

    return (
        <div className="product" key={item.item.id}>
            <h3>{item.item.title}</h3>
            <p>{item.item.description}</p>
            <p>{item.item.price} Kč</p>
            <div>
                <button onClick={() => handleAmount('+')}>+</button>
                <input type="number" value={amount} onChange={(e) => handleWrittenAmount(e)} />
                <button onClick={() => handleAmount('-')}>-</button>
            </div>
            <button onClick={() => handleAddToCart(item.item)}>Přidat do košíku</button>
        </div>
    );
}

export default Product;
