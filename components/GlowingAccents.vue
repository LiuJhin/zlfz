<template>
  <div class="glowing-accents" :class="{ 'dark-mode': isDarkMode }">
    <!-- 光晕效果 -->
    <div class="glow-effects">
      <div 
        v-for="(glow, index) in glowEffects" 
        :key="'glow-'+index" 
        class="glow-effect"
        :style="{
          '--size': glow.size + 'px',
          '--color': glow.color,
          '--top': glow.top + '%',
          '--left': glow.left + '%',
          '--blur': glow.blur + 'px',
          '--animation-delay': glow.delay + 's',
          '--animation-duration': glow.duration + 's'
        }"
      ></div>
    </div>
    
    <!-- 闪烁点 -->
    <div class="sparkle-container">
      <div 
        v-for="(sparkle, index) in sparkles" 
        :key="'sparkle-'+index" 
        class="sparkle"
        :style="{
          '--size': sparkle.size + 'px',
          '--color': sparkle.color,
          '--top': sparkle.top + '%',
          '--left': sparkle.left + '%',
          '--animation-delay': sparkle.delay + 's',
          '--animation-duration': sparkle.duration + 's'
        }"
      ></div>
    </div>
    
    <!-- 渐变边框 -->
    <div class="gradient-borders">
      <div 
        v-for="(border, index) in gradientBorders" 
        :key="'border-'+index" 
        class="gradient-border"
        :style="{
          '--width': border.width + 'px',
          '--height': border.height + 'px',
          '--gradient': border.gradient,
          '--top': border.top + '%',
          '--left': border.left + '%',
          '--rotation': border.rotation + 'deg',
          '--animation-delay': border.delay + 's',
          '--animation-duration': border.duration + 's'
        }"
      ></div>
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
          generateEffects();
        }
      });
    });
    
    observer.observe(htmlEl, { attributes: true });
    
    // 监听 localStorage 变化
    window.addEventListener('storage', (event) => {
      if (event.key === 'nuxt-color-mode') {
        isDarkMode.value = event.newValue === 'dark';
        generateEffects();
      }
    });
    
    return observer;
  }
  return null;
};

// 效果数据
const glowEffects = ref([]);
const sparkles = ref([]);
const gradientBorders = ref([]);

// 生成所有效果
const generateEffects = () => {
  generateGlowEffects();
  generateSparkles();
  generateGradientBorders();
};

// 生成光晕效果
const generateGlowEffects = () => {
  const effects = [];
  const count = 5;
  
  for (let i = 0; i < count; i++) {
    const hue = Math.random() * 60 + 240; // 蓝紫色范围
    const lightness = isDarkMode.value ? '60%' : '40%';
    const color = `hsla(${hue}, 70%, ${lightness}, 0.15)`;
    
    effects.push({
      size: Math.random() * 200 + 100,
      color,
      top: Math.random() * 100,
      left: Math.random() * 100,
      blur: Math.random() * 100 + 50,
      delay: Math.random() * 5,
      duration: Math.random() * 10 + 15
    });
  }
  
  glowEffects.value = effects;
};

// 生成闪烁点
const generateSparkles = () => {
  const effects = [];
  const count = 20;
  
  for (let i = 0; i < count; i++) {
    const hue = Math.random() * 60 + 240; // 蓝紫色范围
    const lightness = isDarkMode.value ? '70%' : '50%';
    const color = `hsla(${hue}, 90%, ${lightness}, 1)`;
    
    effects.push({
      size: Math.random() * 3 + 1,
      color,
      top: Math.random() * 100,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: Math.random() * 3 + 2
    });
  }
  
  sparkles.value = effects;
};

// 生成渐变边框
const generateGradientBorders = () => {
  const borders = [];
  const count = 8;
  
  for (let i = 0; i < count; i++) {
    const isHorizontal = Math.random() > 0.5;
    const width = isHorizontal ? Math.random() * 200 + 100 : Math.random() * 2 + 1;
    const height = isHorizontal ? Math.random() * 2 + 1 : Math.random() * 200 + 100;
    
    // 创建渐变
    const startHue = Math.random() * 60 + 240; // 蓝紫色范围
    const endHue = startHue + 30;
    const lightness1 = isDarkMode.value ? '70%' : '50%';
    const lightness2 = isDarkMode.value ? '50%' : '30%';
    const gradient = `linear-gradient(to right, hsla(${startHue}, 90%, ${lightness1}, 0.5), hsla(${endHue}, 90%, ${lightness2}, 0.5))`;
    
    borders.push({
      width,
      height,
      gradient,
      top: Math.random() * 100,
      left: Math.random() * 100,
      rotation: Math.random() * 360,
      delay: Math.random() * 5,
      duration: Math.random() * 10 + 20
    });
  }
  
  gradientBorders.value = borders;
};

// 组件挂载时初始化
onMounted(() => {
  // 检查当前颜色模式
  checkColorMode();
  
  // 设置颜色模式观察器
  const observer = setupColorModeObserver();
  
  // 生成效果
  generateEffects();
  
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
.glowing-accents {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
  z-index: 2;
}

/* 光晕效果 */
.glow-effects {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.glow-effect {
  position: absolute;
  width: var(--size);
  height: var(--size);
  top: var(--top);
  left: var(--left);
  border-radius: 50%;
  background: radial-gradient(circle, var(--color) 0%, transparent 70%);
  filter: blur(var(--blur));
  opacity: 0.3;
  animation: glowPulse var(--animation-duration) ease-in-out infinite;
  animation-delay: var(--animation-delay);
}

@keyframes glowPulse {
  0% { transform: scale(1); opacity: 0.3; }
  50% { transform: scale(1.1); opacity: 0.4; }
  100% { transform: scale(1); opacity: 0.3; }
}

/* 闪烁点 */
.sparkle-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.sparkle {
  position: absolute;
  width: var(--size);
  height: var(--size);
  top: var(--top);
  left: var(--left);
  background-color: var(--color);
  border-radius: 50%;
  animation: sparkleAnimation var(--animation-duration) ease-in-out infinite;
  animation-delay: var(--animation-delay);
}

@keyframes sparkleAnimation {
  0% { transform: scale(0); opacity: 0; }
  50% { transform: scale(1); opacity: 1; }
  100% { transform: scale(0); opacity: 0; }
}

/* 渐变边框 */
.gradient-borders {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.gradient-border {
  position: absolute;
  width: var(--width);
  height: var(--height);
  top: var(--top);
  left: var(--left);
  background: var(--gradient);
  transform: rotate(var(--rotation));
  opacity: 0.2;
  animation: borderFloat var(--animation-duration) ease-in-out infinite;
  animation-delay: var(--animation-delay);
}

@keyframes borderFloat {
  0% { transform: rotate(var(--rotation)) translate(0, 0); opacity: 0.2; }
  50% { transform: rotate(calc(var(--rotation) + 5deg)) translate(10px, -10px); opacity: 0.3; }
  100% { transform: rotate(var(--rotation)) translate(0, 0); opacity: 0.2; }
}

/* 暗黑模式调整 */
.dark-mode .glow-effect {
  opacity: 0.4;
}

.dark-mode .sparkle {
  filter: drop-shadow(0 0 3px var(--color));
}

.dark-mode .gradient-border {
  opacity: 0.3;
}

/* 响应式调整 */
@media (max-width: 768px) {
  .glow-effect {
    --size: calc(var(--size) * 0.7);
    --blur: calc(var(--blur) * 0.7);
    opacity: 0.2;
  }
  
  .sparkle {
    opacity: 0.7;
  }
  
  .gradient-border {
    --width: calc(var(--width) * 0.7);
    --height: calc(var(--height) * 0.7);
    opacity: 0.15;
  }
}
</style>