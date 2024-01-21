import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/homePage.vue'
import About from '../pages/aboutPage.vue'
import Projects from '../pages/projectsPage.vue'

const router = createRouter({
    history: createWebHistory('/jake2k4s-website/'),
    routes: [
        { path: '/', name: "Home", component: Home },
        { path: '/about', name: "About", component: About },
        { path: '/projects', name: "Projects", component: Projects }
    ]
})

export default router;