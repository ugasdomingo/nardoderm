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
        <a href="#" target="_blank">
            <img src="../../public/whatsapp-icon.svg" alt="phon-icon" class="icon" />
            contact us
        </a>
        <img src="../assets/img/logo.webp" alt="logo" class="logo" />
    </main>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.About-container {
    padding: 6rem 6rem 0;
    position: relative;
    box-sizing: border-box;
}

h1 {
    margin-bottom: 1rem;
    color: var(--color-primary);
}

h2 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: var(--color-secondary);
}

p {
    font-size: 1rem;
    margin-bottom: 1rem;
}

a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40%;
    margin: 3rem auto 0;
    font-size: 1.25rem;
    color: var(--color-black);
    background-color: var(--color-primary);
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    text-decoration: none;

    &:hover {
        background-color: var(--color-white);
        border: 1px solid var(--color-tertiary);
    }
}

.logo {
    position: absolute;
    top: 10vh;
    right: 30%;
    opacity: 0.3;
    z-index: -1;
}
.icon {
    width: 1.25rem;
    margin-right: 1rem;
}

@media screen and (max-width: 768px) {
    .About-container {
        padding: 5rem 1rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
    }

    .logo {
        right: 0;
        top: 30vh;
    }

    a {
        width: 80%;
    }
}
</style>
