<template>
    <div class="admin-dashboard">
      <AdminNavbar />
      <div class="container-fluid">
        <div class="row">
          <AdminSidebar />
          <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <router-view />
          </main>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import AdminNavbar from './AdminNavbar.vue'
  import AdminSidebar from './AdminSidebar.vue'
  
  export default {
    components: {
      AdminNavbar,
      AdminSidebar
    }
  }
  </script>
  
  <style scoped>
  .admin-dashboard {
    min-height: 100vh;
    background-color: #f8f9fa;
  }
  
  main {
    padding-top: 1.5rem;
    padding-bottom: 2rem;
  }
  </style>