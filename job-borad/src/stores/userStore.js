// stores/userStore.js
import { ref } from 'vue';

export const loggedInUser = ref(null);

export function setLoggedInUser(user) {
  loggedInUser.value = user;
}

export function loginUser(user) {
  loggedInUser.value = user;
  localStorage.setItem('user', JSON.stringify(user));
}

export function logoutUser() {
  loggedInUser.value = null;
  localStorage.removeItem('user');
}
