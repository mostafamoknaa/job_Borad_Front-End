<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-6 col-lg-4">
        <h1 class="text-center mb-4">Reset Password</h1>
        <form @submit.prevent="handleResetPassword" novalidate>
          <!-- New Password Field -->
          <div class="mb-4">
            <div class="input-group">
              <input
                :type="showNewPassword ? 'text' : 'password'"
                class="form-control"
                :class="{ 'is-invalid': newPasswordError }"
                id="newPassword"
                placeholder="New Password"
                v-model="newPassword"
              />
              <button
                class="btn btn-outline-secondary"
                type="button"
                @click="showNewPassword = !showNewPassword"
              >
                <i class="bi" :class="showNewPassword ? 'bi-eye-slash' : 'bi-eye'"></i>
              </button>
              <div class="invalid-feedback">{{ newPasswordError }}</div>
            </div>
          </div>

          <!-- Confirm Password Field -->
          <div class="mb-4">
            <div class="input-group">
              <input
                :type="showConfirmPassword ? 'text' : 'password'"
                class="form-control"
                :class="{ 'is-invalid': confirmPasswordError }"
                id="confirmPassword"
                placeholder="Confirm Password"
                v-model="confirmPassword"
              />
              <button
                class="btn btn-outline-secondary"
                type="button"
                @click="showConfirmPassword = !showConfirmPassword"
              >
                <i class="bi" :class="showConfirmPassword ? 'bi-eye-slash' : 'bi-eye'"></i>
              </button>
              <div class="invalid-feedback">{{ confirmPasswordError }}</div>
            </div>
          </div>

          <!-- Submit Button -->
          <button type="submit" class="btn btn-primary w-100 py-2 fw-bold">
       
            <router-link to="/login" class="text-white ">Reset Password</router-link>
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ResetPassword",
  data() {
    return {
      newPassword: "",
      confirmPassword: "",
      newPasswordError: "",
      confirmPasswordError: "",
      showNewPassword: false,
      showConfirmPassword: false,
    };
  },
  methods: {
    handleResetPassword() {
      this.newPasswordError = "";
      this.confirmPasswordError = "";
      let hasError = false;

      // Password validations
      if (!this.newPassword) {
        this.newPasswordError = "Password is required.";
        hasError = true;
      } else if (this.newPassword.length < 6) {
        this.newPasswordError = "Password must be at least 6 characters.";
        hasError = true;
      }

      if (!this.confirmPassword) {
        this.confirmPasswordError = "Confirm your password.";
        hasError = true;
      } else if (this.newPassword !== this.confirmPassword) {
        this.confirmPasswordError = "Passwords do not match.";
        hasError = true;
      }

      if (!hasError) {
        console.log("Resetting password:", this.newPassword);
        // You can proceed with API call here
      }
    },
  },
};
</script>

<style scoped>
.input-group-text {
  cursor: pointer;
}
</style>
