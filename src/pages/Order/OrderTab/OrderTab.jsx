import React from 'react';
import FoodCard from '../../../components/FoodCard/FoodCard';

const OrderTab = ({item}) => {
    return (
        <div className='lg:grid lg:grid-cols-3 lg:gap-10'>
            {
                item.map(item => <FoodCard
                    key={item._id}
                    item={item}
                ></FoodCard>)
            }
        </div>
    );
};

export default OrderTab;