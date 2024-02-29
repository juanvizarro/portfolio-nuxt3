<script setup lang="ts">

    const { t } = useI18n({ useScope: 'local' })
</script>

<template>
    <footer class="flex items-center justify-center py-8 border-b-8 dark:bg-black/60 border-shamrock-400">
        <span><UIcon name="i-ph-copyright" /> {{ t('developed_by') }} <b>Juan Vizarro Ramos</b></span>
    </footer>
</template>
<i18n lang="yaml">
es:
    developed_by: 2024 - Desarrollado por
en:
    developed_by: 2024 - Developed por
</i18n>