import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";
import singlePage from "../components/singlepage.vue";
import candidateDashborad from "../components/Candidate/candidateDashborad.vue";
import CandidateDashborad from "../pages/CandidateDashborad.vue"
import Appliedjob from "../components/Candidate/appliedjob.vue";
import favoritejob from "../components/Candidate/favoritejob.vue";
import JobAlert from "../components/Candidate/JobAlert.vue";
import Candidatesetting from "../components/Candidate/candidatesetting.vue";
import Settingprofile from "../components/Candidate/settingprofile.vue";
import Sociallink from "../components/Candidate/sociallink.vue";
import AccountSetting from "../components/Candidate/AccountSetting.vue";
import Page404 from "../components/Page404.vue";
import ContactUs from "../components/ContactUs.vue";
import SmallNab from "../components/Employeer/SmallNav.vue";
import PersonalAccount from "../components/Employeer/PersonalAccount.vue";
import SmallNav from "../components/Employeer/SmallNav.vue";
import FilterSidevar from "../components/FilterSidevar.vue";
import JobDetails from "../components/JobDetails.vue";
import JobList from "../components/JobList.vue";
import JobListPage from "../pages/JobListPage.vue";


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
    },
    {
        path: '/SettingProfile',
        name: 'SettingProfile',
        component: Settingprofile
    },
    {
        path: '/SocialLink',
        name: 'SocialLink',
        component: Sociallink
    },
    {
        path: '/AccountSetting',
        name: 'AccountSetting',
        component: AccountSetting
    },
    {
        path: '/CustomerService',
        name: 'CustomerService',
        component: ContactUs
    },
    {
        path: '/nav',
        name: 'nav',
        component: SmallNav
    },
    {
        path: '/employeer/company',
        name: 'company',
        component: PersonalAccount
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: Page404
    },
    {
        path: '/filtersicevar',
        name: 'filtersicevar',
        component: FilterSidevar
    },
    {
        path: '/jobdetails',
        name: 'jobdetails',
        component: JobDetails
    },
    {
        path: '/jobs',
        name: 'JobList',
        component: JobList
    },
    {
        path: '/joblistpage',
        name: 'joblistpage',
        component: JobListPage
    }
];

const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes,
});

export default router;