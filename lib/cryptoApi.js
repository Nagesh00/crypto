// lib/cryptoApi.js
import axios from 'axios';

const API_BASE_URL = 'https://api.coingecko.com/api/v3';

// Function to get top trending coins (for news/trends section)
export const getTrendingCoins = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/search/trending`);
    return response.data.coins;
  } catch (error) {
    console.error("Error fetching trending coins:", error);
    return [];
  }
};

// Function to get market data for a list of coins (for the main price table)
export const getMarketData = async (coinIds = ['bitcoin', 'ethereum', 'ripple']) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/coins/markets`, {
      params: {
        vs_currency: 'usd',
        ids: coinIds.join(','),
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching market data:", error);
    return [];
  }
};
