<template>
  <div class="particle-background" :class="{ 'dark-mode': isDarkMode }">
    <canvas ref="particleCanvas" class="particle-canvas"></canvas>
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
          if (animationFrameId.value) {
            cancelAnimationFrame(animationFrameId.value);
            initParticles();
          }
        }
      });
    });
    
    observer.observe(htmlEl, { attributes: true });
    
    // 监听 localStorage 变化
    window.addEventListener('storage', (event) => {
      if (event.key === 'nuxt-color-mode') {
        isDarkMode.value = event.newValue === 'dark';
        if (animationFrameId.value) {
          cancelAnimationFrame(animationFrameId.value);
          initParticles();
        }
      }
    });
    
    return observer;
  }
  return null;
};

// Canvas 引用
const particleCanvas = ref(null);
let ctx = null;
let particles = [];
const animationFrameId = ref(null);
let width = 0;
let height = 0;

// 粒子配置
const particleConfig = {
  count: 80,
  size: { min: 1, max: 3 },
  speed: { min: 0.1, max: 0.3 },
  opacity: { min: 0.1, max: 0.5 },
  connectDistance: 150,
  lineOpacity: 0.15
};

// 初始化粒子
const initParticles = () => {
  if (!particleCanvas.value) return;
  
  const canvas = particleCanvas.value;
  ctx = canvas.getContext('2d');
  
  // 设置Canvas尺寸
  width = window.innerWidth;
  height = window.innerHeight;
  canvas.width = width;
  canvas.height = height;
  
  // 创建粒子
  particles = [];
  for (let i = 0; i < particleConfig.count; i++) {
    particles.push(createParticle());
  }
  
  // 开始动画
  animate();
};

// 创建单个粒子
const createParticle = () => {
  const size = Math.random() * (particleConfig.size.max - particleConfig.size.min) + particleConfig.size.min;
  const speed = Math.random() * (particleConfig.speed.max - particleConfig.speed.min) + particleConfig.speed.min;
  const opacity = Math.random() * (particleConfig.opacity.max - particleConfig.opacity.min) + particleConfig.opacity.min;
  
  // 根据颜色模式设置粒子颜色
  let color;
  if (isDarkMode.value) {
    // 暗色模式使用亮色粒子
    const hue = Math.random() * 60 + 240; // 蓝紫色范围
    color = `hsla(${hue}, 70%, 70%, ${opacity})`;
  } else {
    // 亮色模式使用深色粒子
    const hue = Math.random() * 60 + 240; // 蓝紫色范围
    color = `hsla(${hue}, 70%, 40%, ${opacity})`;
  }
  
  return {
    x: Math.random() * width,
    y: Math.random() * height,
    size,
    color,
    speedX: (Math.random() - 0.5) * speed,
    speedY: (Math.random() - 0.5) * speed,
    opacity
  };
};

// 绘制粒子
const drawParticles = () => {
  ctx.clearRect(0, 0, width, height);
  
  // 绘制粒子
  particles.forEach(particle => {
    ctx.beginPath();
    ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
    ctx.fillStyle = particle.color;
    ctx.fill();
    
    // 更新粒子位置
    particle.x += particle.speedX;
    particle.y += particle.speedY;
    
    // 边界检查
    if (particle.x < 0 || particle.x > width) particle.speedX *= -1;
    if (particle.y < 0 || particle.y > height) particle.speedY *= -1;
  });
  
  // 绘制粒子连接线
  drawConnections();
};

// 绘制粒子之间的连接线
const drawConnections = () => {
  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const dx = particles[i].x - particles[j].x;
      const dy = particles[i].y - particles[j].y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      if (distance < particleConfig.connectDistance) {
        // 根据距离计算线条透明度
        const opacity = (1 - distance / particleConfig.connectDistance) * particleConfig.lineOpacity;
        
        // 根据颜色模式设置线条颜色
        let strokeStyle;
        if (isDarkMode.value) {
          strokeStyle = `rgba(180, 180, 255, ${opacity})`;
        } else {
          strokeStyle = `rgba(70, 70, 150, ${opacity})`;
        }
        
        ctx.beginPath();
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(particles[j].x, particles[j].y);
        ctx.strokeStyle = strokeStyle;
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }
    }
  }
};

// 动画循环
const animate = () => {
  drawParticles();
  animationFrameId.value = requestAnimationFrame(animate);
};

// 处理窗口大小变化
const handleResize = () => {
  if (animationFrameId.value) {
    cancelAnimationFrame(animationFrameId.value);
    initParticles();
  }
};

// 组件挂载时初始化
onMounted(() => {
  if (typeof window !== 'undefined') {
    checkColorMode();
    const observer = setupColorModeObserver();
    initParticles();
    window.addEventListener('resize', handleResize);
    
    // 组件卸载时清理观察器
    onBeforeUnmount(() => {
      if (animationFrameId.value) {
        cancelAnimationFrame(animationFrameId.value);
      }
      window.removeEventListener('resize', handleResize);
      if (observer) observer.disconnect();
      window.removeEventListener('storage', () => {});
    });
  }
});

// 组件卸载时清理逻辑已移至onMounted内部
</script>

<style scoped>
.particle-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
  z-index: 0;
}

.particle-canvas {
  display: block;
  width: 100%;
  height: 100%;
}

/* 暗黑模式调整 */
.dark-mode .particle-canvas {
  opacity: 0.8;
}
</style>