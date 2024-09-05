<template>
    <form @submit.prevent="login">
        <div class="mb-4">
            <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
            <input v-model="email" type="email" id="email" name="email" required
                :class="{ 'border-red-500': isEmailInvalid }"
                class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                @input="validateEmailInput">
            <span v-if="isEmailInvalid" class="text-red-500 text-xs">L'adresse email est requise et doit être
                valide.</span>
        </div>
        <div class="mb-4">
            <label for="password" class="block text-sm font-medium text-gray-700">Mot de passe</label>
            <input v-model="password" type="password" id="password" name="password" required
                :class="{ 'border-red-500': isPasswordInvalid }"
                class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                @input="validatePasswordInput">
            <span v-if="isPasswordInvalid" class="text-red-500 text-xs">Le mot de passe est requis.</span>
        </div>
        <div class="flex items-center justify-between">
            <button type="button" @click="login" class="text-sm text-primary-dark">Se Connecter</button>
        </div>
    </form>
</template>

<script setup>
import { ref, } from 'vue';
import { validateEmail, validatePassword } from '../../utils/validator';
import { useUserStore } from '@/stores/user'


const email = ref('');
const password = ref('');
const userStore = useUserStore()
const isEmailInvalid = ref(false);
const isPasswordInvalid = ref(false);

const validateEmailInput = () => {
    isEmailInvalid.value = validateEmail(email.value);
};

const validatePasswordInput = () => {
    isPasswordInvalid.value = validatePassword(password.value);
};

const login = async () => {
    validateEmailInput();
    validatePasswordInput();
    try {
        const res = userStore.login(email.value, password.value)
        console.log(res)
    } catch (error) {
        console.log(error)
    }
    userStore.login(email.value, password.value)

};


</script>