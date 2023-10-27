import React, { useState } from 'react';
import Logo from "../../Assets/images/logo3.png";
import Google from "../../Assets/images/logo/g.png";
import Facebook from "../../Assets/images/logo/faceb.png";
import Git from "../../Assets/images/logo/github.png";
import '../../styles/auth/logOption.css';
import { Link } from 'react-router-dom';

// import { withRouter } from 'react-router-dom';
import TextField from '@mui/material/TextField';

const LoginOption = () => {
  // Function to handle the button click and perform redirection
  // const handleLogin = () => {
  //   // Redirect to the desired route
  //   window.location.href = '/login'; // Replace '/target-route' with your desired route
  // };

  const [email, setEmail] = useState('');

  return (
    <div className='log-option'>
      <div className='logo-box'>
        <div className='flex justify-center mb-6'>
          <img src={Logo} alt="car!" />
        </div>

        <h2>Sign In With</h2>
        <button className='opt'>
          <img src={Google} alt='Google' className='' />
          Google
        </button>
        <button className='opt'>
          <img src={Facebook} alt='Facebook' className='' />
          Facebook
        </button>
        <button className='opt'>
          <img src={Git} alt='Github' className='' />
          Github
        </button>
        <hr></hr>
        <span>Or</span>
        <TextField fullWidth id="outlined-basic" label="E-mail" variant="outlined" type='email' value={email} onChange={(e) => setEmail(e.target.value)} required />
        {/* <input type="text" placeholder='e-mail address' value={email} onChange={ (e)=>setEmail(e.target.value) } /> */}
        <button className='log '>
          <Link to={`/login?email=${email}`} >Next</Link>
        </button>
        <button className='fpwd'>Forget password</button>
        <p>Don&lsquo;t have an account ? <a href="register">Sgin up</a></p>
      </div>
    </div>
  )
}

export default LoginOption