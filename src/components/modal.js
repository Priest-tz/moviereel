import React from 'react';
import { API_KEY, IMAGE_SIZE_2, BASE_URL } from '../Api/variables';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faTimesRectangle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm } from '@fortawesome/free-solid-svg-icons';


const Modal = ({ details, closeModal }) => {

const imgSrc = `${BASE_URL}${IMAGE_SIZE_2}${details.backdrop_path}?api_key=${API_KEY}`;

  return (
    <div className="modal">

      <div className="modal-header">

        <div className='modal-logo'>
        <a href="/"><FontAwesomeIcon icon={faFilm} className='logo-icon' /></a>
        </div>

        <FontAwesomeIcon className="close" onClick={closeModal} icon={faTimesRectangle} />
      </div>

      <div className="modal-body">
          <img className='modal-image' src={imgSrc} alt={details.title} />
          <div className='modal-line1'>
          <span className='modal-title'>{details.title}</span>
          <span className='modal-genre'>
            {details.genres.map((genre, index) => (
            <button key={index}>{genre.name}</button>
            ))}
          </span>
          <span className='modal-icon'>
            <FontAwesomeIcon className='star' icon={faStar} /> {Math.floor(details.vote_average)}</span>
          </div>

          <div className='modal-line2'>
          <span className='runtime'>{details.runtime} mins</span>
          </div>

          <span className='modal-overview'>{details.overview}</span>
          </div> 
    </div>
  );
}

export default Modal;
