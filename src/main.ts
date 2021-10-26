import { createApp } from 'vue';
import App from './App.vue';

createApp(App).mount('#app');

import {} from 'mock';
import.meta.env; // the error is expected! because types:['node'] overwrites types:['vite/client']