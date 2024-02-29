<script setup lang="ts">
  import type { RouteKeys } from '@/interfaces/IRoute'
  
  // const containerRef = ref<HTMLElement>()
  const containerPositionY = ref(0)
  const activeHeaderOption = ref<RouteKeys>('about_me')
  const containerRef = ref<HTMLElement|null>()

  const { y } = useScroll(containerRef.value)

  // onMounted(() => {
  //   containerElement.value = document.getElementById('mainContainer')

  //   if(!containerElement.value) return

  //   const { y } = useScroll(containerElement.value)
  //   console.log(containerElement.value, y)
  // })

  // const { y } = useScroll(containerRef.value)

  // watch(containerRef,() => {
  //   console.log('asd')
  // })
  
</script>
<template>
  <main class="dark:bg-shark-950 dark:text-white mx-auto w-full min-h-[100dvh]">
    <BaseHeader :active-option="activeHeaderOption" />
    <UContainer id="mainContainer" class="pt-24 pb-4" ref="containerRef">
      <slot />
    </UContainer>
    <BaseFooter />
  </main>
</template>
