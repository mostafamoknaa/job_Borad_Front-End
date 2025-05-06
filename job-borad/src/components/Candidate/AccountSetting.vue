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
            </div>
            <div class="settings-page">
                <section class="form-section">
                  <h2 class="section-title">Contact Info</h2>
                  <div class="form-group">
                    <label>Map Location</label>
                    <input type="text" v-model="user.mapLocation" placeholder="Map location" />
                    <label>Phone Number</label>
  
                    <div style="display: flex; gap: 10px;">
                      <select v-model="selectedPrefix" style="padding: 8px; border: 1px solid #ccc; border-radius: 4px;">
                        <option value="+1">+1 (USA)</option>
                        <option value="+44">+44 (UK)</option>
                        <option value="+966">+966 (Saudi Arabia)</option>
                        <option value="+20">+20 (Egypt)</option>
                        <option value="+91">+91 (India)</option>
                      </select>
                  
                      <input 
                        type="text"
                        v-model="phoneNumber"
                        placeholder="Phone number"
                        style="flex: 1; padding: 8px; border: 1px solid #ccc; border-radius: 4px;"
                      />
                    </div>
                    <label>Email</label>
                    <input type="email" v-model="user.email" placeholder="Email address" />
                  </div>
                  <button class="btn-save">Save Changes</button>
                </section>
            
                <section class="form-section">
                  <h2 class="section-title">Notification</h2>
                  <div class="form-group">
                    <div class="row">
                        <div class="col-md-6">
                            <label><input type="checkbox" v-model="notifications.shortlisted" /> Notify me when employers shortlisted me</label>
                        <label><input type="checkbox" v-model="notifications.savedProfile" /> Notify me when employers saved my profile</label>
                        <label><input type="checkbox" v-model="notifications.rejected" /> Notify me when employers rejected me</label>
                        <label><input type="checkbox" v-model="notifications.shortlisted" /> Notify me when employers shortlisted me</label>
                        <label><input type="checkbox" v-model="notifications.savedProfile" /> Notify me when employers saved my profile</label>
                        <label><input type="checkbox" v-model="notifications.rejected" /> Notify me when employers rejected me</label>
                            </div>    
                    </div>
                  </div>
                  <button class="btn-save">Save Changes</button>
                </section>
            
                <section class="form-section">
                  <h2 class="section-title">Job Alerts</h2>
                  <div class="form-group">
                    <label>Job Role</label>
                    <input type="text" v-model="jobAlerts.role" placeholder="Your job roles" />
                    <label>Location</label>
                    <input type="text" v-model="jobAlerts.location" placeholder="City, state, country name" />
                  </div>
                  <button class="btn-save">Save Changes</button>
                </section>

                <section class="form-section">
                  <h2 class="section-title">Profile Privacy</h2>
                  <div class="toggle-group">
                    <div class="form-check form-switch">
                        <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault">
                        <label class="form-check-label" for="flexSwitchCheckDefault">Yout Profile is Public Now</label>
                      </div>
                  </div>
                  <div class="toggle-group">
                    <div class="form-check form-switch">
                        <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked>
                        <label class="form-check-label" for="flexSwitchCheckChecked">Resume Private</label>
                      </div>
                  </div>
                </section>
            
                <section class="form-section">
                  <h2 class="section-title">Change Password</h2>
                  <div class="form-group">
                    <input type="password" v-model="passwords.current" placeholder="Current Password" />
                    <input type="password" v-model="passwords.newPassword" placeholder="New Password" />
                    <input type="password" v-model="passwords.confirmPassword" placeholder="Confirm Password" />
                  </div>
                  <button class="btn-save">Save Changes</button>
                </section>
            
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
    name: 'AccountSetting',
    setup() {

        const user = ref({
            phone: '',
            email: '',
            mapLocation: ''
        });
        const notifications = ref({
            shortlisted: false,
            savedProfile: false,
            rejected: false
        });
        const jobAlerts = ref({
            role: '',
            location: ''
        });
        const privacy = ref({
            profilePublic: false,
            resumePrivate: false
        });
        const passwords = ref({
            current: '',
            newPassword: '',
            confirmPassword: ''
        });
        const selectedPrefix = ref('+20');
        const phoneNumber = ref('');
        return {
            user,
            notifications,
            jobAlerts,
            privacy,
            passwords,
            selectedPrefix,
            phoneNumber,

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
.settings-page {
    max-width: 800px;
    margin: 2rem auto;
    padding: 2rem;
    background: #f9fafb;
    border-radius: 8px;
    border: 1px solid #e2e8f0;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
  
  .section-title {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 1rem;
  }
  
  .form-section {
    background: #fff;
    border: 1px solid #e2e8f0;
    padding: 1.5rem;
    margin-bottom: 2rem;
    border-radius: 8px;
  }
  
  .form-group {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  
  input[type="text"],
  input[type="email"],
  input[type="password"] {
    padding: 0.75rem;
    border: 1px solid #cbd5e0;
    border-radius: 6px;
  }
  
  .btn-save {
    margin-top: 1.5rem;
    background-color: #3182ce;
    color: white;
    padding: 0.75rem 1.5rem;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-weight: 500;
  }
  

</style>