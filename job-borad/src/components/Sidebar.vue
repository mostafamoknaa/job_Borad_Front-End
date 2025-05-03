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
                :class="{ 'active': activeItem === item.id }">
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
          { id: 'Candidatedashbord', label: 'OverView', icon: 'fas fa-home' },
          { id: 'appliedjobs', label: 'Applied Job', icon: 'fas fa-user' },
          { id: 'FavoriteJob', label: 'Favorite Job', icon: 'fas fa-bookmark' },
          { id: 'JobAlert', label: 'Job Alert', icon: 'fas fa-bell' },
          { id: 'Settings', label: 'Settings', icon: 'fas fa-cog' },
            { id: 'Logout', label: 'Logout', icon: 'fas fa-sign-out-alt' }
        ]
      },
    },
    data() {
      return {
        isCollapsed: false,
        activeItem: 'dashboard'
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
    color:rgb(97, 84, 84);
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
    color:rgb(97, 84, 84);
    text-decoration: none;
    transition: all 0.2s ease;
  }
  
  .sidebar-content .menu-item:hover {
    background-color:rgb(146, 146, 241);
  }
  
  .sidebar-content li.active .menu-item {
    background-color: #3498db;
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