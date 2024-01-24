<script setup lang="ts">
    const props = defineProps<{
        title: string
    }>()
</script>
<template>
  <div class="section-title w-full flex justify-center items-center">
    <UIcon
      class="me-2 text-teal-400 text-2xl"
      name="i-ph-brackets-square-bold"
    />
    <span class="text-2xl font-bold">
      {{ props.title }}
    </span>
  </div>
</template>
