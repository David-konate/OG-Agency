<template>
  <form @submit.prevent="register">
    <div class="mb-4">
      <label for="name" class="block text-sm font-medium text-gray-700">Nom d'utilisateur</label>
      <input v-model="name" type="text" id="name" name="name" required :class="{ 'border-red-500': isNameInvalid }"
        class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
        @input="validateNameInput">
      <span v-if="isNameInvalid" class="text-red-500 text-xs">Le nom d'utilisateur est requis et doit être
        valide.</span>
    </div>
    <div class="mb-4">
      <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
      <input v-model="email" type="email" id="email" name="email" required :class="{ 'border-red-500': isEmailInvalid }"
        class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
        @input="validateEmailInput">
      <span v-if="isEmailInvalid" class="text-red-500 text-xs">L'adresse email est requise et doit être valide.</span>
    </div>
    <div class="mb-4">
      <label for="password" class="block text-sm font-medium text-gray-700">Mot de passe</label>
      <input v-model="password" type="password" id="password" name="password" required
        :class="{ 'border-red-500': isPasswordInvalid }"
        class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
        @input="validatePasswordInput">
      <span v-if="isPasswordInvalid" class="text-red-500 text-xs">Le mot de passe doit avoir au moins 8 caractères, une
        lettre majuscule, une lettre minuscule, un chiffre et un caractère spécial.</span>
    </div>
    <div class="mb-4">
      <label for="confirmPassword" class="block text-sm font-medium text-gray-700">Confirmez le mot de passe</label>
      <input v-model="confirmPassword" type="password" id="confirmPassword" name="confirmPassword" required
        :class="{ 'border-red-500': isConfirmPasswordInvalid }"
        class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
        @input="validateConfirmPasswordInput">
      <span v-if="isConfirmPasswordInvalid" class="text-red-500 text-xs">Les mots de passe ne correspondent pas.</span>
    </div>
    <div class="flex items-center justify-between">
      <button type="button" @click="register" class="text-sm text-primary-dark">Se Connecter</button>
    </div>
  </form>
</template>

<script setup>
import { ref, } from 'vue';
import { validateName, validateEmail, validatePassword, validateConfirmPassword } from '../../utils/validator';
import { useUserStore } from '@/stores/user'

const name = ref('');
const email = ref('');
const password = ref('');
const confirmPassword = ref('');
const userStore = useUserStore()

const isNameInvalid = ref(false);
const isEmailInvalid = ref(false);
const isPasswordInvalid = ref(false);
const isConfirmPasswordInvalid = ref(false);

const validateNameInput = () => {
  isNameInvalid.value = validateName(name.value);
};

const validateEmailInput = () => {
  isEmailInvalid.value = validateEmail(email.value);
};

const validatePasswordInput = () => {
  isPasswordInvalid.value = validatePassword(password.value);
};

const validateConfirmPasswordInput = () => {
  isConfirmPasswordInvalid.value = validateConfirmPassword(password.value, confirmPassword.value);
};

const register = () => {
  validateNameInput();
  validateEmailInput();
  validatePasswordInput();
  validateConfirmPasswordInput();

  userStore.register(name.value, email.value, password.value)
};

</script>
