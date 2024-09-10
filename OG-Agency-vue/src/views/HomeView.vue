<script setup>
import { useI18n } from 'vue-i18n';
import { onMounted } from 'vue';
import Test from '../components/Test.vue'
// Accéder aux méthodes de localisation avec vue-i18n
const { t } = useI18n();

onMounted(() => {
  console.log(t('welcome'));
});
</script>

<template>
  <div>
    <h1>{{ t('welcome') }}</h1>
    <p>{{ t('hello') }}</p>
    <Test />
  </div>
</template>
