<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const scrollY = ref(0);

const handleScroll = () => {
    scrollY.value = window.scrollY;
};

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
    <section class="about-container">
        <img
            src="../assets/img/about-img.webp"
            alt="aboutImg"
            :class="scrollY >= 200 ? 'animationLeft' : 'hide'"
        />
        <div :class="scrollY >= 200 ? 'animationRight' : 'hide'">
            <h2>How we care the planet</h2>
            <h4>Advances of science make easier our daily life!</h4>
            <RouterLink to="/sostenibilidad"> Read more </RouterLink>
        </div>
    </section>
</template>

<style scoped lang="scss">
.about-container {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 6rem 4rem;
    gap: 2rem;
    background-color: #f5f5f5;
    img {
        width: 100%;
        max-width: 400px;
        border-radius: 1rem;
    }
    div {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        align-items: center;
        justify-content: center;
        h2 {
            font-weight: 700;
            color: var(--color-primary);
            margin: 0;
        }
        h4 {
            font-weight: 400;
            color: var(--color-tertiary);
            margin: 0;
        }
        a {
            text-decoration: none;
            padding: 0.5rem 1rem;
            font-size: 1.5rem;
            color: var(--color-primary);
            &:hover {
                color: var(--color-white);
                background-color: var(--color-primary);
                border-radius: 0.5rem;
            }
        }
    }
}

.animationLeft {
    animation: moveInLeft 1s ease-in-out;
}
.animationRight {
    animation: moveInRight 1s ease-in-out;
}
.hide {
    opacity: 0;
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

@media screen and (max-width: 768px) {
    .about-container {
        flex-direction: column;
        padding: 2rem 1rem;
        img {
            max-width: 300px;
        }
        div {
            align-items: flex-start;
            h2 {
                font-size: 2rem;
            }
            h4 {
                font-size: 1.5rem;
            }
            a {
                font-size: 1.2rem;
            }
        }
    }
}
</style>
