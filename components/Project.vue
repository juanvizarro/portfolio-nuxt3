<script setup lang="ts">
import type { IProject } from '~/interfaces/IProject'

const props = defineProps<{
  project: IProject;
}>()
</script>

<template>
  <div class="project-card">
    <NuxtImg
      :src="project.img"
      class="img"
      :alt="`Project - ${project.title}`"
    />
    <span class="text-lg font-semibold">{{ project.title }}</span>
    <span class="dark:text-gray-400 line-clamp-6">{{
      project.description
    }}</span>
    <div class="flex flex-wrap gap-2 pt-2">
      <span
        v-for="(skill, i) in project.skills"
        :key="`project-skill_${i}`"
        class="skill"
      >
        {{ skill }}
      </span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.project-card {
  @apply dark:bg-gray-800 px-4 py-3 shadow-lg border border-gray-200/40 dark:border-gray-200/20 rounded-md flex flex-col gap-3 hover:dark:bg-gray-900 transition hover:border-shamrock-400/60;
  .img {
    @apply rounded-sm;
  }
  .skill {
    @apply px-2 py-1 bg-shamrock-400/60 rounded-lg text-xs;
  }
}
</style>
