import React from 'react';
import AllProducts from '../AllProducts/AllProducts';
import FilterBar from '../FilterBar/FilterBar';

const Home = () => {
    return (
        <div className='flex my-10'>
            <div className='w-3/5'>
                <FilterBar></FilterBar>
                <AllProducts></AllProducts>
            </div>
            <div className='w-2/5'>

            </div>
        </div>
    );
};

export default Home;