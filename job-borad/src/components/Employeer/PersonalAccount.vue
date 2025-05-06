<template>
    <div class="page-wrapper d-flex align-items-start justify-content-center pt-5">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-10">
            <SmallNav />
            <div class="row justify-content-center mt-5">
                <div class="d-flex align-items-center justify-content-between mb-4">
                    <span class="fw-bold">Logo and Banner image</span>
                    <div class="progress custom-progress">
                      <div class="progress-bar" role="progressbar" style="width: 0%;" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>                  
              <div class="col-md-5 mb-4">
                <div class="card shadow-sm">
                  <div class="card-body text-center">
                    <h4 class="card-title mb-3">Upload Logo</h4>
                    <div class="upload-box">
                      <div class="upload-preview">
                        <i class="fas fa-user"></i>
                      </div>
                      <input type="file" ref="logoInput" class="hidden" @change="handleFileUpload('logo')">
                      <button type="button" class="upload-button" @click="$refs.logoInput.click()">
                        Browse photo or drop here
                      </button>
                      <p class="upload-note">Recommended size: 400px+. Max size: 5MB.</p>
                    </div>
                  </div>
                </div>
              </div>
  
              <div class="col-md-7 mb-4">
                <div class="card shadow-sm">
                  <div class="card-body text-center">
                    <h4 class="card-title mb-3">Upload Banner</h4>
                    <div class="upload-box">
                      <div class="upload-preview">
                        <i class="fas fa-image"></i>
                      </div>
                      <input type="file" ref="bannerInput" class="hidden" @change="handleFileUpload('banner')">
                      <button type="button" class="upload-button" @click="$refs.bannerInput.click()">
                        Browse photo or drop here
                      </button>
                      <p class="upload-note">Recommended size: 1200x300px+. Max size: 5MB.</p>
                    </div>
                  </div>
                </div>            
              </div>                
            </div>
  
            <form class="form-section mt-4">
              <div class="form-group mb-4">
                <label for="companyName" class="form-label">Company Name</label>
                <input type="text" id="companyName" class="form-control" placeholder="Enter your company name" />
              </div>
              <div class="form-group mb-4">
                <label for="aboutus" class="form-label">About Us</label>
                <textarea id="aboutus" rows="5" class="form-control" placeholder="Tell us about your company..."></textarea>
              </div>
              <div class="d-flex justify-content-end">
                <button type="submit" class="btn btn-primary btn-lg">
                  Save and Next <i class="fa-solid fa-arrow-right ms-2"></i>
                </button>
              </div>
            </form>
  
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import SmallNav from './SmallNav.vue'
  
  export default {
    name: 'PersonalAccount',
    components: {
      SmallNav,
    },
    methods: {
      handleFileUpload(type) {
        console.log(`Uploading ${type}`);
      }
    }
  }
  </script>
  
  <style scoped>
  .custom-progress {
    width: 200px; 
    height: 8px;
    background-color: #e0e0e0;
    border-radius: 50px;
    overflow: hidden;
  }
  
  .custom-progress .progress-bar {
    background-color: #0d6efd;
    height: 100%;
    transition: width 0.4s ease;
  }
  
  .page-wrapper {
    min-height: 100vh;
    background: #f8f9fa;
  }
  
  .container {
    max-width: 1100px;
  }
  
  .upload-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 2px dashed #ccc;
    border-radius: 12px;
    padding: 30px;
    background-color: #fafafa;
    cursor: pointer;
    transition: 0.3s ease;
  }
  
  .upload-box:hover {
    background-color: #f0f0f0;
  }
  
  .upload-preview {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #ececec;
    margin-bottom: 10px;
  }
  
  .upload-preview i {
    font-size: 60px;
    color: #aaa;
  }
  
  .upload-button {
    margin-top: 12px;
    padding: 10px 25px;
    color:black;
    border: none;
    border-radius: 8px;
    font-weight: 500;
    transition: background-color 0.3s;
  }
  
  .upload-note {
    margin-top: 10px;
    font-size: 13px;
    color: #777;
    text-align: center;
  }
  
  .hidden {
    display: none;
  }
  
  /* Form */
  .form-label {
    font-weight: 600;
    font-size: 16px;
  }
  
  .form-control {
    border-radius: 8px;
    padding: 10px 15px;
    font-size: 15px;
  }
  
  .btn-primary {
    border-radius: 8px;
    padding: 10px 20px;
    font-weight: 600;
    transition: background-color 0.3s;
  }
  
  .btn-primary:hover {
    background-color: #084298;
  }
  </style>
  