import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Modal from './modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm } from '@fortawesome/free-solid-svg-icons';
import { API_KEY, DETAILS_API_URL } from '../Api/variables';

  const SearchResult = () => {
  const { movieData } = useLocation().state;
  const navigate = useNavigate();
  const [selectedMovie, setSelectedMovie] = React.useState(null);


  React.useEffect(() => {
    if (!movieData || movieData.length === 0) {
      navigate('/error404');
    }
  }, [movieData, navigate]);

  const openModal = async (movie) => {
    try {
      const response = await fetch(`${DETAILS_API_URL}${movie.id}?api_key=${API_KEY}`);
      if (!response.ok) {
        throw new Error('Failed to fetch movie details');
      }

      const details = await response.json();
      setSelectedMovie(details);
    } catch (error) {
      console.error('Error fetching movie details:', error);
    }
  };

  const closeModal = () => {
    setSelectedMovie(null);
  };

  return (
    <>
      <div className='searchhead'>
      <a href="/"><FontAwesomeIcon icon={faFilm} className='logo-icon' /></a>
        <h2 className='srch-head'>Search Results</h2>
      </div>
      <div className='search-container'>
        <div className={`search-results-container ${selectedMovie ? 'modal-open' : ''}`}>
          {movieData && movieData.length > 0 ? (
            movieData
              .filter(movie => movie.overview.trim() !== '')
              .map((movie) => {
                return (
                  <div className='result' key={movie.id}>
                    <h3>
                      <a className='srch-title' onClick={(e) => { e.preventDefault(); openModal(movie); }}>
                        {movie.title}
                      </a>
                    </h3>
                    <p className='srch-overview'>{movie.overview}</p>
                  </div>
                );
              })
          ) : null}
        </div>
        {selectedMovie && <Modal details={selectedMovie} closeModal={closeModal} />}
      </div>
    </>
  );
};

export default SearchResult;
