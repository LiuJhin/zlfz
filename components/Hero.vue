<template>
  <section class="hero-section">
    <div class="hero-container">
      <div class="hero-content">
        <h1 class="hero-title">{{ $t("hero.title") }}</h1>
        <p class="hero-description">
          {{ $t("hero.description") }}
        </p>
        <div class="hero-buttons">
          <a href="#" class="hero-button primary">{{
            $t("hero.getStarted")
          }}</a>
          <a href="#" class="hero-button secondary">{{
            $t("hero.learnMore")
          }}</a>
        </div>
      </div>
      <div class="hero-visual">
        <div class="hero-graphic">
          <!-- Three.js 立方体动画 -->
          <HeroCube />
        </div>
      </div>
    </div>
    <div class="hero-stats">
      <div class="stat-item">
        <div class="stat-value">30%</div>
        <div class="stat-label">{{ $t("costSaving") }}</div>
      </div>
      <div class="stat-item">
        <div class="stat-value">{{ $t("free") }}</div>
        <div class="stat-label">{{ $t("pocTesting") }}</div>
      </div>
      <div class="stat-item">
        <div class="stat-value">7x24</div>
        <div class="stat-label">{{ $t("technicalSupport") }}</div>
      </div>
      <div class="stat-item">
        <div class="stat-value">{{ $t("exclusive") }}</div>
        <div class="stat-label">{{ $t("preferentialPolicy") }}</div>
      </div>
      <div class="stat-item">
        <div class="stat-value">3{{ $t("day") }}</div>
        <div class="stat-label">{{ $t("fastResponse") }}</div>
      </div>
    </div>
  </section>
</template>

<script setup>
import HeroCube from "./HeroCube.vue";
// Hero组件逻辑
</script>

<style scoped>
.hero-section {
  position: relative;
  padding: 80px 0 40px;
  overflow: hidden;
  background: linear-gradient(
    135deg,
    var(--bg-color) 0%,
    var(--bg-gradient) 100%
  );
}

.hero-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.hero-content {
  max-width: 600px;
  z-index: 2;
}

.hero-title {
  font-size: 4rem;
  font-weight: 800;
  margin-bottom: 20px;
  background: linear-gradient(
    90deg,
    var(--primary-color) 0%,
    var(--primary-color-light) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 1.1;
}

.hero-description {
  font-size: 1.25rem;
  line-height: 1.6;
  margin-bottom: 30px;
  color: var(--text-color);
  opacity: 0.9;
}

.hero-buttons {
  display: flex;
  gap: 16px;
}

.hero-button {
  padding: 12px 24px;
  border-radius: 30px;
  font-weight: 600;
  font-size: 1rem;
  text-decoration: none;
  transition: all 0.3s ease;
}

.hero-button.primary {
  background-color: var(--primary-color);
  color: white;
  border: 2px solid var(--primary-color);
}

.hero-button.primary:hover {
  background-color: var(--primary-color-dark);
  border-color: var(--primary-color-dark);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(130, 71, 229, 0.3);
}

.hero-button.secondary {
  background-color: transparent;
  color: var(--primary-color);
  border: 2px solid var(--primary-color);
}

.hero-button.secondary:hover {
  background-color: rgba(130, 71, 229, 0.1);
  transform: translateY(-2px);
}

.hero-visual {
  position: relative;
  z-index: 1;
}

.hero-graphic {
  position: relative;
  width: 500px;
  height: 500px;
}

/* Three.js容器样式 */
.hero-graphic {
  position: relative;
  width: 500px;
  height: 500px;
  animation: float 6s ease-in-out infinite;
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}

.hero-stats {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 60px auto 0;
  padding: 30px 20px;
  background-color: var(--card-bg);
  border-radius: 16px;
  box-shadow: var(--card-shadow);
  gap: 10px;
}

.stat-item {
  text-align: center;
  padding: 10px 15px;
  min-width: 100px;
  transition: all 0.3s ease;
}

.stat-item:hover {
  transform: translateY(-5px);
  background-color: rgba(130, 71, 229, 0.1);
  border-radius: 8px;
}

.stat-value {
  font-size: 2rem;
  font-weight: 700;
  color: var(--primary-color);
  margin-bottom: 8px;
}

.stat-label {
  font-size: 0.9rem;
  color: var(--text-color);
  opacity: 0.8;
}

/* 响应式设计 */
@media (max-width: 1024px) {
  .hero-container {
    flex-direction: column;
    text-align: center;
  }

  .hero-stats {
    padding: 20px 10px;
  }

  .stat-item {
    padding: 8px 10px;
    min-width: 80px;
  }

  .hero-content {
    margin-bottom: 40px;
  }

  .hero-buttons {
    justify-content: center;
  }

  .hero-graphic {
    width: 400px;
    height: 400px;
  }

  .hero-title {
    font-size: 3rem;
  }
}

@media (max-width: 768px) {
  .hero-stats {
    flex-wrap: wrap;
    gap: 15px;
    padding: 15px 10px;
  }

  .stat-item {
    width: calc(33% - 15px);
    padding: 8px 5px;
    min-width: 0;
  }

  .stat-value {
    font-size: 1.5rem;
  }

  .stat-label {
    font-size: 0.8rem;
  }

  .hero-graphic {
    width: 300px;
    height: 300px;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 2.5rem;
  }

  .hero-description {
    font-size: 1rem;
  }

  .hero-buttons {
    flex-direction: column;
  }

  .hero-stats {
    padding: 12px 8px;
    gap: 8px;
  }

  .stat-item {
    width: calc(50% - 10px);
    padding: 6px 4px;
  }

  .stat-value {
    font-size: 1.3rem;
    margin-bottom: 4px;
  }

  .stat-label {
    font-size: 0.75rem;
  }

  .hero-graphic {
    width: 250px;
    height: 250px;
  }

  .stat-item {
    width: 100%;
    margin-bottom: 20px;
  }
}
</style>
