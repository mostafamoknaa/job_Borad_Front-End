<template>
    <section class="container my-5">
      <div class="d-flex justify-content-between align-items-center mb-4">
        <h2 class="fw-bold">Featured job</h2>
        <a href="#" class="btn btn-outline-primary">
          View All <i class="bi bi-arrow-right ms-1"></i>
        </a>
      </div>
  
      <div class="row g-4">
        <div
          v-for="(job, index) in jobs"
          :key="index"
          class="col-md-6 col-lg-4"
        >
          <div class="card h-100 shadow-sm border-0 card-hover">
            <div class="card-body">
              <div class="d-flex justify-content-between align-items-start mb-2">
                <h5 class="card-title">{{ job.title }}</h5>
                <span
                  class="badge"
                  :class="badgeClass(job.type)"
                >
                  {{ job.type }}
                </span>
              </div>
              <p class="text-muted mb-2">Salary: {{ job.salary }}</p>
              <div class="d-flex align-items-center">
                <img :src="job.logo" alt="logo" class="me-2" style="width: 32px;" />
                <div>
                  <div class="fw-semibold">{{ job.company }}</div>
                  <div class="text-muted small">
                    <i class="bi bi-geo-alt me-1"></i>{{ job.location }}
                  </div>
                </div>
                <i
                    class="bi ms-auto"
                    :class="jobs[index].bookmarked ? 'bi-bookmark-fill text-warning' : 'bi-bookmark'"
                    role="button"
                    @click="toggleBookmark(index)"
                ></i>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const jobs = ref([
  {
    title: 'Technical Support Specialist',
    type: 'PART-TIME',
    salary: '$20,000 - $25,000',
    company: 'Google Inc.',
    location: 'Dhaka, Bangladesh',
    logo: 'https://kgo.googleusercontent.com/profile_vrt_raw_bytes_1587515358_10512.png',
    bookmarked: false
  },
  {
    title: 'Senior UX Designer',
    type: 'FULL-TIME',
    salary: '$20,000 - $25,000',
    company: 'Google Inc.',
    location: 'Dhaka, Bangladesh',
    logo: 'https://kgo.googleusercontent.com/profile_vrt_raw_bytes_1587515358_10512.png',
    bookmarked: false
  },
  {
    title: 'Technical Support Specialist',
    type: 'PART-TIME',
    salary: '$20,000 - $25,000',
    company: 'Google Inc.',
    location: 'Dhaka, Bangladesh',
    logo: 'https://kgo.googleusercontent.com/profile_vrt_raw_bytes_1587515358_10512.png'
  },
  {
    title: 'Senior UX Designer',
    type: 'FULL-TIME',
    salary: '$20,000 - $25,000',
    company: 'Google Inc.',
    location: 'Dhaka, Bangladesh',
    logo: 'https://kgo.googleusercontent.com/profile_vrt_raw_bytes_1587515358_10512.png'
  },
  {
    title: 'Marketing Officer',
    type: 'INTERNSHIP',
    salary: '$20,000 - $25,000',
    company: 'Google Inc.',
    location: 'Dhaka, Bangladesh',
    logo: 'https://kgo.googleusercontent.com/profile_vrt_raw_bytes_1587515358_10512.png'
  },
  {
    title: 'Marketing Officer',
    type: 'INTERNSHIP',
    salary: '$20,000 - $25,000',
    company: 'Google Inc.',
    location: 'Dhaka, Bangladesh',
    logo: 'https://kgo.googleusercontent.com/profile_vrt_raw_bytes_1587515358_10512.png'
  },
  {
    title: 'Marketing Officer',
    type: 'INTERNSHIP',
    salary: '$20,000 - $25,000',
    company: 'Google Inc.',
    location: 'Dhaka, Bangladesh',
    logo: 'https://kgo.googleusercontent.com/profile_vrt_raw_bytes_1587515358_10512.png'
  },
    {
        title: 'Marketing Officer',
        type: 'INTERNSHIP',
        salary: '$20,000 - $25,000',
        company: 'Google Inc.',
        location: 'Dhaka, Bangladesh',
        logo: 'https://kgo.googleusercontent.com/profile_vrt_raw_bytes_1587515358_10512.png'
    },
    {
        title: 'Marketing Officer',
        type: 'INTERNSHIP',
        salary: '$20,000 - $25,000',
        company: 'Google Inc.',
        location: 'Dhaka, Bangladesh',
        logo: 'https://kgo.googleusercontent.com/profile_vrt_raw_bytes_1587515358_10512.png'
    },
  // Add more...
])

function toggleBookmark(index) {
  jobs.value[index].bookmarked = !jobs.value[index].bookmarked
}

  
  function badgeClass(type) {
    switch (type) {
      case 'FULL-TIME':
        return 'bg-success text-white'
      case 'PART-TIME':
        return 'bg-warning text-dark'
      case 'INTERNSHIP':
        return 'bg-info text-white'
      default:
        return 'bg-secondary text-white'
    }
  }
  </script>
  
  <style>
  .card {
    border-radius: 12px;
  }
 
  .badge {
    font-size: 0.75rem;
    padding: 0.4em 0.6em;
    border-radius: 6px;
  }
  /* Featured Jobs Section */
.card-title {
  font-weight: 600;
}
  </style>
  