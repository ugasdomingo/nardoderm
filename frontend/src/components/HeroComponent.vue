<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
    <section class="hero-container">
        <img src="../assets/img/hero.webp" alt="hero" class="hero-big" />
        <h1>Serving Science</h1>
        <h3>And Technology</h3>
        <router-link to="/services">Services</router-link>
    </section>
</template>

<style scoped lang="scss">
.hero-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: var(--color-blackTrans);
    color: var(--color-white);
    position: relative;

    .hero-big {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
        z-index: -1;
    }

    h1 {
        font-size: 4rem;
        font-weight: 700;
        margin-bottom: 0;
    }

    h3 {
        font-size: 2rem;
        font-weight: 400;
        margin-top: 0;
    }

    a {
        margin-top: 2rem;
        padding: 1rem 2rem;
        background-color: var(--color-primary);
        color: var(--color-white);
        text-decoration: none;
        border-radius: 5px;
        font-size: 1.5rem;
        font-weight: 700;
        transition: all 0.3s ease-in-out;

        &:hover {
            background-color: var(--color-white);
            color: var(--color-primary);
        }
    }
}
</style>
