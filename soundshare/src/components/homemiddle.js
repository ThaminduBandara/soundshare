import React from 'react'
import { useNavigate } from 'react-router-dom';
import './homemiddle.css';
// import Suggestpost from '../components/suggestpost';
import Homepost from '../components/homepost';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Nav from 'react-bootstrap/Nav';

import { useSelector } from 'react-redux';

export default function Homemiddle() {

  const navigate = useNavigate();

  const posts = useSelector((state) => state.posts); 
  console.log(posts);

  return (
    <div className='homemiddle-container'>

        <div className='home-top'>
            <div className='home-top-right' onClick={() => navigate('/login')}>
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

    <div key={post._id} xs={12} sm={6}>

       <Homepost post = {post} />
       

    </div>
    
    ))}
       
       

      
    </div>
  )
}
