import BasketItemsCount from '../BasketItemsCount/BasketItemsCount';
import React from 'react';

const Header = () => {
    return (
        <div className="header">
            <a href="/" className="header__item">
                Home
            </a>
            <a href="/basket" className="header__item">
                Basket
            </a>
            <div className="header__items-count">
                <BasketItemsCount />
            </div>
        </div>
    );
};

export default Header;
