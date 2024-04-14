<template>
<header class="flex justify-between items-center w-full bg-black text-white p-4">
  <router-link to="/" class="text-white font-bold rounded px-4">
    <i class="fas fa-arrow-left"></i>
  </router-link>
  <img src="../assets/logo.png" alt="Logo" class="w-1/4 h-15" />
</header>
  </template>
  
  <script>
  export default {
    name: 'Header',
  };
  </script>
  
  <style scoped>
  header {
    padding: 10px;
  }
  </style>