import React from 'react'
import './Hero.css'
import profile_image from '../../assets/profile_image.png'

const Hero = () => {
  return (
    <div className='hero'>
      <img className='profile_image' src={profile_image} alt="Profile" />
      <h1>Hi! I'm Fortune Anosike, I can solve your problems with code</h1>
      <p>I'm a Frontend Developer with a passion for creating beautiful and functional web applications. Let's work together to bring your ideas to life!</p>
    </div>
  )
}

export default Hero
