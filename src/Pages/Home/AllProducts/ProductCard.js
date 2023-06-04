import React from 'react';

const ProductCard = ({ product }) => {

    const { id, category, image, price, title } = product;

    const handleEdit = (id) => {
        console.log(id);
        fetch(`https://fakestoreapi.com/products/${id}`, {
            method: "PUT",
            body: JSON.stringify(
                {
                    title: 'test product',
                    price: 13.5,
                    description: 'lorem ipsum set',
                    image: 'https://i.pravatar.cc',
                    category: 'electronic'
                }
            )
        })
            .then(res => res.json())
            .then(json => console.log(json))
    };

    const handleDelete = (id) => {
        console.log(id);
        fetch(`https://fakestoreapi.com/products/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(json => console.log(json))

    };

    return (
        <div className="card w-full bg-base-100 shadow-xl flex-row items-center">
            <figure className='w-2/5'><img src={image} alt="" /></figure>
            <div className="card-body w-3/5">
                <div className='flex gap-2'>
                    <button className="btn btn-sm btn-success" onClick={() => handleEdit(id)}>Edit</button>
                    <button className="btn btn-sm btn-error" onClick={() => handleDelete(id)}>Delete</button>
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