import React from 'react';
// import '../../styles/auth/index.css';
import particlesConfig from "../../../config/particles.json";
import Particles from "react-tsparticles";
// import { Link } from "react-router-dom";
import TextField from '@mui/material/TextField';
import Captcha from '../Captcha';

function Login() {
    return (
        <div>
            <Particles options={particlesConfig} id="tsparticles" />
            <main className="box">
                <h2>Login</h2>
                <form>
                    <div className="input row">
                        <TextField fullWidth id="outlined-basic" label="E-mail" variant="outlined" type='email' required />
                    </div>
                    <div className="input row">
                        <TextField fullWidth id="outlined-basic" label="Password" variant="outlined" type='password' required />
                    </div>
                    <div className="input row">
                        <Captcha />
                    </div>
                    <button type="submit" className='button'>Sign In</button>
                    <p>You already have an account ?<a href="/register">Sgin Up</a></p>
                </form>
            </main>
            <footer>
            </footer>
        </div>
    );
}

export default Login;