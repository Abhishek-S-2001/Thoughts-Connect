import { Grid } from '@mui/material';
import React, {Component} from 'react';
import './loginpage.css'
import logo from '../../Resources/TC_Logo.png'

class LoginPage extends Component{
    constructor(props){
        super(props);
        this.state ={ }
    }
    render(){
        return(
    <div>
        <Grid container>
            <Grid item xs={3}>
                Hello
            </Grid>
            <Grid item xs={6}>
                <div className='loginpage__main'>
                    {/* <div>
                    <img className= 'loginpage__logo' src = {logo} alt=''/>
                    </div> */}
                    <div className='loginpage__rightcomponent'>
                        <img className= 'loginpage__logo' src = {logo} alt=''/>
                        <div className='loginpage__signin'>
                            <input className='loginpage__text' type='text'placeholder='Email'/>
                            <input className='loginpage__text' type='password'placeholder='Password'/>
                            <button className='login__button'>Sign In</button>
                        </div>
                        <div className='loginpage__signup'>
                            Don't Have an account? Sign up
                        </div>
                    </div>
                </div>
            </Grid>
            <Grid item xs={3}>
                Abhishek
            </Grid>
        </Grid>
    </div>
        )
    }
}
export default LoginPage;