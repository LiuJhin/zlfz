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
      { 
        title: "企业解决方案", 
        link: "#", 
        icon: "solution",
        description: "为企业提供全方位的区块链解决方案" 
      },
      { 
        title: "开发者工具", 
        link: "#", 
        icon: "solution",
        description: "强大的开发工具集，助力快速构建应用" 
      },
      { 
        title: "区块链服务", 
        link: "#", 
        icon: "solution",
        description: "安全可靠的区块链基础设施服务" 
      },
    ],
  },
  {
    title: "云管理服务",
    link: "#",
    isOpen: false,
    dropdownItems: [
      { 
        title: "云战略咨询规划", 
        link: "#", 
        icon: "cloud",
        description: "专业的云战略规划与咨询服务" 
      },
      { 
        title: "云技术专业服务", 
        link: "#", 
        icon: "cloud",
        description: "全面的云技术支持与专业服务" 
      },
      { 
        title: "云运维管理服务", 
        link: "#", 
        icon: "cloud",
        description: "高效的云平台运维与管理" 
      },
      { 
        title: "云监控管理服务", 
        link: "#", 
        icon: "cloud",
        description: "实时的云资源监控与管理系统" 
      },
      { 
        title: "云原生开发服务", 
        link: "#", 
        icon: "cloud",
        description: "基于云原生技术的应用开发服务" 
      },
      { 
        title: "等保合规服务", 
        link: "#", 
        icon: "cloud",
        description: "满足等级保护要求的合规服务" 
      },
    ],
  },
  {
    title: "社区",
    link: "#",
    isOpen: false,
    dropdownItems: [
      { 
        title: "开发者社区", 
        link: "#", 
        icon: "community",
        description: "加入我们活跃的开发者社区" 
      },
      { 
        title: "技术活动", 
        link: "#", 
        icon: "community",
        description: "参与线上线下技术交流活动" 
      },
      { 
        title: "开源贡献", 
        link: "#", 
        icon: "community",
        description: "为开源项目贡献代码与想法" 
      },
      { 
        title: "技术论坛", 
        link: "#", 
        icon: "community",
        description: "分享经验，解决问题的技术论坛" 
      },
    ],
  },
  {
    title: "行业方案",
    link: "#",
    isOpen: false,
    dropdownItems: [
      { 
        title: "金融科技解决方案", 
        link: "#", 
        icon: "solution",
        description: "为金融行业提供创新技术解决方案" 
      },
      { 
        title: "供应链管理方案", 
        link: "#", 
        icon: "solution",
        description: "优化供应链流程的区块链解决方案" 
      },
      { 
        title: "数字身份认证", 
        link: "#", 
        icon: "solution",
        description: "安全可靠的数字身份认证系统" 
      },
      { 
        title: "数据安全与隐私", 
        link: "#", 
        icon: "solution",
        description: "保护数据安全与用户隐私的解决方案" 
      },
    ],
  },
  {
    title: "客户案例",
    link: "#",
    isOpen: false,
    dropdownItems: [
      { 
        title: "成功案例集", 
        link: "#", 
        icon: "case",
        description: "浏览我们的成功客户案例" 
      },
      { 
        title: "金融行业", 
        link: "#", 
        icon: "case",
        description: "金融科技领域的创新应用" 
      },
      { 
        title: "供应链行业", 
        link: "#", 
        icon: "case",
        description: "供应链管理的区块链应用" 
      },
      { 
        title: "医疗健康", 
        link: "#", 
        icon: "case",
        description: "医疗数据管理与共享解决方案" 
      },
      { 
        title: "政府服务", 
        link: "#", 
        icon: "case",
        description: "提升政府服务效率的区块链应用" 
      },
    ],
  },
  {
    title: "关于我们",
    link: "#",
    isOpen: false,
    dropdownItems: [
      { 
        title: "公司简介", 
        link: "#", 
        icon: "about",
        description: "了解我们的使命与愿景" 
      },
      { 
        title: "技术团队", 
        link: "#", 
        icon: "about",
        description: "认识我们专业的技术团队" 
      },
      { 
        title: "合作伙伴", 
        link: "#", 
        icon: "about",
        description: "查看我们的合作伙伴网络" 
      },
      { 
        title: "加入我们", 
        link: "#", 
        icon: "about",
        description: "探索激动人心的职业机会" 
      },
      { 
        title: "联系方式", 
        link: "#", 
        icon: "about",
        description: "获取我们的联系方式" 
      },
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
