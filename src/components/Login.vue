<template>
  <div class="login-container flex flex-col justify-center items-center h-screen bg-gray-900 text-white p-8 rounded-lg">
    <h1 class="text-3xl font-bold mb-6">Login</h1>
    <input v-model="email" placeholder="Email" class="input-field">
    <input v-model="password" placeholder="Password" type="password" class="input-field">
    <button @click="login" class="btn-login">Login</button>

    <h5 class="text-gray-400 mt-4">Don't have an account?</h5> 

    <router-link to="/signup" class="text-blue-500">Sign up</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async login() {
      try {
        const response = await this.$http.post('https://au-vi-backend.onrender.com/api/auth/login', {
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

.btn-login {
  @apply bg-blue-500 text-white px-4 py-2 rounded cursor-pointer;
}

.btn-login:hover {
  @apply bg-blue-600;
}
</style>
