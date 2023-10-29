<script setup lang="ts">
import { RouterView } from 'vue-router';
import { onBeforeMount, ref } from 'vue';

//Import components
import HeaderComponent from './layout/HeaderComponent.vue';

const scrollY = ref(0);
//Functions
const handleScroll = () => {
    scrollY.value = window.scrollY;
};

onBeforeMount(() => {
    window.addEventListener('scroll', handleScroll);
});
</script>

<template>
    <HeaderComponent />
    <RouterView />
    <a
        href="https://wa.me/584126696619"
        target="_blank"
        class="icon-container"
        v-if="scrollY > 100"
    >
        <img src="../../public/whatsapp-icon.svg" alt="icon" class="icon" />
    </a>
</template>

<style scoped lang="scss">
.icon-container {
    width: 30px;
    position: fixed;
    bottom: 2rem;
    right: 6rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--color-green);
    padding: 0.5rem;
    border-radius: 20%;

    .icon {
        width: 30px;
        height: 30px;
        cursor: pointer;
    }
}

@media screen and (max-width: 768px) {
    .icon-container {
        right: 1rem;
    }
}
</style>
