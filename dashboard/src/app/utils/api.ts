import axios from 'axios';

const BASE_URL = 'http://localhost:8000/api';

export const fetchCandlestickData = async () => {
    const response = await axios.get(`${BASE_URL}/candlestick-data/`);
    return response.data.data; // Ensure you return the 'data' array
  };

export const fetchLineChartData = async () => {
  const response = await axios.get(`${BASE_URL}/line-chart-data/`);
  return response.data;
};

export const fetchBarChartData = async () => {
  const response = await axios.get(`${BASE_URL}/bar-chart-data/`);
  return response.data;
};

export const fetchPieChartData = async () => {
  const response = await axios.get(`${BASE_URL}/pie-chart-data/`);
  return response.data;
};