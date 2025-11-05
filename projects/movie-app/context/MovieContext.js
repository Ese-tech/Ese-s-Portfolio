import React, { createContext, useState, useContext } from 'react';
import {
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
  searchMovies,
  getFeaturedMovies,
  getAnimeMovies,
  getPopularTvSeries,
  getAiringTodayTvSeries,
  getOnTheAirTvSeries,
  getTopRatedTvSeries,
  getMoviesByGenre, // Import the new function
} from '../utils/api';

const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext);

export const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [tvSeries, setTvSeries] = useState([]);
  const [title, setTitle] = useState('Popular');

  const fetchMovies = async (fetcher, title) => {
    const data = await fetcher();
    setMovies(data);
    setTvSeries([]); 
    setTitle(title);
  };

  const fetchTvSeries = async (fetcher, title) => {
    const data = await fetcher();
    setTvSeries(data);
    setMovies([]); 
    setTitle(title);
  };

  const value = {
    movies,
    tvSeries,
    title,
    fetchPopularMovies: () => fetchMovies(getPopularMovies, 'Popular'),
    fetchTopRatedMovies: () => fetchMovies(getTopRatedMovies, 'Top Rated'),
    fetchUpcomingMovies: () => fetchMovies(getUpcomingMovies, 'Upcoming'),
    fetchFeaturedMovies: () => fetchMovies(getFeaturedMovies, 'Featured'),
    fetchAnimeMovies: () => fetchMovies(getAnimeMovies, 'Anime'),
    searchMovies: async (query) => {
      const data = await searchMovies(query);
      setMovies(data);
      setTvSeries([]);
      setTitle(`Search Results for "${query}"`);
    },
    fetchPopularTvSeries: () => fetchTvSeries(getPopularTvSeries, 'Popular TV Series'),
    fetchAiringTodayTvSeries: () => fetchTvSeries(getAiringTodayTvSeries, 'Airing Today'),
    fetchOnTheAirTvSeries: () => fetchTvSeries(getOnTheAirTvSeries, 'On The Air'),
    fetchTopRatedTvSeries: () => fetchTvSeries(getTopRatedTvSeries, 'Top Rated TV Series'),
    fetchMoviesByGenre: (genreId) => fetchMovies(() => getMoviesByGenre(genreId), 'Genre'),
  };

  return <MovieContext.Provider value={value}>{children}</MovieContext.Provider>;
};