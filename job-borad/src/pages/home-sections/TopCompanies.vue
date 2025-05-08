<template>
    <section class="container py-5">
      <h2 class="mb-4 fw-bold">Top companies</h2>
      <div class="row g-4">
        <div
          class="col-md-4 col-lg-4"
          v-for="(company, index) in companies"
          :key="index"
        >
          <div class="card shadow-sm border-0 px-3">
            <div class="card-body d-flex w-100">
              <div class=" bg-pink rounded p-2 text-center">
                <i
                class="fas fa-universal-access fa-2x text-white d-flex align-items-center justify-content-center"
                style="width: 50px; height: 50px"
              ></i>     
              </div>
              <div class="ms-4">
                <div class="d-flex align-items-center">
                  <h5 class="mb-0 me-2">{{ company.name }}</h5>
                  <span class="badge bg-light text-danger border border-danger rounded-pill px-3">
                    Featured
                  </span>
                </div>
                <p class="text-muted mb-1 mt-3">
                  <i class="bi bi-geo-alt me-1"></i>{{ company.location }}
                </p>
              </div>
            </div>
            <div class="bg-light text-center py-2 w-100 rounded-2 my-2">
              <a href="#" class="text-primary fw-bold text-decoration-none">
                Open Position ({{ company.positions }})
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const companies = ref([
    {
      name: 'Dribbble',
      location: 'Dhaka, Bangladesh',
      positions: 3,
      logo: 'https://cdn.worldvectorlogo.com/logos/dribbble-icon-1.svg'
    },
    // Duplicate for 6 cards
    {
      name: 'Dribbble',
      location: 'Dhaka, Bangladesh',
      positions: 3,
      logo: 'https://cdn.worldvectorlogo.com/logos/dribbble-icon-1.svg'
    },
    {
      name: 'Dribbble',
      location: 'Dhaka, Bangladesh',
      positions: 3,
      logo: 'https://cdn.worldvectorlogo.com/logos/dribbble-icon-1.svg'
    },
    {
      name: 'Dribbble',
      location: 'Dhaka, Bangladesh',
      positions: 3,
      logo: 'https://cdn.worldvectorlogo.com/logos/dribbble-icon-1.svg'
    },
    {
      name: 'Dribbble',
      location: 'Dhaka, Bangladesh',
      positions: 3,
      logo: 'https://cdn.worldvectorlogo.com/logos/dribbble-icon-1.svg'
    },
    {
      name: 'Dribbble',
      location: 'Dhaka, Bangladesh',
      positions: 3,
      logo: 'https://cdn.worldvectorlogo.com/logos/dribbble-icon-1.svg'
    }
  ])
  </script>
  
  <style scoped>
  .bg-pink {
    background-color: #f06595;
  }
  </style>
  