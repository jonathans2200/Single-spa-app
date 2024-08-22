<template>
   <div id="app-vue">
    <v-row justify="center">
      <v-dialog
        v-model="dialog"
        persistent
        max-width="600px"
      >
        <template v-slot:activator="{ on, attrs }">
  <v-btn
    v-bind="attrs"
    v-on="on"
    color="blue darken-1"
    class="white--text"
  >
    Crear Usuario
  </v-btn>
</template>
        <v-card>
          <v-card-title>
            <span class="text-h5">Creación de Usuarios</span>
          </v-card-title>
          <v-card-subtitle class="mt-1"> 
            <span class="text-h8">
              <strong>Campos obligatorios(
                <span class="red--text"> * </span>
              )</strong>
              
            </span>
            
          </v-card-subtitle>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col
                  cols="12"
                  sm="6"
                  md="6"
                >
                  <v-text-field
                    v-model="nombre"
                    placeholder="Ingrese sus nombres"
                    required
                    outlined
                  >
                  <template v-slot:label>
                    {{ "Nombres" }}
                    <span class="red--text"> * </span>
                  </template>
                  </v-text-field>
                </v-col>
                <v-col
                  cols="12"
                  sm="6"
                  md="6"
                >
                  <v-text-field
                    placeholder="Ingrese sus Apellidos"
                    hint="example of helper text only on focus"
                    outlined
                  >
                  <template v-slot:label>
                    {{ "Apellidos" }}
                    <span class="red--text"> * </span>
                  </template>
                  </v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    label="Email*"
                    required
                    outlined
                  ></v-text-field>
                </v-col>
                <!-- <v-col cols="12" sm="1">
                  <v-btn id="xmarkButton"  icon>
                    <v-icon id="xmarkIcon">fa-circle-xmark</v-icon>
                  </v-btn>
                </v-col> -->
                <v-col cols="12">
                  <v-text-field
                    v-model="password"
                    label="Password*"
                    type="password"
                    required
                    outlined
                  ></v-text-field>
                </v-col>
                <!-- <v-col
                  cols="12"
                  sm="6"
                >
                 
                </v-col>
                <v-col
                  cols="12"
                  sm="6"
                >
                  
                </v-col> -->
              </v-row>
            </v-container>
        <!--     <small>*indicates required field</small> -->
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="blue darken-1"
              text
              @click="dialog = false"
            >
              Cancelar
            </v-btn>
            <v-btn
              color="blue darken-1"
              text
              @click="createUser()"
            >
              Guardar
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
    </div>
  </template>

<script>
import axios from 'axios';
export default {
  name: 'CreateUser',
  data: () => ({
    dialog: false,
    users: [],
    nombre: "",
    password: "",
    params:{
      userName: "TEST",
      userPassword: "12345"
    }
  }),
  created() {
    this.fetchUsers();
    /* this.createUser(); */
  },
  methods: {
    async fetchUsers() {
      try {
        const response = await axios.get('http://185.209.230.19:8081/user');
        this.users = response.data;
        console.log(this.users)
      } catch (error) {
        this.error = 'Error al obtener usuarios: ' + error.message;
      }
    },
    async createUser() {
      try {
        /* const response = await axios.post('http://185.209.230.19:8081/user', params); */
        const response = await axios.post('http://185.209.230.19:8081/user', 
        {
          userName: this.nombre,
          userPassword: this.password
        });
        console.log('Usuario creado:', response.data);
        this.dialog = false
      } catch (error) {
        this.error = 'Error al obtener usuarios: ' + error.message;
      }
    },
  }
      
}

</script>
<style lang="scss" scoped>
  #xmarkIcon {
    color: #ef0000;
  }
  #xmarkButton {
    margin-top: -45px;
    margin-left: 8px;
  }
</style>