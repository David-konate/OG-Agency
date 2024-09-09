<template>
    <div class="container mx-auto px-4 py-12 min-h-screen flex flex-col">
        <main class="flex-grow flex flex-col items-center text-center">
            <div class="flex flex-col items-center justify-center h-full mt-5">
                <p class="title text-3xl font-bold mt-3">{{ t('cookies.title') }}</p>
            </div>

            <div
                class="gradient-background flex flex-col items-center text-center justify-center h-full mt-5 bg-gradient-to-br from-blue-500 to-blue-800 shadow-md rounded-lg p-8">
                <h1 class="text-3xl font-bold text-white">{{ t('cookies.usage_policy') }}</h1>

                <div class="mt-8">
                    <h2 class="text-2xl font-semibold text-white">{{ t('cookies.what_is_cookie') }}</h2>
                    <p class="text-white mt-2 p-5">{{ t('cookies.description') }}</p>

                    <h3 class="mt-4 font-bold text-white">{{ t('cookies.we_use_cookies') }}</h3>
                    <ul class="list-disc list-inside mt-4 text-white">
                        <li>{{ t('cookies.use_purposes.purpose1') }}</li>
                        <li>{{ t('cookies.use_purposes.purpose2') }}</li>
                        <li>{{ t('cookies.use_purposes.purpose3') }}</li>
                        <li>{{ t('cookies.use_purposes.purpose4') }}</li>
                        <li>{{ t('cookies.use_purposes.purpose5') }}</li>
                        <li>{{ t('cookies.use_purposes.purpose6') }}</li>
                    </ul>

                    <h3 class="mt-4 font-bold text-white">{{ t('cookies.not_use_cookies') }}</h3>
                    <ul class="list-disc list-inside mt-4 text-white">
                        <li>{{ t('cookies.not_use_purposes.purpose1') }}</li>
                        <li>{{ t('cookies.not_use_purposes.purpose2') }}</li>
                        <li>{{ t('cookies.not_use_purposes.purpose3') }}</li>
                        <li>{{ t('cookies.not_use_purposes.purpose4') }}</li>
                    </ul>

                    <h3 class="mt-4 font-bold text-white">{{ t('cookies.statistics_cookies') }}</h3>
                    <p class="text-white mt-2 p-5">{{ t('cookies.analytics_description') }}</p>

                    <p class="text-white mt-2 p-5">{{ t('cookies.google_analytics') }}</p>
                    <p class="text-white mt-2 p-5">{{ t('cookies.ip_note') }}</p>
                    <p class="text-white mt-2 p-5">{{ t('cookies.cookie_disable_instruction') }}</p>
                </div>
            </div>
        </main>
    </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
</script>

<style scoped>
.custom-image2 {
    filter: invert(1);
}

.gradient-background {
    background: linear-gradient(to bottom right,
            theme('colors.primary'),
            theme('colors.secondary'));
}
</style>