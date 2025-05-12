import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://127.0.0.1:8000/api', // Update with production URL later
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
});

export default {
  getJobs() {
    return apiClient.get('/jobs');
  },
  getJob(id) {
    return apiClient.get(`/jobs/${id}`);
  },
  createJob(data) {
    return apiClient.post('/jobs', data);
  },
  updateJob(id, data) {
    return apiClient.put(`/jobs/${id}`, data);
  },
  deleteJob(id) {
    return apiClient.delete(`/jobs/${id}`);
  },
};