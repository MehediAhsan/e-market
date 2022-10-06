import React, { useEffect, useState } from 'react';
import Collection from '../Collection/Collection';

const Category = ({category}) => {
    const [collections, setCollections] = useState([]);
    
    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products/category/${category}`)
        .then(res => res.json())
        .then(data => setCollections(data))
    },[category])
    
    return (
        <div>
            <h1 className='text-3xl font-semibold my-10 text-center text-rose-500'>{category}</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-20 my-3'>
                {
                    collections.map(collection => <Collection key={collection.id} collection={collection}></Collection>)
                }
            </div>
        </div>
    );
};

export default Category;