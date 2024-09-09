<template>
    <div class="container mx-auto px-4 py-12">
        <div class="gradient-background py-12 rounded-lg h-full mt-8">
            <div class="container mx-auto px-4">
                <div class="flex flex-col items-center justify-center">
                    <p class="text-white text-3xl font-bold mt-3">
                        {{ t('legal.title') }} <!-- Traduction du titre -->
                    </p>
                </div>

                <div class="mt-8 grid gap-8 grid-cols-1 sm:grid-cols-2">
                    <!-- Propriétaire du site -->
                    <div class="bg-white shadow-md rounded-lg p-5">
                        <h2 class="text-2xl font-bold text-gray-800 mb-4">
                            {{ t('legal.owner.title') }} <!-- Traduction du titre de la section propriétaire -->
                        </h2>
                        <p class="text-gray-600">
                            <strong>{{ t('legal.owner.company') }}</strong> A.B TAXI SERVICE
                            <br />
                            <strong>{{ t('legal.owner.registration') }}</strong> 908 177 710 R.C.S.
                            <br />
                            <strong>{{ t('legal.owner.headquarters') }}</strong> Coulommiers
                            <br />
                            <strong>{{ t('legal.owner.siret') }}</strong> 980 442 594 00019
                            <br />
                            <strong>{{ t('legal.owner.vat') }}</strong> FR92980442594
                            <br />
                            <strong>{{ t('legal.owner.registration_date') }}</strong> 01/01/2024
                            <br />
                            <strong>{{ t('legal.owner.activity') }}</strong> Transports de voyageurs par taxis - (
                            49.32Z )
                            <br />
                            <strong>{{ t('legal.owner.name') }}</strong> BENNA
                            <br />
                            <strong>{{ t('legal.owner.surname') }}</strong> Ayache
                            <br />
                            <strong>{{ t('legal.owner.phone') }}</strong> 06.50.01.73.39
                            <br />
                            <strong>{{ t('legal.owner.email') }}</strong> a.btaxiservice77@gmail.com
                            <br />
                            <strong>{{ t('legal.owner.legal_form') }}</strong> Société par actions simplifiée
                            unipersonnelle
                            <br />
                            <strong>{{ t('legal.owner.capital') }}</strong> 300,00 Euros
                            <br />
                            <strong>{{ t('legal.owner.address') }}</strong> 13 Rue Pierre Curie 77120 Coulommiers
                        </p>
                    </div>

                    <!-- Hébergeur du site -->
                    <div class="bg-white shadow-md rounded-lg p-5">
                        <h2 class="text-2xl font-bold text-gray-800 mb-4">
                            {{ t('legal.hosting.title') }} <!-- Traduction du titre de la section hébergeur -->
                        </h2>
                        <p class="text-gray-600">
                            <strong>{{ t('legal.hosting.company') }}</strong> Vercel
                            <br />
                            <strong>{{ t('legal.hosting.url') }}</strong>
                            https://ab-taxi-678a4bx7m-david-konates-projects.vercel.app
                            <br />
                            <strong>{{ t('legal.hosting.domain') }}</strong> OVH
                            <br />
                            <strong>{{ t('legal.hosting.address') }}</strong> 2 Rue Kellermann, 59100 Roubaix, France
                        </p>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'; // Importation de la fonction useI18n

const { t } = useI18n(); // Utilisation de la fonction de traduction t()
</script>

<style scoped>
.gradient-background {
    background: linear-gradient(to bottom right,
            theme('colors.primary'),
            theme('colors.secondary'));
}
</style>
