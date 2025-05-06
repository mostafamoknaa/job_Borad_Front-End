<template>
    <div class="page-wrapper d-flex align-items-start justify-content-center pt-5">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-10">
            <SmallNav />
  
            <div class="row justify-content-center mt-5">
              <div class="d-flex align-items-center justify-content-between mb-4">
                <span class="fw-bold">Logo and Banner image</span>
                <div class="progress custom-progress">
                  <div class="progress-bar" role="progressbar" style="width: 50%;" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
  
              <!-- Bootstrap Alert -->
              <div v-if="errorMessage" class="alert alert-danger" role="alert">
                {{ errorMessage }}
              </div>
  
              <div class="col-md-4 mb-3">
                <label class="form-label">Nationality</label>
                <select v-model="form.nationality" class="form-select">
                  <option disabled value="">Select...</option>
                  <option>Egypt</option>
                  <option>USA</option>
                  <option>Germany</option>
                </select>
              </div> 
  
              <div class="col-md-4 mb-3">
                <label class="form-label">Industry Type</label>
                <select v-model="form.type" class="form-select">
                  <option disabled value="">Select...</option>
                  <option>Technology</option>
                  <option>Healthcare</option>
                  <option>Finance</option>
                </select>
              </div> 
  
              <div class="col-md-4 mb-3">
                <label class="form-label">Team Size</label>
                <select v-model="form.team" class="form-select">
                  <option disabled value="">Select...</option>
                  <option>1-10</option>
                  <option>11-50</option>
                  <option>51-200</option>
                </select>
              </div> 
  
              <div class="col-md-6 mb-3">
                <label class="form-label">Date of Birth</label>
                <input v-model="form.dob" type="date" class="form-control">
              </div>
  
              <div class="col-md-6 mb-3">
                <label class="form-label">Company Website</label>
                <input v-model="form.website" type="text" class="form-control" placeholder="https://example.com">
              </div>
  
              <div class="col-md-12 mb-3">
                <label class="form-label">Company Vision</label>
                <textarea v-model="form.biography" class="form-control" rows="5" placeholder="Describe your vision..."></textarea>
              </div>
  
              <div class="col-md-6 mb-3 d-flex">
                <button type="button" class="btn btn-outline-secondary me-3" @click="goPrevious">Previous</button>
                <button type="button" class="btn btn-primary" @click="submitForm">Next <i class="fa-solid fa-arrow-right ms-2"></i></button>
              </div>
  
            </div>
          </div>
        </div>
      </div>
    </div>             
  </template>
  
  <script>
  import SmallNav from './SmallNav.vue'
  
  export default {
    name: 'PersonalAccount2',
    components: {
      SmallNav,
    },
    data() {
      return {
        form: {
          nationality: '',
          dob: '',
          gender: '',
          maritalStatus: '',
          education: '',
          website: '',
          biography: '',
          type: '',
          team: '',
        },
        errorMessage: '', // Bootstrap error message
      }
    },
    methods: {
      submitForm() {
        // Form Validation
        if (!this.form.nationality || !this.form.type || !this.form.team || !this.form.dob || !this.form.website.trim() || !this.form.biography.trim()) {
          this.errorMessage = 'Please fill in all fields before proceeding.';
          return;
        }
  
        if (!this.isValidURL(this.form.website)) {
          this.errorMessage = 'Please enter a valid website URL.';
          return;
        }
  
        if (this.form.biography.length < 10) {
          this.errorMessage = 'Company Vision must be at least 10 characters.';
          return;
        }
  
        // If all good
        this.errorMessage = '';
        this.$router.push('/employeer/Social');
      },
      isValidURL(str) {
        const pattern = new RegExp('^(https?:\\/\\/)?'+ 
          '((([a-z\\d]([a-z\\d-]*[a-z\\d])*))\\.)+([a-z]{2,})'+ 
          '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ 
          '(\\?[;&a-z\\d%_.~+=-]*)?'+ 
          '(\\#[-a-z\\d_]*)?$','i'); 
        return !!pattern.test(str);
      },
      goPrevious() {
        this.$router.back();
      }
    }
  }
  </script>
  
  <style scoped>
  .custom-progress {
    width: 200px; 
    height: 8px;
    background-color: #e0e0e0;
    border-radius: 50px;
    overflow: hidden;
  }
  
  .custom-progress .progress-bar {
    background-color: #0d6efd;
    height: 100%;
    transition: width 0.4s ease;
  }
  
  .page-wrapper {
    min-height: 100vh;
    background: #f8f9fa;
  }
  
  .container {
    max-width: 1100px;
  }
  </style>
  