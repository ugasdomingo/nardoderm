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
        <img src="../assets/img/logo.webp" alt="logo" />
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
    height: 10%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 4rem;
    background-color: var(--color-white);

    img {
        width: 10%;
    }
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
    font-size: 1.5rem;
    color: var(--color-primary);
}

nav ul li a:hover {
    color: var(--color-white);
    background-color: var(--color-primary);
    border-radius: 0.5rem;
}
</style>
