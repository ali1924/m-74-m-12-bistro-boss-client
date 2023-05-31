import React from 'react';
import { Helmet } from 'react-helmet-async';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import useCart from '../../../hooks/useCart';
import { FaTrashAlt } from 'react-icons/fa';
const MyCart = () => {
    const [cart] = useCart();
    console.log(cart);
    const totalPrice = cart.reduce((sum, item) => item.price + sum, 0);
    
    return (
        <div className=''>
            <Helmet>
                <title>Bistro Boss | My cart</title>
            </Helmet>
            {/* <SectionTitle
                heading="---My Cart---"
                subHeading="WANNA ADD MORE?"
            ></SectionTitle> */}
            <div className='uppercase font-semibold  h-[60px] flex justify-evenly item-center'>
                <h3 className='text-3xl'>Total Items :{cart?.length}</h3>
                <h2 className='text-2xl'>Total  Price:{totalPrice}</h2>
                <button className='btn btn-warning'>Pay</button>
            </div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Food</th>
                            <th>Item Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row */}
                        {
                            cart.map((item, index) => <tr key={item._id}>
                                <td>
                                    {index+1}
                                </td>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>{item.name}</td>
                                <td className='text-end'>{item.price}</td>
                                <td>
                                    <button className="btn btn-ghost px-2 py-0.5 bg-red-600">
                                        <FaTrashAlt className='w-6 h-6 text-white'/>
                                    </button>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyCart;