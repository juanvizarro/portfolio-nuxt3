<script setup lang="ts">
  import ThemeBtn from '@/components/buttons/ThemeBtn.vue'

  const { t, locale } = useI18n({
    useScope: 'local'
  })

  const data = {
    translation: {
      en: {
      speciality: 'Frontend Developer',
      description: 'desarrollador frontend con 4 años de experiencia'
      },
      es: {
        speciality: 'Desarrollador Frontend',
        description: 'desarrollador frontend con 4 años de experiencia'
      }
    },
    full_name: 'Juan Vizarro Ramos',
    skills: [
      {}
    ],
    cv: 'https://google.com.pe/mycv', // TODO: change
    contact_link: 'https://google.com.pe' // TODO: change
  }
  const translationData = computed(() => locale.value === 'es' ? data.translation.es : data.translation.en)

  const openCv = () => {
    window.open(data.cv, '_blank')
  }
  const openContactMe = () => {
    window.open(data.contact_link, '_blank')
  }
</script>
<template>
  <div class="main-page relative">
    <h1>esto es un h1</h1>
    <MouseBall />
    <UCard
      v-if="false"
      :ui="{
        background: 'bg-white dark:bg-gray-900',
      }"
    >
      <template #header>
        <h3>im header</h3>
      </template>
      <ThemeBtn />
      <template #footer>
        <h3 class="dark:text-teal-400">
          im footer
        </h3>
      </template>
    </UCard>
    <section class="presentation flex w-full sm:flex-row flex-col gap-5 items-center">
      <div class="left text-center sm:text-start">
        <h3 class="uppercase text-teal-400 font-semibold">
          {{ translationData.speciality }}
        </h3>
        <h1 class="text-3xl font-bold text-transparent bg-clip-text pt-2 bg-gradient-to-r from-sky-400 to-[#92FE9D]">
          {{ data.full_name }}
        </h1>
        <span class="mt-1 dark:text-gray-300 text-gray-800">{{ translationData.description }}</span>

        <div class="pt-4">
          <UButton
            class=""
            :label="t('contact_me')"
            color="teal"
            @click="openContactMe"
          >
            <template #trailing>
              <UIcon
                name="i-ph-whatsapp-logo"
                style="width: 1.3em; height: 1.3em"
              />
            </template>
          </UButton>
          <UButton
            variant="outline"
            :label="t('download_cv')"
            class="ms-3"
            color="teal"
            @click="openCv"
          >
            <template #trailing>
              <UIcon
                name="i-ph-download-simple"
                style="width: 1.3em; height: 1.3em"
              />
            </template>
          </UButton>
        </div>
      </div>
      <div class="mx-auto rounded-full avatar ring-2 hover:ring-4 ring-teal-400 p-1 hover:p-0 transition-[padding,box-shadow] duration-400 overflow-hidden">
        <NuxtImg
          src="/avatar.jpeg"
          class="rounded-full hover:scale-105"
        />
      </div>
    </section>
    <section class="skills pt-5">
      <SectionTitle :title="t('my_skills')" />
      <div />
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
  .avatar{
    width: 200px;
    height: 200px;
  }
  @media screen and (max-width: 640px) {
    .avatar{
      width: 150px;
      height: 150px;
    }
  }
}
</style>
<i18n lang="yaml">
en:
  contact_me: Contact me
  download_cv: Download CV
  my_skills: My skills
es:
  contact_me: Contactame
  download_cv: Descargar CV
  my_skills: Mis habilidades
</i18n>
