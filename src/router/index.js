import { createWebHistory, createRouter } from 'vue-router';
import DogList from '@/components/DogList.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: DogList,
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
