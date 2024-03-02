<script setup lang="ts"></script>
<template>
  <main class="dark:bg-shark-950 dark:text-white mx-auto w-full min-h-[100dvh]">
    <BaseHeader />
    <UContainer class="pt-24 pb-4 relative overflow-hidden">
      <MouseBall />
      <slot />
    </UContainer>
    <BaseFooter />
  </main>
</template>
