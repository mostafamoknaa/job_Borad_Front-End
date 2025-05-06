<template>
    <div class="page-wrapper d-flex align-items-start justify-content-center pt-5">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-10">
            <SmallNav />
  
            <div class="row justify-content-center mt-5">
              <div class="d-flex align-items-center justify-content-between mb-4">
                <span class="fw-bold">Social Links</span>
                <div class="progress custom-progress">
                  <div class="progress-bar" role="progressbar" style="width: 75%;" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
  
              
              <div v-if="errorMessage" class="alert alert-danger" role="alert">
                {{ errorMessage }}
              </div>
  
              <div class="social-links">
                <h2 class="section-title mb-4">Social Links</h2>
  
                <div class="social-links-list">
                  <div class="social-link-item mb-3" v-for="(link, index) in socialLinks" :key="index">
                    <div class="input-group">
                      <select v-model="link.name" class="form-select">
                        <option disabled value="">Select...</option>
                        <option>Facebook</option>
                        <option>Twitter</option>
                        <option>LinkedIn</option>
                        <option>Instagram</option>
                        <option>GitHub</option>
                      </select>
                      <input type="text" v-model="link.url" placeholder="URL" class="form-control" />
                      <button class="btn btn-danger" @click="removeLink(index)">
                        <i class="fa-solid fa-trash"></i>
                      </button>
                    </div>
                  </div>
                </div>
  
                <button class="btn btn-secondary mt-3" @click="addLink">
                  <i class="fa-solid fa-plus me-1"></i> Add Link
                </button>
  
                <div class="buttons d-flex align-items-center mt-4">
                  <button type="button" class="btn btn-outline-secondary me-3"  @click="previousStep">>
                    Previous
                  </button>
                  <button class="btn btn-primary" @click="saveChanges">
                    Save & Next <i class="fa-solid fa-arrow-right ms-2"></i> 
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
  import SmallNav from './SmallNav.vue'
  import { ref } from 'vue';
  
  export default {
    name: 'SocialLink',
    components: {
      SmallNav,
    },
    setup(_, { emit, root }) {
      const socialLinks = ref([
        { name: '', url: '' },
      ]);
  
      const errorMessage = ref('');
  
      const addLink = () => {
        socialLinks.value.push({ name: '', url: '' });
      };
  
      const removeLink = (index) => {
        socialLinks.value.splice(index, 1);
      };
  
      const saveChanges = () => {
 
        for (const link of socialLinks.value) {
          if (!link.name || !link.url.trim()) {
            errorMessage.value = 'Please select a platform and enter a URL for each link.';
            return;
          }
          if (!isValidURL(link.url)) {
            errorMessage.value = `Invalid URL for ${link.name}. Please enter a valid URL.`;
            return;
          }
        }
  
        errorMessage.value = '';

        console.log('Saving...', socialLinks.value);
  
        window.location.href = '/employeer/contact';
      };
  
      const isValidURL = (url) => {
        const pattern = new RegExp('^(https?:\\/\\/)?'+
          '((([a-z\\d]([a-z\\d-]*[a-z\\d])*))\\.)+([a-z]{2,})'+
          '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+
          '(\\?[;&a-z\\d%_.~+=-]*)?'+
          '(\\#[-a-z\\d_]*)?$','i');
        return !!pattern.test(url);
      };
  
      const previousStep = () => {
        history.back();
      };
  
      return {
        socialLinks,
        addLink,
        removeLink,
        saveChanges,
        errorMessage,
        previousStep,
      };
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
  
  .input-group select, 
  .input-group input {
    flex: 1;
    min-width: 120px;
  }
  
  .input-group .btn {
    margin-left: 5px;
  }
  
  .section-title {
    font-size: 1.5rem;
    font-weight: bold;
  }
  
  .buttons {
    margin-top: 20px;
  }
  </style>
  