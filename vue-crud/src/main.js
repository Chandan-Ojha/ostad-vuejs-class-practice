import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "vue-toast-notification/dist/theme-sugar.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(router);

app.mount("#app");
