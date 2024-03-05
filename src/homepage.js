import React from 'react';
import './homepage.css';
import LeftNav from './Navigation/leftnav';
import Feed from './Feed/Feed';

function homepage() {
  return (
    <div className='homepage'>
        <div className='homepage__nav'>
        <LeftNav />
        </div>
        <div className='homepage__feed'>
        <Feed />
        </div>
    </div>
  )
};

export default homepage