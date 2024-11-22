import React from 'react'
import './Banner.css';
import image from '../images/bgg.jpg';


function Banner() {
  return (
    <div  className='bannerimg'>
         <img src={image} alt="My Image" />
         
    </div>
  );
}

export default Banner