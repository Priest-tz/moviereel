import React from 'react';
import nopageSVG from '../img/error.png';

const npStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh', 
};

const imgStyle = {
  maxWidth: '100%', 
  maxHeight: '100%', 
};

const NoPage = () => {
  return (
    <div style={npStyle}>
      <img style={imgStyle} className='error' src={nopageSVG} alt="No Page" />
    </div>
  );
};

export default NoPage;
