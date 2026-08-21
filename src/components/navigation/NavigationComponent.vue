<template>
  <div>
    <menu-icon v-if="!showMenu" class="h-6 w-6 min-[1046px]:hidden cursor-pointer" @click="toggleMenu" />

    <nav class="flex py-2 px-6 gap-8 rounded-full border border-nw-border bg-[#160D2F] bg-opacity-20 max-[1045px]:hidden" id="menu">
      <router-link to="/" :class="$route.name !== 'home' ? 'opacity-60 hover:opacity-100' : ''">Home</router-link>
      <router-link to="/location" :class="$route.name !== 'location' ? 'opacity-60 hover:opacity-100' : ''">Location</router-link>
      <router-link to="/schedule" :class="$route.name !== 'schedule' ? 'opacity-60 hover:opacity-100' : ''">Schedule</router-link>
      <router-link to="/faq" :class="$route.name !== 'faq' ? 'opacity-60 hover:opacity-100' : ''">FAQs</router-link>
      <router-link to="/series" :class="$route.name !== 'series' ? 'opacity-60 hover:opacity-100' : ''">Series</router-link>
    </nav>

    <div v-if="showMenu" class="absolute top-0 bottom-0 left-0 right-0 h-full w-full z-10 bg-nw-dark-blue">
      <x v-if="showMenu" class="absolute h-6 w-6 min-[1046px]:hidden z-10 top-10 right-10 cursor-pointer" @click="toggleMenu" />

      <nav class="flex flex-col items-center justify-center h-full w-full py-2 px-6 gap-8">
        <router-link to="/" :class="$route.name !== 'home' ? 'opacity-60 hover:opacity-100' : ''" @click="toggleMenu">Home</router-link>
        <router-link to="/location" :class="$route.name !== 'location' ? 'opacity-60 hover:opacity-100' : ''" @click="toggleMenu">Location</router-link>
        <router-link to="/schedule" :class="$route.name !== 'schedule' ? 'opacity-60 hover:opacity-100' : ''" @click="toggleMenu">Schedule</router-link>
        <router-link to="/faq" :class="$route.name !== 'faq' ? 'opacity-60 hover:opacity-100' : ''" @click="toggleMenu">FAQs</router-link>
        <router-link to="/series" :class="$route.name !== 'series' ? 'opacity-60 hover:opacity-100' : ''" @click="toggleMenu">Series</router-link>
      </nav>
    </div>
  </div>
</template>

<script>
import { Menu as MenuIcon, X } from '@lucide/vue'

export default {
  name: 'NavigationComponent',
  components: {
    X,
    MenuIcon
  },
  data() {
    return {
      showMenu: false
    }
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu
      document.querySelector('html').classList.toggle('prevent-scrolling');
    }
  }
}
</script>

<style>
.prevent-scrolling {
  overflow: hidden;
}
</style>
