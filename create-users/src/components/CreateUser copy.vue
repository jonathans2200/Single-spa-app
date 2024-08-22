<template>
  <v-dialog v-model="dialog" max-width="600px" persistent>
    <template v-slot:activator="{ on, attrs }">
      <v-btn color="primary" dark v-bind="attrs" v-on="on">
        Crear Nuevo Usuario
      </v-btn>
    </template>
    <v-card class="user-creation-modal">
      <v-card-title class="headline gradient-background white--text">
        <span class="modal-title">Crear Nuevo Usuario</span>
        <v-btn icon dark @click="dialog = false" class="close-button">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12" sm="6">
              <v-text-field
                v-model="user.firstName"
                label="Nombre"
                outlined
                dense
                :rules="[v => !!v || 'El nombre es requerido']"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field
                v-model="user.lastName"
                label="Apellido"
                outlined
                dense
                :rules="[v => !!v || 'El apellido es requerido']"
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                v-model="user.email"
                label="Correo electrónico"
                outlined
                dense
                :rules="[
                  v => !!v || 'El correo electrónico es requerido',
                  v => /.+@.+\..+/.test(v) || 'El correo electrónico debe ser válido'
                ]"
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                v-model="user.password"
                label="Contraseña"
                outlined
                dense
                :type="showPassword ? 'text' : 'password'"
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="showPassword = !showPassword"
                :rules="[v => !!v || 'La contraseña es requerida', v => v.length >= 8 || 'La contraseña debe tener al menos 8 caracteres']"
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-select
                v-model="user.role"
                :items="roles"
                label="Rol"
                outlined
                dense
                :rules="[v => !!v || 'El rol es requerido']"
              ></v-select>
            </v-col>
          </v-row>
        </v-container>
        <v-alert
          v-if="error"
          type="error"
          dense
          outlined
        >
          {{ error }}
        </v-alert>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="dialog = false">
          Cancelar
        </v-btn>
        <v-btn color="blue darken-1" text @click="createUser">
          Crear Usuario
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
    showPassword: false,
    error: null,
    user: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      role: ''
    },
    roles: ['Admin', 'Usuario', 'Editor']
  }),
  methods: {
    createUser() {
      // Aquí iría la lógica para crear el usuario
      // Por ejemplo, una llamada a una API
      console.log('Usuario creado:', this.user);
      this.dialog = false;
      // Resetear el formulario
      this.user = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        role: ''
      };
    }
  }
}
</script>

<style scoped>
.user-creation-modal {
  border-radius: 16px;
  overflow: hidden;
}

.gradient-background {
  background: linear-gradient(45deg, #2196F3, #3F51B5);
  padding: 24px;
  position: relative;
}

.modal-title {
  font-size: 24px;
  font-weight: bold;
}

.close-button {
  position: absolute;
  top: 12px;
  right: 12px;
}

.v-card-text {
  padding-top: 24px;
}

.v-text-field {
  margin-bottom: 16px;
}

.v-btn {
  text-transform: none;
  font-weight: bold;
}
</style>