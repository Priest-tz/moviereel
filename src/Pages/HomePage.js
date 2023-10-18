import React from "react";
import Movie from "../components/moviecard";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRepeat } from '@fortawesome/free-solid-svg-icons';
import Footer from "../components/footer";
import Header from "../components/Header";
import { BASE_API, DETAILS_API_URL } from "../Api/variables";



function Home() {
  const [movies, setMovies] = React.useState([]);
  const [page, setPage] = React.useState(1);
  const [spin, setSpin] = React.useState(false);

  const API_KEY = "271c0a89945619f2337683d80a08ec02";

  const featured_API = `${BASE_API}?sort_by=popularity.desc&api_key=${API_KEY}&page=${page}`;

  const getMovieDetails = async (movieId) => {
    const response = await fetch(DETAILS_API_URL + movieId + "?api_key=" + API_KEY);
    const data = await response.json();
    return data;
  };

  const fetchFeaturedMovies = async () => {
    setSpin(true);
    const response = await fetch(featured_API);
    const data = await response.json();

    const moviesWithDetails = await Promise.all(data.results.map(async (movie) => {
      const details = await getMovieDetails(movie.id);
      return details;
    }));

    setMovies(moviesWithDetails);
    setSpin(false);
  };

  React.useEffect(() => {
    fetchFeaturedMovies();
  }, [page]);

  const handleRefresh = () => {
    setPage(page + 1);
  };

  return (
    <>
      <Header />
      <div className='Heading'>
        <span className="feature">Featured Movies</span>
        <a>
          <FontAwesomeIcon
            onClick={handleRefresh}
            className="refresh"
            icon={faRepeat}
            spin={spin}
            title="Refresh"
          />
        </a>
      </div>
      <div className="movie-container">
        {movies.length > 0 &&
          movies.map((movie) => (
            <Movie key={movie.id} {...movie} />
          ))}
      </div>
      <Footer />
    </>
  );
}

export default Home;
