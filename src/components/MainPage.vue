<script>
import bgImage from '../assets/bg.jpg';
import logoImage from '../assets/Audi Visuals1.png';
import logo from '../assets/logo.png';

export default {
  data() {
    return {
      images: [],
      bgImage: bgImage,
      logoImage: logoImage,
      logo: logo
    }
  },
  methods: {
    getStarted() {
      // Navigate to the sign up page
      this.$router.push('/signup')
    },
    signIn() {
      // Navigate to the sign in page
      this.$router.push('/login')
    },
    continueAsGuest() {
      // Navigate to the guest page
      this.$router.push('/images')
    }
  },
  async created() {
    // ...
  }
}
</script>

<template>
  <div class="splash-page " :style="{ backgroundImage: `url(${bgImage})` }">
    <img :src="logo" alt="Logo" class="logo">

    <h1 class="intro">Welcome to Audi Visuals</h1>
    
    <button @click="getStarted" class="get-started">Get Started</button>
    <a @click="continueAsGuest" class="continue-as-guest text-white">
      <i class="fas fa-arrow-right animate-bounce"></i>
    </a>
  </div>
</template>

<style scoped>
.splash-page {
  width: 100%;
  height: 90vh;
  background-size: cover;
  display: flex;
  flex-direction: column;
}


@media (max-width: 600px) {
  .splash-page {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;
    padding: 10px;
  }
  .intro {
  text-align: center;
  display: flex;
  font-family: 'Poppins', sans-serif;
  font-size: 2em;
  color: #e3e3e3;
  margin-bottom: 20px;
  
}

.logo {
  width: 600px;

  margin-bottom: 20px;
}
.get-started {
  width: 50%;
  font-size: 20px;
  font-family: 'Poppins', sans-serif;
  background-color: #ebe7d8;
  color: rgb(0, 0, 0);
  padding: 10px 10px;
  border: none;
  border-radius: 5px;
  margin-bottom: 10px;
}
@keyframes bounce {
  0%, 100% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(10px);
  }
}

.animate-bounce {
  animation: bounce 1s infinite;
}
}
</style>