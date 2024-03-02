<script setup lang="ts">
import type { IExperience } from '@/interfaces/IExperience'
import type { ILocation } from '@/interfaces/ILocation'

const props = defineProps<{
  experience: IExperience;
  locations: ILocation[];
}>()

const img = useImage()
const { t } = useI18n({ useScope: 'local' })

const location = computed(() =>
  props.locations.find(l => l.id === props.experience.location_id)
)

const duration = computed(() => {
  const startDate = new Date(props.experience.start_date)
  const endDate = new Date(props.experience.end_date ?? Date.now())

  const diffMonths =
    endDate.getMonth() -
    startDate.getMonth() +
    (endDate.getFullYear() - startDate.getFullYear()) * 12
  const years = Math.floor(diffMonths / 12)
  return {
    years,
    months: diffMonths - years * 12
  }
})
</script>

<template>
  <li class="experience">
    <span
      class="absolute flex p-1 bg-white rounded-full ring-gray-300 size-11 -start-6"
    >
      <NuxtImg
        v-if="experience.logo"
        :src="experience.logo"
      />
    </span>
    <h3 class="text-lg font-semibold">
      {{ experience.job_title }}
    </h3>
    <div class="flex items-center gap-2">
      <UIcon name="i-ph-buildings" />
      <h2 class="text-md">
        {{ experience.bussiness_name }}
      </h2>
      <!-- <UIcon name="i-ph-dot-duotone" />
            <div class="flex justify-center gap-2">
                <span class="text-md">{{ location?.name }}</span>
                <NuxtImg width="20px" :src="location?.flag_img" />
            </div> -->
    </div>
    <div
      class="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-300"
    >
      <UIcon name="i-ph-map-pin" />
      <span>{{ location?.name }}</span>
    </div>
    <div
      class="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-300"
    >
      <UIcon name="i-ph-calendar" />
      <div class="flex gap-1">
        <NuxtTime
          :datetime="experience.start_date"
          month="2-digit"
          year="numeric"
        />
        <span>-</span>
        <NuxtTime
          v-if="experience.end_date"
          :datetime="experience.end_date"
          month="2-digit"
          year="numeric"
        />
        <span v-else>{{ t("present") }}</span>
      </div>
      <UIcon name="i-ph-dot-bold" />
      <span><span v-if="duration.years > 0">{{
              t("year", { value: duration.years }, duration.years)
            }}</span>
        {{ t("month", { value: duration.months }, duration.months) }}</span>
    </div>
    <p class="pt-3 text-md dark:text-gray-300">
      {{ experience.description }}
    </p>
    <div class="flex flex-wrap gap-2 pt-6">
      <UBadge
        v-for="(skill, i) in experience.skills"
        :key="`skill_${i}`"
        :ui="{ rounded: 'rounded-full' }"
      >
        {{ skill }}
      </UBadge>
    </div>
  </li>
</template>
<style lang="scss" scoped>
.experience {
  @apply mb-10 ms-8;
}
</style>
<i18n lang="yaml">
en:
  present: Present
  year: "{value} year | {value} years"
  month: "{value} month | {value} months"
es:
  present: Actualidad
  year: "{value} año | {value} años"
  month: "{value} mes | {value} meses"
</i18n>
