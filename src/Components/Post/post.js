import React, { useState } from 'react'
import './post.css'
import { Grid, Typography, TextareaAutosize, InputBase } from '@mui/material';

const Post = () => {
    const [showCard, setShowCard] = useState(false);
    const [title, setTitle] = useState('');
    const [thought, setThought] = useState('');
    const [tags, setTags] = useState('');

    const handleThoughtChange = (event) => {
        setThought(event.target.value);
        updateTextAreaHeight(event.target);
      };
    
    const updateTextAreaHeight = (element) => {
        element.style.height = 'auto';
        element.style.height = element.scrollHeight + 'px';
      };

    const handlePostButtonClick = () => {
        // Add logic to handle posting the title, thought, and tags
        console.log('Title:', title);
        console.log('Thought:', thought);
        console.log('Tags:', tags);
        // You can send the data to an API, store in state, etc.

        // Close the card after posting
        setShowCard(false);
    };
    return(
    <div className="post-container">
        {!showCard ? (
            <button className='button__newpost' onClick={() => setShowCard(true)}>
                Have new thought!!! Post IT</button>
        ) : (
    <div className="card-overlay">
        <Grid className="card" container spacing={1}>
            <Grid item xs={12}>
                <Typography className='card__label' variant="h6">
                <span style={{ color: '#FF0000' }}>A</span>dd Ne
                <span style={{ transform: 'rotate(-90deg)', color: '#FF0000', display: 'inline-block' }}>E </span>
                <span style={{ color: '#FF0000' }}> T</span>hou
                <span style={{ transform: 'rotate(-90deg)', color: '#FF0000', display: 'inline-block' }}>G</span>
                h<span style={{ color: '#FF0000' }}>T</span>
                </Typography>
            </Grid>
            <Grid item xs= {12}>
                <InputBase className='card__title'
                    placeholder="Add Title" value={title}
                    onChange={(e) => setTitle(e.target.value)} />
            </Grid>
            <Grid item xs = {12}>
            <TextareaAutosize
                className="card__thought"
                placeholder="Enter Thought"
                value={thought}
                onChange={handleThoughtChange}
              />
            </Grid>
            <Grid item xm= {6}>
                <select className='card__tags' value={tags}
                onChange={(e) => setTags(e.target.value)}>
                <option value="">Select Tags</option>
                <option value="tag1">Tag 1</option>
                <option value="tag2">Tag 2</option>
                {/* Add more options as needed */}
                </select>
            </Grid>
            <Grid item xm={6}>
                <button className='post__button' onClick={handlePostButtonClick}>Post</button>
            </Grid>
        </Grid>
    </div>
        )}
    </div>
        
    )
    
}
export default Post;