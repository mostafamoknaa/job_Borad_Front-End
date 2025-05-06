import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";
import singlePage from "../components/singlepage.vue";
import Register from '../views/Register.vue';
import Login from '../views/Login.vue';
import ForgotPassword from '../views/ForgotPassword.vue';
import VerifyAccount from '../views/VerifyAccount.vue';
import ResetPassword from '../views/ResetPassword.vue';



const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
  },
  {
    path: '/register',
    name: "Register",
    component: Register
  },
  {
    path: '/login',
    name: "Login",
    component: Login
  },
  {
    path: '/reset-password/:token',
    name: "ResetPassword",
    component: ResetPassword
  },
  {
    path: '/forgot-password',
    name: "ForgetPassword",
    component: ForgotPassword
  },
  {
    path: '/verify/:token',
    name: "VerifyAccount",
    component: VerifyAccount
  },
  {
    path: "/single",
    name: "SinglePage",
    component: singlePage
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
