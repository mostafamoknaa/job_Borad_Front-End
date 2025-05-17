import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
// css imports
import "@fortawesome/fontawesome-free/css/all.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "intl-tel-input/build/css/intlTelInput.css";
import 'bootstrap-icons/font/bootstrap-icons.css';


// js imports
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "intl-tel-input/build/js/intlTelInput.min.js";
import "intl-tel-input/build/js/utils.js";

import 'bootstrap-icons/font/bootstrap-icons.css';

import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import * as bootstrap from 'bootstrap';
import apiClient from "./Interceptor/getaxiox";

window.bootstrap = bootstrap;




const app = createApp(App);

app.use(router);
app.provide('axios', apiClient);
app.config.globalProperties.$axios = apiClient;
app.mount('#app');
