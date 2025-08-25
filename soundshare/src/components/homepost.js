import React from 'react'
import './homepost.css';
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import Placeholder from 'react-bootstrap/Placeholder';
import notifications from '../assests/like.svg';
import messages from '../assests/comment.svg';
import share from '../assests/share.svg';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';



export default function Homepost({post}) {
  return (
    


    <div className="homepost-container">
      <Card style={{ width: '40rem' }}>
        <Card.Img className='homepost-img' variant="top" src={post.selectedPFile} />
        <Card.Body>
          <Card.Title className='hp-name'>
            <h4>{post.title}</h4>
            <h6>{post.creator}</h6>
            <DeleteIcon onClick={() => {}}/>
              <EditIcon onClick={() => {}}/>
          </Card.Title>
          <Card.Text className='hp-name'>
            {post.caption}
          </Card.Text>

          <div className='like-comment'>
            <img src={notifications} alt="notifications" onClick={() => {}} />{post.likeCount}
            <img src={messages} alt="messages" />
            <img src={share} alt="messages" />
            <div>234 plays</div>

          </div>
        </Card.Body>
      </Card>

    </div>

    
  )
}
