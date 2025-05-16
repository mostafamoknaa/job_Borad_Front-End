<template>
    <div v-if="data.last_page > 1" class="pagination-container mt-4">
      <nav aria-label="Page navigation">
        <ul class="pagination justify-content-center">
          <li class="page-item" :class="{ disabled: data.current_page === 1 }">
            <a class="page-link" href="#" @click.prevent="changePage(1)">First</a>
          </li>
          <li class="page-item" :class="{ disabled: data.current_page === 1 }">
            <a class="page-link" href="#" @click.prevent="changePage(data.current_page - 1)">Previous</a>
          </li>
          
          <li v-for="page in pages" :key="page" class="page-item" :class="{ active: page === data.current_page }">
            <a class="page-link" href="#" @click.prevent="changePage(page)">{{ page }}</a>
          </li>
          
          <li class="page-item" :class="{ disabled: data.current_page === data.last_page }">
            <a class="page-link" href="#" @click.prevent="changePage(data.current_page + 1)">Next</a>
          </li>
          <li class="page-item" :class="{ disabled: data.current_page === data.last_page }">
            <a class="page-link" href="#" @click.prevent="changePage(data.last_page)">Last</a>
          </li>
        </ul>
      </nav>
      <div class="text-center text-muted">
        Showing {{ data.from }} to {{ data.to }} of {{ data.total }} entries
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      data: {
        type: Object,
        required: true
      }
    },
    computed: {
      pages() {
        const range = [];
        const total = this.data.last_page;
        const current = this.data.current_page;
        const delta = 2;
        
        for (let i = Math.max(2, current - delta); i <= Math.min(total - 1, current + delta); i++) {
          range.push(i);
        }
        
        if (current - delta > 2) {
          range.unshift('...');
        }
        if (current + delta < total - 1) {
          range.push('...');
        }
        
        range.unshift(1);
        if (total !== 1) range.push(total);
        
        return range;
      }
    },
    methods: {
      changePage(page) {
        if (page === '...') return;
        this.$emit('pagination-change-page', page);
      }
    }
  }
  </script>
  
  <style scoped>
  .pagination-container {
    margin-bottom: 20px;
  }
  
  .page-item.active .page-link {
    background-color: #0d6efd;
    border-color: #0d6efd;
  }
  
  .page-link {
    color: #0d6efd;
  }
  
  .page-item.disabled .page-link {
    color: #6c757d;
  }
  </style>