import React from 'react';
import { Card, CardContent, IconButton } from '@mui/material';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';
import './feed.css';

import profilePic from '../../Resources/profile_pic.jpg'

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
          profilePic: 'profile_pic_url_2',
          title: 'Post Title 2',
          thought: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        },        
        {
        username: 'user2',
        profilePic: 'profile_pic_url_2',
        title: 'Post Title 2',
        thought: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        },
            {
            username: 'user2',
            profilePic: 'profile_pic_url_2',
            title: 'Post Title 2',
            thought: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
            },
        // Add more posts as needed
      ];

  return (
    <div className="cardContainer">
      {posts.map((post, index) => (
        <div key={index} className="card">
            <div className="profileInfo">
              <img src={post.profilePic} alt={post.username} className="profilePic" />
              <text variant="subtitle1">{post.username}</text>
            </div>
            <text variant="h6" className="postTitle">
              {post.title}
            </text>
            <text variant="body2" className="postThought">
              {post.thought}
            </text>
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
      ))}
    </div>
  );
};

export default Feed;
