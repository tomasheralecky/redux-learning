import { updatePaymentMethod } from '../../store/actions';
import { useDispatch } from 'react-redux';
import React, { useState } from 'react';

export interface PaymentMethodProps {
    id: string;
    label: string;
}

const PaymentMethods = () => {
    const dispatch = useDispatch();
    const [choosedMethod, setChoosedMethod] = useState<string>('dobirka');

    const paymentMethods: PaymentMethodProps[] = [
        {
            id: 'dobirka',
            label: 'Dobírka',
        },
        {
            id: 'platba-online',
            label: 'Platba online',
        },
        {
            id: 'payu',
            label: 'PayU',
        },
        {
            id: 'twisto',
            label: 'Twisto',
        },
    ];

    dispatch(updatePaymentMethod(paymentMethods[0]));

    const handleMethodChange = (e: React.ChangeEvent<HTMLInputElement>, label: string) => {
        const value = e.target.value;
        const selectedMethod = {
            id: value,
            label: label,
        };
        dispatch(updatePaymentMethod(selectedMethod));
        setChoosedMethod(value);
    };

    return (
        <fieldset>
            {paymentMethods.map((method) => (
                <div className="radio__wrapper" key={method.id}>
                    <input
                        onChange={(e) => handleMethodChange(e, method.label)}
                        className={`radio${method.id === choosedMethod ? ' radio--checked' : ''}`}
                        checked={method.id === choosedMethod}
                        type="radio"
                        id={method.id}
                        name="payment"
                        value={method.id}
                    />
                    <label className="radio__label" htmlFor={method.id}>
                        {method.label}
                    </label>
                </div>
            ))}
        </fieldset>
    );
};

export default PaymentMethods;
