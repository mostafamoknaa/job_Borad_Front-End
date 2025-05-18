<template>
    <div class="page-wrapper d-flex align-items-start justify-content-center pt-5">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-10">
            <SmallNav />
  
            <div class="row justify-content-center mt-5">
              <div class="d-flex align-items-center justify-content-between mb-4">
                <span class="fw-bold">Contact Us</span>
                <div class="progress custom-progress">
                  <div class="progress-bar" role="progressbar" style="width: 90%;" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
  
              
              <div v-if="errorMessage" class="alert alert-danger" role="alert">
                {{ errorMessage }}
              </div>
  
              <div class="settings-page">
                <section class="form-section">
                  <h2 class="section-title mb-4">Contact Info</h2>
  
                  <div class="form-group mb-3">
                    <label>Map Location</label>
                    <input type="text" v-model="user.mapLocation" placeholder="Map location" class="form-control" />
                  </div>
  
                  <div class="form-group mb-3">
                    <label>Phone Number</label>
                    <div class="d-flex gap-2">
                      <select v-model="selectedPrefix" class="form-select" style="max-width: 150px;">
                        <option value="+1">+1 (USA)</option>
                        <option value="+44">+44 (UK)</option>
                        <option value="+966">+966 (Saudi Arabia)</option>
                        <option value="+20">+20 (Egypt)</option>
                        <option value="+91">+91 (India)</option>
                      </select>
  
                      <input 
                        type="text"
                        v-model="phoneNumber"
                        placeholder="Phone number"
                        class="form-control"
                      />
                    </div>
                  </div>
  
                  <button class="btn btn-primary w-25 mt-4" type="button" @click="saveChanges">
                    Save Changes
                  </button>
  
                </section>
              </div>
  
            </div>
          </div>
        </div>
      </div>
    </div>                  
  </template>
  
  <script>
  import SmallNav from './SmallNav.vue'
  import axios from 'axios';
  import interceptor from '../../Interceptor/getaxiox'
  export default {
    name: 'ContactInfo',
    components: {
      SmallNav,
    },
    data() {
      return {
        user: {
          mapLocation: '',
          phoneNumber: '',
        },
        selectedPrefix: '+1',
        phoneNumber: '',
        errorMessage: '',
      };
    },
    methods: {
      saveChanges() {
 
  if (!this.user.mapLocation.trim()) {
    this.errorMessage = 'Please enter the map location.';
    return;
  }

  if (!this.phoneNumber.trim() || !/^\d+$/.test(this.phoneNumber)) {
    this.errorMessage = 'Please enter a valid phone number (numbers only).';
    return;
  }

  
  this.user.phoneNumber = `${this.selectedPrefix}${this.phoneNumber}`;
  this.errorMessage = ''; 
  const formData = new FormData();
  formData.append('address', this.user.mapLocation);
  formData.append('phone_number', this.user.phoneNumber);  

  const com_id = localStorage.getItem('employer_id');
  
  interceptor.put(`/users/${com_id}`, formData)
  .then(response => {
      this.$router.push('/employeer/myprofile');
  })
  .catch(error => {
    this.errorMessage = error.response?.data?.message || 'Failed to save changes. Please try again.';
  });
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
    padding-bottom: 50px;
  }
  
  .form-group label {
    margin-bottom: 5px;
    font-weight: 600;
  }
  
  .section-title {
    font-size: 1.5rem;
    font-weight: bold;
  }
  </style>
  