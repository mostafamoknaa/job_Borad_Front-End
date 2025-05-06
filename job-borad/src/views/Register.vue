<template>
  <div class="container-fluid min-vh-100 p-2 d-flex m-5" style="color: #1c2ca4;">
    <!-- Left section -->
    <div class="col-md-6 d-flex align-items-center justify-content-center bg-white p-4">
      <div class="w-100" style="max-width: 400px;">
        <h2 class="mb-3 fw-bold " >Create account.</h2>
        <p >
          Already have account? <router-link to="/login" class="text-primary">Log In</router-link>
        </p>

        <!-- Toggle buttons -->
        <div class="text-center mb-3" style="background-color: #f5f7f9; color: #6c757d;">
  <p class="mb-2 fw-semibold text-uppercase small" >Create account as a</p>
  <div class="d-flex justify-content-center">
    <div class="btn-group" role="group" style="border: 1px solid #dee2e6; border-radius: 8px; overflow: hidden;">
      <button
        type="button"
        class="btn"
        :style="accountType === 'candidate' 
          ? 'background-color: #0a1f44; color: #fff;' 
          : 'background-color: #f5f7f9; color: #6c757d;'"
        @click="accountType = 'candidate'"
        style="display: flex; align-items: center; gap: 8px; padding: 8px 16px; border: none;"
      >
        <i class="far fa-user-circle"></i> Candidate
      </button>
      <button
        type="button"
        class="btn"
        :style="accountType === 'employer' 
          ? 'background-color: #0a1f44; color: #fff;' 
          : 'background-color: #f5f7f9; color: #6c757d;'"
        @click="accountType = 'employer'"
        style="display: flex; align-items: center; gap: 8px; padding: 8px 16px; border: none;"
      >
        <i class="far fa-building"></i> Employers
      </button>
    </div>
  </div>
</div>



        <!-- Registration form -->
        <form @submit.prevent="handleRegister">
          <div class="mb-3 row">
           <div class="col-6">
            <input v-model="fullName" type="text" class="form-control" placeholder="Full Name" required />
           </div>
           <div class="col-6">
            <input v-model="fullName" type="text" class="form-control" placeholder="Username" required />
           </div>
          </div>
          <div class="mb-3">
            <input v-model="username" type="text" class="form-control" placeholder="Username" required />
          </div>
          <div class="mb-3">
            <input v-model="email" type="email" class="form-control" placeholder="Email address" required />
          </div>
          <div class="mb-3">
            <input v-model="password" type="password" class="form-control" placeholder="Password" required />
          </div>
          <div class="mb-3">
            <input v-model="confirmPassword" type="password" class="form-control" placeholder="Confirm Password" required />
          </div>
          <div class="form-check mb-3">
            <input v-model="termsAccepted" type="checkbox" class="form-check-input" id="terms" required />
            <label class="form-check-label" for="terms">
              I've read and agree with your <a href="#">Terms of Services</a>
            </label>
          </div>
          <button type="submit" class="btn btn-primary w-100 mb-3">Create Account</button>
        </form>

        <!-- Social sign-up -->
        <div class="text-center">OR</div>
        <!-- <div class="d-flex justify-content-center mt-3">
          <button class="btn btn-outline-primary me-2">
            <i class="fab fa-facebook"></i> Sign up with Facebook
          </button>
          <button class="btn btn-outline-danger">
            <i class="fab fa-google"></i> Sign up with Google
          </button>
        </div> -->
<div class="row">
  <div class="d-flex justify-content-center col-6" style="border: #6c757d;">
    <a >
      <i class="fab fa-facebook"></i> 
    </a>Sign up with Facebook
  </div>
  <div class="d-flex justify-content-center col-6" >
    <a >
       <i class="fab fa-google"></i> Sign up with Google
    </a>
  </div>
</div>
       

       
      </div>
    </div>

    <!-- Right section -->
    
      <div  id="img" class="col-md-6 d-none d-md-flex flex-column justify-content-center align-items-center text-white p-4"
      style="background-image: url('https://cdn.pixabay.com/photo/2017/01/14/10/56/people-1979261_1280.jpg'); background-size: cover;">
      <!-- <h3 class="fw-bold mb-3  text-center">Over 1,75,324 candidates waiting for good employees.</h3>
      <div class="d-flex justify-content-around w-75">
        <div class="text-center">
          <i class="far fa-briefcase fa-lg" style="color: #fcfcfd;"></i>
          <h4>1,75,324</h4>
          <p>Live Jobs</p>
        </div>
        <div class="text-center">
          <i class="far fa-building fa-lg" style="color: #f5f7f9;"></i>
          <h4>97,354</h4>
          <p>Companies</p>
        </div>
        <div class="text-center">
          <i class="far fa-briefcase fa-lg" style="color: #fcfcfd;"></i>
          <h4>7,532</h4>
          <p>New Jobs</p>
        </div>
      </div> -->
    </div>

    </div>
  
  
</template>

<script>
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
    };
  },
  methods: {
    handleRegister() {
      if (this.password !== this.confirmPassword) {
        alert('Passwords do not match');
        return;
      }
      if (!this.termsAccepted) {
        alert('Please accept the Terms of Services');
        return;
      }
      console.log('Account created:', {
        accountType: this.accountType,
        fullName: this.fullName,
        username: this.username,
        email: this.email,
      });
      // Add your API call here
    },
  },
};
</script>

<style scoped>
/* .btn-outline-primary {
  border-color:  #1c2ca4;
  color:  #1c2ca4;
} */
.btn-outline-primary:hover {
  background-color:  #1c2ca4;
  color: white;
}
#img{
  clip-path: polygon(15% 0%,100% 0%,100% 100%,0% 100%);
  margin:5px;
  
}
</style>
