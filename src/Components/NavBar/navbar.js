import React, { Component } from 'react';
import './navbar.css';
import { Toolbar, Typography } from '@mui/material';


import logo from '../../Resources/TC_Logo.jpg'
import profile_pic from '../../Resources/profile_pic.jpg'

class NavBar extends Component{
    constructor(props){
        super(props);
        this.state = {}
    }
    render(){
        return(
    <div className='nav__container'>
        <Toolbar className='navbar'>
            <img src={logo} className='navbar__logo' alt="Logo" />

            <Typography className='navbar__label' variant="h5">
            <span style={{ color: '#FF0000' }}>T</span>hou
            <span style={{ transform: 'rotate(-90deg)', color: '#FF0000', display: 'inline-block' }}>G</span>
            ht<span style={{ color: '#FF0000' }}>S</span>
             Co<span style={{ color: '#FF0000' }}>N</span>nec<span style={{ color: '#FF0000' }}>t</span>
            </Typography>


            {/* User Profile */}
            <div style={{ display: 'flex', alignItems: 'center' }}>
            <img src={profile_pic} className='navbar__profileavatar' alt="User Profile Pic"/>
            <Typography className ='navbar__profilename' variant="body1">Abhishek Shekhawat</Typography>
            </div>

        </Toolbar>
    </div>
        );
    }
}
export default NavBar;