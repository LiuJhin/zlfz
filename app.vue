<template>
  <div class="app-container">
    <NuxtRouteAnnouncer />
    <div class="header-controls">
      <div class="theme-switcher">
        <label for="theme-switch">主题:</label>
        <button id="theme-switch" @click="toggleColorMode" class="theme-switch">
          <span class="theme-switch-icon">{{ colorModeIcon }}</span>
          {{ colorModeText }}
        </button>
      </div>
    </div>
    <div class="content">
      <h1>欢迎来到我们的网站</h1>
      <p>这是一个使用Nuxt.js的网站</p>
      <div class="nav-links">
        <a href="#">首页</a> | <a href="#">关于</a> |
        <a href="#">联系我们</a>
      </div>
      <div class="buttons">
        <button>提交</button>
        <button>取消</button>
        <button>保存</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import "@/assets/css/color-mode.css";

const colorMode = useColorMode();

// 计算当前主题图标
const colorModeIcon = computed(() => {
  switch (colorMode.value) {
    case 'dark':
      return '🌙';
    case 'light':
      return '☀️';
    case 'sepia':
      return '📜';
    default:
      return '⚙️';
  }
});

// 计算当前主题文本
const colorModeText = computed(() => {
  switch (colorMode.value) {
    case 'dark':
      return '切换到明亮模式'; // 点击后切换到明亮模式
    case 'light':
      return '切换到暗黑模式'; // 点击后切换到暗黑模式
    case 'sepia':
      return '切换到明亮模式'; // 点击后切换到明亮模式
    default:
      return '切换到暗黑模式'; // 默认切换到暗黑模式
  }
});

// 切换颜色模式
const toggleColorMode = () => {
  // 在明亮和暗黑模式之间切换
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark';
};

// 组件挂载时的操作（如果需要的话）
// onMounted(() => {
  // 如果需要在组件挂载时执行某些操作，可以在这里添加
// });

</script>

<style>
.app-container {
  font-family: Arial, sans-serif;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.header-controls {
  display: flex;
  justify-content: flex-end;
  gap: 20px;
  margin-bottom: 30px;
}

.language-switcher,
.theme-switcher {
  display: flex;
  align-items: center;
  gap: 10px;
}

select {
  padding: 5px 10px;
  border-radius: 4px;
}

.content {
  text-align: center;
  padding: 40px 20px;
  border-radius: 8px;
  box-shadow: var(--card-shadow);
  background-color: var(--card-bg);
}

.nav-links {
  margin: 20px 0;
}

.buttons {
  margin-top: 30px;
  display: flex;
  justify-content: center;
  gap: 10px;
}

button {
  padding: 8px 16px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
}
/* 应用容器样式 */
.app-container {
  font-family: Arial, sans-serif;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: var(--bg-color);
  color: var(--text-color);
  min-height: 100vh;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.header-controls {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid var(--border-color);
}

.language-switcher,
.theme-switcher {
  display: flex;
  align-items: center;
}

.language-switcher label,
.theme-switcher label {
  margin-right: 10px;
}

.language-switcher select {
  padding: 5px 10px;
  border-radius: 4px;
  border: 1px solid var(--border-color);
  background-color: var(--bg-color);
  color: var(--text-color);
}

.theme-switch {
  display: flex;
  align-items: center;
  padding: 5px 10px;
  border-radius: 4px;
  border: 1px solid var(--border-color);
  background-color: var(--button-bg);
  color: var(--button-text);
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.theme-switch:hover {
  background-color: var(--button-hover-bg);
}

.theme-switch-icon {
  margin-right: 8px;
}

.content {
  text-align: center;
  padding: 20px;
  background-color: var(--card-bg);
  border-radius: 8px;
  box-shadow: var(--card-shadow);
}

.nav-links {
  margin: 20px 0;
}

.nav-links a {
  margin: 0 10px;
  text-decoration: none;
  color: var(--link-color);
}

.buttons button {
  margin: 0 5px;
  padding: 8px 15px;
  background-color: var(--button-bg);
  color: var(--button-text);
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.buttons button:hover {
  background-color: var(--button-hover-bg);
}
</style>
