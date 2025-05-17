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
             
    <div class="dashboard">
      <div class="top-greeting">
        <h1>Hello, {{userName}} </h1>
        <p>Here is your daily activities and job alerts</p>
      </div>
  
      
      <div class="stats-cards">
        <div class="card text-center shadow-sm p-4 hover-shadow">
            <div class="d-flex justify-content-between align-items-center">
              <div>
                <h2 class="mb-1 fw-bold">589</h2>
                <p class="mb-0 text-muted">Applied Jobs</p>
              </div>
              <div class="text-primary fs-1">
                <i class="fas fa-briefcase"></i>
              </div>
            </div>
        </div>          
        <div class="card text-center shadow-sm p-4 hover-shadow">
                <div class="d-flex justify-content-between align-items-center">
                  <div>
                    <h2 class="fw-bold mb-1">238</h2>
                    <p class="text-muted mb-0">Favorite Jobs</p>
                  </div>
                  <div class="text-danger fs-1">
                    <i class="fas fa-heart"></i>
                  </div>
                </div>
        </div>
        <div class="card text-center shadow-sm p-4 hover-shadow">
                <div class="d-flex justify-content-between align-items-center">
                  <div>
                    <h2 class="fw-bold mb-1">574</h2>
                    <p class="text-muted mb-0">Job Alerts</p>
                  </div>
                  <div class="text-warning fs-1">
                    <i class="fas fa-bell"></i>
                  </div>
                </div>
        </div>
            </div>
    
      <div class="profile-alert">
        <div class="profile-info">
          <img src="https://i.pravatar.cc/50" alt="Profile" />
          <div>
            <h3>Your profile editing is not completed.</h3>
            <p>Complete your profile editing & build your custom Resume</p>
          </div>
        </div>
        <button class="edit-profile-btn" @click="goToSeeting">Edit Profile</button>
      </div>
  
     
      <div class="recently-applied">
        <div class="recently-applied-header">
          <h2>Recently Applied</h2>
          <button class="view-all-btn">
            View all →
          </button>
        </div>
  
        <div class="job-list">
          <div 
            v-for="job in jobs" 
            :key="job.id" 
            class="job-card"
          >
            <div class="job-info">
              <img :src="job.logo" alt="Logo" />
              <div>
                <h3>{{ job.title }}</h3>
                <div class="job-meta">
                  <span>{{ job.location }}</span>
                  <span>•</span>
                  <span>{{ job.salary }}</span>
                </div>
              </div>
            </div>
  
            <div class="job-tags">
              <span 
                v-for="tag in job.tags" 
                :key="tag" 
                class="tag"
              >
                {{ tag }}
              </span>
            </div>
  
            <div class="job-date">
              {{ job.dateApplied }}
            </div>
  
            <div class="job-status">
              ✔ Active
            </div>
  
            <button class="details-btn">
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
</div>
</div>
</div>

  </template>
  
  <script setup>
  import { ref } from 'vue';
  import Sidebar from './Sidebar.vue';
  import { useRouter } from 'vue-router';

  const userName = ref('')
  const userJson = localStorage.getItem('user')
  if (userJson) {
    const user = JSON.parse(userJson)
    userName.value = user.name 
    console.log('User name:', userName.value)
  }
const router = useRouter();
  const goToSeeting = () => {
  
    router.push('/Settings');
  };
  const jobs = [
    {
      id: 1,
      logo: "https://cdn-icons-png.flaticon.com/512/732/732200.png",
      title: "Networking Engineer",
      location: "Washington",
      salary: "$50k–80k/month",
      dateApplied: "Feb 2, 2019 19:28",
      tags: ["Remote"],
    },
    {
      id: 2,
      logo: "https://cdn-icons-png.flaticon.com/512/732/732228.png",
      title: "Product Designer",
      location: "Dhaka",
      salary: "$50k–80k/month",
      dateApplied: "Dec 7, 2019 23:26",
      tags: ["Full Time"],
    },
    {
      id: 3,
      logo: "https://cdn-icons-png.flaticon.com/512/732/732245.png",
      title: "Junior Graphic Designer",
      location: "Brazil",
      salary: "$50k–80k/month",
      dateApplied: "Feb 2, 2019 19:28",
      tags: ["Temporary"],
    },
    {
      id: 4,
      logo: "https://cdn-icons-png.flaticon.com/512/732/732221.png",
      title: "Visual Designer",
      location: "Wisconsin",
      salary: "$50k–80k/month",
      dateApplied: "Dec 7, 2019 23:26",
      tags: ["Contract Base"],
    },
  ];
  </script>
  
  <style scoped>
  .hover-shadow:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
    transition: 0.3s ease-in-out;
  }
  .dashboard {
    min-height: 100vh;
    background-color: #f4f6f8;
    padding: 40px 24px;
    font-family: sans-serif;
  }
  
  .top-greeting {
    max-width: 1200px;
    margin: 0 auto 32px;
  }
  
  .top-greeting h1 {
    font-size: 32px;
    font-weight: bold;
    color: #2d3748;
  }
  
  .top-greeting p {
    color: #718096;
  }
  
  .stats-cards {
    max-width: 1200px;
    margin: 0 auto 40px;
    display: grid;
    grid-template-columns: 1fr;
    gap: 24px;
  }
  
  @media (min-width: 768px) {
    .stats-cards {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  
  .stat-card {
    background: #ffffff;
    border-radius: 16px;
    padding: 24px;
    text-align: center;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .stat-card h2 {
    font-size: 32px;
    font-weight: bold;
    color: #2d3748;
  }
  
  .stat-card p {
    color: #718096;
    font-size: 14px;
  }
  
  .profile-alert {
    max-width: 1200px;
    margin: 0 auto 40px;
    background-color: #dbcbcb;
    border: 1px solid #fecaca;
    color:white;
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 24px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .profile-info {
    display: flex;
    align-items: center;
    gap: 16px;
  }
  
  .profile-info img {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    object-fit: cover;
  }
  
  .profile-info h3 {
    color: #b91c1c;
    font-weight: 600;
  }
  
  .profile-info p {
    color: #b91c1c;
    font-size: 14px;
  }
  
  .edit-profile-btn {
    background-color:white;
    color: red;
    padding: 10px 20px;
    border-radius: 12px;
    font-weight: 600;
    font-size: 14px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .edit-profile-btn:hover {
    background-color: #b91c1c;
  }
  
  .recently-applied {
    max-width: 1200px;
    margin: 0 auto;
    background: #ffffff;
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
  
  .view-all-btn {
    color: #2563eb;
    font-weight: 600;
    font-size: 14px;
    background: none;
    border: none;
    cursor: pointer;
  }
  
  .view-all-btn:hover {
    color: #1d4ed8;
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
    background-color: #f1f5f9;
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
    background-color: #eff6ff;
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
    background-color: #2563eb;
    color: #ffffff;
    padding: 8px 16px;
    border-radius: 8px;
    font-weight: 600;
    font-size: 14px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .details-btn:hover {
    background-color: #1d4ed8;
  }
  
  .footer {
    text-align: center;
    margin-top: 40px;
    color: #cbd5e1;
    font-size: 12px;
  }
  </style>
  