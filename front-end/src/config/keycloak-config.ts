const keycloakConfig = {
    url: import.meta.env.VITE_KEYCLOAK_URL || 'http://localhost:8180',
    realm: import.meta.env.VITE_KEYCLOAK_REALM || 'vue',
    clientId: import.meta.env.VITE_KEYCLOAK_CLIENT_ID || 'vuejs'
}
  
export default keycloakConfig
