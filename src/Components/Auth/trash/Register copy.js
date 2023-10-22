import React from 'react';
// import particlesConfig from "../../config/particles.json";
// import Particles from "react-tsparticles";
import TextField from '@mui/material/TextField';
import { Link } from "react-router-dom";

function Register() {
    return (
        <div>
            {/* <Particles options={particlesConfig} id="tsparticles" /> */}
            <main className="box">
                <h2>Register</h2>
                <form>
                    <TextField id="outlined-basic" label="Outlined" variant="outlined" required/>
                    <div className="inputBox">
                        <label htmlFor="userName">Username</label>
                        <input type="text" name="userName" id="userName" placeholder="type your username" required />
                    </div>
                    <div className="inputBox">
                        <label htmlFor="userPassword">Password</label>
                        <input type="password" name="userPassword" id="userPassword" placeholder="type your password"
                            required />
                    </div>
                    <div className="inputBox">
                        <label htmlFor="userConfirmPassword">Confirm Password</label>
                        <input type="password" name="userPassword" id="userConfirmPassword"
                            placeholder="confirm your password"
                            required />
                    </div>
                    <button type="submit" name="" style={{ float: "left" }}>Submit</button>
                    {/* <Link className="button" to="/login" style={{ float: "left" }}>Login</Link> */}
                </form>
            </main>
            <footer>
            </footer>
        </div>
    );
}

export default Register;