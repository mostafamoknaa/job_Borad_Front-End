import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://127.0.0.1:8000/api',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
});

export const fetchEmployers = (page = 1, perPage = 12) => {
    return apiClient.get('/employers', {
      params: {
        page,
        per_page: perPage,
      },
    });
  };

export default apiClient;

