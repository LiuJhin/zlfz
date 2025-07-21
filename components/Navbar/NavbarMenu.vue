<template>
  <nav class="navbar-menu">
    <ul class="menu-list">
      <NavbarMenuItem
        v-for="item in menuItems"
        :key="item.title"
        :title="item.title"
        :link="item.link"
        :dropdown-items="item.dropdownItems"
      />
    </ul>
  </nav>
</template>

<script setup>
import { ref, reactive, computed } from "vue";
import NavbarMenuItem from "./NavbarMenuItem.vue";

const { t } = useI18n();

// 菜单状态管理
const menuState = reactive({
  activeItem: null,
  openStates: {},
});

// 切换下拉菜单的显示状态
const toggleDropdown = (item) => {
  const itemTitle = item.title;

  // 如果点击的是当前已打开的菜单，则关闭它
  if (menuState.activeItem === itemTitle && menuState.openStates[itemTitle]) {
    menuState.openStates[itemTitle] = false;
    menuState.activeItem = null;
    return;
  }

  // 关闭所有其他打开的菜单
  Object.keys(menuState.openStates).forEach((key) => {
    menuState.openStates[key] = false;
  });

  // 打开当前点击的菜单
  menuState.openStates[itemTitle] = true;
  menuState.activeItem = itemTitle;
};

// 菜单数据，使用计算属性实现响应式多语言
const menuItems = computed(() => [
  {
    title: t("navbar.home"),
    link: "/",
    get isOpen() {
      return false; // 首页没有下拉菜单
    },
    dropdownItems: [],
  },
  {
    title: t("navbar.menu.cloudServices.title"),
    link: "#",
    get isOpen() {
      return menuState.openStates[this.title] || false;
    },
    dropdownItems: [
      {
        title: t("navbar.menu.cloudServices.strategy.title"),
        link: "/cloud-services/strategy-consulting",
        icon: "cloud",
        description: t("navbar.menu.cloudServices.strategy.description"),
      },
      {
        title: t("navbar.menu.cloudServices.technical.title"),
        link: "/cloud-services/technical-services",
        icon: "cloud",
        description: t("navbar.menu.cloudServices.technical.description"),
      },
      {
        title: t("navbar.menu.cloudServices.operations.title"),
        link: "/cloud-services/operations-management",
        icon: "cloud",
        description: t("navbar.menu.cloudServices.operations.description"),
      },
      {
        title: t("navbar.menu.cloudServices.security.title"),
        link: "/cloud-services/security-protection",
        icon: "cloud",
        description: t("navbar.menu.cloudServices.security.description"),
      },
      {
        title: t("navbar.menu.cloudServices.costOptimization.title"),
        link: "/cloud-services/cost-optimization",
        icon: "cloud",
        description: t(
          "navbar.menu.cloudServices.costOptimization.description"
        ),
      },
      {
        title: t("navbar.menu.cloudServices.migration.title"),
        link: "/cloud-services/cloud-migration",
        icon: "cloud",
        description: t("navbar.menu.cloudServices.migration.description"),
      },
    ],
  },
  {
    title: t("navbar.menu.industry.title"),
    link: "#",
    get isOpen() {
      return menuState.openStates[this.title] || false;
    },
    dropdownItems: [
      {
        title: t("navbar.menu.industry.fintech.title"),
        link: "/industry-solutions/fintech",
        icon: "solution",
        description: t("navbar.menu.industry.fintech.description"),
      },
      {
        title: t("navbar.menu.industry.supplyChain.title"),
        link: "/industry-solutions/supply-chain",
        icon: "solution",
        description: t("navbar.menu.industry.supplyChain.description"),
      },
      {
        title: t("navbar.menu.industry.digitalIdentity.title"),
        link: "/industry-solutions/digital-identity",
        icon: "solution",
        description: t("navbar.menu.industry.digitalIdentity.description"),
      },
      {
        title: t("navbar.menu.industry.dataSecurity.title"),
        link: "/industry-solutions/data-security",
        icon: "solution",
        description: t("navbar.menu.industry.dataSecurity.description"),
      },
    ],
  },
  {
    title: t("navbar.menu.cases.title"),
    link: "#",
    get isOpen() {
      return menuState.openStates[this.title] || false;
    },
    dropdownItems: [
      {
        title: t("navbar.menu.cases.successStories.title"),
        link: "/case-studies/success-stories",
        icon: "case",
        description: t("navbar.menu.cases.successStories.description"),
      },
      {
        title: t("navbar.menu.cases.financial.title"),
        link: "/case-studies/financial",
        icon: "case",
        description: t("navbar.menu.cases.financial.description"),
      },
      {
        title: t("navbar.menu.cases.supplyChain.title"),
        link: "/case-studies/supply-chain",
        icon: "case",
        description: t("navbar.menu.cases.supplyChain.description"),
      },
      {
        title: t("navbar.menu.cases.healthcare.title"),
        link: "/case-studies/healthcare",
        icon: "case",
        description: t("navbar.menu.cases.healthcare.description"),
      },
      {
        title: t("navbar.menu.cases.government.title"),
        link: "/case-studies/government",
        icon: "case",
        description: t("navbar.menu.cases.government.description"),
      },
    ],
  },
  {
    title: t("navbar.menu.about.title"),
    link: "#",
    get isOpen() {
      return menuState.openStates[this.title] || false;
    },
    dropdownItems: [
      {
        title: t("navbar.menu.about.company.title"),
        link: "/about",
        icon: "about",
        description: t("navbar.menu.about.company.description"),
      },
      {
        title: t("navbar.menu.about.qualifications.title"),
        link: "/about#qualifications",
        icon: "about",
        description: t("navbar.menu.about.qualifications.description"),
      },
      {
        title: t("navbar.menu.about.team.title"),
        link: "/about#team",
        icon: "about",
        description: t("navbar.menu.about.team.description"),
      },
      {
        title: t("navbar.menu.about.partners.title"),
        link: "/about#partners",
        icon: "about",
        description: t("navbar.menu.about.partners.description"),
      },
      {
        title: t("navbar.menu.about.careers.title"),
        link: "/about#team",
        icon: "about",
        description: t("navbar.menu.about.careers.description"),
      },
      {
        title: t("navbar.menu.about.contact.title"),
        link: "/contact",
        icon: "about",
        description: t("navbar.menu.about.contact.description"),
      },
    ],
  },
]);

// 关闭菜单的方法
const closeMenu = () => {
  Object.keys(menuState.openStates).forEach((key) => {
    menuState.openStates[key] = false;
  });
  menuState.activeItem = null;
};
</script>

<style scoped>
/* 主导航菜单样式 */
.navbar-menu {
  display: flex;
  align-items: center;
}

.menu-list {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

/* 响应式设计 */
@media (max-width: 1024px) {
  .navbar-menu {
    display: none; /* 在移动设备上隐藏菜单，实际应用中可以添加汉堡菜单 */
  }
}
</style>
