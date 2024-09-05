<script setup>
import { RouterView } from 'vue-router'
// import NavBar from './components/NavBar.vue'
</script>

<template>
  <header>
    <NavBar />
  </header>
  <main class="max-w-screen-xl mx-auto">
    <RouterView />
  </main>

</template>
