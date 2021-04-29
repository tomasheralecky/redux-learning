import React from 'react';
import Products from './Products/Products';
import Spinner from './Spinner/Spinner';
import Basket from './Basket/Basket';

const ReduxLearning = () => {
    return (
        <>
            <Products />
            <Basket />
            {/* isLoading && <Spinner /> */}
        </>
    );
}

export default ReduxLearning;