import { createApp } from 'vue';
import naive from 'naive-ui';
import Pagination from 'v-pagination-3';
import App from './App.vue';
import router from './router'; // <---

const app = createApp(App);
app.use(naive);
app.use(router);
app.component('v-pagination', Pagination);
app.mount('#app');
