<script setup>
import navbar from '../components/navbar.vue';
</script>

<template>
    <div class="container w-screen"> <!--Hiding x overflow so no side scroll bar on the bottom of your screen-->
        <navbar></navbar>
        <div class="py-20 items-center w-screen">
            <div class="mx-auto max-w-xl text-center">
                <strong class="sm:text-5xl font-extrabold text-red-700 sm:block">
                    About Me 
                </strong>

                <p class="mt-4 sm:text-xl/relaxed text-white">
                    A little more information about me! With having been coding for over a year now I have experimented with many different avenues of programming. I have experimented with web development, game development, scripting, even a little C++ memory editing, and a lot more. While doing all of this I have learned that I prefer backend development over frontend development as while I can make frontend applications, my eye for design is not the best. I much prefer backend development, as I find creating the logic, and how it interacts with everything another much more enjoyable development experience.
                </p>
            </div>
        </div>


        <strong class="sm:text-5xl font-extrabold text-blue-700 sm:block w-screen text-center my-2 mt-10">
            Things I have Used:
        </strong>
        <div class="grid grid-cols-3 gap-96 w-screen">
            <div class="py-32 items-center">
                <div class="mx-auto max-w-xl text-center">
                    <strong class="sm:text-5xl font-extrabold text-blue-700 sm:block">
                        Languages:
                    </strong>

                    <p class="mt-10 grid grid-cols-2 gap-2">
                        <ul class="grid grid-cols-2 text-white text-xl gap-2">
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>Lua</li>
                            <li>Python</li>
                            <li>C++</li>
                            <li>SQL</li>
                            <li>GD Script</li>
                        </ul>
                    </p>
                </div>
            </div>

            <div class="py-32 items-center">
                <div class="mx-auto max-w-xl text-center">
                    <strong class="sm:text-5xl font-extrabold text-blue-700 sm:block">
                        Frameworks:
                    </strong>

                    <p class="mt-10 grid grid-cols-2 gap-2">
                        <ul class="grid grid-cols-2 text-white text-xl gap-2">
                            <li>Vue.js</li>
                            <li>Tailwind CSS</li>
                        </ul>
                    </p>
                </div>
            </div>
            <div class="py-32 items-center">
                <div class="mx-auto max-w-xl text-center">
                    <strong class="sm:text-5xl font-extrabold text-blue-700 sm:block">
                        Databases:
                    </strong>

                    <p class="mt-10 grid grid-cols-2 gap-2">
                        <ul class="grid grid-cols-2 text-white text-xl gap-2">
                            <li>Heidi SQL</li>
                            <li>Mongo DB</li>
                        </ul>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
</style>
