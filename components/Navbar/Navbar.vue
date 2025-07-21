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
      <div class="mobile-menu" :class="{ active: mobileMenuOpen }">
        <div class="mobile-menu-container">
          <div class="mobile-menu-header">
            <NavbarLogo />
            <button class="close-button" @click="toggleMobileMenu">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 6L6 18M6 6L18 18"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
          <div class="mobile-menu-content">
            <ul class="mobile-menu-list">
              <li
                v-for="item in menuItems"
                :key="item.title"
                class="mobile-menu-item"
              >
                <div class="mobile-menu-link-wrapper">
                  <a :href="item.link" class="mobile-menu-link">{{
                    item.title
                  }}</a>
                  <button
                    v-if="item.dropdownItems && item.dropdownItems.length"
                    class="dropdown-toggle"
                    @click="toggleDropdown(item)"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6 9L12 15L18 9"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </button>
                </div>
                <div
                  v-if="item.dropdownItems && item.dropdownItems.length"
                  class="mobile-dropdown"
                  :class="{ active: item.isOpen }"
                >
                  <a
                    v-for="dropdownItem in item.dropdownItems"
                    :key="dropdownItem.title"
                    :href="dropdownItem.link"
                    class="mobile-dropdown-link"
                  >
                    <div class="mobile-dropdown-item-content">
                      <div
                        v-if="dropdownItem.icon"
                        class="mobile-dropdown-item-icon"
                      >
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            :d="getIconPath(dropdownItem.icon)"
                            stroke="currentColor"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                      <div class="mobile-dropdown-item-text">
                        <span class="mobile-dropdown-item-title">{{
                          dropdownItem.title
                        }}</span>
                        <span
                          v-if="dropdownItem.description"
                          class="mobile-dropdown-item-description"
                          >{{ dropdownItem.description }}</span
                        >
                      </div>
                    </div>
                  </a>
                </div>
              </li>
            </ul>
            <div class="mobile-menu-footer">
              <LanguageSwitcher />
              <ThemeSwitcher />
              <a href="#" class="mobile-cta-button">{{ $t("navbar.docs") }}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, reactive, computed } from "vue";
import NavbarLogo from "./NavbarLogo.vue";
import NavbarMenu from "./NavbarMenu.vue";
import NavbarControls from "./NavbarControls.vue";
import ThemeSwitcher from "./ThemeSwitcher.vue";
import LanguageSwitcher from "./LanguageSwitcher.vue";

// 移动端菜单状态
const mobileMenuOpen = ref(false);

const { t } = useI18n();

// 菜单数据
const menuItems = computed(() => [
  {
    title: t("navbar.home"),
    link: "/",
    isOpen: false,
    dropdownItems: [],
  },
  {
    title: t("navbar.solutions"),
    link: "#",
    isOpen: false,
    dropdownItems: [
      {
        title: t("navbar.solutions"),
        link: "#",
        icon: "solution",
        description: "为企业提供全方位的区块链解决方案",
      },
      {
        title: "开发者工具",
        link: "#",
        icon: "solution",
        description: "强大的开发工具集，助力快速构建应用",
      },
      {
        title: "区块链服务",
        link: "#",
        icon: "solution",
        description: "安全可靠的区块链基础设施服务",
      },
    ],
  },
  {
    title: t("navbar.cloudServices"),
    link: "#",
    isOpen: false,
    dropdownItems: [
      {
        title: "云战略咨询规划",
        link: "#",
        icon: "cloud",
        description: "专业的云战略规划与咨询服务",
      },
      {
        title: "云技术专业服务",
        link: "#",
        icon: "cloud",
        description: "全面的云技术支持与专业服务",
      },
      {
        title: "云运维管理服务",
        link: "#",
        icon: "cloud",
        description: "高效的云平台运维与管理",
      },
      {
        title: "云监控管理服务",
        link: "#",
        icon: "cloud",
        description: "实时的云资源监控与管理系统",
      },
      {
        title: "云原生开发服务",
        link: "#",
        icon: "cloud",
        description: "基于云原生技术的应用开发服务",
      },
      {
        title: "等保合规服务",
        link: "#",
        icon: "cloud",
        description: "满足等级保护要求的合规服务",
      },
    ],
  },
  {
    title: t("navbar.community"),
    link: "#",
    isOpen: false,
    dropdownItems: [
      {
        title: "开发者社区",
        link: "#",
        icon: "community",
        description: "加入我们活跃的开发者社区",
      },
      {
        title: "技术活动",
        link: "#",
        icon: "community",
        description: "参与线上线下技术交流活动",
      },
      {
        title: "开源贡献",
        link: "#",
        icon: "community",
        description: "为开源项目贡献代码与想法",
      },
      {
        title: "技术论坛",
        link: "#",
        icon: "community",
        description: "分享经验，解决问题的技术论坛",
      },
    ],
  },
  {
    title: t("navbar.industrySolutions"),
    link: "#",
    isOpen: false,
    dropdownItems: [
      {
        title: "金融科技解决方案",
        link: "#",
        icon: "solution",
        description: "为金融行业提供创新技术解决方案",
      },
      {
        title: "供应链管理方案",
        link: "#",
        icon: "solution",
        description: "优化供应链流程的区块链解决方案",
      },
      {
        title: "数字身份认证",
        link: "#",
        icon: "solution",
        description: "安全可靠的数字身份认证系统",
      },
      {
        title: "数据安全与隐私",
        link: "#",
        icon: "solution",
        description: "保护数据安全与用户隐私的解决方案",
      },
    ],
  },
  {
    title: t("navbar.caseStudies"),
    link: "#",
    isOpen: false,
    dropdownItems: [
      {
        title: "成功案例集",
        link: "#",
        icon: "case",
        description: "浏览我们的成功客户案例",
      },
      {
        title: "金融行业",
        link: "#",
        icon: "case",
        description: "金融科技领域的创新应用",
      },
      {
        title: "供应链行业",
        link: "#",
        icon: "case",
        description: "供应链管理的区块链应用",
      },
      {
        title: "医疗健康",
        link: "#",
        icon: "case",
        description: "医疗数据管理与共享解决方案",
      },
      {
        title: "政府服务",
        link: "#",
        icon: "case",
        description: "提升政府服务效率的区块链应用",
      },
    ],
  },
  {
    title: t("navbar.aboutUs"),
    link: "#",
    isOpen: false,
    dropdownItems: [
      {
        title: "公司简介",
        link: "#",
        icon: "about",
        description: "了解我们的使命与愿景",
      },
      {
        title: "技术团队",
        link: "#",
        icon: "about",
        description: "认识我们专业的技术团队",
      },
      {
        title: "合作伙伴",
        link: "#",
        icon: "about",
        description: "查看我们的合作伙伴网络",
      },
      {
        title: "加入我们",
        link: "#",
        icon: "about",
        description: "探索激动人心的职业机会",
      },
      {
        title: "联系方式",
        link: "#",
        icon: "about",
        description: "获取我们的联系方式",
      },
    ],
  },
]);

// 切换移动端菜单
const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
  // 禁止/允许背景滚动
  if (mobileMenuOpen.value) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }
};

// 切换下拉菜单
const toggleDropdown = (item) => {
  item.isOpen = !item.isOpen;
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

.menu-icon,
.menu-icon::before,
.menu-icon::after {
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

.menu-icon::before,
.menu-icon::after {
  content: "";
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
  padding: 12px 0;
  color: var(--navbar-text);
  text-decoration: none;
  font-size: 1rem;
  transition: transform 0.2s ease;
}

.mobile-dropdown-link:hover {
  transform: translateX(4px);
}

.mobile-dropdown-item-content {
  display: flex;
  align-items: flex-start;
}

.mobile-dropdown-item-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
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

.mobile-dropdown-item-text {
  display: flex;
  flex-direction: column;
}

.mobile-dropdown-item-title {
  font-weight: 500;
  margin-bottom: 4px;
}

.mobile-dropdown-item-description {
  font-size: 0.8rem;
  color: var(--navbar-text);
  opacity: 0.7;
  line-height: 1.3;
}

/* 移动端菜单底部样式 */
.mobile-menu-footer {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 20px;
  border-top: 1px solid var(--border-color);
  margin-top: auto;
}

.mobile-cta-button {
  background-color: var(--primary-color);
  color: white;
  padding: 12px 20px;
  border-radius: 8px;
  text-decoration: none;
  text-align: center;
  font-weight: 600;
  transition: background-color 0.2s ease;
}

.mobile-cta-button:hover {
  background-color: var(--primary-color-dark);
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

@media (max-width: 768px) {
  .social-icons {
    display: none;
  }
}

@media (max-width: 640px) {
  .cta-button {
    display: none;
  }
}
</style>
