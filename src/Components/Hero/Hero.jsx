import React from 'react'
import './Hero.css'
import profile_image from '../../assets/profile_image.png'

const Hero = () => {
  return (
    <div className='hero'>
      <img src={profile_image} alt="Profile" />
      <h1><span>Hi! I'm Fortune Anosike,</span> I can solve your problems with code</h1>
      <p>I'm a Frontend Developer with a passion for creating beautiful and functional web applications. Let's work together to bring your ideas to life!</p>
      <div className='hero-action'>
        <div className='hero-connect'>Connect with me</div>
        <div className='hero-resume'>My resume</div>
      </div>
      
    </div>
  )
}

export default Hero
