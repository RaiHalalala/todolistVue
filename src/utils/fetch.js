import * as axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000',
});

export const getTasks = async () => {
  const res = await api.get('/tasks?_sort=favorite');
  return res;
};

export const addTask = async (newTask) => {
  const res = api.post('/tasks', newTask);
  return res;
};

export const removeTask = async (idTask) => {
  await api.delete(`/tasks/${idTask}`);
};

export const updateTask = async (data, idTask) => {
  const res = await api.patch(`/tasks/${idTask}`, data);
  return res;
};
