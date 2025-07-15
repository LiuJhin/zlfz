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
import { ref } from "vue";
import NavbarMenuItem from "./NavbarMenuItem.vue";

// 菜单数据，实际项目中可能从API获取或存储在store中
const menuItems = reactive([
  {
    title: "解决方案",
    link: "#",
    isOpen: false,
    dropdownItems: [
      { title: "企业解决方案", link: "#" },
      { title: "开发者工具", link: "#" },
      { title: "区块链服务", link: "#" },
    ],
  },
  {
    title: "云管理服务(MSP)",
    link: "#",
    isOpen: false,
    dropdownItems: [
      { title: "云战略咨询规划", link: "#" },
      { title: "云技术专业服务", link: "#" },
      { title: "云运维管理服务", link: "#" },
      { title: "云监控管理服务", link: "#" },
      { title: "云原生开发服务", link: "#" },
      { title: "等保合规服务", link: "#" },
    ],
  },
  {
    title: "社区",
    link: "#",
    isOpen: false,
    dropdownItems: [
      { title: "论坛", link: "#" },
      { title: "活动", link: "#" },
      { title: "贡献", link: "#" },
    ],
  },
  {
    title: "解决方案",
    link: "#",
    isOpen: false,
    dropdownItems: [
      { title: "云迁移解决方案", link: "#" },
      { title: "大数据解决方案", link: "#" },
      { title: "混合云解决方案", link: "#" },
      { title: "DevOps解决方案", link: "#" },
      { title: "云资源管理及成本优化", link: "#" },
    ],
  },
  {
    title: "客户案例",
    link: "#",
    isOpen: false,
    dropdownItems: [
      { title: "全部", link: "#" },
      { title: "游戏行业", link: "#" },
      { title: "广告行业", link: "#" },
      { title: "汽车制造", link: "#" },
      { title: "家居制造", link: "#" },
      { title: "电商行业", link: "#" },
      { title: "互联网", link: "#" },
    ],
  },
  {
    title: "关于我们",
    link: "#",
    isOpen: false,
    dropdownItems: [
      { title: "公司介绍", link: "#" },
      { title: "发展历程", link: "#" },
      { title: "企业文化", link: "#" },
      { title: "联系我们", link: "#" },
      { title: "加入我们", link: "#" },
    ],
  },
]);
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
