<template>
       <div class="container my-5">
         <h2>{{ job.title }}</h2>
         <div class="card shadow-sm rounded-4 border-0">
           <div class="card-body">
             <h5 class="card-title fw-semibold">{{ job.company }}</h5>
             <p><strong>Location:</strong> {{ job.location }}</p>
             <p><strong>Type:</strong> {{ job.type }}</p>
             <p><strong>Category:</strong> {{ job.category }}</p>
             <p><strong>Description:</strong> {{ job.description }}</p>
             <router-link to="/find-job" class="btn btn-primary">Back to Jobs</router-link>
           </div>
         </div>
       </div>
     </template>

     <script setup>
     import { ref, onMounted } from 'vue';
     import { useRoute } from 'vue-router';
     import api from '../api';

     const route = useRoute();
     const job = ref({});

     const fetchJob = async () => {
       try {
         const response = await api.getJob(route.params.id);
         job.value = response.data.data;
       } catch (err) {
         console.error('Failed to load job:', err);
       }
     };

     onMounted(() => {
       fetchJob();
     });
     </script>

     <style scoped>
     .card {
       border-radius: 1rem;
     }
     </style>