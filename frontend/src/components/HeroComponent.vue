<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
    <section class="hero-container">
        <img src="../assets/img/hero.webp" alt="hero" class="hero-big" />
        <h1>Serving Science</h1>
        <h3>And Technology</h3>
        <router-link to="/products">Products</router-link>
    </section>
</template>

<style scoped lang="scss">
.hero-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 90vh;
    background-color: transparent;
    color: var(--color-primary);
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
        animation: moveInLeft 1s ease-in-out;
    }

    h3 {
        font-size: 2rem;
        font-weight: 400;
        margin-top: 0;
        animation: moveInRight 1s ease-in-out;
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
        animation: fadeIn 1s ease-in-out;

        &:hover {
            background-color: var(--color-secondary);
        }
    }
}

//animations
@keyframes moveInLeft {
    0% {
        opacity: 0;
        transform: translateX(-10rem);
    }
    80% {
        transform: translateX(1rem);
    }
    100% {
        opacity: 1;
        transform: translate(0);
    }
}

@keyframes moveInRight {
    0% {
        opacity: 0;
        transform: translateX(10rem);
    }
    80% {
        transform: translateX(-1rem);
    }
    100% {
        opacity: 1;
        transform: translate(0);
    }
}

@keyframes fadeIn {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}

@media screen and (max-width: 768px) {
    .hero-container {
        h1 {
            font-size: 3rem;
        }
        h3 {
            font-size: 1.5rem;
        }
    }
}
</style>
