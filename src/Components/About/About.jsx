import React from 'react'
import './About.css'
import about_img from '../../assets/about.jpg'
import play_icon from '../../assets/play-icon.png'

const About = () => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt="" className='about-img'/>
           
        </div>

        <div className="about-right">
            <h3>About AJ Supplements®</h3>
            <h2>Nutrivolent</h2>

            <p>For more than 50 years, AJSupplements has improved the health and wellbeing of both animals and people as a pioneer in the research and development of performance trace minerals and innovative solutions.</p>
        </div>
    </div>
  )
}

export default About