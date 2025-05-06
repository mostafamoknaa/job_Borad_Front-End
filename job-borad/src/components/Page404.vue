<template>
    <div class="container not-found-container">
        <div class="row">
            <div class="col-md-6">
                <div class="content text-center mt-5">
                    <h1 class="page-title">Opps! Page not found</h1>
                    <div class="not-found-card">
                    <p>Something went wrong . it's look like this link is broken o the page is removed</p>
                    <router-link to="/" class="btn-home">Back toHome <i class="fa-solid fa-arrow-right ms-2"></i></router-link>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <img src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg" alt="404 Not Found" class="img-fluid" />
            </div>
        </div>

    </div>
  </template>
  
  <script setup>
  </script>
  
  <style scoped>
  .not-found-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 90vh;
    text-align: center;
  }
  
  .page-title {
    font-size: 3rem;
    color: #1d4ed8;
    margin-bottom: 1rem;
  }
  
  .not-found-card {
    background: #fff;
    padding: 2rem 3rem;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    animation: fadeIn 0.6s ease-in-out;
  }
  
  .not-found-card p {
    font-size: 1.2rem;
    color: #555;
    margin-bottom: 1.5rem;
  }
  
  .btn-home {
    display: inline-block;
    padding: 10px 20px;
    background-color: #1d4ed8;
    color: white;
    text-decoration: none;
    border-radius: 8px;
    transition: background-color 0.3s;
  }
  
  .btn-home:hover {
    background-color: #2563eb;
  }
  
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  </style>
  