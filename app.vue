<script setup lang="ts">
const userStore = useUserStore()
const { counter, double } = storeToRefs(userStore)
// useSeoMeta({
//   title: 'Juan Vizarro Ramos',
//   ogTitle: 'Juan Vizarro Ramos',
//   description:''
// })
</script>
<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
