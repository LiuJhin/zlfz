<template>
  <div class="app-container">
    <!-- 交互元素 -->
    <ScrollIndicator />
    
    <NuxtRouteAnnouncer />
    <Navbar />

    <div class="main-content">
      <slot />
    </div>

    <Footer />
  </div>
</template>

<script setup>
import "@/assets/css/color-mode.css";
import Footer from "@/components/Footer.vue";
import Navbar from "@/components/Navbar/Navbar.vue";
import ScrollIndicator from "@/components/ScrollIndicator.vue";
</script>

<style>
/* 应用容器样式 */
.app-container {
  font-family: "Inter", "SF Pro Display", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, sans-serif;
  max-width: 100%;
  margin: 0;
  padding: 0;
  background-color: var(--bg-color);
  color: var(--text-color);
  min-height: 100vh;
  transition: background-color 0.3s ease, color 0.3s ease;
}

/* 主内容区域样式 */
.main-content {
  width: 100%;
  margin: 0 auto;
}

/* 全局样式 */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: "Inter", "SF Pro Display", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, sans-serif;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  margin-top: 0;
  font-weight: 700;
  line-height: 1.2;
}

a {
  text-decoration: none;
  color: var(--primary-color);
  transition: color 0.2s ease;
}

a:hover {
  color: var(--primary-color-dark);
}

img {
  max-width: 100%;
  height: auto;
}

button {
  cursor: pointer;
}
</style>
