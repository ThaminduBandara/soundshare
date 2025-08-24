import React from 'react'
import './newpostmiddle.css';
import Music from '../assests/music.svg';
import Thumbnail from '../assests/thumbnail.svg';

export default function Newpostmiddle() {
  return (
    <div className='newpostmiddle-container'>
    
            <div className='newpostmiddle-top'>
                <div className='newpostmiddle-top-right'>
                    <h2>New Post</h2>
                </div>
                
            </div>

            <div className='newpostmiddle-bottom'>

                <div className='add-music'>
                    <div className='add-icons'>
                        <img src={Music} alt='music'/>
                    </div>
                    <p>Upload your music file</p>
                    <p>MP3, WAV up to 50MB</p>
                </div>

                <div className='add-music'>
                     <div className='add-icons'>
                        <img src={Thumbnail} alt='music'/>
                    </div>
                    <p>Add thumbnail</p>
                    <p>JPG, PNG up to 10MB</p>
                </div>

                <div className='add-details'>
                    
                    <input className='post-input' type="text" placeholder='Title' />
                    <input className='post-input' type="text" placeholder='Caption' />
                    <button className='add-post-btn'>POST</button>

                </div>

            </div>
    
            
    
          
        </div>
  )
}
