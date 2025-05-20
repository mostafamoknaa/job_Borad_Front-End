<template>
    <div class="position-relative">
      <button class="btn btn-light" @click="toggleDropdown">
        🔔 <span v-if="unreadCount" class="badge bg-danger">{{ unreadCount }}</span>
      </button>
  
      <div v-if="showDropdown" class="dropdown-menu show">
        <div v-for="(n, index) in notifications" :key="index" class="dropdown-item">
          {{ n.data.message }}
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import interceptor from '../../Interceptor/getaxiox'
  
  const notifications = ref([])
  const unreadCount = ref(0)
  const showDropdown = ref(false)
  
  const fetchNotifications = async () => {
    try {
      const res = await interceptor.get('/notifications')
      notifications.value = res.data.all
      unreadCount.value = res.data.unread.length
    } catch (err) {
      console.error(err)
    }
  }
  
  const toggleDropdown = () => {
    showDropdown.value = !showDropdown.value
  }
  
  onMounted(fetchNotifications)
  </script>
  
  <style scoped>
  .dropdown-menu {
    position: absolute;
    right: 0;
    top: 100%;
    min-width: 200px;
    padding: 10px;
    background: white;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  }
  </style>
  