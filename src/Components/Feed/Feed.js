import React from 'react';
import { IconButton } from '@mui/material';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';
import './feed.css';

import profilePic from '../../Resources/profile_pic.jpg'
import profilePic2 from '../../Resources/profile_pic1.jpg'
import profilePic3 from '../../Resources/profile_pic2.jpg'
import profilePic4 from '../../Resources/profile_pic3.jpg'

const Feed = () => {
    const posts = [
    {
      username: 'Abhishek Shekhawat',
      profilePic: profilePic,
      title: 'Post Title 1',
      thought: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      username: 'user2',
      profilePic: profilePic2,
      title: 'Post Title 2',
      thought: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    },        
    {
    username: 'user3',
    profilePic: profilePic3,
    title: 'Post Title 3',
    thought: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    },
    {
    username: 'user4',
    profilePic: profilePic4,
    title: 'Post Title 4',
    thought: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    },
    {
      username: 'Abhishek Shekhawat',
      profilePic: profilePic,
      title: 'Post Title 1',
      thought: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      username: 'user2',
      profilePic: profilePic2,
      title: 'Post Title 2',
      thought: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    },        
    {
    username: 'user3',
    profilePic: profilePic3,
    title: 'Post Title 3',
    thought: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    },
    {
    username: 'user4',
    profilePic: profilePic4,
    title: 'Post Title 4',
    thought: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    },
    {
      username: 'Abhishek Shekhawat',
      profilePic: profilePic,
      title: 'Post Title 1',
      thought: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      username: 'user2',
      profilePic: profilePic2,
      title: 'Post Title 2',
      thought: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    },        
    {
    username: 'user3',
    profilePic: profilePic3,
    title: 'Post Title 3',
    thought: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    },
    {
    username: 'user4',
    profilePic: profilePic4,
    title: 'Post Title 4',
    thought: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    },
    {
      username: 'Abhishek Shekhawat',
      profilePic: profilePic,
      title: 'Post Title 1',
      thought: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      username: 'user2',
      profilePic: profilePic2,
      title: 'Post Title 2',
      thought: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    },        
    {
    username: 'user3',
    profilePic: profilePic3,
    title: 'Post Title 3',
    thought: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    },
    {
    username: 'user4',
    profilePic: profilePic4,
    title: 'Post Title 4',
    thought: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    },
    
        // Add more posts as needed
      ];

  return (
  <div className='feed__screen'>
    <div className="cardContainer">
      {posts.map((post, index) => (
        <div className="feed__card" key={index}>
          <div className='content__container'>
            <div className="profileInfo">
              <img src={post.profilePic} alt={post.username} className="profilePic" />
              <text variant="subtitle1">{post.username}</text>
            </div>
            <div className='card__content'>
              <text variant="h6" className="postTitle">
                {post.title}
              </text>
              <textarea variant="body2" className="postThought">
                {post.thought}
              </textarea>
            </div>
            <div className="postActions">
              <IconButton color="primary">
                <ThumbUpIcon />
              </IconButton>
              <IconButton color="primary">
                <CommentIcon />
              </IconButton>
              <IconButton color="primary">
                <ShareIcon />
              </IconButton>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
  );
};

export default Feed;
