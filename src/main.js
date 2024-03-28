import { createApp } from 'vue'
import './style.css'
import { createRouter, createWebHistory } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue';
import About from './components/About.vue';
import i18n from './i18n';
import App from './components/Suspender.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {path: '/', name: 'HelloWorld', component: HelloWorld},
    {path: '/about', name: 'About', component: About},
  ]
});

i18n(createApp(App)).use(router).mount('#app')