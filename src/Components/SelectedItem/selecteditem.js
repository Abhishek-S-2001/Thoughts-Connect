import React from 'react';
import './selecteditem.css';


const SelectedItem = ({selecteditem}) => {
    if (!selecteditem || !selecteditem.data) {
        return <div>Loading...</div>;
    }

    const post = selecteditem.data;

    // // Check for individual properties existence before rendering
    // if (!post.profilePic || !post.username || !post.title || !post.thought) {
    //     return <div>Missing post data</div>;
    // }
    return(
    <div className='selected__item'>
        <div className="item__card">
          <div className='itemcontent__container'>
            <div className="item__profileInfo">
              <img src={post.profilePic} alt={post.username} className="item__profilePic" />
              <span className="item__username">{post.username}</span>
            </div>
            <div className='card__content'>
              <text variant="h6" className="itemTitle">
                {post.title}
              </text>
              <p variant="body2" className="item__Thought">
                {post.content}
              </p>
            </div>
          </div>
        </div>
    </div>
    
        
    );
};
export default SelectedItem;