import React from 'react'
//import {BsLinkedin} from 'react-icons/bs'
//import {FaGithub} from 'react-icons/fa'
//import {ImBehance2} from 'react-icons/im'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faXTwitter,
  faInstagram,
  faLinkedin,
  faBehanceSquare,
} from '@fortawesome/free-brands-svg-icons';

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href="https://linkedin.com/in/ctrlbugs" target="_blank">
        <FontAwesomeIcon icon={faLinkedin}  />
      </a>
      <a href="https://github.com/ctrlbugs" target="_blank">
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a href="https://instagram.com/ctrlbugs" target="_blank">
        <FontAwesomeIcon icon={faInstagram}  />
      </a>
      <a href="https://twitter.com/ctrlbugs" target="_blank">
      <FontAwesomeIcon icon={faXTwitter} />
      </a>
      <a href="https://www.behance.net/azewenenjigwum" target="_blank">
        <FontAwesomeIcon icon={faBehanceSquare} />
      </a>
    </div>
  );
}

export default HeaderSocials;

