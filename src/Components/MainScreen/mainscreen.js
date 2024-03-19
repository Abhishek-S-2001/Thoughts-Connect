import React, { useState } from 'react'
import './mainscreen.css'

import Feed from '../Feed/Feed';
import Post from '../Post/post';
import Status from '../Status/status';
import SelectedItem from '../SelectedItem/selecteditem';

const MainScreen = () => {
    const [selecteditem, setselecteditem] = useState('');

    const handleStatusClick = (item) => {
        setselecteditem(item);
    };

    const handlePostClick = (item) => {
        setselecteditem(item);
    };
 
    return(

    <div className='screen__container'>
        <div>
            Abhishek
        </div>
        <div className='screen'>
            <div className='screen__post'>
                <Post />
            </div>
            <div className='screen__status'>
                <Status handleStatusClick={handleStatusClick} />
            </div>
            <div className='screen__feed'>
                <Feed handlePostClick={handlePostClick}/>
            </div>
        </div>
        <div className='selected__item'>
            <SelectedItem selecteditem={selecteditem}/>
        </div>
    </div>

    );  
};
export default MainScreen;