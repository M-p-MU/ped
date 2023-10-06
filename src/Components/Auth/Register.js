import React from 'react';
import '../../styles/auth/index.css';
import TextField from '@mui/material/TextField';
import Captcha from './Captcha';
import { Link } from "react-router-dom";
import Google from "../../Assets/images/logo/g.png";
import Facebook from "../../Assets/images/logo/faceb.png";
import Git from "../../Assets/images/logo/github.png";
import Logo from '../../Assets/images/logo3.png';

function Register() {
    return (
        <div className="bg-white">
            <div className="relative isolate px-6 pt-14 lg:px-8">
                <div
                    className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                    aria-hidden="true"
                >
                    <div
                        className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                    />
                </div>
                <div className="mx-auto max-w-8xl sm:py-8 lg:py-56">
                   
                <div className='flex justify-center items-center'>
                    <div className="card md:w-2/6 glass ">
                        <div className="card-body">
                            <div className='flex justify-center mb-6'>
                                <img src={Logo} alt="car!" />
                            </div>
            
                            <h2 className="card-title flex justify-center mb-6">Sign Up</h2>
                            <div className='flex flex-row justify-center gap-16'>
                                <img className='w-8' src={Google} />
                                <img className='w-8' src={Facebook} />
                                <img className='w-8' src={Git} />
                            </div>
                            <div className="divider">OR</div>
                            <form>
                                <div className=' flex flex-col gap-3'>
                                    <div className="flex form-control flex-col gap-3 md:flex-row">
                                        <div >
                                            <TextField id="outlined-basic" label="First Name" variant="outlined" required />
                                        </div>
                                        <div className='flex justify-center'>
                                            <TextField id="outlined-basic" label="Last Name" variant="outlined" required />
                                        </div>
                                    </div>
                                    <div className="form-control">
                                        <TextField id="outlined-basic" label="E-mail" variant="outlined" type='email' required />
                                    </div>
                                    <div className="form-control">
                                        <TextField id="outlined-basic" label="Password" variant="outlined" type='password' required />
                                    </div>
                                    <div className="form-control">
                                        <TextField id="outlined-basic" label="Confirm Password" variant="outlined" type='password' required />
                                    </div>
                                    <div className="form-control mt-6 mb-3">
                                        <button className="btn btn-primary">Register</button>
                                    </div>
                                    <p className='stat-desc space-x-2'><span>You already have an account ?</span><Link className='text-primary' to="/login-with">Sgin In</Link></p>
                                    {/* <Link className="button" to="/login" style={{ float: "left" }}>Login</Link> */}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                    
                </div>
                <div
                    className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                    aria-hidden="true"
                >
                    <div
                        className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                    />
                </div>
            </div>
        </div>
    );
}

export default Register;