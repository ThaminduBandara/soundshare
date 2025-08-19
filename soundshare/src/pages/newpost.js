import React from 'react'
import './newpost.css';
import Navigationcolumn from '../components/Navigationcolumn';
import Footer from '../components/footer';
import Suggestioncolumn from '../components/suggestioncolumn';
import Newpostmiddle from '../components/newpostmiddle';

export default function Newpost() {
  return (
        <div className='newpost-container'>
    
          <div className='newpost-upper'>
    
            <div>
              <Navigationcolumn/>
            </div>
               
    
            <div>
             <Newpostmiddle/>
            </div>
           
    
    
             <div>
              <Suggestioncolumn/>
            </div>    
                    
    
          </div>
     
      
       
    
        <Footer/>
    
        </div>
  )
}
