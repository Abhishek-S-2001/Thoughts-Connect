import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import './status.css';

import Profile_Pic from '../../Resources/profile_pic.jpg';

const Status = () => {
  const statusData = [
    { username: 'user1', Src: Profile_Pic, status: 'active', title: 'Title 1', thought: 'Thought 1' },
    { username: 'user2', Src: Profile_Pic, status: 'inactive', title: 'Title 2', thought: 'Thought 2' },
    { username: 'user4', Src: Profile_Pic, status: 'active', title: 'Title 3', thought: 'Thought 3' },
    { username: 'user5', Src: Profile_Pic, status: 'inactive', title: 'Title 4', thought: 'Thought 4' },
    { username: 'user3', Src: Profile_Pic, status: 'active', title: 'Title 5', thought: 'Thought 5' },
    { username: 'user6', Src: Profile_Pic, status: 'active', title: 'Title 6', thought: 'Thought 6' },
    { username: 'user7', Src: Profile_Pic, status: 'inactive', title: 'Title 7', thought: 'Thought 7' },
    { username: 'user8', Src: Profile_Pic, status: 'active', title: 'Title 8', thought: 'Thought 8' },
  ];

  return (
    <div className="container">
      <div className="status__container">
        {statusData.map(({ username, Src, status, title, thought }, index) => (
          <Card key={index} className={`status__card ${status}`}>
            <CardContent>
              <img className="status__profilepic" alt={username} src={Src} />
              <div className="status-content">
                <Typography variant="subtitle1">{title}</Typography>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Status;
