import React, { Component } from 'react'
import './mainscreen.css'

import Feed from '../Feed/Feed';
import Post from '../Post/post';
import Status from '../Status/status'

class MainScreen extends Component{
    constructor(props){
        super(props);
        this.state = {}
    }
    render(){
        return(

    <div className='screen__container'>
        <div>
            hello
        </div>
        <div className='screen'>
            <div className='screen__post'>
                <Post />
            </div>
            <div className='screen__status'>
                <Status/>
            </div>
            {/* <div className='screen__feed'>
                <Feed />
            </div> */}
        </div>
        <div>
            shekhawat
        </div>
        
    </div>

        )
    }
}
export default MainScreen;