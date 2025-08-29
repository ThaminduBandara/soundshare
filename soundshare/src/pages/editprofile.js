
import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updateUser } from '../actions/users';
import { useSelector } from 'react-redux';
import "./editprofile.css";


const EditProfile = ({ isOpen, onClose }) => {


const navigate = useNavigate();

const user = useSelector((state) => state.auth);

 const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
    bio: ''
    
  });

  const dispatch = useDispatch();

const [profilePicture, setProfilePicture] = useState(null);


   useEffect(() => {
      if (user) {
        setUserData({
          name: user.name || '',
          email: user.email || '',
          password: user.password || '',
          bio: user.bio || '',
          profilePicture: user.profilePicture || '',
        });
      }
    }, [user]);


    const imageInputRef = useRef(null);


    const handleSubmit = (e) => {
        e.preventDefault();


  const formData = new FormData();
  formData.append('name', userData.name);
  formData.append('email', userData.email);
  formData.append('password', userData.password);
  formData.append('bio', userData.bio);
  if (profilePicture) formData.append('profilePicture', profilePicture);

  dispatch(updateUser(user._id,formData));

        setUserData({
           name: '',
           email: '',
           password: '',
           bio: '',
           profilePicture: '',
        });
        if (imageInputRef.current) imageInputRef.current.value = '';
        
        onClose();
        navigate('/login');
      };

  if (!isOpen) return null;


  return (
    <div className="popup-overlay2">
      <div className="popup-container2">
        <button className="close-btn2" onClick={onClose}>
          &times;
        </button>
        <h2>Edit Profile</h2>
        <form onSubmit={handleSubmit} className="edit-form2">
          <div className="profile-pic-section2">
            <img
              src={user?.profilePicture}
              alt="Profile"
              className="profile-pic2"
            />
            <input 
            type="file"
             accept=".jpg,.png"
             ref={imageInputRef} 
            onChange={(e) => setProfilePicture(e.target.files[0])}
          />
          </div>

          <input
            type="text"
            placeholder="Full Name"
            value={userData.name}
            onChange={(e) => setUserData({ ...userData, name: e.target.value })}
            required
          />

          <textarea
            placeholder="Bio"
            value={userData.bio}
            onChange={(e) => setUserData({ ...userData, bio: e.target.value })}
          ></textarea>

          <input
            type="email"
            placeholder="Email"
            value={userData.email}
            onChange={(e) => setUserData({ ...userData, email: e.target.value })}
            required
          />

          <input
            type="password"
            placeholder="New Password"
            value={userData.password}
            onChange={(e) => setUserData({ ...userData, password: e.target.value })}
          />

          <button type="submit" className="save-btn2" onClick={handleSubmit} >Save Changes</button>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
