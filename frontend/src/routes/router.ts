import { createRouter, createWebHistory } from 'vue-router';

//Import components

import HomePage from '../views/HomePage.vue';
import AboutPage from '../views/AboutPage.vue';
import ServicesPage from '../views/ServicesPage.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomePage
    },
    {
        path: '/about',
        name: 'About',
        component: AboutPage
    },
    {
        path: '/services',
        name: 'Services',
        component: ServicesPage
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
