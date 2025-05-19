<template>
  <div class="container my-5" v-if="job">
    <h2 class="mb-4">Apply for {{ job.title }} at {{ job.company }}</h2>

    <form @submit.prevent="submitApplication" class="card p-4 shadow-sm rounded-4">


      <div class="mb-3">
        <label class="form-label">Cover Letter</label>
        <textarea v-model="form.message" rows="4" class="form-control" required></textarea>
      </div>
      <div class="mb-3">
        <label class="form-label">Add CV</label>
        <input
        type="file"
        class="form-control"
        @change="handleFileUpload"
        name="resume"
        required
      />
      
      </div>
      <button type="submit" class="btn btn-success rounded-pill px-4">Submit Application</button>
    </form>

    <router-link to="/find-job" class="btn btn-outline-secondary mt-4 rounded-pill px-4">
      ← Back to Job Listings
    </router-link>
  </div>

  <div v-else class="text-center mt-5">
    <div class="spinner-border" role="status"></div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'
import interceptor from '../Interceptor/getaxiox';
const route = useRoute()
const job = ref(null)

const form = ref({
  message: '',
  cv: null
})

function handleFileUpload(event) {
  const file = event.target.files[0];
  if (file) {
    console.log("Selected file:", file);
    form.value.cv = file;
  } else {
    console.warn("No file selected");
  }
}

onMounted(async () => {
  const res = await interceptor.get(`/jobs/${route.params.id}`)
  job.value = res.data
})

const storedUser = localStorage.getItem('user')
const parsedUser = JSON.parse(storedUser)
const candidateId = parsedUser.id
console.log(candidateId)

async function submitApplication() {

  const user = localStorage.getItem('user')
  if (!user) {
    window.location.href = '/employeer/login';
  }
  const formData = new FormData();
  formData.append('cover_letter', form.value.message);
  formData.append('resume', form.value.cv);
  formData.append('job_id', route.params.id);
  formData.append('candidate_id',  candidateId);
  try {
    const response = await interceptor.post('/addApplication', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      }
    });
    console.log(response);
    window.location.href = '/find-job';
  } catch (err) {
    console.error('Upload failed:', err);
  }
}

</script>
