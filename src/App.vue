<script setup>
import navbar from './components/navbar.vue'
let devMode = false

if (devMode) {
  console.log(screen.width)
  console.log(screen.height)
}
</script>

<template>
  <div class="container">
    <navbar></navbar>
  </div>
</template>

<style scoped>
</style>
