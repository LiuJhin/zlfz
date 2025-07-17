<template>
  <section class="about-mission">
    <div class="section-bg-shapes">
      <div class="bg-shape shape-1"></div>
      <div class="bg-shape shape-2"></div>
      <div class="bg-shape shape-3"></div>
    </div>

    <div class="about-mission-container">
      <!-- 使命与愿景以及核心价值观部分已删除 -->
    </div>
  </section>
</template>

<script setup>
import { onMounted, onBeforeUnmount } from "vue";
import AnimatedText from "./AnimatedText.vue";
import ScrollAnimations from "./ScrollAnimations.vue";
import { gsap } from "gsap";

// 初始化 SVG 路径动画
onMounted(() => {
  const svgPaths = document.querySelectorAll(".svg-path");
  if (svgPaths.length > 0) {
    gsap.set(svgPaths, { strokeDasharray: 1000, strokeDashoffset: 1000 });

    // 使用 IntersectionObserver 监听 SVG 元素进入视口
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const paths = entry.target.querySelectorAll(".svg-path");
            gsap.to(paths, {
              strokeDashoffset: 0,
              duration: 2,
              stagger: 0.1,
              ease: "power2.out",
            });
            // 一旦动画触发，不再观察该元素
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    // 观察所有包含 SVG 路径的元素
    document.querySelectorAll(".svg-animate").forEach((el) => {
      observer.observe(el);
    });
  }
});
</script>

<style scoped>
.about-mission {
  padding: 100px 0;
  background-color: var(--bg-color);
  position: relative;
  overflow: hidden;
}

.section-bg-shapes {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  pointer-events: none;
}

.bg-shape {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.15;
  mix-blend-mode: screen;
  transform-origin: center;
}

.shape-1 {
  top: -10%;
  left: -5%;
  width: 500px;
  height: 500px;
  background: linear-gradient(
    135deg,
    var(--primary-color-light) 0%,
    var(--primary-color) 100%
  );
  animation: float-shape-1 25s infinite ease-in-out alternate;
}

.shape-2 {
  bottom: -15%;
  right: -10%;
  width: 600px;
  height: 600px;
  background: linear-gradient(
    135deg,
    var(--primary-color) 0%,
    var(--accent-color, #4a00e0) 100%
  );
  animation: float-shape-2 30s infinite ease-in-out alternate-reverse;
}

.shape-3 {
  top: 40%;
  left: 50%;
  width: 300px;
  height: 300px;
  background: linear-gradient(
    135deg,
    var(--accent-color, #4a00e0) 0%,
    var(--primary-color-light) 100%
  );
  animation: float-shape-3 20s infinite ease-in-out alternate;
}

@keyframes float-shape-1 {
  0% {
    transform: translate(0, 0) rotate(0deg) scale(1);
  }
  50% {
    transform: translate(30px, 20px) rotate(5deg) scale(1.05);
  }
  100% {
    transform: translate(50px, 30px) rotate(10deg) scale(1);
  }
}

@keyframes float-shape-2 {
  0% {
    transform: translate(0, 0) rotate(0deg) scale(1);
  }
  50% {
    transform: translate(-40px, -25px) rotate(-8deg) scale(1.08);
  }
  100% {
    transform: translate(-60px, -40px) rotate(-15deg) scale(1);
  }
}

@keyframes float-shape-3 {
  0% {
    transform: translate(0, 0) rotate(0deg) scale(1);
    opacity: 0.15;
  }
  50% {
    transform: translate(-20px, 40px) rotate(10deg) scale(1.1);
    opacity: 0.2;
  }
  100% {
    transform: translate(30px, -30px) rotate(-5deg) scale(0.95);
    opacity: 0.15;
  }
}

.about-mission-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
  z-index: 1;
}

.section-header {
  text-align: center;
  margin-bottom: 80px;
}

.title-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}

.section-title {
  font-size: 2.8rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: var(--text-color);
  position: relative;
  text-shadow: 0 0 20px rgba(130, 71, 229, 0.2);
  letter-spacing: 1px;
}

.section-title::before {
  content: "";
  position: absolute;
  top: -15px;
  left: 50%;
  transform: translateX(-50%);
  width: 40px;
  height: 3px;
  background: linear-gradient(
    90deg,
    transparent,
    var(--primary-color),
    transparent
  );
  border-radius: 3px;
}

.section-divider {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  margin: 0 auto;
  position: relative;
}

.section-divider::before,
.section-divider::after {
  content: "";
  position: absolute;
  top: -10px;
  width: 20px;
  height: 20px;
  border: 2px solid rgba(130, 71, 229, 0.2);
  border-radius: 50%;
  opacity: 0.5;
}

.section-divider::before {
  left: 0;
  animation: pulse-dot 3s infinite ease-in-out;
}

.section-divider::after {
  right: 0;
  animation: pulse-dot 3s infinite ease-in-out 1.5s;
}

@keyframes pulse-dot {
  0% {
    transform: scale(1);
    opacity: 0.5;
  }
  50% {
    transform: scale(1.3);
    opacity: 0.8;
  }
  100% {
    transform: scale(1);
    opacity: 0.5;
  }
}

.divider-line {
  height: 3px;
  flex-grow: 1;
  background: linear-gradient(
    135deg,
    var(--primary-color) 0%,
    var(--primary-color-light) 100%
  );
  border-radius: 3px;
  position: relative;
  overflow: hidden;
}

.divider-line::after {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.6),
    transparent
  );
  animation: shimmer-line 3s infinite;
}

@keyframes shimmer-line {
  0% {
    left: -100%;
  }
  100% {
    left: 100%;
  }
}

.divider-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--primary-color);
  margin: 0 8px;
  box-shadow: 0 0 15px rgba(130, 71, 229, 0.6);
  position: relative;
}

.divider-dot::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 18px;
  height: 18px;
  border: 1px solid var(--primary-color);
  border-radius: 50%;
  animation: pulse-ring 2s infinite;
}

@keyframes pulse-ring {
  0% {
    width: 10px;
    height: 10px;
    opacity: 1;
  }
  100% {
    width: 25px;
    height: 25px;
    opacity: 0;
  }
}

.mission-vision-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 50px;
  margin-bottom: 80px;
}

.mission-card,
.vision-card {
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  transition: transform 0.4s ease, box-shadow 0.4s ease;
  z-index: 1;
}

.card-glow {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    135deg,
    rgba(130, 71, 229, 0.1) 0%,
    rgba(130, 71, 229, 0.05) 100%
  );
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  z-index: -1;
  transition: all 0.4s ease;
}

.card-content {
  padding: 40px;
  background-color: rgba(var(--card-bg-rgb, 255, 255, 255), 0.03);
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  z-index: 2;
}

.mission-card:hover,
.vision-card:hover {
  transform: translateY(-15px) scale(1.02);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.18);
}

.mission-card:hover .card-glow,
.vision-card:hover .card-glow {
  opacity: 0.9;
  box-shadow: 0 0 40px rgba(130, 71, 229, 0.4);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.mission-card:hover .card-icon,
.vision-card:hover .card-icon {
  transform: scale(1.1) rotate(5deg);
  box-shadow: 0 15px 30px rgba(130, 71, 229, 0.4);
}

.card-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90px;
  height: 90px;
  background: linear-gradient(
    135deg,
    var(--primary-color-light) 0%,
    var(--primary-color) 100%
  );
  border-radius: 50%;
  margin-bottom: 30px;
  color: white;
  position: relative;
  overflow: hidden;
  box-shadow: 0 10px 20px rgba(130, 71, 229, 0.3);
  transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.svg-animate {
  position: relative;
  z-index: 2;
}

.svg-animate svg {
  transition: transform 0.5s ease;
}

.card-icon:hover svg {
  transform: scale(1.15);
}

.svg-path {
  stroke-dasharray: 1000;
  stroke-dashoffset: 1000;
  animation: draw-path 3s forwards ease-out;
}

@keyframes draw-path {
  to {
    stroke-dashoffset: 0;
  }
}

.svg-animate::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.5),
    transparent
  );
  transform: translateX(-100%);
  animation: shimmer 3s infinite;
  z-index: 1;
}

.card-icon::before {
  content: "";
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: conic-gradient(
    transparent,
    rgba(255, 255, 255, 0.3),
    transparent
  );
  animation: rotate-gradient 8s linear infinite;
}

@keyframes rotate-gradient {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
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

.card-title {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 20px;
  color: var(--text-color);
  position: relative;
  display: inline-block;
}

.card-title::after {
  content: "";
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 40px;
  height: 3px;
  background: linear-gradient(90deg, var(--primary-color), transparent);
  border-radius: 3px;
  transition: width 0.3s ease;
}

.mission-card:hover .card-title::after,
.vision-card:hover .card-title::after {
  width: 100%;
}

.card-description {
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--text-color-light);
  position: relative;
  z-index: 2;
}

.values-section {
  margin-top: 80px;
  position: relative;
}

.values-divider {
  margin-bottom: 50px;
}

.values-title {
  font-size: 2.2rem;
  font-weight: 700;
  margin-bottom: 20px;
  text-align: center;
  color: var(--text-color);
  position: relative;
  text-shadow: 0 0 20px rgba(130, 71, 229, 0.2);
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
  margin: 0 auto;
  max-width: 1200px;
}

.value-item {
  position: relative;
  border-radius: 16px;
  text-align: center;
  transition: transform 0.4s ease, box-shadow 0.4s ease;
  overflow: hidden;
  z-index: 1;
}

.value-glow {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    135deg,
    rgba(130, 71, 229, 0.08) 0%,
    rgba(130, 71, 229, 0.03) 100%
  );
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  z-index: -1;
  transition: all 0.4s ease;
}

.value-content {
  padding: 30px 20px;
  background-color: rgba(var(--card-bg-rgb, 255, 255, 255), 0.02);
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  z-index: 2;
  position: relative;
}

.value-hover-effect {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 0;
  background: linear-gradient(to top, rgba(130, 71, 229, 0.1), transparent);
  transition: height 0.4s ease;
  z-index: 1;
}

.value-item:hover {
  transform: translateY(-12px) scale(1.03);
  box-shadow: 0 18px 35px rgba(0, 0, 0, 0.12);
}

.value-item:hover .value-glow {
  opacity: 0.9;
  box-shadow: 0 0 25px rgba(130, 71, 229, 0.25);
  border: 1px solid rgba(255, 255, 255, 0.15);
}

.value-item:hover .value-hover-effect {
  height: 100%;
  background: linear-gradient(
    to top,
    rgba(130, 71, 229, 0.15),
    transparent 70%
  );
}

.value-item:hover .value-icon {
  transform: scale(1.1) translateY(-5px);
  box-shadow: 0 12px 25px rgba(130, 71, 229, 0.35);
}

.value-item:hover .value-title {
  transform: translateY(-3px);
  text-shadow: 0 0 15px rgba(130, 71, 229, 0.2);
}

.value-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 70px;
  background: linear-gradient(
    135deg,
    var(--primary-color-light) 0%,
    var(--primary-color) 100%
  );
  border-radius: 50%;
  margin: 0 auto 20px;
  color: white;
  box-shadow: 0 8px 15px rgba(130, 71, 229, 0.25);
  position: relative;
  z-index: 3;
  transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  overflow: hidden;
}

.value-icon::after {
  content: "";
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(
    circle,
    rgba(255, 255, 255, 0.2) 0%,
    transparent 70%
  );
  opacity: 0;
  transition: opacity 0.5s ease;
}

.value-item:hover .value-icon::after {
  opacity: 1;
}

.value-title {
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 15px;
  color: var(--text-color);
  position: relative;
  z-index: 3;
  transition: all 0.4s ease;
}

.value-title::after {
  content: "";
  position: absolute;
  bottom: -5px;
  left: 50%;
  width: 0;
  height: 2px;
  background: linear-gradient(
    90deg,
    transparent,
    var(--primary-color),
    transparent
  );
  transform: translateX(-50%);
  transition: width 0.4s ease;
}

.value-item:hover .value-title::after {
  width: 50%;
}

.value-description {
  font-size: 1rem;
  line-height: 1.6;
  color: var(--text-color-light);
  position: relative;
  z-index: 3;
}

@media (max-width: 1200px) {
  .values-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 40px;
  }
}

@media (max-width: 992px) {
  .values-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
  }

  .section-title {
    font-size: 2.4rem;
  }

  .card-title {
    font-size: 1.8rem;
  }

  .bg-shape {
    opacity: 0.1;
    filter: blur(100px);
  }
}

@media (max-width: 768px) {
  .mission-vision-grid {
    grid-template-columns: 1fr;
  }

  .section-title {
    font-size: 2.2rem;
  }

  .card-title {
    font-size: 1.6rem;
  }

  .values-title {
    font-size: 1.8rem;
  }

  .about-mission {
    padding: 70px 0;
  }

  .section-header {
    margin-bottom: 60px;
  }
}

@media (max-width: 768px) {
  .values-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
  
  .value-content {
    padding: 25px 15px;
  }
  
  .value-icon {
    width: 60px;
    height: 60px;
    margin-bottom: 15px;
  }
  
  .value-title {
    font-size: 1.2rem;
    margin-bottom: 10px;
  }
  
  .value-description {
    font-size: 0.9rem;
  }
}

@media (max-width: 576px) {
  .values-grid {
    grid-template-columns: 1fr;
    gap: 25px;
  }

  .card-content {
    padding: 30px;
  }

  .card-icon {
    width: 70px;
    height: 70px;
  }

  .section-title {
    font-size: 2rem;
  }

  .about-mission {
    padding: 50px 0;
  }

  .bg-shape {
    opacity: 0.08;
  }
}
</style>
