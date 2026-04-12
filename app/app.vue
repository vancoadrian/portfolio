<script setup>
const { locale } = useI18n();

useHead({
  htmlAttrs: {
    lang: () => locale.value,
  },
});
</script>

<template>
  <div class="font-rajdhani">
    <NuxtLayout>
      <UApp>
      <NuxtPage />
    </UApp>
    </NuxtLayout>
  </div>
</template>