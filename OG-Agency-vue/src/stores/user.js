import { defineStore } from "pinia";
import axios from "../services/axios";
import { useCookies } from "vue3-cookies";
import { toast } from "vue3-toastify";
import router from "@/router"; // Importez le routeur Vue

const { cookies } = useCookies();

export const useUserStore = defineStore("user", {
  state: () => ({
    user: null,
    token: null,
    errors: null,
  }),
  actions: {
    async login(email, password) {
      try {
        // Envoyer une requête POST à l'endpoint de login avec l'email et le mot de passe
        const response = await axios.post("/security/login", {
          email,
          password,
        });
        // Stocker les informations de l'utilisateur et le jeton dans l'état
        this.user = response.data.user;
        this.token = response.data.token;
        // Définir un cookie avec le jeton d'authentification
        cookies.set("cookies", this.token);
        // Ajouter le jeton aux en-têtes d'autorisation pour les futures requêtes
        axios.defaults.headers.common["Authorization"] = `Bearer ${this.token}`;
        // Afficher un message de succès
        toast.success("Connexion réussie !");
        // Naviguer vers la page d'accueil
        router.push("/");
      } catch (error) {
        // Stocker les erreurs dans l'état
        this.errors = error.response?.data?.errors || "Erreur inconnue";
        // Afficher un message d'erreur
        toast.error(
          "Erreur lors de la connexion : " +
            (error.response?.data?.message || "Veuillez réessayer.")
        );
      }
    },

    async register(name, email, password) {
      try {
        const response = await axios.post("/security/register", {
          name,
          email,
          password,
        });
        this.user = response.data.user;
        this.token = response.data.token;
        axios.defaults.headers.common["Authorization"] = `Bearer ${this.token}`;
        toast.success("Inscription réussie !");
        router.push("/");
      } catch (error) {
        this.errors = error.response?.data?.errors || "Erreur inconnue";
        toast.error(
          "Erreur lors de l'inscription : " +
            (error.response?.data?.message || "Veuillez réessayer.")
        );
      }
    },

    async logout() {
      try {
        await axios.post("/security/logout");
        this.user = null;
        this.token = null;
        cookies.delete("cookies");
        delete axios.defaults.headers.common["Authorization"];
        toast.success("Déconnexion réussie !");
        router.push("/");
      } catch (error) {
        this.errors = error.response?.data?.errors || "Erreur inconnue";
        toast.error(
          "Erreur lors de la déconnexion : " +
            (error.response?.data?.message || "Veuillez réessayer.")
        );
      }
    },

    async loginWithGoogle(user) {
      const name = user.name;
      const email = user.email;
      const google_id = user.sub;
      try {
        const response = await axios.post("/security/google", {
          name,
          email,
          google_id,
        });
        this.user = response.data.user;
        this.token = response.data.token;
        cookies.set("cookies", this.token);
        axios.defaults.headers.common["Authorization"] = `Bearer ${this.token}`;
        toast.success("Connexion avec Google réussie !");
        router.push("/");
      } catch (error) {
        this.errors = error.response?.data?.errors || "Erreur inconnue";
        toast.error(
          "Erreur lors de la connexion avec Google : " +
            (error.response?.data?.message || "Veuillez réessayer.")
        );
      }
    },
  },
});
