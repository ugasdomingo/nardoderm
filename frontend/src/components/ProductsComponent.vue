<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { productsInfo } from '../static/productsInfo';
</script>

<template>
    <section class="product-container">
        <h2>Productos para tu cuidado diario</h2>
        <div class="display-product">
            <article class="product" v-for="product in productsInfo" :key="product.title">
                <div class="product-image">
                    <img :src="product.imageHd" :alt="product.title" />
                    <p>{{ product.title }}</p>
                </div>
                <div class="product-info">
                    <p>{{ product.brief }}</p>
                    <RouterLink :to="product.path" class="btn btn-primary">See more</RouterLink>
                </div>
            </article>
        </div>
    </section>
</template>

<style scoped lang="scss">
.product-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    width: 100%;
    min-height: 100vh;
    padding: 4rem 0;

    h2 {
        margin-bottom: 2rem;
        color: var(--color-primary);
    }

    .display-product {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        gap: 2rem;
        box-sizing: border-box;

        .product {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: 300px;
            min-height: 400px;
            padding: 1rem;
            border: 1px solid #ccc;
            border-radius: 5px;
            box-sizing: border-box;

            .product-image {
                width: 100%;
                height: 200px;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                position: relative;
                box-sizing: border-box;

                img {
                    width: 100%;
                    height: 100%;
                    object-fit: contain;
                }

                p {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 100%;
                    background-color: rgba(0, 0, 0, 0.5);
                    color: #fff;
                    padding: 0.5rem 0;
                    text-align: center;
                }
            }

            .product-info {
                width: 100%;
                height: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                gap: 1rem;
                box-sizing: border-box;

                p {
                    text-align: center;
                }

                a {
                    width: 100%;
                    text-align: center;
                }
            }
        }
    }
}
</style>
