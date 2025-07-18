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
              <div class="logo-background">
                <div class="logo-pattern"></div>
              </div>
              <div class="logo-icon-wrapper">
                <div class="premium-logo-icon" v-html="logo.icon"></div>
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
const colorMode = useColorMode();

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
    icon: `<svg viewBox="0 0 100 60" fill="currentColor">
      <path d="M30.5 45.5c-7.5 5.5-18.4 8.5-27.8 8.5-13.2 0-25-4.9-34-13 -0.7-0.6-0.1-1.5 0.8-1l22.7 13.4c11.2 6.6 25.1 6.6 36.3 0l22.7-13.4c0.9-0.5 1.5 0.4 0.8 1C43 49.6 31.2 54.5 18 54.5c-9.4 0-20.3-3-27.8-8.5"/>
      <path d="M35.2 39.5L58 26.1c0.9-0.5 0.9-1.4 0-1.9L35.2 10.5c-0.9-0.5-2.3-0.5-3.2 0L9.2 24.2c-0.9 0.5-0.9 1.4 0 1.9L32 39.8C32.9 40.3 34.3 40.3 35.2 39.5z"/>
    </svg>`,
  },
  {
    id: 2,
    name: "Microsoft Azure",
    category: "Cloud Platform",
    level: 4,
    icon: `<svg viewBox="0 0 100 60" fill="currentColor">
      <path d="M25 15l20 35h-15l-5-10h-10l5-10h5l-5-10h5zm25 0l15 25-15 10h20l-15-25 15-10h-20z"/>
    </svg>`,
  },
  {
    id: 3,
    name: "Google Cloud",
    category: "Cloud Platform",
    level: 4,
    icon: `<svg viewBox="0 0 100 60" fill="currentColor">
      <path d="M65 25c0-8.3-6.7-15-15-15s-15 6.7-15 15h-5c-5.5 0-10 4.5-10 10s4.5 10 10 10h35c5.5 0 10-4.5 10-10S70.5 25 65 25z"/>
      <circle cx="35" cy="25" r="3"/>
      <circle cx="50" cy="25" r="3"/>
      <circle cx="65" cy="25" r="3"/>
    </svg>`,
  },
  {
    id: 4,
    name: "Docker",
    category: "Containerization",
    level: 5,
    icon: `<svg viewBox="0 0 100 60" fill="currentColor">
      <rect x="20" y="25" width="8" height="8"/>
      <rect x="30" y="25" width="8" height="8"/>
      <rect x="40" y="25" width="8" height="8"/>
      <rect x="25" y="15" width="8" height="8"/>
      <rect x="35" y="15" width="8" height="8"/>
      <rect x="30" y="5" width="8" height="8"/>
      <path d="M55 30c0-2.8 2.2-5 5-5h15c2.8 0 5 2.2 5 5v10c0 2.8-2.2 5-5 5H60c-2.8 0-5-2.2-5-5V30z"/>
    </svg>`,
  },
  {
    id: 5,
    name: "Kubernetes",
    category: "Container Orchestration",
    level: 4,
    icon: `<svg viewBox="0 0 100 60" fill="currentColor">
      <path d="M50 10l15 10v20l-15 10-15-10V20l15-10zm0 5l-10 7v14l10 7 10-7V22l-10-7z"/>
      <circle cx="50" cy="30" r="8"/>
      <circle cx="50" cy="30" r="3"/>
    </svg>`,
  },
  {
    id: 6,
    name: "Terraform",
    category: "Infrastructure as Code",
    level: 4,
    icon: `<svg viewBox="0 0 100 60" fill="currentColor">
      <path d="M20 15v20l15-10V5L20 15zm20 0v20l15-10V5L40 15zm20 10v20l15-10V15L60 25z"/>
    </svg>`,
  },
  {
    id: 7,
    name: "Jenkins",
    category: "CI/CD Platform",
    level: 3,
    icon: `<svg viewBox="0 0 100 60" fill="currentColor">
      <circle cx="50" cy="30" r="20"/>
      <circle cx="45" cy="25" r="3"/>
      <circle cx="55" cy="25" r="3"/>
      <path d="M40 35c0 5.5 4.5 10 10 10s10-4.5 10-10"/>
    </svg>`,
  },
  {
    id: 8,
    name: "GitLab",
    category: "DevOps Platform",
    level: 4,
    icon: `<svg viewBox="0 0 100 60" fill="currentColor">
      <path d="M50 45L35 20h10l5 15 5-15h10L50 45z"/>
      <path d="M20 20l15 25L50 30 35 20H20zm60 0l-15 25L50 30l15-10h15z"/>
    </svg>`,
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
  () => colorMode.value,
  (newMode) => {
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
  initAnimations();
});

onUnmounted(() => {
  // 清理ScrollTrigger实例
  scrollTriggers.forEach((trigger) => trigger.kill());
  scrollTriggers = [];
});
</script>

<style scoped>
.premium-showcase {
  padding: 150px 0;
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
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
  z-index: 3;
}

/* 高级标题区域 */
.premium-header {
  text-align: center;
  margin-bottom: 100px;
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
  font-size: 4rem;
  font-weight: 900;
  line-height: 0.9;
  margin-bottom: 40px;
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
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 50px;
  margin-bottom: 120px;
  perspective: 1000px;
}

.premium-card {
  position: relative;
  height: 400px;
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
  border-radius: 20px;
  padding: 30px;
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
  margin-bottom: 20px;
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
  margin: 20px 0;
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
  width: 60px;
  height: 60px;
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
  margin-bottom: 20px;
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
  gap: 60px;
  margin-top: 80px;
  padding: 40px;
  background: var(--card-bg);
  backdrop-filter: blur(20px);
  border: 1px solid var(--border-color);
  border-radius: 20px;
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
@media (max-width: 1200px) {
  .premium-logos {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 40px;
  }

  .premium-card {
    height: 350px;
  }

  .premium-title {
    font-size: 3.5rem;
  }
}

@media (max-width: 768px) {
  .premium-showcase {
    padding: 100px 0;
  }

  .premium-logos {
    grid-template-columns: 1fr;
    gap: 30px;
    margin-bottom: 80px;
  }

  .premium-card {
    height: 320px;
  }

  .premium-title {
    font-size: 2.5rem;
  }

  .title-line {
    font-size: 2.5rem;
  }

  .premium-subtitle {
    font-size: 1.1rem;
  }

  .partnership-stats {
    flex-direction: column;
    gap: 30px;
  }

  .stat-divider {
    width: 60px;
    height: 1px;
  }

  .stat-number {
    font-size: 2.5rem;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 0 15px;
  }

  .premium-card {
    height: 280px;
  }

  .card-3d-container {
    padding: 20px;
  }

  .premium-title {
    font-size: 2rem;
  }

  .premium-logo-icon {
    width: 50px;
    height: 50px;
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
