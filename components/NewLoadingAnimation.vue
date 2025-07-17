<template>
  <div v-if="isLoading" class="loading-overlay">
    <!-- 背景效果 -->
    <div class="background-effect">
      <div class="gradient-circle"></div>
    </div>
    
    <!-- 文字部分 -->
    <div class="loading-text">
      <div class="loading-title">
        <span 
          v-for="(letter, index) in 'ZHILING ARK'.split('')" 
          :key="index"
          class="letter"
          :style="{ '--delay': `${0.08 * index}s` }"
        >
          {{ letter === ' ' ? '\u00A0' : letter }}
        </span>
      </div>
        <div class="loading-line"></div>
      </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

// 控制加载状态
const isLoading = ref(true);

// 模拟加载完成
onMounted(() => {
  // 检查是否是首次访问
  const hasVisited = localStorage.getItem('hasVisitedBefore');
  
  if (!hasVisited) {
    // 首次访问，显示完整加载动画
    setTimeout(() => {
      isLoading.value = false;
      localStorage.setItem('hasVisitedBefore', 'true');
    }, 3500); // 3.5秒后隐藏加载动画
  } else {
    // 非首次访问，缩短加载时间
    setTimeout(() => {
      isLoading.value = false;
    }, 2000); // 2秒后隐藏加载动画
  }
});

// 组件卸载前清理资源
onBeforeUnmount(() => {
  // 清理可能的资源或事件监听器
});
</script>

<style scoped>
/* 主容器样式 */
.loading-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #0a0a14;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  overflow: hidden;
  animation: fadeIn 0.5s ease-in-out;
}

/* 背景效果 */
.background-effect {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  overflow: hidden;
}

.gradient-circle {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60vmin;
  height: 60vmin;
  background: radial-gradient(circle, rgba(130, 71, 229, 0.2) 0%, rgba(130, 71, 229, 0.1) 40%, rgba(130, 71, 229, 0) 70%);
  border-radius: 50%;
  filter: blur(30px);
  animation: pulse 6s infinite ease-in-out;
}
/* 文字样式 */
.loading-text {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  z-index: 2;
  position: relative;
}

.loading-title {
  font-size: 2.8rem;
  font-weight: 700;
  letter-spacing: 4px;
  margin-bottom: 0;
  display: flex;
  justify-content: center;
  position: relative;
}

.letter {
  display: inline-block;
  color: white;
  position: relative;
  animation: 
    letter-appear 0.5s forwards cubic-bezier(0.2, 0.8, 0.2, 1);
  animation-delay: var(--delay);
  opacity: 0;
  transform: translateY(20px);
  margin: 0 2px;
}

.loading-line {
  width: 40px;
  height: 2px;
  background: #8247E5;
  margin-top: 20px;
  position: relative;
  overflow: hidden;
  animation: line-expand 2s forwards cubic-bezier(0.1, 0.9, 0.2, 1);
}

.loading-line::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.8), transparent);
  animation: line-shine 2s infinite;
}

/* 动画定义 */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}

@keyframes letter-appear {
  0% { 
    opacity: 0; 
    transform: translateY(20px) scale(0.8); 
    filter: blur(5px);
  }
  100% { 
    opacity: 1; 
    transform: translateY(0) scale(1); 
    filter: blur(0);
  }
}

@keyframes letter-float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
}

@keyframes letter-glow {
  0%, 100% { text-shadow: 0 0 15px rgba(130, 71, 229, 0.6); }
  50% { text-shadow: 0 0 25px rgba(130, 71, 229, 1), 0 0 10px rgba(255, 255, 255, 0.5); }
}

@keyframes line-expand {
  0% { width: 0; }
  100% { width: 40px; }
}

@keyframes line-shine {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}

/* 响应式设计 */
@media (max-width: 992px) {
  .loading-title {
    font-size: 3rem;
  }
}

@media (max-width: 768px) {
  .loading-title {
    font-size: 2.5rem;
  }
  
  .loading-title::before {
    top: -15px;
    width: 50px;
  }
  
  .loading-title::after {
    bottom: -15px;
    width: 100px;
  }
}

@media (max-width: 480px) {
  .loading-title {
    font-size: 2rem;
  }
  
  .loading-title::before {
    top: -10px;
    width: 40px;
  }
  
  .loading-title::after {
    bottom: -10px;
    width: 80px;
  }
}
</style>