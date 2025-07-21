<template>
  <div class="decorative-background" :class="{ 'dark-mode': isDarkMode }">
    <!-- 网格背景 -->
    <div class="grid-background">
      <div class="grid-lines horizontal" aria-hidden="true">
        <div v-for="i in 20" :key="'h'+i" class="grid-line" :style="{ '--index': i }"></div>
      </div>
      <div class="grid-lines vertical" aria-hidden="true">
        <div v-for="i in 20" :key="'v'+i" class="grid-line" :style="{ '--index': i }"></div>
      </div>
    </div>
    
    <!-- 波浪背景 -->
    <div class="wave-container" aria-hidden="true">
      <svg class="wave" viewBox="0 0 1440 320" preserveAspectRatio="none">
        <path class="wave-path wave-path-1" d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        <path class="wave-path wave-path-2" d="M0,224L48,213.3C96,203,192,181,288,154.7C384,128,480,96,576,106.7C672,117,768,171,864,176C960,181,1056,139,1152,122.7C1248,107,1344,117,1392,122.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        <path class="wave-path wave-path-3" d="M0,256L48,261.3C96,267,192,277,288,261.3C384,245,480,203,576,197.3C672,192,768,224,864,213.3C960,203,1056,149,1152,138.7C1248,128,1344,160,1392,176L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
      </svg>
    </div>
    
    <!-- 渐变光斑 -->
    <div class="gradient-spots" aria-hidden="true">
      <div class="gradient-spot spot-1"></div>
      <div class="gradient-spot spot-2"></div>
      <div class="gradient-spot spot-3"></div>
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

// 组件挂载时初始化
onMounted(() => {
  // 检查当前颜色模式
  checkColorMode();
  
  // 设置颜色模式观察器
  const observer = setupColorModeObserver();
  
  // 清理函数
  onBeforeUnmount(() => {
    // 断开观察器
    if (observer) {
      observer.disconnect();
    }
  });
});
</script>

<style scoped>
.decorative-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
  z-index: 0;
}

/* 网格背景 */
.grid-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.07;
}

.grid-lines {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.grid-line {
  position: absolute;
  background-color: var(--primary-color);
}

.horizontal .grid-line {
  width: 100%;
  height: 1px;
  top: calc(var(--index) * 5vh);
  transform: scaleX(0);
  transform-origin: left;
  animation: gridLineHorizontal 1.5s ease-out forwards;
  animation-delay: calc(var(--index) * 0.05s);
}

.vertical .grid-line {
  width: 1px;
  height: 100%;
  left: calc(var(--index) * 5vw);
  transform: scaleY(0);
  transform-origin: top;
  animation: gridLineVertical 1.5s ease-out forwards;
  animation-delay: calc(var(--index) * 0.05s);
}

@keyframes gridLineHorizontal {
  to { transform: scaleX(1); }
}

@keyframes gridLineVertical {
  to { transform: scaleY(1); }
}

/* 波浪背景 */
.wave-container {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 30vh;
  opacity: 0.1;
}

.wave {
  width: 100%;
  height: 100%;
}

.wave-path {
  fill: var(--primary-color);
  opacity: 0.5;
  animation: waveAnimation 15s linear infinite;
}

.wave-path-1 {
  animation-duration: 20s;
  opacity: 0.3;
}

.wave-path-2 {
  animation-duration: 25s;
  animation-delay: -5s;
  opacity: 0.2;
}

.wave-path-3 {
  animation-duration: 30s;
  animation-delay: -10s;
  opacity: 0.1;
}

@keyframes waveAnimation {
  0% { transform: translateX(0); }
  50% { transform: translateX(-25%); }
  100% { transform: translateX(-50%); }
}

/* 渐变光斑 */
.gradient-spots {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.gradient-spot {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.1;
  animation: spotPulse 15s ease-in-out infinite;
}

.spot-1 {
  top: 20%;
  left: 15%;
  width: 40vw;
  height: 40vw;
  background: radial-gradient(circle, var(--primary-color-light) 0%, transparent 70%);
  animation-delay: 0s;
}

.spot-2 {
  bottom: 10%;
  right: 20%;
  width: 35vw;
  height: 35vw;
  background: radial-gradient(circle, var(--primary-color) 0%, transparent 70%);
  animation-delay: -5s;
}

.spot-3 {
  top: 50%;
  right: 30%;
  width: 25vw;
  height: 25vw;
  background: radial-gradient(circle, var(--accent-color) 0%, transparent 70%);
  animation-delay: -10s;
}

@keyframes spotPulse {
  0% { transform: scale(1); opacity: 0.1; }
  50% { transform: scale(1.2); opacity: 0.15; }
  100% { transform: scale(1); opacity: 0.1; }
}

/* 暗黑模式调整 */
.dark-mode .grid-background {
  opacity: 0.1;
}

.dark-mode .wave-container {
  opacity: 0.15;
}

.dark-mode .gradient-spot {
  opacity: 0.15;
}

/* 响应式调整 */
@media (max-width: 768px) {
  .grid-line {
    opacity: 0.5;
  }
  
  .gradient-spot {
    opacity: 0.08;
  }
  
  .wave-container {
    height: 20vh;
  }
}
</style>