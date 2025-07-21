<template>
  <div class="floating-elements-container">
    <!-- 几何形状装饰元素 -->
    <div class="geometric-elements">
      <div v-for="(element, index) in geometricElements" :key="index"
           class="geometric-element"
           :class="element.shape"
           :style="{
             '--size': element.size + 'px',
             '--color': element.color,
             '--delay': element.delay + 's',
             '--duration': element.duration + 's',
             left: element.left + '%',
             top: element.top + '%',
             opacity: element.opacity
           }">
      </div>
    </div>
    
    <!-- 光效装饰元素 -->
    <div class="light-effects">
      <div v-for="(light, index) in lightEffects" :key="index"
           class="light-effect"
           :style="{
             '--size': light.size + 'px',
             '--color': light.color,
             '--blur': light.blur + 'px',
             '--delay': light.delay + 's',
             '--duration': light.duration + 's',
             left: light.left + '%',
             top: light.top + '%',
             opacity: light.opacity
           }">
      </div>
    </div>
    
    <!-- 粒子线条装饰 -->
    <div class="particle-lines">
      <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
        <line v-for="(line, index) in particleLines" :key="index"
              :x1="line.x1" :y1="line.y1" :x2="line.x2" :y2="line.y2"
              :stroke="line.color" :stroke-width="line.width"
              :stroke-dasharray="line.dasharray" :stroke-dashoffset="line.dashoffset"
              class="particle-line"
              :style="{
                '--delay': line.delay + 's',
                '--duration': line.duration + 's'
              }">
        </line>
      </svg>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

// 几何形状装饰元素数据
const geometricElements = ref([]);

// 光效装饰元素数据
const lightEffects = ref([]);

// 粒子线条数据
const particleLines = ref([]);

// 生成随机几何形状
const generateGeometricElements = () => {
  const shapes = ['circle', 'square', 'triangle', 'hexagon'];
  const colors = [
    'var(--primary-color)',
    'var(--primary-color-light)',
    'var(--accent-color)',
    'rgba(130, 71, 229, 0.5)',
    'rgba(255, 107, 53, 0.5)'
  ];
  
  geometricElements.value = [];
  
  // 生成15-20个几何形状
  const count = Math.floor(Math.random() * 6) + 15;
  
  for (let i = 0; i < count; i++) {
    geometricElements.value.push({
      shape: shapes[Math.floor(Math.random() * shapes.length)],
      size: Math.floor(Math.random() * 30) + 10, // 10-40px
      color: colors[Math.floor(Math.random() * colors.length)],
      left: Math.random() * 100,
      top: Math.random() * 100,
      opacity: (Math.random() * 0.5) + 0.1, // 0.1-0.6
      delay: Math.random() * 5,
      duration: (Math.random() * 10) + 15 // 15-25s
    });
  }
};

// 生成光效元素
const generateLightEffects = () => {
  const colors = [
    'rgba(130, 71, 229, 0.15)',
    'rgba(164, 126, 245, 0.15)',
    'rgba(255, 107, 53, 0.1)'
  ];
  
  lightEffects.value = [];
  
  // 生成5-8个光效
  const count = Math.floor(Math.random() * 4) + 5;
  
  for (let i = 0; i < count; i++) {
    lightEffects.value.push({
      size: Math.floor(Math.random() * 150) + 100, // 100-250px
      color: colors[Math.floor(Math.random() * colors.length)],
      blur: Math.floor(Math.random() * 50) + 50, // 50-100px
      left: Math.random() * 100,
      top: Math.random() * 100,
      opacity: (Math.random() * 0.3) + 0.1, // 0.1-0.4
      delay: Math.random() * 5,
      duration: (Math.random() * 15) + 20 // 20-35s
    });
  }
};

// 生成粒子线条
const generateParticleLines = () => {
  const colors = [
    'rgba(130, 71, 229, 0.3)',
    'rgba(164, 126, 245, 0.3)',
    'rgba(255, 107, 53, 0.2)'
  ];
  
  particleLines.value = [];
  
  // 生成10-15条线
  const count = Math.floor(Math.random() * 6) + 10;
  
  for (let i = 0; i < count; i++) {
    const dashLength = Math.floor(Math.random() * 10) + 5;
    particleLines.value.push({
      x1: Math.random() * 100,
      y1: Math.random() * 100,
      x2: Math.random() * 100,
      y2: Math.random() * 100,
      color: colors[Math.floor(Math.random() * colors.length)],
      width: (Math.random() * 1.5) + 0.5, // 0.5-2px
      dasharray: `${dashLength} ${dashLength * 2}`,
      dashoffset: Math.random() * 100,
      delay: Math.random() * 5,
      duration: (Math.random() * 20) + 30 // 30-50s
    });
  }
};

onMounted(() => {
  generateGeometricElements();
  generateLightEffects();
  generateParticleLines();
});
</script>

<style scoped>
.floating-elements-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
  z-index: 1;
}

/* 几何形状样式 */
.geometric-element {
  position: absolute;
  width: var(--size);
  height: var(--size);
  background-color: var(--color);
  opacity: var(--opacity, 0.2);
  animation: float var(--duration) ease-in-out infinite;
  animation-delay: var(--delay);
  transform: rotate(0deg) translate(0, 0);
}

.circle {
  border-radius: 50%;
}

.square {
  border-radius: 4px;
}

.triangle {
  width: 0;
  height: 0;
  background-color: transparent;
  border-left: calc(var(--size) / 2) solid transparent;
  border-right: calc(var(--size) / 2) solid transparent;
  border-bottom: var(--size) solid var(--color);
}

.hexagon {
  clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
}

/* 光效样式 */
.light-effect {
  position: absolute;
  width: var(--size);
  height: var(--size);
  border-radius: 50%;
  background-color: var(--color);
  filter: blur(var(--blur));
  opacity: var(--opacity, 0.2);
  animation: pulse var(--duration) ease-in-out infinite;
  animation-delay: var(--delay);
}

/* 粒子线条样式 */
.particle-line {
  animation: dashMove var(--duration) linear infinite;
  animation-delay: var(--delay);
}

/* 动画定义 */
@keyframes float {
  0% {
    transform: rotate(0deg) translate(0, 0);
  }
  25% {
    transform: rotate(5deg) translate(10px, 10px);
  }
  50% {
    transform: rotate(0deg) translate(20px, 0);
  }
  75% {
    transform: rotate(-5deg) translate(10px, -10px);
  }
  100% {
    transform: rotate(0deg) translate(0, 0);
  }
}

@keyframes pulse {
  0% {
    transform: scale(1);
    opacity: var(--opacity);
  }
  50% {
    transform: scale(1.1);
    opacity: calc(var(--opacity) * 1.2);
  }
  100% {
    transform: scale(1);
    opacity: var(--opacity);
  }
}

@keyframes dashMove {
  to {
    stroke-dashoffset: 1000;
  }
}

/* 响应式调整 */
@media (max-width: 768px) {
  .geometric-element {
    --size: calc(var(--size) * 0.7);
  }
  
  .light-effect {
    --size: calc(var(--size) * 0.7);
    --blur: calc(var(--blur) * 0.7);
  }
}
</style>