import "./assets/styles.scss";

import { createApp } from "vue";
import { createPinia } from "pinia";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
import App from "./App.vue";
import router from "./router";
import i18n from "./i18n"; // Importez le fichier de configuration i18n

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(Vue3Toastify, {
  autoClose: 3000,
});
app.use(i18n);

app.mount("#app");
