<template>
    <main class="About-container">
        <h1>About us</h1>
        <p>
            Welcome to Nardo Derm, your trusted partner in skincare solutions. Based in the heart of
            the United States, we are passionate about crafting high-quality skincare products
            designed to transform your daily routine and enhance your natural beauty.
        </p>
        <h2>Our Mission</h2>
        <p>
            At Nardo Derm, our mission is simple yet profound: to empower individuals with the
            confidence that comes from healthy, radiant skin. We believe that everyone deserves to
            feel comfortable and confident in their own skin, and our products are meticulously
            formulated to make that a reality. We are committed to providing effective, safe, and
            accessible skincare solutions to our valued customers.
        </p>
        <h2>Our Vision</h2>
        <p>
            Our vision at Nardo Derm is to lead the way in skincare innovation, setting new
            standards for quality and effectiveness. We envision a world where skincare is not just
            a routine but a self-care ritual that brings joy and transformation. We aim to inspire
            individuals to embrace their unique beauty and to feel empowered in their skin. Our
            dedication to research, sustainability, and excellence drives us to create products that
            make a positive impact on the lives of our customers.
        </p>

        <p>
            Thank you for choosing Nardo Derm as your skincare partner. We look forward to helping
            you achieve the radiant, healthy skin you deserve.
        </p>
        <a href="https://wa.me/584126696619"> Contactar </a>
    </main>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.About-container {
    padding: 0 1rem;
    padding: 4rem;
}

h1 {
    margin-bottom: 1rem;
}

h2 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
}

p {
    font-size: 1rem;
    margin-bottom: 1rem;
}

a {
    margin-top: 3rem;
    font-size: 1.25rem;
    color: var(--color-white);
    background-color: var(--color-primary);
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    text-decoration: none;

    &:hover {
        background-color: var(--color-white);
        color: var(--color-primary);
        border: 1px solid var(--color-primary);
    }
}
</style>
