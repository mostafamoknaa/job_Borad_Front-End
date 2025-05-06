<template>
    <div class="container mt-5">
      <div class="row justify-content-center">
        <div class="col-md-6 col-lg-4">
          <div class="card shadow">
            <div class="card-body p-4 text-center">
              <h1 class="mb-4">Email Verification</h1>
              
              <p class="mb-4">
                We've sent a verification to <strong>emailadvertising@mail.com</strong> 
                to verify your email address and activate your account.
              </p>
              
              <div class="mb-4">
                <label for="verificationCode" class="form-label">Verification Code</label>
                <div class="d-flex justify-content-center">
                  <input 
                    v-for="(digit, index) in digits" 
                    :key="index"
                    type="text" 
                    maxlength="1"
                    class="form-control verification-digit mx-1 text-center" 
                    v-model="digits[index]"
                    @input="moveToNext(index, $event)"
                    @keydown.delete="moveToPrevious(index, $event)"
                    ref="digitInputs"
                  >
                </div>
              </div>
              
              <button 
                class="btn btn-primary w-100 py-2 mb-3" 
                @click="verifyAccount"
                :disabled="!isCodeComplete"
              >
                Verify My Account
              </button>
              
              <p class="text-muted mb-0">
                Didn't receive any code! <a href="#" @click.prevent="resendCode">Resend</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'EmailVerification',
    data() {
      return {
        digits: ['', '', '', '', '', ''], // كود مكون من 6 أرقام
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
        // هنا يمكنك إضافة الاتصال بالخادم للتحقق من الكود
      },
      resendCode() {
        console.log('Resending verification code to:', this.email);
        // هنا يمكنك إضافة الاتصال بالخادم لإعادة إرسال الكود
        alert('Verification code has been resent to your email!');
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
  .verification-digit {
    width: 40px;
    height: 50px;
    font-size: 1.2rem;
  }
  </style>