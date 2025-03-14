import './assets/tailwind.css' // Importe le fichier Tailwind CSS

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
  duration: 1000,
  once: true,
});
const app = createApp(App)

app.use(router);
app.use(createPinia())
app.mount('#app')