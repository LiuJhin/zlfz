<template>
  <section class="premium-showcase">
    <!-- 3D背景网格 -->
    <div class="grid-background">
      <div class="grid-lines"></div>
    </div>

    <!-- 粒子系统 -->
    <div class="particle-system">
      <div
        v-for="i in 50"
        :key="i"
        class="particle"
        :style="{
          '--delay': `${Math.random() * 5}s`,
          '--duration': `${3 + Math.random() * 4}s`,
          '--x': `${Math.random() * 100}%`,
          '--y': `${Math.random() * 100}%`,
        }"
      ></div>
    </div>

    <!-- 主容器 -->
    <div class="container">
      <!-- 高级标题区域 -->
      <div class="premium-header">
        <div class="title-backdrop"></div>
        <h2 class="premium-title">
          <span class="title-line">PREMIUM</span>
          <span class="title-line">TECHNOLOGY</span>
          <span class="title-line">PARTNERS</span>
        </h2>
        <div class="subtitle-container">
          <div class="subtitle-line"></div>
          <p class="premium-subtitle">与全球顶尖科技巨头建立战略合作关系</p>
          <div class="subtitle-line"></div>
        </div>
      </div>

      <!-- 高级Logo展示区 -->
      <div class="premium-logos">
        <div
          v-for="(logo, index) in logos"
          :key="logo.id || index"
          class="premium-card"
          :style="{
            '--index': index,
            '--delay': `${index * 0.15}s`,
            '--rotation': `${
              (index % 2 === 0 ? 1 : -1) * (Math.random() * 10 - 5)
            }deg`,
          }"
          @mouseenter="handleCardEnter($event, index)"
          @mouseleave="handleCardLeave($event)"
        >
          <!-- 多层背景效果 -->
          <div class="card-backdrop"></div>
          <div class="card-glow"></div>
          <div class="card-reflection"></div>

          <!-- 3D容器 -->
          <div class="card-3d-container">
            <!-- 顶部装饰 -->
            <div class="card-top-decoration">
              <div class="decoration-line"></div>
              <div class="decoration-dots">
                <span v-for="i in 3" :key="i" class="dot"></span>
              </div>
              <div class="decoration-line"></div>
            </div>

            <!-- Logo主体 -->
            <div class="logo-container">
              <!-- <div class="logo-background">
                <div class="logo-pattern"></div>
              </div> -->
              <div class="logo-icon-wrapper">
                <img class="premium-logo-icon" :src="logo.icon" />
              </div>
              <div class="logo-shine"></div>
            </div>

            <!-- 信息区域 -->
            <div class="card-info">
              <h3 class="logo-title">{{ logo.name }}</h3>
              <p class="logo-category">
                {{ logo.category || "Technology Partner" }}
              </p>
              <div class="tech-level">
                <div class="level-indicator">
                  <span
                    v-for="i in 5"
                    :key="i"
                    class="level-dot"
                    :class="{ active: i <= (logo.level || 5) }"
                  ></span>
                </div>
              </div>
            </div>

            <!-- 底部装饰 -->
            <div class="card-bottom-decoration">
              <div class="status-indicator"></div>
              <div class="connection-line"></div>
            </div>
          </div>

          <!-- 悬浮效果 -->
          <div class="hover-effects">
            <div class="ripple-effect"></div>
            <div class="magnetic-field"></div>
          </div>
        </div>
      </div>

      <!-- 统计信息 -->
      <div class="partnership-stats">
        <div class="stat-item">
          <div class="stat-number">{{ animatedStats.partners }}</div>
          <div class="stat-label">合作伙伴</div>
        </div>
        <div class="stat-divider"></div>
        <div class="stat-item">
          <div class="stat-number">{{ animatedStats.projects }}</div>
          <div class="stat-label">成功项目</div>
        </div>
        <div class="stat-divider"></div>
        <div class="stat-item">
          <div class="stat-number">{{ animatedStats.satisfaction }}</div>
          <div class="stat-label">客户满意度</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// 注册GSAP插件
gsap.registerPlugin(ScrollTrigger);

// 主题模式支持
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

// 统计数据
const animatedStats = ref({
  partners: 0,
  projects: 0,
  satisfaction: "0%",
});

// 目标统计数据
const targetStats = {
  partners: 50,
  projects: 200,
  satisfaction: "99%",
};

// Logo数据
const logos = ref([
  {
    id: 1,
    name: "AWS",
    category: "Cloud Platform",
    level: 5,
    icon: `https://www.cloudchinas.com/upload/202007/1596173157.png`,
  },
  {
    id: 2,
    name: "Microsoft Azure",
    category: "Cloud Platform",
    level: 4,
    icon: `https://www.cloudchinas.com/upload/202007/1596172473.png`,
  },
  {
    id: 3,
    name: "Google Cloud",
    category: "Cloud Platform",
    level: 4,
    icon: `https://www.cloudchinas.com/upload/202007/1596173149.png`,
  },
  {
    id: 4,
    name: "ORACLE",
    category: "Containerization",
    level: 5,
    icon: `https://www.cloudchinas.com/upload/202408/1723107728.png`,
  },
  {
    id: 5,
    name: "HUAWEI Cloud",
    category: "Containerization",
    level: 4,
    icon: `https://www.cloudchinas.com/upload/202007/1596172567.png`,
  },
  {
    id: 6,
    name: "Tencent Cloud",
    category: "Infrastructure as Code",
    level: 4,
    icon: `https://www.cloudchinas.com/upload/202007/1596172752.png`,
  },
  {
    id: 7,
    name: "Kubernetes",
    category: "Container Orchestration",
    level: 4,
    icon: `https://upload.wikimedia.org/wikipedia/commons/3/39/Kubernetes_logo_without_workmark.svg`,
  },
  {
    id: 8,
    name: "Jenkins",
    category: "CI/CD Platform",
    level: 3,
    icon: `https://www.jenkins.io/images/logos/jenkins/jenkins.svg`,
  },
  {
    id: 9,
    name: "GitLab",
    category: "DevOps Platform",
    level: 4,
    icon: `https://about.gitlab.com/images/logos/gitlab-logo.png`,
  },
]);

let scrollTriggers = [];

// 卡片交互处理 - 优化性能和响应速度
const handleCardEnter = (event, index) => {
  const card = event.currentTarget;
  const glow = card.querySelector(".card-glow");
  const container = card.querySelector(".card-3d-container");
  const logoIcon = card.querySelector(".premium-logo-icon");

  // 简化3D倾斜效果
  gsap.to(container, {
    duration: 0.3,
    rotationX: 2,
    rotationY: 3,
    z: 20,
    ease: "power2.out",
  });

  // 优化发光效果
  gsap.to(glow, {
    duration: 0.25,
    opacity: 0.5,
    scale: 1.05,
    ease: "power2.out",
  });

  // Logo图标动画
  gsap.to(logoIcon, {
    duration: 0.25,
    scale: 1.1,
    ease: "power2.out",
  });
};

const handleCardLeave = (event) => {
  const card = event.currentTarget;
  const glow = card.querySelector(".card-glow");
  const container = card.querySelector(".card-3d-container");
  const logoIcon = card.querySelector(".premium-logo-icon");

  // 统一重置动画时长
  const resetDuration = 0.25;
  const resetEase = "power2.out";

  // 重置3D效果
  gsap.to(container, {
    duration: resetDuration,
    rotationX: 0,
    rotationY: 0,
    z: 0,
    ease: resetEase,
  });

  // 重置发光效果
  gsap.to(glow, {
    duration: resetDuration,
    opacity: 0.3,
    scale: 1,
    ease: resetEase,
  });

  // 重置Logo图标
  gsap.to(logoIcon, {
    duration: resetDuration,
    scale: 1,
    ease: resetEase,
  });
};

// 统计数字动画 - 优化流畅度
const animateStats = () => {
  // 合作伙伴数量动画
  gsap.to(animatedStats.value, {
    partners: targetStats.partners,
    duration: 1.5,
    ease: "power2.out",
  });

  // 项目数量动画
  gsap.to(animatedStats.value, {
    projects: targetStats.projects,
    duration: 1.8,
    ease: "power2.out",
  });

  // 满意度动画
  gsap.to(
    { value: 0 },
    {
      value: 99,
      duration: 2,
      ease: "power2.out",
      onUpdate: function () {
        animatedStats.value.satisfaction =
          Math.round(this.targets()[0].value) + "%";
      },
    }
  );
};

// 初始化动画
const initAnimations = () => {
  // 设置默认动画配置
  gsap.defaults({
    ease: "power2.out",
    duration: 0.6,
  });

  // 标题动画 - 优化流畅度
  const titleTrigger = ScrollTrigger.create({
    trigger: ".premium-title",
    start: "top 80%",
    onEnter: () => {
      gsap.fromTo(
        ".title-line",
        { y: 50, opacity: 0, rotationX: 30 },
        {
          y: 0,
          opacity: 1,
          rotationX: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
        }
      );
      gsap.fromTo(
        ".premium-subtitle",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, delay: 0.4, ease: "power2.out" }
      );
      gsap.fromTo(
        ".subtitle-line",
        { scaleX: 0 },
        { scaleX: 1, duration: 0.8, delay: 0.3, ease: "power2.out" }
      );
    },
  });
  scrollTriggers.push(titleTrigger);

  // Logo卡片动画 - 减少复杂度提升流畅度
  const logoTrigger = ScrollTrigger.create({
    trigger: ".premium-logos",
    start: "top 80%",
    onEnter: () => {
      gsap.fromTo(
        ".premium-card",
        {
          y: 60,
          opacity: 0,
          scale: 0.9,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: {
            each: 0.1,
            from: "start",
          },
          ease: "power2.out",
        }
      );
    },
  });
  scrollTriggers.push(logoTrigger);

  // 统计数据动画
  const statsTrigger = ScrollTrigger.create({
    trigger: ".partnership-stats",
    start: "top 80%",
    onEnter: () => {
      gsap.fromTo(
        ".stat-item",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.15,
          ease: "power2.out",
        }
      );
      // 延迟启动数字动画
      setTimeout(animateStats, 300);
    },
  });
  scrollTriggers.push(statsTrigger);

  // 粒子系统动画 - 优化性能
  gsap.set(".particle", {
    transformOrigin: "center center",
  });

  gsap.to(".particle", {
    y: () => gsap.utils.random(-30, 30),
    x: () => gsap.utils.random(-15, 15),
    rotation: () => gsap.utils.random(-180, 180),
    opacity: () => gsap.utils.random(0.2, 0.6),
    duration: () => gsap.utils.random(5, 10),
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
    stagger: {
      amount: 2,
      from: "random",
    },
  });

  // 网格背景动画 - 简化动画
  gsap.to(".grid-lines", {
    backgroundPosition: "50px 50px",
    duration: 15,
    repeat: -1,
    ease: "none",
  });
};

// 监听主题变化，重新初始化动画
watch(
  () => isDarkMode.value,
  (newValue) => {
    // 清理现有动画
    scrollTriggers.forEach((trigger) => trigger.kill());
    scrollTriggers = [];

    // 延迟重新初始化动画，确保CSS变量已更新
    setTimeout(() => {
      initAnimations();
    }, 100);
  }
);

onMounted(() => {
  if (typeof window !== 'undefined') {
    // 检查当前颜色模式
    checkColorMode();
    const observer = setupColorModeObserver();
    
    // 初始化动画
    initAnimations();
    
    // 组件卸载时清理
    onUnmounted(() => {
      // 清理ScrollTrigger实例
      scrollTriggers.forEach((trigger) => trigger.kill());
      scrollTriggers = [];
      
      // 清理颜色模式观察器
      if (observer) observer.disconnect();
      window.removeEventListener('storage', () => {});
    });
  }
});
</script>

<style scoped>
.premium-showcase {
  padding: 80px 0;
  background: var(--bg-color);
  position: relative;
  overflow: hidden;
  transition: background-color 0.3s ease;
  perspective: 1000px;
  will-change: transform;
  transform: translateZ(0);
}

/* 3D背景网格 */
.grid-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0.1;
  z-index: 1;
}

.grid-lines {
  width: 100%;
  height: 100%;
  background-image: linear-gradient(var(--border-color) 1px, transparent 1px),
    linear-gradient(90deg, var(--border-color) 1px, transparent 1px);
  background-size: 50px 50px;
  background-position: 0 0;
}

/* 粒子系统 */
.particle-system {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  pointer-events: none;
}

.particle {
  position: absolute;
  width: 4px;
  height: 4px;
  background: var(--primary-color);
  border-radius: 50%;
  opacity: 0.3;
  left: var(--x);
  top: var(--y);
  animation: float var(--duration) var(--delay) infinite ease-in-out;
  will-change: transform;
  transform: translate3d(0, 0, 0);
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-20px) rotate(180deg);
  }
}

.logo-showcase::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    135deg,
    var(--primary-color) 0%,
    var(--primary-color-dark) 100%
  );
  opacity: 0.1;
  pointer-events: none;
}

.dark-mode .logo-showcase::before {
  opacity: 0.2;
}

.sepia-mode .logo-showcase::before {
  opacity: 0.15;
}

.container {
  max-width: 1600px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
  z-index: 3;
}

/* 高级标题区域 */
.premium-header {
  text-align: center;
  margin-bottom: 60px;
  position: relative;
}

.title-backdrop {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  height: 200px;
  background: radial-gradient(
    ellipse,
    var(--primary-color) 20,
    transparent 70%
  );
  filter: blur(40px);
  z-index: -1;
}

.premium-title {
  font-size: 3.5rem;
  font-weight: 900;
  line-height: 0.9;
  margin-bottom: 30px;
  perspective: 1000px;
}

.title-line {
  display: block;
  background: linear-gradient(
    135deg,
    var(--primary-color),
    var(--primary-color-light),
    var(--primary-color)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0 0 30px var(--primary-color) 40;
  transform-style: preserve-3d;
}

.subtitle-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  margin-top: 30px;
}

.subtitle-line {
  width: 80px;
  height: 2px;
  background: linear-gradient(
    90deg,
    transparent,
    var(--primary-color),
    transparent
  );
  transform-origin: center;
}

.premium-subtitle {
  font-size: 1.3rem;
  color: var(--text-color);
  opacity: 0.9;
  font-weight: 500;
  letter-spacing: 0.5px;
  transition: color 0.3s ease;
}

/* 高级Logo展示区 */
.premium-logos {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 25px;
  margin-bottom: 50px;
  perspective: 1000px;
}

.premium-card {
  position: relative;
  height: 320px;
  cursor: pointer;
  transform-style: preserve-3d;
  transition: transform 0.6s ease;
  will-change: transform;
  transform: translate3d(0, 0, 0);
}

/* 多层背景效果 */
.card-backdrop {
  position: absolute;
  top: -20px;
  left: -20px;
  right: -20px;
  bottom: -20px;
  background: var(--card-bg);
  border-radius: 30px;
  filter: blur(20px);
  opacity: 0.3;
  z-index: 1;
}

.card-glow {
  position: absolute;
  top: -10px;
  left: -10px;
  right: -10px;
  bottom: -10px;
  background: linear-gradient(
    45deg,
    var(--primary-color) 30,
    transparent,
    var(--primary-color) 30
  );
  border-radius: 25px;
  opacity: 0.3;
  z-index: 2;
  transition: all 0.4s ease;
}

.card-reflection {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.1) 0%,
    transparent 50%
  );
  border-radius: 20px;
  z-index: 4;
  pointer-events: none;
}

/* 3D容器 */
.card-3d-container {
  position: relative;
  width: 100%;
  height: 100%;
  background: var(--card-bg);
  backdrop-filter: blur(20px);
  border: 1px solid var(--border-color);
  border-radius: 16px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 3;
  transform-style: preserve-3d;
  box-shadow: var(--card-shadow);
  transition: transform 0.3s ease, opacity 0.3s ease, color 0.3s ease;
  will-change: transform;
  transform: translate3d(0, 0, 0);
}

/* 顶部装饰 */
.card-top-decoration {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
}

.decoration-line {
  flex: 1;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    var(--primary-color),
    transparent
  );
}

.decoration-dots {
  display: flex;
  gap: 8px;
  margin: 0 15px;
}

.dot {
  width: 4px;
  height: 4px;
  background: var(--primary-color);
  border-radius: 50%;
  opacity: 0.6;
}

/* Logo主体 */
.logo-container {
  position: relative;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 15px 0;
}

.logo-background {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--primary-color) 10, transparent);
  border: 1px solid var(--border-color);
}

.logo-pattern {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80px;
  height: 80px;
  background: radial-gradient(
    circle at 30% 30%,
    var(--primary-color) 20,
    transparent 70%
  );
  border-radius: 50%;
}

.logo-icon-wrapper {
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
}

.premium-logo-icon {
  max-width: 140px;
  max-height: 70px;
  color: var(--text-color);
  opacity: 0.8;
  transition: all 0.4s ease;
  transform-style: preserve-3d;
  will-change: transform;
  transform: translate3d(0, 0, 0);
}

.logo-shine {
  position: absolute;
  top: 20%;
  left: 20%;
  width: 30px;
  height: 30px;
  background: linear-gradient(45deg, rgba(255, 255, 255, 0.3), transparent);
  border-radius: 50%;
  filter: blur(10px);
  opacity: 0;
  transition: opacity 0.3s ease;
}

/* 信息区域 */
.card-info {
  text-align: center;
  margin-bottom: 15px;
}

.logo-title {
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--text-color);
  margin-bottom: 8px;
  transition: all 0.3s ease;
}

.logo-category {
  font-size: 0.9rem;
  color: var(--text-color);
  opacity: 0.7;
  margin-bottom: 15px;
  transition: all 0.3s ease;
}

.tech-level {
  display: flex;
  justify-content: center;
}

.level-indicator {
  display: flex;
  gap: 6px;
}

.level-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--border-color);
  transition: all 0.3s ease;
}

.level-dot.active {
  background: var(--primary-color);
  box-shadow: 0 0 8px var(--primary-color);
}

/* 底部装饰 */
.card-bottom-decoration {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.status-indicator {
  width: 8px;
  height: 8px;
  background: #00ff88;
  border-radius: 50%;
  box-shadow: 0 0 10px #00ff88;
  animation: pulse 2s infinite;
}

.connection-line {
  flex: 1;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    var(--primary-color) 30,
    transparent
  );
  margin-left: 15px;
}

@keyframes pulse {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.3;
  }
}

/* 悬浮效果 */
.hover-effects {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: 5;
}

.ripple-effect {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100px;
  height: 100px;
  border: 2px solid var(--primary-color);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
}

.magnetic-field {
  position: absolute;
  top: -5px;
  left: -5px;
  right: -5px;
  bottom: -5px;
  border: 1px solid var(--primary-color);
  border-radius: 25px;
  opacity: 0;
  transition: opacity 0.3s ease;
}

/* 统计信息 */
.partnership-stats {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  margin-top: 40px;
  padding: 30px;
  background: var(--card-bg);
  backdrop-filter: blur(20px);
  border: 1px solid var(--border-color);
  border-radius: 16px;
  box-shadow: var(--card-shadow);
}

.stat-item {
  text-align: center;
}

.stat-number {
  font-size: 3rem;
  font-weight: 900;
  background: linear-gradient(
    135deg,
    var(--primary-color),
    var(--primary-color-light)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 10px;
}

.stat-label {
  font-size: 1rem;
  color: var(--text-color);
  opacity: 0.8;
  font-weight: 500;
}

.stat-divider {
  width: 1px;
  height: 60px;
  background: linear-gradient(
    to bottom,
    transparent,
    var(--border-color),
    transparent
  );
}

/* 悬停效果 - 优化性能 */
.premium-card:hover .card-glow {
  opacity: 0.6;
  transform: scale3d(1.05, 1.05, 1);
}

.premium-card:hover .premium-logo-icon {
  transform: scale3d(1.1, 1.1, 1) rotateY(8deg);
  color: var(--primary-color);
}

.premium-card:hover .logo-title {
  color: var(--primary-color);
  transform: translate3d(0, -2px, 0);
}

.premium-card:hover .logo-shine {
  opacity: 0.8;
}

.premium-card:hover .magnetic-field {
  opacity: 0.3;
}

.premium-card:hover .level-dot.active {
  box-shadow: 0 0 10px var(--primary-color);
}

.premium-card:hover .card-3d-container {
  transform: translate3d(0, -5px, 20px) rotateX(2deg) rotateY(3deg);
}

/* 主题变量 */
:root {
  --primary-color: #8247e5;
  --primary-color-light: #a47ef5;
  --background-color: #ffffff;
  --text-color: #333333;
  --card-background: #ffffff;
  --border-color: #e5e7eb;
  --shadow-color: rgba(0, 0, 0, 0.1);
  --icon-color: #6b7280;
  --name-color: #374151;
}

.dark-mode {
  --primary-color: #a47ef5;
  --primary-color-light: #c4b5fd;
  --background-color: #1a1a1a;
  --text-color: #e5e7eb;
  --card-background: #2d2d2d;
  --border-color: #404040;
  --shadow-color: rgba(0, 0, 0, 0.3);
  --icon-color: #9ca3af;
  --name-color: #d1d5db;
}

.sepia-mode {
  --primary-color: #6b5b95;
  --primary-color-light: #8b7bb8;
  --background-color: #f4f1e8;
  --text-color: #5d4e37;
  --card-background: #faf8f1;
  --border-color: #d4c5a9;
  --shadow-color: rgba(93, 78, 55, 0.1);
  --icon-color: #8b7355;
  --name-color: #6b5b3d;
}

/* 动画关键帧 */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0px) rotate(0deg);
  }
  33% {
    transform: translateY(-10px) rotate(1deg);
  }
  66% {
    transform: translateY(5px) rotate(-1deg);
  }
}

@keyframes pulse {
  0%,
  100% {
    opacity: 0.4;
  }
  50% {
    opacity: 0.8;
  }
}

@keyframes shimmer {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

@keyframes glow {
  0%,
  100% {
    box-shadow: 0 0 5px var(--primary-color);
  }
  50% {
    box-shadow: 0 0 20px var(--primary-color), 0 0 30px var(--primary-color);
  }
}

@keyframes ripple {
  0% {
    transform: scale(0);
    opacity: 1;
  }
  100% {
    transform: scale(4);
    opacity: 0;
  }
}

@keyframes countUp {
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

/* 响应式设计 */
@media (min-width: 1200px) {
  .premium-logos {
    grid-template-columns: repeat(4, 1fr);
  }
}

@media (min-width: 900px) and (max-width: 1199px) {
  .premium-logos {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (min-width: 600px) and (max-width: 899px) {
  .premium-logos {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 1200px) {
  .premium-logos {
    gap: 25px;
  }

  .premium-card {
    height: 300px;
  }

  .premium-title {
    font-size: 3.2rem;
  }
}

@media (max-width: 768px) {
  .premium-showcase {
    padding: 60px 0;
  }

  .premium-header {
    margin-bottom: 40px;
  }

  .premium-title {
    font-size: 2.5rem;
    margin-bottom: 20px;
  }

  .premium-subtitle {
    font-size: 1.1rem;
  }

  .premium-logos {
    grid-template-columns: 1fr;
    gap: 18px;
    margin-bottom: 35px;
  }

  .premium-card {
    height: 280px;
  }

  .card-3d-container {
    padding: 18px;
    border-radius: 14px;
  }

  .card-top-decoration {
    margin-bottom: 12px;
  }

  .logo-container {
    margin: 12px 0;
  }

  .premium-logo-icon {
    max-width: 120px;
    max-height: 60px;
  }

  .card-info {
    margin-bottom: 12px;
  }

  .logo-title {
    font-size: 1.1rem;
  }

  .logo-category {
    font-size: 0.85rem;
  }

  .partnership-stats {
    flex-direction: column;
    gap: 25px;
    padding: 25px 20px;
    margin-top: 30px;
    border-radius: 14px;
  }

  .stat-divider {
    width: 60px;
    height: 1px;
  }

  .stat-number {
    font-size: 2.2rem;
  }

  .stat-label {
    font-size: 0.9rem;
  }
}

@media (max-width: 480px) {
  .premium-showcase {
    padding: 40px 0;
  }

  .container {
    padding: 0 15px;
  }

  .premium-header {
    margin-bottom: 30px;
  }

  .premium-title {
    font-size: 2rem;
    margin-bottom: 15px;
  }

  .premium-subtitle {
    font-size: 1rem;
  }

  .subtitle-container {
    gap: 20px;
  }

  .subtitle-line {
    width: 60px;
  }

  .premium-logos {
    gap: 15px;
    margin-bottom: 30px;
  }

  .premium-card {
    height: 260px;
  }

  .card-3d-container {
    padding: 15px;
    border-radius: 12px;
  }

  .card-top-decoration {
    margin-bottom: 10px;
  }

  .logo-container {
    margin: 10px 0;
  }

  .premium-logo-icon {
    max-width: 100px;
    max-height: 50px;
  }

  .card-info {
    margin-bottom: 10px;
  }

  .logo-title {
    font-size: 1rem;
  }

  .logo-category {
    font-size: 0.8rem;
  }

  .partnership-stats {
    gap: 20px;
    padding: 20px 15px;
    margin-top: 25px;
    border-radius: 12px;
  }

  .stat-number {
    font-size: 2rem;
  }

  .stat-label {
    font-size: 0.85rem;
  }

  .logo-background {
    width: 100px;
    height: 100px;
  }

  .logo-pattern {
    width: 70px;
    height: 70px;
  }
}
</style>
