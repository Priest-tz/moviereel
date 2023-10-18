
const API_KEY = process.env.REACT_APP_API_KEY;
const IMAGE_SIZE = "w1280";
const IMAGE_SIZE_2 = "w780";
const BASE_URL = "https://image.tmdb.org/t/p/";
const BASE_API = "https://api.themoviedb.org/3/discover/movie";
const DETAILS_API_URL = "https://api.themoviedb.org/3/movie/";
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`;
const RANDOM_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=primary_release_date.desc&include_adult=false&include_video=false&page=1&vote_count.gte=100&with_backdrop_path=true`;


export {
  API_KEY,
  IMAGE_SIZE,
  IMAGE_SIZE_2,
  BASE_URL,
  DETAILS_API_URL,
  SEARCH_API,
  RANDOM_URL,
  BASE_API
};
