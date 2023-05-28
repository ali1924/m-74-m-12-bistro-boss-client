import React from 'react';

const FoodCard = ({ item }) => {
    const { price, name, image, recipe } = item;
    return (
        <div className="card w-full bg-base-100 shadow-xl my-3">
            <figure><img className='w-full' src={image} alt="Shoes" /></figure>
            <p className='absolute right-0  w-[89px] bg-slate-900 text-white p-2 mr-5 mt-5'>${price}</p>
            <div className="card-body flex flex-col items-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-center">
                    <button className='btn btn-outline border-0 border-b-4 mt-4 bg-slate-100 border-orange-500'>Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;