<template>
<section
  id="needs"
  class="py-32 mt-20 space-y-16 bg-blue-dark"
>
  <h2 class="mb-20 text-3xl font-bold text-center font-heading text-yellow-light">
    {{ $t('club_kit.title') }}
  </h2>
  <div class="grid grid-cols-2 md:grid-cols-4">
    <div class="flex flex-col items-center justify-center">
      <Image
        wrapper-classes="w-full h-192"
        src="/static/creme.svg"
        :alt="$t('club_kit.cream')"
      />
      <p class="text-yellow-light">
        {{ $t('club_kit.cream') }}
      </p>
    </div>
    <div class="flex flex-col items-center justify-center">
      <Image
        wrapper-classes="w-full h-192"
        src="/static/eau.svg"
        :alt="$t('club_kit.water')"
      />
      <p class="text-yellow-light">
        {{ $t('club_kit.water') }}
      </p>
    </div>
    <div class="flex flex-col items-center justify-center">
      <Image
        wrapper-classes="w-full h-192"
        src="/static/lunette.svg"
        :alt="$t('club_kit.sun_glasses')"
      />
      <p class="text-yellow-light">
        {{ $t('club_kit.sun_glasses') }}
      </p>
    </div>
    <div class="flex flex-col items-center justify-center">
      <Image
        wrapper-classes="w-full h-192"
        src="/static/casquette.svg"
        :alt="$t('club_kit.hat')"
      />
      <p class="text-yellow-light">
        {{ $t('club_kit.hat') }}
      </p>
    </div>
  </div>
  <div class="grid grid-cols-2 px-24 md:grid-cols-3">
    <div class="flex flex-col items-center justify-center">
      <Image
        wrapper-classes="h-192"
        src="/static/maillot.svg"
        :alt="$t('club_kit.swimsuit')"
      />
      <p class="text-yellow-light">
        {{ $t('club_kit.swimsuit') }}
      </p>
    </div>
    <div class="flex flex-col items-center justify-center">
      <Image
        wrapper-classes="w-full h-192"
        src="/static/serviette.svg"
        :alt="$t('club_kit.towel')"
      />
      <p class="text-yellow-light">
        {{ $t('club_kit.towel') }}
      </p>
    </div>
    <div class="flex flex-col items-center justify-center">
      <Image
        wrapper-classes="w-full h-192"
        src="/static/banane.svg"
        :alt="$t('club_kit.snack')"
      />
      <p class="text-yellow-light">
        {{ $t('club_kit.snack') }}
      </p>
    </div>
  </div>
</section>
</template>

<script setup lang="ts">
import Image from './Image.vue'
</script>
