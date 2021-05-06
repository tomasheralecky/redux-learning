import { StoreProps } from './modules/store/store';
import { useSelector } from 'react-redux';
import BasketProduct from './modules/components/BasketProduct/BasketProduct';
import React from 'react';

const Basket = () => {
    const data = useSelector((state: StoreProps) => state.basketState.basketItems);
    const totalPrice = useSelector((state: StoreProps) => state.basketState.basketTotalPrice);

    const inline = window.location.pathname === '/basket' ? ' basket--inline' : '';

    const freeShipping =
        totalPrice >= 1500
            ? 'Dopravu máte zdarma'
            : `Do dopravy zdarma zbývá ${1500 - totalPrice} Kč`;

    const handleSubmit = () => {
        window.location.replace('/delivery-payment');
    };

    return (
        <div className={`basket${inline}`}>
            <h1>Košík</h1>
            {data.length > 0 ? (
                <>
                    <h3 className="basket__total-price">Cena celkem: {totalPrice} Kč</h3>
                    <h4 className="basket__free-shipping">{freeShipping}</h4>
                    {data.map((item, index) => (
                        <BasketProduct {...item} key={index} />
                    ))}
                </>
            ) : (
                <h3>Košík je prázdný</h3>
            )}
            {inline && (
                <div className="order-footer">
                    <a href="/basket" className="order-footer__link">
                        Zpět
                    </a>
                    <button onClick={handleSubmit} className="order-footer__link">
                        Doprava a platba
                    </button>
                </div>
            )}
        </div>
    );
};

export default Basket;
