import React, { useState, useEffect} from 'react'
import Navigationcolumn from '../components/Navigationcolumn';
import Footer from '../components/footer';
import './myprofile.css';
import Profilepost from '../components/profilepost';
import Singlepostview from '../pages/singlepostview';

import { useDispatch } from 'react-redux';
import { getPosts } from '../actions/posts';
import { useSelector } from 'react-redux';

export default function Myprofile() {


const dispatch = useDispatch();
useEffect(() => {
  dispatch(getPosts()); 
}, [dispatch]);
    
  const posts = useSelector((state) => state.posts);
  const [selectedPost, setSelectedPost] = useState(null); 
  // console.log(posts);


  return (


    <div className='myprofile-container'>

      
         <Navigationcolumn/>
     

      <div className='right-side'>

        <div className='profile-details'>

              <div className='dp-div'>
                  <div className='dp'></div>
              </div>
      
        
            <div className='profile-info'>

                  <div className='user'>
                    <h2>Name</h2>
                    <p className='username-p'>@username</p>
                    <p className='bio'>Music producer & DJ. Creating electronic beats and hip hop tracks.</p>
                  </div>
          

                  <div className='count'>

                    <div className='count-para'>
                        <p>245</p>
                        <p>Posts</p>
                    </div>

                     <div className='count-para'>
                        <p>12.4k</p>
                        <p>Followers</p>
                    </div>

                    <div className='count-para'>
                        <p>892</p>
                        <p>Following</p>
                    </div>
          
                  </div>

                  <div>
                    <button className='edit-button'>Edit Profile</button>
                  </div>
         
            </div>

        </div>

            <div className='posts'>
          
          {/* {posts.map((post) => (
          
          //check this
              <div key={post._id} xs={12} sm={6}>
          
                 <Profilepost post = {post} onclick={} />
          
              </div>
              
          ))} */}

          {posts.map((post) => (
        <div key={post._id} onClick={() => setSelectedPost(post)}>
          <Profilepost post={post} />
        </div>
      ))}

      <Singlepostview post={selectedPost} onClose={() => setSelectedPost(null)} />
    
      

        </div>

        <div className='footer-cover'>
            
        </div>

      </div>
      

      
     
     <Footer/>
       
    </div>

  )
}
