<template>
  <div class="about-page">
    <h1>关于我们</h1>
    <p>这是一个使用自定义布局的页面示例。</p>
    <p>在Nuxt 3中，你可以为不同的页面指定不同的布局模板。</p>
    <div class="features">
      <div class="feature-card">
        <h3>布局系统</h3>
        <p>Nuxt 3提供了强大的布局系统，可以为不同页面设置不同的布局。</p>
      </div>
      <div class="feature-card">
        <h3>组件自动导入</h3>
        <p>组件可以自动导入，无需手动import语句。</p>
      </div>
      <div class="feature-card">
        <h3>主题切换</h3>
        <p>支持明亮、暗黑和棕褐色等多种主题模式。</p>
      </div>
    </div>
    <div class="back-link">
      <NuxtLink to="/">返回首页</NuxtLink>
    </div>
  </div>
</template>

<script setup>
// 定义此页面使用custom布局
definePageMeta({
  layout: "custom",
});
</script>

<style>
.about-page {
  text-align: center;
  padding: 2rem;
  background-color: var(--card-bg);
  border-radius: 8px;
  box-shadow: var(--card-shadow);
}

.features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}

.feature-card {
  background-color: var(--bg-color);
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
}

.back-link {
  margin-top: 2rem;
}

.back-link a {
  display: inline-block;
  padding: 0.5rem 1rem;
  background-color: var(--button-bg);
  color: var(--button-text);
  text-decoration: none;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}

.back-link a:hover {
  background-color: var(--button-hover-bg);
}
</style>
