import Product from './modules/components/Product/Product';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Products = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/products').then((response) => {
            setData(response.data);
        });
    }, []);

    return (
        <div className="products">
            {data.map((item, index) => (
                <Product {...item} key={index} />
            ))}
        </div>
    );
};

export default Products;
