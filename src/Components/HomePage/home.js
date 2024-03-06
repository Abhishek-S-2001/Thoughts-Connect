import React, { Component } from 'react';
import './home.css';

import NavBar from '../NavBar/navbar';
import MainContent from '../MainContent/maincontent';

class Home extends Component{
    constructor(props){
        super(props);
        this.state = {}
    }
    render(){
        return(
            <div>
                <NavBar />
                <MainContent />
            </div>

        );
    }
}
export default Home;