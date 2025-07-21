<template>
  <section class="features-section">
    <div class="features-container">
      <div class="section-header">
        <h2 class="section-title">{{ $t("features.title") }}</h2>
      </div>

      <div class="features-grid">
        <div class="feature-card active">
          <div class="feature-icon">
            <svg
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="currentColor" />
              <path
                d="M12 12L2 7L2 17L12 22L22 17L22 7L12 12Z"
                fill="currentColor"
                opacity="0.5"
              />
            </svg>
          </div>
          <h3 class="feature-title">
            {{ $t("features.items.polygonPos.title") }}
          </h3>
          <p class="feature-description">
            {{ $t("features.items.polygonPos.description") }}
          </p>
          <a href="#" class="feature-link">{{ $t("features.learnMore") }}</a>
        </div>

        <div class="feature-card">
          <div class="feature-icon">
            <svg
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="currentColor" />
              <path
                d="M12 12L2 7L2 17L12 22L22 17L22 7L12 12Z"
                fill="currentColor"
                opacity="0.5"
              />
            </svg>
          </div>
          <h3 class="feature-title">
            {{ $t("features.items.polygonZkEvm.title") }}
          </h3>
          <p class="feature-description">
            {{ $t("features.items.polygonZkEvm.description") }}
          </p>
          <a href="#" class="feature-link">{{ $t("features.learnMore") }}</a>
        </div>

        <div class="feature-card">
          <div class="feature-icon">
            <svg
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="currentColor" />
              <path
                d="M12 12L2 7L2 17L12 22L22 17L22 7L12 12Z"
                fill="currentColor"
                opacity="0.5"
              />
            </svg>
          </div>
          <h3 class="feature-title">{{ $t("features.items.miden.title") }}</h3>
          <p class="feature-description">
            {{ $t("features.items.miden.description") }}
          </p>
          <a href="#" class="feature-link">{{ $t("features.learnMore") }}</a>
        </div>

        <div class="feature-card">
          <div class="feature-icon">
            <svg
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="currentColor" />
              <path
                d="M12 12L2 7L2 17L12 22L22 17L22 7L12 12Z"
                fill="currentColor"
                opacity="0.5"
              />
            </svg>
          </div>
          <h3 class="feature-title">
            {{ $t("features.items.agglayerCdk.title") }}
          </h3>
          <p class="feature-description">
            {{ $t("features.items.agglayerCdk.description") }}
          </p>
          <a href="#" class="feature-link">{{ $t("features.learnMore") }}</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Features组件逻辑
</script>

<style scoped>
.features-section {
  padding: 80px 0;
  background-color: var(--bg-color);
}

.features-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.section-header {
  text-align: center;
  margin-bottom: 60px;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--text-color);
  margin-bottom: 16px;
  line-height: 1.2;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
}

.feature-card {
  background-color: var(--card-bg);
  border-radius: 16px;
  padding: 30px;
  transition: all 0.3s ease;
  border: 1px solid var(--border-color);
  height: 100%;
  display: flex;
  flex-direction: column;
}

.feature-card:hover,
.feature-card.active {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  border-color: var(--primary-color);
}

.feature-icon {
  margin-bottom: 20px;
  color: var(--primary-color);
}

.feature-title {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 16px;
  color: var(--text-color);
}

.feature-description {
  font-size: 1rem;
  line-height: 1.6;
  color: var(--text-color);
  opacity: 0.8;
  margin-bottom: 20px;
  flex-grow: 1;
}

.feature-link {
  color: var(--primary-color);
  text-decoration: none;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  margin-top: auto;
  transition: color 0.2s ease;
}

.feature-link:hover {
  color: var(--primary-color-dark);
  text-decoration: underline;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .section-title {
    font-size: 2rem;
  }

  .features-grid {
    grid-template-columns: 1fr;
  }
}
</style>
