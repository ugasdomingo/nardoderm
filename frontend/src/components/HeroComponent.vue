<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
    <section class="hero-container">
        <img src="../assets/img/hero.webp" alt="hero" class="hero-big" />
        <h1>Somos Nardo Derm</h1>
        <h3>
            Nuestro compromiso es mejorar la calidad de vida de las pieles grasas, acneicas y con
            manchas.
        </h3>
        <router-link to="/products">Ver Productos</router-link>
    </section>
</template>

<style scoped lang="scss">
.hero-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    background-color: transparent;
    color: var(--color-primary);
    position: relative;
    box-sizing: border-box;

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
        width: 60%;
        text-align: center;
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
        width: 100%;
        padding: 0 1rem;
        h1 {
            font-size: 3.2rem;
            text-shadow: 0px 1px 10px rgba(34, 34, 34, 0.671);
        }
        h3 {
            width: 100%;
            font-size: 1.5rem;
            text-align: left;
            text-shadow: 0px 1px 10px rgba(34, 34, 34, 0.671);
        }

        a {
            margin-top: 1rem;
            padding: 0.5rem 1rem;
            font-size: 1.5rem;
        }
    }
}
</style>
