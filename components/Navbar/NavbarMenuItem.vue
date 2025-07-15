<template>
  <li :class="['menu-item', { 'dropdown': hasDropdown }]">
    <a :href="link" class="menu-link">{{ title }}</a>
    <div v-if="hasDropdown" class="dropdown-content">
      <a 
        v-for="item in dropdownItems" 
        :key="item.title" 
        :href="item.link"
      >
        {{ item.title }}
      </a>
    </div>
  </li>
</template>

<script setup>
import { computed } from 'vue';

// 定义组件属性
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  link: {
    type: String,
    default: '#'
  },
  dropdownItems: {
    type: Array,
    default: () => []
  }
});

// 计算是否有下拉菜单
const hasDropdown = computed(() => {
  return props.dropdownItems && props.dropdownItems.length > 0;
});
</script>

<style scoped>
.menu-item {
  position: relative;
  margin: 0 4px;
}

.menu-link {
  display: block;
  padding: 8px 12px;
  color: var(--navbar-text);
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  transition: color 0.2s ease;
}

.menu-link:hover {
  color: var(--navbar-hover);
}

/* 下拉菜单样式 */
.dropdown {
  position: relative;
}

.dropdown-content {
  position: absolute;
  top: 100%;
  left: 0;
  min-width: 200px;
  background-color: var(--dropdown-bg);
  border-radius: 8px;
  box-shadow: var(--dropdown-shadow);
  padding: 8px 0;
  opacity: 0;
  visibility: hidden;
  transform: translateY(10px);
  transition: opacity 0.2s ease, transform 0.2s ease, visibility 0.2s;
  z-index: 100;
}

.dropdown:hover .dropdown-content {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.dropdown-content a {
  display: block;
  padding: 8px 16px;
  color: var(--navbar-text);
  text-decoration: none;
  font-size: 14px;
  transition: background-color 0.2s ease, color 0.2s ease;
}

.dropdown-content a:hover {
  background-color: rgba(130, 71, 229, 0.1);
  color: var(--navbar-hover);
}
</style>