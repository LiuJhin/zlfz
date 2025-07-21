<template>
  <div class="scroll-indicator-container" :class="{ 'dark-mode': isDarkMode }">
    <!-- 滚动进度条 -->
    <div class="scroll-progress-bar" :style="{ width: scrollProgress + '%' }"></div>
    
    <!-- 滚动指示器 -->
    <div class="scroll-down-indicator" v-if="showScrollIndicator">
      <div class="scroll-arrow">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 4V20M12 20L18 14M12 20L6 14" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
      <div class="scroll-text">向下滚动</div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from 'vue';

// 获取当前颜色模式
const isDarkMode = ref(false);

// 检查当前颜色模式
const checkColorMode = () => {
  if (typeof window !== 'undefined') {
    // 检查 HTML 元素上的 class 或者 localStorage
    const htmlEl = document.documentElement;
    isDarkMode.value = htmlEl.classList.contains('dark') || 
                      localStorage.getItem('nuxt-color-mode') === 'dark';
  }
};

// 监听颜色模式变化
const setupColorModeObserver = () => {
  if (typeof window !== 'undefined') {
    // 使用 MutationObserver 监听 HTML 元素的 class 变化
    const htmlEl = document.documentElement;
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          isDarkMode.value = htmlEl.classList.contains('dark');
        }
      });
    });
    
    observer.observe(htmlEl, { attributes: true });
    
    // 监听 localStorage 变化
    window.addEventListener('storage', (event) => {
      if (event.key === 'nuxt-color-mode') {
        isDarkMode.value = event.newValue === 'dark';
      }
    });
    
    return observer;
  }
  return null;
};

// 滚动进度
const scrollProgress = ref(0);

// 是否显示滚动指示器
const showScrollIndicator = ref(true);

// 计算滚动进度
const calculateScrollProgress = () => {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  
  if (scrollHeight > 0) {
    scrollProgress.value = (scrollTop / scrollHeight) * 100;
  } else {
    scrollProgress.value = 0;
  }
  
  // 当滚动超过一定距离时隐藏滚动指示器
  showScrollIndicator.value = scrollTop < 100;
};

// 监听滚动事件
const handleScroll = () => {
  window.requestAnimationFrame(calculateScrollProgress);
};

// 组件挂载时初始化
onMounted(() => {
  // 检查当前颜色模式
  checkColorMode();
  
  // 设置颜色模式观察器
  const observer = setupColorModeObserver();
  
  // 仅在客户端添加事件监听
  if (typeof window !== 'undefined') {
    calculateScrollProgress();
    window.addEventListener('scroll', handleScroll, { passive: true });
  }
  
  // 清理函数
  onBeforeUnmount(() => {
    // 断开观察器
    if (observer) {
      observer.disconnect();
    }
    
    // 移除事件监听
    if (typeof window !== 'undefined') {
      window.removeEventListener('scroll', handleScroll);
    }
  });
});
</script>

<style scoped>
.scroll-indicator-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  pointer-events: none;
}

/* 滚动进度条 */
.scroll-progress-bar {
  height: 3px;
  background: linear-gradient(90deg, var(--primary-color) 0%, var(--accent-color) 100%);
  width: 0;
  transition: width 0.1s ease-out;
}

/* 滚动指示器 */
.scroll-down-indicator {
  position: fixed;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: fadeInUp 1s ease-out forwards, bounce 2s ease-in-out infinite;
  opacity: 0;
}

.scroll-arrow {
  color: var(--primary-color);
  margin-bottom: 8px;
  animation: arrowBounce 2s ease-in-out infinite;
}

.scroll-text {
  font-size: 14px;
  font-weight: 500;
  color: var(--text-color);
  opacity: 0.7;
}

/* 动画定义 */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translate(-50%, 20px);
  }
  to {
    opacity: 1;
    transform: translate(-50%, 0);
  }
}

@keyframes bounce {
  0%, 100% {
    transform: translate(-50%, 0);
  }
  50% {
    transform: translate(-50%, -10px);
  }
}

@keyframes arrowBounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(5px);
  }
}

/* 暗黑模式调整 */
.dark-mode .scroll-progress-bar {
  box-shadow: 0 0 10px rgba(130, 71, 229, 0.5);
}

.dark-mode .scroll-arrow {
  filter: drop-shadow(0 0 3px rgba(130, 71, 229, 0.5));
}

/* 响应式调整 */
@media (max-width: 768px) {
  .scroll-progress-bar {
    height: 2px;
  }
  
  .scroll-down-indicator {
    bottom: 20px;
  }
  
  .scroll-text {
    font-size: 12px;
  }
}
</style>