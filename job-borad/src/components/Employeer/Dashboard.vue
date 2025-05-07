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
          <div class="container py-5 bg-light min-vh-100">
            <h2 class="mb-4">Hello, Mostafa</h2>
            <div class="row g-4 mb-5">
              <div class="col-md-6">
                <div class="card text-center shadow-sm" style="border-radius: 10px; background: #b7eaf7;">
                  <div class="card-body">
                    <div class="d-flex align-items-center justify-content-center">
                    <h3 class="text-muted mb-2">Open Jobs</h3>
                    <h3 class="fw-bold ms-3">589</h3>
                    <i class="fas fa-briefcase fa-2x text-primary ms-3"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="card text-center shadow-sm" style="border-radius: 10px; background: #f7d6b7;">
                  <div class="card-body">
                    <div class="d-flex align-items-center justify-content-center">
                    <p class="text-muted mb-2">Saved Candidates</p>
                    <h3 class="fw-bold ms-3">2,517</h3>
                    <i class="fas fa-users fa-2x text-primary ms-3"></i>
                </div>
                  </div>
                </div>
              </div>
            </div>
  
            <div class="card shadow-sm border-0 rounded-0">
              <div class="card-body">
                <div class="d-flex justify-content-between align-items-center mb-3">
                  <h5 class="card-title mb-0">Recently Posted Jobs</h5>
                  <a href="#" class="text-decoration-none text-primary small">View all</a>
                </div>
  
                <div class="table-responsive">
                  <table class="table align-middle">
                    <thead class="text-white bg-secondary small" style="background: gray;">
                        <tr>
                          <th>JOBS</th>
                          <th>STATUS</th>
                          <th>APPLICATIONS</th>
                          <th>ACTIONS</th>
                        </tr>
                      </thead>
                      
                    <tbody>
                      <tr v-for="(job, index) in jobs" :key="index">
                        <td>
                          <div class="d-flex flex-column">
                            <span class="fw-semibold">{{ job.title }}</span>
                            <small class="text-muted">{{ job.type }} • {{ job.remaining }}</small>
                          </div>
                        </td>
                        <td>
                          <span :class="job.status === 'Active' ? 'status-active' : 'status-expired'">
                            {{ job.status }}
                          </span>
                        </td>
                        <td class="text-muted"><i class="fas fa-users"></i> {{ job.applications }} Applications</td>
                        <td>
                          <div class="d-flex align-items-center gap-2">
                            <button class="btn btn-primary btn-sm">View Applications</button>
                            <div class="dropdown">
                              <button class="btn btn-light btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <i class="bi bi-three-dots-vertical"></i>
                              </button>
                              <ul class="dropdown-menu dropdown-menu-end">
                                <li><a class="dropdown-item" href="#">Promote Job</a></li>
                                <li><a class="dropdown-item" href="#">View Detail</a></li>
                                <li><a class="dropdown-item" href="#">Mark as expired</a></li>
                              </ul>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
  
              </div>
            </div>
  
            <p class="text-center text-muted small mt-5">© 2025 Forsa - Job Board. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  import EmpSidebar from './EmpSidebar.vue'
  import MainNavbar from './MainNavbar.vue'
  
  const jobs = ref([
    {
      title: "UI/UX Designer",
      type: "Full Time",
      remaining: "27 days remaining",
      status: "Active",
      applications: 798,
    },
    {
      title: "Senior UX Designer",
      type: "Internship",
      remaining: "8 days remaining",
      status: "Active",
      applications: 185,
    },
    {
      title: "Technical Support Specialist",
      type: "Part Time",
      remaining: "4 days remaining",
      status: "Active",
      applications: 558,
    },
    {
      title: "Junior Graphic Designer",
      type: "Full Time",
      remaining: "24 days remaining",
      status: "Active",
      applications: 583,
    },
    {
      title: "Front End Developer",
      type: "Full Time",
      remaining: "Dec 7, 2019",
      status: "Expire",
      applications: 740,
    },
  ])
  </script>
  
  <style scoped>
  .status-active {
    color: #28a745;
    font-weight: bold;
  }
  .status-expired {
    color: #dc3545;
    font-weight: bold;
  }
  </style>
  