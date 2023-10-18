import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm } from '@fortawesome/free-solid-svg-icons';

const Logo = ({ textColor, fontSize }) => {
  const iconStyle = {
    color: textColor,
  };

  return (
    <div className="navbar">
      <a href="/" className='logo'>
        <h1 style={iconStyle}>
          <FontAwesomeIcon icon={faFilm} className='logo-icon' />
          MovieReel
        </h1>
      </a>
    </div>
  );
};

export default Logo;
