import React, { useState } from 'react'
import './post.css'
import { Typography, TextField, Switch, Button, Select, MenuItem, InputLabel, FormControl } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const Post = () => {
    const [showCard, setShowCard] = useState(false);
    
    const [title, setTitle] = useState('');
    const [thought, setThought] = useState('');
    const [selectedtag, setTag] = useState('');
    const [Public, setPublic] = useState('');

    const [successMessage, setSuccessMessage] = useState('');

    const tags = [ "#Technology", "#Cooking", "#Idea", "#Travel", "#Photography", "#Fashion",
        "#Fitness", "#Art", "#Music", "#Books", "#Foodie", "#DIY", "#Nature", "#Gaming",
        "#Health", "#Motivation", "#Inspiration", "#Quotes", "#Selfie", "#ThrowbackThursday" ];
      

    const handleThoughtChange = (event) => {
        setThought(event.target.value);
        updateTextAreaHeight(event.target);
      };
    
    const updateTextAreaHeight = (element) => {
        element.style.height = 'auto';
        element.style.height = element.scrollHeight + 'px';
      };

    const handleSubmit = () => {
        console.log('Title:', title);
        console.log('Thought:', thought);
        console.log('Tags:', selectedtag);
        console.log('Public: ', Public);


        // Post Uploaded successful
        setSuccessMessage('Post Uploaded');
        // Close the card after posting
        setShowCard(false);
    };
    return(
    <div className="post-container">
        {!showCard ? (
            <button className='button__newpost' onClick={() => setShowCard(true)}>
                Have new thought!!! Post IT</button>
        ) : (
    <div className="card-overlay" >
        <div className="newpost__card" container spacing={1}>
            <div className='newpostcontent__container'>
                <div style={{display: 'flex', justifyContent:'center', alignItems:'center', margin:'20px'}}>
                    <Typography className='postcard__label' variant="h6">
                        <span style={{ color: '#FF0000' }}>A</span>dd Ne
                        <span style={{ transform: 'rotate(-90deg)', color: '#FF0000', display: 'inline-block' }}>E </span>
                        <span style={{ color: '#FF0000' }}> T</span>hou
                        <span style={{ transform: 'rotate(-90deg)', color: '#FF0000', display: 'inline-block' }}>G</span>
                        h<span style={{ color: '#FF0000' }}>T</span>
                    </Typography>
                    <CloseIcon style={{marginLeft: '80px', color:'Grey'}} onClick={() => setShowCard(false)} />
                </div>
                <form className='newpost__form' onSubmit={handleSubmit}>
                    <TextField className='newpost__textfield' label="Title" 
                    value={title}  onChange={(e) => setTitle(e.target.value)}
                    required />
                    <TextField className = 'newpost__textfield' id="outlined-multiline-static" 
                        label="Thought" multiline rows={6}
                        value={thought}
                        onChange={handleThoughtChange} required />
                    <div style={{display:'flex', alignItems:'center'}}>
                        <FormControl style={{width:'150px'}}>
                        <InputLabel id="tag-select-label">Tag</InputLabel>
                        <Select labelId="tag-select-label" id="demo-simple-select"
                            value={selectedtag} label="Tag"
                            onChange={(e) => setTag(e.target.value)} placeholder='Tag'>
                            {tags.map((tag,index) => (
                                <MenuItem key={index} value={tag}>{tag}</MenuItem>
                            ))};
                        </Select>
                        </FormControl>
                        <span style={{ margin: '20px' }}>Public</span>
                        <Switch defaultChecked value={Public} onChange={(e) => setPublic(e.target.value)}/>
                    </div>
                    <Button type="submit" variant="contained" color="primary">
                    Post
                    </Button>
                </form>
                {successMessage && (
                    <div className="success" onAnimationEnd={() => setSuccessMessage('')}>
                    Successfully Registered
                    </div>
                )}
            </div>
        </div>
    </div>
        )}
    </div>
        
    )
    
}
export default Post;