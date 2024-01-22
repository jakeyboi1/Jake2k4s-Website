<script setup>
import { ref } from 'vue'
import navbar from '../components/navbar.vue' //Ignore this error works fine
const warningVisible = ref(true)
</script>

<template>
    <div class="w-screen text-center">
        <navbar></navbar>
        <!--Main Content-->
        <div class="py-14 items-center px-4">
            <div class="mx-auto max-w-xl">
                <h1 class="text-3xl text-blue-700 font-extrabold sm:text-5xl">
                    Welcome To
                    <strong class="font-extrabold text-red-700 sm:block"> Jake2k4's Website </strong>
                </h1>

                <p class="mt-4 sm:text-xl/relaxed text-white">
                    Hi I am Jake2k4, and this is my website. I am a 19 year old software developer with a passion for programming, and computers. I have as of writing this been coding for a little over a year now. I currently work at Walmart as an Electronic's Team Associate, and I am enrolled in college to earn a associates degree in programming!
                </p>

                <div class="mt-8 flex flex-wrap justify-center gap-4">
                    <RouterLink to="/about" class="block rounded bg-red-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto">
                        Get Started
                    </RouterLink>
                </div>
            </div>
        </div>

        <div class="w-96 h-34 lg:ml-auto px-8"> <!--ml-auto puts it all the way to the left and helps mobile resolution using pr instead of px as its not in the center of page-->
            <div class="text-2xl font-bold text-red-500">About This Website!</div>
            <body class="text-white mt-2 text-xl">This website was created using Vue.js and Tailwind CSS in order to learn both frameworks. This site also houses all my projects I have worked on, and acts as my portfolio!</body>
        </div>

        <!--Under Development Warning Remove When Finished Developing-->
        <div v-if="warningVisible" class="bg-red-500 border border-red-500 w-96 bottom-0 left-0 text-red-700 px-4 py-4 absolute">
            <strong class="font-bold text-black bg-red-500">Warning! </strong>
            <span class="block bg-red-500 sm:inline text-black">This site is currently under development.</span>
            <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
                <button @click="warningVisible = false">
                    <svg class="fill-current h-6 w-6 text-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
                </button>
            </span>
        </div>
    </div>
</template>

<style scoped>
</style>
