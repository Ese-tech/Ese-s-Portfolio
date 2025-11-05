import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';

const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loggedInUser = localStorage.getItem('user');
    if (loggedInUser) {
      setUser(JSON.parse(loggedInUser));
    }
    fetchFeaturedMovies();
  }, []);

  const fetchMovies = async (url) => {
    try {
      const response = await axios.get(url);
      setMovies(response.data.results);
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  const fetchFeaturedMovies = () => fetchMovies('https://api.themoviedb.org/3/movie/popular?api_key=YOUR_API_KEY');
  const fetchPopularMovies = () => fetchMovies('https://api.themoviedb.org/3/movie/popular?api_key=YOUR_API_KEY');
  const fetchTopRatedMovies = () => fetchMovies('https://api.themoviedb.org/3/movie/top_rated?api_key=YOUR_API_KEY');
  const fetchUpcomingMovies = () => fetchMovies('https://api.themoviedb.org/3/movie/upcoming?api_key=YOUR_API_KEY');
  const fetchAnimeMovies = () => fetchMovies('https://api.themoviedb.org/3/discover/movie?api_key=YOUR_API_KEY&with_keywords=210024');
  const searchMovies = (query) => fetchMovies(`https://api.themoviedb.org/3/search/movie?api_key=YOUR_API_KEY&query=${query}`);
  const fetchPopularTvSeries = () => fetchMovies('https://api.themoviedb.org/3/tv/popular?api_key=YOUR_API_KEY');
  const fetchAiringTodayTvSeries = () => fetchMovies('https://api.themoviedb.org/3/tv/airing_today?api_key=YOUR_API_KEY');
  const fetchOnTheAirTvSeries = () => fetchMovies('https://api.themoviedb.org/3/tv/on_the_air?api_key=YOUR_API_KEY');
  const fetchTopRatedTvSeries = () => fetchMovies('https://api.themoviedb.org/3/tv/top_rated?api_key=YOUR_API_KEY');
  const fetchMoviesByGenre = (genreId) => fetchMovies(`https://api.themoviedb.org/3/discover/movie?api_key=YOUR_API_KEY&with_genres=${genreId}`);

  const login = async (email, password) => {
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', { email, password });
      setUser(response.data);
      localStorage.setItem('user', JSON.stringify(response.data));
      return true;
    } catch (error) {
      return false;
    }
  };

  const register = async (username, email, password) => {
    try {
      await axios.post('http://localhost:5000/api/auth/register', { username, email, password });
      return true;
    } catch (error) {
      return false;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const value = {
    movies,
    user,
    fetchFeaturedMovies,
    fetchPopularMovies,
    fetchTopRatedMovies,
    fetchUpcomingMovies,
    fetchAnimeMovies,
    searchMovies,
    fetchPopularTvSeries,
    fetchAiringTodayTvSeries,
    fetchOnTheAirTvSeries,
    fetchTopRatedTvSeries,
    fetchMoviesByGenre,
    login,
    register,
    logout,
  };

  return (
    <MovieContext.Provider value={value}>
      {children}
    </MovieContext.Provider>
  );
};

export const useMovieContext = () => useContext(MovieContext);