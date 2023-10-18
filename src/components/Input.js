import React from 'react';
import { useNavigate } from 'react-router-dom';
import Loader from './loader';
import { SEARCH_API } from '../Api/variables';

const Input = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = React.useState('');
  const [movieData, setMovieData] = React.useState(null);
  const [loading, setLoading] = React.useState(false);


  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = async () => {    
    try {
      setLoading(true); 
      await new Promise(resolve => setTimeout(resolve, 1000));
      const response = await fetch(`${SEARCH_API}${searchQuery}`);
      if (response.ok) {
        const data = await response.json();
        setMovieData(data.results || []); 
        setSearchQuery('');
        navigate('/search', { state: { movieData: data.results || [] } });
      } else {
        console.error('Error:', response.status);
      }
    } catch (error) {
      console.error('Error:', error);
      navigate('/error404');
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = async (event) => {
    if (event.key === 'Enter') {
      await handleSearch();
    }
  };


  return (
    <>
      <div className="search-bar">
          <input
            type="text"
            placeholder="What do you want to watch?"
            value={searchQuery}
            onChange={handleSearchChange}
            onKeyDown={handleKeyDown}
          />
      </div>
      {loading && <Loader />}
    </>
  );
        };
   
  
  export default Input;
  
