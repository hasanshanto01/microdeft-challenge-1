import React from 'react';

const FilterBar = () => {

    const handleSorting = (e) => {

        //console.log(e.target.value);
        const sortOrder = e.target.value;

        fetch(`https://fakestoreapi.com/products?sort=${sortOrder}`)
            .then(res => res.json())
            .then(json => console.log(json))

    }

    return (
        <div className='flex gap-2 mb-5'>
            <div className='flex gap-x-1 w-4/6'>
                <h2>Product <br /> Lists</h2>
                <input type="text" placeholder="Filter products" className="input input-bordered w-full" />
            </div>
            <div className='w-2/6'>
                <select className="select select-bordered w-full" onChange={handleSorting}>
                    <option value>Nothing</option>
                    <option value='asc'>Price: Low to High</option>
                    <option value='desc'>Price: High to Low</option>
                </select>
            </div>
        </div>
    );
};

export default FilterBar;