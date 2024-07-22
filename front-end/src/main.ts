// src/main.ts
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import pinia from './store/index'
import { useAuthStore } from './store/authStore'

const app = createApp(App)

app.use(router)
app.use(pinia)

const authStore = useAuthStore()
authStore.initKeycloak().then(() => {
  if (authStore.isAuthenticated) {
    app.mount('#app')
  } else {
    console.error('Authentication failed')
  }
})
