<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
    <section class="hero-container">
        <img src="../assets/img/hero.webp" alt="hero" class="hero-big" />
        <h1>Somos Nardo Derm</h1>
        <h3>
            Nuestro Compromiso es mejorar la calidad de vida de los usuarios que padecen de manchas
            y pieles grasas con tendencia a acneicas.
        </h3>
        <router-link to="/products">Ver Productos</router-link>
    </section>
</template>

<style scoped lang="scss">
.hero-container {
    display: flex;
    flex-direction: column;
    align-items: end;
    justify-content: center;
    width: 100%;
    height: 100vh;
    padding-right: 4rem;
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
        opacity: 0.85;
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
        font-size: 1.5rem;
        font-weight: 200;
        line-height: 1.2;
        text-align: right;
        margin-top: 0;
        color: var(--color-black);
        animation: moveInRight 1s ease-in-out;
    }

    a {
        margin-top: 2rem;
        padding: 0.5rem 1rem;
        color: var(--color-primary);
        text-decoration: none;
        font-size: 1.25rem;
        background-color: transparent;
        border: 1px solid var(--color-primary);
        border-radius: 5px;
        transition: all 0.3s ease-in-out;
        animation: fadeIn 1s ease-in-out;

        &:hover {
            background-color: var(--color-primary);
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
