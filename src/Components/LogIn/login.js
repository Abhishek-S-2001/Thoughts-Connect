import React, { useState } from "react";
import "./login.css";

import { TextField, Button } from '@mui/material';

import TC_logo from "../../Resources/TC_Logo.jpg"
import API from "../../config"


const LogIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [emailerror, setEmailError] = useState('');
    const [passworderror, setPasswordError] = useState('');

    const handleSubmit = async (event) => {
      event.preventDefault();

      // Login logic

      // Prepare user data object
        const userData = {
        email,
        password,
        };
  
      try {
        // Send Login request to the API
        const response = await fetch(API.API +'/auth/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(userData),
        });
  
        if (!response.ok) {
            // Handle API error
            let errorMessage = await response.text();
            errorMessage = JSON.parse(errorMessage).error
            if (errorMessage === 'Email Not Registered!!') {
                setEmailError(errorMessage);
              } else if (errorMessage === 'Incorrect Password!!') {
                setPasswordError(errorMessage);
              }
            throw new Error(errorMessage);
        }
        // success login 

        // Extract JWT token from the response
        const { token } = await response.json();

        // Store the token in localStorage
        localStorage.setItem('token', token);
        console.log(token)
        console.log('Login successful');
      } catch (error) {
        console.error('Login failed:', error.message);
      }
    };  

    const handleEmailChange = (value) => {
        setEmail(value);
        setEmailError('');
    };
    const handlePasswordChange = (value) => {
        setPassword(value);
        setPasswordError('');
    };

    return(

<div className="login__page">
    <div className="login__card">
        <div className="logincontent__container">
            <img src={TC_logo} className="login__logo" alt=""/>

            <form className='login__form' onSubmit={handleSubmit}>
            <TextField className='login__textfield' label="Email" type="email" value={email}
              onChange={(e) => handleEmailChange(e.target.value)}
              error={!!emailerror} helperText={emailerror}
              required />
            <TextField className='login__textfield' label="Password" type="password" 
              variant="outlined" value={password}
              onChange={(e) => handlePasswordChange(e.target.value)}
              error={!!passworderror} helperText={passworderror}
              required />
            <Button type="submit" variant="contained" color="primary">
              LogIn
            </Button>
          </form>
        </div>
    </div>
</div>

    );
};
export default LogIn;