<script setup lang="ts">
const { locale } = useI18n();
const switchLocalePath = useSwitchLocalePath();

const locales = [
  { code: 'sk', label: 'SK' },
  { code: 'en', label: 'EN' },
];
</script>

<template>
    <div class="flex min-h-screen flex-col">
        <div class="no-print fixed top-4 right-4 z-40 rounded-lg border border-gray-700 bg-gray-950/85 p-1 shadow-lg shadow-black/20 backdrop-blur">
            <div class="flex items-center gap-1" aria-label="Language">
                <NuxtLink
                    v-for="item in locales"
                    :key="item.code"
                    :to="switchLocalePath(item.code)"
                    class="inline-flex min-h-8 min-w-10 items-center justify-center rounded-md px-2.5 text-xs font-bold uppercase transition focus:outline-none focus:ring-2 focus:ring-cyan-300"
                    :class="locale === item.code ? 'bg-cyan-400 text-gray-950 shadow-sm shadow-cyan-950/40' : 'text-gray-300 hover:bg-gray-800 hover:text-cyan-100'"
                >
                    {{ item.label }}
                </NuxtLink>
            </div>
        </div>
        <slot />
    </div>
</template>
