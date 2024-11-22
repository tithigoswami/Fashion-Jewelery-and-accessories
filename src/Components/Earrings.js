import React from 'react'
import './Earrings.css';
import img from '../images/earring.webp';

function Earrings() {
  return (
    <div className='earring'>
    <img src={img} alt="My Imagess" />
    <h1>Earrings</h1>
         <p>Find the best earrings at Melani Diamonds. From diamond studs to gold, </p>
         <p>silver, and pearl earring sets, our huge selection will have just.</p>
    </div>
  )
}

export default Earrings