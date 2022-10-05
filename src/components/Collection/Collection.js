import React from 'react';

const Collection = ({collection}) => {
    const {image,title} = collection;
    return (
        <div className="card w-full bg-base-100 shadow-xl image-full">
        <figure className='w-full h-64' ><img src={image} alt="Shoes"/></figure>
        <div className="card-body">
            <h2 className="card-title">{title}</h2>
        </div>
        </div>
    );
};

export default Collection;