import { createApp } from "vue";
import App from "./App.vue";
import VueFeather from 'vue-feather';
import router from "./router";

import "./assets/main.sass";

const app = createApp(App);

app.component(VueFeather.name, VueFeather);
app.use(router);

app.mount("#app");
