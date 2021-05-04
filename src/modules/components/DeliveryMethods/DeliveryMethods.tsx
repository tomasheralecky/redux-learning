import { updateDeliveryMethod } from '../../store/actions';
import { useDispatch } from 'react-redux';
import React, { useState } from 'react';

export interface DeliveryMethodProps {
    id: string;
    label: string;
}

const DeliveryMethods = () => {
    const dispatch = useDispatch();
    const [choosedMethod, setChoosedMethod] = useState<string>('osobni-odber');

    const deliveryMethods: DeliveryMethodProps[] = [
        {
            id: 'osobni-odber',
            label: 'Osobní odběr',
        },
        {
            id: 'ceska-posta',
            label: 'Česká pošta',
        },
        {
            id: 'dpd',
            label: 'DPD',
        },
        {
            id: 'zasilkovna',
            label: 'Zásilkovna',
        },
    ];

    dispatch(updateDeliveryMethod(deliveryMethods[0]));

    const handleMethodChange = (e: React.ChangeEvent<HTMLInputElement>, label: string) => {
        const value = e.target.value;
        const selectedMethod = {
            id: value,
            label: label,
        };
        dispatch(updateDeliveryMethod(selectedMethod));
        setChoosedMethod(value);
    };

    return (
        <fieldset>
            {deliveryMethods.map((method) => (
                <div className="radio__wrapper" key={method.id}>
                    <input
                        onChange={(e) => handleMethodChange(e, method.label)}
                        className={`radio${method.id === choosedMethod ? ' radio--checked' : ''}`}
                        checked={method.id === choosedMethod}
                        type="radio"
                        id={method.id}
                        name="delivery"
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

export default DeliveryMethods;
