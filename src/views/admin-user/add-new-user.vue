<template>
  <div>
    <div class="intro-y flex items-center mt-8">
      <h2 class="text-lg font-medium mr-auto">{{nombre?'Editar':'Nuevo'}} Usuario</h2>
      <!-- TODO Cambiar nombre del titulo cuando sea editar, en todas las paginas -->
    </div>
    <div class="grid grid-cols-12 gap-6 mt-5">
      <div class="intro-y col-span-12 lg:col-span-6">
        <!-- BEGIN: Form Validation -->
        <div class="intro-y box">
          <div id="form-validation" class="p-5">
            <div class="preview">
              <!-- BEGIN: Validation Form -->
              <form class="validate-form" @submit.prevent="save">
                <div class="input-form">
                  <label
                    for="validation-form-1"
                    class="form-label w-full flex flex-col sm:flex-row"
                  >
                    Nombre
                  </label>
                  <input
                    id="validation-form-1"
                    v-model.trim="name"
                    type="text"
                    name="name"
                    class="form-control"
                    :class="{ 'border-theme-6': validate.name.$error }"
                    placeholder="John Legend"
                  />
                  <template v-if="validate.name.$error">
                    <div
                      v-for="(error, index) in validate.name.$errors"
                      :key="index"
                      class="text-theme-6 mt-2"
                    >
                      {{ error.$message }}
                    </div>
                  </template>
                </div>
                <div class="input-form mt-3">
                  <label
                    for="validation-form-2"
                    class="form-label w-full flex flex-col sm:flex-row"
                  >
                    Email
                  </label>
                  <input
                    id="validation-form-2"
                    v-model.trim="email"
                    type="email"
                    name="email"
                    class="form-control"
                    :class="{ 'border-theme-6': validate.email.$error }"
                    placeholder="example@gmail.com"
                  />
                  <template v-if="validate.email.$error">
                    <div
                      v-for="(error, index) in validate.email.$errors"
                      :key="index"
                      class="text-theme-6 mt-2"
                    >
                      {{ error.$message }}
                    </div>
                  </template>
                </div>
                <div class="input-form mt-3">
                  <label
                    for="validation-form-3"
                    class="form-label w-full flex flex-col sm:flex-row"
                  >
                    Rol
                  </label>
                  <select
                    class="form-select sm:mr-2"
                    aria-label="Default select example"
                  >
                    <option>
                      Desarrollador
                    </option>
                    <option>
                      Administrador
                    </option>
                    <option>
                      Otro
                    </option>
                  </select>
                </div>
                <div class="input-form mt-3">
                  <label
                    for="validation-form-3"
                    class="form-label w-full flex flex-col sm:flex-row"
                  >
                    Contraseña
                  </label>
                  <input
                    id="validation-form-3"
                    v-model.trim="password"
                    type="password"
                    name="password"
                    class="form-control"
                    :class="{ 'border-theme-6': validate.password.$error }"
                    placeholder="secret"
                  />
                  <template v-if="validate.password.$error">
                    <div
                      v-for="(error, index) in validate.password.$errors"
                      :key="index"
                      class="text-theme-6 mt-2"
                    >
                      {{ error.$message }}
                    </div>
                  </template>
                </div>
                <button type="submit" class="mt-5 btn btn-primary">
                  Crear usuario
                </button>
              </form>
              <!-- END: Validation Form -->
              <!-- BEGIN: Success Notification Content -->
              <div
                id="success-notification-content"
                class="toastify-content hidden flex"
              >
                <CheckCircleIcon class="text-theme-9" />
                <div class="ml-4 mr-4">
                  <div class="font-medium">Registration success!</div>
                  <div class="text-gray-600 mt-1">
                    Please check your e-mail for further info!
                  </div>
                </div>
              </div>
              <!-- END: Success Notification Content -->
              <!-- BEGIN: Failed Notification Content -->
              <div
                id="failed-notification-content"
                class="toastify-content hidden flex"
              >
                <XCircleIcon class="text-theme-6" />
                <div class="ml-4 mr-4">
                  <div class="font-medium">Registration failed!</div>
                  <div class="text-gray-600 mt-1">
                    Please check the fileld form.
                  </div>
                </div>
              </div>
              <!-- END: Failed Notification Content -->
            </div>
          </div>
        </div>
        <!-- END: Form Validation -->
      </div>

      <div class=" col-span-12 lg:col-span-6">
        <div class="box intro-y ">
          <div
            class=" flex flex-col sm:flex-row items-center p-5 border-b border-gray-200 dark:border-dark-5"
          >
            <h2 class="font-medium text-base mr-auto">Permisos</h2>
          </div>
          <div id="checkbox-switch" class="p-5">
            <div class="form-check mb-2" v-for="i in 10" :key="i">
              <input
                id="checkbox-switch-7"
                class="form-check-switch"
                type="checkbox"
              />
              <label class="form-check-label" for="checkbox-switch-7"
                >Permiso de usuario {{ i }}</label
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, toRefs } from 'vue'
import {
  required,
  minLength,
  maxLength,
  email,
  url,
  integer
} from '@vuelidate/validators'
import { useVuelidate } from '@vuelidate/core'
import Toastify from 'toastify-js'

export default defineComponent({
  mounted() {
    const nombre = this.$route.params.name
    const email = this.$route.params.email
    if (nombre) {
      this.name = nombre
    }
    if (email) {
      this.email = email
    }
  },
  data() {
    return {
      name: '',
      email: '',
      password: ''
    }
  },
  setup() {
    const rules = {
      name: {
        required,
        minLength: minLength(2)
      },
      email: {
        required,
        email
      },
      password: {
        required,
        minLength: minLength(6)
      },
      age: {
        required,
        integer,
        maxLength: maxLength(3)
      },
      url: {
        url
      },
      comment: {
        required,
        minLength: minLength(10)
      }
    }
    const validate = useVuelidate(rules, toRefs({}))
    const save = () => {
      validate.value.$touch()
      if (validate.value.$invalid) {
        Toastify({
          node: cash('#failed-notification-content')
            .clone()
            .removeClass('hidden')[0],
          duration: 3000,
          newWindow: true,
          close: true,
          gravity: 'top',
          position: 'right',
          stopOnFocus: true
        }).showToast()
      } else {
        Toastify({
          node: cash('#success-notification-content')
            .clone()
            .removeClass('hidden')[0],
          duration: 3000,
          newWindow: true,
          close: true,
          gravity: 'top',
          position: 'right',
          stopOnFocus: true
        }).showToast()
      }
    }

    return {
      validate,
      save
    }
  }
})
</script>
