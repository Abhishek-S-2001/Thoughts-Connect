import React, { useEffect } from 'react';
import './home.css';

import { useNavigate } from 'react-router-dom';

import NavBar from '../NavBar/navbar';
import MainScreen from '../MainScreen/mainscreen';

const Home = () => {
    const navigate = useNavigate();
    useEffect(() => {
        // Check if token exists in local storage
        const token = localStorage.getItem('ThoughtConnectUserVerificationToken');
        // If token does not exist, redirect to login page
        if (!token) {
          navigate('/login');
        }
    }, [navigate]);
    return(

    <div className="app-container">
        <div className="top-panel">
            <NavBar />
        </div>
        <div className="bottom-panel">
            <MainScreen />
        </div>
    </div>

    );
}
export default Home;