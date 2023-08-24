<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { servicesInfo } from '../static/servicesInfo';
</script>

<template>
    <section class="services-container">
        <h2>With our clients in mind,</h2>
        <h4>we work meticulously to provide the best services for them!</h4>
        <div class="display-services">
            <div class="services" v-for="service in servicesInfo" :key="service.title">
                <div class="img-container">
                    <img :src="service.image" :alt="service.title" />
                </div>
                <h3>{{ service.title }}</h3>
                <p>{{ service.description }}</p>
                <RouterLink :to="service.path">Learn More</RouterLink>
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
    margin: 0 auto;
    padding: 2rem 0;
    width: 100%;
    color: var(--color-white);
    background-color: var(--color-primary);
    h2 {
        margin-bottom: 0.5rem;
    }
    h4 {
        margin: 0.5rem 0 4rem;
    }
    .display-services {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        width: 100%;
        .services {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
            margin: 1rem;
            padding: 1rem;
            width: 250px;
            height: 350px;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

            .img-container {
                width: 150px;
                height: 150px;
                display: flex;
                align-items: center;
                justify-content: center;
                margin-bottom: 1rem;
                border-radius: 50%;
                background-color: var(--color-secondary);
            }
            img {
                width: 100px;
                height: 100px;
                margin-bottom: 1rem;
                object-fit: cover;
            }
            h3 {
                font-size: 1.25rem;
                font-weight: 700;
                margin-bottom: 1rem;
            }
            p {
                font-size: 1rem;
                font-weight: 400;
                margin-bottom: 1rem;
            }
            a {
                font-size: 1rem;
                font-weight: 700;
                color: #fff;
                background-color: var(--color-secondary);
                padding: 0.5rem 1rem;
                border-radius: 5px;
                text-decoration: none;
                &:hover {
                    background-color: var(--color-white);
                    color: var(--color-primary);
                }
            }
        }
    }
}
</style>
