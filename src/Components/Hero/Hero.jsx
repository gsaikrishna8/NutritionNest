import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'
import { Link } from 'react-scroll'

const Hero = () => {
  return (
    <div className='hero container'>
     <div className="hero-text">
        <h1>Let's Advance Animal Nutrition and Health Together</h1>
     <p>You're in the business of advancing performance to ensure healthier animals that drive healthier business. Improve your operation by partnering with the industry-leader in performance trace minerals and innovative nutritional solutions.</p>
     
     <Link to='products' smooth={true} offset={-260} duration={500}>
     <button className='btn'>Explore more <img src={dark_arrow} alt="" /></button>
     </Link>
     </div>
    </div>
  )
}

export default Hero