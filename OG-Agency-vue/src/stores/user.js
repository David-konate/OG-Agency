import { defineStore } from "pinia";
import axios from "../services/axios";
import { useCookies } from "vue3-cookies";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
import router from "@/router";

const { cookies } = useCookies();

export const useUserStore = defineStore("user", {
  state: () => ({
    connect: false, // Ajout de la gestion de l'état connecté
    user: null,
    token: cookies.get("cookies") || null,
    tokenExpiration: cookies.get("tokenExpiration") || null,
    errors: null,
  }),
  actions: {
    async login(email, password) {
      try {
        const response = await axios.post("security/login", {
          email,
          password,
        });

        this.user = response.data.user;
        this.token = response.data.token;

        // Stocker le token et l'heure d'expiration dans les cookies
        const expiration = new Date();
        expiration.setHours(expiration.getHours() + 12); // Expire dans 12 heures
        cookies.set("cookies", this.token);
        cookies.set("tokenExpiration", expiration);

        // Mettre à jour l'état connecté
        this.connect = true;

        axios.defaults.headers.common["Authorization"] = `Bearer ${this.token}`;
        toast.success("Connexion réussie !");
        router.push("/");
      } catch (error) {
        this.errors = error.response?.data?.errors || "Erreur inconnue";
        toast.error(
          "Erreur lors de la connexion : " +
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
        cookies.delete("tokenExpiration");

        // Mettre à jour l'état connecté
        this.connect = false;

        delete axios.defaults.headers.common["Authorization"];
        toast.success("Déconnexion réussie !");
        router.push("/login");
      } catch (error) {
        this.errors = error.response?.data?.errors || "Erreur inconnue";
        toast.error(
          "Erreur lors de la déconnexion : " +
            (error.response?.data?.message || "Veuillez réessayer.")
        );
      }
    },

    async checkAuth() {
      // Vérifier si les cookies nécessaires existent
      const token = cookies.get("cookies");
      const tokenExpiration = cookies.get("tokenExpiration");

      // Si le cookie du token et le cookie de l'expiration existent
      if (token && tokenExpiration) {
        const expiration = new Date(tokenExpiration);
        const now = new Date();

        if (expiration > now) {
          axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
          try {
            const response = await axios.get("/security/user");
            this.user = response.data.user;

            // Mettre à jour l'état connecté si l'utilisateur est encore valide
            this.connect = true;
          } catch (error) {
            this.logout(); // Si la requête échoue, on déconnecte l'utilisateur
          }
        } else {
          this.logout(); // Si le token a expiré, on déconnecte l'utilisateur
        }
      } else {
        // Si les cookies sont manquants, ne rien faire. On peut choisir de définir `this.connect` à false ici si souhaité.
        this.connect = false;
      }
    },
  },
});
