import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: { layout: 'base' },
    component: Home,
  },
  {
    path: '/completed',
    name: 'Completed',
    meta: { layout: 'base' },
    component: () => import('../views/Completed.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    meta: { layout: 'base' },
    component: () => import('../views/Login.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
