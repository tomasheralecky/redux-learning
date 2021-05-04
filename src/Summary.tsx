import { StoreProps } from './modules/store/store';
import { useSelector } from 'react-redux';
import React from 'react';

const Summary = () => {
    const store = useSelector((state: StoreProps) => state);

    const handleSubmit = () => {
        window.location.replace('/confirmation');
    };

    return (
        <>
            <h1>Shrnutí objednávky</h1>
            <div>
                <h2>Produkty</h2>
                <ul>
                    {store.basketState.basketItems.map((item) => (
                        <li key={item.id}>
                            <p>{item.title}</p>
                            <p>{item.description}</p>
                            <p>
                                Cena za kus: <u>{item.price} Kč</u>
                            </p>
                            <p>
                                Počet: <u>{item.count}</u>
                            </p>
                            <p>
                                Price total: <u>{item.price * item.count} Kč</u>
                            </p>
                        </li>
                    ))}
                </ul>
                <h3>
                    Celková cena: <u>{store.basketState.basketTotalPrice} Kč</u>
                </h3>
            </div>
            <div>
                <h2>Doprava a platba</h2>
                <p>Doprava: {store.deliveryPaymentState.delivery.label}</p>
                <p>Platba: {store.deliveryPaymentState.payment.label}</p>
            </div>
            <div>
                <h2>Doručovací údaje</h2>
                <p>{store.invoicingState.invoicing.email}</p>
                <p>{store.invoicingState.invoicing.name}</p>
                <p>{store.invoicingState.invoicing.phone}</p>
                <p>{store.invoicingState.invoicing.address}</p>
                <p>{store.invoicingState.invoicing.city}</p>
                <p>{store.invoicingState.invoicing.zip}</p>
            </div>
            <div className="order-footer">
                <a href="/delivery-payment" className="order-footer__link">
                    Zpět
                </a>
                <button onClick={handleSubmit} className="order-footer__link">
                    Odeslat objednávku
                </button>
            </div>
        </>
    );
};

export default Summary;
