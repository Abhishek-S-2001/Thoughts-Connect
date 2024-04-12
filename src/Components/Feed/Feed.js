import React, {useState, useEffect} from 'react';
import './feed.css';

import { API } from '../../config';

const Feed = ({ handlePostClick }) => {

    const token = localStorage.getItem('ThoughtConnectUserVerificationToken');
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
          </div>
        </div>
      ))}
    </div>
  </div>
  );
};

export default Feed;
