<template>
  <div class="about-page">
    <AboutHero />
    <AboutMission />
    <AboutTeam />
    <AboutPartners />
    <AboutContact />
  </div>
</template>

<script setup>
// 导入关于我们页面的组件
import AboutHero from '@/components/About/AboutHero.vue';
import AboutMission from '@/components/About/AboutMission.vue';
import AboutTeam from '@/components/About/AboutTeam.vue';
import AboutPartners from '@/components/About/AboutPartners.vue';
import AboutContact from '@/components/About/AboutContact.vue';

// 定义此页面使用custom布局
definePageMeta({
  layout: "custom",
});
</script>

<style scoped>
.about-page {
  width: 100%;
  margin: 0 auto;
  /* 移除内边距，让各组件自行控制内边距 */
}
</style>
