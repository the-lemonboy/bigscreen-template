import { createApp } from 'vue';

import { store } from '@/store';
import '@/styles/main.css';
import '@/styles/tailwindcss.css';

import App from './App.vue';

const app = createApp(App);
app.use(store);
app.mount('#app');
