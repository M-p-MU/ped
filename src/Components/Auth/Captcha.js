import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
// import Grid from '@mui/material/Grid';// Grid version 1
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
// import * as Mui from '@material-ui/core';
import RefreshIcon from '@mui/icons-material/Refresh';

function generateRandomString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

function Captcha() {
    const [captchaText, setCaptchaText] = useState(generateRandomString(6));
    const [userInput, setUserInput] = useState('');
    const [isCaptchaValid, setIsCaptchaValid] = useState(false);

    const regenerateCaptcha = () => {
        const newCaptcha = generateRandomString(6);
        setCaptchaText(newCaptcha);
        setUserInput('');
        setIsCaptchaValid(false);
    };

    const handleInputChange = (e) => {
        setUserInput(e.target.value);
        setIsCaptchaValid(e.target.value === captchaText);
    };

    return (
        <div>
            <div className='flex gap-2 flex-row mt-3 justify-center items-center'>
                <div>
                    <TextField id="filled-basic"
                        value={userInput}
                        onChange={handleInputChange}
                        label="Captcha"
                        variant="filled"
                        size="small" />
                </div>
                <div>
                    <span className='captcha-text'>{captchaText}</span>
                </div>
                <div>
                    <button className="refresh" onClick={regenerateCaptcha}><RefreshIcon /></button>
                </div>
            </div>
            {isCaptchaValid ? (
                <p>Captcha is valid!</p>
            ) : (
                <p>Captcha is not valid. Please try again.</p>
            )}
        </div>
    );
}

export default Captcha;
