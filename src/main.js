import { createApp } from 'vue'
import './style.css'
import { createRouter, createWebHistory } from 'vue-router'
import About from './components/About.vue';
import i18n from './i18n';
import App from './components/Suspender.vue'
import Login from './pages/Login.vue'
import Register from './pages/Register.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {path: '/about', name: 'About', component: About},
    {path: '/', name: 'Login', component: Login},
    {path: '/register', name: 'Register', component: Register}
  ]
});

i18n(createApp(App)).use(router).mount('#app')