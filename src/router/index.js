import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Completed from '../views/Completed.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/completed',
    name: 'Completed',
    component: Completed,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
