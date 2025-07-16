<template>
  <div class="svg-container" ref="svgContainer">
    <svg viewBox="0 0 200 200" class="animated-svg">
      <!-- 圆形背景 -->
      <circle cx="100" cy="100" r="90" class="svg-circle" ref="circle" />
      
      <!-- 连接线 -->
      <g class="svg-lines" ref="lines">
        <line x1="40" y1="100" x2="160" y2="100" class="svg-line" />
        <line x1="100" y1="40" x2="100" y2="160" class="svg-line" />
        <line x1="58" y1="58" x2="142" y2="142" class="svg-line" />
        <line x1="58" y1="142" x2="142" y2="58" class="svg-line" />
      </g>
      
      <!-- 节点 -->
      <g class="svg-nodes" ref="nodes">
        <circle cx="40" cy="100" r="8" class="svg-node" />
        <circle cx="160" cy="100" r="8" class="svg-node" />
        <circle cx="100" cy="40" r="8" class="svg-node" />
        <circle cx="100" cy="160" r="8" class="svg-node" />
        <circle cx="58" cy="58" r="8" class="svg-node" />
        <circle cx="142" cy="142" r="8" class="svg-node" />
        <circle cx="58" cy="142" r="8" class="svg-node" />
        <circle cx="142" cy="58" r="8" class="svg-node" />
      </g>
      
      <!-- 中心图标 -->
      <g class="svg-icon" ref="icon">
        <circle cx="100" cy="100" r="25" class="svg-icon-bg" />
        <path d="M90,85 L110,85 L110,115 L90,115 Z" class="svg-icon-path" />
        <path d="M85,90 L115,90 L115,110 L85,110 Z" class="svg-icon-path" />
      </g>
      
      <!-- 装饰元素 -->
      <g class="svg-decorations" ref="decorations">
        <path d="M30,30 Q50,10 70,30 T110,30 T150,30 T190,30" class="svg-decoration" />
        <path d="M30,170 Q50,190 70,170 T110,170 T150,170 T190,170" class="svg-decoration" />
      </g>
    </svg>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { gsap } from 'gsap';

const props = defineProps({
  animationDelay: {
    type: Number,
    default: 0
  },
  triggerOnScroll: {
    type: Boolean,
    default: true
  },
  color: {
    type: String,
    default: '#0080ff' // 主色调
  },
  accentColor: {
    type: String,
    default: '#ff8000' // 强调色
  }
});

const svgContainer = ref(null);
const circle = ref(null);
const lines = ref(null);
const nodes = ref(null);
const icon = ref(null);
const decorations = ref(null);

let animation = null;
let observer = null;

// 创建SVG动画
const createAnimation = () => {
  // 清除之前的动画
  if (animation) {
    animation.kill();
  }
  
  // 创建时间线
  const tl = gsap.timeline({
    delay: props.animationDelay,
    defaults: { duration: 0.8, ease: 'power2.out' }
  });
  
  // 重置元素状态
  gsap.set([circle.value, lines.value, nodes.value, icon.value, decorations.value], {
    autoAlpha: 0,
    scale: 0.8,
    transformOrigin: 'center center'
  });
  
  // 添加动画序列
  tl.to(circle.value, {
    autoAlpha: 1,
    scale: 1,
    duration: 1,
    ease: 'elastic.out(1, 0.5)'
  })
  .to(lines.value.children, {
    autoAlpha: 1,
    scale: 1,
    stagger: 0.1,
    ease: 'power1.out'
  }, '-=0.5')
  .to(nodes.value.children, {
    autoAlpha: 1,
    scale: 1,
    stagger: 0.05,
    ease: 'back.out(2)'
  }, '-=0.8')
  .to(icon.value, {
    autoAlpha: 1,
    scale: 1,
    rotation: 360,
    duration: 1.2,
    ease: 'elastic.out(1, 0.3)'
  }, '-=0.5')
  .to(decorations.value.children, {
    autoAlpha: 1,
    scale: 1,
    stagger: 0.2,
    ease: 'sine.out'
  }, '-=0.8');
  
  // 添加持续动画
  tl.add(() => {
    // 节点脉动动画
    gsap.to(nodes.value.children, {
      scale: 1.2,
      duration: 1,
      stagger: {
        each: 0.2,
        repeat: -1,
        yoyo: true
      },
      ease: 'sine.inOut'
    });
    
    // 图标旋转动画
    gsap.to(icon.value, {
      rotation: '+=360',
      duration: 20,
      repeat: -1,
      ease: 'none'
    });
    
    // 装饰元素波动动画
    gsap.to(decorations.value.children, {
      y: '-=10',
      duration: 2,
      stagger: {
        each: 0.5,
        repeat: -1,
        yoyo: true
      },
      ease: 'sine.inOut'
    });
  });
  
  animation = tl;
  return tl;
};

// 设置滚动触发
const setupScrollTrigger = () => {
  if (!props.triggerOnScroll) return;
  
  // 初始隐藏所有元素
  gsap.set([circle.value, lines.value, nodes.value, icon.value, decorations.value], {
    autoAlpha: 0,
    scale: 0.8
  });
  
  // 创建Intersection Observer
  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        createAnimation();
        observer.disconnect();
      }
    });
  }, { threshold: 0.3 });
  
  // 观察容器元素
  if (svgContainer.value) {
    observer.observe(svgContainer.value);
  }
};

onMounted(() => {
  // 应用自定义颜色
  if (circle.value) {
    circle.value.style.stroke = props.color;
  }
  
  if (lines.value) {
    Array.from(lines.value.children).forEach(line => {
      line.style.stroke = props.color;
    });
  }
  
  if (nodes.value) {
    Array.from(nodes.value.children).forEach(node => {
      node.style.fill = props.color;
    });
  }
  
  if (icon.value && icon.value.children.length > 0) {
    icon.value.children[0].style.fill = props.accentColor;
    Array.from(icon.value.children).slice(1).forEach(path => {
      path.style.fill = '#ffffff';
    });
  }
  
  if (decorations.value) {
    Array.from(decorations.value.children).forEach(decoration => {
      decoration.style.stroke = props.accentColor;
    });
  }
  
  // 启动动画
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
.svg-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.animated-svg {
  width: 100%;
  height: 100%;
  max-width: 300px;
  max-height: 300px;
}

.svg-circle {
  fill: none;
  stroke-width: 2;
  stroke-dasharray: 565.48; /* 圆周长 2*PI*r */
  stroke-dashoffset: 565.48;
}

.svg-line {
  stroke-width: 2;
  stroke-linecap: round;
}

.svg-node {
  stroke: none;
}

.svg-icon-bg {
  stroke: none;
}

.svg-icon-path {
  stroke: none;
}

.svg-decoration {
  fill: none;
  stroke-width: 2;
  stroke-linecap: round;
}
</style>