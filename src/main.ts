import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import router from "./router";
import store from "./store";

import PrimeVue from "primevue/config";
import Tooltip from "primevue/tooltip";
import ToastService from "primevue/toastservice";
import ConfirmationService from "primevue/confirmationservice";

import "primevue/resources/themes/saga-blue/theme.css"; //theme
import "primevue/resources/primevue.min.css"; //core css
import "primeicons/primeicons.css"; //icons
import "/node_modules/primeflex/primeflex.css";

import NoSideBar from "./layouts/NoSideBar.vue";
import DefaultSideBar from "./layouts/DefaultSideBar.vue";

const app = createApp(App);
app.component("no-sidebar-layout", NoSideBar);
app.component("default-sidebar-layout", DefaultSideBar);
app.use(store);
app.use(createPinia());
app.use(router);
app.use(PrimeVue);
app.use(ToastService);
app.use(ConfirmationService);
app.directive("tooltip", Tooltip);
app.mount("#app");
