import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Requests from "../views/Requests.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            component: HomeView,
        },
        {
            path: "/requests",
            component: Requests,
        },
    ],
});

export default router;
