import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";
import singlePage from "../components/singlepage.vue";
import candidateDashborad from "../components/Candidate/candidateDashborad.vue";
import CandidateDashborad from "../pages/CandidateDashborad.vue"
import Appliedjob from "../components/Candidate/appliedjob.vue";
import favoritejob from "../components/Candidate/favoritejob.vue";
import JobAlert from "../components/Candidate/JobAlert.vue";
import Candidatesetting from "../components/Candidate/candidatesetting.vue";


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
        component: candidateDashborad
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
    },
    {
        path: '/Settings',
        name: 'Settings',
        component: Candidatesetting
    }
];

const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes,
});

export default router;