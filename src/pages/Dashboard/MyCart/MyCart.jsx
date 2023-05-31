import React from 'react';
import { Helmet } from 'react-helmet-async';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import useCart from '../../../hooks/useCart';
import { FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
const MyCart = () => {
    const [cart,refetch] = useCart();
    // console.log(cart);
    // how does reduce work
    const totalPrice = cart.reduce((sum, item) => item.price + sum, 0);

    const handleDeleteItem = (item) => {
        console.log(item);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/carts/${item._id}`, {
                    method:'DELETE'
                }).then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                })
            }
        })
    }
    return (
        <div className='w-full'>
            <Helmet>
                <title>Bistro Boss | My cart</title>
            </Helmet>
            {/* <SectionTitle
                heading="---My Cart---"
                subHeading="WANNA ADD MORE?"
            ></SectionTitle> */}
            <div className='uppercase font-semibold  h-[60px] flex justify-evenly item-center'>
                <h3 className='text-3xl'>Total Items :{cart?.length || 0}</h3>
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
                                    <button
                                        onClick={()=>handleDeleteItem(item)}
                                        className="btn btn-ghost text-white bg-red-600 ">
                                        <FaTrashAlt/>
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