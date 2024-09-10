<template>
    <div class="relative w-full max-w-screen-xl mx-auto flex flex-col-reverse xl:flex-row xl:p-5">
        <div class="flex-1 xl:mr-5 bg-bg-light text-black rounded-lg p-5 mt-8 xl:mt-0 shadow-lg">
            <div class="absolute top-0 right-0 m-4">
                <!-- Button to open the Quill editor dialog -->
                <button v-if="userStore.connect" @click="openQuillDialog"
                    class="bg-red-500 p-2 rounded-md transition-all duration-300 ease-in-out transform hover:bg-red-600 hover:scale-105 active:scale-95 active:bg-red-700 focus:outline-none shadow-md">
                    <svg class="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M11.742 2.343a1.5 1.5 0 012.516 0l.74 1.414a1.5 1.5 0 001.134.65l1.597.062a1.5 1.5 0 011.441 1.822l-.093.832a1.5 1.5 0 00.9 1.65l1.273.648a1.5 1.5 0 01.733 2.045l-.494 1.06a1.5 1.5 0 00.366 1.66l.755.756a1.5 1.5 0 01.365 1.83l-.39 1.03a1.5 1.5 0 01-1.663.86l-1.153-.42a1.5 1.5 0 00-1.53.398l-1.146.953a1.5 1.5 0 01-1.83.366l-1.27-.905a1.5 1.5 0 00-1.65-.398l-.82.41a1.5 1.5 0 01-1.83-.865l-1.014-1.014a1.5 1.5 0 00-1.748-.256l-.923.922a1.5 1.5 0 01-1.84-.366l-1.296-.97a1.5 1.5 0 01-.7-1.83l-.597-1.598a1.5 1.5 0 00-1.59-1.59l-1.598.598a1.5 1.5 0 01-1.83-.7l-.97-1.296a1.5 1.5 0 00-.366-1.84l.922-.923a1.5 1.5 0 00-.256-1.748l-1.014-1.014a1.5 1.5 0 00-.865-1.83l.41-.82a1.5 1.5 0 00.398-1.65l-.905-1.27a1.5 1.5 0 00-.366-1.83l.953-1.146a1.5 1.5 0 00.398-1.53l.42-1.153a1.5 1.5 0 01.86-1.663l1.03-.39a1.5 1.5 0 01.83.365l.756.755a1.5 1.5 0 001.65-.9l.832-.093a1.5 1.5 0 011.822-1.441l.062-1.597a1.5 1.5 0 00.65-1.134l1.414-.74z" />
                    </svg>
                </button>
            </div>
            <!-- Content of the card -->
            {{ t('test.lorem') }}
        </div>

        <!-- QuillEditorDialog -->
        <QuillEditorDialog :isOpen="isQuillDialogOpen" @close="closeQuillDialog" />
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useUserStore } from '@/stores/user';
import QuillEditorDialog from '@/components/dialog/QuillEditorDialog.vue'
import { useI18n } from 'vue-i18n'; // Importation de la fonction useI18n

const { t } = useI18n(); // Utilisation de la fonction de traduction t()
const userStore = useUserStore();
const isQuillDialogOpen = ref(false);

const openQuillDialog = () => {
    isQuillDialogOpen.value = true;
};

const closeQuillDialog = () => {
    isQuillDialogOpen.value = false;
};
</script>

<style scoped>
/* Custom styles */
</style>