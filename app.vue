<template>
<div class="relative">
  <SeoKit />
  <div class="flex flex-col min-h-screen bg-yellow-light">
    <TheHeader
      v-if="!$isMobile"
    />

    <SummerClosureModal
      :is-open="true"
    />

    <main class="bg-blue-dark">
      <div class="flex flex-col items-center">
        <ActivitySection />
        <Activities />
        <Schedule />
        <Needs />
        <Pricings />
        <History />
        <Map />
      </div>
    </main>

    <TheFooter />
  </div>
</div>
</template>

<script setup lang="ts">
const { $isMobile } = useNuxtApp()
</script>
