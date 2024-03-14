import React, { useRef }  from 'react';
import './status.css';

import Profile_Pic from '../../Resources/profile_pic.jpg';
import Profile_Pic2 from '../../Resources/profile_pic1.jpg'
import Profile_Pic3 from '../../Resources/profile_pic2.jpg'
import Profile_Pic4 from '../../Resources/profile_pic3.jpg'

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
    { username: 'user2', Src: Profile_Pic2, status: 'inactive', title: 'Title 2', thought: 'Thought 2' },
    { username: 'user4', Src: Profile_Pic3, status: 'active', title: 'Title 3 vyshvcVCLDHSBCYkg,cbu vclqvcbvclc,ckBCB CILcbhbvc.', thought: 'Thought 3' },
    { username: 'user5', Src: Profile_Pic4, status: 'inactive', title: 'Title 4', thought: 'Thought 4' },
    { username: 'user3', Src: Profile_Pic, status: 'active', title: 'Title 5', thought: 'Thought 5' },
    { username: 'user6', Src: Profile_Pic2, status: 'active', title: 'Title 6', thought: 'Thought 6' },
    { username: 'user7', Src: Profile_Pic3, status: 'inactive', title: 'Title 7', thought: 'Thought 7' },
    { username: 'user8', Src: Profile_Pic4, status: 'active', title: 'Title 8', thought: 'Thought 8' },
    { username: 'user4', Src: Profile_Pic3, status: 'active', title: 'Title 3 vyshvcVCLDHSBCYkg,cbu vclqvcbvclc,ckBCB CILcbhbvc.', thought: 'Thought 3' },
    { username: 'user5', Src: Profile_Pic4, status: 'inactive', title: 'Title 4', thought: 'Thought 4' },
    { username: 'user3', Src: Profile_Pic, status: 'active', title: 'Title 5', thought: 'Thought 5' },
    { username: 'user6', Src: Profile_Pic2, status: 'active', title: 'Title 6', thought: 'Thought 6' },
  ];

  return (
    <div className="status__screen" ref={containerRef} onWheel={handleMouseWheel}>
      <div className='status__container'>
        {statusData.map(({  Src, status, title, thought }, index) => (
          <div className={`status__card ${status}`}>
            <div className='status__content' >
              <div className='status__img'>
                <img src={Src} alt='Profile Pic' />
              </div>
              <textarea className='status__title' readOnly value={title}></textarea> 
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Status;
