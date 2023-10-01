<template>
    <section class="not-found-container">
        <h2>404</h2>
        <h3>Page Not Found</h3>
        <p>Sorry, but the page you are looking for does not exist.</p>
        <RouterLink to="/">Go Home</RouterLink>
    </section>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.not-found-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem 0;
    h2 {
        font-size: 5rem;
        font-weight: 400;
        margin-bottom: 1rem;
        color: var(--color-primary);
    }
    h3 {
        font-size: 2rem;
        font-weight: 400;
        margin-bottom: 1rem;
    }
    p {
        font-size: 1.5rem;
        font-weight: 400;
        margin-bottom: 1rem;
        color: var(--color-primary);
    }
    a {
        font-size: 1.5rem;
        font-weight: 400;
        margin-bottom: 1rem;
        color: var(--color-white);
        background-color: var(--color-primary);
        padding: 0.5rem 1rem;
        border-radius: 0.5rem;
        text-decoration: none;
        &:hover {
            text-decoration: underline;
            padding: 0.5rem 2rem;
        }
    }
}
</style>
