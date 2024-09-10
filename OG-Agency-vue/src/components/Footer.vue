<template>
    <footer class="bg-blue">
        <div class="w-full mx-auto max-w-screen-xl p-4 lg:flex lg:items-center lg:justify-between">
            <span class="text-sm text-white sm:text-center dark:text-white">
                © 2024
                <a href="https://flowbite.com/" class="hover:underline">
                    O&G-Agency - {{ $t('footer.agency_description') }}
                </a>
                . {{ $t('footer.all_rights_reserved') }}
            </span>
            <ul
                class="flex flex-wrap items-center justify-center mt-5 text-sm font-medium text-gray-500 dark:text-gray-400 lg:mt-0 lg:justify-end">
                <li>
                    <a href="/" class="hover:underline me-4 lg:me-6 text-white">{{ $t('navigation.home') }}</a>
                </li>
                <li>
                    <a href="/mentions-legales" class="hover:underline me-4 lg:me-6 text-white">{{
                        $t('navigation.legal') }}</a>
                </li>
                <li>
                    <a href="/cookies" class="hover:underline me-4 lg:me-6 text-white">{{ $t('footer.cookies') }}</a>
                </li>
                <li>
                    <a href="/CGU" class="hover:underline me-4 lg:me-6 text-white">{{ $t('footer.cgu') }}</a>
                </li>
                <li>
                    <a href="/contact" class="hover:underline me-4 lg:me-6 text-white">{{
                        $t('navigation.contact') }}</a>
                </li>
            </ul>
        </div>
    </footer>
</template>

<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n(); // Accès à la fonction de traduction
</script>

<style scoped>
/* Ajoute tes styles ici */
</style>
