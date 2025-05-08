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
  </section>

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

<style >
/* Popular Vacancies Section */
.popular-vacancies-section {
  background-color: #ffffff;
  box-shadow: inset 0 -1px 0 #e4e5e8;
  padding: 100px 0; /* vertical */
}

@media (min-width: 1400px) {
  .popular-vacancies-section .container {
    padding-left: 300px;
    padding-right: 300px;
  }
}
</style>