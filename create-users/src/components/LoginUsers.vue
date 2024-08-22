<template>
  <v-app>
    <v-container fluid fill-height class="login-container">
      <v-row no-gutters align="center" justify="center">
        <v-col cols="12" md="8" lg="6" xl="5">
          <v-card elevation="12" shaped class="login-card">
            <v-row no-gutters>
              <v-col cols="12" md="6" class="login-image-col">
                <div class="login-image-overlay"></div>
                <v-img
                  src="https://source.unsplash.com/random/600x800?nature"
                  gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
                  height="100%"
                  class="login-image"
                >
                  <div class="login-image-content">
                    <h1 class="text-h3 font-weight-bold white--text mb-4">Welcome Back</h1>
                    <p class="white--text">Login to access your account</p>
                  </div>
                </v-img>
              </v-col>
              <v-col cols="12" md="6" class="login-form-col">
                <v-card-text class="login-form">
                  <h2 class="text-h4 font-weight-bold mb-6">Login</h2>
                  <v-form @submit.prevent="login">
                    <v-text-field
                      v-model="email"
                      label="Email"
                      prepend-inner-icon="mdi-email"
                      type="email"
                      color="primary"
                      class="mb-4"
                      outlined
                      shaped
                    ></v-text-field>
                    <v-text-field
                      v-model="password"
                      label="Password"
                      prepend-inner-icon="mdi-lock"
                      :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                      :type="showPassword ? 'text' : 'password'"
                      @click:append="showPassword = !showPassword"
                      color="primary"
                      class="mb-6"
                      outlined
                      shaped
                    ></v-text-field>
                    <v-btn
                      type="submit"
                      color="primary"
                      x-large
                      block
                      rounded
                      class="mb-4"
                      @click="createUser()"
                    >
                      Iniciar Sesion
                    </v-btn>
                    <v-row align="center" class="mb-4">
                      <v-col cols="5">
                        <v-divider></v-divider>
                      </v-col>
                      <v-col cols="2" class="text-center">OR</v-col>
                      <v-col cols="5">
                        <v-divider></v-divider>
                      </v-col>
                    </v-row>
                    <v-btn
                      dark
                      v-bind="attrs"
                      v-on="on"
                      outlined
                      
                      color="blue darken-1"
                        text
                    >
                      Crear Usuario
                    </v-btn>
                    <!-- <v-btn
                      color="red darken-1"
                      x-large
                      block
                      rounded
                      class="white--text"
                    >
                      <v-icon left>mdi-google</v-icon>
                      Login with Google
                    </v-btn> -->
                  </v-form>
                </v-card-text>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <!-- <CreateUser/> -->

  </v-app>
</template>

<script>
/* import CreateUser from './components/CreateUser'; */
/* import CreateUser from './components/CreateUser.vue'; */
import axios from 'axios';

export default {
  name:'LoginUsers',
  /* components: {
    CreateUser
  }, */
  data: () => ({
    email: '',
    password: '',
    showPassword: false,
  }),
  methods: {
    login() {
      console.log('Login attempt:', this.email, this.password);
    },
    async createUser() {
      try {
        /* const response = await axios.post('http://185.209.230.19:8081/user', params); */
        const response = await axios.post('http://185.209.230.19:8081/user/login', 
        {
          userName: this.email,
          userPassword: this.password
        });
        console.log(response);
      } catch (error) {
        this.error = 'Error al acceder: ' + error.message;
      }
    },
  },
};
</script>

<style scoped>
.login-container {
  background-color: #f5f5f5;
}

.login-card {
  overflow: hidden;
  transition: box-shadow 0.3s ease-in-out;
}

.login-card:hover {
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1) !important;
}

.login-image-col {
  position: relative;
}

.login-image {
  clip-path: polygon(0 0, 100% 0, 85% 100%, 0% 100%);
}

.login-image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(19,84,122,0.8) 0%, rgba(128,208,199,0.8) 100%);
  clip-path: polygon(0 0, 100% 0, 85% 100%, 0% 100%);
  z-index: 1;
}

.login-image-content {
  position: relative;
  z-index: 2;
  padding: 2rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.login-form-col {
  display: flex;
  align-items: center;
}

.login-form {
  padding: 2rem;
}

@media (max-width: 960px) {
  .login-image {
    clip-path: none;
    height: 200px !important;
  }

  .login-image-overlay {
    clip-path: none;
  }

  .login-image-content {
    padding: 1rem;
  }

  .login-form {
    padding: 1rem;
  }
}
</style>