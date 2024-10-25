// src/router/index.ts
import { createRouter, createWebHistory } from 'vue-router';
import Homepage from '../page/homepage.vue';
import Webapp from '../page/webappPage.vue'


const routes = [
    {
        path: '/',
        name: 'Homepage',
        component: Homepage
    },
    {
        path: '/webapp',
        name: 'webapp',
        component: Webapp
    }
];
const router = createRouter({
    history: createWebHistory(),
    routes
});
export default router;
