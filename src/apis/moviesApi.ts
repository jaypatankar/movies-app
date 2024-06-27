import axios from 'axios';

const API_KEY = "a38f6e0c";
const BASE_URL = `https://www.omdbapi.com/?apikey=${API_KEY}`;

export const omdb = axios.create({
  baseURL: BASE_URL,
});

export const getMovies = async (query) => {
  const response = await omdb.get('', {
    params: { s: query, plot: "full" },
  });
  return response.data.Search || [];
};

export const getMovieDetails = async (id) => {
  const response = await omdb.get('', {
    params: { i: id },
  });
  return response.data;
};