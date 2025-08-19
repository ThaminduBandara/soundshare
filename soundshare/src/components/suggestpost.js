import React from 'react'
import './suggestpost.css';
import one from '../assests/1.jpg';
import two from '../assests/2.jpg';
import three from '../assests/3.jpg';

import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

export default function Suggestpost() {
  return (
    <div className='suggestpost-container'>

      <div className='suggestpost-header'>

        <div className='suggestpost-name'>
            <h5>John Doe</h5>
            <h6>@johnDoe</h6>
        </div>
        <button className='follow-button'>Follow</button>
      </div>

      <div className='suggestpost-content'>
        <p>Electronic music producer | Creating vibes for your daily flow</p>
        <div className='profile-status'>
          <p>12.5 followers</p>
          <p>48 tracks</p>
        </div>
      </div>

      <div className='post-img'>
           <p className='top-tracks'>Top Tracks</p>

           <div>
      <Container>
      <Row>
        <Col  xs={6} md={4}>
          <Image className='suggest-pics' src={one} thumbnail />
        </Col>
        <Col  xs={6} md={4}>
          <Image className='suggest-pics' src={two} thumbnail />
        </Col>
        <Col  xs={6} md={4}>
          <Image className='suggest-pics' src={three} thumbnail />
        </Col>
      </Row>
    </Container>
           </div>

      </div>
        

    </div>
  )
}

