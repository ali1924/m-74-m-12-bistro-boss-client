import React from 'react';
import {Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImg from '../../../assets/menu/menu-bg.jpg';
import useMenu from '../../../hooks/useMenu';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';
import desertImg from '../../../assets/menu/dessert-bg.jpeg';
import pizzaImg from '../../../assets/menu/pizza-bg.jpg';
import saladImg from '../../../assets/menu/salad-bg.jpg';
import soupImg from '../../../assets/menu/soup-bg.jpg';
const Menu = () => {
    const [menu] = useMenu();
    // console.log(menu);
    const offered = menu.filter(item => item.category == 'offered');
    const desserts = menu.filter(item => item.category == 'desserts');
    const salads = menu.filter(item => item.category == 'salad');
    const pizza = menu.filter(item => item.category == 'pizza');
    const soups = menu.filter(item => item.category == 'soup');
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover img={menuImg} title={'our menu'}></Cover>
            <SectionTitle
                subHeading="---Don't miss--- "
                heading="TODAY'S OFFER"
            ></SectionTitle>
            {/* offered */}
            <MenuCategory
                item={offered}
            ></MenuCategory>
            {/* dessert menu items*/}
            <MenuCategory item={desserts} title="Desserts" coverImg={desertImg}></MenuCategory>
            {/* pizza menu items */}
            <MenuCategory item={pizza} title="Pizza" coverImg={pizzaImg}></MenuCategory>
            {/* salads menu items */}
            <MenuCategory item={salads} title="Salads" coverImg={saladImg}></MenuCategory>
            {/* soup menu items */}
            <MenuCategory item={soups} title="Soups" coverImg={soupImg}></MenuCategory>

        </div>
    );
};

export default Menu;