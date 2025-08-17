import React from 'react'
import './About.css'
import theme_pattern_color from '../../assets/theme_pattern_color.png'
import about_profile from '../../assets/about_profile.png'

const About = () => {
  return (
    <div className='about'>
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern_color} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img className="about-img" src={about_profile} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>  Frontend Developer focused on building accessible, high-performance web applications with the modern React ecosystem. I specialize in React.js, Next.js, Tailwind CSS, and JavaScript, and I’m currently expanding into mobile and backend development with React Native and Node.js/Express.</p>
            <p>  I turn ideas into clean, maintainable, production-ready interfaces—collaborating closely with clients and cross-functional teams. My priorities are user experience, code quality, and measurable business outcomes, delivered with best practices and consistent standards.</p>
          </div>
          <div className="about-skills">
            <div className="about-skill"><p>React JS</p><hr style={{width: "85%"}}/></div>
            <div className="about-skill"><p>JavaScript</p><hr style={{width: "80%"}}/></div>
            <div className="about-skill"><p>TypeScript</p><hr style={{width: "50%"}}/></div>
            <div className="about-skill"><p>Next JS</p><hr style={{width: "50%"}}/></div>
            <div className="about-skill"><p>Node JS</p><hr style={{width: "60%"}}/></div>
            <div className="about-skill"><p>Express JS</p><hr style={{width: "60%"}}/></div>
            <div className="about-skill"><p>Git</p><hr style={{width: "70%"}}/></div>
          </div>
        </div>
      </div>
      
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>1+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>10+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>4+</h1>
          <p>CERTIFICATES</p>
        </div>
      </div>
    </div>
  )
}

export default About
