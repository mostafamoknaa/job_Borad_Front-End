<template>
    <div class="admin-dashboard">
      <AdminNavbar />
      <div class="container-fluid">
        <div class="row">
          <AdminSidebar />
          <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4 mt-5 pt-3">
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
  display: flex;
  flex-direction: column;
}

.container-fluid {
  flex-grow: 1;
  padding: 0;
}

.row {
  margin: 0;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
}

main.content-area {
  padding-top: 2rem;
  padding-bottom: 2rem;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  min-height: 100vh;
}

@media (max-width: 768px) {
  .row {
    flex-direction: column;
  }

  main.content-area {
    padding: 1rem;
    border-radius: 0;
    box-shadow: none;
  }
}
</style>
