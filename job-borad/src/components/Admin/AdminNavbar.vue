<template>
  <nav class="navbar navbar-dark bg-info fixed-top text-dark">
    <div class="container-fluid">
      <button class="navbar-toggler" type="button" @click="toggleSidebar">
        <span class="navbar-toggler-icon"></span>
      </button>
      <a class="navbar-brand text-center" href="#">Admin Dashboard</a>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    toggleSidebar() {
      const sidebar = document.querySelector('.sidebar');
      if (sidebar) {
        sidebar.classList.toggle('collapsed');
      }
    }
  }
}
</script>