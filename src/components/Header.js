import React from 'react';
import Logo from "./logo"
import Input from "./Input"
import { API_KEY, BASE_URL, RANDOM_URL, DETAILS_API_URL, IMAGE_SIZE } from '../Api/variables';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImdb } from '@fortawesome/free-brands-svg-icons';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';


const getRandomMovies = async () => {
  try {
    const response = await fetch(RANDOM_URL);
    const randomData = await response.json();
    
    const movieDetailsPromises = randomData.results.map(async (movie) => {
      const detailsResponse = await fetch(`${DETAILS_API_URL}${movie.id}?api_key=${API_KEY}&language=en-US`);
      const detailsData = await detailsResponse.json();
      return detailsData;
    });

    const movieDetails = await Promise.all(movieDetailsPromises);
    const slicedRandomMovies = movieDetails.slice(0, 20);
    return slicedRandomMovies;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; 
  }
};

const Header = () => {
  const [movies, setMovies] = React.useState([]);
  const [currentMovieIndex, setCurrentMovieIndex] = React.useState(0);

  React.useEffect(() => {
    const fetchRandomMoviesData = async () => {
      try {
        const randomMovies = await getRandomMovies();
        setMovies(randomMovies);
      } catch (error) {
        console.error("Error fetching random movies:", error);
      }
    };
    fetchRandomMoviesData();
  }, []);

  React.useEffect(() => {
    if (movies.length === 0) return;

    const timer = setInterval(() => {
      setCurrentMovieIndex((prevIndex) => (prevIndex + 1) % movies.length);
    }, 30000);
    return () => clearInterval(timer);
  }, [movies]);

  const currentMovie = movies[currentMovieIndex];
  if (!currentMovie) {
    return null;
  }

  const imgSrc = `${BASE_URL}${IMAGE_SIZE}${currentMovie.backdrop_path}?api_key=${API_KEY}`;
  const backgroundPosition = `${currentMovieIndex * 100}% 0%`;

  return (
    <>
      <div className="Head" style={{backgroundImage: `url(${imgSrc})`, backgroundPosition}}>      
        <Input />
        <div className="image-slider">
          <h2 className="title">{currentMovie.title}</h2>
          <p className='rating'>
            <FontAwesomeIcon icon={faImdb} className='imdb' /> {Math.floor(currentMovie.vote_average)}
          </p>
          <p className="overview">{currentMovie.overview}</p>
          <button className="watch-trailer">
            <FontAwesomeIcon className='trailer' icon={faPlayCircle} />
            WATCH TRAILER
          </button>
        </div>
      </div>
    </>
  );
  };  

export default Header ;
