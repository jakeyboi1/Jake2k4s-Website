<script setup>
import navbar from '../components/navbar.vue'
</script>

<template>
    <div class="container">
        <navbar></navbar>
        <div class="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:items-center">
            <div class="mx-auto max-w-xl text-center">
                <h1 class="text-3xl text-blue-700 font-extrabold sm:text-5xl">
                    Welcome To
                    <strong class="font-extrabold text-red-700 sm:block"> Jake2k4's Website </strong>
                </h1>

                <p class="mt-4 sm:text-xl/relaxed text-white">
                    Currently In The Development Stage!
                </p>

                <div class="mt-8 flex flex-wrap justify-center gap-4">
                    <a
                    class="block w-full rounded bg-red-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
                    href="/get-started"
                    >
                    Get Started
                    </a>

                    <a
                    class="block w-full rounded px-12 py-3 text-sm font-medium text-red-600 shadow hover:text-red-700 focus:outline-none focus:ring active:text-red-500 sm:w-auto"
                    href="/about"
                    >
                    Learn More
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
</style>