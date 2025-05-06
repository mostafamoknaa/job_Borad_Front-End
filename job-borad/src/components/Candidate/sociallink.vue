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
            
              <router-link 
                to="/SocialLink" 
                class="tab" 
                :class="{ active: $route.path === '/SocialLink' }"
              >
                <i class="fa-solid fa-globe me-1"></i> Social Links
              </router-link>
            
              <router-link 
                to="/AccountSetting" 
                class="tab" 
                :class="{ active: $route.path === '/AccountSetting' }"
              >
                <i class="fa-solid fa-gear me-1"></i> Account Setting
              </router-link>
            </div>
            <div class="social-links">
                <h2 class="section-title">Social Links</h2>
                
                <div class="social-links-list">
                  <div class="social-link-item" v-for="(link, index) in socialLinks" :key="index">
                    <div class="input-group">
                        <select v-model="link.name" class="form-select">
                          <option disabled value="">Select...</option>
                          <option>Facebook</option>
                          <option>Twitter</option>
                          <option>LinkedIn</option>
                          <option>Instagram</option>
                          <option>GitHub</option>
                        </select>  
                      <input type="text" v-model="link.url" placeholder="URL" />
                      <button class="btn-remove" @click="removeLink(index)">
                        <i class="fa-solid fa-trash"></i>
                      </button>
                    </div>
                  </div>
                </div>
              
                <div class="buttons">
                  <button class="btn-add" @click="addLink">
                    <i class="fa-solid fa-plus me-1"></i> Add New Link
                  </button>
                  <button class="btn-save" @click="saveChanges">
                    <i class="fa-solid fa-floppy-disk me-1"></i> Save Changes
                  </button>
                </div>
              </div>
              
            </div>
        </div> 
    </div>
</div>      
</template>
<script>
import Sidebar from './Sidebar.vue';
import { useRouter } from 'vue-router';
import { ref } from 'vue';
export default{
    components: {
        Sidebar
    },
    name: 'SocialLink',
    setup() {
        const socialLinks = ref([
            { name: '', url: '' },
        ]);

        const addLink = () => {
            socialLinks.value.push({ name: '', url: '' });
        };

        const removeLink = (index) => {
            socialLinks.value.splice(index, 1);
        };

        const saveChanges = () => {
            console.log('Saving...', socialLinks.value);
        };

        return {
            socialLinks,
            addLink,
            removeLink,
            saveChanges,
        };
    }
}

</script>
<style scoped>
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
  .section-title {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
    color: #2d3748;
  }
  
  .social-links-list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  
  .social-link-item {
    background-color: #f9fafb;
    padding: 1rem;
    border: 1px solid #e2e8f0;
    border-radius: 8px;
  }
  
  .input-group {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }
  
  .input-group input {
    flex: 1;
    padding: 0.75rem;
    border: 1px solid #cbd5e0;
    border-radius: 30px;
    background-color: #fff;
  }
  
  .input-group input:focus {
    border-color: #3182ce;
    box-shadow: 0 0 0 2px rgba(66, 153, 225, 0.3);
    outline: none;
  }
  
  .btn-remove {
    background-color: #e53e3e;
    color: white;
    padding: 0.6rem 0.8rem;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    transition: background 0.3s;
  }
  
  .btn-remove:hover {
    background-color: #c53030;
  }
  
  .buttons {
    display: flex;
    gap: 1rem;
    margin-top: 2rem;
  }
  
  .btn-add,
  .btn-save {
    background-color: #3182ce;
    color: white;
    padding: 0.75rem 1.5rem;
    font-weight: 500;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background 0.3s;
  }
  
  .btn-add:hover,
  .btn-save:hover {
    background-color: #2b6cb0;
  }
  
</style>