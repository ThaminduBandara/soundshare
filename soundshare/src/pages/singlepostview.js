import React from 'react';
import './singlepostview.css';
import { useNavigate } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useDispatch } from 'react-redux';
import { deletePost } from '../actions/posts';


export default function Singlepostview({ post, onClose }) {
 
   const dispatch = useDispatch();
  //  console.log(post);

   const handleDelete = () => {
    dispatch(deletePost(post._id));
    onClose();
  };

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

            
      {post.selectedMFile && (
        <audio className='audio' controls>
          <source src={`http://localhost:3001${post.selectedMFile}`} type="audio/mpeg" />
          
        </audio>
)}
          
          <div className="popup-actions">
            <DeleteIcon onClick={handleDelete} style={{ cursor: 'pointer', color: 'red' }} />
            <EditIcon onClick={() => navigate(`/newpost/${post._id}`,{ state: post })} style={{ cursor: 'pointer', color: 'blue' }} />
          </div>
        </div>
      </div>
    </div>
  );
}
