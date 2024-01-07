<script setup>
import home from './pages/homePage.vue'
let devMode = false

if (devMode) {
  console.log(screen.width)
  console.log(screen.height)
}
</script>

<template>
  <div class="container">
    <home></home>
  </div>
</template>

<style scoped>
</style>
