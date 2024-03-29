import { createApp } from 'vue'
import './style.css'
import { createRouter, createWebHistory } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue';
import About from './components/About.vue';
import i18n from './i18n';
import App from './components/Suspender.vue'
import Login from './pages/Login.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {path: '/about', name: 'About', component: About},
    {path: '/', name: 'Login', component: Login}
  ]
});

i18n(createApp(App)).use(router).mount('#app')