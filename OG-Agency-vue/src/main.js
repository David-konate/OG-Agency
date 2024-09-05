import "./assets/styles.scss";

import { createApp } from "vue";
import { createPinia } from "pinia";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(Vue3Toastify, {
  autoClose: 3000,
});
app.mount("#app");
