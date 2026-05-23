import React, { useEffect} from 'react'
import { useDispatch }  from 'react-redux';
import { getPosts } from '../actions/posts';
import './home.css';
import Navigationcolumn from '../components/Navigationcolumn';
import Footer from '../components/footer';
import Suggestioncolumn from '../components/suggestioncolumn';
import Homemiddle from '../components/homemiddle';  

export default function Home() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch ]);

  return (


    <div className='home-container'>

      <div className='home-upper'>

        <div>
          <Navigationcolumn/>
        </div>
           

        <div>
          <Homemiddle/>
        </div>
       


         <div>
          <Suggestioncolumn/>
        </div>    
                

      </div>

    <Footer/>

    </div>
  )
}
