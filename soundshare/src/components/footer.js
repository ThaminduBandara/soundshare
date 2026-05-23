
import React from 'react'
import './footer.css'
import fb from '../assests/fb.svg'
import ig from '../assests/SVG.svg'
import x from '../assests/twitter.svg'
import yt from '../assests/youtube.svg'

export default function Footer() {
  return (
    <div className='footer-container'>

        <div className='f-1'>
            <p className='f-name'>SoundShare</p>
            <p className='caption'>Discover and share your favorite sounds</p>
        </div>

        <div className='f-2'>
            <p>Terms of Service</p>
            <p>Privacy Policy</p>
         <p>Cookie Policy</p>
        </div>

        <div className='f-3'>

            <div className='line'></div>
            <p>© 2024 SoundShare. All rights reserved.</p>
        </div>

        <div className='f-4'>
             <p className='help-center'>Help Center</p>
             <p>Community Guidelines</p>
             <p>Contact Us</p>
        </div>

        <div className='f-5'>
              <img src={fb} alt='fb'/>
              <img src={ig} alt='ig'/>
              <img src={x} alt='x'/>
              <img src={yt} alt='yt'/>
        </div>
       
       

    </div>
  )
}





