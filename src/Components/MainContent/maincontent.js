import React, { Component } from 'react';
import './maincontent.css';
import { Grid } from '@mui/material';
import MainPage from '../MainPage/mainpage';
import StatusBar from '../StatusBar/statusbar';

class MainContent extends Component{
    constructor(props){
        super(props);
        this.state = {}
    }
    render(){
        return(

    <div>
    <Grid container>
        <Grid item = {2}></Grid>  
        <Grid item = {6} className='maincontent__container'>
            <div>
                <StatusBar />
                <MainPage />
            </div>
        </Grid>
        <Grid>
            <Grid item = {2}></Grid>
        </Grid>    
        <Grid>
            <Grid item = {2}></Grid>
        </Grid>           
    </Grid>
    </div>
            
        );
    }
}
export default MainContent;