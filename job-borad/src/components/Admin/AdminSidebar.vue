<template>
    <div class="sidebar bg-dark text-white">
      <div class="sidebar-sticky pt-3">
        <ul class="nav flex-column">
          <li class="nav-item">
            <router-link class="nav-link" to="/admin/jobs-approval">
              <i class="fas fa-check-circle me-2"></i> Jobs Approval
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/admin/all-jobs">
              <i class="fas fa-briefcase me-2"></i> All Jobs
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/admin/employers">
              <i class="fas fa-building me-2"></i> Employers
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/admin/candidates">
              <i class="fas fa-users me-2"></i> Candidates
            </router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" @click.prevent="logout">
              <i class="fas fa-sign-out-alt me-2"></i> Logout
            </a>
          </li>         
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AdminSidebar',
    methods: {
      logout() {
        localStorage.removeItem('token');
          localStorage.removeItem('employer_id');
          localStorage.removeItem('user');
          this.$router.push({ name: 'Login' });
          this.$emit('logout');
          return;
      }
    }
  }
  </script>
  
  <style scoped>
  .sidebar {
    position: fixed;
    top: 56px;
    bottom: 0;
    left: 0;
    z-index: 100;
    width: 250px;
    padding: 20px;
    overflow-x: hidden;
    overflow-y: auto;
    box-shadow: inset -1px 0 0 rgba(0, 0, 0, .1);
  }
  
  .nav-link {
    color: rgba(255, 255, 255, 0.75);
    padding: 0.75rem 1rem;
    border-radius: 4px;
    margin-bottom: 5px;
  }
  
  .nav-link:hover, .router-link-active {
    color: white;
    background-color: rgba(255, 255, 255, 0.1);
  }
  
  .sidebar-sticky {
    position: relative;
    height: calc(100vh - 56px);
    padding-top: .5rem;
    overflow-x: hidden;
    overflow-y: auto;
  }
  </style>