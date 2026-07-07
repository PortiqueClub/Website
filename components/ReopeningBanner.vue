<template>
<div
  v-if="isOpen"
  class="relative z-20 px-24 py-16 bg-blue-dark text-yellow-light"
>
  <div class="flex flex-col items-center mx-auto space-y-8 max-w-3xl text-center md:space-y-12">
    <h2 class="text-lg font-bold md:text-xl">
      {{ $t('reopening_banner.title') }}
    </h2>

    <p class="text-sm whitespace-pre-line md:text-base">
      {{ $t('reopening_banner.message') }}
    </p>

    <button
      class="px-24 py-8 mt-4 font-bold rounded-full bg-yellow-light text-blue-dark hover:bg-opacity-90"
      @click="close"
    >
      {{ $t('reopening_banner.close') }}
    </button>
  </div>
</div>
</template>

<script setup lang="ts">
const STORAGE_KEY = 'reopening-banner-dismissed'

const isOpen = ref(false)

onMounted(() => {
  isOpen.value = localStorage.getItem(STORAGE_KEY) !== 'true'
})

const close = () => {
  isOpen.value = false
  localStorage.setItem(STORAGE_KEY, 'true')
}
</script>
