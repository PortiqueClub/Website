<template>
<section class="relative flex flex-col items-center justify-center w-full py-12 bg-yellow-light">
  <div
    v-if="!$isMobile"
    class="hidden md:grid-cols-5 md:gap-12 md:grid"
  >
    <div class="z-10 flex items-start justify-end w-full h-full">
      <img
        class="z-10 object-cover rounded-full w-176 h-176"
        src="/static/galerie1.webp"
        alt="portique exemple 1"
      >
    </div>

    <div class="z-10 flex items-end justify-center w-full h-full">
      <img
        class="z-10 object-cover rounded-full w-160 h-160"
        src="/static/galerie2.webp"
        alt="portique exemple 2"
      >
    </div>

    <div class="z-10 flex items-start justify-center w-full h-full">
      <img
        class="z-10 object-cover rounded-full w-148 h-148"
        src="/static/galerie3.webp"
        alt="portique exemple 3"
      >
    </div>

    <div class="z-10 flex items-center justify-start w-full h-full">
      <img
        class="z-10 object-cover rounded-full w-176 h-176"
        src="/static/galerie4.webp"
        alt="portique exemple 4"
      >
    </div>

    <div class="z-10 flex items-center justify-start w-full h-full">
      <img
        class="z-10 object-cover rounded-full w-224 h-224"
        src="/static/galerie5.webp"
        alt="portique exemple 5"
      >
    </div>
  </div>
  <div class="gap-12 md:grid md:grid-cols-3">
    <div
      v-if="!$isMobile"
      class="z-10 items-end justify-end hidden w-full h-full md:flex"
    >
      <img
        class="z-10 object-cover rounded-full w-192 h-192"
        src="/static/galerie6.webp"
        alt="portique exemple 6"
      >
    </div>

    <div class="z-10 flex items-center justify-center w-full h-full">
      <div class="container z-20 flex items-center justify-center space-x-24 md:flex-row">
        <img
          class="z-20 -rotate-45 w-106 h-106 md:w-192 md:h-192"
          src="/static/etoileorange.svg"
          alt="orange star"
        >
        <img
          class="z-10 object-cover rounded-full w-128 h-128 md:w-256 md:h-256"
          src="/static/logo-bleu-orange.webp"
          alt="Logo portique club"
        >
        <img
          class="z-20 rotate-45 w-106 h-106"
          src="/static/etoilebleu.webp"
          alt="blue star"
        >
      </div>
    </div>

    <div
      v-if="!$isMobile"
      class="z-10 items-end justify-start hidden w-full h-full md:flex"
    >
      <img
        class="z-10 object-cover rounded-full w-224 h-224"
        src="/static/galerie7.webp"
        alt="portique exemple 7"
      >
    </div>
  </div>

  <div class="container z-20 flex items-center justify-center mt-24">
    <h2 class="z-20 text-lg font-bold text-center font-heading text-blue-dark">
      {{ $t('slogan') }}
    </h2>
  </div>
  <img
    v-if="!$isMobile"
    class="absolute z-0 w-full h-auto -bottom-64"
    src="/static/wave-footer-gold.svg"
    alt="waves-background"
  >
</section>
</template>

<script setup lang="ts">
const { $isMobile } = useNuxtApp()
</script>
