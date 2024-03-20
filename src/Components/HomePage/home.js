import React from 'react';
import './home.css';

import NavBar from '../NavBar/navbar';
import MainScreen from '../MainScreen/mainscreen';

const Home = () => {
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