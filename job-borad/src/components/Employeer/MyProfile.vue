<template>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <MainNavbar />
        </div>
        <div class="col-md-4">
          <EmpSidebar />
        </div>
        <div class="col-md-8">    
          <div class="card mb-4">
            <div class="card-body p-0">
  
              <div class="position-relative">
               
                <img src="https://i.ytimg.com/vi/pJkF7TSfKTE/maxresdefault.jpg" alt="Company Cover" class="w-100" style="max-height: 200px; object-fit: cover;">
  
                
                <div class="position-absolute" style="bottom: -40px; left: 30px;">
                  <div class="bg-light rounded p-2" style="width: 80px; height: 80px;">
                    <img :src="`http://localhost:8000/storage/${emp.company_logo}`" alt="Company Logo" class="img-fluid rounded" v-if="emp.company_logo">
                  </div>
                </div>
              </div>
  
              <div class="pt-5 px-4 pb-3">
                <div class="d-flex justify-content-between align-items-start">
                  <div>
                    <h4 class="mb-1">{{ emp.company_name }}</h4>
                    <p class="text-muted mb-0">{{ emp.industry }}</p>
                  </div>
                  <router-link to="/jobs" class="btn btn-primary d-flex align-items-center">
                    View Open Position
                    <i class="bi bi-arrow-right ms-2"></i>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
  
          <div class="row">
            <div class="col-lg-7">
  
              
              <div class="card mb-4">
                <div class="card-body">
                  <h5 class="card-title mb-3">Description</h5>
                  <p>{{ emp.company_description }}</p>
                </div>
              </div>
  
             
              <div class="card mb-4">
                <div class="card-body">
                  <h5 class="card-title mb-3">Company Benefits</h5>
                  <p>We offer various benefits to our employees!</p>
                  <ul>
                    <li>Flexible Working Hours</li>
                    <li>Health Insurance</li>
                    <li>Professional Development</li>
                    <li>Work From Home Options</li>
                    <li>Performance Bonuses</li>
                  </ul>
                </div>
              </div>
  
              <!-- Company Vision -->
              <div class="card mb-4">
                <div class="card-body">
                  <h5 class="card-title mb-3">Company Vision</h5>
                  <p>To be a leader in {{ emp.industry }} industry and deliver innovative solutions worldwide.</p>
                </div>
              </div>
  
            </div>
  
            <div class="col-lg-5">
  
              <!-- About Company -->
              <div class="card mb-4">
                <div class="card-body">
                  <div class="d-flex align-items-center mb-3">
                    <div class="bg-light rounded-circle p-3 me-3">
                      <i class="bi bi-people text-primary"></i>
                    </div>
                    <div>
                      <h6 class="text-muted mb-1 small">TEAM SIZE</h6>
                      <p class="mb-0 fw-medium">{{ emp.company_size }}</p>
                    </div>
                  </div>
  
                  <div class="d-flex align-items-center mb-3">
                    <div class="bg-light rounded-circle p-3 me-3">
                      <i class="bi bi-cpu text-primary"></i>
                    </div>
                    <div>
                      <h6 class="text-muted mb-1 small">INDUSTRY TYPE</h6>
                      <p class="mb-0 fw-medium">{{ emp.industry }}</p>
                    </div>
                  </div>
                </div>
              </div>
  
              <!-- Contact Information -->
              <div class="card mb-4">
                <div class="card-body">
                  <h5 class="card-title mb-4">Contact Information</h5>
  
                  <div class="d-flex align-items-center mb-3" v-if="emp.website">
                    <div class="bg-light rounded-circle p-2 me-3">
                      <i class="bi bi-globe text-primary"></i>
                    </div>
                    <div>
                      <h6 class="text-muted mb-1 small">WEBSITE</h6>
                      <a :href="emp.website" target="_blank" class="text-decoration-none">{{ emp.website }}</a>
                    </div>
                  </div>
  
                  <div class="d-flex align-items-center mb-3" v-if="emp.user && emp.user.email">
                    <div class="bg-light rounded-circle p-2 me-3">
                      <i class="bi bi-envelope text-primary"></i>
                    </div>
                    <div>
                      <h6 class="text-muted mb-1 small">EMAIL ADDRESS</h6>
                      <p class="mb-0">{{ emp.user.email }}</p>
                    </div>
                  </div>
  
                </div>
              </div>
  
              <!-- Share Profile -->
              <div class="card mb-4">
                <div class="card-body">
                  <h5 class="card-title mb-3">Share profile</h5>
                  <div class="d-flex gap-2">
                    <a href="#" class="btn btn-outline-primary">
                      <i class="bi bi-facebook me-2"></i> Facebook
                    </a>
                    <a href="#" class="btn btn-outline-info">
                      <i class="bi bi-twitter me-2"></i> Twitter
                    </a>
                  </div>
                </div>
              </div>
  
            </div>
  
          </div>
        </div>
      </div>     
    </div>
  </template>
  
  
  <script>
import EmpSidebar from './EmpSidebar.vue'
import MainNavbar from './MainNavbar.vue'
import axios from 'axios';

export default {
  name: 'EmployerProfile',
  components: {
    EmpSidebar,
    MainNavbar
  },
  data() {
    return {
      emp: {}, // Initialize emp as an empty object
    }
  },
  mounted() {
    this.getData();
  },
  methods: {
    async getData() {
      try {
        const emp_id = localStorage.getItem('employer_id');
        const response = await axios.get(`http://localhost:8000/api/employers/${emp_id}`);
        this.emp = response.data;
        console.log(this.emp.company_logo);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },
  }
}
</script>

  
  <style scoped>
  .card {
    border-radius: 8px;
    border: 1px solid rgba(0, 0, 0, 0.125);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  }
  
  .rounded-circle {
    border-radius: 50%;
  }
  
  .btn-primary {
    background-color: #0d6efd;
    border-color: #0d6efd;
  }
  
  .text-primary {
    color: #0d6efd !important;
  }
  
  .bg-light {
    background-color: #f8f9fa;
  }
  </style>