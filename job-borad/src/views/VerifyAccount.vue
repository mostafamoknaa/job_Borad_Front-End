<template>
    <div class="container mt-5">
      <div class="row justify-content-center">
        <div class="col-md-6 col-lg-4">
         
              <h1 class="mb-4 text-center">Email Verification</h1>
        
              <input type="text" v-model="user_id"  placeholder="Verification Code" class="form-control text-center mb-3" />

              <button 
                class="btn btn-primary w-100 py-2 mb-3" 
                @click="verifyAccount"
                :disabled="!isCodeComplete"
              >
                Verify My Account→
              </button>
              
              <p class="text-muted mb-0 text-center">
                Didn't receive any code! <a href="#" @click.prevent="resendCode">Resend</a>
              </p>
            </div>
          </div>

    </div>
  </template>
  
  <script>
  export default {
    name: 'EmailVerification',
    data() {
      return {
        digits: ['', '', '', '', '', ''], 
        email: 'emailadvertising@mail.com'
      }
    },
    computed: {
      isCodeComplete() {
        return this.digits.every(digit => digit !== '');
      }
    },
    methods: {
      moveToNext(index, event) {
        if (event.target.value && index < this.digits.length - 1) {
          this.$refs.digitInputs[index + 1].focus();
        }
      },
      moveToPrevious(index, event) {
        if (event.key === 'Backspace' && !event.target.value && index > 0) {
          this.$refs.digitInputs[index - 1].focus();
        }
      },
      verifyAccount() {
        const verificationCode = this.digits.join('');
        console.log('Verifying account with code:', verificationCode);
      
      },
      resendCode() {
        console.log('Resending verification code to:', this.email);
        
       
      }
    },
    mounted() {
      
      if (this.$refs.digitInputs && this.$refs.digitInputs[0]) {
        this.$refs.digitInputs[0].focus();
      }
    }
  }
  </script>
  
  <style scoped>
  .card {
    border-radius: 10px;
  }

  </style>