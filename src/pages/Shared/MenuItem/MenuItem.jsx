import React from 'react';

const MenuItem = ({ item }) => {
    // console.log(item)
    const { price, name, image, recipe } = item;
    return (
        <div className='flex space-x-4'>
            <img style={{borderRadius:'0 200px 200px 200px'}} className='w-[118px] h-[104px]' src={image} alt="" />
            <div className=''>
                <h3 className='uppercase'>{name}</h3>
                <p>{recipe}</p>
            </div>
            <p className='text-yellow-400'>${price}</p>
        </div>
    );
};

export default MenuItem;