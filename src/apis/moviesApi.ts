import axios from 'axios';

const API_KEY = import.meta.env.VITE_OMDB_API_KEY;
const BASE_URL = `${import.meta.env.VITE_OMDB_API_URL}/?apikey=${API_KEY}`;

export const omdb = axios.create({
  baseURL: BASE_URL,
});

export const getMovies = async (query) => {
  const response = await omdb.get('', {
    params: { s: query, plot: "full", page: 1 },
  });
  return response.data.Search || [];
};

export const getMovieDetails = async (id) => {
  const response = await omdb.get('', {
    params: { i: id },
  });
  return response.data;
};