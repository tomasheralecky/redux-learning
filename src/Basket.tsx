import { InitStateProps } from './modules/store/reducer';
import { useSelector } from 'react-redux';
import BasketProduct from './modules/components/BasketProduct/BasketProduct';
import React from 'react';

const Basket = () => {
    const data = useSelector((state: InitStateProps) => state.basketItems);
    const totalPrice = useSelector((state: InitStateProps) => state.basketTotalPrice);

    return (
        <div className="basket">
            <h1>Košík</h1>
            {data.length > 0 ? (
                <>
                    <h3>Cena celkem: {totalPrice} Kč</h3>
                    {data.map((item, index) => (
                        <BasketProduct {...item} key={index} />
                    ))}
                </>
            ) : (
                <h3>Košík je prázdný</h3>
            )}
        </div>
    );
};

export default Basket;
