<template>
    <section class="container py-5">
      <h2 class="mb-4 fw-bold">Top companies</h2>
       
      <div class="row g-4">
        <div v-for="(company, index) in topCompanies" :key="index" class="col-md-6 col-lg-4">
          <div class="card h-100 shadow-sm border-0 job-card">
            <div class="card-body">
            <!-- <div class="card-body d-flex w-100"> -->
              <div class="d-flex mb-2">

                <div class="rounded p-2 text-center">
                    <img :src="company.company_logo" alt="Logo" class="me-3" style="width: 50px; height: 50px; object-fit: contain" />
                </div>
                <div class="ms-4">
                  <div class="d-flex align-items-center">
                    <h5 class="mb-0 me-2">{{ company.company_name}}</h5>
                    <span class="badge bg-light text-danger border border-danger rounded-pill px-3">
                      Featured
                    </span>
                  </div>
                  <p class="text-muted mb-1 mt-3">
                    <i class="bi bi-geo-alt me-1"></i>
                    <!-- {{ company.location }}  -->
                    <!-- {{company.job?.location}} -->
                    {{ company.latest_job?.location || 'Unknown' }}

                  </p>
                </div>
              </div>
              <div class="bg-light text-center py-2 w-100 rounded-2 my-2">
                <a href="#" class="text-primary fw-bold text-decoration-none">
                  Open Position ({{ company.jobs_count }})
                </a>
              </div>
            </div>
            </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  
    import { ref, onMounted } from 'vue';
    import apiClient from '../../Interceptor/getaxiox';

    const topCompanies = ref([]);

    onMounted(async () => {
      try {
        const res = await apiClient.get('/top-companies');
        console.log(res.data);
        topCompanies.value = res.data;
      } catch (err) {
        console.error('Error fetching top companies:', err);
      }
    });
  </script>
  
  <style scoped>
  .bg-pink {
    background-color: #f06595;
  }
  </style>
  