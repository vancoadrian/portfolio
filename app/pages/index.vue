<template>
  <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-950 to-gray-800">
  <div class="flex flex-col sm:flex-row gap-10 sm:gap-16 w-full max-w-2xl px-4 pt-6 sm:pt-24 pb-24 items-center justify-center">
        <!-- Footer Social Media -->
        <footer class="w-full fixed left-0 bottom-0 z-30 bg-gray-950/90 border-t border-gray-800 flex justify-center py-3">
          <a href="https://www.linkedin.com/in/adrián-vančo-0b4835176" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 px-4 py-1 rounded bg-gray-900/80 border border-gray-700 text-gray-300 hover:bg-blue-700 hover:text-white transition shadow text-sm">
            <Icon name="mdi:linkedin" class="w-5 h-5" />
            <span>LinkedIn</span>
          </a>
        </footer>
      <NuxtLink
        v-for="cat in categories"
        :key="cat.category"
        :to="cat.link"
  class="flex-1 min-w-[160px] max-w-[220px] sm:min-w-[220px] sm:max-w-[320px] mx-auto rounded-2xl border border-gray-700 bg-gray-950/80 shadow-lg flex flex-col items-center justify-center cursor-pointer transition hover:shadow-2xl hover:border-gray-500 group p-4 sm:p-8 no-underline focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <div class="flex items-center justify-center w-20 h-20 rounded-full border border-gray-700 bg-gray-900 mb-6 shadow group-hover:border-gray-500 transition">
            <Icon :name="cat.icon" class="text-4xl text-gray-300" />
        </div>
        <div class="text-xl font-semibold mb-2 text-gray-100 tracking-wide uppercase text-center">{{ cat.category }}</div>
        <div class="text-gray-400 text-center text-base">{{ cat.description }}</div>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const config = useRuntimeConfig();
const route = useRoute();
const { t } = useI18n();

const siteURL = computed(() => config.public.siteURL?.replace(/\/$/, '') || '');
const canonicalURL = computed(() => {
  if (!siteURL.value) return '';
  return `${siteURL.value}${route.path}`;
});
const ogImageURL = computed(() => {
  const imagePath = `${config.public.baseURL}linkedin.jpg`;
  return siteURL.value ? `${siteURL.value}${imagePath.startsWith('/') ? imagePath : `/${imagePath}`}` : imagePath;
});

useHead({
  link: () => (canonicalURL.value ? [{ rel: 'canonical', href: canonicalURL.value }] : []),
});

useSeoMeta({
  title: () => t('home.seoTitle'),
  description: () => t('home.seoDescription'),
  ogTitle: () => t('home.seoTitle'),
  ogDescription: () => t('home.seoDescription'),
  ogUrl: () => canonicalURL.value,
  ogImage: () => ogImageURL.value,
  twitterTitle: () => t('home.seoTitle'),
  twitterDescription: () => t('home.seoDescription'),
  twitterImage: () => ogImageURL.value,
  twitterCard: 'summary_large_image',
});

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