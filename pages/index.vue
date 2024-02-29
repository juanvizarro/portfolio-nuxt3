<script setup lang="ts">
  import portfolioData from '@/data/portfolio-data.json'
  // import { useAnime } from '#anime'
  import type { IPortfolioData } from '@/interfaces/IPortfolioData'

  const img = useImage()
  const { t, locale } = useI18n({ useScope: 'local' })

  const data = <IPortfolioData>portfolioData
  const translationData = computed(() => locale.value === 'es' ? data.translation.es : data.translation.en)

  const skillsData = computed(() => {
    const predata = [
      {
        type: 'frontend',
        title: 'Frontend',
        iconName: 'i-ph-heart',
      },
      {
        type: 'mobile',
        title: 'Mobile',
        iconName: 'i-ph-device-mobile-camera',
      },
      {
        type: 'backend',
        title: 'Backend',
        iconName: 'i-ph-gear',
      },
      {
        type: 'bd',
        title: t('database'),
        iconName: 'i-ph-database',
      },
      {
        type: 'other',
        title: t('other'),
        iconName: 'i-ph-atom',
      }
    ]

    return predata.map(pre => ({...pre, skills: data.skills.filter(skill => skill.type === pre.type)}))
  })
  const experienceData = computed(() => data.experiences)
  const projectsData = computed(() => data.projects)

</script>
<template>
  <div class="relative main-page">
    <!-- <MouseBall /> -->
    <!-- <ClientOnly> -->
      <section id="about_me">
        <div class="flex flex-col items-center justify-between w-full gap-5 sm:flex-row">
          <div class="md:max-w-[400px] lg:max-w-[600px] left text-center sm:text-start">
          <h3 class="font-semibold uppercase text-shamrock-400">
            {{ translationData.speciality }}
          </h3>
          <h1 class="text-3xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text pt-4 pb-4 bg-gradient-to-r from-sky-400 to-[#92FE9D]">
            {{ data.full_name }}
          </h1>
          <p class="mt-2 leading-7 text-gray-800 dark:text-gray-300">{{ translationData.description }}</p>
          <div
            class="grid grid-cols-2 py-3 md:py-6"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <div class="with-border indicator">
              <span class="indicator--value">+<span id="indicator-webDev">5</span></span>
              <span class="indicator--description">{{ t('years_of') }} <br> {{ t('web_development') }}</span>
            </div>
            <div class="indicator">
              <span class="indicator--value">+10</span>
              <span class="indicator--description">{{ t('fulfilled') }}<br> {{ t('projects') }} </span>
            </div>
            <!-- <div class="indicator">
              <span class="indicator--value">+5 {{ t('year', 5) }}</span>
              <span class="indicator--descrip`tion">{{ t('web_development') }}</span>
            </div> -->
          </div>
          <div
          class="mt-3 avatar md:hidden"
          data-aos="zoom-in"
          data-aos-duration="2000"
          data-aos-once="true"
        >
          <NuxtImg
            :src="data.profile_img"
            :placeholder="img('/avatar.jpeg', { blur: 5, f: 'png', h: 300})"
            loading="lazy"
            class="rounded-full hover:scale-105"
          />
        </div>
          <div
            class="flex justify-center gap-3 pt-8 md:justify-start"
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            <UButton
              :label="t('contact_me')"
              color="shamrock"
              target="_blank"
              :to="data.contact_link"
              size="xl"
              type="link"
            >
              <template #trailing>
                <UIcon
                  name="i-ph-whatsapp-logo"
                  class="size-[1.3em]"
                />
              </template>
            </UButton>
            <UButton
              variant="outline"
              :label="t('download_cv')"
              color="shamrock"
              target="_blank"
              :to="data.cv"
              size="xl"
            >
              <template #trailing>
                <UIcon
                  name="i-ph-download-simple"
                  class="size-[1.3em]"
                />
              </template>
            </UButton>
          </div>
        </div>
        <div
          class="hidden avatar duration-400 md:block"
          data-aos="zoom-in"
          data-aos-duration="2000"
          data-aos-once="true"
        >
          <NuxtImg
            :src="data.profile_img"
            :placeholder="img('/avatar.jpeg', { blur: 5, f: 'png', h: 300})"
            loading="lazy"
            class="rounded-full hover:scale-105"
          />
        </div>
        </div>
        <div class="flex gap-4 pt-10 md:pt-14">
          <div v-mixpanel="{ id: 1, name: 'contact-linkedin', payload: {} }">
            <UButton size="xl" :to="data.linkedin" target="_blank" variant="link" color="gray" class="contact-btn">
              <UIcon name="i-ph-linkedin-logo" class="contact-btn--icon" />
              <span>Linkedin</span>
            </UButton>
          </div>
          <UButton size="xl" :to="data.github" target="_blank" variant="link" color="gray" class="contact-btn">
            <UIcon name="i-ph-github-logo" class="contact-btn--icon" />
            <span>Github</span>
          </UButton>
          <UButton size="xl" :to="`mailto:${data.email}`" target="_blank" variant="link" color="gray" class="contact-btn">
            <UIcon name="i-ph-envelope" class="contact-btn--icon" />
            <span>Email</span>
          </UButton>
        </div>
      </section>
    <!-- </ClientOnly> -->
    <section id="skills" data-aos="fade-up"
            data-aos-duration="2000">
      <SectionTitle :title="t('my_skills')" class="pb-5" />
      <div class="flex flex-col gap-3">
        <div v-for="skillType in skillsData" :key="`skill_${skillType.type}`">
          <h2 class="flex items-center gap-2 pb-2 text-lg">
            <UIcon :name="skillType.iconName"/> {{ skillType.title}}
          </h2>
          <div class="grid grid-cols-3 gap-5 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7">
            <Skill v-for="skill in skillType.skills" :key="`skill_${skill.title}`" :skill="skill" />
          </div>
        </div>
      </div>
    </section>
    <section id="experience">
      <SectionTitle :title="t('my_experience')" class="pb-6" />
      <ol class="relative border-gray-300 border-s-2">
        <Experience
          v-for="(experience, i) in experienceData"
          :key="`experience_${i}`"
          :experience="experience"
          :locations="data.locations"
        />
      </ol>
    </section>
    <section id="projects" class="pb-6">
      <SectionTitle :title="t('my_projects')" class="pb-6" />
      <div class="grid grid-cols-2 gap-4 md:grid-cols-3">
        <Project v-for="(project,i) in projectsData" :key="`project_${i}`" :project="project" />
      </div>
    </section>
    <!-- <ClientOnly>
      <div>
        <h2 class="text-gray dark:text-primary">
          texto en client
        </h2>
      </div>
    </ClientOnly> -->
  </div>
</template>
<style  lang="scss" scoped>
.main-page{
  section{
    scroll-margin: 100px;
  }
  #about_me{
    @apply flex flex-col items-center justify-center h-auto md:min-h-[42rem];
  }
  .avatar{
    @apply ring-2 hover:ring-4 ring-shamrock-400 p-1 hover:p-0 transition-[padding,box-shadow] overflow-hidden w-[200px] md:w-[250px] lg:w-[300px] mx-auto rounded-full;
  }
  @apply flex flex-col gap-8;
  @media screen and (max-width: 640px) {
    .avatar{
      @apply size-[150px];
    }
  }
  .indicator{
    &.with-border{
      @apply border-r-2 border-sky-600;
    }
    @apply flex flex-col items-center gap-2;
    &--value{
      @apply text-2xl font-semibold text-sky-400;
    }
    &--description{
      @apply text-center;
    }
  }
  .contact-btn{
    @apply transition-all dark:hover:text-white flex flex-col gap-2;
    &--icon{
      @apply size-[32px] md:size-[40px] hover:shadow-md shadow-shamrock-400;
    }
  }
  #experience{
    @apply lg:max-w-[800px] mx-2 lg:mx-auto;
  }
}
</style>
<i18n lang="yaml">
en:
  contact_me: Contact me
  download_cv: Download CV
  my_skills: My skills
  my_experience: My experience
  my_projects: My projects
  fulfilled: Fulfilled
  projects: Projects
  database: Database
  other: Other
  year: "year | years"
  years_of: Years of
  web_development: Web Development
es:
  contact_me: Contáctame
  download_cv: Descargar CV
  my_skills: Mis habilidades
  my_experience: Mi experiencia laboral
  my_projects: Mis proyectos
  fulfilled: Proyectos
  projects: Realizados
  database: Base de datos
  other: Otros
  year: "año | años"
  years_of: Años de
  web_development: Desarrollo Web
</i18n>
