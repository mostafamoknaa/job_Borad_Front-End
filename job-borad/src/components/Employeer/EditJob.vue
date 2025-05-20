<template>
    <div class="container my-5">
      <MainNavbar />
      <div class="row">
        <div class="col-md-3">
          <EmpSidebar />
        </div>
        <div class="col-md-9">
          <div class="card shadow-sm p-4">
            <h3 class="mb-4">Edit Job</h3>
            <form @submit.prevent="updateJob">
              <div class="mb-3">
                <label class="form-label">Title</label>
                <input v-model="form.title" class="form-control" required />
              </div>
  
              <div class="mb-3">
                <label class="form-label">Category</label>
                <select v-model="form.category_id" class="form-control" required>
                  <option v-for="cat in categories" :key="cat.id" :value="cat.id">
                    {{ cat.name }}
                  </option>
                </select>
              </div>
  
              <div class="mb-3">
                <label class="form-label">Type</label>
                <input v-model="form.type" class="form-control" required />
              </div>
  
              <div class="mb-3">
                <label class="form-label">Description</label>
                <textarea v-model="form.description" class="form-control" required></textarea>
              </div>
  
              <div class="mb-3">
                <label class="form-label">Responsibilities</label>
                <textarea v-model="form.responsibilities" class="form-control"></textarea>
              </div>
  
              <div class="mb-3">
                <label class="form-label">Qualifications</label>
                <textarea v-model="form.qualifications" class="form-control"></textarea>
              </div>
  
              <div class="mb-3">
                <label class="form-label">Salary Range</label>
                <input v-model="form.salary_range" class="form-control" />
              </div>
  
              <div class="mb-3">
                <label class="form-label">Benefits</label>
                <textarea v-model="form.benefits" class="form-control"></textarea>
              </div>
  
              <div class="mb-3">
                <label class="form-label">Location</label>
                <input v-model="form.location" class="form-control" required />
              </div>
  
              <div class="mb-3">
                <label class="form-label">Application Deadline</label>
                <input v-model="form.application_deadline" type="date" class="form-control" required />
              </div>
  
              <button type="submit" class="btn btn-primary">Update Job</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import { useRoute, useRouter } from 'vue-router'
  import axios from 'axios'
  import interceptor from '../../Interceptor/getaxiox'
  import MainNavbar from './MainNavbar.vue'
  import EmpSidebar from './EmpSidebar.vue'
  
  const route = useRoute()
  const router = useRouter()
  
  const form = ref({
    category_id: '',
    type: '',
    title: '',
    description: '',
    responsibilities: '',
    qualifications: '',
    salary_range: '',
    benefits: '',
    location: '',
    application_deadline: '',
  })
  
  const categories = ref([])
  
  const getJobDetails = async () => {
    try {
      const { data } = await interceptor.get(`/jobs/${route.params.id}`)
      form.value = { ...form.value, ...data }
    } catch (err) {
      console.error('Failed to fetch job details:', err)
    }
  }
  
  const getCategories = async () => {
    try {
      const res = await interceptor.get('/categories')
      categories.value = res.data
    } catch (err) {
      console.error('Error loading categories:', err)
    }
  }
  
  const updateJob = async () => {
    try {
      await interceptor.put(`/jobs/${route.params.id}`, form.value)
      router.push('/employeer/dashboard')
    } catch (err) {
      console.error('Error updating job:', err)
      alert('Something went wrong.')
    }
  }
  
  onMounted(() => {
    getJobDetails()
    getCategories()
  })
  </script>
  