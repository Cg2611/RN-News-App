import axios from 'axios';

const API_KEY = 'pub_71745618538f9c1974375a72b76699489f476';
const BASE_URL = 'https://newsdata.io/api/1/news';

export const fetchNewsByCategory = async (category) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        apikey: API_KEY,
        category: category,
        language: 'en',
      },
    });

    console.log('API Response:', response.data); // Log full response
    return response.data?.results || [];  // Handle missing results safely
  } catch (error) {
    console.error('Error fetching news:', error.response ? error.response.data : error.message);
    return [];
  }
};


