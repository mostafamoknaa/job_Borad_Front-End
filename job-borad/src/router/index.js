import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";
import singlePage from "../components/singlepage.vue";
import candidateDashborad from "../components/candidateDashborad.vue";
import CandidateDashborad from "../pages/CandidateDashborad.vue"
import Appliedjob from "../components/appliedjob.vue";
import favoritejob from "../components/favoritejob.vue";
import JobAlert from "../components/JobAlert.vue";


const routes = [{
        path: "/",
        name: "Home",
        component: HomePage,
    },
    {
        path: "/single",
        name: "SinglePage",
        component: singlePage,
    },
    {
        path: "/candidatedashbord",
        name: "Candidatedashbord",
        component: CandidateDashborad
    },
    {
        path: "/appliedjobs",
        name: "appliedjobs",
        component: Appliedjob
    },
    {
        path: "/FavoriteJob",
        name: "FavoriteJob",
        component: favoritejob
    },
    {
        path: '/jobalert',
        name: 'jobalert',
        component: JobAlert
    }
];

const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes,
});

export default router;