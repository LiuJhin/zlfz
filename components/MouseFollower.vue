<template>
  <div class="mouse-follower-container" :class="{ 'dark-mode': isDarkMode }">
    <!-- 鼠标跟随光标 -->
    <div 
      class="mouse-cursor" 
      :style="{
        transform: `translate(${cursorPosition.x}px, ${cursorPosition.y}px) scale(${cursorScale})`,
        opacity: cursorVisible ? 1 : 0
      }"
    ></div>
    
    <!-- 鼠标跟随光环 -->
    <div 
      class="mouse-aura" 
      :style="{
        transform: `translate(${cursorPosition.x}px, ${cursorPosition.y}px) scale(${auraScale})`,
        opacity: cursorVisible ? 0.15 : 0
      }"
    ></div>
    
    <!-- 鼠标点击效果 -->
    <div class="click-effects">
      <div 
        v-for="(effect, index) in clickEffects" 
        :key="'click-'+index" 
        class="click-effect"
        :style="{
          left: effect.x + 'px',
          top: effect.y + 'px',
          '--size': effect.size + 'px',
          '--color': effect.color
        }"
      ></div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, onBeforeUnmount, watch, computed } from 'vue';

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

// 鼠标位置
const cursorPosition = reactive({ x: -100, y: -100 });
const cursorVisible = ref(false);
const cursorScale = ref(1);
const auraScale = ref(1);

// 点击效果
const clickEffects = ref([]);

// 更新鼠标位置
const updateCursorPosition = (e) => {
  cursorPosition.x = e.clientX;
  cursorPosition.y = e.clientY;
  
  if (!cursorVisible.value) {
    cursorVisible.value = true;
  }
};

// 鼠标离开页面
const handleMouseLeave = () => {
  cursorVisible.value = false;
};

// 鼠标进入页面
const handleMouseEnter = () => {
  cursorVisible.value = true;
};

// 鼠标按下
const handleMouseDown = () => {
  cursorScale.value = 0.8;
  auraScale.value = 1.5;
};

// 鼠标释放
const handleMouseUp = () => {
  cursorScale.value = 1;
  auraScale.value = 1;
};

// 鼠标点击
const handleClick = (e) => {
  // 创建点击效果
  const hue = Math.random() * 60 + 240; // 蓝紫色范围
  const lightness = isDarkMode.value ? '70%' : '50%';
  const color = `hsla(${hue}, 90%, ${lightness}, 1)`;
  
  clickEffects.value.push({
    x: e.clientX,
    y: e.clientY,
    size: 50 + Math.random() * 20,
    color
  });
  
  // 限制效果数量
  if (clickEffects.value.length > 5) {
    clickEffects.value.shift();
  }
};

// 鼠标悬停在链接和按钮上
const handleElementHover = (e) => {
  const target = e.target;
  
  // 检查是否悬停在链接或按钮上
  if (target.tagName === 'A' || target.tagName === 'BUTTON' || 
      target.closest('a') || target.closest('button')) {
    cursorScale.value = 1.5;
    auraScale.value = 1.8;
    document.body.style.cursor = 'none'; // 隐藏默认鼠标样式，只显示自定义鼠标
  } else {
    cursorScale.value = 1;
    auraScale.value = 1;
    document.body.style.cursor = 'none'; // 隐藏原生指针
  }
};

// 组件挂载时初始化
onMounted(() => {
  // 检查当前颜色模式
  checkColorMode();
  
  // 设置颜色模式观察器
  const observer = setupColorModeObserver();
  
  // 初始化鼠标位置在视口外
  cursorPosition.x = -100;
  cursorPosition.y = -100;
  
  // 仅在客户端添加事件监听
  if (typeof window !== 'undefined') {
    window.addEventListener('mousemove', updateCursorPosition);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('click', handleClick);
    window.addEventListener('mouseover', handleElementHover);
    
    // 初始隐藏原生鼠标
    document.body.style.cursor = 'none';
    
    // 添加全局样式以确保所有元素都不显示默认鼠标
    const styleEl = document.createElement('style');
    styleEl.setAttribute('data-mouse-follower', 'true');
    styleEl.innerHTML = '* { cursor: none !important; }';
    document.head.appendChild(styleEl);
  }
  
  // 组件卸载时的清理
  onBeforeUnmount(() => {
    // 断开观察器
    if (observer) {
      observer.disconnect();
    }
    
    // 移除事件监听
    if (typeof window !== 'undefined') {
      window.removeEventListener('mousemove', updateCursorPosition);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('click', handleClick);
      window.removeEventListener('mouseover', handleElementHover);
      
      // 恢复原生鼠标
      document.body.style.cursor = 'auto';
      
      // 移除添加的全局样式
      const styleEl = document.querySelector('style[data-mouse-follower]');
      if (styleEl) {
        styleEl.remove();
      }
    }
  });
});

// 组件卸载时的清理已移至onMounted内部
</script>

<style scoped>
.mouse-follower-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 9999;
  overflow: hidden;
}

/* 鼠标光标 */
.mouse-cursor {
  position: absolute;
  width: 10px;
  height: 10px;
  margin-left: -5px;
  margin-top: -5px;
  border-radius: 50%;
  background-color: var(--primary-color);
  mix-blend-mode: difference;
  transition: transform 0.15s ease-out, opacity 0.3s ease-out;
  will-change: transform, opacity;
}

/* 鼠标光环 */
.mouse-aura {
  position: absolute;
  width: 40px;
  height: 40px;
  margin-left: -20px;
  margin-top: -20px;
  border-radius: 50%;
  background: radial-gradient(circle, var(--primary-color) 0%, transparent 70%);
  transition: transform 0.3s ease-out, opacity 0.3s ease-out;
  will-change: transform, opacity;
}

/* 点击效果 */
.click-effects {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.click-effect {
  position: absolute;
  width: var(--size);
  height: var(--size);
  margin-left: calc(var(--size) / -2);
  margin-top: calc(var(--size) / -2);
  border-radius: 50%;
  border: 2px solid var(--color);
  animation: clickRipple 1s ease-out forwards;
}

@keyframes clickRipple {
  0% {
    transform: scale(0);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 0;
  }
}

/* 暗黑模式调整 */
.dark-mode .mouse-cursor {
  background-color: var(--primary-color-light);
  box-shadow: 0 0 10px var(--primary-color-light);
}

.dark-mode .mouse-aura {
  opacity: 0.25;
}

/* 响应式调整 - 在移动设备上禁用 */
@media (max-width: 768px) {
  .mouse-follower-container {
    display: none;
  }
}
</style>