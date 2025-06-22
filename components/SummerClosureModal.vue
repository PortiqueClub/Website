<template>
<Transition
  enter-active-class="transition duration-200 ease-out"
  enter-from-class="opacity-0 transform scale-95"
  enter-to-class="opacity-100 transform scale-100"
  leave-active-class="transition duration-150 ease-in"
  leave-from-class="opacity-100 transform scale-100"
  leave-to-class="opacity-0 transform scale-95"
>
  <div
    v-if="isOpen"
    class="flex fixed inset-0 z-50 justify-center items-center"
  >
    <!-- Backdrop -->
    <div
      class="absolute inset-0 bg-black bg-opacity-50"
      @click="close"
    />

    <!-- Modal -->
    <div class="relative z-50 p-32 mx-32 w-full max-w-2xl rounded-xl bg-yellow-light max-h-[80vh] overflow-y-auto">
      <div class="flex flex-col items-center space-y-24">
        <h3 class="text-2xl font-bold text-center text-blue-dark">
          {{ $t('summer_closure.title') }}
        </h3>

        <div class="flex flex-col items-center space-y-16">
          <p class="text-sm text-center md:text-lg text-blue-dark">
            {{ $t('summer_closure.message') }}
          </p>

          <div class="flex flex-col items-center space-y-8">
            <!-- <p class="text-center text-blue-dark">
              {{ $t('summer_closure.reopening') }}
            </p> -->
            <p class="text-center text-blue-dark">
              {{ $t('summer_closure.contact') }}
            </p>
          </div>
        </div>
        <!--
          <button
            class="px-24 py-12 font-bold rounded-full text-yellow-light bg-blue-dark hover:bg-opacity-90"
            @click="close"
          >
            {{ $t('summer_closure.close') }}
          </button> -->
      </div>
    </div>
  </div>
</Transition>
</template>

<script setup lang="ts">
const props = defineProps<{
  isOpen: boolean
}>()

const emit = defineEmits<{
  (e: 'close'): void
}>()

const close = () => {
  emit('close')
}
</script>
