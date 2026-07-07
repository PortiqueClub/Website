<template>
<header class="relative z-30 px-24 py-8 border-b shadow-md md:px-40 md:mb-24 h-80 bg-yellow-light border-blue-dark">
  <div class="flex items-center justify-between h-full md:justify-around md:container">
    <img
      class="object-cover w-56"
      src="/static/logo-bleu.svg"
      alt="Portique club Logo"
    >

    <nav class="items-center hidden space-x-24 md:flex">
      <a
        v-for="(item, index) in MENU_ITEMS"
        :key="index"
        :href="item.path"
        class="truncate md:text-base lg:text-lg text-blue-dark font-heading"
      >
        {{ item.trad }}
      </a>
      <a
        href="#contact"
        class="px-12 py-8 font-bold rounded-full bg-blue-dark text-yellow-light font-heading"
      >
        Contact
      </a>
      <SwitchLang />
    </nav>

    <button
      type="button"
      class="flex items-center justify-center w-40 h-40 md:hidden text-blue-dark"
      aria-controls="mobile-menu"
      :aria-expanded="isMenuOpen"
      :aria-label="isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'"
      @click="isMenuOpen = !isMenuOpen"
    >
      <svg
        v-if="!isMenuOpen"
        xmlns="http://www.w3.org/2000/svg"
        class="w-32 h-32"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
      <svg
        v-else
        xmlns="http://www.w3.org/2000/svg"
        class="w-32 h-32"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>
  </div>

  <nav
    v-if="isMenuOpen"
    id="mobile-menu"
    class="absolute left-0 z-20 flex flex-col items-center w-full py-16 border-b shadow-md top-full space-y-16 md:hidden bg-yellow-light border-blue-dark"
  >
    <a
      v-for="(item, index) in MENU_ITEMS"
      :key="index"
      :href="item.path"
      class="truncate text-blue-dark font-heading"
      @click="isMenuOpen = false"
    >
      {{ item.trad }}
    </a>
    <a
      href="#contact"
      class="px-12 py-8 font-bold rounded-full bg-blue-dark text-yellow-light font-heading"
      @click="isMenuOpen = false"
    >
      Contact
    </a>
    <SwitchLang />
  </nav>
</header>
</template>

<script setup lang="ts">
import { MENU_ITEMS } from '@/helpers/constants'

const isMenuOpen = ref(false)
</script>
