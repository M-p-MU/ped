import React from 'react';
import particlesConfig from "../../../config/particles.json";
import Particles from "react-tsparticles";
import '../../styles/auth/index.css';
import TextField from '@mui/material/TextField';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
// import Item from '@mui/material/Item';
import Captcha from '../Captcha';
import { Link } from "react-router-dom";
import Google from "../../Assets/images/logo/g.png";
import Facebook from "../../Assets/images/logo/facebook.png";
import Git from "../../Assets/images/logo/github.png";
import Logo from '../../Assets/images/logo3.png'
function Register() {
    return (
        <div>
            <Particles options={particlesConfig} id="tsparticles" />
            <div class="left_content">
                <div class="imgBx">
                    <img class="logo" src={Logo} alt="Ped" />
                </div>
                <h3 class="ws_name">Pop~Shop</h3>
                <p>You don't have an account ?</p>
                <a href="registration.html">register</a>
            </div>
        </div>
    );
}

export default Register;