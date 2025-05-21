<template>
  <div class="employers">
    <h2>Employers</h2>
    <div class="table-responsive">
      <table class="table table-striped table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Company</th>
            <th>Jobs Posted</th>
            <th>Registered At</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="employer in employers.data" :key="employer.id">
            <td>{{ employer.id }}</td>
            <td>{{ employer.user?.name }}</td>
            <td>{{ employer.user?.email }}</td>
            <td>{{ employer.company_name }}</td>
            <td>{{ employer.jobs_count }}</td>
            <td>{{ formatDate(employer.created_at) }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <Pagination :data="employers" @pagination-change-page="getEmployers" />
  </div>
</template>

<script>
import Pagination from './Pagination.vue'
import interceptor from '../../Interceptor/getaxiox'

export default {
  components: { Pagination },
  data() {
    return {
      employers: {},
    }
  },
  created() {
    this.getEmployers()
  },
  methods: {
    getEmployers(page = 1) {
      interceptor.get(`/adminEmp?page=${page}`)
        .then(response => {
          this.employers = response.data
          console.log(response.data)
        })
    },
    formatDate(date) {
      return new Date(date).toLocaleDateString()
    }
  }
}
</script>
