// import React, {useState} from 'react';
// import './newpostmiddle.css';
// import Music from '../assests/music.svg';
// import Thumbnail from '../assests/thumbnail.svg';
// import FileBase from 'react-file-base64';
// import { useDispatch } from 'react-redux';

// import { createPost } from '../actions/posts'



// export default function Newpostmiddle() {

//     const [postData, setPostData] = useState({

//         creator: '', title:'', caption:'', selectedMFile: '', selectedPFile:''
//     });

//     const dispatch = useDispatch();

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         dispatch(createPost(postData));
//     }


//   return (
//     <div className='newpostmiddle-container'>
    
//             <div className='newpostmiddle-top'>
//                 <div className='newpostmiddle-top-right'>
//                     <h2>New Post</h2>
//                 </div>
                
//             </div>

//             <div className='newpostmiddle-bottom'>

//                 <div className='add-music'>
//                     <FileBase 
//                     type="file" 
//                     multiple={false} 
//                     onDone={({base64}) => setPostData({ ...postData, selectedMFile: base64})} 
//                     />
//                     <div className='add-icons'>
//                         <img src={Music} alt='music'/>
//                     </div>
//                     <p>Upload your music file</p>
//                     <p>MP3, WAV up to 50MB</p>
//                 </div>

//                 <div className='add-music'>
//                      <FileBase 
//                     type="file" 
//                     multiple={false} 
//                     onDone={({base64}) => setPostData({ ...postData, selectedPFile: base64})}
                    
//                     />
//                      <div className='add-icons'>
//                         <img src={Thumbnail} alt='music'/>
//                     </div>
//                     <p>Add thumbnail</p>
//                     <p>JPG, PNG up to 10MB</p>
//                 </div>

//                 <div className='add-details'>
                    
//                     <input className='post-input' type="text" placeholder='Title' value={postData.title} onChange={(e) => setPostData({...postData, title: e.target.value})}/>
//                     <input className='post-input' type="text" placeholder='Caption' value={postData.caption} onChange={(e) => setPostData({...postData, caption: e.target.value})}/>
//                     <button className='add-post-btn' onClick={handleSubmit}>POST</button>

//                 </div>

//             </div>
    
            
    
          
//         </div>
//   )
// }


import React, { useState, useRef } from 'react';
import './newpostmiddle.css';
import Music from '../assests/music.svg';
import Thumbnail from '../assests/thumbnail.svg';
import { useDispatch } from 'react-redux';
import { createPost } from '../actions/posts';

export default function Newpostmiddle() {


  // const [postData, setPostData] = useState({
  //   // creator: '',
  //   title: '',
  //   caption: '',
  //   selectedMFile: '',
  //   selectedPFile: ''
  // });

  // const dispatch = useDispatch();

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   dispatch(createPost(postData));
  // };

  
  // const handleFileChange = (e, field) => {
  //   const file = e.target.files[0];
  //   if (!file) return;

  //   const reader = new FileReader();
  //   reader.readAsDataURL(file);
  //   reader.onloadend = () => {
  //     setPostData({ ...postData, [field]: reader.result });
  //   };
  // };




const [postData, setPostData] = useState({
  title: '',
  caption: ''
});

const dispatch = useDispatch();

const [selectedMFile, setSelectedMFile] = useState(null);
const [selectedPFile, setSelectedPFile] = useState(null);


  const musicInputRef = useRef(null);
  const thumbnailInputRef = useRef(null);

const handleSubmit = (e) => {
  e.preventDefault();

  const formData = new FormData();
  formData.append('title', postData.title);
  formData.append('caption', postData.caption);

  if (selectedMFile) formData.append('selectedMFile', selectedMFile);
  if (selectedPFile) formData.append('selectedPFile', selectedPFile);

  dispatch(createPost(formData));

  setPostData({
      title: '',
      caption: '',
      selectedMFile: '',
      selectedPFile: ''
    });
    if (musicInputRef.current) musicInputRef.current.value = '';
    if (thumbnailInputRef.current) thumbnailInputRef.current.value = '';

};

// const handleFileChange = (e, fileSetter) => {
//   const file = e.target.files[0];
//   if (!file) return;
//   fileSetter(file);
// };




  return (

    <div className='newpostmiddle-container'>
      <div className='newpostmiddle-top'>
        <div className='newpostmiddle-top-right'>
          <h2>New Post</h2>
        </div>
      </div>

      <div className='newpostmiddle-bottom'>
        
        <div className='add-music'  >
          <input 
            type="file"
             accept=".jpg,.png"
             ref={musicInputRef} 
            onChange={(e) => setSelectedMFile(e.target.files[0])}
          />

          <div className='add-icons'>
            <img src={Music} alt='music' />
          </div>
          <p>Upload your music file</p>
          <p>MP3, WAV up to 50MB</p>
        </div>

        
        <div className='add-music'>
          <input
            type="file"
            accept=".jpg,.png"
            ref={thumbnailInputRef} 
            onChange={(e) => setSelectedPFile(e.target.files[0])}
          />
          <div className='add-icons'>
            <img src={Thumbnail} alt='thumbnail' />
          </div>
          <p>Add thumbnail</p>
          <p>JPG, PNG up to 10MB</p>
        </div>

       
        <div className='add-details'>
          <input
            className='post-input'
            type="text"
            placeholder='Title'
            value={postData.title}
            onChange={(e) =>
              setPostData({ ...postData, title: e.target.value })
            }
          />
          <input
            className='post-input'
            type="text"
            placeholder='Caption'
            value={postData.caption}
            onChange={(e) =>
              setPostData({ ...postData, caption: e.target.value })
            }
          />
          <button className='add-post-btn' onClick={handleSubmit}>
            POST
          </button>
        </div>
      </div>
    </div>
  );
}
