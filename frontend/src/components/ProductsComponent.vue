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
        product1.value = 500;
        product2.value = 900;
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
        <h2>With our clients in mind!</h2>
        <h4>we work meticulously to provide the best product for them!</h4>
        <div class="display-product">
            <div class="product" :class="scrollY >= product1 ? 'animationLeft' : 'hide'">
                <img :src="productsInfo[0].imageHd" :alt="productsInfo[0].title" />
                <div class="content">
                    <h3>{{ productsInfo[0].title }}</h3>
                    <p>{{ productsInfo[0].brief }}</p>
                    <RouterLink :to="'products/' + productsInfo[0].path">Learn More</RouterLink>
                </div>
            </div>
            <div class="product" :class="scrollY >= product2 ? 'animationLeft' : 'hide'">
                <img :src="productsInfo[1].imageHd" :alt="productsInfo[1].title" />
                <div class="content">
                    <h3>{{ productsInfo[1].title }}</h3>
                    <p>{{ productsInfo[1].brief }}</p>
                    <RouterLink :to="'products/' + productsInfo[1].path">Learn More</RouterLink>
                </div>
            </div>
            <div class="product" :class="scrollY >= product3 ? 'animationLeft' : 'hide'">
                <img :src="productsInfo[2].imageHd" :alt="productsInfo[2].title" />
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
    background-color: var(--color-white);

    h2 {
        font-weight: 700;
        color: var(--color-primary);
        margin: 0;
    }

    h4 {
        font-weight: 300;
        color: var(--color-primary);
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
            background-color: var(--color-primary);
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
            img {
                height: 300px;
                object-fit: cover;
                border-radius: 1rem;
            }
            .content {
                height: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: space-between;
                padding: 1rem;
                box-sizing: border-box;

                h3 {
                    font-weight: 700;
                    font-size: 2.5rem;
                    color: var(--color-white);
                    margin: 0;
                }

                p {
                    font-weight: 400;
                    color: var(--color-white);
                    text-align: center;
                    margin: 0;
                }
                a {
                    font-weight: 700;
                    color: var(--color-primary);
                    background-color: var(--color-white);
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
        padding: 2rem 0.5rem;
        margin: 0;
        box-sizing: border-box;
        overflow: hidden;
        gap: 1rem;
        h2 {
            font-size: 2rem;
            margin: 0;
        }
        h4 {
            font-size: 1.5rem;
            margin: 0;
        }
        .display-product {
            margin: 2rem 0;
            .product {
                width: 100%;
                height: fit-content;
                flex-direction: column;
                padding: 0.5rem 0;
                margin: 2rem 0;

                img {
                    width: 200px;
                    margin: 0;
                }

                .content {
                    padding: 0.5rem 1rem;
                    gap: 1rem;
                    h3 {
                        font-size: 1.5rem;
                        margin: 0;
                    }
                    p {
                        font-size: 1.25rem;
                        margin: 0;
                    }
                    a {
                        font-size: 1.5rem;
                        margin: 0;
                    }
                }
            }
        }
    }
}
</style>
