<script setup lang="ts">
import type { NuxtError } from '#app';

const props = defineProps<{ error: NuxtError }>();

const { t } = useI18n();
const localePath = useLocalePath();

const isNotFound = computed(() => props.error.statusCode === 404);

function goHome() {
  clearError({ redirect: localePath('/') });
}
</script>

<template>
  <main class="relative flex min-h-screen flex-col overflow-hidden bg-gray-950 px-4 py-8 text-gray-100 sm:px-6 lg:px-10">
    <div class="absolute inset-0 bg-[linear-gradient(180deg,#030712_0%,#07111f_56%,#0f172a_100%)]"></div>
    <div class="absolute inset-0 bg-[linear-gradient(90deg,rgba(34,211,238,0.12)_0%,rgba(3,7,18,0)_42%,rgba(16,185,129,0.1)_100%)]"></div>
    <div class="absolute inset-x-0 top-0 h-px bg-cyan-300/30"></div>

    <div class="relative z-10 flex justify-end">
      <LanguageSwitch />
    </div>

    <div class="relative z-10 mx-auto flex w-full max-w-2xl flex-1 flex-col items-center justify-center text-center">
      <div class="mb-6 text-7xl font-bold text-cyan-300 sm:text-8xl">{{ error.statusCode }}</div>
      <h1 class="text-3xl font-bold text-white sm:text-4xl">
        {{ isNotFound ? t('error.notFoundTitle') : t('error.genericTitle') }}
      </h1>
      <p class="mt-4 max-w-xl text-lg leading-8 text-gray-300">
        {{ isNotFound ? t('error.notFoundDescription') : t('error.genericDescription') }}
      </p>
      <button
        type="button"
        class="mt-8 inline-flex min-h-11 items-center gap-2 rounded-lg bg-cyan-400 px-5 py-3 text-base font-bold text-gray-950 transition hover:bg-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-200"
        @click="goHome"
      >
        <Icon name="mdi:arrow-left" class="text-xl" />
        <span>{{ t('common.backHome') }}</span>
      </button>
    </div>
  </main>
</template>
