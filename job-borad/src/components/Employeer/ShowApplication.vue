<template>
  <div class="container my-5">
    <MainNavbar />
    <h2 class="mb-4">Applicant Profiles</h2>
    <div class="row">
      <div class="col-md-3">
        <EmpSidebar />
      </div>
      <div class="col-md-9">
        <div class="card shadow-sm">
          <div class="card-body">
            <div class="table-responsive">
              <table class="table align-middle">
                <thead class="bg-light">
                  <tr>
                    <th>Applicant</th>
                    <th>Education</th>
                    <th>Experience</th>
                    <th>Personal Info</th>
                    <th>Documents</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(application, index) in applications" :key="index">
                    
                    <td>
                      <div class="d-flex align-items-center">
                        <div class="avatar me-3">
                          <img 
                            :src="`http://localhost:8000/storage/${application.candidate.image}`" 
                            alt="Candidate Image"
                          class="img-thumbnail rounded-circle"
                          style="width: 150px; height: 150px; object-fit: cover;"
                          >
                        </div>
                        <div>
                          <h6 class="mb-0">#{{ application.candidate.user.name }}</h6>
                          <small class="text-muted">{{ application.candidate.title }}</small>
                        </div>
                      </div>
                    </td>
                    
                   
                    <td>
                      <div class="fw-semibold small">{{ application.candidate.education }}</div>
                    </td>
                    
                   
                    <td>
                      <div class="d-flex align-items-center">
                        <div class="badge" :class="getExperienceBadgeClass(application.candidate.experience_level)">
                          {{ application.candidate.experience_level }}
                        </div>
                      </div>
                    </td>
                    
                    
                    <td>
                      <div class="small">
                        <div><span class="fw-semibold">Nationality:</span> {{ application.candidate.Nationality }}</div>
                        <div><span class="fw-semibold">Gender:</span> {{ application.candidate.gender }}</div>
                        <div><span class="fw-semibold">Status:</span> {{ application.candidate.marital_status }}</div>
                      </div>
                    </td>
                    
                    
                    <td>
                      <button 
                        class="btn btn-sm btn-outline-primary" 
                        @click="showBio(application.candidate)"
                      >
                        <i class="fas fa-file-alt me-1"></i> View Bio
                      </button>
                    </td>
                    
                   
                    <td>
                      <span class="badge" :class="getStatusBadgeClass(application.status)">
                        {{ application.status }}
                      </span>
                    </td>
                    
                    
                    <td>
                      <div class="dropdown">
                        <button class="btn btn-sm btn-light" type="button" data-bs-toggle="dropdown">
                          <i class="fas fa-ellipsis-v"></i>
                        </button>
                        <ul class="dropdown-menu">
                          <li><a class="dropdown-item" href="#" @click.prevent="updateStatus(application, 'shortlisted')">Save</a></li>
                          <li><a class="dropdown-item" href="#" @click.prevent="updateStatus(application)">Hire</a></li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        
        <div class="modal fade" id="bioModal" tabindex="-1" aria-hidden="true">
          <div class="modal-dialog modal-lg modal-dialog-scrollable">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Applicant Biography</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
        
              <div class="modal-body" v-if="selectedCandidate">
                <div class="row">
                  <div class="col-md-4 text-center mb-3">
                    <img
                    v-if="selectedCandidate.image"
                    :src="'http://localhost:8000/storage/' + selectedCandidate.image"
                    alt="Candidate Image"
                    class="img-thumbnail rounded-circle"
                    style="width: 150px; height: 150px; object-fit: cover;"
                  />
                  
                    <div class="mt-2">
                      <strong>{{ selectedCandidate.title }}</strong>
                      <p class="text-muted">ID: {{ selectedCandidate.id }}</p>
                    </div>
                  </div>
        
                  <div class="col-md-8">
                    <table class="table table-sm">
                      <tbody>
                        <tr>
                          <th scope="row">Experience Level</th>
                          <td>{{ selectedCandidate.experience_level || 'N/A' }}</td>
                        </tr>
                        <tr>
                          <th scope="row">Education</th>
                          <td>{{ selectedCandidate.education || 'N/A' }}</td>
                        </tr>
                        <tr>
                          <th scope="row">Nationality</th>
                          <td>{{ selectedCandidate.Nationality || 'N/A' }}</td>
                        </tr>
                        <tr>
                          <th scope="row">Gender</th>
                          <td>{{ selectedCandidate.gender || 'N/A' }}</td>
                        </tr>
                        <tr>
                          <th scope="row">Marital Status</th>
                          <td>{{ selectedCandidate.marital_status || 'N/A' }}</td>
                        </tr>
                        <tr>
                          <th scope="row">Date of Birth</th>
                          <td>{{ selectedCandidate.date_of_birth || 'N/A' }}</td>
                        </tr>
                        <tr>
                          <th scope="row">Resume</th>
                          <td>
                            <a
                              v-if="selectedCandidate.resume"
                              :href="selectedCandidate.resume"
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
                          <td>{{ new Date(selectedCandidate.created_at).toLocaleDateString() }}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
        
                <div class="mt-4">
                  <h6>Biography</h6>
                  <p class="text-muted">
                    {{ selectedCandidate.bio || 'No biography provided' }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { Modal } from 'bootstrap'
import MainNavbar from './MainNavbar.vue'
import EmpSidebar from './EmpSidebar.vue'
import axios from 'axios'
import interceptor from '../../Interceptor/getaxiox'
import { useRouter } from 'vue-router'
const router = useRouter()

const applications = ref([])
const selectedCandidate = ref(null)
let bioModal = null

const fetchApplications = async () => {
  try {
    const pathParts = window.location.pathname.split('/')
    const jobId = pathParts[pathParts.length - 1]
    const response = await interceptor.get(`/oneapplications/${jobId}`)
    applications.value = response.data
    console.log(applications.value)
  } catch (error) {
    console.error('Error fetching applications:', error)
  }
}

const updateStatus = async (application, status = 'accepted') => {
  try {
    const response = await interceptor.put(`/updateapplications/${application.id}`);
    console.log(response)
    application.status = 'accepted'

    router.push(`/payment/${application.id}`)
  } catch (error) {
    console.error('Error updating status:', error)
  }
}


const showBio = (candidate) => {
  selectedCandidate.value = candidate
  bioModal.show()
}

const getExperienceBadgeClass = (experience) => {
  switch(experience) {
    case '0-1 years': return 'bg-info text-white'
    case '2-5 years': return 'bg-primary text-white'
    case '5+ years': return 'bg-success text-white'
    default: return 'bg-secondary text-white'
  }
}

const getStatusBadgeClass = (status) => {
  switch(status) {
    case 'pending': return 'bg-secondary text-white'
    case 'rejected': return 'bg-danger text-white'
    case 'accepted': return 'bg-success text-white'
    default: return 'bg-light text-dark'
  }
}

onMounted(() => {
  fetchApplications()
  bioModal = new Modal(document.getElementById('bioModal'))
})
</script>

<style scoped>
.avatar {
  width: 50px;
  height: 50px;
  overflow: hidden;
  border-radius: 50%;
}

.badge {
  font-size: 0.75rem;
  padding: 0.35em 0.65em;
}

.table tbody tr {
  transition: background-color 0.2s;
}

.table tbody tr:hover {
  background-color: rgba(0, 0, 0, 0.02);
}
</style>