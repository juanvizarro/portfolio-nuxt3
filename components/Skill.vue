<script setup lang="ts">
    import type { ISkill } from '@/interfaces/ISkill'

    const HEX_OPACITY_10 = '1a'
    const HEX_OPACITY_30 = '4d'
    const HEX_OPACITY_50 = '80'

    const props = defineProps<{
        skill: ISkill
    }>()

    const img = useImage()
    const { t } = useI18n({ useScope: 'local' })

    const onMouseOver = (e: MouseEvent) => {
        const target = <HTMLDivElement>e.target

        target.style.backgroundColor = `${props.skill.color}${HEX_OPACITY_30}`
        target.style.borderColor = `${props.skill.color}${HEX_OPACITY_50}`
    }
    const onMouseLeave = (e: MouseEvent) => {
        const target = <HTMLDivElement>e.target

        target.style.backgroundColor = `${props.skill.color}${HEX_OPACITY_10}`
        target.style.borderColor = `${props.skill.color}${HEX_OPACITY_30}`
    }
</script>

<template>
    <div
        @mouseover.self="onMouseOver"
        @mouseleave.self="onMouseLeave"
        class="transition skill"
        :style="{ 
            backgroundColor: `${props.skill.color}${HEX_OPACITY_10}`,
            borderColor: `${props.skill.color}${HEX_OPACITY_30}`
        }"
    >
        <div class="flex items-center justify-center w-10 h-10">
            <NuxtImg loading="lazy" :src="props.skill.logo" />
        </div>
        <span class="font-bold" :style="{ color: props.skill.color }">{{ props.skill.title }}</span>
        <span class="text-sm"> {{ props.skill.years }} {{ t('year', props.skill.years) }}</span>
    </div>
</template>
<style lang="scss" scoped>
.skill{
    @apply flex flex-col items-center gap-2 p-4 border-2 rounded-md;
}
</style>
<i18n lang="yaml">
en:
    year: "year | years"
es:
    year: "año | años"
</i18n>