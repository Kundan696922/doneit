import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

// Auth API
export const authAPI = {
  register: (data) => axios.post(`${API_URL}/auth/register`, data),
  login: (data) => axios.post(`${API_URL}/auth/login`, data),
  getProfile: () => axios.get(`${API_URL}/auth/me`),
  updateProfile: (data) => axios.put(`${API_URL}/auth/me`, data),
};

// Project API
export const projectAPI = {
  getAll: () => axios.get(`${API_URL}/projects`),
  getOne: (id) => axios.get(`${API_URL}/projects/${id}`),
  create: (data) => axios.post(`${API_URL}/projects`, data),
  update: (id, data) => axios.put(`${API_URL}/projects/${id}`, data),
  delete: (id) => axios.delete(`${API_URL}/projects/${id}`),
};

// Task API
export const taskAPI = {
  getAll: (projectId) => axios.get(`${API_URL}/projects/${projectId}/tasks`),
  getOne: (id) => axios.get(`${API_URL}/tasks/${id}`),
  create: (projectId, data) => axios.post(`${API_URL}/projects/${projectId}/tasks`, data),
  update: (id, data) => axios.put(`${API_URL}/tasks/${id}`, data),
  delete: (id) => axios.delete(`${API_URL}/tasks/${id}`),
  getStats: () => axios.get(`${API_URL}/tasks/stats`),
};
