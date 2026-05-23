
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '../actions/users';
import './editprofile.css';

const EditProfile = ({ isOpen, onClose }) => {
  const user = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const imageInputRef = useRef(null);

  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
    bio: ''
  });
  const [profilePicture, setProfilePicture] = useState(null);

  useEffect(() => {
    if (!user) return;

    setUserData({
      name: user.name || '',
      email: user.email || '',
      password: user.password || '',
      bio: user.bio || ''
    });
    setProfilePicture(user.profilePicture || null);
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', userData.name);
    formData.append('email', userData.email);
    formData.append('password', userData.password);
    formData.append('bio', userData.bio);
    if (profilePicture && profilePicture instanceof File) {
      formData.append('profilePicture', profilePicture);
    }

    dispatch(updateUser(user._id, formData));

    setUserData({ name: '', email: '', password: '', bio: '' });
    setProfilePicture(null);
    if (imageInputRef.current) imageInputRef.current.value = '';
    onClose();
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
              src={profilePicture instanceof File ? URL.createObjectURL(profilePicture) : (profilePicture || user?.profilePicture || '')}
              alt="Profile"
              className="profile-pic2"
            />
            <input
              type="file"
              accept=".jpg,.png"
              ref={imageInputRef}
              onChange={(e) => {
                const file = e.target.files[0];
                if (file) {
                  setProfilePicture(file);
                }
              }}
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
          />

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

          <button type="submit" className="save-btn2">Save Changes</button>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
