import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// CSS imports (organized)
import "@fortawesome/fontawesome-free/css/all.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "intl-tel-input/build/css/intlTelInput.css";

// JS imports (optimized)
import "bootstrap"; // Already includes Popper.js
import "intl-tel-input/build/js/intlTelInput.min.js";
import "intl-tel-input/build/js/utils.js";

// Initialize Bootstrap
import * as bootstrap from 'bootstrap';
window.bootstrap = bootstrap; // Make available globally if needed

// Create and mount the app
const app = createApp(App);
app.use(router);
app.mount("#app");