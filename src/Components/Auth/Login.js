import React from 'react';
// import '../../styles/auth/index.css';
import { Link, useLocation } from "react-router-dom";
import TextField from '@mui/material/TextField';
import Captcha from './Captcha';

function Login() {
    // get email from login option
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const email = searchParams.get('email') || '';
    console.log(email);
    return (
        <>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col-reverse lg:flex-row-reverse">
                    <div className="card flex-shrink-0 h-50% w-full w-2/4 max-w-sm shadow-3xl bg-base-100">
                        <div className="card-body">
                            <h2 className='card-title justify-center mb-3'>Enter your password</h2>
                            <div className="form-control">
                                {/* <label className="label">
                                    <span className="label-text">Email</span>
                                </label> */}
                                <TextField fullWidth id="outlined-basic" label="E-mail" variant="outlined" type='email' value={email} required />
                            </div>
                            <div className="form-control">
                                {/* <label className="label">
                                    <span className="label-text">Password</span>
                                </label> */}
                                <TextField fullWidth id="outlined-basic" label="Password" variant="outlined" type='password' required />
                                <div cclassName="form-control">
                                    <Captcha />
                                </div>
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6 mb-3">
                                <button className="btn btn-primary">
                                    <Link to={`/?email=${email}`}>Login</Link>
                                </button>
                            </div>
                            <p className='stat-desc space-x-2'><span>You already have an account ?</span><Link className='text-primary' to="/register">Sgin Up</Link></p>
                        </div>
                    </div>
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">One more to go!</h1>
                        <p className="py-6">Please enter your password to access your account so that it can be go for you to manage easily and enjoy content discovery with Ped.</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;