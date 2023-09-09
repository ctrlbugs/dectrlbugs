import React from 'react'
import './footer.css'
import BuyMeCoffeeImage from '../../assets/BuyMeaCoffee.png';
//import {FaFacebookF} from 'react-icons/fa'
//import {FiInstagram} from 'react-icons/fi'
//import {IoLogoTwitter} from 'react-icons/io'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faXTwitter,
  faInstagram,
  faLinkedin,
  faBehanceSquare,
} from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>CtrLBugs</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Expeirience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://linkedin.com/in/ctrlbugs" target="_blank">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="https://github.com/ctrlbugs" target="_blank">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="https://instagram.com/ctrlbugs" target="_blank">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="https://twitter.com/ctrlbugs" target="_blank">
          <FontAwesomeIcon icon={faXTwitter} />
        </a>
        <a href="https://www.behance.net/azewenenjigwum" target="_blank">
          <FontAwesomeIcon icon={faBehanceSquare} />
        </a>
      </div>

   {/* Buy me a coffee link */}
   <a
  className="BuyMeaCoffee-link shake-animation"
  href="https://buymeacoffee.com/ctrlbugs"
  target="_blank"
  rel="noreferrer"
>
  <div className="Buymecoffee-container">
    <img
      className="Buymecoffee-icon shake-animation"
      src={BuyMeCoffeeImage}
      alt="Buy Me a Coffee"
    />
    <p className="BuyMeaCoffee-text">Buy me a coffee</p>
  </div>
</a>

      {/* End of Buy me a coffee link */}


      
      <div className="footer__copyright">
        <small>
          &copy; Copyright 2023 Made with ❤️ by CtrLBugs, All rights reserved.
        </small>
      </div>
    </footer>
  )
}

export default Footer