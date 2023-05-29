import React from 'react';
import { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser } = useContext(AuthContext);
    const onSubmit = data => {
        console.log(data);
        const { name, email, password } = data;
        console.log(name, email, password);
        createUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
            }).catch(error => {
                const errorMessage = error.message;
                console.log(errorMessage);
        })
        
    } 
    return (
        <>
            <Helmet>
                <title>Bistro Boss | Sign Up</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:w-1/2 lg:text-left">
                        <h1 className="text-5xl font-bold">Sign Up now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 lg:w-1/2 w-full max-w-sm shadow-2xl bg-base-100">
                        <h2 className='text-center font-bold mt-4 text-3xl'>Sign Up</h2>
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter your name"
                                    {...register("name", { required: true })}
                                    name='name'
                                    className="input input-bordered"
                                />
                                {errors.name && <span className='text-red-600'>This filed is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    {...register("email", { required: true })}
                                    name='email'
                                    className="input input-bordered"
                                />
                                {errors.email && <span className='text-red-600'>This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter your password"
                                    {...register("password", {
                                        required: true,
                                        minLength: 6,
                                        maxLength: 20,
                                        pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/,
                                    })}
                                    name='password'
                                    className="input input-bordered"
                                />
                                {errors.password?.type === 'required' &&
                                    <p className='text-red-600'>Password is required</p>}
                                {errors.password?.type === 'pattern' &&
                                    <p className='text-red-600'>Password must be one uppercase, one lowercase,one number, and one special character</p>}
                                {errors.password?.type === 'minLength' &&
                                    <p className='text-red-600'>Password must be 6 characters</p>}
                                {errors.password?.type === 'maxLength' &&
                                    <p className='text-red-600'>Password must be less then 20 characters</p>}
                            </div>
                            <div className="form-control mt-6">
                                <input
                                    type="submit"
                                    value="Sign Up"
                                    className="btn btn-primary"
                                />
                            </div>
                        </form>
                        <p className='text-center my-4 text-orange-500 text-xl'><small>Already registered ?
                            <Link to='/login'> Go to login</Link>
                        </small></p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;