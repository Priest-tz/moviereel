import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/HomePage';
import Loader from './components/loader';
import SearchPage from './Pages/SearchPage';
import NoPage from './Pages/NoPage';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
       
        await Promise.all([
          new Promise(resolve => setTimeout(resolve, 3000)), 
          new Promise(resolve => setTimeout(resolve, 2000)), 
          new Promise(resolve => setTimeout(resolve, 1000)), 
        ]);

        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
       
        setError(error);

        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <BrowserRouter>
      {loading ? (
        <Loader />
      ) : error ? (
        <NoPage />
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path='*' element={<NoPage />} />
        </Routes>
      )}
    </BrowserRouter>
  );
};

export default App;
