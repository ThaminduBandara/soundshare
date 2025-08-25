import React from 'react';
import './singlepostview.css';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

import { useNavigate } from 'react-router-dom';


export default function Singlepostview({ post, onClose }) {
 

  const navigate = useNavigate();
   if (!post) return null; 

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-container" onClick={(e) => e.stopPropagation()}>
        <button className="popup-close" onClick={onClose}>×</button>
        
        <img className="popup-img" src={post.selectedPFile} alt={post.title} />
        
        <div className="popup-content">
          <h2>{post.title}</h2>
          <h4>by {post.creator}</h4>
          <p>{post.caption}</p>
          
          <div className="popup-actions">
            <DeleteIcon onClick={() => {}} style={{ cursor: 'pointer', color: 'red' }} />
            <EditIcon onClick={() => navigate(`/newpost/${post._id}`,{ state: post })} style={{ cursor: 'pointer', color: 'blue' }} />
          </div>
        </div>
      </div>
    </div>
  );
}
