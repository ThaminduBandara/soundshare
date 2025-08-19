import React from 'react'
import './homepost.css';
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import Placeholder from 'react-bootstrap/Placeholder';
import one from '../assests/1.jpg';
import notifications from '../assests/like.svg';
import messages from '../assests/comment.svg';
import share from '../assests/share.svg';

export default function Homepost() {
  return (
    


    <div className="homepost-container">
      <Card style={{ width: '40rem' }}>
        <Card.Img className='homepost-img' variant="top" src={one} />
        <Card.Body>
          <Card.Title className='hp-name'>
            <h4>name</h4>
            <h6>@username</h6>
          </Card.Title>
          <Card.Text className='hp-name'>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>

          <div className='like-comment'>
            <img src={notifications} alt="notifications" />
            <img src={messages} alt="messages" />
            <img src={share} alt="messages" />
            <div>234 plays</div>

          </div>
        </Card.Body>
      </Card>

    </div>

    
  )
}
