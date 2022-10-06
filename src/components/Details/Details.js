import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Details = () => {
    const product = useLoaderData();
    console.log(product);
    const {image,category,price,description,rating,title} = product;
    return (
        <div className='md:flex w-[800px] mx-auto max-w-lg md:max-w-none my-36 md:my-20 bg-white p-4 shadow-lg'>
            <img src={image} alt="" className='w-96 h-96 mx-auto' />
            <div className='px-8'>
                <h1 className='text-2xl font-semibold my-5 md:my-0 md:mb-3'>{category}</h1>
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
                    <button className='bg-yellow-400 hover:bg-yellow-500 py-1 px-8 rounded-l-3xl rounded-r-3xl mr-4'>Add to Cart</button>
                    <button className='bg-orange-400 hover:bg-orange-500 py-1 px-8 rounded-l-3xl rounded-r-3xl'>Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Details;