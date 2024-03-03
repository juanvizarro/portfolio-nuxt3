<script setup lang="ts">
const colorMode = useColorMode()

const isDark = computed({
  get () {
    return colorMode.value === 'dark'
  },
  set () {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  }
})
</script>
<template>
  <UButton
    color="gray"
    variant="ghost"
    @click="isDark = !isDark"
    aria-label="mode"
  >
    <PhosphorIconMoon v-if="isDark" />
    <PhosphorIconSun v-else />
  </UButton>
</template>
