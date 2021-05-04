import DeliveryMethods from './modules/components/DeliveryMethods/DeliveryMethods';
import PaymentMethods from './modules/components/PaymentMethods/PaymentMethods';
import React from 'react';

const DeliveryPayment = () => {
    const handleSubmit = () => {
        window.location.replace('/invoicing');
    };

    return (
        <>
            <h1>Doprava a platba</h1>
            <DeliveryMethods />
            <PaymentMethods />
            <div className="order-footer">
                <a href="/basket" className="order-footer__link">
                    Zpět
                </a>
                <button onClick={handleSubmit} className="order-footer__link">
                    Fakturační údaje
                </button>
            </div>
        </>
    );
};

export default DeliveryPayment;
