<script setup lang="ts">
import { RouterLink } from 'vue-router';

const links = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' }
];
</script>

<template>
    <header>
        <h1>Nardo Derm</h1>
        <nav>
            <ul>
                <li v-for="link in links" :key="link.name">
                    <RouterLink :to="link.path">
                        {{ link.name }}
                    </RouterLink>
                </li>
            </ul>
        </nav>
    </header>
</template>

<style scoped lang="scss">
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 4rem;
    background-color: var(--color-primary);
}

h1 {
    margin: 0;
    color: var(--color-white);
}

nav ul {
    display: flex;
    gap: 1.5rem;
}

nav ul li {
    list-style: none;
}

nav ul li a {
    text-decoration: none;
    padding: 0.5rem 1rem;
    font-size: 1.25rem;
    color: var(--color-white);
}

nav ul li a:hover {
    color: var(--color-primary);
    background-color: var(--color-white);
    border-radius: 0.5rem;
}
</style>
