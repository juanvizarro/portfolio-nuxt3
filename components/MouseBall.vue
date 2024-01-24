<script setup lang="ts">
import { useMouse } from '@vueuse/core'

const { x, y } = useMouse()
</script>
<template>
  <div
    class="absolute rounded-full bg-gray-400 dark:bg-shark-500 -translate-x-1/2 -translate-y-1/2 pointer-events-none mouse-ball"
    :style="{ left: `${x}px`, top: `${y}px` }"
  />
</template>
<style lang="scss" scoped>
.mouse-ball{
  filter: blur(148px);
  width: 200px;
  height: 200px;
}
</style>
