<template>
    <footer v-show="isScrolledToEnd" class="footer">
      <p>© {{ currentYear }} Audi Visuals. All rights reserved.</p>
    </footer>
  </template>
  
  <script>
  import { ref, onMounted, onUnmounted } from 'vue';
  
  export default {
    name: 'Footer',
    setup() {
      const isScrolledToEnd = ref(false);
      const currentYear = ref(new Date().getFullYear());
  
      const checkScroll = () => {
        const nearBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 200;
        isScrolledToEnd.value = nearBottom;
      };
  
      onMounted(() => {
        window.addEventListener('scroll', checkScroll);
      });
  
      onUnmounted(() => {
        window.removeEventListener('scroll', checkScroll);
      });
  
      return { isScrolledToEnd, currentYear };
    },
  };
  </script>
  
  <style scoped>
  .footer {
    background-color: #9b9b9b21;
    color: rgb(138, 138, 138);
    text-align: center;
    padding: 10px;
    position: sticky;
    bottom: 0;
    width: 100%;
  }
  </style>