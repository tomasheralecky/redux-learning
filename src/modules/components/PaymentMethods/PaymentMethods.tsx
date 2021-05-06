import { StoreProps } from '../../store/store';
import { updatePaymentMethod } from '../../store/actions';
import { useSelector, useDispatch } from 'react-redux';
import React, { useState, useEffect } from 'react';

export interface PaymentMethodProps {
    id: string;
    label: string;
    price: number;
}

const PaymentMethods = () => {
    const dispatch = useDispatch();
    const [choosedMethod, setChoosedMethod] = useState<string>('dobirka');
    const totalPrice = useSelector((state: StoreProps) => state.basketState.basketTotalPrice);
    const freeShipping = totalPrice >= 1500;

    const paymentMethods: PaymentMethodProps[] = [
        {
            id: 'dobirka',
            label: 'Dobírka',
            price: 29,
        },
        {
            id: 'platba-online',
            label: 'Platba online',
            price: 0,
        },
        {
            id: 'payu',
            label: 'PayU',
            price: 0,
        },
        {
            id: 'twisto',
            label: 'Twisto',
            price: 0,
        },
    ];

    const handleMethodChange = (method: PaymentMethodProps) => {
        dispatch(updatePaymentMethod(freeShipping ? { ...method, price: 0 } : method));
        setChoosedMethod(method.id);
    };

    useEffect(() => {
        dispatch(
            updatePaymentMethod(
                freeShipping ? { ...paymentMethods[0], price: 0 } : paymentMethods[0],
            ),
        );
    }, []);

    return (
        <fieldset>
            {paymentMethods.map((method) => (
                <div className="radio__wrapper" key={method.id}>
                    <input
                        onChange={() => handleMethodChange(method)}
                        className={`radio${method.id === choosedMethod ? ' radio--checked' : ''}`}
                        checked={method.id === choosedMethod}
                        type="radio"
                        id={method.id}
                        name="payment"
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

export default PaymentMethods;
