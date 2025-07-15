<template>
  <div class="custom-layout">
    <header class="custom-header">
      <div class="header-container">
        <div class="logo">自定义布局</div>
        <nav class="custom-nav">
          <ul>
            <li><NuxtLink to="/">首页</NuxtLink></li>
            <li><NuxtLink to="/about">关于</NuxtLink></li>
            <li><NuxtLink to="/contact">联系我们</NuxtLink></li>
          </ul>
        </nav>
      </div>
    </header>

    <main class="custom-main">
      <slot />
    </main>

    <footer class="custom-footer">
      <div class="footer-container">
        <p>© 2023 自定义布局示例 | 使用 Nuxt 3 构建</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import "@/assets/css/color-mode.css";
</script>

<style>
.custom-layout {
  font-family: 'Inter', 'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: var(--bg-color);
  color: var(--text-color);
}

.custom-header {
  background-color: var(--navbar-bg);
  padding: 1rem 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.header-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--navbar-text);
}

.custom-nav ul {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 1.5rem;
}

.custom-nav a {
  color: var(--navbar-text);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s ease;
}

.custom-nav a:hover {
  color: var(--navbar-hover);
}

.custom-main {
  flex: 1;
  padding: 2rem 0;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 2rem 1rem;
}

.custom-footer {
  background-color: var(--navbar-bg);
  padding: 1.5rem 0;
  margin-top: auto;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  text-align: center;
  color: var(--navbar-text);
}
</style>