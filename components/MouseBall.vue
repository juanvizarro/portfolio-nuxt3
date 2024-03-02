<script setup lang="ts">
import { useMouse } from '@vueuse/core'

const { x, y } = useMouse()
</script>
<template>
  <div
    class="mouse-ball"
    :style="{ left: `${x}px`, top: `${y}px` }"
  />
</template>
<style lang="scss" scoped>
.mouse-ball{
  @apply size-[200px] absolute -translate-x-1/2 -translate-y-1/2 bg-gray-400 rounded-full pointer-events-none dark:bg-shark-400;
  filter: blur(148px);
}
</style>
