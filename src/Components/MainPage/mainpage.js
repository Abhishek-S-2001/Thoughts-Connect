import React, { Component } from 'react'
import './mainpage.css'

import Post from '../Post/post';

class MainPage extends Component{
    constructor(props){
        super(props);
        this.state = {}
    }
    render(){
        return(

        <div>
            <Post />
        </div>

        )
    }
}
export default MainPage;