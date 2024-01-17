<script setup>
import navbar from '../components/navbar.vue'
import projects from '../data/projects.json'

function openLink(link) {
    window.open(link, '_blank')
}
</script>

<template>
    <navbar></navbar>
    <div class="container">
        <div class="pageTitle bg-base-200 text-center my-10 w-screen">
            <h1 class="text-5xl text-white font-bold">Projects</h1>
            <p class="py-6 text-white text-lg">This is a collection of all the projects I have developed over my time in programming!</p>
        </div>
    </div>

    <div class="w-screen">
        <div class="text-white grid grid-cols-3 gap-20 my-20 mx-8">
            <div v-for="project in projects" class="flex flex-col hover:cursor-pointer hover:opacity-80" @click="openLink(project.link)"> <!--Flex col keeps them same size-->
                <figure><img :src="project.image" :alt="project.imageAlt" /></figure>
                <div class="card-body bg-gray-800">
                    <h2 class="card-title bg-gray-800">
                    {{ project.name }}!
                    <div v-if="project.newFlag" class="badge badge-secondary bg-gray-800">New</div>
                    </h2>
                    <p class="bg-gray-800">{{ project.description }}</p>
                    <div class="bg-gray-800 card-actions justify-end">
                        <div v-for="tag in project.tags" class="bg-gray-800 card-actions justify-end">
                            <div class="bg-gray-800 badge badge-outline">{{ tag }}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
/* Your CSS styles here */
</style>