import React from 'react'
import './Body4.css';
import images from '../images/ring.webp';

function Body4() {
  return (
    <div className='ring'>
    <img src={images} alt="My Images" />
    <h1>Rings</h1>
         <p>Find the best rings at Melani Diamon. Our huge, showstopping collection </p>
         <p>has exactly what you're looking for and much, much more.</p>
    </div>
  )
}

export default Body4;