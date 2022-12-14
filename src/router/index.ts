import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Contact from "../views/Contact.vue";
import Resume from "../views/Resume.vue";
import Blogs from "../views/Blogs.vue";
import Projects from "../views/Projects.vue"

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView,
        },
        {
            path: "/contact",
            name: "Contact",
            component: Contact,
        },
        {
            path: "/resume",
            name: "Resume",
            component: Resume,
        },
        {
            path: "/blogs",
            name: "Blogs",
            component: Blogs,
        },
        {
            path: "/projects",
            name: "Projects",
            component: Projects,
        },
    ],
});

export default router;
