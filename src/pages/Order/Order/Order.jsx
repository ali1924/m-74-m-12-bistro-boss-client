import React, { useState } from 'react';
import orderCoverImg from '../../../assets/shop/banner2.jpg';
import Cover from '../../Shared/Cover/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../../hooks/useMenu';
import OrderTab from '../OrderTab/OrderTab';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
const Order = () => {
    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks'];
    const { category } = useParams();
    const initialIndex = categories.indexOf(category);
    const [tabIndex, setTabIndex] = useState(initialIndex);
    // useParams

    console.log(category);

    const [menu] = useMenu();
    const salad = menu.filter(item => item.category == 'salad');
    const pizza = menu.filter(item => item.category == 'pizza');
    const soups = menu.filter(item => item.category == 'soup');
    const desserts = menu.filter(item => item.category == 'dessert');
    const drinks = menu.filter(item => item.category == 'drinks');
    return (
        <div>
            <Helmet>
                <title>Bistro BOSS | Order Food</title>
            </Helmet>
            <Cover img={orderCoverImg} title="Order food"></Cover>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList className="uppercase flex justify-center items-center mr-2 py-3">
                    <Tab className="border-0 border-b-4 p-2 text-xl">Salad</Tab>
                    <Tab className="border-0 border-b-4 p-2 text-xl">Pizza</Tab>
                    <Tab className="border-0 border-b-4 p-2 text-xl">Soups</Tab>
                    <Tab className="border-0 border-b-4 p-2 text-xl">Desserts</Tab>
                    <Tab className="border-0 border-b-4 p-2 text-xl">Drinks</Tab>
                </TabList>
                <TabPanel>
                    <OrderTab items={salad}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={pizza}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={soups}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={desserts}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={drinks}></OrderTab>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Order;