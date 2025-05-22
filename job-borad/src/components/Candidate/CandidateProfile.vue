<template>
    <div class="container my-5" v-if="candidate">
      <h2 class="mb-4">Applicant Biography</h2>
      <div class="row">
        <div class="col-md-4 text-center mb-3">
          <img
            v-if="candidate.image"
            :src="'http://localhost:8000/storage/' + candidate.image"
            alt="Candidate Image"
            class="img-thumbnail rounded-circle"
            style="width: 150px; height: 150px; object-fit: cover;"
          />
          <div class="mt-2">
            <strong>{{ candidate.title }}</strong>
          </div>
        </div>
  
        <div class="col-md-8">
          <table class="table table-sm">
            <tbody>
              <tr>
                <th scope="row">Experience Level</th>
                <td>{{ candidate.experience_level || 'N/A' }}</td>
              </tr>
              <tr>
                <th scope="row">Education</th>
                <td>{{ candidate.education || 'N/A' }}</td>
              </tr>
              <tr>
                <th scope="row">Nationality</th>
                <td>{{ candidate.Nationality || 'N/A' }}</td>
              </tr>
              <tr>
                <th scope="row">Gender</th>
                <td>{{ candidate.gender || 'N/A' }}</td>
              </tr>
              <tr>
                <th scope="row">Marital Status</th>
                <td>{{ candidate.marital_status || 'N/A' }}</td>
              </tr>
              <tr>
                <th scope="row">Date of Birth</th>
                <td>{{ candidate.date_of_birth || 'N/A' }}</td>
              </tr>
              <tr>
                <th scope="row">Resume</th>
                <td>
                  <a
                    v-if="candidate.resume"
                    :href="'http://localhost:8000/storage/' + candidate.resume"
                    target="_blank"
                    class="text-decoration-underline text-primary"
                  >
                    View Resume
                  </a>
                  <span v-else>N/A</span>
                </td>
              </tr>
              <tr>
                <th scope="row">Joined At</th>
                <td>{{ new Date(candidate.created_at).toLocaleDateString() }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
  
      <div class="mt-4">
        <h6>Biography</h6>
        <p class="text-muted">
          {{ candidate.bio || 'No biography provided' }}
        </p>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted } from 'vue'
  import { useRoute } from 'vue-router'
  import interceptor from '../../Interceptor/getaxiox'
  
  const route = useRoute()
  const candidate = ref<any>(null)
  const storedUser = localStorage.getItem('user')
  const parsedUser = JSON.parse(storedUser)
  const candidateId = parsedUser.id
  console.log(candidate)
  onMounted(async () => {
  try {
    const res = await interceptor.get(`/candidates/${candidateId}`)
    candidate.value = res.data
    console.log(candidate.value)
  } catch (error) {
    console.error('Error fetching candidate:', error)
  }
})

  </script>
  