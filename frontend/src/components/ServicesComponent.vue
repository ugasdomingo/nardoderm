<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { ref, onMounted, onUnmounted } from 'vue';
import { servicesInfo } from '../static/servicesInfo';

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
    <section class="services-container">
        <h2>With our clients in mind,</h2>
        <h4>we work meticulously to provide the best services for them!</h4>
        <div class="display-services">
            <div
                class="services"
                v-for="service in servicesInfo"
                :key="service.title"
                :class="scrollY >= service.animation ? 'animationLeft' : 'hide'"
            >
                <img :src="service.image" :alt="service.title" />
                <div class="content">
                    <h3>{{ service.title }}</h3>
                    <p>{{ service.description }}</p>
                    <RouterLink :to="service.path">Learn More</RouterLink>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
.services-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 6rem 4rem;
    gap: 2rem;
    background-color: var(--color-primary);
    h2 {
        font-weight: 700;
        color: var(--color-white);
        margin: 0;
    }
    h4 {
        font-weight: 400;
        color: var(--color-tertiary);
        margin: 0;
    }
    .display-services {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        gap: 2rem;
        margin-top: 2rem;
        .services {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 1rem;
            margin: 4rem auto;
            width: 70%;
            height: 200px;
            border-radius: 1rem;
            background-color: var(--color-white);
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
            img {
                height: 300px;
                object-fit: cover;
                border-radius: 1rem;
            }
            .content {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                gap: 1rem;
                padding: 1rem;
                h3 {
                    font-weight: 700;
                    color: var(--color-primary);
                    margin: 0;
                }
                p {
                    font-weight: 400;
                    color: var(--color-tertiary);
                    text-align: center;
                }
                RouterLink {
                    font-weight: 700;
                    color: var(--color-primary);
                    text-decoration: none;
                    &:hover {
                        text-decoration: underline;
                    }
                }
            }
        }
    }
}
.animationLeft {
    animation: moveInLeft 1s ease-in-out;
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
}
</style>
