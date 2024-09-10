<template>
    <div class="">
        <h2 class="text-xl font-semibold mb-4">Offres</h2>
        <div>test</div>
    </div>
</template>

<script setup>
import { ref } from 'vue';


const name = ref('');
const email = ref('');
const message = ref('');

const submitForm = () => {
    console.log('Name:', name.value);
    console.log('Email:', email.value);
    console.log('Message:', message.value);

    // Réinitialisation du formulaire
    name.value = '';
    email.value = '';
    message.value = '';
};
</script>

<style scoped>
/* Ajoute des styles ici si nécessaire */
</style>