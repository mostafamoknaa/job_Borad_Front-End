<template>
  <div class="container-fluid min-vh-100 p-0">
    <div class="row g-0">
      <!-- Left side (form) -->
      <div class="col-12 col-md-6 d-flex align-items-center justify-content-center bg-white p-4">
        <div class="w-100" style="max-width: 400px;">
          <div class="text-center mb-4">
            <h2 class="fw-bold mb-2">Forget Password</h2>
            <p class="mb-1">
              Go back to
              <router-link to="/employeer/login" class="text-primary fw-semibold">Sign In</router-link>
            </p>
            <p>
              Don't have account?
              <router-link to="/employeer/register" class="text-primary fw-semibold">Create Account</router-link>
            </p>
          </div>

          <form @submit.prevent="handleReset" novalidate :class="{ 'was-validated': wasValidated }">
            <div class="mb-3">
              <input
                type="email"
                class="form-control"
                placeholder="Email address"
                v-model="email"
                required
                :class="{ 'is-invalid': wasValidated && !email }"
              />
              <div class="invalid-feedback">Email is required.</div>
            </div>
            <button type="submit" class="btn btn-primary w-100 mb-3 reset">
             
              <router-link to="/employeer/reset-password" class="text-white"> Reset Password →</router-link>
            </button>
          </form>

          <div class="text-center mb-3">or</div>

          <div class="d-flex gap-2">
            <button type="button" class="btn btn-outline-primary flex-fill" @click="loginWithProvider('facebook')">
              <i class="fab fa-facebook me-2"></i> Sign in with Facebook
            </button>
            <button type="button" class="btn btn-outline-primary flex-fill" @click="loginWithProvider('google')">
              <i class="fab fa-google me-2"></i> Sign in with Google
            </button>
          </div>
        </div>
      </div>

      <!-- Right side (image and stats) -->
      <div class="col-md-6 d-none d-md-flex flex-column justify-content-center align-items-center text-white p-4 stats-section">
      
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ForgetPasswordPage',
  data() {
    return {
      email: '',
      wasValidated: false,
    };
  },
  methods: {
    handleReset() {
      this.wasValidated = true;
      if (!this.email) {
        return;
      }
      console.log('Reset password requested for:', this.email);
      // Here, you can call your API to send the reset email
    },
    loginWithProvider(provider) {
      window.location.href = `http://localhost:8000/auth/${provider}`;
    },
  },
};
</script>

<style scoped>
.stats-section {
  background-image: url('https://cdn.pixabay.com/photo/2017/01/14/10/56/people-1979261_1280.jpg');
  background-size: cover;
  background-position: center;
  clip-path: polygon(15% 0%, 100% 0%, 100% 100%, 0% 100%);
  min-height: 100vh;
}
.btn-outline-primary {
  color: #0d6efd;
  border-color: #0d6efd;
}

.btn-outline-primary:hover,
.reset
 {
  color: #fff !important;
}



</style>
