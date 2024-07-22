// src/stores/authStore.ts
import { defineStore } from 'pinia'
import { ref } from 'vue'
import Keycloak from 'keycloak-js'

const keycloak = new Keycloak({
  url: 'http://localhost:8180',
  realm: 'vue',
  clientId: 'vuejs'
})

export const useAuthStore = defineStore('auth', () => {
  const isAuthenticated = ref<boolean>(false)
  const token = ref<string | null>(null)

  const initKeycloak = async () => {
    try {
      const authenticated = await keycloak.init({ onLoad: 'login-required' })
      if (authenticated) {
        isAuthenticated.value = true
        token.value = keycloak.token || null // Ensure token is never undefined
      } else {
        isAuthenticated.value = false
        token.value = null
      }
    } catch (error) {
      console.error('Failed to initialize Keycloak', error)
    }
  }

  const login = async () => {
    try {
      await keycloak.login()
    } catch (error) {
      console.error('Failed to login', error)
    }
  }

  const logout = async () => {
    try {
      await keycloak.logout()
      isAuthenticated.value = false
      token.value = null
    } catch (error) {
      console.error('Failed to logout', error)
    }
  }

  const checkAuthentication = () => {
    return isAuthenticated.value
  }

  return {
    isAuthenticated,
    token,
    initKeycloak,
    login,
    logout,
    checkAuthentication
  }
})
