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
        <div class="stat-value">28K+</div>
        <div class="stat-label">{{ $t("hero.stats.contractCreators") }}</div>
      </div>
      <div class="stat-item">
        <div class="stat-value">219.11M+</div>
        <div class="stat-label">{{ $t("hero.stats.uniqueAddresses") }}</div>
      </div>
      <div class="stat-item">
        <div class="stat-value">2.44B+</div>
        <div class="stat-label">{{ $t("hero.stats.transactions") }}</div>
      </div>
      <div class="stat-item">
        <div class="stat-value">~$0.015</div>
        <div class="stat-label">{{ $t("hero.stats.avgCost") }}</div>
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
  justify-content: space-between;
  max-width: 1200px;
  margin: 60px auto 0;
  padding: 30px 20px;
  background-color: var(--card-bg);
  border-radius: 16px;
  box-shadow: var(--card-shadow);
}

.stat-item {
  text-align: center;
  padding: 0 20px;
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
    gap: 20px;
  }

  .stat-item {
    width: calc(50% - 40px);
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
