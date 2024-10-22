// src/router/index.ts
import { createRouter, createWebHistory } from 'vue-router';
import Homepage from '../page/homepage.vue';
import AboutPage from '../page/aboutpage.vue';
const routes = [
    {
        path: '/',
        name: 'Homepage',
        component: Homepage
    },
    {
        path: '/about',
        name: 'About',
        component: AboutPage
    }
];
const router = createRouter({
    history: createWebHistory(),
    routes
});
export default router;
