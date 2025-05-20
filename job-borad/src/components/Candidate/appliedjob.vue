<template>
  <div class="container fluid p-0 mt-5">
      <div class="row">
        <div class="col-md-3">
          <Sidebar />
        </div>
        <div class="col-md-9">
          <div class="container-fluid p-0">
            <div class="row">
              <div class="col-md-12">
                <section class="recently-applied">
                  <header class="recently-applied-header">
                    <h2>Recently Applied</h2>
                  </header>
  
                  <div class="job-list">
                    <div 
                      v-for="job in paginatedJobs" 
                      :key="job.id" 
                      class="job-card"
                    >
                      <div class="job-info">
                       
                        <div>
                          <h3>{{ job.title }}</h3>
                          <div class="job-meta">
                            <span>{{ job.job.location }}</span>
                            <span>•</span>
                            <span>{{ job.job.title }}</span>
                          </div>
                        </div>
                      </div>
  
                      <div class="job-date">
                        {{ job.job.application_deadline }}
                      </div>
  
                      <div 
                      class="job-status" 
                      :class="{
                        'text-success': job.status === 'accepted',
                        'text-warning': job.status === 'pending',
                        'text-danger': job.status === 'rejected',
                      }"
                    >
                      ✔ {{ job.status }}
                    </div>                    
  
                      <button class="details-btn" @click="viewJobDetails(job.id)">
                        View Details
                      </button>
                    </div>
                  </div>
  
                  <div class="pagination">
                    <button 
                      @click="prevPage" 
                      :disabled="currentPage === 1"
                    >
                      Prev
                    </button>
  
                    <span class="page-number">
                      {{ currentPage }} / {{ totalPages }}
                    </span>
  
                    <button 
                      @click="nextPage" 
                      :disabled="currentPage === totalPages"
                    >
                      Next
                    </button>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
import { ref, computed, onMounted } from 'vue';
import Sidebar from './Sidebar.vue';
import axios from 'axios';
import interceptor from '../../Interceptor/getaxiox';
import { useRouter } from 'vue-router';

const router = useRouter();



const jobs = ref([]);
const currentPage = ref(1);
const rowsPerPage = 5;

const viewJobDetails = (jobId) => {
  router.push(`/employeer/single/${jobId}`);
}

const fetchApplications = async () => {
  try {
    const res = await interceptor.get('/userApplication');
    jobs.value = res.data;
    console.log(jobs.value);
  } catch (err) {
    console.error('Error fetching applications:', err);
  }
};

onMounted(fetchApplications);

const paginatedJobs = computed(() => {
  const start = (currentPage.value - 1) * rowsPerPage;
  return jobs.value.slice(start, start + rowsPerPage);
});

const totalPages = computed(() => Math.ceil(jobs.value.length / rowsPerPage));

function nextPage() {
  if (currentPage.value < totalPages.value) currentPage.value++;
}

function prevPage() {
  if (currentPage.value > 1) currentPage.value--;
}
</script>

  <style scoped>
  .container-fluid {
    padding: 0;
  }
  

  .recently-applied {
    max-width: 1200px;
    margin: 0 auto;
    background: #fff;
    border-radius: 16px;
    padding: 24px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .recently-applied-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;
  }
  
  .recently-applied-header h2 {
    font-size: 20px;
    font-weight: bold;
    color: #2d3748;
  }
  

  .job-list {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  

  .job-card {
    border: 1px solid #e2e8f0;
    border-radius: 12px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    transition: box-shadow 0.3s;
  }
  
  .job-card:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  }
  
  @media (min-width: 768px) {
    .job-card {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }
  }
  
  .job-info {
    display: flex;
    align-items: center;
    gap: 16px;
  }
  
  .job-info img {
    width: 48px;
    height: 48px;
    border-radius: 8px;
    background: #f1f5f9;
    object-fit: contain;
  }
  
  .job-info h3 {
    font-size: 18px;
    font-weight: 600;
    color: #2d3748;
  }
  
  .job-meta {
    display: flex;
    gap: 8px;
    font-size: 14px;
    color: #718096;
    margin-top: 4px;
  }

  .job-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }
  
  .tag {
    background: #eff6ff;
    color: #2563eb;
    font-size: 12px;
    font-weight: bold;
    padding: 4px 12px;
    border-radius: 9999px;
  }
  
  .job-date {
    color: #718096;
    font-size: 14px;
    display: none;
  }
  
  @media (min-width: 768px) {
    .job-date {
      display: block;
    }
  }
  
  .job-status {
    color: #16a34a;
    font-size: 14px;
    font-weight: 600;
  }
  

  .details-btn {
    background: #2563eb;
    color: #fff;
    padding: 8px 16px;
    border-radius: 8px;
    font-weight: 600;
    font-size: 14px;
    cursor: pointer;
    transition: background 0.3s;
  }
  
  .details-btn:hover {
    background: #1d4ed8;
  }
  
  /* Pagination */
  .pagination {
    margin-top: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
  }
  
  .pagination button {
    background: #2563eb;
    color: #fff;
    padding: 6px 12px;
    border: none;
    border-radius: 8px;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.3s;
  }
  
  .pagination button:disabled {
    background: #cbd5e1;
    cursor: not-allowed;
  }
  
  .pagination .page-number {
    font-weight: 600;
    color: #2563eb;
  }

  .text-success {
    color: #16a34a;
  }
  .text-warning {
    color: #d97706;
  }
  .text-danger {
    color: #dc2626;
  }
  
  </style>
  