import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AuthView from "../views/AuthView.vue";
import MentionView from "../views/MentionView.vue";
import CookiesView from "@/views/CookiesView.vue";
import CGUView from "@/views/CGUView.vue";
import OffreView from "@/views/OffreView.vue";
import ContactView from "@/views/ContactView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/login",
      name: "login",
      component: AuthView,
    },
    {
      path: "/cookies",
      name: "cookies",
      component: CookiesView,
    },
    {
      path: "/mentions-legales",
      name: "mentions-legales",
      component: MentionView,
    },
    {
      path: "/CGU",
      name: "C.G.U.",
      component: CGUView,
    },
    {
      path: "/contact",
      name: "contact",
      component: ContactView,
    },
    {
      path: "/offres",
      name: "offres",
      component: OffreView,
    },
  ],
});

export default router;
