<template>
  <div>
    <DarkModeSwitcher />
    <div class="container sm:px-10">
      <div class="block xl:grid grid-cols-2 gap-4">
        <!-- BEGIN: Login Info -->
        <div class="hidden xl:flex flex-col min-h-screen">
          <a href="" class="-intro-x flex items-center pt-5"> </a>
          <div class="my-auto" style="display: none">
            <img
              alt="Icewall Tailwind HTML Admin Template"
              class="-intro-x w-1/2 -mt-16"
              :src="require(`@/assets/images/illustration.svg`)"
            />
            <div
              class="-intro-x text-white font-medium text-4xl leading-tight mt-10"
            ></div>
            <div
              class="-intro-x mt-5 text-lg text-white text-opacity-70 dark:text-gray-500"
            ></div>
          </div>
        </div>
        <!-- END: Login Info -->
        <!-- BEGIN: Login Form -->
        <form
          action
          class="form"
          ref="formlogin"
          @submit.prevent="login"
          v-if="!resetpassword"
        >
          <div class="h-screen xl:h-auto flex py-5 xl:py-0 my-10 xl:my-0">
            <div
              v-if="loading"
              class="my-auto mx-auto xl:ml-20 bg-white dark:bg-dark-1 xl:bg-transparent px-5 sm:px-8 py-8 xl:p-0 rounded-md shadow-md xl:shadow-none w-full sm:w-3/4 lg:w-2/4 xl:w-auto justify-end items-center"
            >
              <LoadingIcon
                icon="oval"
                class="w-5 h-5 text-center text-xs mt-2"
              />
              <div class="text-center text-xs mt-2">Cargando...</div>
            </div>
            <div
              v-if="!loading"
              class="my-auto mx-auto xl:ml-20 bg-white dark:bg-dark-1 xl:bg-transparent px-5 sm:px-8 py-8 xl:p-0 rounded-md shadow-md xl:shadow-none w-full sm:w-3/4 lg:w-2/4 xl:w-auto"
            >
              <img
                alt="Logo esercon"
                class="intro-x w-1/2 mb-16 mx-auto d-block"
                :src="require(`@/assets/images/logoesercon.png`)"
              />
              <h2
                class="intro-x font-bold text-2xl xl:text-3xl text-center xl:text-left"
              >
                Iniciar Sesión
              </h2>
              <div class="intro-x mt-2 text-gray-500 xl:hidden text-center">
                Con unos pocos clics más podrás iniciar sesión en su cuenta.
                Gestiona tu empresa.
              </div>
              <div class="intro-x mt-8">
                <input
                  type="text"
                  class="intro-x login__input form-control py-3 px-4 border-gray-300 block"
                  placeholder="Email"
                  v-model="email"
                  @blur="v$.email.$touch"
                  :class="{ 'border-theme-6': v$.email.$error }"
                />
                <div class="text-theme-6 mt-2" v-if="v$.email.$error">
                  {{ getEmailErrorMessage }}
                </div>
                <input
                  type="password"
                  class="intro-x login__input form-control py-3 px-4 border-gray-300 block mt-4"
                  placeholder="Contraseña"
                  :class="{ 'border-theme-6': v$.password.$error }"
                  @blur="v$.password.$touch"
                  v-model="password"
                  v-on:keydown.enter.prevent="keyupEnter"
                />
                <div class="text-theme-6 mt-2" v-if="v$.password.$error">
                  {{ getPasswordErrorMessage }}
                </div>
              </div>
              <div class="intro-x mt-8" v-if="error">
                <div
                  class="alert alert-warning-soft show flex items-center mb-2"
                  role="alert"
                >
                  <AlertTriangleIcon class="w-12 h-12 mr-2" /> ¡Lo sentimos! por
                  favor valide las credenciales y vuelva a itentarlo
                </div>
              </div>
              <div
                class="intro-x flex text-gray-700 dark:text-gray-600 text-xs sm:text-sm mt-4"
              >
                <div class="flex items-center mr-auto"></div>
                <button @click.prevent="resetpassword = !resetpassword">
                  ¿Olvidó su contraseña?
                </button>
              </div>
              <div class="intro-x mt-5 xl:mt-8 text-center xl:text-left">
                <button
                  class="btn btn-primary py-3 px-4 w-full xl:w-32 xl:mr-3 align-top"
                >
                  Ingresar
                </button>
              </div>
              <div
                class="intro-x mt-10 xl:mt-24 text-gray-700 dark:text-gray-600 text-center xl:text-left"
              >
                Ingresando, estarás de acuerdo con nuestros <br />
                <a class="text-theme-3 dark:text-theme-10" href=""
                  >Términos y Condiciones</a
                >
                &
                <a class="text-theme-3 dark:text-theme-10" href=""
                  >Política de Privacidad</a
                >
              </div>
              <img
                alt="Logo esercon"
                class="intro-x mt-16 mx-auto d-block"
                :src="require(`@/assets/images/bg-login-footer.png`)"
              />
            </div>
          </div>
        </form>
        <!-- END: Login Form -->
        <!-- BEGIN: Login Form -->
        <form class="form" v-if="resetpassword">
          <div class="h-screen xl:h-auto flex py-5 xl:py-0 my-10 xl:my-0">
            <div
              v-if="loading"
              class="my-auto mx-auto xl:ml-20 bg-white dark:bg-dark-1 xl:bg-transparent px-5 sm:px-8 py-8 xl:p-0 rounded-md shadow-md xl:shadow-none w-full sm:w-3/4 lg:w-2/4 xl:w-auto justify-end items-center"
            >
              <LoadingIcon
                icon="oval"
                class="w-5 h-5 text-center text-xs mt-2"
              />
              <div class="text-center text-xs mt-2">Cargando...</div>
            </div>
            <div
              v-if="!loading"
              class="my-auto mx-auto xl:ml-20 bg-white dark:bg-dark-1 xl:bg-transparent px-5 sm:px-8 py-8 xl:p-0 rounded-md shadow-md xl:shadow-none w-full sm:w-3/4 lg:w-2/4 xl:w-auto"
            >
              <img
                alt="Logo esercon"
                class="intro-x w-1/2 mb-16 mx-auto d-block"
                :src="require(`@/assets/images/logoesercon.png`)"
              />
              <h2
                class="intro-x font-bold text-2xl xl:text-3xl text-center xl:text-left"
              >
                Reestablecer contraseña
              </h2>
              <div class="intro-x mt-2 text-gray-500 xl:hidden text-center">
                Enviaremos los pasos a seguir al correo proporcionado para
                recuperar sus credenciales
              </div>
              <div class="intro-x mt-8">
                <input
                  type="text"
                  class="intro-x login__input form-control py-3 px-4 border-gray-300 block"
                  placeholder="Email"
                />
                <!--                 <template v-if="validate.email.$error">
                  <div
                    v-for="(error, index) in validate.email.$errors"
                    :key="index"
                    class="text-theme-6 mt-2"
                  >
                    {{ error.$message }}
                  </div>
                </template> -->
              </div>
              <!--              <div class="intro-x mt-8" v-if="error">
                <div
                  class="alert alert-warning-soft show flex items-center mb-2"
                  role="alert"
                >
                  <AlertTriangleIcon class="w-12 h-12 mr-2" /> ¡Lo sentimos! por
                  favor valide el correo y vuelva a itentarlo
                </div>
              </div> -->

              <div
                class="intro-y col-span-12 flex items-center justify-center sm:justify-center xl:justify-start mt-5 mt-5"
              >
                <button
                  class="btn btn-secondary w-24"
                  @click="resetpassword = !resetpassword"
                >
                  Regresar
                </button>
                <button
                  type="button"
                  class="btn btn-primary w-24 ml-2"
                  @click="resetpasswordMethod"
                >
                  Enviar
                </button>
              </div>
              <img
                alt="Logo esercon"
                class="intro-x mt-16 mx-auto d-block"
                :src="require(`@/assets/images/bg-login-footer.png`)"
              />
            </div>
          </div>
        </form>
        <!-- END: Login Form -->
      </div>
    </div>
    <div class="modal" aria-hidden="true" id="modalResult">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-body p-0">
            <div class="p-5 text-center">
              <CheckIcon class="w-16 h-16 text-theme-9 mx-auto mt-3" />
              <div class="text-3xl mt-5">
                Enviamos un correo a Prue***@esercon.com
              </div>
              <div class="text-gray-600 mt-2">
                Ingresa a tu correo electrónico y sigue las instrucciones para
                continuar con el proceso para recuperar su contraseña
              </div>
            </div>
            <div class="px-5 pb-8 text-center">
              <button
                type="button"
                data-dismiss="modal"
                class="btn btn-primary"
              >
                Aceptar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, onMounted } from 'vue'
import DarkModeSwitcher from '@/components/dark-mode-switcher/Main.vue'
import { servicio as $s } from '@/utils/servicios.js'
import { required } from '@vuelidate/validators'
import { useVuelidate } from '@vuelidate/core'

export default defineComponent({
  components: {
    DarkModeSwitcher
  },
  setup() {
    onMounted(() => {
      cash('body')
        .removeClass('main')
        .removeClass('error-page')
        .addClass('login')
    })
    return { v$: useVuelidate() }
  },
  data() {
    return {
      email: '',
      password: '',
      loading: false,
      error: false,
      validate: {},
      resetpassword: false
    }
  },
  validations() {
    return {
      email: { required },
      password: { required }
    }
  },
  methods: {
    keyupEnter(event) {
      console.log(event)
    },
    resetpasswordMethod() {
      cash('#modalResult').modal('show')
    },
    async login() {
      this.v$.$touch()
      if (!this.v$.$invalid) {
        this.loading = true
        this.error = false
        const data = {
          email: this.email,
          password: this.password,
          remenber_me: false
        }
        $s.loginUser(
          data,
          result => {
            console.log(result)
            this.$router.push('/')
          },
          error => {
            this.loading = false
            this.error = true
            console.error(error)
          }
        )
      }
    }
  },
  computed: {
    getEmailErrorMessage() {
      if (this.v$.email.$error) {
        for (const key in this.v$.email) {
          switch (key) {
            case 'required':
              return 'Este campo es necesario.'
            default:
              break
          }
        }
      }
      return null
    },
    getPasswordErrorMessage() {
      if (this.v$.password.$error) {
        for (const key in this.v$.password) {
          switch (key) {
            case 'required':
              return 'Este campo es necesario.'
            default:
              break
          }
        }
      }
      return null
    }
  }
})
</script>
