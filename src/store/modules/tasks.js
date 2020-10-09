// import { getTasks } from '../../utils/index';
import * as axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000',
});

export default {
  state: {
    tasks: [],
  },
  getters: {
    allTasks(state) {
      return state.tasks;
    },
  },
  mutations: {
    updateTasks(state, tasks) {
      state.tasks = tasks;
    },
  },
  actions: {
    async fetchTasks(ctx) {
      const res = await api.get('/tasks');
      const tasks = res.data;
      ctx.commit('updateTasks', tasks);
    },
  },
};
