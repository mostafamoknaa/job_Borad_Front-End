import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import singlePage from '../components/singlepage.vue'

const routes = [{
        path: '/',
        name: 'Home',
        component: HomePage
    },
    {
        path: '/single',
        name: 'SinglePage',
        component: singlePage
    }
]

const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes
})

export default router