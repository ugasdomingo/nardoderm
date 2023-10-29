<script setup lang="ts">
//Import tools
import { useUtilStore } from '../store/util-store';

//Import components
import NavbarComponent from './NavbarComponent.vue';

//Activate tools
const utilStore = useUtilStore();
</script>

<template>
    <header>
        <RouterLink to="/">
            <img src="../assets/img/logo.webp" alt="logo" />
        </RouterLink>
        <NavbarComponent :style="'normal'" class="normal-menu" />
        <div class="responsive-menu">
            <img
                src="../../public/hamburguer-menu.svg"
                alt="menu"
                class="hamburguer-menu"
                @click="utilStore.toggleResponsiveMenu"
            />
            <NavbarComponent :style="'responsive'" v-if="utilStore.showResponsiveMenu" />
        </div>
    </header>
</template>

<style scoped lang="scss">
header {
    width: 100%;
    height: 10vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 6rem;
    background-color: transparent;
    position: absolute;
    top: 1rem;
    left: 0;
    z-index: 999;
    box-sizing: border-box;

    img {
        width: 150px;
    }

    .responsive-menu {
        display: none;
    }
}

@media screen and (max-width: 768px) {
    header {
        min-height: 10vh;
        max-width: 100%;
        padding: 0 1rem;

        img {
            width: 60%;
        }

        .responsive-menu {
            display: flex;
            justify-content: flex-end;
            box-sizing: border-box;
        }

        .normal-menu {
            display: none;
        }
    }
}
</style>
