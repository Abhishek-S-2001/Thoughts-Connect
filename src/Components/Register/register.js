import React, { useState } from "react";
import "./register.css";

import CryptoJS from "crypto-js";
import { useNavigate } from "react-router-dom";
import { TextField, Button } from '@mui/material';

import TC_logo from "../../Resources/TC_Logo.jpg"
import { API, crypto_key } from "../../config"


const Register = () => {
    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [error, setError] = useState('');
    const [regerror, setRegError] = useState('');

    const [successMessage, setSuccessMessage] = useState('');
  
    const handleSubmit = async (event) => {
      event.preventDefault();

      if (password !== confirmPassword) {
        setError('Password and Confirm Password do not match.');
        return;
      }

      // Registration logic
      const encryptedpassword = CryptoJS.AES.encrypt(password, crypto_key).toString();

      // Prepare user data object
        const userData = {
        username,
        email,
        password: encryptedpassword,
        };
  
      try {
        // Send registration request to the API
        const response = await fetch(API +'/auth/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(userData),
        });
  
        if (!response.ok) {
            // Handle API error
            const errorMessage = await response.text();
            throw new Error(errorMessage);
        }
        
  
        // Registration successful
        setSuccessMessage('Successfully Registered');
        // You may handle success scenario here
        // Redirect to login page after a delay
        setTimeout(() => {
          navigate('/login');
        }, 1000);

      } catch (error) {
        console.error('Registration failed:', error.message);
        // Handle registration failure
        setRegError(JSON.parse(error.message).error);
      }
    };  

    const handleemailChange = (value) => {
        setEmail(value);
        setRegError('');
    };

    const handleConfirmPasswordChange = (value) => {
        setConfirmPassword(value);
        if (password === value) {
          setError('');
        }
    };

    return(

<div className="register__page">
    <div className="register__card">
        <div className="registercontent__container">
            <img src={TC_logo} className="register__logo" alt=""/>

            <form className='register__form' onSubmit={handleSubmit}>
            <TextField className='register__textfield' label="Username" value={username}
              onChange={(e) => setUsername(e.target.value)}
              required />
            <TextField className='register__textfield' label="Email" type="email" value={email}
              onChange={(e) => handleemailChange(e.target.value)}
              error={!!regerror} helperText={regerror}
              required />
            <TextField className='register__textfield' label="Password" type="password" 
              variant="outlined" value={password}
              onChange={(e) => setPassword(e.target.value)}
              required />
            <TextField className='register__textfield' label="Confirm Password" type="password"
              variant="outlined" value={confirmPassword}
              onChange={(e) => handleConfirmPasswordChange(e.target.value)}
              error={!!error} helperText={error}
              required />
            <Button type="submit" variant="contained" color="primary">
              Sign Up
            </Button>
          </form>
          {successMessage && (
            <div className="success" onAnimationEnd={() => setSuccessMessage('')}>
              Successfully Registered
            </div>
          )}
        </div>
    </div>
</div>

    );
};
export default Register;