<template>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12">
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                  <li class="nav-item">
                    <router-link 
                      to="/employeer/company" 
                      class="nav-link" 
                      active-class="active-link"
                    >
                      <i class="fa-solid fa-house"></i> Company Info
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link 
                      to="/employeer/job-post" 
                      class="nav-link" 
                      active-class="active-link"
                    >
                      <i class="fa-solid fa-briefcase"></i> Founding Info
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link 
                      to="/employeer/candidates" 
                      class="nav-link" 
                      active-class="active-link"
                    >
                      <i class="fa-solid fa-users"></i> Social Media Links
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link 
                      to="/employeer/setting" 
                      class="nav-link" 
                      active-class="active-link"
                    >
                      <i class="fa-solid fa-gear"></i> Contact
                    </router-link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>    
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'SmallNav',
  }
  </script>
  
  <style scoped>
  .nav-link {
    color: black;
    font-weight: 500;
    transition: 0.3s;
  }
  

  .nav-link:hover {
    color: #1d4ed8;
  }
  
 
  .active-link {
    color: #1d4ed8 !important;
    font-weight: 700;
    border-bottom: 2px solid #1d4ed8;
  }
  </style>
  