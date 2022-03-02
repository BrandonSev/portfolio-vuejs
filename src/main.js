import { createApp } from "vue";
import * as VueRouter from "vue-router";
import App from "./App.vue";
import Home from "./components/Home.vue";
import MesRealisations from "./components/MesRealisations.vue";
import Contact from "./components/Contact.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/mes-realisations", component: MesRealisations },
  { path: "/contact", component: Contact },
];

const router = VueRouter.createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: VueRouter.createWebHashHistory(),
  routes, // short for `routes: routes`
});

const app = createApp(App);
app.use(router);
app.mount("#app");
