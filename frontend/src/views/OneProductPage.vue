<template>
    <main class="product-container">
        <section class="left-content">
            <h1>{{ product?.title }}</h1>
            <img :src="product?.imageHd" :alt="product?.title" />
            <a href="https://wa.me/584126696619" target="_blank">
                <img src="../../public/whatsapp-icon.svg" alt="phon-icon" class="icon" />
                PLACE AN ORDER
            </a>
        </section>
        <section class="right-content">
            <div v-html="product?.description" class="product-description"></div>
        </section>
    </main>
</template>

<script setup lang="ts">
import { ref, onBeforeMount } from 'vue';
import { useRoute } from 'vue-router';
import { type Product, productsInfo } from '../static/productsInfo';

// Get path from URL
const route = useRoute();
const path = route.path.split('/')[2];
const product = ref<Product | null>(null);
const productImage = ref();

// Get product from productsInfo
onBeforeMount(() => {
    for (let i = 0; i < productsInfo.length; i++) {
        if (productsInfo[i].path === `products/${path}`) {
            product.value = productsInfo[i];
            productImage.value = productsInfo[i].imageHd;
        }
    }
    // If product is null, redirect to 404
    if (product.value === null) {
        window.location.href = '/404';
    }
});
</script>

<style scoped lang="scss">
.product-container {
    display: flex;
    justify-content: space-between;
    margin: 0;
    padding: 6rem 6rem 4rem;
    width: 100%;
    min-height: 100vh;
    position: relative;
    box-sizing: border-box;

    .left-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 50%;

        h1 {
            font-weight: 700;
            text-align: center;
            color: var(--color-primary);
        }

        img {
            width: 100%;
            max-width: 400px;
            height: auto;
        }

        a {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            max-width: 400px;
            padding: 1rem 2rem;
            border: none;
            border-radius: 5px;
            background-color: var(--color-primary);
            color: var(--color-white);
            font-size: 1.2rem;
            font-weight: 500;
            cursor: pointer;
            transition: all 0.3s ease-in-out;
            text-align: center;
            border: 1px solid var(--color-white);

            &:hover {
                background-color: var(--color-secondary);
                border: 1px solid var(--color-secondary);
            }

            img {
                width: 1.2rem;
                margin-right: 1rem;
            }
        }
    }

    .right-content {
        display: flex;
        flex-direction: column;
        width: 45%;
        padding: 0;

        .product-description {
            margin-top: 1rem;
            font-size: 1.2rem;
            line-height: 1.5;
            text-align: justify;

            h3 {
                color: var(--color-primary);
            }
        }
    }
}

@media screen and (max-width: 768px) {
    .product-container {
        flex-direction: column;
        padding: 5rem 1rem;
        box-sizing: border-box;

        .left-content {
            width: 100%;
            position: relative;
            top: 0;
            margin-bottom: 2rem;

            img {
                max-width: 100%;
            }

            a {
                max-width: 70%;
            }
        }

        .right-content {
            width: 100%;
            padding: 0;

            .product-description {
                font-size: 1rem;
            }
        }
    }
}
</style>
