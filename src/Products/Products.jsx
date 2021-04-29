import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Product from '../Product/Product';

const Products = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/products').then((response) => {
            setData(response.data)
        })
    }, [])

    return (
        <div className="products">
            {data.map((item) => (
                <Product item={item} key={item.id} />
            ))}
        </div>
    );
}

export default Products;
