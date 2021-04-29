import React from 'react';
import { useSelector } from 'react-redux';
import BasketProduct from '../BasketProduct/BasketProduct';

const Basket = () => {
    const data = useSelector(state => state.basketItems);
    const totalPrice = useSelector(state => state.basketTotalPrice);

    return (
        <div className="basket">
            <h1>Košík</h1>
            {data.length > 0 ? (
                <>
                    <h3>Cena celkem: {totalPrice} Kč</h3>
                    {data.map((item) => (
                        <BasketProduct item={item} key={item.id} />
                    ))}
                </>
            ) : (
                <h3>Košík je prázdný</h3>
            )}
        </div>
    );
}

export default Basket;
