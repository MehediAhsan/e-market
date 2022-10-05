import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Details = () => {
    const product = useLoaderData();
    console.log(product);
    const {image,category,price,description,rating,title} = product;
    return (
        <div className='w-96 mx-auto my-36 md:my-10 bg-slate-100 p-4'>
            <img src={image} alt="" className='w-80 h-80 mx-auto' />
            <div className='p-4'>
                <h1 className='text-2xl font-semibold my-5'>{category}</h1>
                <p>{description}</p>
                <div className='mt-5'>
                    <div className='flex gap-4'>
                        <span className='text-lg font-semibold'>Title:</span>
                        <h1>{title}</h1>
                    </div>
                    <div className='flex gap-4 my-2'>
                        <span className='text-lg font-semibold'>Rating:</span>
                        <h1>{rating.rate}</h1>
                    </div>
                    <div className='flex gap-4'>
                        <span className='text-lg font-semibold'>Count:</span>
                        <h1>{rating.count}</h1>
                    </div>
                    <div className='flex gap-4 my-2'>
                        <span className='text-lg font-semibold'>Price:</span>
                        <h1>${price}</h1>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Details;