<template>
    <header class="shadow-lg">
        <div class="flex justify-between items-center max-w-screen-xl mx-auto px-4 py-4">
            <!-- Logo et Titre -->
            <router-link to="/" class="flex items-center">
                <img class="gradient-background h-20 w-auto rounded-xl" src="@/assets/logo.svg" alt="logo" />
                <h4 class="title text-xl font-bold ms-5 italic flex-grow">
                    O&G - Agency
                </h4>
            </router-link>

            <!-- Liens de Navigation centrés -->
            <nav class="flex space-x-4 mx-auto">
                <router-link v-for="link in links" :key="link.path" :to="link.path"
                    class="text-lg font-semibold hover:underline text-white">
                    {{ t(link.key) }} <!-- Utilise t() pour la traduction des labels -->
                </router-link>
            </nav>

            <!-- Sélection de langue alignée à droite -->
            <div class="ml-auto flex space-x-4">
                <button @click="() => changeLanguage('fr')"
                    :class="locale.value === 'fr' ? 'text-red-500' : 'text-white'"
                    class="text-lg font-semibold hover:underline">
                    Français
                </button>
                <button @click="() => changeLanguage('en')"
                    :class="locale.value === 'en' ? 'text-red-500' : 'text-white'"
                    class="text-lg font-semibold hover:underline">
                    English
                </button>
            </div>
        </div>
    </header>
</template>

<script setup>
import { useI18n } from 'vue-i18n';

const { t, locale } = useI18n(); // Utiliser la fonction de traduction (t)

// Définition des liens avec des clés de traduction
const links = [
    { key: 'navigation.home', path: '/' },
    { key: 'navigation.offer', path: '/offres' },
    { key: 'navigation.about', path: '/a-propos' },
    { key: 'navigation.contact', path: '/contact' },
];

// Fonction pour changer la langue
const changeLanguage = (lang) => {
    locale.value = lang;
    localStorage.setItem("language", lang); // Sauvegarder la langue dans le localStorage
};
</script>

<style scoped>
.gradient-background {
    background: linear-gradient(to bottom right,
            theme('colors.secondary'),
            theme('colors.primary'));
}
</style>