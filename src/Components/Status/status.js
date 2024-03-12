import React, { useRef }  from 'react';
import { Card, CardContent } from '@mui/material';
import './status.css';

import Profile_Pic from '../../Resources/profile_pic.jpg';

const Status = () => {
  const containerRef = useRef(null);

  const handleMouseWheel = (e) => {
    const container = containerRef.current;
  
    if (container) {
      container.scrollLeft += e.deltaY;
      e.preventDefault();
    }
  };

  const statusData = [
    { username: 'user1', Src: Profile_Pic, status: 'active', title: 'Title 1', thought: 'Thought 1' },
    { username: 'user2', Src: Profile_Pic, status: 'inactive', title: 'Title 2', thought: 'Thought 2' },
    { username: 'user4', Src: Profile_Pic, status: 'active', title: 'Title 3 vyshvcVCLDHSBCYkg,cbu vclqvcbvclc,ckBCB CILcbhbvc.', thought: 'Thought 3' },
    { username: 'user5', Src: Profile_Pic, status: 'inactive', title: 'Title 4', thought: 'Thought 4' },
    { username: 'user3', Src: Profile_Pic, status: 'active', title: 'Title 5', thought: 'Thought 5' },
    { username: 'user6', Src: Profile_Pic, status: 'active', title: 'Title 6', thought: 'Thought 6' },
    { username: 'user7', Src: Profile_Pic, status: 'inactive', title: 'Title 7', thought: 'Thought 7' },
    { username: 'user8', Src: Profile_Pic, status: 'active', title: 'Title 8', thought: 'Thought 8' },
  ];

  return (
    <div className="container" ref={containerRef} onWheel={handleMouseWheel}>
      
        {statusData.map(({  Src, status, title, thought }, index) => (
          <Card className={`status__card ${status}`}>
            <CardContent className='status__content' >
              <div className='status__img'>
                <img src={Src} alt='Profile Pic' />
              </div>
              <div className='status__title'>
                <text className='title'>{title}</text>
              </div>  
            </CardContent>
          </Card>
        ))}
      
    </div>
  );
};

export default Status;
