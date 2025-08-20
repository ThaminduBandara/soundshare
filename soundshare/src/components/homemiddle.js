import React from 'react'
import { useNavigate } from 'react-router-dom';
import './homemiddle.css';
// import Suggestpost from '../components/suggestpost';
import Homepost from '../components/homepost';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Nav from 'react-bootstrap/Nav';

export default function Homemiddle() {

  const navigate = useNavigate();

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

        <Homepost/>
        <Homepost/>
        <Homepost/>
        <Homepost/>

      
    </div>
  )
}
