<template>
  <div class="theme-switcher">
    <button @click="toggleColorMode" class="theme-button">
      <!-- 根据当前主题显示不同图标 -->
      <svg v-if="colorMode === 'light'" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17Z" fill="currentColor"/>
        <path d="M12 1V3M12 21V23M4.22 4.22L5.64 5.64M18.36 18.36L19.78 19.78M1 12H3M21 12H23M4.22 19.78L5.64 18.36M18.36 5.64L19.78 4.22" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      <svg v-else-if="colorMode === 'dark'" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" fill="currentColor"/>
      </svg>
      <svg v-else width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
        <path d="M12 2V12L17 17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';

// 颜色模式状态
const colorMode = ref('light');

// 在组件挂载时获取当前颜色模式
onMounted(() => {
  // 从 localStorage 或 body 的 class 获取当前模式
  const savedMode = localStorage.getItem('color-mode');
  if (savedMode) {
    colorMode.value = savedMode;
  } else if (document.body.classList.contains('dark')) {
    colorMode.value = 'dark';
  } else if (document.body.classList.contains('sepia')) {
    colorMode.value = 'sepia';
  }
});

// 切换颜色模式
const toggleColorMode = () => {
  // 循环切换模式：light -> dark -> sepia -> light
  if (colorMode.value === 'light') {
    colorMode.value = 'dark';
  } else if (colorMode.value === 'dark') {
    colorMode.value = 'sepia';
  } else {
    colorMode.value = 'light';
  }
};

// 监听颜色模式变化，更新 DOM
watch(colorMode, (newMode) => {
  // 移除所有模式类
  document.body.classList.remove('light', 'dark', 'sepia');
  // 添加新模式类
  document.body.classList.add(newMode);
  // 保存到 localStorage
  localStorage.setItem('color-mode', newMode);
});
</script>

<style scoped>
.theme-switcher {
  display: flex;
  align-items: center;
}

.theme-button {
  background: none;
  border: none;
  cursor: pointer;
  color: var(--navbar-text);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  transition: background-color 0.2s ease, color 0.2s ease;
}

.theme-button:hover {
  background-color: rgba(130, 71, 229, 0.1);
  color: var(--navbar-hover);
}
</style>