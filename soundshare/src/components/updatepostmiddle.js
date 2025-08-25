
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updatePost } from '../actions/posts';
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

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updatePost(post._id, postData));
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
    <form onSubmit={handleSubmit}>
      <h2>Update Post</h2>

      <div>
        <label>Music File:</label>
        <input
          type="file"
          // accept=".mp3,.wav"
          accept=".jpg,.png"
          onChange={(e) => handleFileChange(e, 'selectedMFile')}
        />
        {postData.selectedMFile && <audio controls src={postData.selectedMFile} />}
      </div>

      <div>
        <label>Thumbnail:</label>
        <input
          type="file"
          accept=".jpg,.png"
          onChange={(e) => handleFileChange(e, 'selectedPFile')}
        />
        {postData.selectedPFile && <img src={postData.selectedPFile} alt="thumbnail" style={{ width: '200px' }} />}
      </div>

      <div>
        <label>Title:</label>
        <input
          type="text"
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        />
      </div>

      <div>
        <label>Caption:</label>
        <input
          type="text"
          value={postData.caption}
          onChange={(e) => setPostData({ ...postData, caption: e.target.value })}
        />
      </div>

      <button type="submit">Update</button>
    </form>
  );
}
