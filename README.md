# Nuxt 3 布局模板示例

这个项目展示了如何在 Nuxt 3 中使用布局模板系统，包括默认布局和自定义布局。

## 布局系统概述

在 Nuxt 3 中，布局系统允许你为不同的页面设置不同的布局结构。布局文件存放在 `layouts` 目录中，页面可以通过 `definePageMeta` 指定使用哪个布局。

### 项目中的布局

1. **默认布局 (default.vue)**
   - 位置：`layouts/default.vue`
   - 特点：包含导航栏和主内容区域
   - 使用：如果页面没有指定布局，将自动使用此布局

2. **自定义布局 (custom.vue)**
   - 位置：`layouts/custom.vue`
   - 特点：包含自定义的页眉、导航和页脚
   - 使用：通过 `definePageMeta({ layout: 'custom' })` 指定

## 页面示例

1. **首页**
   - 位置：`pages/index.vue`
   - 布局：默认布局
   - 内容：展示布局系统的介绍和链接

2. **关于页面**
   - 位置：`pages/about.vue`
   - 布局：自定义布局
   - 内容：展示使用自定义布局的页面示例

3. **联系页面**
   - 位置：`pages/contact.vue`
   - 布局：自定义布局
   - 内容：包含联系表单和联系信息

## 错误页面

- 位置：`error.vue`
- 功能：当路由不存在或发生错误时显示
- 特点：显示错误代码和消息，提供返回首页的按钮

## 如何使用布局

### 创建新布局

1. 在 `layouts` 目录中创建新的 `.vue` 文件
2. 使用 `<slot />` 标签指定页面内容的位置

```vue
<!-- layouts/my-layout.vue -->
<template>
  <div class="my-layout">
    <header>我的自定义页眉</header>
    <main>
      <slot /> <!-- 页面内容将插入这里 -->
    </main>
    <footer>我的自定义页脚</footer>
  </div>
</template>
```

### 在页面中使用布局

在页面组件中使用 `definePageMeta` 指定布局：

```vue
<!-- pages/my-page.vue -->
<script setup>
definePageMeta({
  layout: 'my-layout'
});
</script>

<template>
  <div>页面内容</div>
</template>
```

## 主题支持

项目支持多种主题模式：

- 明亮模式 (light)
- 暗黑模式 (dark)
- 棕褐色模式 (sepia)

主题样式定义在 `assets/css/color-mode.css` 文件中。

## 技术栈

- Nuxt 3
- Vue 3
- @nuxtjs/color-mode (主题切换)
- @nuxtjs/i18n (国际化支持)
