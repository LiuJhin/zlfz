<template>
  <section class="hero-section">
    <div class="hero-container">
      <div class="hero-content">
        <h1 class="hero-title">ZHILING ARK, Cloud computing technology.</h1>
        <p class="hero-description">
          Enabling an infinitely scalable web of sovereign blockchains that
          feels like a single chain. Powered by ZK tech.
        </p>
        <div class="hero-buttons">
          <a href="#" class="hero-button primary">Get Started</a>
          <a href="#" class="hero-button secondary">Learn More</a>
        </div>
      </div>
      <div class="hero-visual">
        <div class="hero-graphic">
          <!-- 多边形图形动画 -->
          <svg
            width="500"
            height="500"
            viewBox="0 0 500 500"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="polygon-graphic"
          >
            <path
              class="polygon-path"
              d="M250 50L50 200L250 350L450 200L250 50Z"
              fill="url(#polygon-gradient)"
            />
            <path
              class="polygon-path"
              d="M250 350L50 200V350L250 500L450 350V200L250 350Z"
              fill="url(#polygon-gradient)"
              opacity="0.7"
            />
            <defs>
              <linearGradient
                id="polygon-gradient"
                x1="50"
                y1="50"
                x2="450"
                y2="500"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0%" stop-color="#8247E5" />
                <stop offset="100%" stop-color="#6B38C1" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
    <div class="hero-stats">
      <div class="stat-item">
        <div class="stat-value">28K+</div>
        <div class="stat-label">Total Contract Creators</div>
      </div>
      <div class="stat-item">
        <div class="stat-value">219.11M+</div>
        <div class="stat-label">Unique Addresses</div>
      </div>
      <div class="stat-item">
        <div class="stat-value">2.44B+</div>
        <div class="stat-label">Transactions</div>
      </div>
      <div class="stat-item">
        <div class="stat-value">~$0.015</div>
        <div class="stat-label">Avg. Cost per txn</div>
      </div>
    </div>
  </section>
</template>

<script setup>
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

.polygon-graphic {
  animation: float 6s ease-in-out infinite;
}

.polygon-path {
  filter: drop-shadow(0 0 20px rgba(130, 71, 229, 0.4));
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
