<template>
    <div class="container fluid p-0 mt-5">
      <div class="row">
        <div class="col-md-3">
          <Sidebar />
        </div>
        <div class="col-md-9">
          <h1 class="page-title">Setting</h1>
          <div class="card"><div class="tabs">
            <router-link 
              to="/Settings" 
              class="tab" 
              :class="{ active: $route.path === '/Settings' }"
            >
              <i class="fa-solid fa-user me-1"></i> Personal
            </router-link>
          
            <router-link 
              to="/SettingProfile" 
              class="tab" 
              :class="{ active: $route.path === '/SettingProfile' }"
            >
              <i class="fa-solid fa-id-card me-1"></i> Profile
            </router-link>
          
          </div>
          <form @submit.prevent="saveChanges">
            <div class="row mb-3">
              <div class="col-md-6 mb-3">
                <label class="form-label">Nationality</label>
                <select v-model="form.Nationality" class="form-select">
                  <option disabled value="">Select...</option>
                  <option>Egypt</option>
                  <option>USA</option>
                  <option>Germany</option>
                </select>
              </div>
    
              <div class="col-md-6 mb-3">
                <label class="form-label">Date of Birth</label>
                <input v-model="form.dob" type="date" class="form-control">
              </div>
            </div>
    
            <div class="row mb-3">
              <div class="col-md-6 mb-3">
                <label class="form-label">Gender</label>
                <select v-model="form.gender" class="form-select">
                  <option disabled value="">Select...</option>
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </div>
    
              <div class="col-md-6 mb-3">
                <label class="form-label">Marital Status</label>
                <select v-model="form.marital_status" class="form-select">
                  <option disabled value="">Select...</option>
                  <option>Single</option>
                  <option>Married</option>
                </select>
              </div>
            </div>
    
    
            <div class="mb-4">
              <label class="form-label">Biography</label>
              <textarea v-model="form.bio" rows="6" class="form-control" placeholder="Write down your biography here. Let the employers know who you are..."></textarea>
            </div>
    
            <div class="text-start">
              <button type="submit" class="btn btn-primary">Save Changes</button>
            </div>
          </form>
          
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import Sidebar from './Sidebar.vue'
  import interceptor from '../../Interceptor/getaxiox';
  
  export default {
    components: {
      Sidebar
    },
    name: "SettingPage",
    data() {
      return {
        activeTab: 'Settings',
        activeDropdown: null,
        showModal: false,
        form: {
          Nationality: '',
            gender: '',
            marital_status: '',
            bio: ''
        },
      };
    },
    methods: {
    async saveChanges() {
      try {
        const response = await interceptor.put('/candidates', this.form);
        console.log(response.data);
        this.$router.push({ name: 'Candidatedashbord' });
      } catch (error) {
        console.error(error);
        
      }
    },
    }
  };
  </script>
  
  <style scoped>
  .container {
    max-width: 1200px;
    margin: auto;
    padding: 2rem;
  }
  .page-title {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 2rem;
  }
  .card {
    background: white;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  }
  .tabs {
    display: flex;
    gap: 1.5rem;
    border-bottom: 1px solid #ddd;
    margin-bottom: 2rem;
  }
  .tab {
    padding-bottom: 0.5rem;
    font-weight: 500;
    color: gray;
    background: none;
    border: none;
    cursor: pointer;
  }
  .tab.active {
    color: #1d4ed8;
    border-bottom: 2px solid #1d4ed8;
  }
  .form-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }
  .input-group {
    display: flex;
    gap: 1.5rem;
    margin-bottom: 1.5rem;
  }
  
  .input-group > * {
    flex: 1;
  }
  
  .info-fields {
    flex-direction: column;
    gap: 1rem;
  }
  .input {
    border: 1px solid #ccc;
    padding: 10px;
    border-radius: 8px;
    width: 100%;
  }
  .input-wrapper {
    position: relative;
  }
  .input-wrapper .icon {
    position: absolute;
    left: 15px;
    top: 50%;
    transform: translateY(-50%);
    color: gray;
    font-size: 1rem;
  }
  .input-wrapper .input {
    padding-left: 40px;
  }
  .save-btn-container {
    margin-top: 2rem;
  }
  .save-btn {
    background: #1d4ed8;
    color: white;
    padding: 10px 30px;
    border-radius: 8px;
    border: none;
    font-weight: bold;
    cursor: pointer;
  }
 
  .input-field {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-top: 10px;
  }
  </style>
  