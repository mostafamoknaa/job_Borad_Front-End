// stores/auth.js
import { ref } from "vue";

export const loggedIn = ref(!localStorage.getItem("token"));

export function logout() {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  localStorage.removeItem("employer_id");
  loggedIn.value = false;
}
