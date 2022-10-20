import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "notyf/notyf.min.css";
import { Notyf } from "notyf";

import "./assets/main.sass";

const notyf = new Notyf({
    duration: 100000,
    position: {
        x: "right",
        y: "bottom",
    },
    dismissible: true,
    types: [
        {
            type: "success",
            background: "#a6e3a1",
            className: "success",
        },
        {
            type: "error",
            background: "#f38ba8",
            className: "error",
        },
    ],
});

const app = createApp(App);

app.use(router);
app.provide("notyf", notyf);

app.mount("#app");
