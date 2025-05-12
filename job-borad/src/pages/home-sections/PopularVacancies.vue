<template>
     <section class="popular-vacancies-section py-5">
    <div class="container">
      <!-- Title -->
      <div class="text-start mb-5">
        <h2 class="fw-bold">Most Popular Vacancies</h2>
      </div>

      <!-- Jobs Grid -->
      <div class="row g-4">
        <div class="col-md-6 col-lg-4" v-for="job in jobs" :key="job.id">
          <div class="p-4 bg-white rounded shadow-sm border h-100">
            <h5 class="fw-bold">{{ job.title }}</h5>
            <p class="text-muted mb-1">{{ job.company }}</p>
            <p class="text-muted small">{{ job.location }}</p>
            <button class="btn btn-outline-primary btn-sm mt-3" @click="goTosinglejob()">View Job</button>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup> 
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const router = useRouter();

const goTosinglejob = () => {
  console.log('Job clicked');
  router.push({ name: 'SinglePage' });
};


const jobs = [
  { id: 1, title: 'Frontend Developer', company: 'Google', location: 'Remote' },
  { id: 2, title: 'UI/UX Designer', company: 'Meta', location: 'USA' },
  { id: 3, title: 'Backend Engineer', company: 'Amazon', location: 'Germany' },
  { id: 4, title: 'Project Manager', company: 'Apple', location: 'Remote' },
  { id: 5, title: 'Marketing Specialist', company: 'Netflix', location: 'France' },
  { id: 6, title: 'QA Tester', company: 'Spotify', location: 'UK' }
];
</script>

<style scoped>
.vacancy-item {
  background-color: #f8f9fa;
  transition: background-color 0.3s ease;
}

.vacancy-item:hover {
  background-color: #e9ecef;
}

h2 {
  font-size: 2rem;
  font-weight: 700;
  color: #1a1a1a;
}

h5 {
  font-size: 1.1rem;
  font-weight: 600;
  color: #333;
}

p {
  font-size: 0.9rem;
}
</style>