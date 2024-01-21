<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
    <div class="container">
        <!--<img src="../assets/Images/jake2k4PFP.png" class="max-h-40">-->
        <!-- navbar -->
        <nav class="text-white w-screen border-b-2 border-red-400">
            <div class="px-5 xl:px-12 py-4 flex">
                <!-- Nav Links -->
                <div class="md:flex px-4 mx-auto font-semibold font-heading space-x-12">
                    <RouterLink to="/" class="hover:text-gray-200">Home</RouterLink>
                    <RouterLink to="/about" class="hover:text-gray-200">About</RouterLink>
                    <RouterLink to="/projects" class="hover:text-gray-200">Projects</RouterLink>
                </div>
            </div>
        </nav>
    </div>
</template>

<style scoped>
</style>