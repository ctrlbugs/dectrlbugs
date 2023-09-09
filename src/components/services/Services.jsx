import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>🎨 User-Centered Design - Crafting interfaces that prioritize user needs through research-driven design processes.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>📊 Wireframing & Prototyping - Creating interactive prototypes to visualize user flows and iterate on designs.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>🌈 Visual Design - Designing aesthetically pleasing interfaces with attention to color, typography, and imagery.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>🧠 User Research - Conducting user interviews and usability testing to inform design decisions.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>📱 Mobile & Responsive Design - Adapting designs for seamless experiences across devices and screen sizes.</p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX */}
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>💻 Frontend Development - Building responsive web applications using HTML, CSS, JavaScript, and frontend frameworks.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>🚀 Performance Optimization - Ensuring fast-loading and smooth-performing websites for optimal user experiences.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>🔒 Cross-Browser Compatibility - Developing websites that work consistently across different browsers.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p> Custom Web Components - Crafting unique and interactive elements to enhance user engagement.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>📈 Analytics Integration - Implementing tracking and analytics tools to gather insights for improvement.</p>
            </li>
          </ul>
        </article>
        {/* WEB DEVELOPMENT */}
        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>✍️ Copywriting - Crafting engaging and compelling website copy that resonates with the target audience.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>📸 Visual Content - Creating impactful graphics, images, and visual assets to complement designs.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>🎥 Multimedia Integration - Incorporating videos and animations to enhance storytelling and user engagement.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>📢 Social Media Content - Developing content for social media platforms to increase brand visibility.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>📝 Blogging - Writing informative and valuable blog posts on topics relevant to your industry.</p>
            </li>
          </ul>
        </article>
        {/* END OF CONTENT CREATION */}
      </div>
    </section>
  )
}

export default Services