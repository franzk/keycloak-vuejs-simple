<template>
  <div>
    <h1>Home Page</h1>
    <p>Welcome to the home page!</p>
    <button @click="logout">Logout</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useAuthStore } from '@/store/authStore'

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
<style scoped>
div {
  font-family: Arial, sans-serif;
  text-align: center;
  padding: 20px;
  background-color: #2e2e2e;
}

h1 {
  color: #e0e0e0;
  margin-bottom: 20px;
}

p {
  color: #b0b0b0;
  font-size: 1.1em;
  margin-bottom: 20px;
}

button {
  padding: 10px 20px;
  font-size: 1em;
  color: #fff;
  background-color: #444;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #666;
}
</style>