<script setup>
import navbar from '../components/navbar.vue';
</script>

<template>
    <div class="container w-screen"> <!--Hiding x overflow so no side scroll bar on the bottom of your screen-->
        <navbar></navbar>
        <div class="py-32 items-center w-screen">
            <div class="mx-auto max-w-xl text-center">
                <h1 class="text-3xl text-blue-700 font-extrabold sm:text-5xl">
                    <strong class="font-extrabold text-red-700 sm:block"> About Me </strong>
                </h1>

                <p class="mt-4 sm:text-xl/relaxed text-white">
                    A little more information about me! With having been coding for over a year now I have experimented with many different avenues of programming. I have experimented with web development, game development, scripting, even a little C++ memory editing, and a lot more. While doing all of this I have learned that I prefer backend development over frontend development as while I can make frontend applications, my eye for design is not the best. I much prefer backend development, as I find creating the logic, and how it interacts with everything another much more enjoyable development experience.
                </p>
            </div>
        </div>

        <div class="languagesIHaveUsed text-center mx-auto mx-w-xl py-48 w-screen">
            <div class="text-white text-4xl">
                Languages I have used:
            </div>
        </div>
    </div>
</template>

<style scoped>
</style>
