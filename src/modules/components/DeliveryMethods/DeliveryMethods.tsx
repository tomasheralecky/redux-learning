import { StoreProps } from '../../store/store';
import { updateDeliveryMethod } from '../../store/actions';
import { useSelector, useDispatch } from 'react-redux';
import React, { useState, useEffect } from 'react';

export interface DeliveryMethodProps {
    id: string;
    label: string;
    price: number;
}

const DeliveryMethods = () => {
    const dispatch = useDispatch();
    const [choosedMethod, setChoosedMethod] = useState<string>('osobni-odber');
    const totalPrice = useSelector((state: StoreProps) => state.basketState.basketTotalPrice);
    const freeShipping = totalPrice >= 1500;

    const deliveryMethods: DeliveryMethodProps[] = [
        {
            id: 'osobni-odber',
            label: 'Osobní odběr',
            price: 0,
        },
        {
            id: 'ceska-posta',
            label: 'Česká pošta',
            price: 99,
        },
        {
            id: 'dpd',
            label: 'DPD',
            price: 79,
        },
        {
            id: 'zasilkovna',
            label: 'Zásilkovna',
            price: 49,
        },
    ];

    const handleMethodChange = (method: DeliveryMethodProps) => {
        dispatch(updateDeliveryMethod(freeShipping ? { ...method, price: 0 } : method));
        setChoosedMethod(method.id);
    };

    useEffect(() => {
        dispatch(
            updateDeliveryMethod(
                freeShipping ? { ...deliveryMethods[0], price: 0 } : deliveryMethods[0],
            ),
        );
    }, []);

    return (
        <fieldset>
            {deliveryMethods.map((method) => (
                <div className="radio__wrapper" key={method.id}>
                    <input
                        onChange={() => handleMethodChange(method)}
                        className={`radio${method.id === choosedMethod ? ' radio--checked' : ''}`}
                        checked={method.id === choosedMethod}
                        type="radio"
                        id={method.id}
                        name="delivery"
                        value={method.id}
                    />
                    <label className="radio__label" htmlFor={method.id}>
                        {method.label} -{' '}
                        {freeShipping || method.price === 0 ? 'ZDARMA' : `${method.price} Kč`}
                    </label>
                </div>
            ))}
        </fieldset>
    );
};

export default DeliveryMethods;
