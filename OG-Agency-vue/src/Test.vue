<script setup>
import { onMounted } from 'vue';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

// Utilisation de onMounted pour exécuter du code après le montage du composant
onMounted(() => {
    showToast();
});

// Fonction pour afficher le toast
const showToast = () => {
    toast('welcome', {
        autoClose: 3000,
    });
};
</script>