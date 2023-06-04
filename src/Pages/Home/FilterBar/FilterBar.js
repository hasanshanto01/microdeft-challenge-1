import React from 'react';

const FilterBar = () => {
    return (
        <div className='flex gap-2 mb-5'>
            <div className='flex gap-x-1 w-4/6'>
                <h2>Product <br /> Lists</h2>
                <input type="text" placeholder="Filter products" className="input input-bordered w-full" />
            </div>
            <div className='w-2/6'>
                <select className="select select-bordered w-full">
                    <option>Nothing</option>
                    <option value=''>Price: Low to High</option>
                    <option value=''>Price: High to Low</option>
                </select>
            </div>
        </div>
    );
};

export default FilterBar;