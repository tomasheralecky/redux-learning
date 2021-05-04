import { updateInvoicingInfo } from './modules/store/actions';
import { useDispatch } from 'react-redux';

import React, { useState } from 'react';

export interface InvoicingProps {
    email: string;
    name: string;
    phone: string;
    address: string;
    city: string;
    zip: string;
}

const Invoicing = () => {
    const dispatch = useDispatch();

    const [email, setEmail] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    const [address, setAddress] = useState<string>('');
    const [city, setCity] = useState<string>('');
    const [zip, setZip] = useState<string>('');

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setEmail(value);
    };

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setName(value);
    };

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setPhone(value);
    };

    const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setAddress(value);
    };

    const handleCityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setCity(value);
    };

    const handleZipChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setZip(value);
    };

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        const output = {
            email: email,
            name: name,
            phone: phone,
            address: address,
            city: city,
            zip: zip,
        };
        dispatch(updateInvoicingInfo(output));
        window.location.replace('/summary');
    };

    return (
        <>
            <h1>Doručovací údaje</h1>
            <form>
                <div className="form__item">
                    <label>Email</label>
                    <input
                        name="email"
                        type="text"
                        value={email}
                        onChange={handleEmailChange}
                        required
                    />
                </div>
                <div className="form__item">
                    <label>Jméno a příjmení</label>
                    <input
                        name="name"
                        type="text"
                        value={name}
                        onChange={handleNameChange}
                        required
                    />
                </div>
                <div className="form__item">
                    <label>Telefon</label>
                    <input
                        name="phone"
                        type="text"
                        value={phone}
                        onChange={handlePhoneChange}
                        required
                    />
                </div>
                <div className="form__item">
                    <label>Ulice a číslo popisné</label>
                    <input
                        name="address"
                        type="text"
                        value={address}
                        onChange={handleAddressChange}
                        required
                    />
                </div>
                <div className="form__item">
                    <label>Město</label>
                    <input
                        name="city"
                        type="text"
                        value={city}
                        onChange={handleCityChange}
                        required
                    />
                </div>
                <div className="form__item">
                    <label>PSČ</label>
                    <input name="zip" type="text" value={zip} onChange={handleZipChange} required />
                </div>
                <div className="order-footer">
                    <a href="/delivery-payment" className="order-footer__link">
                        Zpět
                    </a>
                    <button onClick={handleSubmit} className="order-footer__link">
                        Shrnutí objednávky
                    </button>
                </div>
            </form>
        </>
    );
};

export default Invoicing;
