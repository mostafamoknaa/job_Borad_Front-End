<template>
    <div class="sidebar" :class="{ 'collapsed': isCollapsed }">
      <div class="sidebar-header">
        <h1 v-if="!isCollapsed">{{ title }}</h1>
        <button class="toggle-btn" @click="toggleSidebar">
          <span v-if="isCollapsed">›</span>
          <span v-else>‹</span>
        </button>
      </div>
      
      <div class="sidebar-content">
        <nav>
          <ul>
            <li v-for="(item, index) in menuItems" :key="index" 
                :class="{ 'active': activeItem == item.id }">
              <a @click="selectItem(item.id)" href="#" class="menu-item">
                <i :class="item.icon"></i>
                <span v-if="!isCollapsed">{{ item.label }}</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Sidebar',
    props: {
      title: {
        type: String,
        default: 'Candidate Dashboard'
      },
      menuItems: {
        type: Array,
        default: () => [
          { id: 'employeer/dashboard', label: 'OverView', icon: 'fas fa-home' },
          { id: 'appliedjobs', label: 'Employeer Profile', icon: 'fas fa-user' },
          { id: 'employeer/selectplan', label: 'Post a Job', icon: 'fas fa-bookmark' },
          { id: 'jobalert', label: 'My Jobs', icon: 'fas fa-bell' },
          { id: 'Settings', label: 'Saved Candidate', icon: 'fas fa-cog' },
          { id: 'FavoriteJob', label: 'Post a Job', icon: 'fas fa-bookmark' },
          { id: 'jobalert', label: 'Plans & Billing', icon: 'fas fa-bell' },
          { id: 'Settings', label: 'All Companies', icon: 'fas fa-cog' },
          { id: 'Settings', label: 'Settings', icon: 'fas fa-cog' },
          { id: 'Logout', label: 'Logout', icon: 'fas fa-sign-out-alt' }
        ]
      },
    },
    data() {
      return {
        isCollapsed: false,
        activeItem: 'Candidatedashbord'
      }
    },
    computed: {
    activeItem() {
      return this.$route.name;  
    }
  },
    methods: {
      toggleSidebar() {
        this.isCollapsed = !this.isCollapsed;
        this.$emit('toggle', this.isCollapsed);
      },
      selectItem(id) {
        this.activeItem = id;
        console.log(id);
        console.log(this.activeItem);
        this.$emit('item-selected', id);
        this.$router.push({ name: this.activeItem });
      }
    }
  }
  </script>
  
  <style scoped>
  .sidebar {
    display: flex;
    flex-direction: column;
    width: 250px;
    height: 100vh;
    color:black;
    transition: all 0.3s ease;
  }
  
  .sidebar.collapsed {
    width: 60px;
  }
  
  .sidebar-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    border-bottom: 1px solid #34495e;
  }
  
  .sidebar-header h1 {
    margin: 0;
    font-size: 1.4rem;
    font-weight: 600;
  }
  
  .toggle-btn {
    background: none;
    border: none;
    color: #ecf0f1;
    font-size: 1.5rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
  }
  
  .sidebar-content {
    flex: 1;
    overflow-y: auto;
  }
  
  .sidebar-content ul {
    padding: 0;
    list-style-type: none;
    margin: 0;
  }
  
  .sidebar-content li {
    margin: 0;
  }
  
  .sidebar-content .menu-item {
    display: flex;
    align-items: center;
    padding: 15px 20px;
    color:gray;
    text-decoration: none;
    transition: all 0.2s ease;
  }
  
  .sidebar-content .menu-item:hover {
    background-color:rgb(223, 223, 248);
  }
  
  .sidebar-content li.active .menu-item {
    background-color: #b1daf5;
    color:rgb(135, 135, 228);
  }
  
  .sidebar-content .menu-item i {
    margin-right: 15px;
    width: 20px;
    text-align: center;
  }
  
  .sidebar.collapsed .menu-item span {
    display: none;
  }
  
  .sidebar-footer {
    padding: 15px 20px;
    border-top: 1px solid #34495e;
    font-size: 0.8rem;
    color: #bdc3c7;
  }
  </style>