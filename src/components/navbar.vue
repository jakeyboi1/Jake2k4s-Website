<script setup>
import { RouterLink } from 'vue-router'
function openLink(link) {
    window.open(link, '_blank')
}
</script>

<template>
    <div>
        <div class="navbar border-b-2 border-red-400 w-screen">
            <a class="btn btn-ghost text-xl w-60 absolute">Jake2k4's Website</a>
            <div class="navbar-center hidden lg:flex mx-auto">
                <ul class="menu menu-horizontal px-1">
                    <li><RouterLink to="/" class="hover:text-gray-200">Home</RouterLink></li>
                    <li><RouterLink to="/about" class="hover:text-gray-200">About</RouterLink></li>
                    <li><RouterLink to="/projects" class="hover:text-gray-200">Projects</RouterLink></li>
                    <li>
                        <details>
                            <summary>My Links</summary>
                            <ul class="p-2">
                                <li><a @click="openLink('https://www.youtube.com/@Jake2k4-id9ym')">Youtube</a></li>
                                <li><a @click="openLink('https://github.com/jakeyboi1')">Github</a></li>
                                <li><a @click="openLink('https://discord.gg/NWQD8SjXB7')">Discord</a></li>
                                <li><a @click="openLink('mailto:jakelandrumbe@gmail.com')">Email</a></li>
                            </ul>
                        </details>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style scoped>
</style>