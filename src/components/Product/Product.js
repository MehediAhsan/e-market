import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({product}) => {
    const {id,image, category, description} = product;
    return (
        <div className="card card-compact w-full bg-white max-w-xs mx-auto shadow-xl">
        <figure><img src={image} alt="Shoes" className='w-full h-64 p-4' /></figure>
        <div className="card-body">
            <h2 className="card-title">{category}</h2>
            <p>{description.slice(0,100)}...</p>
            <div className="card-actions justify-end">
            <Link to={`/product/${id}`}>
                <button className="bg-primary px-6 py-2 text-base font-semibold rounded">Details</button>
            </Link>
            </div>
        </div>
        </div>
    );
};

export default Product;