<script setup>
let devMode = false

if (devMode) {
  console.log(screen.width)
  console.log(screen.height)
}
</script>

<template>
  <div class="container">
    <RouterView></RouterView>
  </div>
</template>

<style scoped>
/*Testing a comment for example*/
</style>