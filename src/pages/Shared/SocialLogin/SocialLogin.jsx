import React from 'react';
import { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../../provider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
const SocialLogin = () => {
    const { googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const handleGoogleSignIn = () => {
        googleSignIn()
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            // check existing user 
            const saveUser = { name: loggedUser.displayName, email: loggedUser.email };
            fetch('http://localhost:5000/users', {
                method: "POST",
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify(saveUser),
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.insertedId) {
                        //refetch cart to update the number of items in the cart
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Google login successfully',
                            showConfirmButton: false,
                            timer: 1500
                        })
                        navigate(from, { replace: true });
                    }
                })
            
        })
            .catch(error => {
                console.log(error.message);
        })
    }
    return (
        <div>
            <div className="divider">OR</div>
            <div className='w-full text-center my-4'>
                <button
                    onClick={handleGoogleSignIn}
                    className="btn btn-circle btn-outline"
                >
                    <FaGoogle/>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;