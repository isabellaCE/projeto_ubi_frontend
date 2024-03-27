import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue';
import About from './components/About.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {path: '/', name: 'HelloWorld', component: HelloWorld},
    {path: '/about', name: 'About', component: About},
  ]
});

createApp(App).use(router).mount('#app')
