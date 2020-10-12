// import { getTasks } from '../../utils/index';
import * as axios from 'axios';
import { format } from 'date-fns';
import {
  SET_TASKS, ADD_TASK, REMUVE_TASK,
} from './type';

const api = axios.create({
  baseURL: 'http://localhost:3000',
});

export default {
  state: {
    tasks: [
      [], [], [],
    ],
  },
  getters: {
    allTasks(state) {
      return state.tasks;
    },
  },
  mutations: {
    [SET_TASKS](state, tasks) {
      const today = format(new Date(), 'yyyy-MM-dd');
      const varToday = new Date();
      varToday.setTime(varToday.getTime() + 1000 * 60 * 60 * 24);
      state.tasks[1] = tasks.filter(({ dateOfCreat }) => dateOfCreat === today);
    },
    [ADD_TASK](state, task) {
      state.tasks = [...state.tasks, task];
    },
    [REMUVE_TASK](state, idTask) {
      state.tasks = state.tasks.filter(({ id }) => id !== idTask);
    },
  },
  actions: {
    async fetchTasks(ctx) {
      const res = await api.get('/tasks');
      const tasks = res.data;
      ctx.commit('SET_TASKS', tasks);
    },
    async fetchAddTask({ commit }, newTask) {
      const res = await api.post('/tasks', newTask);
      const task = res.data;
      commit('ADD_TASK', task);
    },
    async fetchRemuveTask({ commit }, idTask) {
      await api.delete(`/tasks/${idTask}`);
      commit('REMUVE_TASK', idTask);
    },
  },
};
