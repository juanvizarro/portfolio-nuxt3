<script setup lang="ts">
import portfolioData from "@/data/portfolio-data.json";
import mixpanel from 'mixpanel-browser'
import { CONTACT_EMAIL_EVENT, CONTACT_GITHUB_EVENT, CONTACT_LINKEDIN_EVENT } from '@/mixpanel.events'
import type { IPortfolioData } from "@/interfaces/IPortfolioData";

const { t, locale } = useI18n({ useScope: "local" });

const data = <IPortfolioData>portfolioData;
const translationData = computed(() =>
  locale.value === "es" ? data.translation.es : data.translation.en,
);

const skillsData = computed(() => {
  const predata = [
    {
      type: "frontend",
      title: "Frontend",
      iconName: "i-ph-heart",
    },
    {
      type: "mobile",
      title: "Mobile",
      iconName: "i-ph-device-mobile-camera",
    },
    {
      type: "backend",
      title: "Backend",
      iconName: "i-ph-gear",
    },
    {
      type: "bd",
      title: t("database"),
      iconName: "i-ph-database",
    },
    {
      type: "other",
      title: t("other"),
      iconName: "i-ph-atom",
    },
  ];

  return predata.map((pre) => ({
    ...pre,
    skills: data.skills.filter((skill) => skill.type === pre.type),
  }));
});
const experienceData = computed(() => data.experiences);
const projectsData = computed(() => data.projects);

onMounted(() => {
  if(!import.meta.dev) mixpanel.track_pageview()
})
</script>
<template>
  <div class="relative main-page">
    <!-- <ClientOnly> -->
    <section id="about_me">
      <div
        class="flex flex-col items-center justify-between w-full gap-5 sm:flex-row"
      >
        <div
          class="md:max-w-[400px] lg:max-w-[600px] left text-center sm:text-start"
        >
          <h3
            class="font-semibold uppercase text-shamrock-400"
            data-aos="fade-left"
            data-aos-duration="1500"
          >
            {{ translationData.speciality }}
          </h3>
          <h1
            class="text-3xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text pt-4 pb-4 bg-gradient-to-r from-sky-400 to-[#92FE9D]"
            data-aos="fade-left"
            data-aos-duration="1500"
            data-aos-delay="250"
          >
            {{ data.full_name }}
          </h1>
          <p
            class="mt-2 leading-7 text-gray-800 dark:text-gray-300"
            data-aos="fade-left"
            data-aos-duration="1500"
            data-aos-delay="500"
          >
            {{ translationData.description }}
          </p>
          <div
            class="grid grid-cols-2 py-3 md:py-6"
            data-aos="fade-left"
            data-aos-duration="1500"
            data-aos-delay="750"
          >
            <div class="with-border indicator">
              <span class="indicator--value"
                >+<span id="indicator-webDev">5</span></span
              >
              <span class="indicator--description"
                >{{ t("years_of") }} <br />
                {{ t("web_development") }}</span
              >
            </div>
            <div class="indicator">
              <span class="indicator--value"
                >+<span id="indicator-projects">10</span></span
              >
              <span class="indicator--description"
                >{{ t("fulfilled") }}<br />
                {{ t("projects") }}
              </span>
            </div>
            <!-- <div class="indicator">
              <span class="indicator--value">+5 {{ t('year', 5) }}</span>
              <span class="indicator--descrip`tion">{{ t('web_development') }}</span>
            </div> -->
          </div>
          <Avatar
            class="mt-3 md:hidden"
            :src="data.profile_img"
            data-aos="fade-left"
            data-aos-duration="1500"
            data-aos-delay="1000"
          />
          <div
            class="flex justify-center gap-3 pt-8 md:justify-start"
            data-aos="fade-left"
            data-aos-duration="1500"
            data-aos-delay="1250"
          >
            <UButton
              :label="t('contact_me')"
              color="shamrock"
              target="_blank"
              :to="data.contact_link"
              size="xl"
              type="link"
              aria-label="contact-me"
            >
              <template #trailing>
                <UIcon name="i-ph-whatsapp-logo" class="size-[1.3em]" />
              </template>
            </UButton>
            <UButton
              variant="outline"
              :label="t('download_cv')"
              color="shamrock"
              target="_blank"
              :to="data.cv"
              size="xl"
              aria-label="download-cv"
            >
              <template #trailing>
                <UIcon name="i-ph-download-simple" class="size-[1.3em]" />
              </template>
            </UButton>
          </div>
        </div>
        <Avatar
          :src="data.profile_img"
          class="hidden md:block"
          data-aos="zoom-in"
          data-aos-duration="1500"
        />
      </div>
      <div class="flex gap-4 pt-10 md:pt-14">
        <div v-mixpanel="CONTACT_LINKEDIN_EVENT">
          <UButton
            size="xl"
            :to="data.linkedin"
            target="_blank"
            variant="link"
            color="gray"
            class="contact-btn"
            data-aos="fade-left"
            data-aos-duration="1500"
            aria-label="linkedin"
          >
            <div class="flex flex-col items-center gap-2">
              <UIcon name="i-ph-linkedin-logo" class="contact-btn--icon" />
              <span>Linkedin</span>
            </div>
          </UButton>
        </div>
        <div v-mixpanel="CONTACT_GITHUB_EVENT">
          <UButton
            size="xl"
            :to="data.github"
            target="_blank"
            variant="link"
            color="gray"
            class="contact-btn"
            data-aos="fade-zoom-in"
            data-aos-duration="1500"
            aria-label="github"
          >
            <div class="flex flex-col items-center gap-2">
              <UIcon name="i-ph-github-logo" class="contact-btn--icon" />
              <span>Github</span>
            </div>
          </UButton>
        </div>
        <div v-mixpanel="CONTACT_EMAIL_EVENT">
          <UButton
            size="xl"
            :to="`mailto:${data.email}`"
            target="_blank"
            variant="link"
            color="gray"
            class="contact-btn"
            data-aos="fade-right"
            data-aos-duration="1500"
            aria-label="email"
          >
            <div class="flex flex-col items-center gap-2">
              <UIcon name="i-ph-envelope" class="contact-btn--icon" />
              <span>Email</span>
            </div>
          </UButton>
        </div>
      </div>
    </section>
    <!-- </ClientOnly> -->
    <section id="skills">
      <SectionTitle
        :title="t('my_skills')"
        class="pb-5"
        data-aos="fade-up"
        data-aos-duration="1500"
      />
      <div class="flex flex-col gap-3">
        <div v-for="skillType in skillsData" :key="`skill_${skillType.type}`">
          <h2
            class="flex items-center gap-2 pb-2 text-lg"
            data-aos="fade-left"
            data-aos-duration="1500"
          >
            <UIcon :name="skillType.iconName" /> {{ skillType.title }}
          </h2>
          <div
            class="grid grid-cols-3 gap-5 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7"
          >
            <Skill
              v-for="skill in skillType.skills"
              :key="`skill_${skill.title}`"
              :skill="skill"
              data-aos="zoom-in"
              data-aos-duration="1500"
            />
          </div>
        </div>
      </div>
    </section>
    <section id="experience">
      <SectionTitle
        :title="t('my_experience')"
        class="pb-6"
        data-aos="fade-up"
        data-aos-duration="1500"
      />
      <ol
        class="relative border-gray-300 border-s-2"
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        <Experience
          v-for="(experience, i) in experienceData"
          :key="`experience_${i}`"
          :experience="experience"
          :locations="data.locations"
        />
      </ol>
    </section>
    <section id="projects" class="pb-6">
      <SectionTitle
        :title="t('my_projects')"
        class="pb-6"
        data-aos="fade-up"
        data-aos-duration="1500"
      />
      <div class="grid grid-cols-1 gap-4 md:grid-cols-3 sm:grid-cols-2">
        <Project
          v-for="(project, i) in projectsData"
          :key="`project_${i}`"
          :project="project"
          data-aos="zoom-out"
          data-aos-duration="1500"
        />
      </div>
    </section>
  </div>
</template>
<style lang="scss" scoped>
.main-page {
  @apply flex flex-col gap-8 overflow-hidden;
  section {
    scroll-margin: 100px;
  }
  #about_me {
    @apply flex flex-col items-center justify-center h-auto md:min-h-[42rem];
  }
  .indicator {
    &.with-border {
      @apply border-r-2 border-sky-600;
    }
    @apply flex flex-col items-center gap-2;
    &--value {
      @apply text-2xl font-semibold text-sky-400;
    }
    &--description {
      @apply text-center;
    }
  }
  .contact-btn {
    @apply transition-all dark:hover:text-white;
    &--icon {
      @apply size-[32px] md:size-[40px] hover:shadow-md shadow-shamrock-400;
    }
  }
  #experience {
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
