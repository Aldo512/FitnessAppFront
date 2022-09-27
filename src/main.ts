import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import router from "./router";
import store from "./store";

import PrimeVue from "primevue/config";
import Tooltip from "primevue/tooltip";
import ToastService from "primevue/toastservice";

import "primevue/resources/themes/saga-blue/theme.css"; //theme
import "primevue/resources/primevue.min.css"; //core css
import "primeicons/primeicons.css"; //icons
import "/node_modules/primeflex/primeflex.css";

const app = createApp(App);
app.use(store);
app.use(createPinia());
app.use(router);
app.use(PrimeVue);
app.use(ToastService);
app.directive("tooltip", Tooltip);
app.mount("#app");
