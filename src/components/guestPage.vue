<template>
  <Header />
  <div v-if="loading" class="loading-container">
    <vue-loaders name="ball-spin-fade-loader" color="gray"></vue-loaders>
  </div>
  <div v-else id="galleria" class="masonry">
    <div v-for="image in images" :key="image.id" class="masonry-item">
      <img :src="image.src" />
    </div>
  </div>
  <Footer />
</template>


<script setup>
import { ref, onMounted } from 'vue';
import Header from './Header.vue';
import Footer from '../components/footer.vue'; 
let images = ref([]);
let loading = ref(true);

async function fetchImages() {
  try {
    const response = await fetch('https://au-vi-backend.onrender.com/api/images/all');
    const data = await response.json();
    images.value = data.images.map((image, index) => ({
      id: image._id,
      src: image.image,
    }));
    loading.value = false;
  } catch (error) {
    console.error('Error fetching images:', error);
  }
}

onMounted(() => {
  fetchImages().then(() => {
    window.Galleria.run('#galleria');
  });
});
</script>

<style scoped>
.masonry {
  column-count: 2;
  column-gap: 10px;
  padding: 2%;
}

.loading-container {
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.masonry-item {
  break-inside: avoid;
  margin-bottom: 8px;
  border: 5px solid rgba(255, 255, 255, 0.428);
  border-radius: 15px;
}

.masonry-item img {
  width: 100%;
  border-radius: 10px;
}
</style>

<style>
body {
 background-color: #000000
}
</style>