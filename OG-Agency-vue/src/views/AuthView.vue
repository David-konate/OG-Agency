<template>
    <div class="min-h-screen flex items-center justify-center ">
        <div class="max-w-md w-full p-8 shadow-lg rounded-lg bg-light">
            <h2 class="text-2xl font-semibold text-center mb-6 title-dark">Authentification</h2>

            <!-- Affichage des erreurs s'il y en a -->
            <div v-if="errors" class="mb-4">
                <p v-for="error in errors" :key="error" class="text-red-600">{{ error }}</p>
            </div>

            <!-- Boutons pour basculer entre connexion et inscription -->
            <div class="flex justify-center mb-4 mt-5">
                <button
                    class="py-2 px-4 mr-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                    :class="{ 'bg-primary text-white': mode === 'login', 'bg-gray-300 text-gray-700': mode !== 'login' }"
                    @click="switchMode('login')">
                    Connexion
                </button>
                <button
                    class="py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                    :class="{ 'bg-primary text-white': mode === 'register', 'bg-gray-300 text-gray-700': mode !== 'register' }"
                    @click="switchMode('register')">
                    Création
                </button>
            </div>

            <!-- Affichage du formulaire en fonction du mode -->
            <div v-if="mode === 'login'">
                <LoginForm @switch-mode="switchMode" />
            </div>
            <div v-else>
                <RegisterForm @switch-mode="switchMode" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import LoginForm from '../components/forms/LoginForm.vue';
import RegisterForm from '../components/forms/RegisterForm.vue';
import { useUserStore } from '@/stores/user';

const errors = ref(null);
const mode = ref('login');

const switchMode = (newMode) => {
    mode.value = newMode;
};

// Fonction pour gérer les erreurs (exemple de fonction, à remplacer par la vraie logique de connexion)
const handleErrors = (error) => {
    errors.value = error.response ? error.response.data.errors : ['Problème de récupération'];
};
</script>

<style scoped>
.title-dark {
    color: #2b2d42;
    /* Utilisez la couleur sombre définie dans vos variables SCSS */
}

.bg-light {
    background-color: #edf2f4
}
</style>