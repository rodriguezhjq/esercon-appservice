<template>
  <div>
    <DarkModeSwitcher v-show="false" />
    <MobileMenu />
    <div class="flex">
      <!-- BEGIN: Side Menu -->
      <nav class="side-nav">
        <!-- BEGIN: Logo -->
        <router-link
          :to="{ name: 'inicio' }"
          tag="a"
          class="intro-x flex items-center pl-5 pt-4"
        >
          <img
            alt="Icono Esercon"
            class="w-9"
            src="@/assets/images/torres.png"
          />
          <span class="hidden xl:block text-lg">
            <img alt="Icono Esercon" src="@/assets/images/eserconmiddle.png" />
          </span>
        </router-link>
        <!-- END: Logo -->
        <div class="side-nav__devider my-6"></div>
        <ul>
          <!-- BEGIN: First Child -->
          <template v-for="(menu, menuKey) in formattedMenu">
            <li
              v-if="menu == 'devider'"
              :key="menu + menuKey"
              class="side-nav__devider my-6"
            ></li>
            <li v-else :key="menu + menuKey">
              <SideMenuTooltip
                tag="a"
                :content="menu.title"
                :href="
                  menu.subMenu
                    ? 'javascript:;'
                    : router.resolve({ name: menu.pageName }).path
                "
                class="side-menu"
                :class="{
                  'side-menu--active': menu.active,
                  'side-menu--open': menu.activeDropdown
                }"
                @click="linkTo(menu, router, $event)"
              >
                <div class="side-menu__icon">
                  <component :is="menu.icon" />
                </div>
                <div class="side-menu__title">
                  {{ menu.title }}
                  <div
                    v-if="menu.subMenu"
                    class="side-menu__sub-icon"
                    :class="{ 'transform rotate-180': menu.activeDropdown }"
                  >
                    <ChevronDownIcon />
                  </div>
                </div>
              </SideMenuTooltip>
              <!-- BEGIN: Second Child -->
              <transition @enter="enter" @leave="leave">
                <ul v-if="menu.subMenu && menu.activeDropdown">
                  <li
                    v-for="(subMenu, subMenuKey) in menu.subMenu"
                    :key="subMenuKey"
                  >
                    <SideMenuTooltip
                      tag="a"
                      :content="subMenu.title"
                      :href="
                        subMenu.subMenu
                          ? 'javascript:;'
                          : router.resolve({ name: subMenu.pageName }).path
                      "
                      class="side-menu"
                      :class="{ 'side-menu--active': subMenu.active }"
                      @click="linkTo(subMenu, router, $event)"
                    >
                      <div class="side-menu__icon">
                        <img
                          class="hidden sm:block w-6 mr-2"
                          alt="Icewall Tailwind HTML Admin Template"
                          :src="require(`@/assets/images/safety.svg`)"
                        />
                        <!--                       <ActivityIcon />

 -->
                      </div>
                      <div class="side-menu__title">
                        {{ subMenu.title }}
                        <div
                          v-if="subMenu.subMenu"
                          class="side-menu__sub-icon"
                          :class="{
                            'transform rotate-180': subMenu.activeDropdown
                          }"
                        >
                          <ChevronDownIcon />
                        </div>
                      </div>
                    </SideMenuTooltip>
                    <!-- BEGIN: Third Child -->
                    <transition @enter="enter" @leave="leave">
                      <ul v-if="subMenu.subMenu && subMenu.activeDropdown">
                        <li
                          v-for="(
                            lastSubMenu, lastSubMenuKey
                          ) in subMenu.subMenu"
                          :key="lastSubMenuKey"
                        >
                          <SideMenuTooltip
                            tag="a"
                            :content="lastSubMenu.title"
                            :href="
                              lastSubMenu.subMenu
                                ? 'javascript:;'
                                : router.resolve({ name: lastSubMenu.pageName })
                                    .path
                            "
                            class="side-menu"
                            :class="{ 'side-menu--active': lastSubMenu.active }"
                            @click="linkTo(lastSubMenu, router, $event)"
                          >
                            <div class="side-menu__icon">
                              <img
                                class="ml-1 hidden sm:block w-5"
                                alt="Icewall Tailwind HTML Admin Template"
                                :src="require(`@/assets/images/safety.svg`)"
                              />
                              <!--                               <ZapIcon />
 -->
                            </div>
                            <div class="side-menu__title">
                              {{ lastSubMenu.title }}
                            </div>
                          </SideMenuTooltip>
                        </li>
                      </ul>
                    </transition>
                    <!-- END: Third Child -->
                  </li>
                </ul>
              </transition>
              <!-- END: Second Child -->
            </li>
          </template>
          <!-- END: First Child -->
        </ul>
      </nav>
      <!-- END: Side Menu -->
      <!-- BEGIN: Content -->
      <div class="content">
        <TopBar />
        <router-view />
      </div>
      <!-- END: Content -->
    </div>
  </div>
</template>

<script>
import { defineComponent, computed, onMounted, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from '@/store'
import { helper as $h } from '@/utils/helper'
import TopBar from '@/components/top-bar/Main.vue'
import MobileMenu from '@/components/mobile-menu/Main.vue'
import DarkModeSwitcher from '@/components/dark-mode-switcher/Main.vue'
import SideMenuTooltip from '@/components/side-menu-tooltip/Main.vue'
import { linkTo, nestedMenu, enter, leave } from './index'

export default defineComponent({
  components: {
    TopBar,
    MobileMenu,
    DarkModeSwitcher,
    SideMenuTooltip
  },
  setup() {
    const route = useRoute()
    const router = useRouter()
    const store = useStore()
    const formattedMenu = ref([])
    const sideMenu = computed(() =>
      nestedMenu(store.state.sideMenu.menu, route)
    )

    const auth = localStorage.getItem('auth')
    if (!auth) {
      router.push('/login')
    }

    watch(
      computed(() => route.path),
      () => {
        formattedMenu.value = $h.toRaw(sideMenu.value)
      }
    )

    onMounted(() => {
      cash('body')
        .removeClass('error-page')
        .removeClass('login')
        .addClass('main')
      formattedMenu.value = $h.toRaw(sideMenu.value)
    })

    return {
      formattedMenu,
      router,
      linkTo,
      enter,
      leave
    }
  }
})
</script>
