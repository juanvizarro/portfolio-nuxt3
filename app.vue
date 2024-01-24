<script setup lang="ts">
 const userStore = useUserStore()
 const { counter, double } = storeToRefs(userStore)

</script>
<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
