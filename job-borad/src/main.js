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

window.bootstrap = bootstrap;





createApp(App).use(router).mount("#app");