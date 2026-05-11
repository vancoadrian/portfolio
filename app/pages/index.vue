<template>
  <main class="min-h-screen overflow-hidden bg-gray-950 text-gray-100">
    <section
      class="relative flex min-h-screen flex-col overflow-hidden px-4 py-8 sm:px-6 lg:px-10"
    >
      <div class="absolute inset-0 bg-[linear-gradient(180deg,#030712_0%,#07111f_56%,#0f172a_100%)]"></div>
      <div class="absolute inset-0 bg-[linear-gradient(90deg,rgba(34,211,238,0.12)_0%,rgba(3,7,18,0)_42%,rgba(16,185,129,0.1)_100%)]"></div>
      <div class="absolute inset-x-0 top-0 h-px bg-cyan-300/30"></div>

      <div class="relative z-10 flex max-w-[calc(100%-8.5rem)] items-center gap-3 sm:max-w-none">
        <img
          :src="`${config.public.baseURL}icon.png`"
          alt=""
          class="h-10 w-10 rounded-lg border border-cyan-400/30 bg-gray-900 object-cover"
        />
        <div class="min-w-0">
          <div class="truncate text-sm font-bold text-gray-100">{{ t('home.name') }}</div>
          <div class="truncate text-xs font-semibold uppercase text-emerald-300">{{ t('home.status') }}</div>
        </div>
      </div>

      <div class="relative z-10 mx-auto grid w-full min-w-0 max-w-6xl gap-10 pt-10 pb-10 sm:pt-14 lg:grid-cols-[minmax(0,1fr)_25rem] lg:items-end lg:pt-16">
        <div class="w-full min-w-0 max-w-3xl">
          <div class="mb-5 inline-flex max-w-full items-center gap-2 border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-sm font-semibold text-emerald-200">
            <Icon name="mdi:map-marker" class="text-base" />
            <span class="truncate">{{ t('home.location') }}</span>
          </div>

          <h1 class="max-w-3xl break-words text-5xl font-bold leading-none text-white sm:text-6xl lg:text-7xl">
            {{ t('home.name') }}
          </h1>
          <p class="mt-4 max-w-[22rem] break-words text-2xl font-semibold leading-tight text-cyan-200 sm:max-w-2xl sm:text-3xl">
            {{ t('home.role') }}
          </p>
          <p class="mt-6 max-w-[22rem] text-lg leading-8 text-gray-300 sm:max-w-2xl sm:text-xl">
            {{ t('home.intro') }}
          </p>

          <div class="mt-8 flex max-w-[26rem] flex-wrap gap-3 sm:max-w-none">
            <NuxtLink
              to="/projects"
              class="inline-flex min-h-11 max-w-full items-center gap-2 rounded-lg bg-cyan-400 px-5 py-3 text-base font-bold text-gray-950 transition hover:bg-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-200"
            >
              <Icon name="mdi:folder-open" class="text-xl" />
              <span>{{ t('home.primaryCta') }}</span>
            </NuxtLink>
            <NuxtLink
              to="/cv"
              class="inline-flex min-h-11 max-w-full items-center gap-2 rounded-lg border border-gray-600 bg-gray-950/70 px-5 py-3 text-base font-bold text-gray-100 transition hover:border-emerald-300 hover:text-emerald-200 focus:outline-none focus:ring-2 focus:ring-emerald-300"
            >
              <Icon name="mdi:file-account" class="text-xl" />
              <span>{{ t('home.secondaryCta') }}</span>
            </NuxtLink>
            <a
              href="https://www.linkedin.com/in/adrián-vančo-0b4835176"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex min-h-11 max-w-full items-center gap-2 rounded-lg border border-gray-600 bg-gray-950/70 px-5 py-3 text-base font-bold text-gray-100 transition hover:border-amber-300 hover:text-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-300"
            >
              <Icon name="mdi:linkedin" class="text-xl" />
              <span>{{ t('home.linkedIn') }}</span>
            </a>
          </div>

          <div class="mt-10">
            <div class="mb-3 text-sm font-bold uppercase text-gray-400">{{ t('home.focusTitle') }}</div>
            <div class="flex max-w-[22rem] flex-wrap gap-2 sm:max-w-full">
              <span
                v-for="area in focusAreas"
                :key="area.label"
                class="inline-flex max-w-full items-center gap-2 rounded-lg border border-gray-700 bg-gray-900/80 px-3 py-2 text-sm font-semibold text-gray-200"
              >
                <Icon :name="area.icon" :class="area.iconClass" />
                {{ area.label }}
              </span>
            </div>
          </div>
        </div>

        <div class="min-w-0 lg:pb-2">
          <div class="mb-4">
            <div class="text-2xl font-bold text-white">{{ t('home.exploreTitle') }}</div>
            <p class="mt-1 text-sm text-gray-400">{{ t('home.exploreSubtitle') }}</p>
          </div>
          <div class="grid gap-4">
            <NuxtLink
              v-for="cat in categories"
              :key="cat.category"
              :to="cat.link"
              class="group rounded-lg border border-gray-700 bg-gray-950/82 p-5 shadow-xl shadow-black/20 transition hover:-translate-y-0.5 hover:border-cyan-300/70 hover:bg-gray-900/92 focus:outline-none focus:ring-2 focus:ring-cyan-300"
            >
              <div class="flex items-start justify-between gap-5">
                <div class="min-w-0">
                  <div class="mb-3 flex h-11 w-11 items-center justify-center rounded-lg border border-gray-700 bg-gray-900 text-cyan-300 transition group-hover:border-cyan-300">
                    <Icon :name="cat.icon" class="text-2xl" />
                  </div>
                  <div class="text-xl font-bold uppercase text-gray-100">{{ cat.category }}</div>
                  <div class="mt-2 text-base leading-6 text-gray-400">{{ cat.description }}</div>
                </div>
                <Icon name="mdi:arrow-right" class="mt-1 shrink-0 text-2xl text-gray-500 transition group-hover:translate-x-1 group-hover:text-cyan-300" />
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { computed } from 'vue';

const config = useRuntimeConfig();
const { t } = useI18n();

usePortfolioSeo({
  title: () => t('home.seoTitle'),
  description: () => t('home.seoDescription'),
});

const focusAreas = computed(() => [
  { label: t('home.focusWeb'), icon: 'mdi:web', iconClass: 'text-cyan-300' },
  { label: t('home.focusAutomation'), icon: 'mdi:lightning-bolt', iconClass: 'text-amber-300' },
  { label: t('home.focusEnterprise'), icon: 'mdi:server', iconClass: 'text-emerald-300' },
  { label: t('home.focusElectronics'), icon: 'mdi:chip', iconClass: 'text-sky-300' },
]);

const categories = computed(() => [
  {
    category: t('home.cvTitle'),
    description: t('home.cvDescription'),
    icon: 'mdi:account-box',
    link: '/cv',
  },
  {
    category: t('home.projectsTitle'),
    description: t('home.projectsDescription'),
    icon: 'mdi:folder',
    link: '/projects',
  },
]);
</script>
