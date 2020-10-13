import { format } from 'date-fns';
import {
  SET_TASKS, ADD_TASK, REMUVE_TASK, UPDATE_TASK,
} from './type';
import {
  getTasks, addTask, removeTask, updateTask,
} from '../../utils/fetch';

const createSortByDate = (arr) => {
  const data = new Date();
  const today = format(data, 'yyyy-MM-dd');
  const tomorrow = format(new Date(data.getTime() + (24 * 60 * 60 * 1000)), 'yyyy-MM-dd');
  const tasks = [[], [], []];
  tasks[0] = arr.filter(({ dateOfCreat }) => [today, tomorrow].includes(dateOfCreat) === false);
  tasks[1] = arr.filter(({ dateOfCreat }) => dateOfCreat === today);
  tasks[2] = arr.filter(({ dateOfCreat }) => dateOfCreat === tomorrow);
  return tasks;
};

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
      state.tasks = createSortByDate(tasks);
    },
    [ADD_TASK](state, task) {
      state.tasks[1] = [...state.tasks[1], task];
    },
    [REMUVE_TASK](state, idTask) {
      const arr = state.tasks.flat().filter(({ id }) => id !== idTask);
      state.tasks = createSortByDate(arr);
    },
    [UPDATE_TASK](state, { task, idTask }) {
      const arr = [...state.tasks.flat().map((el) => (el.id === idTask ? task : el))];
      state.tasks = createSortByDate(arr);
    },
  },
  actions: {
    async fetchTasks({ commit }) {
      const res = await getTasks();
      const tasks = res.data;
      commit('SET_TASKS', tasks);
    },
    async fetchAddTask({ commit }, newTask) {
      const res = await addTask(newTask);
      const task = res.data;
      commit('ADD_TASK', task);
    },
    async fetchRemuveTask({ commit }, idTask) {
      await removeTask(idTask);
      commit('REMUVE_TASK', idTask);
    },
    async fetchUpdateTask({ commit }, { data, idTask }) {
      const res = await updateTask(data, idTask);
      const task = res.data;
      commit('UPDATE_TASK', { task, idTask });
    },
  },
};
