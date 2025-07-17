<template>
  <div class="animated-text-container">
    <component :is="tag || (type === 'heading' ? 'h1' : (type === 'paragraph' ? 'p' : 'p'))" :class="type === 'heading' ? 'animated-heading' : 'animated-paragraph'">
      <span v-for="(char, index) in characters" :key="index" class="char" :ref="el => charElements[index] = el">
        {{ char === ' ' ? '&nbsp;' : char }}
      </span>
    </component>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount, watch, nextTick } from 'vue';
import { gsap } from 'gsap';

const props = defineProps({
  text: {
    type: String,
    default: ''
  },
  tag: {
    type: String,
    default: ''
  },
  type: {
    type: String,
    default: 'heading',
    validator: (value) => ['heading', 'paragraph', 'fadeIn', 'slideUp', 'stagger', 'wave'].includes(value)
  },
  animationType: {
    type: String,
    default: 'fadeIn',
    validator: (value) => ['fadeIn', 'slideUp', 'stagger', 'wave'].includes(value)
  },
  delay: {
    type: Number,
    default: 0
  },
  duration: {
    type: Number,
    default: 0.8
  },
  staggerAmount: {
    type: Number,
    default: 0.03
  },
  triggerOnScroll: {
    type: Boolean,
    default: false
  }
});

const characters = computed(() => props.text ? props.text.split('') : []);
const charElements = ref([]);
let animation = null;
let observer = null;

// 创建动画
const createAnimation = () => {
  // 清除之前的动画
  if (animation) {
    animation.kill();
  }
  
  // 检查元素是否存在
  const validElements = charElements.value.filter(el => el && el.nodeType === Node.ELEMENT_NODE);
  if (validElements.length === 0) {
    console.warn('AnimatedText: 没有找到有效的字符元素');
    return;
  }
  
  // 获取动画类型
  const animType = ['fadeIn', 'slideUp', 'stagger', 'wave'].includes(props.type) ? props.type : props.animationType;
  
  // 重置元素状态
  gsap.set(validElements, { 
    autoAlpha: animType === 'fadeIn' ? 0 : 1,
    y: animType === 'slideUp' ? 20 : 0
  });
  
  // 创建新动画
  const tl = gsap.timeline({ delay: props.delay });
  
  switch (animType) {
    case 'fadeIn':
      animation = tl.to(validElements, {
        autoAlpha: 1,
        duration: props.duration,
        stagger: props.staggerAmount,
        ease: 'power2.out'
      });
      break;
      
    case 'slideUp':
      animation = tl.to(validElements, {
        y: 0,
        autoAlpha: 1,
        duration: props.duration,
        stagger: props.staggerAmount,
        ease: 'back.out(1.7)'
      });
      break;
      
    case 'stagger':
      animation = tl.fromTo(validElements, 
        { scale: 0, autoAlpha: 0 },
        { scale: 1, autoAlpha: 1, duration: props.duration, stagger: props.staggerAmount, ease: 'elastic.out(1, 0.3)' }
      );
      break;
      
    case 'wave':
      // 波浪效果
      animation = tl.fromTo(validElements,
        { y: 0 },
        { 
          y: -15,
          duration: props.duration / 2,
          stagger: {
            each: props.staggerAmount,
            repeat: 1,
            yoyo: true
          },
          ease: 'sine.inOut'
        }
      );
      break;
  }
  
  return animation;
};

// 设置滚动触发
const setupScrollTrigger = () => {
  if (!props.triggerOnScroll) return;
  
  // 检查元素是否存在
  const validElements = charElements.value.filter(el => el && el.nodeType === Node.ELEMENT_NODE);
  if (validElements.length === 0) {
    console.warn('AnimatedText: 滚动触发器没有找到有效的字符元素');
    return;
  }
  
  // 获取动画类型
  const animType = ['fadeIn', 'slideUp', 'stagger', 'wave'].includes(props.type) ? props.type : props.animationType;
  
  // 初始隐藏所有字符
  gsap.set(validElements, { 
    autoAlpha: animType === 'fadeIn' ? 0 : 1,
    y: animType === 'slideUp' ? 20 : 0
  });
  
  // 创建Intersection Observer
  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        createAnimation();
        observer.disconnect();
      }
    });
  }, { threshold: 0.2 });
  
  // 观察容器元素
  const container = charElements.value[0]?.parentElement;
  if (container) {
    observer.observe(container);
  }
};

// 监听文本变化，重新创建动画
watch(() => props.text, () => {
  // 等待DOM更新后重新创建动画
  nextTick(() => {
    if (props.triggerOnScroll) {
      setupScrollTrigger();
    } else {
      createAnimation();
    }
  });
});

onMounted(() => {
  // 使用nextTick确保DOM完全渲染
  nextTick(() => {
    // 添加小延迟确保ref绑定完成
    setTimeout(() => {
      if (props.triggerOnScroll) {
        setupScrollTrigger();
      } else {
        createAnimation();
      }
    }, 50);
  });
});

// 组件卸载前清理资源
onBeforeUnmount(() => {
  if (animation) {
    animation.kill();
  }
  if (observer) {
    observer.disconnect();
  }
});
</script>

<style scoped>
.animated-text-container {
  overflow: hidden;
}

.animated-heading,
.animated-paragraph {
  display: inline-block;
  margin: 0;
}

.char {
  display: inline-block;
  white-space: pre;
}
</style>