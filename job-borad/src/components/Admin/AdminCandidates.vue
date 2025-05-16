<template>
    <div class="candidates">
      <h2>Candidates</h2>
      <div class="table-responsive">
        <table class="table table-striped table-hover">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Applications</th>
              <th>Registered At</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="candidate in candidates.data" :key="candidate.id">
              <td>{{ candidate.id }}</td>
              <td>{{ candidate.name }}</td>
              <td>{{ candidate.email }}</td>
              <td>{{ candidate.applications_count }}</td>
              <td>{{ formatDate(candidate.created_at) }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <Pagination :data="candidates" @pagination-change-page="getCandidates" />
    </div>
  </template>
  
  <script>
  import Pagination from './Pagination.vue'
  import interceptor from '../../Interceptor/getaxiox'
  
  export default {
    components: { Pagination },
    data() {
      return {
        candidates: {},
      }
    },
    created() {
      this.getCandidates()
    },
    methods: {
      getCandidates(page = 1) {
        interceptor.get(`/allCandidates?page=${page}`)
          .then(response => {
            this.candidates = response.data 
            console.log(response.data)
          })
      },
      formatDate(date) {
        return new Date(date).toLocaleDateString()
      }
    }
  }
  </script>
  