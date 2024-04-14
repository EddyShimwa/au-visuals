<template>
  <div class="signup-container flex flex-col justify-center items-center h-screen bg-gray-900 text-white p-8 rounded-lg">
    <h1 class="text-3xl font-bold mb-6">Signup</h1>
    <input v-model="username" placeholder="Username" class="input-field">
    <input v-model="email" placeholder="Email" class="input-field">
    <input v-model="password" placeholder="Password" type="password" class="input-field">
    <input v-model="confirmPassword" placeholder="Confirm Password" type="password" class="input-field">

    <button @click="signup" class="btn-signup">Signup</button>
    <h5 class="text-gray-400 mt-4">Already have an account?</h5>
    
    <router-link to="/login" class="text-blue-500">Login</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  },
  methods: {
    async signup() {
      try {
        const response = await this.$http.post('https://au-vi-backend.onrender.com/api/auth/signup', {
          username: this.username,
          email: this.email,
          password: this.password
        })
        this.$store.commit('setUser', response.data)
      } catch (error) {
        console.error(error)
      }
    }
  }
}
</script>

<style scoped>
.input-field {
  @apply bg-gray-800 text-white px-4 py-2 mb-4 rounded;
}

.btn-signup {
  @apply bg-blue-500 text-white px-4 py-2 rounded cursor-pointer;
}

.btn-signup:hover {
  @apply bg-blue-600;
}
</style>
