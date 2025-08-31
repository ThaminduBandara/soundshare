import React, { useState, useEffect} from 'react'
import Navigationcolumn from '../components/Navigationcolumn';
import Footer from '../components/footer';
import './myprofile.css';
import Editprofile from './editprofile';
import Profilepost from '../components/profilepost';
import Singlepostview from '../pages/singlepostview';
import { useDispatch } from 'react-redux';
import { getPosts } from '../actions/posts';
import { useSelector } from 'react-redux';

export default function Myprofile() {

const [isPopupOpen, setIsPopupOpen] = useState(false);


  const [user, setUser] = useState(null);

  useEffect(() => {
    const profile = localStorage.getItem('profile');
    if (profile) {
      setUser(JSON.parse(profile));
    }
  }, []);


const dispatch = useDispatch();

 useEffect(() => {
        dispatch(getPosts());
       
    }, [dispatch ]);

  



  const posts = useSelector((state) => state.posts);

  const filteredPosts = posts.filter(post => post.creator === user?.username);
  const [selectedPost, setSelectedPost] = useState(null); 

  

  return (


    <div className='myprofile-container'>

      
         <Navigationcolumn/>
     

      <div className='right-side'>

        <div className='profile-details'>

              <div className='dp-div'>
                  <img className='dp' src={user?.profilePicture} alt="dp"  />
              </div>
      
        
            <div className='profile-info'>

                  <div className='user'>
                    <h2>{user?.name}</h2>
                    <p className='username-p'>{user?.username}</p>
                    <p className='bio'>{user?.bio}</p>
                  </div>
          

                  <div className='count'>

                    <div className='count-para'>
                        <p>245</p>
                        <p>Posts</p>
                    </div>

                     <div className='count-para'>
                        <p>{user?.followers}</p>
                        <p>Followers</p>
                    </div>

                    <div className='count-para'>
                        <p>{user?.following}</p>
                        <p>Following</p>
                    </div>
          
                  </div>

                  <div>
                    <button className='edit-button' onClick={() => setIsPopupOpen(true)}>Edit Profile</button>
                  </div>

                  <Editprofile
                      isOpen={isPopupOpen}
                      onClose={() => setIsPopupOpen(false)}                    
                   />
         
            </div>

        </div>

            <div className='posts'>


          {filteredPosts.map((post) => (
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
