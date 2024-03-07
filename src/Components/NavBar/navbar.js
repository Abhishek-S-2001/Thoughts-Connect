import React, { Component } from 'react';
import './navbar.css';
import { Avatar, Grid } from '@mui/material';
import logo from '../../Resources/TC_Logo.png'

class NavBar extends Component{
    constructor(props){
        super(props);
        this.state = {}
    }
    render(){
        return(

    <div>
        <div className='navbar__barcontent'>
            <Grid container>
                <Grid item sx={2}></Grid>
                <Grid item sx={3}>
                    <img src={logo} className = 'navbar__logo' alt=''/>
                </Grid>
                <Grid item sx={3}>
                    <input text = 'text' className='navbar__searchBar' placeholder='Search' />
                </Grid>
                <Grid item xs={3} style={{"display":"flex"}}>
                    <img src={logo} className="navbar__img" alt=''/>
                    <img src={logo} className="navbar__img" alt=''/>
                    <img src={logo} className="navbar__img" alt=''/>
                    <img src={logo} className="navbar__img" alt=''/>
                    <Avatar src={logo} className='navbar__avatar'/>
                </Grid>
                <Grid item xs={1}></Grid>
            </Grid>
        </div>
    </div>
        
        );
    }
}
export default NavBar;