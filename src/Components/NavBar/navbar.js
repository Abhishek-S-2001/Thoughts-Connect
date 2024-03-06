import React, { Component } from 'react';
import './navbar.js';
import { Grid } from '@mui/material';
// import logo from '../../Resources/TC_Logo.png'

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
                        <Grid item sx={6}></Grid>
                        <Grid item sx={4}></Grid>
                    </Grid>
                </div>
            </div>
        );
    }
}
export default NavBar;