import axios from 'axios';

const API_KEY = 'pub_717451e0ae4d0982a4159c95e73847eb54c7a';
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


