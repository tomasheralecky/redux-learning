import { orderConfirmation } from './modules/store/actions';
import { useDispatch } from 'react-redux';
import React from 'react';

const Confirmation = () => {
    const dispatch = useDispatch();
    dispatch(orderConfirmation());
    const redirectToHp = () => {
        window.location.replace('/');
    };

    return (
        <>
            <h1>Děkujeme za vaši objednávku</h1>
            <button onClick={redirectToHp}>Zpět na hlavní stránku</button>
        </>
    );
};

export default Confirmation;
