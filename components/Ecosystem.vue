<template>
  <section class="ecosystem-section">
    <div class="ecosystem-container">
      <div class="section-header">
        <h2 class="section-title">The largest and most thriving ecosystem</h2>
      </div>
      
      <div class="ecosystem-stats">
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
          <div class="stat-value">12.80B+</div>
          <div class="stat-label">NFT Sales Volume</div>
        </div>
        <div class="stat-item">
          <div class="stat-value">~$0.015</div>
          <div class="stat-label">Avg. Cost per txn</div>
        </div>
        <div class="stat-item">
          <div class="stat-value">1.17M+</div>
          <div class="stat-label">Deployed Smart Contracts</div>
        </div>
      </div>
      
      <div class="partners-section">
        <h3 class="partners-title">Industry Giants We Are Trusted By</h3>
        <div class="partners-grid">
          <div class="partner-logo" v-for="i in 15" :key="i">
            <div class="logo-placeholder">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="currentColor" opacity="0.5" />
                <path d="M12 12L2 7L2 17L12 22L22 17L22 7L12 12Z" fill="currentColor" opacity="0.3" />
              </svg>
              <span>Partner {{ i }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Ecosystem组件逻辑
</script>

<style scoped>
.ecosystem-section {
  padding: 80px 0;
  background-color: var(--bg-color);
}

.ecosystem-container {
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

.ecosystem-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 30px;
  margin-bottom: 80px;
}

.stat-item {
  text-align: center;
  padding: 20px;
  background-color: var(--card-bg);
  border-radius: 16px;
  border: 1px solid var(--border-color);
  transition: all 0.3s ease;
}

.stat-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  border-color: var(--primary-color);
}

.stat-value {
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--primary-color);
  margin-bottom: 8px;
}

.stat-label {
  font-size: 0.9rem;
  color: var(--text-color);
  opacity: 0.8;
}

.partners-section {
  margin-top: 80px;
}

.partners-title {
  font-size: 1.8rem;
  font-weight: 600;
  text-align: center;
  margin-bottom: 40px;
  color: var(--text-color);
}

.partners-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 30px;
}

.partner-logo {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  background-color: var(--card-bg);
  border-radius: 12px;
  border: 1px solid var(--border-color);
  transition: all 0.3s ease;
}

.partner-logo:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  border-color: var(--primary-color);
}

.logo-placeholder {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--text-color);
  opacity: 0.6;
}

.logo-placeholder svg {
  margin-bottom: 8px;
  color: var(--primary-color);
}

/* 响应式设计 */
@media (max-width: 768px) {
  .section-title {
    font-size: 2rem;
  }
  
  .ecosystem-stats {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .partners-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .ecosystem-stats {
    grid-template-columns: 1fr;
  }
}
</style>