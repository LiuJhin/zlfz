<template>
  <div class="animated-text-container">
    <h1 v-if="type === 'heading'" class="animated-heading">
      <span v-for="(char, index) in characters" :key="index" class="char" :ref="el => charElements[index] = el">
        {{ char === ' ' ? '&nbsp;' : char }}
      </span>
    </h1>
    <p v-else-if="type === 'paragraph'" class="animated-paragraph">
      <span v-for="(char, index) in characters" :key="index" class="char" :ref="el => charElements[index] = el">
        {{ char === ' ' ? '&nbsp;' : char }}
      </span>
    </p>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue';
import { gsap } from 'gsap';

const props = defineProps({
  text: {
    type: String,
    required: true
  },
  type: {
    type: String,
    default: 'heading',
    validator: (value) => ['heading', 'paragraph'].includes(value)
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

const characters = computed(() => props.text.split(''));
const charElements = ref([]);
let animation = null;
let observer = null;

// 创建动画
const createAnimation = () => {
  // 清除之前的动画
  if (animation) {
    animation.kill();
  }
  
  // 重置元素状态
  gsap.set(charElements.value, { 
    autoAlpha: props.animationType === 'fadeIn' ? 0 : 1,
    y: props.animationType === 'slideUp' ? 20 : 0
  });
  
  // 创建新动画
  const tl = gsap.timeline({ delay: props.delay });
  
  switch (props.animationType) {
    case 'fadeIn':
      animation = tl.to(charElements.value, {
        autoAlpha: 1,
        duration: props.duration,
        stagger: props.staggerAmount,
        ease: 'power2.out'
      });
      break;
      
    case 'slideUp':
      animation = tl.to(charElements.value, {
        y: 0,
        autoAlpha: 1,
        duration: props.duration,
        stagger: props.staggerAmount,
        ease: 'back.out(1.7)'
      });
      break;
      
    case 'stagger':
      animation = tl.fromTo(charElements.value, 
        { scale: 0, autoAlpha: 0 },
        { scale: 1, autoAlpha: 1, duration: props.duration, stagger: props.staggerAmount, ease: 'elastic.out(1, 0.3)' }
      );
      break;
      
    case 'wave':
      // 波浪效果
      animation = tl.fromTo(charElements.value,
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
  
  // 初始隐藏所有字符
  gsap.set(charElements.value, { 
    autoAlpha: props.animationType === 'fadeIn' ? 0 : 1,
    y: props.animationType === 'slideUp' ? 20 : 0
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
  if (props.triggerOnScroll) {
    setupScrollTrigger();
  } else {
    createAnimation();
  }
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