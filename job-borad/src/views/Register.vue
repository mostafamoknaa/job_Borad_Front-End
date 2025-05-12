<template>
  <div class="container-fluid min-vh-100 p-2 d-flex flex-wrap" style="color: #1c2ca4;">
    <!-- Left section -->
    <div class="col-12 col-md-6 d-flex align-items-center justify-content-center bg-white p-4">
      <div class="w-100 form-container">
        <h2 class="mb-3 fw-bold">Create account.</h2>
        <p>
          Already have account? <router-link to="/employeer/login" class="text-primary">Log In</router-link>
        </p>

        <div v-if="errorMessage" class="alert alert-danger" role="alert">
          {{ errorMessage }}
        </div>
        <div class="text-center mb-3 bg-light text-secondary p-2 rounded">
          <p class="mb-2 fw-semibold text-uppercase small">Create account as a</p>
          <div class="d-flex justify-content-center">
            <div class="btn-group" role="group">
              <button
                type="button"
                class="btn"
                :class="{ 'btn-primary text-white': accountType === 'candidate', 'btn-light text-secondary': accountType !== 'candidate' }"
                @click="accountType = 'candidate'"
              >
                <i class="far fa-user-circle"></i> Candidate
              </button>
              <button
                type="button"
                class="btn"
                :class="{ 'btn-primary text-white': accountType === 'employer', 'btn-light text-secondary': accountType !== 'employer' }"
                @click="accountType = 'employer'"
              >
                <i class="far fa-building"></i> Employers
              </button>
            </div>
          </div>
        </div>

        
        <form @submit.prevent="handleRegister" novalidate :class="{ 'was-validated': wasValidated }">
          <div class="mb-3 row">
            <div class="mb-3">
              <input v-model="fullName" type="text" class="form-control" placeholder="Full Name" required :class="{ 'is-invalid': wasValidated && !fullName }" />
              <div class="invalid-feedback">Full name is required.</div>
            </div>
          </div>
          <div class="mb-3">
            <input v-model="email" type="email" class="form-control" placeholder="Email address" required :class="{ 'is-invalid': wasValidated && !email }" />
            <div class="invalid-feedback">Valid email is required.</div>
          </div>
          <div class="mb-3">
            <input v-model="password" type="password" class="form-control" placeholder="Password" required :class="{ 'is-invalid': wasValidated && !password }" />
            <div class="invalid-feedback">Password is required.</div>
          </div>
          <div class="mb-3">
            <input
              v-model="confirmPassword"
              type="password"
              class="form-control"
              placeholder="Confirm Password"
              required
              :class="{ 'is-invalid': wasValidated && (!confirmPassword || confirmPassword !== password) }"
            />
            <div class="invalid-feedback">
              {{ !confirmPassword ? 'Confirm password is required.' : 'Passwords do not match.' }}
            </div>
          </div>
          <div class="form-check mb-3">
            <input v-model="termsAccepted" type="checkbox" class="form-check-input" id="terms" required :class="{ 'is-invalid': wasValidated && !termsAccepted }" />
            <label class="form-check-label" for="terms">
              I've read and agree with your <a href="#">Terms of Services</a>
            </label>
            <div class="invalid-feedback">You must accept the terms.</div>
          </div>
          <button type="submit" class="btn btn-primary w-100 mb-3">
            Create Account →
          </button>
          
        </form>

      
        <div class="text-center">OR</div>
        <div class="d-flex justify-content-center gap-2">
          <button class="btn btn-outline-primary flex-fill social-btn" @click="loginWithProvider('facebook')">
            <i class="fab fa-facebook me-2"></i> Sign up with Facebook
          </button>
          <button class="btn btn-outline-primary flex-fill social-btn" @click="loginWithProvider('google')">
            <i class="fab fa-google me-2"></i> Sign up with Google
          </button>
        </div>
      </div>
    </div>


    <div id="img" class="col-md-6 d-none d-md-flex flex-column justify-content-center align-items-center text-white p-4">
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      accountType: 'candidate',
      fullName: '',
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      termsAccepted: false,
      wasValidated: false,
      errorMessage: '',
    };
  },
  methods: {
    loginWithProvider(provider) {
      window.location.href = `http://localhost:8000/auth/${provider}`;
    },
    async handleRegister() {
      this.errorMessage = '';
      this.wasValidated = true;

      if (!this.fullName || !this.email || !this.password || !this.confirmPassword || !this.termsAccepted) {
        return;
      }

      if (this.password !== this.confirmPassword) {
        return;
      }

      const formData = new FormData();
      formData.append('name', this.fullName);
      formData.append('email', this.email);
      formData.append('password', this.password);
      formData.append('role', this.accountType);




      try {
        const response = await axios.post('http://localhost:8000/api/register', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
          if (this.accountType === 'candidate') {
            localStorage.setItem('candidate_token', response.data.token);
            this.$router.push({ name: 'Candidatedashbord' });
          } else {
            localStorage.setItem('employeer_token', response.data.token);
            this.$router.push({ name: 'company' });
          }
      } catch (error) {
        this.errorMessage = 'This Email already in use. Please try again later.';
      }
    },

  } 
}
</script>

<style scoped>
.form-container {
  max-width: 400px;
  width: 100%;
}
#img {
  background-image: url('https://cdn.pixabay.com/photo/2017/01/14/10/56/people-1979261_1280.jpg');
  background-size: cover;
  background-position: center;
  clip-path: polygon(15% 0%, 100% 0%, 100% 100%, 0% 100%);
  min-height: 100vh;
}
.custom-btn {
  background-color: #0a1f44;
  border: none;
  transition: background-color 0.3s ease;
}
.custom-btn:hover,
.social-btn:hover {
  color: white !important;
}
.social-btn {
  border: 1px solid #dee2e6;
  transition: background-color 0.3s ease, color 0.3s ease;
}
/* media query to remove image on small screens */
@media (max-width: 767px) {
  #img {
    display: none;
  }
}
</style>
