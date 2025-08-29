import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../actions/users';
import './login.css';

export default function Login(){

  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login(loginData));
    navigate('/home');
  };

  return (

    <div className='login-container'>

      <div className='login-middle-container'>

      <div className='logo'>
        <svg xmlns="http://www.w3.org/2000/svg" width="97" height="100" viewBox="0 0 97 100" fill="none">
        <path d="M88.7475 1L28.3781 19.3246C27.1207 19.7306 26.1018 20.4795 25.3216 21.5714C24.5413 22.6633 24.1508 23.8866 24.15 25.2414V75.937C23.1615 75.6904 22.1624 75.5035 21.1528 75.3764C20.1431 75.2492 19.1297 75.1827 18.1125 75.1768C8.11289 75.1768 0 80.7349 0 87.5884C0 94.4419 8.11289 100 18.1125 100C28.1121 100 36.225 94.4419 36.225 87.5884V42.2705L84.525 27.7257V63.5273C83.5366 63.2799 82.5376 63.0924 81.5279 62.9649C80.5182 62.8375 79.5048 62.7709 78.4875 62.7652C68.4879 62.7652 60.375 68.3233 60.375 75.1768C60.375 82.0303 68.4879 87.5884 78.4875 87.5884C88.4871 87.5884 96.6 82.0323 96.6 75.1768V6.91297C96.5981 4.81763 95.7749 3.15083 94.1305 1.91255C92.486 0.674274 90.6917 0.37009 88.7475 1Z" fill="#721111"/>
        </svg>
        <p className='logo-name'>SOUND SHARE</p>
      </div>
      


        <div className='l-header'>
          <p className='welcome'>Welcome back</p>
          <p className='continue'>Sign in to continue</p>
        </div>
        
        <div className='login-inputs'>
         
          <input
              className='l-email'
              type="text"
              placeholder='Email'
              value={loginData.email}
              onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
          />
        
           <input
              className='l-password'
              type="password"
              placeholder='Password'
              value={loginData.password}
              onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
      />
          <button className='login-button' onClick={handleLogin}>Sign In</button>
        </div>

        <div className='login-footer'>
          <p className='forgot-password'>Forgot Password?</p>
          <p className='dont-have'>Don't have an account? <span className='l-signup' onClick={() => navigate('/signup')}>Sign Up</span></p>
        </div>

      </div>

    </div>
  )
}
