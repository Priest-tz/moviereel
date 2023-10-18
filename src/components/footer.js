import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
  return (
    <footer>
      <div className="media-icons">
        <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faYoutube} />
        </a>
      </div>
      <div className="footer-links">
        <a href="/privacy">Privacy Policy</a>
        <a href="/terms">Terms of Service</a>
        <a href="/contact">Contact Us</a>
      </div>
      <div className='f-text'>
        © 2023 by Oluwadara
      </div>
    </footer>
  );
};








export default Footer;
