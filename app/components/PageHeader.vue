<script setup lang="ts">
const { t } = useI18n();
</script>

<template>
  <div class="flex flex-wrap items-center justify-between gap-3">
    <NuxtLink
      to="/"
      class="inline-flex min-h-10 items-center gap-2 rounded-lg border border-gray-700 bg-gray-950/80 px-4 py-2 text-sm font-bold text-gray-200 shadow-lg shadow-black/20 transition hover:border-cyan-300 hover:text-cyan-200 focus:outline-none focus:ring-2 focus:ring-cyan-300"
    >
      <Icon name="mdi:arrow-left" class="text-lg" />
      <span>{{ t('common.backHome') }}</span>
    </NuxtLink>
    <LanguageSwitch />
  </div>
</template>
