import { UButton } from '#build/components';
<script setup lang="ts">
  import ThemeBtn from '@/components/buttons/ThemeBtn.vue'
const { t } = useI18n({
    useScope: 'local'
})

const notifications = ref(3)
</script>
<template>
  <header class="header">
    <nav class="mx-auto flex items-center justify-between max-w-7xl p-6 lg:px-8">
      <div class="flex lg:flex-1">
        <NuxtImg
          src="https://tailwindui.com/img/logos/mark.svg?color=blue&shade=600"
          class="h-8 w-auto"
        />
      </div>
      <!-- <UButton variant="ghost">
        {{ t('log_in') }}
      </UButton> -->
      <div class="flex gap-2">
        <ThemeBtn />
        <!-- <UChip
          :text="notifications"
          size="xl"
          :inset="true"
        >
          <UButton
            variant="ghost"
            icon="i-ph-bell-simple-light"
            color="white"
            :ui="{
              rounded: 'rounded-lg'
            }"
            size="lg"
          />
        </UChip> -->
        <!-- <UAvatar
          src="https://avatars.githubusercontent.com/u/739984?v=4"
          alt="Avatar"
        /> -->
      </div>
    </nav>
  </header>
</template>
<i18n lang="yaml">
    en:
        log_in: Log in
    es:
        log_in: Iniciar sesión
</i18n>
