<template>
  <!-- BEGIN: Top Bar -->
  <div class="top-bar">
    <!-- BEGIN: Breadcrumb -->
    <div class="-intro-x breadcrumb mr-auto hidden sm:flex">
      <!-- <ChevronRightIcon class="breadcrumb__icon" /> -->
      <!-- TODO Arreglar el breadCrum -->
      <a v-for="item in breadCrumbs" :key="item"> {{ item }} > </a>
    </div>
    <!-- END: Breadcrumb -->
    <!-- BEGIN: Account Menu -->
    <div class="intro-x dropdown w-8 h-8">
      <div
        class="dropdown-toggle w-8 h-8 rounded-full overflow-hidden shadow-lg image-fit zoom-in"
        role="button"
        aria-expanded="false"
      >
        <img
          alt="Icewall Tailwind HTML Admin Template"
          :src="require(`@/assets/images/torres.png`)"
        />
      </div>
      <div class="dropdown-menu w-56">
        <div
          class="dropdown-menu__content box bg-theme-23 dark:bg-dark-6 text-white"
        >
          <div class="p-4 border-b border-theme-24 dark:border-dark-3">
            <div class="font-medium">{{ $f()[0].users[0].name }}</div>
            <div class="text-xs text-theme-28 mt-0.5 dark:text-gray-600">
              {{ $f()[0].jobs[0] }}
            </div>
          </div>
          <div
            class="p-2 border-t border-theme-24 dark:border-dark-3 cursor-pointer"
          >
            <a
              href=""
              class="flex items-center block p-2 transition duration-300 ease-in-out hover:bg-theme-1 dark:hover:bg-dark-3 rounded-md"
              v-on:click="logout"
            >
              <ToggleRightIcon class="w-4 h-4 mr-2" /> Logout
            </a>
          </div>
        </div>
      </div>
    </div>
    <!-- END: Account Menu -->
  </div>
  <!-- END: Top Bar -->
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  computed: {
    breadCrumbs() {
      const pathArray = this.$route.path.split('/')
      pathArray.shift()

      return pathArray
    }
  },
  data() {
    return {
      items: []
    }
  },
  mounted() {
    this.getRoute()
  },
  watch: {
    $route() {
      this.getRoute()
    }
  },
  methods: {
    logout() {
      localStorage.removeItem('project')
      localStorage.removeItem('depatini')
      localStorage.removeItem('depatfin')
      localStorage.removeItem('section')
      localStorage.removeItem('auth')
      this.$router.push('/')
    },
    getRoute() {
      this.items = this.$route.matched
    },
    formatBreadcrum(path) {
      /*      var bread = path.replace('admin-project', 'Administrar Proyecos')
      bread = bread.replace('add-new-project', 'Registrar Proyecto')
      bread = bread.replace('/', 'Inicio') */
      return path
    }
  },
  setup() {
    const searchDropdown = ref(false)

    const showSearchDropdown = () => {
      searchDropdown.value = true
    }

    const hideSearchDropdown = () => {
      searchDropdown.value = false
    }

    return {
      searchDropdown,
      showSearchDropdown,
      hideSearchDropdown
    }
  }
})
</script>
