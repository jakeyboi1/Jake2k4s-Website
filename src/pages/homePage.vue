<script setup>
import navbar from '../components/navbar.vue' //Ignore this error works fine
</script>

<template>
    <div class="text-center w-screen">
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
    </div>
</template>

<style scoped>
</style>
