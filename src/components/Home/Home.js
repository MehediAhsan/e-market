import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Carousel from '../Carousel/Carousel';
import Category from '../Category/Category';

const Home = () => {
    const categories = useLoaderData();
    return (
        <div>
            <Carousel></Carousel>
            <h1 className='text-3xl font-bold text-center my-20'>Our Latest Collection</h1>
            <div className='flex flex-col items-center'>
                {
                    categories.map(category => <Category category={category}></Category>)
                }
            </div>
        </div>
    );
};

export default Home;