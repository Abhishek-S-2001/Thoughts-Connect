import React, {Component} from 'react'
import './statusbar.css'
import { Avatar, Grid } from '@mui/material';
import logo from '../../Resources/TC_Logo.png'

class StatusBar extends Component{
    constructor(props){
        super(props);
        this.state = {}
    }
    render(){
        return(

    <div>
        <Grid container className='statusbar__container'>
            <Grid className='status'>
                <Avatar className='statusbar__status' src={logo} alt=''/>
                <div className='statusbar__img'>Abhishek</div>
            </Grid>
            <Grid className='status'>
                <Avatar className='statusbar__status' src={logo} alt=''/>
                <div className='statusbar__img'>Abhishek</div>
            </Grid>
            <Grid className='status'>
                <Avatar className='statusbar__status' src={logo} alt=''/>
                <div className='statusbar__img'>Abhishek</div>
            </Grid>
            <Grid className='status'>
                <Avatar className='statusbar__status' src={logo} alt=''/>
                <div className='statusbar__img'>Abhishek</div>
            </Grid>
        </Grid>
    </div>
            
        )
    }
}
export default StatusBar;