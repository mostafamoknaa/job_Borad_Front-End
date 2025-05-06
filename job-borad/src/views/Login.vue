<template>
    <div class="container mt-5">
      <div class="row justify-content-center">
        <div class="col-md-6 col-lg-4">
          <div class="card shadow">
            <div class="card-body p-4">
              <h2 class="text-center mb-4">Sign in</h2>
              
              <div class="text-center mb-4">
                <p class="mb-0">Don't have account</p>
                <button class="btn btn-link p-0 fw-bold">Create Account</button>
              </div>
              
              <form @submit.prevent="handleLogin">
                <div class="mb-3">
                  <label for="email" class="form-label">Email address</label>
                  <input type="email" class="form-control" id="email" v-model="email" required>
                </div>
                
                <div class="mb-3">
                  <label for="password" class="form-label">Password</label>
                  <input type="password" class="form-control" id="password" v-model="password" required>
                </div>
                
                <div class="mb-3 form-check">
                  <input type="checkbox" class="form-check-input" id="remember" v-model="rememberMe">
                  <label class="form-check-label" for="remember">Remember Me</label>
                </div>
                
                <hr class="my-4">
                
                <button type="submit" class="btn btn-primary w-100 mb-3">Sign in →</button>
                
                <div class="text-center mb-3">or</div>
                
                <div class="d-grid gap-2">
                  <button type="button" class="btn btn-outline-primary">
                    <i class="bi bi-facebook me-2"></i> Sign in with Facebook
                  </button>
                  <button type="button" class="btn btn-outline-danger">
                    <i class="bi bi-google me-2"></i> Sign in with Google
                  </button>
                </div>
              </form>
            </div>
          </div>
          
          <div class="text-center mt-4">
            <p>Over 1,75,324 candidates waiting for good employees.</p>
          </div>
          
          <div class="row text-center mt-4">
            <div class="col-6 col-md-3 mb-3">
              <div class="p-3 border rounded">
                <h5>Line Job</h5>
                <p class="fw-bold mb-0">1,75,324</p>
              </div>
            </div>
            <div class="col-6 col-md-3 mb-3">
              <div class="p-3 border rounded">
                <h5>Live Job</h5>
                <p class="fw-bold mb-0">97,354</p>
              </div>
            </div>
            <div class="col-6 col-md-3 mb-3">
              <div class="p-3 border rounded">
                <h5>Campones</h5>
                <p class="fw-bold mb-0">7,532</p>
              </div>
            </div>
            <div class="col-6 col-md-3 mb-3">
              <div class="p-3 border rounded">
                <h5>New Jobs</h5>
                <p class="fw-bold mb-0">5,321</p>
              </div>
            </div>
          </div>
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
        rememberMe: false
      }
    },
    methods: {
      handleLogin() {
        console.log('Logging in with:', {
          email: this.email,
          password: this.password,
          rememberMe: this.rememberMe
        })
      }
    }
  }
  </script>
  
  <style scoped>
  .card {
    border-radius: 10px;
  }
  .btn-outline-primary {
    color: #0d6efd;
    border-color: #0d6efd;
  }
  .btn-outline-danger {
    color: #dc3545;
    border-color: #dc3545;
  }
  </style>