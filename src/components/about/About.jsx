import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>5+ Years Working</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>175+ Worldwide</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>44+ Completed</small>
            </article>
          </div>

          <p>
          I am a passionate Web Developer and UI/UX Designer with expertise in HTML, CSS, JavaScript, and frontend frameworks. My work involves translating designs into responsive, clean code. I excel in creating user-centric interfaces informed by thorough research and prototyping. I thrive in collaborative, cross-functional teams, and I'm known for creative problem-solving. My mission is to bridge technology and human interaction through intuitive, aesthetically pleasing design. I look forward to bringing your digital projects to life.          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About