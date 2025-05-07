<template>
  <div class="container-fluid min-vh-100 p-0">
    <div class="row g-0">
      <!-- Left side (form) -->
      <div class="col-12 col-md-6 d-flex align-items-center justify-content-center bg-white p-4">
        <div class="w-100" style="max-width: 400px;">
          <div class="text-center mb-4">
            <h2 class="fw-bold mb-2">Sign in</h2>
            <p>
              Don't have account?
              <router-link to="/register" class="text-primary fw-semibold">Create Account</router-link>
            </p>
          </div>

          <form @submit.prevent="handleLogin" novalidate :class="{ 'was-validated': wasValidated }">
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
            <div class="mb-3">
              <input
                type="password"
                class="form-control"
                placeholder="Password"
                v-model="password"
                required
                :class="{ 'is-invalid': wasValidated && !password }"
              />
              <div class="invalid-feedback">Password is required.</div>
            </div>
            <div class="form-check mb-3">
              <input type="checkbox" class="form-check-input" id="remember" v-model="rememberMe" />
              <label class="form-check-label" for="remember">Remember Me</label>
              <router-link to="/forgot-password" class="float-end text-primary">Forgot password</router-link>
            </div>
            <button type="submit" class="btn btn-primary w-100 mb-3">
              <router-link to="/candidatedashbord" class="text-white text-center no-underline " >   Sign In →</router-link>
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
  name: 'LoginPage',
  data() {
    return {
      email: '',
      password: '',
      rememberMe: false,
      wasValidated: false,
    };
  },
  methods: {
    handleLogin() {
      this.wasValidated = true;
      if (!this.email || !this.password) {
        return;
      }
      console.log('Logging in with:', {
        email: this.email,
        password: this.password,
        rememberMe: this.rememberMe,
      });
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

</style>
