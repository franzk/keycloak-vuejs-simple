<template>
  <div>
    <h1>Home Page</h1>
    <p>Welcome to the home page!</p>
    <button @click="logout">Logout</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useAuthStore } from '../store/authStore'

export default defineComponent({
  name: 'Home',
  setup() {
    const authStore = useAuthStore();

    const logout = () => {
      authStore.logout()
    }

    return {
      logout
    }
  }
})
</script>
