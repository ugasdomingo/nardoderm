<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { useUtilStore } from '../store/util-store';

const utilStore = useUtilStore();

defineProps({
    style: {
        type: String,
        required: true
    }
});

const links = [
    { name: 'About', path: '/about' },
    { name: 'Products', path: '/products' }
];
</script>

<template>
    <nav :class="style == 'normal' ? 'normal-menu' : 'responsive-menu'">
        <ul>
            <li v-for="link in links" :key="link.name">
                <RouterLink :to="link.path" @click="utilStore.toggleResponsiveMenu">
                    {{ link.name }}
                </RouterLink>
            </li>
        </ul>
    </nav>
</template>

<style scoped lang="scss">
nav {
    position: relative;
}
.normal-menu {
    ul {
        display: flex;
        align-items: center;
        gap: 1.5rem;

        li {
            list-style: none;
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
}

.responsive-menu {
    position: absolute;
    top: 90%;
    right: 1rem;
    width: 50%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    background-color: var(--color-primary);
    border-radius: 0.5rem;
    box-sizing: border-box;

    ul {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: start;
        gap: 1rem;
        padding: 0;
        li {
            list-style: none;
            a {
                text-decoration: none;
                font-size: 1.5rem;
                color: var(--color-white);

                &:hover {
                    color: var(--color-primary);
                }
            }
        }
    }
}
</style>
