import React, { useState } from "react";
import "./register.css";
import CryptoJS from "crypto-js";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Checkbox, FormControlLabel } from '@mui/material';
import TC_logo from "../../Resources/TC_Logo.jpg";
import { API, crypto_key } from "../../config";

const Register = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
  const [secretKey, setSecretKey] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [secretKeyError, setSecretKeyError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      setPasswordError('Password and Confirm Password do not match.');
      return;
    }

    if (isAdmin && !secretKey) {
      setSecretKeyError('Secret key is required for admin registration.');
      return;
    }

    // Encrypt the password
    const encryptedPassword = CryptoJS.AES.encrypt(password, crypto_key).toString();

    // Prepare user data object
    const userData = {
      username,
      email,
      password: encryptedPassword,
      isAdmin,
      secretKey: isAdmin ? CryptoJS.AES.encrypt(secretKey, crypto_key).toString() : '', // Send encrypted secret key if admin
    };

    try {
      const response = await fetch(API + '/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(errorMessage);
      }

      setSuccessMessage('Successfully Registered');
      setTimeout(() => {
        navigate('/login');
      }, 1000);
    } catch (error) {
      const errorMessage = JSON.parse(error.message).error;
      if (errorMessage === 'Email already registered!!') {
        setEmailError(errorMessage);
      } else if (errorMessage === 'Username already used!!') {
        setUsernameError(errorMessage);
      } else {
        setSecretKeyError(errorMessage);
      }
    }
  };

  // Handle input changes and reset error messages
  const handleUsernameChange = (value) => {
    setUsername(value);
    setUsernameError('');
  };

  const handleEmailChange = (value) => {
    setEmail(value);
    setEmailError('');
  };

  const handlePasswordChange = (value) => {
    setPassword(value);
    setPasswordError('');
  };

  const handleConfirmPasswordChange = (value) => {
    setConfirmPassword(value);
    setPasswordError(''); // Reset password error when confirm password changes
  };

  const handleSecretKeyChange = (value) => {
    setSecretKey(value);
    setSecretKeyError('');
  };

  return (
    <div className="register__page">
      <div className="register__card">
        <div className="registercontent__container">
          <img src={TC_logo} className="register__logo" alt=""/>
          <form className="register__form" onSubmit={handleSubmit}>
            <TextField
              className="register__textfield"
              label="Username"
              value={username}
              onChange={(e) => handleUsernameChange(e.target.value)}
              error={!!usernameError}
              helperText={usernameError}
              required
            />
            <TextField
              className="register__textfield"
              label="Email"
              type="email"
              value={email}
              onChange={(e) => handleEmailChange(e.target.value)}
              error={!!emailError}
              helperText={emailError}
              required
            />
            <TextField
              className="register__textfield"
              label="Password"
              type="password"
              variant="outlined"
              value={password}
              onChange={(e) => handlePasswordChange(e.target.value)}
              required
            />
            <TextField
              className="register__textfield"
              label="Confirm Password"
              type="password"
              variant="outlined"
              value={confirmPassword}
              onChange={(e) => handleConfirmPasswordChange(e.target.value)}
              error={!!passwordError}
              helperText={passwordError}
              required
            />
            <FormControlLabel
              control={<Checkbox checked={isAdmin} onChange={() => setIsAdmin(!isAdmin)} />}
              label="Admin"
            />
            {isAdmin && (
              <TextField
                className="register__textfield"
                label="Admin Secret Key"
                type="password"
                value={secretKey}
                onChange={(e) => handleSecretKeyChange(e.target.value)}
                error={!!secretKeyError}
                helperText={secretKeyError}
                required
              />
            )}
            {successMessage && <div className="success-message">{successMessage}</div>}
            <Button type="submit" className="register__button" variant="contained">
              Register
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
