const API_KEY = process.env.EXPO_PUBLIC_TMDB_API_KEY;
const API_BASE_URL = 'https://api.themoviedb.org/3';

export const getPopularMovies = async () => {
  const response = await fetch(`${API_BASE_URL}/movie/popular?api_key=${API_KEY}`);
  const data = await response.json();
  return data.results;
};

export const getTopRatedMovies = async () => {
  const response = await fetch(`${API_BASE_URL}/movie/top_rated?api_key=${API_KEY}`);
  const data = await response.json();
  return data.results;
};

export const getUpcomingMovies = async () => {
  const response = await fetch(`${API_BASE_URL}/movie/upcoming?api_key=${API_KEY}`);
  const data = await response.json();
  return data.results;
};

export const getMovieDetails = async (id) => {
  const response = await fetch(`${API_BASE_URL}/movie/${id}?api_key=${API_KEY}`);
  const data = await response.json();
  return data;
};

export const searchMovies = async (query) => {
  const response = await fetch(`${API_BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`);
  const data = await response.json();
  return data.results;
};

export const getFeaturedMovies = async () => {
  // Using the popular movies endpoint for featured movies as an example
  const response = await fetch(`${API_BASE_URL}/movie/popular?api_key=${API_KEY}&page=2`);
  const data = await response.json();
  return data.results;
};

export const getAnimeMovies = async () => {
  const response = await fetch(`${API_BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=16`);
  const data = await response.json();
  return data.results;
};

export const getMoviesByGenre = async (genreId) => {
  const response = await fetch(`${API_BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=${genreId}`);
  const data = await response.json();
  return data.results;
};

export const getPopularTvSeries = async () => {
  const response = await fetch(`${API_BASE_URL}/tv/popular?api_key=${API_KEY}`);
  const data = await response.json();
  return data.results;
};

export const getAiringTodayTvSeries = async () => {
  const response = await fetch(`${API_BASE_URL}/tv/airing_today?api_key=${API_KEY}`);
  const data = await response.json();
  return data.results;
};

export const getOnTheAirTvSeries = async () => {
  const response = await fetch(`${API_BASE_URL}/tv/on_the_air?api_key=${API_KEY}`);
  const data = await response.json();
  return data.results;
};

export const getTopRatedTvSeries = async () => {
  const response = await fetch(`${API_BASE_URL}/tv/top_rated?api_key=${API_KEY}`);
  const data = await response.json();
  return data.results;
};