<script setup lang="ts">
const { locale } = useI18n();
const switchLocalePath = useSwitchLocalePath();

const locales = [
  { code: 'sk', label: 'SK' },
  { code: 'en', label: 'EN' },
];
</script>

<template>
    <div class="flex flex-col min-h-screen">
        <div class="fixed top-4 right-4 z-40 rounded-full border border-gray-700 bg-gray-950/80 px-2 py-1 shadow-lg backdrop-blur">
            <div class="flex items-center gap-1">
                <NuxtLink
                    v-for="item in locales"
                    :key="item.code"
                    :to="switchLocalePath(item.code)"
                    class="rounded-full px-3 py-1 text-xs font-semibold transition"
                    :class="locale === item.code ? 'bg-blue-600 text-white' : 'text-gray-300 hover:bg-gray-800'"
                >
                    {{ item.label }}
                </NuxtLink>
            </div>
        </div>
        <slot />
    </div>
</template>