import { StoreProps } from '../../store/store';
import { useSelector } from 'react-redux';
import React, { useState, useEffect } from 'react';

const BasketItemsCount = () => {
    const data = useSelector((state: StoreProps) => state.basketState.basketItems);
    const [basketItemsCount, setBasketItemsCount] = useState<number>(0);

    const handleBasketItemsCount = () => {
        let count = 0;
        data.forEach((item) => {
            count += item.count;
        });

        setBasketItemsCount(count);
    };

    useEffect(() => {
        handleBasketItemsCount();
    }, [data]);

    return <p>{basketItemsCount}</p>;
};

export default BasketItemsCount;
