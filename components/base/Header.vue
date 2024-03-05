<script setup lang="ts">
import ThemeBtn from "@/components/buttons/ThemeBtn.vue";
import { NAV_ABOUTME_EVENT, NAV_EXPERIENCE_EVENT, NAV_PROJECTS_EVENT, NAV_SKILLS_EVENT } from '@/mixpanel.events';
import type { RouteKeys } from "@/interfaces/IRoute";
import { IMixpanelDirective } from "~/interfaces/IMixpanel";

const HEADER_HEIGHT = 120;

const { t, locale } = useI18n({
  useScope: "local",
});

type Options = {
  [key: string]: { id: RouteKeys; value: string, mixpanelEvent: IMixpanelDirective }[];
}
const options = <Options>{
  en: [
    { id: "about_me", value: "About me", mixpanelEvent: NAV_ABOUTME_EVENT },
    { id: "skills", value: "Skills", mixpanelEvent: NAV_SKILLS_EVENT },
    { id: "experience", value: "Experience", mixpanelEvent: NAV_EXPERIENCE_EVENT },
    { id: "projects", value: "Projects", mixpanelEvent: NAV_PROJECTS_EVENT },
  ],
  es: [
    { id: "about_me", value: "Sobre mi", mixpanelEvent: NAV_ABOUTME_EVENT },
    { id: "skills", value: "Habilidades", mixpanelEvent: NAV_SKILLS_EVENT },
    { id: "experience", value: "Experiencia", mixpanelEvent: NAV_EXPERIENCE_EVENT },
    { id: "projects", value: "Proyectos", mixpanelEvent: NAV_PROJECTS_EVENT },
  ],
};
const currentOptions = computed(() => options[locale.value]);

const activeOptn = ref<RouteKeys>("about_me");
const openMenuMobile = ref(false);
const setOption = (id: RouteKeys) => {
  activeOptn.value = id;

  document.getElementById(id)?.scrollIntoView({
    behavior: "smooth",
  });
};
const setOptionMobile = (id: RouteKeys) => {
  setOption(id);
  setTimeout(() => {
    openMenuMobile.value = false;
  }, 200);
};

onMounted(() => {
  // setScrollListener()
});

function setScrollListener() {
  const sectionElements = options.en.map((option) => {
    const el = document.getElementById(option.id);
    return {
      id: option.id,
      top: el?.getBoundingClientRect().top,
      bottom: el?.getBoundingClientRect().bottom,
    };
  });

  document.addEventListener("scroll", (e) => {
    sectionElements.forEach((el) => {
      if (
        scrollY >= (el.top ?? 0) - HEADER_HEIGHT &&
        scrollY <= (el.bottom ?? 0)
      ) {
        setOption(el.id);
        return;
      }
    });
  });
}
</script>
<template>
  <header class="header dark:bg-black/20 bg-gray-200/50">
    <nav
      class="flex items-center justify-between p-6 mx-auto max-w-7xl lg:px-8"
    >
      <div class="flex lg:flex-1">
        <!-- <NuxtImg
          src="https://tailwindui.com/img/logos/mark.svg?color=teal&shade=400"
          class="w-auto h-8"
        /> -->
      </div>
      <ul class="hidden gap-3 md:flex header-list">
        <template v-for="option in currentOptions" :key="option.id">
          <li
            :class="{
              active: option.id === activeOptn,
              'px-4': option.id !== activeOptn,
            }"
            class="flex items-center cursor-pointer"
            @click="setOption(option.id)"
            v-mixpanel="option.mixpanelEvent"
          >
            <UIcon
              class="text-xs"
              v-if="option.id === activeOptn"
              name="i-ph-caret-left-bold"
            />
            {{ option.value }}
            <UIcon
              v-if="option.id === activeOptn"
              class="text-xs"
              name="i-ph-caret-right-bold"
            />
          </li>
        </template>
      </ul>
      <div class="flex gap-2">
        <ThemeBtn />
        <div
          class="block cursor-pointer md:hidden size-10"
          @click="openMenuMobile = !openMenuMobile"
        >
          <svg
            v-if="!openMenuMobile"
            width="44"
            height="44"
            viewBox="0 0 44 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class=""
            style=""
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M10.6667 11.6667C10.6667 11.2246 10.8423 10.8007 11.1548 10.4882C11.4674 10.1756 11.8913 10 12.3333 10H32.3333C32.7754 10 33.1993 10.1756 33.5118 10.4882C33.8244 10.8007 34 11.2246 34 11.6667C34 12.1087 33.8244 12.5326 33.5118 12.8452C33.1993 13.1577 32.7754 13.3333 32.3333 13.3333H12.3333C11.8913 13.3333 11.4674 13.1577 11.1548 12.8452C10.8423 12.5326 10.6667 12.1087 10.6667 11.6667Z"
              fill="#4ecca3"
            ></path>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M10.6667 19.9999C10.6667 19.5579 10.8423 19.134 11.1548 18.8214C11.4674 18.5088 11.8913 18.3333 12.3333 18.3333H32.3333C32.7754 18.3333 33.1993 18.5088 33.5118 18.8214C33.8244 19.134 34 19.5579 34 19.9999C34 20.4419 33.8244 20.8659 33.5118 21.1784C33.1993 21.491 32.7754 21.6666 32.3333 21.6666H12.3333C11.8913 21.6666 11.4674 21.491 11.1548 21.1784C10.8423 20.8659 10.6667 20.4419 10.6667 19.9999Z"
              fill="#00df9a"
            ></path>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M20.6667 28.3334C20.6667 27.8914 20.8423 27.4675 21.1548 27.1549C21.4674 26.8423 21.8913 26.6667 22.3333 26.6667H32.3333C32.7754 26.6667 33.1993 26.8423 33.5118 27.1549C33.8244 27.4675 34 27.8914 34 28.3334C34 28.7754 33.8244 29.1994 33.5118 29.5119C33.1993 29.8245 32.7754 30.0001 32.3333 30.0001H22.3333C21.8913 30.0001 21.4674 29.8245 21.1548 29.5119C20.8423 29.1994 20.6667 28.7754 20.6667 28.3334Z"
              fill="#4ecca3"
            ></path>
          </svg>
          <UIcon
            v-else
            name="i-ph-x-bold"
            class="size-10 text-shamrock-400"
          />
        </div>
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

    <div
      v-if="openMenuMobile"
      class="flex flex-col w-full p-4 menu-mobile md:hidden"
      data-aos="fade-up"
      data-aos-duration="800"
    >
      <div class="flex flex-col gap-1">
        <div
          v-for="(option,i) in currentOptions"
          :key="`option-mobile_${option.id}`"
          class="py-3 text-center rounded-md cursor-pointer dark:bg-shark-900 bg-shark-400"
          :class="{ active: option.id === activeOptn }"
          @click="setOptionMobile(option.id)"
          v-mixpanel="option.mixpanelEvent"
        >
          <UIcon
            class="text-xs"
            v-if="option.id === activeOptn"
            name="i-ph-caret-left-bold"
          />
          {{ option.value }}
          <UIcon
            v-if="option.id === activeOptn"
            class="text-xs"
            name="i-ph-caret-right-bold"
          />
        </div>
      </div>
    </div>
  </header>
</template>
<style lang="scss" scoped>
.header {
  @apply fixed top-0 backdrop-blur left-0 w-[100vw] md:w-full border-b dark:border-shark-950/40 z-30;
  .header-list {
    .active {
      @apply text-shamrock-400 font-bold;
    }
  }
  .menu-mobile {
    .active {
      @apply text-shamrock-400 font-bold;
    }
  }
}
</style>
<i18n lang="yaml">
en:
  log_in: Log in
  navigation: Navigation
es:
  log_in: Iniciar sesión
  navigation: Navegación
</i18n>
