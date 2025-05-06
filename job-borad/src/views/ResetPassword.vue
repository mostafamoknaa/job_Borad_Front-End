<template>
    <div class="container mt-5">
      <div class="row justify-content-center">
        <div class="col-md-6 col-lg-4">
          <div class="card shadow">
            <div class="card-body p-4">
              <h1 class="text-center mb-4">Reset Password</h1>
              
              <p class="text-center text-muted mb-4">
                Data lectus interdum metus, ut connectetur ante connectetur sed.<br>
                Sespendisse euismod viverra massa sit amet rostitis.
              </p>
              
              <hr class="my-4">
              
              <form @submit.prevent="handleResetPassword">
                <div class="mb-4">
                  <label for="newPassword" class="form-label">New Password</label>
                  <div class="input-group">
                    <input :type="showNewPassword ? 'text' : 'password'" 
                           class="form-control" 
                           id="newPassword" 
                           v-model="newPassword" 
                           required>
                    <button class="btn btn-outline-secondary" 
                            type="button" 
                            @click="showNewPassword = !showNewPassword">
                      <i class="bi" :class="showNewPassword ? 'bi-eye-slash' : 'bi-eye'"></i>
                    </button>
                  </div>
                </div>
                
                <div class="mb-4">
                  <label for="confirmPassword" class="form-label">Confirm Password</label>
                  <div class="input-group">
                    <input :type="showConfirmPassword ? 'text' : 'password'" 
                           class="form-control" 
                           id="confirmPassword" 
                           v-model="confirmPassword" 
                           required>
                    <button class="btn btn-outline-secondary" 
                            type="button" 
                            @click="showConfirmPassword = !showConfirmPassword">
                      <i class="bi" :class="showConfirmPassword ? 'bi-eye-slash' : 'bi-eye'"></i>
                    </button>
                  </div>
                </div>
                
                <button type="submit" class="btn btn-primary w-100 py-2 fw-bold">Reset Password</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ResetPassword',
    data() {
      return {
        newPassword: '',
        confirmPassword: '',
        showNewPassword: false,
        showConfirmPassword: false
      }
    },
    methods: {
      handleResetPassword() {
        if (this.newPassword !== this.confirmPassword) {
          alert('Passwords do not match!');
          return;
        }
        
        console.log('Resetting password with:', {
          newPassword: this.newPassword
        });
        
      }
    }
  }
  </script>
  
  <style scoped>
  .card {
    border-radius: 10px;
  }
  .input-group-text {
    cursor: pointer;
  }
  </style>