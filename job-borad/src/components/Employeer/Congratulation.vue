<template>
    <div class="completion-wrapper">
      <div class="completion-card">
        <div class="icon-wrapper">
          <i class="fa-solid fa-check"></i> <!-- or replace with an image/icon -->
        </div>
        <h2>🎉 Congratulations, Your profile is 100% complete!</h2>
        <p>
          Donec hendrerit, ante mattis pellentesque eleifend, tortor urna malesuada ante, eget aliquam nulla augue hendrerit ligula. 
          Nunc mauris arcu, mattis sed sem vitae.
        </p>
        <div class="button-group">
          <button class="btn btn-light">View Dashboard</button>
          <button class="btn btn-primary">Post Job →</button>
        </div>
      </div>
      <footer class="footer">
        © 2021 Jobpilot - Job Board, All rights Reserved
      </footer>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ProfileCompletion'
  }
  </script>
  
  <style scoped>
  .completion-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    padding: 2rem;
    background-color: #f9fafb;
  }
  
  .completion-card {
    text-align: center;
    background: white;
    padding: 3rem;
    border-radius: 12px;
    box-shadow: 0 0 20px rgba(0,0,0,0.05);
    max-width: 600px;
    width: 100%;
  }
  
  .icon-wrapper {
    width: 60px;
    height: 60px;
    background: #e0f7fa;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1rem auto;
    font-size: 24px;
    color: #0d6efd;
  }
  
  h2 {
    font-size: 1.8rem;
    font-weight: 600;
    margin-bottom: 1rem;
  }
  
  p {
    font-size: 1rem;
    color: #6b7280;
    margin-bottom: 2rem;
  }
  
  .button-group {
    display: flex;
    gap: 1rem;
    justify-content: center;
  }
  
  .btn {
    padding: 0.75rem 1.5rem;
    border: none;
    border-radius: 8px;
    font-weight: 500;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .btn-light {
    background: #e2e8f0;
    color: #374151;
  }
  
  .btn-light:hover {
    background: #cbd5e1;
  }
  
  .btn-primary {
    background: #0d6efd;
    color: white;
  }
  
  .btn-primary:hover {
    background: #0b5ed7;
  }
  
  .footer {
    margin-top: 2rem;
    font-size: 0.875rem;
    color: #9ca3af;
    text-align: center;
  }
  </style>
  