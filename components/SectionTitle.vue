<script setup lang="ts">
    const props = defineProps<{
        title: string
    }>()
</script>
<template>
  <div class="flex items-center justify-center w-full gap-4 section-title">
    <!-- <UIcon
      class="text-2xl me-2 text-shamrock-400"
      name="i-ph-brackets-square-bold"
    /> -->
    <span class="text-2xl transition-all text-shamrock-400">{</span>
    <span class="text-2xl font-bold">
      {{ props.title }}
    </span>
    <span class="text-2xl text-shamrock-400">}</span>
  </div>
</template>
