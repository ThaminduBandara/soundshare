import React from 'react'
import './suggestioncolumn.css';
import Nav from 'react-bootstrap/Nav';
import Suggestpost from './suggestpost';

export default function Suggestioncolumn() {
  return (
    <div className='suggestioncolumn-container'>

        <div className='suggestioncolumn-header'>
            <h3>Suggestions for you</h3>
            <h6>People you might like to follow</h6>
        </div>

    <div className='suggestion-buttons'>

      <Nav variant='pills' defaultActiveKey="/home" className="custom-pill">
      <Nav.Item>
        <Nav.Link href="/home">All</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">Popular</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">Similar to Your Followers</Nav.Link>
      </Nav.Item>
      </Nav>
      
    </div>

    <div className='suggest-posts'>

        <Suggestpost/>
        <Suggestpost/>
        <Suggestpost/>
        <Suggestpost/>
        <Suggestpost/>
        <Suggestpost/>
         
        <div className='footer-cover-2'>
            
        </div>
    </div>

     

    </div>
  )
}
