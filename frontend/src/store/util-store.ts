//Import tools
import { defineStore } from 'pinia';
import { ref } from 'vue';

//Define store
export const useUtilStore = defineStore('util', () => {
    const showResponsiveMenu = ref(false);

    const toggleResponsiveMenu = () => {
        showResponsiveMenu.value = !showResponsiveMenu.value;
    };

    return {
        showResponsiveMenu,
        toggleResponsiveMenu
    };
});
