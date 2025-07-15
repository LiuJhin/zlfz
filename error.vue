<template>
  <div class="error-page">
    <div class="error-container">
      <h1 class="error-code">{{ error.statusCode }}</h1>
      <div class="error-divider"></div>
      <h2 class="error-message">{{ error.message }}</h2>
      <p class="error-description">抱歉，您请求的页面不存在或发生了错误。</p>
      <button class="back-button" @click="handleError">返回首页</button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  error: Object,
});

const handleError = () => {
  // 清除错误并返回首页
  clearError({ redirect: "/" });
};
</script>

<style>
.error-page {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: var(--bg-color);
  color: var(--text-color);
  font-family: "Inter", "SF Pro Display", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, sans-serif;
}

.error-container {
  text-align: center;
  max-width: 500px;
  padding: 3rem;
  background-color: var(--card-bg);
  border-radius: 8px;
  box-shadow: var(--card-shadow);
}

.error-code {
  font-size: 5rem;
  font-weight: 700;
  margin: 0;
  color: var(--navbar-hover);
}

.error-divider {
  height: 4px;
  width: 60px;
  background-color: var(--navbar-hover);
  margin: 1.5rem auto;
  border-radius: 2px;
}

.error-message {
  font-size: 1.5rem;
  margin: 1rem 0;
}

.error-description {
  margin: 1.5rem 0;
  color: var(--text-secondary);
}

.back-button {
  padding: 0.75rem 1.5rem;
  background-color: var(--button-bg);
  color: var(--button-text);
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.back-button:hover {
  background-color: var(--button-hover-bg);
}
</style>
