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
          <form class="needs-validation container my-5" @submit.prevent="handleSubmit" novalidate>
            <h2>Post a Job</h2>
  
            <div class="row mb-3">
              <div class="col-md-12">
                <label for="jobTitle" class="form-label">Job Title</label>
                <input type="text" id="jobTitle" v-model="form.jobTitle" class="form-control" :class="{ 'is-invalid': submitted && !form.jobTitle }" required>
                <div class="invalid-feedback">Job title is required.</div>
              </div>
            </div>
  
            <div class="mb-3">
              <div class="row">
                <div class="col-md-8">
                  <label for="tags" class="form-label">Tags</label>
                  <input type="text" id="tags" v-model="form.tags" class="form-control" :class="{ 'is-invalid': submitted && !form.tags }" required>
                  <div class="invalid-feedback">Tags are required.</div>
                </div>
  
                <div class="col-md-4">
                  <label for="jobRole" class="form-label">Job Role</label>
                  <select id="jobRole" v-model="form.jobRole" class="form-select" :class="{ 'is-invalid': submitted && !form.jobRole }" required>
                    <option value="" disabled>Select a role</option>
                    <option>Frontend Developer</option>
                    <option>Backend Developer</option>
                    <option>Full Stack Developer</option>
                  </select>
                  <div class="invalid-feedback">Job role is required.</div>
                </div>
              </div>
            </div>
  
            <div class="row mb-3">
              <div class="col-md-4">
                <label for="minSalary" class="form-label">Min Salary</label>
                <input type="number" id="minSalary" v-model="form.minSalary" class="form-control">
                <div class="invalid-feedback">Min Salary is required.</div>
              </div>
  
              <div class="col-md-4">
                <label for="maxSalary" class="form-label">Max Salary</label>
                <input type="number" id="maxSalary" v-model="form.maxSalary" class="form-control">
                <div class="invalid-feedback">Max Salary is required.</div>
              </div>
  
              <div class="col-md-4">
                <label for="salaryType" class="form-label">Salary Type</label>
                <select id="salaryType" v-model="form.salaryType" class="form-select">
                  <option value="" disabled>Select type</option>
                  <option>Hourly</option>
                  <option>Monthly</option>
                  <option>Yearly</option>
                </select>
                <div class="invalid-feedback">Min Salary is required.</div>
              </div>
            </div>
  
            <div class="row mb-3">
              <div class="col-md-4">
                <label for="education" class="form-label">Education</label>
                <select id="education" v-model="form.education" class="form-select" :class="{ 'is-invalid': submitted && !form.education }" required>
                  <option value="" disabled>Select education</option>
                  <option>Bachelor's</option>
                  <option>Master's</option>
                  <option>PhD</option>
                </select>
                <div class="invalid-feedback">Education is required.</div>
              </div>
  
              <div class="col-md-4">
                <label for="experience" class="form-label">Experience</label>
                <select id="experience" v-model="form.experience" class="form-select">
                  <option>Entry Level</option>
                  <option>Mid Level</option>
                  <option>Senior Level</option>
                </select>
                <div class="invalid-feedback">Experience is required.</div>
              </div>
  
              <div class="col-md-4">
                <label for="jobType" class="form-label">Job Type</label>
                <select id="jobType" v-model="form.jobType" class="form-select">
                  <option>Full Time</option>
                  <option>Part Time</option>
                  <option>Contract</option>
                </select>
                <div class="invalid-feedback">Job Type is required.</div>
              </div>
            </div>
  
            <div class="mb-3">
              <h5>Location</h5>
              <div class="row">
                <div class="col-md-6">
                  <label for="country" class="form-label">Country</label>
                  <select id="country" v-model="form.country" class="form-select">
                    <option>USA</option>
                    <option>UK</option>
                    <option>Germany</option>
                  </select>
                  <div class="invalid-feedback">Country Salary is required.</div>
                </div>
  
                <div class="col-md-6">
                  <label for="city" class="form-label">City</label>
                  <select id="city" v-model="form.city" class="form-select">
                    <option>New York</option>
                    <option>London</option>
                    <option>Berlin</option>
                  </select>
                  <div class="invalid-feedback">City is required.</div>
                </div>
              </div>
  
              <div class="form-check mt-2">
                <input type="checkbox" id="remote" v-model="form.remote" class="form-check-input">
                <label for="remote" class="form-check-label">Fully Remote Position - Worldwide</label>
              </div>
            </div>
  
            <div class="mb-3">
              <h5>Job Benefits</h5>
              <span class="badge bg-primary">401k Salary</span>
              <span class="badge bg-secondary">Distributed Team</span>
              <span class="badge bg-info text-dark">Async</span>
              <span class="badge bg-success">Vision Insurance</span>
            </div>
  
            <div class="mb-3">
              <label for="description" class="form-label">Job Description</label>
              <textarea id="description" v-model="form.description" rows="5" class="form-control" :class="{ 'is-invalid': submitted && !form.description }" required></textarea>
              <div class="invalid-feedback">Description is required.</div>
            </div>
  
            <button type="submit" class="btn btn-primary">Post Job</button>
          </form>
          <div class="modal fade show" tabindex="-1" style="display: block; background-color: rgba(0, 0, 0, 0.5);" v-if="showSuccessModal">
            <div class="modal-dialog modal-dialog-centered">
              <div class="modal-content rounded-4 p-4 text-center">
                <h4 class="mb-3">🎉 Congratulations!</h4>
                <p>Your job was posted successfully.</p>
                <button class="btn btn-primary mt-2" @click="closeModal">Close</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
import { ref } from 'vue'
import EmpSidebar from './EmpSidebar.vue'
import MainNavbar from './MainNavbar.vue'

export default {
  components: { EmpSidebar, MainNavbar },
  setup() {
    const submitted = ref(false)
    const showSuccessModal = ref(false) // <-- You forgot this
    const form = ref({
      jobTitle: '',
      tags: '',
      jobRole: '',
      minSalary: '',
      maxSalary: '',
      salaryType: '',
      education: '',
      experience: '',
      jobType: '',
      country: '',
      city: '',
      remote: false,
      description: ''
    })

    const handleSubmit = () => {
      submitted.value = true
      const requiredFields = [
        form.value.jobTitle,
        form.value.tags,
        form.value.jobRole,
        form.value.education,
        form.value.experience,
        form.value.jobType,
        form.value.country,
        form.value.city,
        form.value.salaryType,
        form.value.minSalary,
        form.value.maxSalary,
        form.value.description
      ]

      const allFieldsFilled = requiredFields.every(field => field !== '' && field !== null)

      if (allFieldsFilled) {
        showSuccessModal.value = true
      }
    }

    const closeModal = () => {
      showSuccessModal.value = false
    }

    return { form, submitted, handleSubmit, showSuccessModal, closeModal }
  }
}
</script>

  