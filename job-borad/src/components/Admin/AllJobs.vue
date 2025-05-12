<template>
    <div class="all-jobs">
      <h2>All Jobs</h2>
      
      <div v-if="loading" class="text-center my-4">
        <div class="spinner-border text-primary" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
  
      <div v-else-if="error" class="alert alert-danger">
        {{ error }}
      </div>
  
      <div v-else-if="jobs.length === 0" class="alert alert-info">
        No jobs found.
      </div>
  
      <div v-else class="table-responsive">
        <table class="table table-striped table-hover">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Employer</th>
              <th>Type</th>
              <th>Status</th>
              <th>Posted At</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="job in jobs.data" :key="job.id">
              <td>{{ job.id }}</td>
              <td>{{ job.title }}</td>
              <td>{{ job.employer.user.name }}</td>
              <td>{{ job.type }}</td>
              <td>
                <span :class="`badge bg-${getStatusClass(job.status)}`">
                  {{ job.status }}
                </span>
              </td>
              <td>{{ formatDate(job.created_at) }}</td>
            </tr>
          </tbody>
        </table>
      </div>
  
      <!-- Remove Pagination since your API returns a plain array -->
      <!-- Or implement client-side pagination if needed -->
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        jobs: [], // Changed from object to array
        loading: false,
        error: null
      };
    },
    created() {
      this.getJobs();
    },
    methods: {
      async getJobs() {
        this.loading = true;
        this.error = null;
        
        try {
          const response = await axios.get('http://localhost:8000/api/jobs', {
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',

            }
          });
  
          console.log('API Response:', response);
          
          // Directly assign the array to jobs
          this.jobs = response.data;
          
        } catch (error) {
          console.error('Error fetching jobs:', error);
          this.error = error.response?.data?.message || 
                      error.message || 
                      'Failed to load jobs';
          
          if (error.response?.status === 401) {
            this.$router.push('/login');
          }
        } finally {
          this.loading = false;
        }
      },
      getStatusClass(status) {
        const classes = {
          'pending': 'warning',
          'approved': 'success',
          'rejected': 'danger',
          'archived': 'secondary'
        };
        return classes[status] || 'secondary';
      },
      formatDate(date) {
        return new Date(date).toLocaleDateString();
      }
    }
  };
  </script>