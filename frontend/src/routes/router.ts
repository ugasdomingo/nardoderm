import { createRouter, createWebHistory } from 'vue-router';

//Import components

import HomePage from '../views/HomePage.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomePage
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('../views/AboutPage.vue')
    },
    {
        path: '/products',
        name: 'Products',
        component: () => import('../views/ProductsPage.vue')
    },
    {
        path: '/products/:id',
        name: 'OneProduct',
        component: () => import('../views/OneProductPage.vue')
    },
    // Not found page
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: () => import('../views/NotFoundPage.vue')
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
