<template>
  <li :class="['menu-item', { dropdown: hasDropdown, 'is-open': isOpen }]">
    <NuxtLink
      :to="link"
      class="menu-link"
      @mouseenter="isOpen = true"
      @mouseleave="closeDropdownDelayed"
    >
      {{ title }}
      <span v-if="hasDropdown" class="dropdown-arrow">
        <svg
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 1L5 5L9 1"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </span>
    </NuxtLink>
    <div
      v-if="hasDropdown"
      class="dropdown-content"
      @mouseenter="clearCloseTimeout"
      @mouseleave="closeDropdown"
    >
      <div class="dropdown-header">
        <span class="dropdown-title">{{ title }}</span>
      </div>
      <div class="dropdown-grid">
        <NuxtLink
          v-for="item in dropdownItems"
          :key="item.title"
          :to="item.link"
          class="dropdown-item"
        >
          <div class="dropdown-item-icon" v-if="item.icon">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                :d="getIconPath(item.icon)"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div class="dropdown-item-content">
            <span class="dropdown-item-title">{{ item.title }}</span>
            <span v-if="item.description" class="dropdown-item-description">{{
              item.description
            }}</span>
          </div>
        </NuxtLink>
      </div>
    </div>
  </li>
</template>

<script setup>
import { computed, ref } from "vue";

// 定义组件属性
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    default: "#",
  },
  dropdownItems: {
    type: Array,
    default: () => [],
  },
});

// 下拉菜单状态
const isOpen = ref(false);
let closeTimeout = null;

// 计算是否有下拉菜单
const hasDropdown = computed(() => {
  return props.dropdownItems && props.dropdownItems.length > 0;
});

// 延迟关闭下拉菜单，提供更好的用户体验
const closeDropdownDelayed = () => {
  closeTimeout = setTimeout(() => {
    isOpen.value = false;
  }, 150);
};

// 清除关闭定时器
const clearCloseTimeout = () => {
  if (closeTimeout) {
    clearTimeout(closeTimeout);
    closeTimeout = null;
  }
};

// 立即关闭下拉菜单
const closeDropdown = () => {
  isOpen.value = false;
};

// 获取图标路径
const getIconPath = (icon) => {
  // 预定义的图标路径
  const iconPaths = {
    solution:
      "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
    cloud:
      "M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z",
    community:
      "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
    case: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
    about: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    default: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  };

  return iconPaths[icon] || iconPaths["default"];
};
</script>

<style scoped>
.menu-item {
  position: relative;
  margin: 0 4px;
}

.menu-link {
  display: flex;
  align-items: center;
  padding: 8px 12px;
  color: var(--navbar-text);
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  transition: color 0.2s ease;
  border-radius: 6px;
}

.menu-link:hover {
  color: var(--navbar-hover);
  background-color: rgba(130, 71, 229, 0.05);
}

.dropdown-arrow {
  display: inline-flex;
  margin-left: 4px;
  transition: transform 0.2s ease;
}

.is-open .dropdown-arrow {
  transform: rotate(180deg);
}

/* 下拉菜单样式 */
.dropdown {
  position: relative;
}

.dropdown-content {
  position: absolute;
  top: calc(100% + 8px);
  left: 50%;
  transform: translateX(-50%) translateY(10px);
  min-width: 280px;
  width: max-content;
  max-width: 400px;
  background-color: var(--dropdown-bg);
  border-radius: 12px;
  box-shadow: var(--dropdown-shadow), 0 0 0 1px rgba(0, 0, 0, 0.05);
  padding: 16px;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease, transform 0.3s ease, visibility 0.3s;
  z-index: 100;
  backdrop-filter: blur(8px);
}

/* 添加小三角形指示器 */
.dropdown-content::before {
  content: "";
  position: absolute;
  top: -6px;
  left: 50%;
  transform: translateX(-50%) rotate(45deg);
  width: 12px;
  height: 12px;
  background-color: var(--dropdown-bg);
  border-top: 1px solid rgba(0, 0, 0, 0.05);
  border-left: 1px solid rgba(0, 0, 0, 0.05);
  border-top-left-radius: 2px;
  z-index: -1;
}

.is-open .dropdown-content {
  opacity: 1;
  visibility: visible;
  transform: translateX(-50%) translateY(0);
}

.dropdown-header {
  padding-bottom: 12px;
  margin-bottom: 12px;
  border-bottom: 1px solid var(--border-color);
}

.dropdown-title {
  font-size: 14px;
  font-weight: 600;
  color: var(--primary-color);
  letter-spacing: 0.5px;
  text-transform: uppercase;
}

.dropdown-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 8px;
}

.dropdown-item {
  display: flex;
  align-items: flex-start;
  padding: 12px;
  color: var(--navbar-text);
  text-decoration: none;
  font-size: 14px;
  border-radius: 8px;
  transition: background-color 0.2s ease, color 0.2s ease, transform 0.2s ease;
}

.dropdown-item:hover {
  background-color: rgba(130, 71, 229, 0.1);
  color: var(--navbar-hover);
  transform: translateY(-2px);
}

.dropdown-item-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  margin-right: 12px;
  background: linear-gradient(
    135deg,
    var(--primary-color-light) 0%,
    var(--primary-color) 100%
  );
  border-radius: 8px;
  color: white;
  flex-shrink: 0;
}

.dropdown-item-content {
  display: flex;
  flex-direction: column;
}

.dropdown-item-title {
  font-weight: 500;
  margin-bottom: 4px;
}

.dropdown-item-description {
  font-size: 12px;
  color: var(--navbar-text);
  opacity: 0.7;
}

/* 响应式调整 */
@media (max-width: 1024px) {
  .dropdown-content {
    position: static;
    transform: none;
    box-shadow: none;
    opacity: 1;
    visibility: visible;
    padding: 0;
    margin-top: 8px;
    margin-left: 16px;
    min-width: auto;
    width: auto;
    max-width: none;
    background-color: transparent;
    backdrop-filter: none;
  }

  .dropdown-content::before {
    display: none;
  }

  .dropdown-grid {
    grid-template-columns: 1fr;
  }

  .dropdown-header {
    display: none;
  }

  .dropdown-item {
    padding: 8px;
  }

  .dropdown-item-icon {
    width: 28px;
    height: 28px;
  }
}
</style>
