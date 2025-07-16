<template>
  <section class="projects-section">
    <div class="projects-container">
      <div class="section-header">
        <h2 class="section-title">
          Projects built <span class="highlight">#onPolygon</span>
        </h2>
      </div>

      <div class="projects-showcase">
        <div class="project-card">
          <div class="project-number">01</div>
          <div class="project-content">
            <h3 class="project-title">Unstoppable Domains</h3>
            <p class="project-description">
              Own your identity in the digital world with your own Web3 domain
            </p>
            <a href="#" class="project-link">Learn More</a>
          </div>
          <div class="project-image">
            <div class="image-placeholder">
              <svg
                width="80"
                height="80"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2L2 7L12 12L22 7L12 2Z"
                  fill="var(--primary-color)"
                />
                <path
                  d="M12 12L2 7L2 17L12 22L22 17L22 7L12 12Z"
                  fill="var(--primary-color)"
                  opacity="0.5"
                />
              </svg>
            </div>
          </div>
        </div>

        <div class="project-card">
          <div class="project-number">02</div>
          <div class="project-content">
            <h3 class="project-title">Aave</h3>
            <p class="project-description">
              Open source and non-custodial liquidity protocol for earning
              interest and borrowing assets
            </p>
            <a href="#" class="project-link">Learn More</a>
          </div>
          <div class="project-image">
            <div class="image-placeholder">
              <svg
                width="80"
                height="80"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2L2 7L12 12L22 7L12 2Z"
                  fill="var(--primary-color)"
                />
                <path
                  d="M12 12L2 7L2 17L12 22L22 17L22 7L12 12Z"
                  fill="var(--primary-color)"
                  opacity="0.5"
                />
              </svg>
            </div>
          </div>
        </div>

        <div class="project-card">
          <div class="project-number">03</div>
          <div class="project-content">
            <h3 class="project-title">Uniswap</h3>
            <p class="project-description">
              A decentralized protocol for automated liquidity provision on
              Ethereum
            </p>
            <a href="#" class="project-link">Learn More</a>
          </div>
          <div class="project-image">
            <div class="image-placeholder">
              <svg
                width="80"
                height="80"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2L2 7L12 12L22 7L12 2Z"
                  fill="var(--primary-color)"
                />
                <path
                  d="M12 12L2 7L2 17L12 22L22 17L22 7L12 12Z"
                  fill="var(--primary-color)"
                  opacity="0.5"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div class="projects-pagination">
        <button class="pagination-dot active"></button>
        <button class="pagination-dot"></button>
        <button class="pagination-dot"></button>
        <button class="pagination-dot"></button>
      </div>
    </div>
  </section>
</template>

<script setup>
// Projects组件逻辑
</script>

<style scoped>
.projects-section {
  padding: 80px 0;
  background-color: var(--bg-color);
}

.projects-container {
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

.highlight {
  color: var(--primary-color);
}

.projects-showcase {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.project-card {
  display: grid;
  grid-template-columns: 60px 1fr 300px;
  gap: 30px;
  background-color: var(--card-bg);
  border-radius: 16px;
  padding: 40px;
  transition: all 0.3s ease;
  border: 1px solid var(--border-color);
  align-items: center;
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  border-color: var(--primary-color);
}

.project-number {
  font-size: 2rem;
  font-weight: 800;
  color: var(--primary-color);
  opacity: 0.7;
}

.project-title {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 16px;
  color: var(--text-color);
}

.project-description {
  font-size: 1rem;
  line-height: 1.6;
  color: var(--text-color);
  opacity: 0.8;
  margin-bottom: 20px;
}

.project-link {
  color: var(--primary-color);
  text-decoration: none;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  transition: color 0.2s ease;
}

.project-link:hover {
  color: var(--primary-color-dark);
  text-decoration: underline;
}

.project-image {
  display: flex;
  justify-content: center;
  align-items: center;
}

.image-placeholder {
  width: 200px;
  height: 200px;
  background-color: rgba(130, 71, 229, 0.1);
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.projects-pagination {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 40px;
}

.pagination-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: var(--border-color);
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
}

.pagination-dot.active {
  background-color: var(--primary-color);
  transform: scale(1.2);
}

/* 响应式设计 */
@media (max-width: 1024px) {
  .project-card {
    grid-template-columns: 40px 1fr 200px;
    padding: 30px;
  }

  .image-placeholder {
    width: 150px;
    height: 150px;
  }
}

@media (max-width: 768px) {
  .section-title {
    font-size: 2rem;
  }

  .project-card {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto;
    gap: 20px;
  }

  .project-number {
    font-size: 1.5rem;
  }

  .image-placeholder {
    width: 100%;
    height: 200px;
  }
}
</style>
