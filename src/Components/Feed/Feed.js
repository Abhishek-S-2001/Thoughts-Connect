import React, {useState, useEffect} from 'react';
import './feed.css';

import { API } from '../../config';

import { IconButton } from '@mui/material';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';



const Feed = ({ handlePostClick }) => {

    const token = localStorage.getItem('token');
    console.log(token)

    const [posts, setPosts] = useState([]);

    useEffect(() => {
      // Fetch posts from the API
      fetch(API+'/thoughts/all')
        .then(response => {
          if (!response.ok) {
            throw new Error('Failed to fetch posts');
          }
          return response.json();
        })
        .then(data => {
          setPosts(data.thoughts); 
        })
        .catch(error => {
          console.error('Error fetching posts:', error);
        });
    }, []);

  return (
  <div className='feed__screen'>
    <div className="cardContainer">
      {posts.map((post, index) => (
        <div className="feed__card" key={index}  onClick={() => handlePostClick({ type: 'post', data: post })}>
          <div className='content__container'>
            <div className="profileInfo">
              <img src={post.profilePic} alt={post.username} className="profilePic" />
              <span className="username">{post.username}</span>
            </div>
            <div className='card__content'>
              <text variant="h6" className="postTitle">
                {post.title}
              </text>
              <p variant="body2" className="postThought">
                {post.content}
              </p>
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
