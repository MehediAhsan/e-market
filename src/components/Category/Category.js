import React, { useEffect, useState } from 'react';
import Collection from '../Collection/Collection';

const Category = ({category}) => {
    const [product, setProduct] = useState('');
    const [collections, setCollections] = useState([]);
    
    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products/category/${product}`)
        .then(res => res.json())
        .then(data => setCollections(data))
    },[product])
    
    return (
        <div>
            <button className='bg-primary px-8 py-4 rounded text-xl mx-auto font-semibold' onClick={()=>setProduct(category)}>{category}</button>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-20 my-3'>
                {
                    collections.map(collection => <Collection key={collection.id} collection={collection}></Collection>)
                }
            </div>
        </div>
    );
};

export default Category;