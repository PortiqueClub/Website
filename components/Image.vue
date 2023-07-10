<template>
<nuxt-img
  :class="wrapperClasses"
  :src="src"
  :alt="alt"
  sizes="sm:100vw md:50vw lg:400px"
/>
</template>

<script setup lang="ts">
interface Props {
  src: string
  alt: string
  wrapperClasses?: string
}

defineProps<Props>()
</script>
