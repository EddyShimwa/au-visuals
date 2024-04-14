<template>
  <div class="admin-dashboard-container flex flex-col justify-center items-center bg-gray-900 text-white p-8 rounded-lg h-screen">
    <h1 class="text-3xl font-bold mb-6">Admin Dashboard</h1>

    <!-- Add New Photo Form -->
    <div class="mb-8">
      <h2 class="text-xl font-semibold mb-4">Add New Photo</h2>
      <input type="file" @change="handleFileChange" class="mb-4">
      <button @click="uploadPhoto" :disabled="!selectedFile" class="btn-primary">Upload Photo</button>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedFile: null,
      cloudName: 'your_cloud_name', // Replace with your Cloudinary cloud name
      uploadPreset: 'your_upload_preset', // Replace with your Cloudinary upload preset
    };
  },
  methods: {
    handleFileChange(event) {
      this.selectedFile = event.target.files[0];
    },
    async uploadPhoto() {
      if (this.selectedFile) {
        try {
          const formData = new FormData();
          formData.append('file', this.selectedFile);
          formData.append('upload_preset', this.uploadPreset);

          const response = await fetch(`https://api.cloudinary.com/v1_1/${this.cloudName}/upload`, {
            method: 'POST',
            body: formData,
          });

          const data = await response.json();
          console.log('Upload success. Public ID:', data.public_id);
          // Handle successful upload here, such as saving the public_id to your database
        } catch (error) {
          console.error('Upload error:', error);
          // Handle upload error
        }
      }
    },
  },
};
</script>

<style scoped>
.admin-dashboard-container {
  max-width: 800px;
  margin: 0 auto;
}

.btn-primary {
  @apply bg-blue-500 text-white px-4 py-2 rounded cursor-pointer;
}

.btn-primary:hover {
  @apply bg-blue-600;
}
</style>
