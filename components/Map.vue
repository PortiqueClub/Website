<template>
<section
  id="map"
  class="py-48 space-y-16 bg-blue-dark md:mb-400"
>
  <h2 class="mb-20 text-3xl font-bold text-center font-heading text-yellow-light">
    {{ $t('club.accessibility.title') }}
  </h2>

  <div class="grid grid-cols-1 md:gap-32 md:container md:grid-cols-3">
    <div class="px-20 py-24">
      <p class="text-yellow-light">
        {{ $t('club.accessibility.content') }}
      </p>
    </div>
    <div v-if="$isMobile">
      <img
        src="/static/map.webp"
        alt="carte des lieux"
      >
    </div>

    <div
      v-else
      class="relative col-span-2"
    >
      <MapboxMap
        map-id="ID"
        style="height: 450px; width: 100%;"
        :options="{
          style: 'mapbox://styles/mapbox/streets-v12',
          center: [-1.4320995, 46.3436326],
          zoom: 14,
        }"
      />
    </div>
  </div>
</section>
</template>

<script setup lang="ts">
const { $isMobile } = useNuxtApp()
</script>
