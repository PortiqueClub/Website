<template>
<div>
  <SeoKit />
  <NuxtWelcome />
  <select v-model="locale">
    <option value="en">
      en
    </option>
    <option value="fr">
      fr
    </option>
  </select>
  <p>{{ $t('welcome') }}</p>
</div>
</template>

<script setup lang="ts">
const { locale } = useI18n()
</script>
