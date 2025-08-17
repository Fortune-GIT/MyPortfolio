import React from 'react'
import './MyWork.css'
import theme_pattern from '../../assets/theme_pattern.png'

const MyWork = () => {
  return (
    <div className='my-work'>
      <div className="mywork-title">
        <h1>My Work</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="mywork-container">
        {mywork_.map((work, index) => ()}
      </div>
    </div>
  )
}

export default MyWork
