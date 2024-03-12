import React, { Component } from 'react';
import './navbar.css';
import { AppBar, Toolbar, Typography, InputBase, IconButton } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';


import logo from '../../Resources/TC_Logo.jpg'
import profile_pic from '../../Resources/profile_pic.jpg'

class NavBar extends Component{
    constructor(props){
        super(props);
        this.state = {}
    }
    render(){
        return(
    <AppBar>
        <Toolbar className='navbar'>
            <img src={logo} className='navbar__logo' alt="Logo" />

            <Typography className='navbar__label' variant="h5">
            <span style={{ color: '#FF0000' }}>T</span>hou
            <span style={{ transform: 'rotate(-90deg)', color: '#FF0000', display: 'inline-block' }}>G</span>
            ht<span style={{ color: '#FF0000' }}>S</span>
             Co<span style={{ color: '#FF0000' }}>N</span>nec<span style={{ color: '#FF0000' }}>t</span>
            </Typography>


            {/* Search Bar */}
            <div>
                <InputBase className='navbar__searchbar'
                    placeholder="Search..."
                    inputProps={{ 'aria-label': 'search' }}
                    style={{ color: '#CEE5F2' }} />
            </div>
            <div>
                <IconButton>
                <SearchIcon style={{ color: '#CEE5F2' }} />
                </IconButton>
            </div>

            {/* Notification Icon */}
            <div style={{ marginLeft: '10px' }}>
                <IconButton style={{ color: '#CEE5F2' }}>
                    <NotificationsIcon />
                </IconButton>
            </div>

            {/* User Profile */}
            <div style={{ display: 'flex', alignItems: 'center' }}>
            <img src={profile_pic} className='navbar__profileavatar' alt="User Profile Pic"/>
            <Typography className ='navbar__profilename' variant="body1">Abhishek Shekhawat</Typography>
            </div>

            {/* Settings Icon */}
            <div style={{ marginLeft: '10px' }}>
                <IconButton style={{ color: '#CEE5F2' }}>
                    <SettingsIcon />
                </IconButton>
            </div>

        </Toolbar>
    </AppBar>
        );
    }
}
export default NavBar;