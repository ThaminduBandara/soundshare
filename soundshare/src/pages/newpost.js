import React, { useState, useEffect } from 'react';
import './newpost.css';
import { useLocation, useParams } from 'react-router-dom';
import Navigationcolumn from '../components/Navigationcolumn';
import Footer from '../components/footer';
import Suggestioncolumn from '../components/suggestioncolumn';
import Newpostmiddle from '../components/newpostmiddle';
import Updatepostmiddle from '../components/updatepostmiddle';

export default function Newpost() {


  const location = useLocation();
  // const postData = location.state;
  const postFromState = location.state; 
  const { id } = useParams();           
  const [postData, setPostData] = useState(postFromState || null);


  useEffect(() => {
   
    if (!postData && id) {
      fetch(`/api/post/${id}`)
        .then(res => res.json())
        .then(data => setPostData(data))
        .catch(err => console.error("Failed to fetch post:", err));
    }
  }, [id, postData]);

  return (
        <div className='newpost-container'>
    
          <div className='newpost-upper'>
    
            <div>
              <Navigationcolumn/>
              
            </div>
               
    
            <div>
             {!postData && <Newpostmiddle/>}
             
             {postData && <Updatepostmiddle post={postData} />}
            </div>
           
    
    
             <div>
              <Suggestioncolumn/>
            </div>    
                    
    
          </div>
     
      
       
    
        <Footer/>
    
        </div>
  )
}
