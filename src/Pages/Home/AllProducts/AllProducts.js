import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

const AllProducts = () => {

    const [allProducts, setAllProducts] = useState([]);

    useEffect(() => {

        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => {
                console.log(json);
                setAllProducts(json);
            })

    }, [])

    return (
        <div>
            <h2>All Products</h2>
            <div className='grid grid-cols-2 gap-5'>
                {
                    allProducts.map(product => <ProductCard
                        key={product.id}
                        product={product}
                    ></ProductCard>)
                }
            </div>
        </div>
    );
};

export default AllProducts;