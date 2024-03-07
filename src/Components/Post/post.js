import React, { Component } from 'react'
import './post.css'
import { Avatar } from '@mui/material';
import logo from '../../Resources/TC_Logo.png'

class Post extends Component{
    constructor(props){
        super(props);
        this.state = {}
    }
    render(){
        return(

        <div className='post__container'>
            
            <div className='post__container'>
                <Avatar className='post__userimage' src={logo} />
                <div className='post__username'>Username</div>
            </div>
            <div>
                <img src={logo} className='post__image' width='410px' />
            </div>
            <div></div>
            <div></div>
            
        </div>

        )
    }
}
export default Post;