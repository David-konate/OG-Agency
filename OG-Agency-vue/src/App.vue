<script setup>
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <header>
      <NavBar />
    </header>
    <main class="flex-grow max-w-screen-xl mx-auto p-5">
      <RouterView />
    </main>
    <footer>
      <Footer />
    </footer>
  </div>
</template>

<style scoped>
/* Assurez-vous que le footer a une taille suffisante pour être bien visible */
footer {
  background-color: #2b2d42;
  /* Utilisation de la couleur primaire définie dans tailwind.config.js */
  color: #ffffff;
  /* Couleur du texte du footer */
}
</style>
