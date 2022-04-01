import { createWebHistory, createRouter } from 'vue-router';
import DogList from '@/components/DogList.vue';
import DogImageList from '@/components/DogImageList.vue';

const routes = [
  {
    path: '/',
    name: 'DogList',
    component: DogList,
  },
  {
    path: '/images/:dogName',
    name: 'DogImageList',
    component: DogImageList,
    props: true,
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
