<template>
<form>
  <select
    v-model="locale"
    class="bg-gray-200 px-2 py-2 rounded-md"
  >
    <option value="en">
      🏴󠁧󠁢󠁥󠁮󠁧󠁿 English
    </option>
    <option value="fr">
      🇫🇷 Français
    </option>
  </select>
</form>
</template>

<script setup lang="ts">
const { locale } = useI18n()
</script>
