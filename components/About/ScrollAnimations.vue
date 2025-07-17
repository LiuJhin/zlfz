<template>
  <div class="scroll-animations-container" ref="container">
    <slot></slot>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// 注册ScrollTrigger插件
gsap.registerPlugin(ScrollTrigger);

const props = defineProps({
  animation: {
    type: String,
    default: 'fadeIn',
    validator: (value) => ['fadeIn', 'slideUp', 'slideIn', 'scale', 'stagger', 'parallax'].includes(value)
  },
  duration: {
    type: Number,
    default: 0.8
  },
  delay: {
    type: Number,
    default: 0
  },
  staggerAmount: {
    type: Number,
    default: 0.1
  },
  threshold: {
    type: [Number, String],
    default: 0.2,
    validator: (value) => {
      // 如果是字符串，尝试转换为数字
      if (typeof value === 'string') {
        const num = parseFloat(value);
        return !isNaN(num);
      }
      return typeof value === 'number';
    }
  },
  direction: {
    type: String,
    default: 'bottom',
    validator: (value) => ['top', 'bottom', 'left', 'right'].includes(value)
  },
  distance: {
    type: Number,
    default: 50
  },
  scrub: {
    type: [Boolean, Number],
    default: false
  },
  markers: {
    type: Boolean,
    default: false
  },
  pin: {
    type: Boolean,
    default: false
  },
  pinDuration: {
    type: Number,
    default: 1
  },
  staggerChildren: {
    type: Boolean,
    default: false
  },
  childSelector: {
    type: String,
    default: '.animate-item'
  },
  ease: {
    type: String,
    default: 'power2.out'
  }
});

const container = ref(null);
let scrollTrigger = null;
let animation = null;

// 创建滚动动画
const createScrollAnimation = () => {
  if (!container.value) return;
  
  // 获取子元素
  const elements = props.staggerChildren
    ? container.value.querySelectorAll(props.childSelector)
    : [container.value];
  
  if (elements.length === 0) return;
  
  // 设置初始状态
  const initialProps = {};
  
  switch (props.animation) {
    case 'fadeIn':
      initialProps.autoAlpha = 0;
      break;
      
    case 'slideUp':
    case 'slideIn':
      initialProps.autoAlpha = 0;
      if (props.direction === 'bottom') initialProps.y = props.distance;
      if (props.direction === 'top') initialProps.y = -props.distance;
      if (props.direction === 'left') initialProps.x = -props.distance;
      if (props.direction === 'right') initialProps.x = props.distance;
      break;
      
    case 'scale':
      initialProps.autoAlpha = 0;
      initialProps.scale = 0.8;
      break;
      
    case 'stagger':
      initialProps.autoAlpha = 0;
      initialProps.y = props.distance;
      break;
      
    case 'parallax':
      // 视差效果不需要初始化，直接在滚动时应用
      break;
  }
  
  // 设置初始状态
  gsap.set(elements, initialProps);
  
  // 创建动画
  const animationProps = {
    duration: props.duration,
    ease: props.ease,
    delay: props.delay
  };
  
  // 根据动画类型设置目标状态
  switch (props.animation) {
    case 'fadeIn':
      animationProps.autoAlpha = 1;
      break;
      
    case 'slideUp':
    case 'slideIn':
      animationProps.autoAlpha = 1;
      if (props.direction === 'bottom' || props.direction === 'top') animationProps.y = 0;
      if (props.direction === 'left' || props.direction === 'right') animationProps.x = 0;
      break;
      
    case 'scale':
      animationProps.autoAlpha = 1;
      animationProps.scale = 1;
      break;
      
    case 'stagger':
      animationProps.autoAlpha = 1;
      animationProps.y = 0;
      animationProps.stagger = props.staggerAmount;
      break;
      
    case 'parallax':
      // 视差效果在ScrollTrigger中处理
      break;
  }
  
  // 创建ScrollTrigger配置
  const thresholdValue = typeof props.threshold === 'string' ? parseFloat(props.threshold) : props.threshold;
  const scrollConfig = {
    trigger: container.value,
    start: `top ${100 - thresholdValue * 100}%`,
    markers: props.markers,
    toggleActions: 'play none none reverse'
  };
  
  // 添加特殊配置
  if (props.scrub !== false) {
    scrollConfig.scrub = props.scrub === true ? true : props.scrub;
  }
  
  if (props.pin) {
    scrollConfig.pin = true;
    scrollConfig.pinSpacing = true;
    scrollConfig.end = `+=${props.pinDuration * 100}%`;
  }
  
  // 创建动画
  if (props.animation === 'parallax') {
    // 视差效果
    animation = gsap.to(elements, {
      y: (i, el) => -el.offsetHeight * 0.1, // 视差移动量
      ease: 'none',
      scrollTrigger: {
        ...scrollConfig,
        scrub: props.scrub === false ? 0.5 : props.scrub
      }
    });
  } else {
    // 其他动画
    animation = gsap.to(elements, {
      ...animationProps,
      scrollTrigger: scrollConfig
    });
  }
  
  // 保存ScrollTrigger实例
  scrollTrigger = animation.scrollTrigger;
};

onMounted(() => {
  createScrollAnimation();
});

onBeforeUnmount(() => {
  // 清理资源
  if (scrollTrigger) {
    scrollTrigger.kill();
  }
  if (animation) {
    animation.kill();
  }
});
</script>

<style scoped>
.scroll-animations-container {
  position: relative;
  width: 100%;
}
</style>