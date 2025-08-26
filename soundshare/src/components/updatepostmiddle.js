
import React, { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { updatePost } from '../actions/posts';
import Music from '../assests/music.svg';
import Thumbnail from '../assests/thumbnail.svg';
import './updatepostmiddle.css';  


export default function Updatepostmiddle({ post }) {
  const [postData, setPostData] = useState({
    title: '',
    caption: '',
    selectedMFile: '',
    selectedPFile: ''
  });

  const dispatch = useDispatch();

  useEffect(() => {
    if (post) {
      setPostData({
        title: post.title || '',
        caption: post.caption || '',
        selectedMFile: post.selectedMFile || '',
        selectedPFile: post.selectedPFile || ''
      });
    }
  }, [post]);


  const musicInputRef = useRef(null);
  const thumbnailInputRef = useRef(null);


  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updatePost(post._id, postData));
    setPostData({
      title: '',
      caption: '',
      selectedMFile: '',
      selectedPFile: ''
    });
    if (musicInputRef.current) musicInputRef.current.value = '';
    if (thumbnailInputRef.current) thumbnailInputRef.current.value = '';
  };



  const handleFileChange = (e, field) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPostData({ ...postData, [field]: reader.result });
    };
  };

  return (

    <form className='newpostmiddle-container' onSubmit={handleSubmit}>
      <div className='newpostmiddle-top'>
        <div className='newpostmiddle-top-right'>
          <h2>New Post</h2>
        </div>
      </div>

      <div className='newpostmiddle-bottom'>
        
        <div className='add-music'  >
          <input 
            type="file"
             accept=".jpg,.png"
             ref={musicInputRef} 
            onChange={(e) => handleFileChange(e, 'selectedMFile')}
          />

          {/* {postData.selectedMFile && <audio controls src={postData.selectedMFile} />} */}
          {postData.selectedMFile && <img src={postData.selectedMFile} alt="thumbnail" style={{ width: '100px' }} />}
          <div className='add-icons'>
            <img src={Music} alt='music' />
          </div>
          <p>Upload your music file</p>
          <p>MP3, WAV up to 50MB</p>
        </div>

        
        <div className='add-music'>
          <input
            type="file"
            accept=".jpg,.png"
            ref={thumbnailInputRef} 
            onChange={(e) => handleFileChange(e, 'selectedPFile')}
          />

          {postData.selectedPFile && <img src={postData.selectedPFile} alt="thumbnail" style={{ width: '100px' }} />}
          <div className='add-icons'>
            <img src={Thumbnail} alt='thumbnail' />
          </div>
          <p>Add thumbnail</p>
          <p>JPG, PNG up to 10MB</p>
        </div>

       
        <div className='add-details'>
          <input
            className='post-input'
            type="text"
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
          />
          <input
            className='post-input'
            type="text"
          value={postData.caption}
          onChange={(e) => setPostData({ ...postData, caption: e.target.value })}
          />
          
          <button className='add-post-btn' type="submit" onClick={handleSubmit}>Update</button>
        </div>
      </div>
    </form>


  );
}
