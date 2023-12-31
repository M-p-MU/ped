import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import GlobalApi from "../../Services/GlobalApi";
import RefreshIcon from "@mui/icons-material/Refresh";

function generateRandomString(length) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [captchaText, setCaptchaText] = useState(generateRandomString(6));
  const [userInput, setUserInput] = useState("");
  const [isCaptchaValid, setIsCaptchaValid] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      window.location.href = '/';
    }
  }, []);

  const regenerateCaptcha = () => {
    const newCaptcha = generateRandomString(6);
    setCaptchaText(newCaptcha);
    setUserInput("");
    setIsCaptchaValid(false);
  };

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
    const isValid = e.target.value === captchaText;
    setIsCaptchaValid(isValid);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const loginData = {
      email,
      password,
    };
    try {
      await GlobalApi.loginUser(loginData);
    } catch (error) {
      console.log("Login Failed: " + error);
    }
  };

  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col-reverse lg:flex-row-reverse">
          <div className="card flex-shrink-0 h-50% w-full w-2/4 max-w-sm shadow-3xl bg-base-100">
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <h2 className="card-title justify-center mb-3">
                  Enter your password
                </h2>
                <div className="form-control mb-3">
                  {/* <label className="label">
                                    <span className="label-text">Email</span>
                                </label> */}
                  <TextField
                    fullWidth
                    id="outlined-basic"
                    label="E-mail"
                    variant="outlined"
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    required
                  />
                </div>
                <div className="form-control">
                  <TextField
                    fullWidth
                    id="outlined-basic"
                    label="Password"
                    variant="outlined"
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    required
                  />
                  <div className="form-control">
                    <div className="flex gap-2 flex-row mt-3 justify-center items-center">
                      <div>
                        <TextField
                          id="filled-basic"
                          value={userInput}
                          onChange={handleInputChange}
                          label="Captcha"
                          variant="filled"
                          size="small"
                        />
                      </div>
                      <div>
                        <span className="captcha-text">{captchaText}</span>
                      </div>
                      <div>
                        <button className="refresh" onClick={regenerateCaptcha}>
                          <RefreshIcon />
                        </button>
                      </div>
                    </div>
                    {isCaptchaValid ? (
                      <p>Captcha is valid!</p>
                    ) : (
                      <p>Captcha is not valid. Please try again.</p>
                    )}
                  </div>
                  <label htmlFor="forgot-pwd" className="label">
                    <a href="/login-opt" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6 mb-3">
                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={!isCaptchaValid}
                  >
                    {/* <Link to={`/?email=${email}`}>Login</Link> */}
                    Login
                  </button>
                </div>
                <p className="stat-desc space-x-2">
                  <span>You already have an account ?</span>
                  <Link className="text-primary" to="/register">
                    Sgin Up
                  </Link>
                </p>
              </form>
            </div>
          </div>
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">One more to go!</h1>
            <p className="py-6">
              Please enter your password to access your account so that it can
              be go for you to manage easily and enjoy content discovery with
              Ped.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
