import React, { useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
const Login = () => {
    const captchaRef = useRef(null);
    const [disable, setDisable] = useState(true);
    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])
    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
    }
    const handleCaptchaValidation = () => {
        const user_captcha_value = captchaRef.current.value;
        console.log(user_captcha_value);
        if (validateCaptcha(user_captcha_value) == true) {
            // alert('Captcha Matched');
            setDisable(false);
        }
        else {
            setDisable(true);
        }
        
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:w-1/2 lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card flex-shrink-0 lg:w-1/2 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="email"
                                name='email'
                                className="input input-bordered"
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="text"
                                placeholder="password"
                                name='password'
                                className="input input-bordered"
                            />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        {/* for capcha */}
                        <div className="form-control">
                            <label className="label">
                                <LoadCanvasTemplate />
                            </label>
                            <input
                                type="text"
                                ref={captchaRef}
                                placeholder="type the captcha above"
                                name='captcha'
                                className="input input-bordered"

                            />
                            <button
                                className='btn btn-outline p-1 btn-sm mt-1'
                                onClick={handleCaptchaValidation}
                            >Validate</button>
                        </div>
                        <div className="form-control mt-6">
                            <input
                                disabled={disable}
                                type="submit"
                                value="Login"
                                className="btn btn-primary"
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;