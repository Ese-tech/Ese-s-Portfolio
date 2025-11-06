import React, { createContext, useState, useContext, ReactNode } from 'react';
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
  getMoviesByGenre,
  getTrailer,
} from '../utils/api';
import { Movie, TVSeries, MovieContextType } from '../types';

const MovieContext = createContext<MovieContextType | undefined>(undefined);

export const useMovieContext = () => {
  const context = useContext(MovieContext);
  if (!context) {
    throw new Error('useMovieContext must be used within a MovieProvider');
  }
  return context;
};

export const MovieProvider = ({ children }: { children: ReactNode }) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [tvSeries, setTvSeries] = useState<TVSeries[]>([]);
  const [title, setTitle] = useState('Popular');
  const [trailerUrl, setTrailerUrl] = useState<string | null>(null);

  const fetchMovies = async (fetcher: () => Promise<Movie[]>, title: string) => {
    const data = await fetcher();
    setMovies(data);
    setTvSeries([]); 
    setTitle(title);
  };

  const fetchTvSeries = async (fetcher: () => Promise<TVSeries[]>, title: string) => {
    const data = await fetcher();
    setTvSeries(data);
    setMovies([]); 
    setTitle(title);
  };

  const fetchTrailer = async (id: number, type: 'movie' | 'tv') => {
    const url = await getTrailer(id, type);
    setTrailerUrl(url);
  };

  const value: MovieContextType = {
    movies,
    tvSeries,
    title,
    trailerUrl,
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
    fetchTrailer,
    setTrailerUrl,
  };

  return <MovieContext.Provider value={value}>{children}</MovieContext.Provider>;
};