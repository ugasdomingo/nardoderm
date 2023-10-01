<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { ref, onMounted, onUnmounted } from 'vue';
import { productsInfo } from '../static/productsInfo';
import { useRoute } from 'vue-router';

// Get path from URL
const route = useRoute();
const path = route.path;

const scrollY = ref(0);
const product1 = ref(0);
const product2 = ref(0);
const product3 = ref(0);

const handleScroll = () => {
    scrollY.value = window.scrollY;
};

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
    // Set products scroll show
    if (path == '/') {
        product1.value = 800;
        product2.value = 1200;
        product3.value = 1500;
    } else {
        product1.value = 0;
        product2.value = 0;
        product3.value = 0;
    }
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
    <section class="product-container">
        <h2>With our clients in mind,</h2>
        <h4>we work meticulously to provide the best product for them!</h4>
        <div class="display-product">
            <div class="product" :class="scrollY >= product1 ? 'animationLeft' : 'hide'">
                <img src="../assets/img/producto1.webp" :alt="productsInfo[0].title" />
                <div class="content">
                    <h3>{{ productsInfo[0].title }}</h3>
                    <p>{{ productsInfo[0].brief }}</p>
                    <RouterLink :to="'products/' + productsInfo[0].path">Learn More</RouterLink>
                </div>
            </div>
            <div class="product" :class="scrollY >= product2 ? 'animationLeft' : 'hide'">
                <img src="../assets/img/producto-2.webp" :alt="productsInfo[1].title" />
                <div class="content">
                    <h3>{{ productsInfo[1].title }}</h3>
                    <p>{{ productsInfo[1].brief }}</p>
                    <RouterLink :to="'products/' + productsInfo[1].path">Learn More</RouterLink>
                </div>
            </div>
            <div class="product" :class="scrollY >= product3 ? 'animationLeft' : 'hide'">
                <img src="../assets/img/producto-3.webp" :alt="productsInfo[2].title" />
                <div class="content">
                    <h3>{{ productsInfo[2].title }}</h3>
                    <p>{{ productsInfo[2].brief }}</p>
                    <RouterLink :to="'products/' + productsInfo[2].path">Learn More</RouterLink>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
.product-container {
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
    .display-product {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        gap: 2rem;
        margin-top: 2rem;
        .product {
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
                a {
                    font-weight: 700;
                    color: var(--color-white);
                    background-color: var(--color-primary);
                    padding: 0.5rem 1rem;
                    border-radius: 0.5rem;
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

@media screen and (max-width: 768px) {
    .product-container {
        padding: 2rem;
        margin: 0;
        box-sizing: border-box;
        overflow: hidden;
        h2 {
            font-size: 2rem;
        }
        h4 {
            font-size: 1.5rem;
        }
        .display-product {
            margin: 2rem 0;
            .product {
                width: 100%;
                margin: 2rem 0;
                max-height: fit-content;

                img {
                    width: 130px;
                    margin: 0;
                }

                .content {
                    padding: 0 1rem;
                    h3 {
                        font-size: 1rem;
                        margin: 0;
                    }
                    p {
                        font-size: 0.5rem;
                        margin: 0;
                    }
                    a {
                        font-size: 0.5rem;
                        margin: 0;
                    }
                }
            }
        }
    }
}
</style>
