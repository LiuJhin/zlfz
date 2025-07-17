<template>
  <div class="about-page">
    <AboutHero />
    <AboutMission />
    <AboutQualifications />
    <AboutTeam />
    <AboutPartners />
    <AboutContact />
  </div>
</template>

<script setup>
// 导入关于我们页面的组件
import AboutHero from "@/components/About/AboutHero.vue";
import AboutMission from "@/components/About/AboutMission.vue";
import AboutQualifications from "@/components/About/AboutQualifications.vue";
import AboutTeam from "@/components/About/AboutTeam.vue";
import AboutPartners from "@/components/About/AboutPartners.vue";
import AboutContact from "@/components/About/AboutContact.vue";
import { onMounted, nextTick } from 'vue';
import { useRoute } from 'vue-router';

// 使用默认布局
definePageMeta({
  layout: "default",
});

const route = useRoute();

// 处理锚点滚动
const scrollToAnchor = () => {
  try {
    // 检查URL中是否有锚点
    if (route.hash) {
      // 移除开头的#号
      const targetId = route.hash.substring(1);
      
      // 尝试多次查找元素，因为组件可能尚未完全渲染
      const maxAttempts = 5;
      let attempts = 0;
      
      const tryScrolling = () => {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          // 找到目标元素，滚动到该位置
          setTimeout(() => {
            targetElement.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        } else if (attempts < maxAttempts) {
          // 未找到元素，稍后再试
          attempts++;
          setTimeout(tryScrolling, 300);
        } else {
          console.warn(`无法找到目标元素: #${targetId}`);
        }
      };
      
      // 开始尝试滚动
      setTimeout(tryScrolling, 500);
    }
  } catch (error) {
    console.error('处理锚点滚动时出错:', error);
  }
};

// 页面挂载后处理锚点滚动
onMounted(() => {
  nextTick(() => {
    scrollToAnchor();
  });
});
</script>

<style scoped>
.about-page {
  width: 100%;
  margin: 0 auto;
  /* 移除内边距，让各组件自行控制内边距 */
}
</style>
