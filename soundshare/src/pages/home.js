import React from 'react'
import './home.css';
import Navigationcolumn from '../components/Navigationcolumn';
import Footer from '../components/footer';
import Suggestioncolumn from '../components/suggestioncolumn';

import Homemiddle from '../components/homemiddle';  

export default function Home() {
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
