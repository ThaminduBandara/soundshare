import React from 'react'
import './homemiddle.css';
// import Suggestpost from '../components/suggestpost';
import Homepost from '../components/homepost';
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function Homemiddle() {
  return (
    <div className='homemiddle-container'>

        <div className='home-top'>
            <div className='home-top-right'>
                <i className="bi bi-box-arrow-in-right" style={{ fontSize: '2rem' }}></i>
                <p>Log Out</p>
            </div>
            
        </div>

        <Homepost/>
        <Homepost/>
        <Homepost/>
        <Homepost/>

      
    </div>
  )
}
