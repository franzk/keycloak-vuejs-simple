const keycloakConfig = {
    url: import.meta.env.VITE_KEYCLOAK_URL || 'http://localhost:8180',
    realm: import.meta.env.VUE_APP_KEYCLOAK_REALM || 'vue',
    clientId: import.meta.env.VUE_APP_KEYCLOAK_CLIENT_ID || 'vuejs'
}
  
export default keycloakConfig
