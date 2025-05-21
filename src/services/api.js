// src/services/api.js
import axios from 'axios';

const API_KEY = import.meta.env.VITE_UNSPLASH_API_KEY;

axios.defaults.baseURL = 'https://api.unsplash.com';

export const fetchImages = async (query, page = 1, perPage = 12) => {
  try {
    const response = await axios.get('/search/photos', {
      params: {
        query,
        page,
        per_page: perPage,
        client_id: API_KEY,
      },
    });
    return response.data.results;
  } catch (error) {
    console.error('Error fetching images:', error);
    throw error;
  }
};
