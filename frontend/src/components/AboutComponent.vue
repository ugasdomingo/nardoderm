<script setup lang="ts"></script>

<template>
    <section class="about-container">
        <div class="left-content">
            <img src="../assets/img/about-img.webp" alt="aboutImg" />
            <div>
                <h2>Welcome!</h2>
                <h4>Advances of science make easier our daily life!</h4>
            </div>
        </div>
        <div class="right-container">
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt aut rerum similique
                nobis quaerat deserunt enim earum laboriosam asperiores pariatur
            </p>
            <h6><span>Nardo Derm</span>- Our mission</h6>
        </div>
    </section>
</template>

<style scoped lang="scss">
.about-container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 2rem 0;
    margin: 0 2rem;
    height: 60vh;
    .left-content {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50%;
        img {
            width: 350px;
            object-fit: cover;
            border-radius: 1rem;
        }
        div {
            padding: 0 1rem;
            h2 {
                margin-bottom: 0.5rem;
                color: var(--color-primary);
            }
            h4 {
                margin-top: 0.75rem;
            }
        }
    }
    .right-container {
        width: 35%;
        p {
            font-size: 1.25rem;
            font-weight: 300;
            color: var(--color-black);
        }

        h6 {
            font-size: 1.5rem;
            font-weight: 400;
            color: var(--color-primary);
            margin-top: 1rem;
            span {
                font-weight: 700;
                color: var(--color-black);
            }
        }
    }
}
</style>
