import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {logout} from '../actions/users';
import './homemiddle.css';
import Homepost from '../components/homepost';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Nav from 'react-bootstrap/Nav';
import Singlepostview from '../pages/singlepostview';


import { useSelector } from 'react-redux';

export default function Homemiddle() {

  const navigate = useNavigate();

  const posts = useSelector((state) => state.posts);
  const [selectedPost, setSelectedPost] = useState(null); 
  
const dispatch = useDispatch();

const handleLogout = () => {
  dispatch(logout());
  navigate('/login')
};

  return (
    <div className='homemiddle-container'>

        <div className='home-top'>
            <div className='home-top-right' onClick={handleLogout}>
                <i className="bi bi-box-arrow-in-right" style={{ fontSize: '2rem' }}></i>
                <p>Log Out</p>
            </div>
            
        </div>

        <div className='suggestion-buttons-2'>

      <Nav variant='pills' defaultActiveKey="/home" className="custom-pill-2">
      <Nav.Item>
        <Nav.Link href="/home">Trading</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">New</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">Following</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-3">Hip Hop</Nav.Link>
      </Nav.Item>
      </Nav>
      
    </div>

    {posts.map((post) => (

    <div key={post._id} xs={12} sm={6} onClick={() => setSelectedPost(post)}>

       <Homepost post = {post} />
       

    </div>
    
    ))}

    <Singlepostview post={selectedPost} onClose={() => setSelectedPost(null)} />
        
    </div>
  )
}
