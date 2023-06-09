import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import useMenu from '../../../hooks/useMenu';
const PopularMenu = () => {
    const [menu, loading] = useMenu();
    const popular = menu.filter(item => item.category == 'popular');
    return (
        <div className='mb-12'>
            <SectionTitle
                subHeading={`---Check it out---`}
                heading={`FROM OUR MENU`}
            ></SectionTitle>
            <div className='grid md:grid-cols-2 gap-10'>
                {
                    popular.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
        </div>
    );
};

export default PopularMenu;