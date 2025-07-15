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
import { ref } from 'vue';
import NavbarMenuItem from './NavbarMenuItem.vue';

// 菜单数据，实际项目中可能从API获取或存储在store中
const menuItems = ref([
  {
    title: '解决方案',
    link: '#',
    dropdownItems: [
      { title: '企业解决方案', link: '#' },
      { title: '开发者工具', link: '#' },
      { title: '区块链服务', link: '#' }
    ]
  },
  {
    title: '开发者',
    link: '#',
    dropdownItems: [
      { title: '文档中心', link: '#' },
      { title: 'API参考', link: '#' },
      { title: '教程', link: '#' }
    ]
  },
  {
    title: '社区',
    link: '#',
    dropdownItems: [
      { title: '论坛', link: '#' },
      { title: '活动', link: '#' },
      { title: '贡献', link: '#' }
    ]
  },
  {
    title: 'ZK资源',
    link: '#',
    dropdownItems: [
      { title: '研究', link: '#' },
      { title: '白皮书', link: '#' },
      { title: '案例研究', link: '#' }
    ]
  },
  {
    title: '博客',
    link: '#',
    dropdownItems: []
  },
  {
    title: '公司',
    link: '#',
    dropdownItems: [
      { title: '关于我们', link: '#' },
      { title: '团队', link: '#' },
      { title: '招聘', link: '#' }
    ]
  }
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