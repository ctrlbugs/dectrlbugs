import React, { useEffect } from 'react'; // Import useEffect for handling the Typed.js initialization
import './header.css';
import CTA from './CTA';
import ME from '../../assets/me.png';
import HeaderSocial from './HeaderSocials';
import Typed from 'typed.js'; // Import Typed.js library

const Header = () => {
  useEffect(() => {
    // Function to initialize Typed.js
    const initializeTyped = () => {
      const typed = new Typed('.text-light', {
        strings: ['Web Developer,  UI/UX Designer'],
        typeSpeed: 400,
        backSpeed: 300,
        loop: false, // Disable looping for one-time typing
        onComplete: () => {
          // After typing is complete, wait for 5 minutes before cleaning up Typed instance
          setTimeout(() => {
            typed.destroy();
            // Initialize Typed.js again for the next iteration
            initializeTyped();
          }, 5 * 60 * 1000); // 5 minutes in milliseconds
        },
      });

      // Cleanup the Typed instance when the component unmounts
      return () => {
        typed.destroy();
      };
    };

    // Initialize Typed.js initially
    const cleanupTyped = initializeTyped();

    // Cleanup Typed.js on component unmount
    return () => {
      cleanupTyped();
    };
  }, []);

  return (
    <header>
    <div className="container header__container">
      <h5 className="header-h5">Hi There 👋🏾</h5>
      <h1>I am <span className="header-span">Azee.</span></h1>  
      <div className="text-light-container">
      <h3>
  <span className="text-light"></span>
</h3>
      </div>
      <CTA />
      <HeaderSocial />

      <div className="me">
        <img src={ME} alt="me" />
      </div>

      <a href="#contact" className="scroll__down">
        Scroll Down
      </a>
    </div>
  </header>
);

};

export default Header;
