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
              <h2 class="page-title">Favorite Jobs</h2>
              <div v-for="job in paginatedJobs" :key="job.id" class="job-card">
                <div class="job-info">
                  <img :src="job.logo" alt="Company Logo" class="company-logo" />
                  <div>
                    <h3 class="job-title">{{ job.title }}</h3>
                    <p class="job-location">
                      <i class="fa-duotone fa-light fa-location-dot"></i>
                      {{ job.location }} • 
                      <span class="job-salary">${{ job.salary }}</span>
                    </p>
                  </div>
                </div>
  
                <div class="job-action">
                  <span v-if="job.status === 'Expired'" class="expired-text">Deadline Expired</span>
                  <span v-else class="active-text"><i class="fa-solid fa-bookmark"></i> {{ job.daysRemaining }} Days Remaining</span>
  
                  <button v-if="job.status !== 'Expired'" class="apply-button">
                    Apply Now
                  </button>
                </div>
              </div>
  
              <div class="pagination">
                <button 
                  @click="prevPage"
                  :disabled="currentPage === 1"
                  class="pagination-button"
                >
                  Previous
                </button>
                <button 
                  @click="nextPage"
                  :disabled="currentPage === totalPages"
                  class="pagination-button"
                >
                  Next
                </button>
              </div>
  
            </div>
          </div> 
        </div> 
      </div> 
    </div> 
    </div>
  </template>
  
  
<script>
 import Sidebar from './Sidebar.vue';
  export default {
    components: {
      Sidebar
    },
    name: "JobBoard",
    data() {
      return {
        jobs: [
          { id: 1, title: "Technical Support Specialist", location: "Idaho, USA", salary: "15K-20K", logo: "https://cdn-icons-png.flaticon.com/512/732/732200.png", status: "Expired", daysRemaining: 0 },
          { id: 2, title: "UI/UX Designer", location: "Minnesota, USA", salary: "10K-15K", logo: "https://cdn-icons-png.flaticon.com/512/732/732208.png", status: "Active", daysRemaining: 4 },
          { id: 3, title: "Senior UX Designer", location: "United Kingdom", salary: "30K-35K", logo: "https://cdn-icons-png.flaticon.com/512/732/732204.png", status: "Active", daysRemaining: 4 },
          { id: 4, title: "Junior Graphic Designer", location: "Bangladesh", salary: "40K-50K", logo: "https://cdn-icons-png.flaticon.com/512/732/732202.png", status: "Active", daysRemaining: 4 },
          { id: 5, title: "Product Designer", location: "Turkey", salary: "50K-70K", logo: "https://cdn-icons-png.flaticon.com/512/732/732205.png", status: "Active", daysRemaining: 4 },
          { id: 6, title: "Project Manager", location: "Ohio, USA", salary: "50K-80K", logo: "https://cdn-icons-png.flaticon.com/512/732/732203.png", status: "Active", daysRemaining: 4 },
          { id: 7, title: "Marketing Manager", location: "Turkey", salary: "20K-25K", logo: "https://cdn-icons-png.flaticon.com/512/732/732201.png", status: "Active", daysRemaining: 3 },
          { id: 8, title: "Visual Designer", location: "Washington, USA", salary: "10K-15K", logo: "https://cdn-icons-png.flaticon.com/512/732/732206.png", status: "Active", daysRemaining: 5 },
          { id: 9, title: "Interaction Designer", location: "Remote", salary: "35K-40K", logo: "https://cdn-icons-png.flaticon.com/512/732/732207.png", status: "Active", daysRemaining: 6 },
        ],
        currentPage: 1,
        pageSize: 5,
      };
    },
    computed: {
      totalPages() {
        return Math.ceil(this.jobs.length / this.pageSize);
      },
      paginatedJobs() {
        const start = (this.currentPage - 1) * this.pageSize;
        return this.jobs.slice(start, start + this.pageSize);
      }
    },
    methods: {
      nextPage() {
        if (this.currentPage < this.totalPages) {
          this.currentPage++;
        }
      },
      prevPage() {
        if (this.currentPage > 1) {
          this.currentPage--;
        }
      }
    }
  };
  </script>
  
  <style scoped>
 
  .container {
    padding: 24px;
    background-color: #f3f4f6;
    min-height: 100vh;
  }
  
 
  .page-title {
    font-size: 2rem;
    font-weight: bold;
    text-align: center;
    margin-bottom: 32px;
  }
  
  
  .job-card {
    background: #ffffff;
    padding: 24px;
    margin-bottom: 24px;
    border-radius: 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
  }
  
  .job-card:hover {
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
  
 
  .job-info {
    display: flex;
    align-items: center;
    gap: 16px;
  }
  
  .company-logo {
    width: 56px;
    height: 56px;
    border-radius: 50%;
    object-fit: cover;
  }
  
  .job-title {
    font-size: 1.2rem;
    font-weight: 600;
    color: #1f2937;
  }
  
  .job-location {
    font-size: 0.9rem;
    color: #6b7280;
    margin-top: 4px;
  }
  
  .job-salary {
    font-weight: 600;
    color: #374151;
  }
  
  
  .job-action {
    display: flex;
    align-items: center;
    gap: 16px;
  }
  
  .expired-text {
    color: #ef4444;
    font-size: 0.9rem;
    font-weight: 600;
  }
  
  .active-text {
    color: #10b981;
    font-size: 0.9rem;
    font-weight: 600;
  }
  
  .apply-button {
    padding: 8px 16px;
    background-color: #3b82f6;
    color: white;
    font-weight: 600;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .apply-button:hover {
    background-color: #2563eb;
  }
  
 
  .pagination {
    display: flex;
    justify-content: center;
    margin-top: 40px;
    gap: 24px;
  }
  
  .pagination-button {
    padding: 10px 20px;
    background-color: #d1d5db;
    color: #374151;
    font-weight: 600;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .pagination-button:hover {
    background-color: #9ca3af;
  }
  
  .pagination-button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  </style>
  