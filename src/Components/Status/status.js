import React, {useRef} from 'react';
import './status.css';

import Profile_Pic from '../../Resources/profile_pic.jpg';
import Profile_Pic2 from '../../Resources/profile_pic1.jpg'
import Profile_Pic3 from '../../Resources/profile_pic2.jpg'
import Profile_Pic4 from '../../Resources/profile_pic3.jpg'

const Status = ({handleStatusClick}) => {
  const statusScreenRef = useRef(null);

  const handleWheel = (event) => {
    if (statusScreenRef.current) {
      event.preventDefault();
      const scrollAmount = event.deltaY > 0 ? 100 : -100;
      statusScreenRef.current.scrollBy({
        left: scrollAmount,
        
      });
    }
  };

  const statusData = [
    { username: 'user1', profilePic: Profile_Pic, title: 'Title 1', thought: 'Thought 1' },
    { username: 'user2', profilePic: Profile_Pic2, title: 'Title 2', thought: 'Thought 2' },
    { username: 'user4', profilePic: Profile_Pic3, title: 'Title 3 vyshvcVCLDHSBCYkg,cbu vclqvcbvclc,ckBCB CILcbhbvc.', thought: 'Thought 3' },
    { username: 'user5', profilePic: Profile_Pic4, title: 'Title 4', thought: 'Thought 4' },
    { username: 'user3', profilePic: Profile_Pic, title: 'Title 5', thought: 'Thought 5' },
    { username: 'user6', profilePic: Profile_Pic2, title: 'Title 6', thought: 'Thought 6' },
    { username: 'user7', profilePic: Profile_Pic3, title: 'Title 7', thought: 'Thought 7' },
    { username: 'user8', profilePic: Profile_Pic4, title: 'Title 8', thought: 'Thought 8' },
    { username: 'user4', profilePic: Profile_Pic3, title: 'Title 3 vyshvcVCLDHSBCYkg,cbu vclqvcbvclc,ckBCB CILcbhbvc.', thought: 'Thought 3' },
    { username: 'user5', profilePic: Profile_Pic4, title: 'Title 4', thought: 'Thought 4' },
    { username: 'user3', profilePic: Profile_Pic, title: 'Title 5', thought: 'Thought 5' },
    { username: 'user6', profilePic: Profile_Pic2, title: 'Title 6', thought: 'Thought 6' },
  ];

  return (
    <div className="status__screen" onWheel={handleWheel} ref={statusScreenRef}>
      <div className='status__container' >
        {statusData.map((status, index) => (
          <div className={`status__card`} key={index} onClick={() => handleStatusClick({ type: 'status', data: status })}>
            <div className='status__content' >
              <div className='status__img'>
                <img src={status.profilePic} alt='Profile Pic' />
              </div>
              <textarea className='status__title' readOnly value={status.title}></textarea> 
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Status;
