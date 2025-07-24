<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup></script>

<style>
/* 引入主题CSS */
@import '~/assets/css/theme.css';
@import '~/assets/css/color-mode.css';

/* 全局样式 */
body {
  margin: 0;
  padding: 0;
  font-family: "Inter", "SF Pro Display", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, sans-serif;
}
</style>
