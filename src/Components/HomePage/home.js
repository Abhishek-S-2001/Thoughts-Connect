import React, { Component } from 'react';
import './home.css';

import NavBar from '../NavBar/navbar';
import MainScreen from '../MainScreen/mainscreen';

class Home extends Component{
    constructor(props){
        super(props);
        this.state = {}
    }
    render(){
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
}
export default Home;