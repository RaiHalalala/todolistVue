import * as axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_HOST,
});

export const getTasks = async () => {
  const res = await api.get('/tasks');
  return res.data;
};

export const addTask = async () => {
  const res = await api.post('/tasks');
  return res;
};
