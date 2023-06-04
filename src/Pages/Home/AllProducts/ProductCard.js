import React from 'react';

const ProductCard = ({ product }) => {

    const { id, category, image, price, title } = product;

    return (
        <div className="card w-full bg-base-100 shadow-xl flex-row items-center">
            <figure className='w-2/5'><img src={image} alt="" /></figure>
            <div className="card-body w-3/5">
                <div className='flex gap-2'>
                    <button className="btn btn-sm btn-success">Edit</button>
                    <button className="btn btn-sm btn-error">Delete</button>
                </div>
                <h2 className="card-title">{title}</h2>
                <p className='text-primary'>BDT {price} TK.</p>
                <p>{category}</p>
                <div className="card-actions">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;