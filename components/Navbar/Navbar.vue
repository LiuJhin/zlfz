<template>
  <header class="navbar">
    <div class="navbar-container">
      <!-- Logo 部分 -->
      <NavbarLogo />

      <!-- 主导航菜单 -->
      <NavbarMenu />

      <!-- 右侧控制区 -->
      <NavbarControls />
      
      <!-- 移动端菜单按钮 -->
      <button class="mobile-menu-button" @click="toggleMobileMenu">
        <span class="menu-icon"></span>
      </button>
      
      <!-- 移动端菜单 -->
      <div class="mobile-menu" :class="{ 'active': mobileMenuOpen }">
        <div class="mobile-menu-container">
          <div class="mobile-menu-header">
            <NavbarLogo />
            <button class="close-button" @click="toggleMobileMenu">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
          </div>
          <div class="mobile-menu-content">
            <ul class="mobile-menu-list">
              <li v-for="item in menuItems" :key="item.title" class="mobile-menu-item">
                <div class="mobile-menu-link-wrapper">
                  <a :href="item.link" class="mobile-menu-link">{{ item.title }}</a>
                  <button v-if="item.dropdownItems && item.dropdownItems.length" class="dropdown-toggle" @click="toggleDropdown(item)">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </button>
                </div>
                <div v-if="item.dropdownItems && item.dropdownItems.length" class="mobile-dropdown" :class="{ 'active': item.isOpen }">
                  <a v-for="dropdownItem in item.dropdownItems" :key="dropdownItem.title" :href="dropdownItem.link" class="mobile-dropdown-link">
                    {{ dropdownItem.title }}
                  </a>
                </div>
              </li>
            </ul>
            <div class="mobile-menu-footer">
              <ThemeSwitcher />
              <a href="#" class="mobile-cta-button">Polygon Docs</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, reactive } from 'vue';
import NavbarLogo from './NavbarLogo.vue';
import NavbarMenu from './NavbarMenu.vue';
import NavbarControls from './NavbarControls.vue';
import ThemeSwitcher from './ThemeSwitcher.vue';

// 移动端菜单状态
const mobileMenuOpen = ref(false);

// 菜单数据
const menuItems = reactive([
  {
    title: '解决方案',
    link: '#',
    isOpen: false,
    dropdownItems: [
      { title: '企业解决方案', link: '#' },
      { title: '开发者工具', link: '#' },
      { title: '区块链服务', link: '#' }
    ]
  },
  {
    title: '开发者',
    link: '#',
    isOpen: false,
    dropdownItems: [
      { title: '文档中心', link: '#' },
      { title: 'API参考', link: '#' },
      { title: '教程', link: '#' }
    ]
  },
  {
    title: '社区',
    link: '#',
    isOpen: false,
    dropdownItems: [
      { title: '论坛', link: '#' },
      { title: '活动', link: '#' },
      { title: '贡献', link: '#' }
    ]
  },
  {
    title: 'ZK资源',
    link: '#',
    isOpen: false,
    dropdownItems: [
      { title: '研究', link: '#' },
      { title: '白皮书', link: '#' },
      { title: '案例研究', link: '#' }
    ]
  },
  {
    title: '博客',
    link: '#',
    isOpen: false,
    dropdownItems: []
  },
  {
    title: '公司',
    link: '#',
    isOpen: false,
    dropdownItems: [
      { title: '关于我们', link: '#' },
      { title: '团队', link: '#' },
      { title: '招聘', link: '#' }
    ]
  }
]);

// 切换移动端菜单
const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
  // 禁止/允许背景滚动
  if (mobileMenuOpen.value) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
};

// 切换下拉菜单
const toggleDropdown = (item) => {
  item.isOpen = !item.isOpen;
};
</script>

<style scoped>
/* 导航栏样式 */
.navbar {
  background-color: var(--navbar-bg);
  border-bottom: 1px solid var(--border-color);
  position: sticky;
  top: 0;
  z-index: 1000;
  transition: background-color 0.3s ease, border-color 0.3s ease;
}

.navbar-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 24px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* 移动端菜单按钮 */
.mobile-menu-button {
  display: none;
  background: none;
  border: none;
  width: 40px;
  height: 40px;
  position: relative;
  cursor: pointer;
  z-index: 1001;
}

.menu-icon, .menu-icon::before, .menu-icon::after {
  display: block;
  position: absolute;
  height: 2px;
  width: 24px;
  background-color: var(--navbar-text);
  transition: transform 0.3s ease;
}

.menu-icon {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.menu-icon::before, .menu-icon::after {
  content: '';
  left: 0;
}

.menu-icon::before {
  top: -8px;
}

.menu-icon::after {
  bottom: -8px;
}

/* 移动端菜单 */
.mobile-menu {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--bg-color);
  z-index: 1000;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease, visibility 0.3s ease;
  overflow-y: auto;
}

.mobile-menu.active {
  opacity: 1;
  visibility: visible;
}

.mobile-menu-container {
  padding: 20px;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.mobile-menu-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 20px;
  border-bottom: 1px solid var(--border-color);
}

.close-button {
  background: none;
  border: none;
  color: var(--navbar-text);
  cursor: pointer;
}

.mobile-menu-content {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 30px 0;
}

.mobile-menu-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.mobile-menu-item {
  margin-bottom: 20px;
}

.mobile-menu-link-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.mobile-menu-link {
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--navbar-text);
  text-decoration: none;
}

.dropdown-toggle {
  background: none;
  border: none;
  color: var(--navbar-text);
  cursor: pointer;
  padding: 8px;
  transition: transform 0.3s ease;
}

.mobile-dropdown {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;
  margin-top: 10px;
  padding-left: 16px;
}

.mobile-dropdown.active {
  max-height: 500px;
}

.mobile-dropdown-link {
  display: block;
  padding: 10px 0;
  color: var(--navbar-text);
  opacity: 0.8;
  text-decoration: none;
  font-size: 1rem;
}

.mobile-menu-footer {
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: flex-start;
}

.mobile-cta-button {
  background-color: var(--cta-button-bg);
  color: var(--cta-button-text);
  padding: 12px 24px;
  border-radius: 30px;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  transition: background-color 0.2s ease;
  display: inline-block;
}

/* 响应式设计 */
@media (max-width: 1024px) {
  .navbar-container {
    padding: 0 16px;
  }
  
  .mobile-menu-button {
    display: block;
  }
  
  .mobile-menu {
    display: block;
  }
}
</style>