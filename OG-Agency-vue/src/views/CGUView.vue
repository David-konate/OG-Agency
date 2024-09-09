<template>
    <div class="container mx-auto px-4 py-12 min-h-screen flex flex-col">

        <main class="flex-grow flex flex-col items-center text-center">
            <div class="flex flex-col items-center justify-center h-full mt-5">
                <!-- Titre traduit (Conditions Générales d'Utilisation) -->
                <p class="title text-3xl font-bold mt-3">{{ $t('terms.title') }}</p>
            </div>

            <div
                class="gradient-background flex flex-col items-center text-center justify-center h-full mt-5 bg-gradient-to-br from-blue-500 to-blue-800 shadow-md rounded-lg p-8">

                <div class=" mt-8">
                    <!-- Sous-titre traduit (Politique de Confidentialité) -->
                    <h2 class="text-2xl font-semibold text-white">{{ $t('terms.privacy_policy') }}</h2>
                    <p class="text-white mt-2 p-5">
                        {{ $t('terms.privacy_intro') }}
                    </p>
                    <!-- Titre et description traduits (Données Collectées) -->
                    <h3 class="mt-4 font-bold text-white">{{ $t('terms.data_collected') }}</h3>
                    <p class="text-white mt-2 p-5">
                        {{ $t('terms.data_collected_description') }}
                    </p>
                </div>

                <div class="mt-8">
                    <!-- Titre et description traduits (Cookies) -->
                    <h2 class="text-2xl font-semibold text-white">{{ $t('terms.cookies') }}</h2>
                    <p class="text-white mt-2 p-5">
                        {{ $t('terms.cookies_description') }}
                        <router-link to="/cookies" class="text-yellow-400 underline">
                            {{ $t('footer.cookies') }}
                        </router-link>
                    </p>
                </div>

                <div class="mt-8">
                    <!-- Titre et description traduits (Droits d'Auteur) -->
                    <h2 class="text-2xl font-semibold text-white">{{ $t('terms.copyright') }}</h2>
                    <p class="text-white mt-2 p-5">
                        {{ $t('terms.copyright_description') }}
                    </p>
                </div>

                <div class="mt-8">
                    <!-- Titre et description traduits (Liens vers des Ressources Tiers) -->
                    <h2 class="text-2xl font-semibold text-white">{{ $t('terms.third_party_links') }}</h2>
                    <p class="text-white mt-2 p-5">
                        {{ $t('terms.third_party_links_description') }}
                    </p>
                </div>

                <div class="mt-8">
                    <!-- Titre et description traduits (Clause de Non-Responsabilité) -->
                    <h2 class="text-2xl font-semibold text-white">{{ $t('terms.disclaimer') }}</h2>
                    <p class="text-white mt-2 p-5">
                        {{ $t('terms.disclaimer_description') }}
                    </p>
                </div>

                <div class="mt-8">
                    <!-- Titre et description traduits (Conformité au Registre Bloctel) -->
                    <h2 class="text-2xl font-semibold text-white">{{ $t('terms.bloctel_compliance') }}</h2>
                    <p class="text-white mt-2 p-5">
                        {{ $t('terms.bloctel_compliance_description') }}
                    </p>
                </div>

                <div class="mt-8">
                    <!-- Titre et description traduits (Contact) -->
                    <h2 class="text-2xl font-semibold text-white">{{ $t('terms.contact') }}</h2>
                    <p class="text-white mt-2 p-5">
                        {{ $t('terms.contact_description') }}
                        <br />
                        {{ $t('terms.email') }}
                        <br />
                        {{ $t('terms.phone') }}
                    </p>
                    <p class="text-white mt-2 p-5">
                        {{ $t('terms.prompt_reply') }}
                    </p>
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