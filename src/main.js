import { createApp } from 'vue'
import './assets/base.css'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Home from './pages/homePage.vue'
import About from './pages/aboutPage.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/jake2k4s-website', name: "Home", component: Home },
        { path: '/jake2k4s-website/about', name: "About", component: About }
    ]
})

createApp(App).use(router).mount('#app')