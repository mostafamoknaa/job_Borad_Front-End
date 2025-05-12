<template>
    <div class="jobs-approval">
      <h2>Jobs Approval</h2>
      <div class="table-responsive">
        <table class="table table-striped table-hover">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Employer</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="job in jobs.data" :key="job.id">
              <td>{{ job.id }}</td>
              <td>{{ job.title }}</td>
              <td>{{ job.employer.user.name }}</td>
              <td>
                <span :class="`badge bg-${getStatusClass(job.status)}`">
                  {{ job.status }}
                </span>
              </td>
              <td>
                <button v-if="job.status === 'pending'" 
                  class="btn btn-sm btn-success me-2"
                  @click="approveJob(job.id)">
                  Approve
                </button>
                <button v-if="job.status === 'pending'" 
                  class="btn btn-sm btn-danger"
                  @click="rejectJob(job.id)">
                  Reject
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <Pagination :data="jobs" @pagination-change-page="getJobs" />
    </div>
  </template>
  
  <script>
  import Pagination from './Pagination.vue'
  import axios from 'axios'
  
  export default {
    components: { Pagination },
    data() {
      return {
        jobs: {},
      }
    },
    created() {
      this.getJobs()
    },
    methods: {
        async getJobs(page = 1) {
    try {
      const response = await axios.get(`http://localhost:8000/api/jobs?page=${page}`, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}` // Add if using auth
        }
      });
      
      console.log('API Response:', response.data); // Debug log
      
      // Check if response is an array (direct jobs list)
      if (Array.isArray(response.data)) {
        this.jobs = { data: response.data }; // Format for your table
      } 
      // Check if response is paginated (Laravel default)
      else if (response.data.data) {
        this.jobs = response.data;
      }
      // Handle other response formats
      else {
        this.jobs = { data: [] };
        console.warn('Unexpected API response format');
      }
      
    } catch (error) {
      console.error('Error fetching jobs:', error);
      
      if (error.response) {
        // Handle specific HTTP errors
        if (error.response.status === 401) {
          this.$router.push('/login');
        } else {
          this.error = 'Failed to load jobs: ' + 
            (error.response.data.message || `Server error (${error.response.status})`);
        }
      } else {
        this.error = 'Network error: ' + error.message;
      }
      
      this.jobs = { data: [] }; // Ensure empty state
    }
  },
      getStatusClass(status) {
        const classes = {
          'pending': 'warning',
          'approved': 'success',
          'rejected': 'danger',
          'archived': 'secondary'
        }
        return classes[status] || 'secondary'
      },
      approveJob(id) {
        axios.put(`/api/admin/jobs/${id}/approve`)
          .then(() => {
            this.getJobs()
          })
      },
      rejectJob(id) {
        axios.put(`/api/admin/jobs/${id}/reject`)
          .then(() => {
            this.getJobs()
          })
      }
    }
  }
  </script>