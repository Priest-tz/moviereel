import React from 'react';
import { API_KEY, IMAGE_SIZE, BASE_URL } from '../Api/variables';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Movie = ({ title, poster_path, vote_average, genres, runtime }) => {
 
  if (!poster_path) {
    return null;
  }

  const imgSrc = `${BASE_URL}${IMAGE_SIZE}${poster_path}?api_key=${API_KEY}`;

  return (
    <div className="movie-card">
      <img src={imgSrc} alt={title} />
      <div className='movie-info'>
      <div className='line'>
      <span className='genre'>
          {genres.slice(0, 2).map((genre, index) => (
            <button key={index}>{genre.name}</button>
            ))}
      </span>
      <span className='rating'><FontAwesomeIcon className='star' icon={faStar} /> {Math.floor(vote_average)}</span>
      </div>
        <span className='runtime'>{runtime} mins</span> 
        <span className='title'>{title}</span>
        
      </div>
    </div>
  );
}

export default Movie;
