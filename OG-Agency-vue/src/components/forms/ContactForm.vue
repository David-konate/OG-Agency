<template>
    <div class="w-full max-w-screen-xl mx-auto flex flex-col-reverse xl:flex-row xl:p-5">
        <!-- Dialog -->
        <InformationDialog v-if="dialog" :title="dialog.title" :message="dialog.message" :isError="dialog.isError"
            :isOpen="isDialogOpen" @close="handleCloseDialog" />

        <!-- Premier bloc : Texte -->
        <div class="flex-1 xl:mr-5 bg-bg-light rounded-lg p-5 mt-8 xl:mt-0 shadow-lg">
            <div class="flex flex-col xl:p-3">
                <div class="py-4">
                    <p class="text-text-dark text-3xl font-bold">
                        Comment réserver votre taxi ?
                    </p>
                </div>
                <p class="text-2xl font-semibold mt-4">
                    1. Demande de réservation
                </p>
                <p class="text-gray-600 mt-2 px-2">
                    Transport événementiel, occasionnel, touristique, ou d'affaires,
                    n'hésitez pas à formuler vos demandes.
                </p>
                <div class="flex flex-col md:flex-row justify-around items-center mt-6">
                    <!-- <div class="mt-4 md:mt-0">
                <ResaButton />
              </div>
              <div class="mt-4 md:mt-0">
                <ContactButtonNav />
              </div> -->
                </div>
                <div class="mt-8">
                    <p class="text-2xl font-semibold">
                        2. Pas d'argent à avancer
                    </p>
                    <p class="font-semibold text-gray-600 mt-2 px-2">
                        Vous avez une prescription médicale de transport ?
                    </p>
                    <p class="text-gray-600 mt-1 px-2">
                        Commandez un taxi conventionné qui vous fera bénéficier du tiers
                        payant. Vous ne faites pas l'avance des frais de votre course.
                        Ils vous sont payés par la sécurité sociale.
                    </p>
                </div>
                <div class="mt-8 mb-8">
                    <p class="text-2xl font-semibold">3. Profitez</p>
                    <p class="text-gray-600 mt-1 px-2">
                        C'est le moment de vous détendre, profitez du confort de nos
                        véhicules et relaxez-vous.
                    </p>
                </div>
            </div>
        </div>

        <!-- Second bloc : Formulaire -->
        <div
            class="mt-8 mx-auto xl:mt-0 xl:ml-5 xl:w-1/2 w-full flex flex-col items-center justify-center rounded-lg bg-bg-light shadow-lg p-5">
            <form @submit.prevent="onSubmit" class="w-full flex flex-col">
                <!-- Étapes du formulaire -->
                <ol
                    class="flex mx-auto justify-center items-center w-full text-sm font-medium text-center text-text-dark sm:text-base">
                    <li v-for="(step, index) in steps" :key="index" :class="{
            'text-accent': index === currentStep,
        }" class="flex items-center">
                        <span class="flex items-center">
                            <svg v-if="index === currentStep" class="w-4 h-4 me-2.5" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path
                                    d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                            </svg>
                            {{ step.title }}
                        </span>
                    </li>
                </ol>

                <!-- Composant d'étape -->
                <div class="mt-2 w-full">
                    <component :is="steps[currentStep].component" />
                </div>

                <!-- Boutons de navigation -->
                <div class="flex justify-between mt-4 w-full">
                    <button type="button"
                        class="py-2 px-4 bg-white text-text-dark rounded border border-border-light hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                        :class="{ 'opacity-50 cursor-not-allowed': currentStep === 0 }"
                        @click="currentStep = Math.max(currentStep - 1, 0)" :disabled="currentStep === 0">
                        Précédent
                    </button>
                    <button type="submit"
                        class="py-2 px-4 bg-primary text-text-light rounded border border-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary-dark">
                        {{ currentStep === steps.length - 1 ? 'Soumettre' : 'Suivant' }}
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
// import { useForm } from 'vee-validate';
// import { zodResolver } from '@hookform/resolvers/zod';
// import {
//     schemaContact1,
//     schemaContact2,
//     schemaContact3,
// } from '@/app/lib/validation';
// import ResaButton from '../buttons/ResaButton.vue';
// import ContactButtonNav from '../buttons/ContactButtonNav.vue';
// import InformationDialog from '../messages/InformationDialog.vue';

const steps = [
    {
        title: 'Vos coordonnées',
        component: 'VosCoordonnees'
    },
    {
        title: 'Votre trajet',
        component: 'VotreTrajet'
    },
    {
        title: 'Prise en charge',
        component: 'VotrePrise'
    }
];

const currentStep = ref(0);
const isDialogOpen = ref(false);
const dialog = ref(null);

const mail = ref({
    nom: '',
    prenom: '',
    email: '',
    adresse: '',
    phone: '',
    service: '',
    heureRdv: '',
    joursRdv: '',
    heurePriseEnCharge: '',
    numeroPriseEnCharge: '',
    ruePriseEnCharge: '',
    codePostalPriseEnCharge: '',
    villePriseEnCharge: '',
    numeroDestination: '',
    rueDestination: '',
    codePostalDestination: '',
    villeDestination: ''
});

// const { handleSubmit, reset, setValue, errors } = useForm({
//     resolver: zodResolver(
//         currentStep.value === 0
//             ? schemaContact1
//             : currentStep.value === 1
//                 ? schemaContact2
//                 : schemaContact3
//     ),
//     defaultValues: mail.value
// });

const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
};

const onSubmit = async (data) => {
    if (data.joursRdv) {
        data.joursRdv = formatDate(data.joursRdv);
    }

    if (currentStep.value < steps.length - 1) {
        mail.value = { ...mail.value, ...data };
        currentStep.value += 1;
    } else {
        mail.value = { ...mail.value, ...data };

        const emailData = {
            from: `a.btaxiservice77@gmail.com <onboarding@resend.dev>`,
            to: 'a.btaxiservice77@gmail.com',
            subject: `Demande de réservation de taxi par ${mail.value.email}`,
            html: `
          <div class="p-4">
            <p class="text-lg font-bold text-accent">
              ${mail.value.service} - Réservation de taxi 
            </p>
          
            <p class="font-bold">Coordonnées :</p>
            <ul class="list-disc">
              <li class="text-base">Nom : ${mail.value.nom}</li>
              <li class="text-base">Prénom : ${mail.value.prenom}</li>
              <li class="text-base">Email : ${mail.value.email}</li>
              <li class="text-base">Adresse : ${mail.value.adresse}</li>
              <li class="text-base">Téléphone : ${mail.value.phone}</li>
            </ul>
  
            <p class="font-bold mt-4">Informations :</p>
            <ul class="list-disc">
              <li class="text-base">Heure de rendez-vous : ${mail.value.heureRdv}</li>
              <li class="text-base">Jour de rendez-vous : ${mail.value.joursRdv}</li>
              <li class="text-base">Heure de prise en charge : ${mail.value.heurePriseEnCharge}</li>
              <li class="text-base">Adresse de prise en charge : ${mail.value.numeroPriseEnCharge} ${mail.value.ruePriseEnCharge}, ${mail.value.codePostalPriseEnCharge}, ${mail.value.villePriseEnCharge}</li>
              <li class="text-base">Adresse de destination : ${mail.value.numeroDestination} ${mail.value.rueDestination}, ${mail.value.codePostalDestination}, ${mail.value.villeDestination}</li>
            </ul>
          </div>
        `,
        };

        try {
            const response = await fetch('/api/email', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(emailData),
            });

            if (response.ok) {
                dialog.value = {
                    title: 'Merci',
                    message: 'Votre demande a été envoyée avec succès. Nous vous contacterons bientôt.',
                    isError: false,
                };
                isDialogOpen.value = true;
                reset();
                currentStep.value = 0;
            } else {
                dialog.value = {
                    title: 'Erreur',
                    message: 'Une erreur est survenue lors de l\'envoi de votre demande.',
                    isError: true,
                };
                isDialogOpen.value = true;
            }
        } catch (error) {
            dialog.value = {
                title: 'Erreur',
                message: 'Une erreur est survenue lors de l\'envoi de votre demande.',
                isError: true,
            };
            isDialogOpen.value = true;
        }
    }
};

const handleCloseDialog = () => {
    isDialogOpen.value = false;
};
</script>

<style scoped>
/* Ajoute tes styles ici si nécessaire */
</style>