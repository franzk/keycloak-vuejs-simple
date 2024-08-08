# Keycloak vuejs simple login

## Installation

### 1. clone this repository
```console 
git clone https://github.com/franzk/keycloak-vuejs-simple.git
```
### 2. Rename the .env.dist File
Rename the `docker/.env.dist` file to `docker/.env` and fill in the environment variables with values.  
You can use default or random values for the environment variables as their specific values are not crucial for the setup.

### 3. Set up Keycloak : 
Navigate to the docker directory and start Keycloak using Docker Compose:
```console 
cd docker
docker compose up
```

### 4. Set up VueJS :  
Navigate to the front-end directory, install dependencies, and run the development server:
```console 
cd ../front-end
pnpm install
pnpm run dev
```

### 5. Test the Application
Open your browser and go to http://localhost:8080.
- user : vueuser
- password : vuepass

## Explanation
In this project, Keycloak 25.0.2 imports an xml file that contains a basic realm export with one user  
Keycloak runs with a postges database  
The VueJS front-end connect to Keycloak via `keycloak-js` library

