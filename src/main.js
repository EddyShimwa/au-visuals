import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHeart, faShare, faComment } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueMasonry from 'vue-next-masonry' // Import Vue Masonry CSS
import VueLoaders from 'vue-loaders'
import '@fortawesome/fontawesome-free/css/all.css'

library.add(faHeart, faShare, faComment)

import App from './App.vue'
import Login from './components/Login.vue'
import Signup from './components/Signup.vue'
import AdminDashboard from './components/AdminDashboard.vue'
import 'vue-loaders/dist/vue-loaders.css';
import MainPage from './components/MainPage.vue'
import guestPage from './components/guestPage.vue'
import './index.css'

const routes = [
  { path: '/login', component: Login },
  { path: '/signup', component: Signup },
  { path: '/admin', component: AdminDashboard },
  { path: '/', component: MainPage },
  { path: '/images', component: guestPage}
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const requiresAdmin = to.matched.some(record => record.meta.requiresAdmin)
  if (requiresAdmin) {
    next('/login')
  } else {
    next()
  }
})

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router)
.use(VueLoaders)
// app.use(VueMasonry) // Use Vue Masonry CSS
app.mount('#app')
