<template>
  <div class="data-security-page">
    <!-- Hero Section with Parallax Effect -->
    <section class="hero-section">
      <div class="parallax-container">
        <div class="parallax-layer layer-1">
          <div class="security-grid">
            <div class="grid-item" v-for="i in 20" :key="i"></div>
          </div>
        </div>
        <div class="parallax-layer layer-2">
          <div class="floating-shields">
            <div class="shield shield-1">
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
                <path d="M12 1L21.5 6.5V17.5L12 23L2.5 17.5V6.5L12 1Z" stroke="currentColor" stroke-width="2"/>
                <path d="M9 12L11 14L15 10" stroke="currentColor" stroke-width="2"/>
              </svg>
            </div>
            <div class="shield shield-2">
              <svg width="25" height="25" viewBox="0 0 24 24" fill="none">
                <path d="M12 1L21.5 6.5V17.5L12 23L2.5 17.5V6.5L12 1Z" stroke="currentColor" stroke-width="2"/>
                <path d="M9 12L11 14L15 10" stroke="currentColor" stroke-width="2"/>
              </svg>
            </div>
            <div class="shield shield-3">
              <svg width="35" height="35" viewBox="0 0 24 24" fill="none">
                <path d="M12 1L21.5 6.5V17.5L12 23L2.5 17.5V6.5L12 1Z" stroke="currentColor" stroke-width="2"/>
                <path d="M9 12L11 14L15 10" stroke="currentColor" stroke-width="2"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
      
      <div class="hero-content">
        <div class="container">
          <div class="content-wrapper">
            <div class="hero-text">
              <div class="hero-badge">
                <span class="badge-icon">🛡️</span>
                <span class="badge-text">数据安全与隐私保护</span>
              </div>
              
              <h1 class="hero-title">
                构建
                <span class="highlight-text">零信任</span>
                数据安全防护体系
              </h1>
              
              <p class="hero-description">
                基于零信任架构、端到端加密、隐私计算等技术，
                为企业数据提供全生命周期的安全保护，
                确保数据在存储、传输、使用过程中的安全性和隐私性。
              </p>
              
              <div class="security-stats">
                <div class="stat-item">
                  <div class="stat-number">99.99%</div>
                  <div class="stat-label">数据安全率</div>
                </div>
                <div class="stat-item">
                  <div class="stat-number">256位</div>
                  <div class="stat-label">AES加密</div>
                </div>
                <div class="stat-item">
                  <div class="stat-number">24/7</div>
                  <div class="stat-label">安全监控</div>
                </div>
                <div class="stat-item">
                  <div class="stat-number">0</div>
                  <div class="stat-label">数据泄露</div>
                </div>
              </div>
              
              <div class="hero-actions">
                <a href="/contact" class="btn-primary">
                  <span>安全评估</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M12 1L21.5 6.5V17.5L12 23L2.5 17.5V6.5L12 1Z" stroke="currentColor" stroke-width="2"/>
                  </svg>
                </a>
                <a href="#solutions" class="btn-outline">
                  <span>解决方案</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M12 5V19M5 12L12 19L19 12" stroke="currentColor" stroke-width="2"/>
                  </svg>
                </a>
              </div>
            </div>
            
            <div class="hero-visual">
              <div class="security-dashboard">
                <div class="dashboard-header">
                  <div class="header-title">
                    <span class="title-icon">🔒</span>
                    <span>安全控制中心</span>
                  </div>
                  <div class="status-indicator">
                    <span class="status-dot active"></span>
                    <span class="status-text">系统安全</span>
                  </div>
                </div>
                
                <div class="dashboard-content">
                  <div class="security-metrics">
                    <div class="metric-card">
                      <div class="metric-icon">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                          <path d="M12 1L21.5 6.5V17.5L12 23L2.5 17.5V6.5L12 1Z" stroke="currentColor" stroke-width="2"/>
                        </svg>
                      </div>
                      <div class="metric-info">
                        <div class="metric-value">100%</div>
                        <div class="metric-name">数据加密</div>
                      </div>
                    </div>
                    
                    <div class="metric-card">
                      <div class="metric-icon">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                          <path d="M2.458 12C3.732 7.943 7.523 5 12 5C16.478 5 20.268 7.943 21.542 12C20.268 16.057 16.478 19 12 19C7.523 19 3.732 16.057 2.458 12Z" stroke="currentColor" stroke-width="2"/>
                        </svg>
                      </div>
                      <div class="metric-info">
                        <div class="metric-value">0</div>
                        <div class="metric-name">威胁检测</div>
                      </div>
                    </div>
                    
                    <div class="metric-card">
                      <div class="metric-icon">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                          <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" stroke-width="2"/>
                        </svg>
                      </div>
                      <div class="metric-info">
                        <div class="metric-value">99.9%</div>
                        <div class="metric-name">合规性</div>
                      </div>
                    </div>
                  </div>
                  
                  <div class="security-chart">
                    <div class="chart-header">
                      <span>实时安全监控</span>
                    </div>
                    <div class="chart-visual">
                      <div class="chart-bars">
                        <div class="bar" style="height: 60%"></div>
                        <div class="bar" style="height: 80%"></div>
                        <div class="bar" style="height: 45%"></div>
                        <div class="bar" style="height: 90%"></div>
                        <div class="bar" style="height: 70%"></div>
                        <div class="bar" style="height: 85%"></div>
                        <div class="bar" style="height: 55%"></div>
                      </div>
                    </div>
                  </div>
                  
                  <div class="threat-alerts">
                    <div class="alert-header">
                      <span>威胁警报</span>
                      <span class="alert-count">0</span>
                    </div>
                    <div class="alert-list">
                      <div class="alert-item safe">
                        <span class="alert-icon">✅</span>
                        <span class="alert-text">系统运行正常</span>
                        <span class="alert-time">实时</span>
                      </div>
                      <div class="alert-item safe">
                        <span class="alert-icon">🔒</span>
                        <span class="alert-text">数据加密完成</span>
                        <span class="alert-time">2分钟前</span>
                      </div>
                      <div class="alert-item safe">
                        <span class="alert-icon">🛡️</span>
                        <span class="alert-text">防火墙已更新</span>
                        <span class="alert-time">5分钟前</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="container">
        <div class="cta-wrapper">
          <div class="cta-content">
            <div class="cta-icon">
              <svg width="60" height="60" viewBox="0 0 24 24" fill="none">
                <path d="M12 1L21.5 6.5V17.5L12 23L2.5 17.5V6.5L12 1Z" stroke="currentColor" stroke-width="2"/>
                <path d="M9 12L11 14L15 10" stroke="currentColor" stroke-width="2"/>
              </svg>
            </div>
            <h2>构建您的数据安全防护体系</h2>
            <p>
              让我们帮助您建立全面的数据安全与隐私保护解决方案，
              在数字化时代保护您最宝贵的数据资产。
            </p>
            <div class="cta-actions">
              <a href="/contact" class="btn-primary">
                <span>免费安全评估</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" stroke-width="2"/>
                </svg>
              </a>
              <a href="#demo" class="btn-secondary">
                <span>产品演示</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <polygon points="5,3 19,12 5,21" fill="currentColor"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div class="cta-features">
            <div class="feature-grid">
              <div class="feature-item">
                <span class="feature-icon">🔒</span>
                <span class="feature-text">端到端加密</span>
              </div>
              <div class="feature-item">
                <span class="feature-icon">🛡️</span>
                <span class="feature-text">零信任架构</span>
              </div>
              <div class="feature-item">
                <span class="feature-icon">🔍</span>
                <span class="feature-text">隐私计算</span>
              </div>
              <div class="feature-item">
                <span class="feature-icon">📋</span>
                <span class="feature-text">合规认证</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// 页面元数据
definePageMeta({
  layout: 'default',
  title: '数据安全与隐私保护解决方案 - ZHILING ARK TECHNOLOGY',
  description: 'ZHILING ARK TECHNOLOGY提供全面的数据安全与隐私保护解决方案，基于零信任架构、隐私计算等技术保护企业数据安全'
})

// SEO 头部信息
useHead({
  title: '数据安全与隐私保护解决方案 - ZHILING ARK TECHNOLOGY',
  meta: [
    { name: 'description', content: '专业的数据安全与隐私保护解决方案，涵盖零信任架构、端到端加密、隐私计算、合规认证等技术，为企业数据提供全方位保护' },
    { name: 'keywords', content: '数据安全,隐私保护,零信任架构,端到端加密,隐私计算,同态加密,联邦学习,GDPR合规' }
  ]
})
</script>

<style scoped>
.data-security-page {
  min-height: 100vh;
}

/* Hero Section */
.hero-section {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  overflow: hidden;
  background: linear-gradient(135deg, var(--bg-color) 0%, var(--bg-secondary) 100%);
}

.parallax-container {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
}

.parallax-layer {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.layer-1 {
  z-index: 1;
}

.layer-2 {
  z-index: 2;
}

.security-grid {
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(8, 1fr);
  gap: 2px;
  width: 100%;
  height: 100%;
  opacity: 0.1;
}

.grid-item {
  background: linear-gradient(45deg, rgba(99, 102, 241, 0.3), rgba(139, 92, 246, 0.3));
  animation: gridPulse 4s ease-in-out infinite;
}

.grid-item:nth-child(odd) {
  animation-delay: 0.5s;
}

.grid-item:nth-child(3n) {
  animation-delay: 1s;
}

@keyframes gridPulse {
  0%, 100% { opacity: 0.1; }
  50% { opacity: 0.3; }
}

.floating-shields {
  position: relative;
  width: 100%;
  height: 100%;
}

.shield {
  position: absolute;
  color: rgba(99, 102, 241, 0.6);
  animation: floatShield 8s ease-in-out infinite;
}

.shield-1 {
  top: 20%;
  left: 15%;
  animation-delay: 0s;
}

.shield-2 {
  top: 60%;
  right: 20%;
  animation-delay: 2s;
}

.shield-3 {
  bottom: 30%;
  left: 10%;
  animation-delay: 4s;
}

@keyframes floatShield {
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
    opacity: 0.4;
  }
  33% {
    transform: translateY(-20px) rotate(120deg);
    opacity: 0.8;
  }
  66% {
    transform: translateY(10px) rotate(240deg);
    opacity: 0.6;
  }
}

.hero-content {
  position: relative;
  z-index: 3;
  width: 100%;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.content-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: var(--primary-color-light);
  color: var(--primary-color);
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
  margin-bottom: 20px;
}

.badge-icon {
  font-size: 1.2rem;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 1.5rem;
  line-height: 1.2;
}

.highlight-text {
  background: linear-gradient(135deg, #dc2626, #ef4444, #f97316);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-description {
  font-size: 1.2rem;
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 2rem;
}

.security-stats {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-bottom: 2rem;
}

.stat-item {
  text-align: center;
  padding: 15px;
  background: var(--card-bg);
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.stat-number {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--primary-color);
  margin-bottom: 5px;
}

.stat-label {
  font-size: 0.8rem;
  color: var(--text-secondary);
  font-weight: 500;
}

.hero-actions {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.btn-primary, .btn-outline, .btn-secondary {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
}

.btn-primary {
  background: linear-gradient(135deg, #dc2626, #ef4444);
  color: white;
  box-shadow: 0 4px 20px rgba(220, 38, 38, 0.3);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 30px rgba(220, 38, 38, 0.4);
}

.btn-outline {
  background: transparent;
  color: var(--text-secondary);
  border: 1px solid var(--border-color);
}

.btn-outline:hover {
  background: var(--card-bg);
  color: var(--text-primary);
}

.btn-secondary {
  background: var(--bg-secondary);
  color: var(--text-primary);
  border: 1px solid var(--border-color);
}

.btn-secondary:hover {
  background: var(--card-bg);
  transform: translateY(-2px);
}

/* Security Dashboard */
.hero-visual {
  display: flex;
  justify-content: center;
  align-items: center;
}

.security-dashboard {
  width: 100%;
  max-width: 500px;
  background: var(--card-bg);
  border-radius: 20px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  border: 1px solid var(--border-color);
}

.dashboard-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 25px;
  background: linear-gradient(135deg, var(--primary-color), var(--primary-color-dark));
  color: white;
}

.header-title {
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 600;
}

.title-icon {
  font-size: 1.2rem;
}

.status-indicator {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 0.9rem;
}

.status-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #10b981;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

.dashboard-content {
  padding: 25px;
}

.security-metrics {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
  margin-bottom: 25px;
}

.metric-card {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 15px;
  background: var(--bg-secondary);
  border-radius: 12px;
  border: 1px solid var(--border-color);
}

.metric-icon {
  width: 40px;
  height: 40px;
  background: var(--primary-color-light);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary-color);
}

.metric-info {
  flex: 1;
}

.metric-value {
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 2px;
}

.metric-name {
  font-size: 0.8rem;
  color: var(--text-secondary);
}

.security-chart {
  margin-bottom: 25px;
}

.chart-header {
  font-size: 0.9rem;
  color: var(--text-secondary);
  margin-bottom: 15px;
  font-weight: 500;
}

.chart-visual {
  height: 80px;
  background: var(--bg-secondary);
  border-radius: 8px;
  padding: 15px;
  display: flex;
  align-items: end;
}

.chart-bars {
  display: flex;
  align-items: end;
  gap: 8px;
  width: 100%;
  height: 100%;
}

.bar {
  flex: 1;
  background: linear-gradient(to top, var(--primary-color), var(--primary-color-light));
  border-radius: 2px;
  min-height: 20%;
  animation: barGrow 2s ease-out;
}

@keyframes barGrow {
  from { height: 0; }
  to { height: var(--bar-height, 50%); }
}

.threat-alerts {
  background: var(--bg-secondary);
  border-radius: 12px;
  padding: 15px;
}

.alert-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  font-size: 0.9rem;
  color: var(--text-secondary);
  font-weight: 500;
}

.alert-count {
  background: #10b981;
  color: white;
  padding: 2px 8px;
  border-radius: 10px;
  font-size: 0.8rem;
}

.alert-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.alert-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 12px;
  background: var(--card-bg);
  border-radius: 8px;
  font-size: 0.8rem;
}

.alert-item.safe {
  border-left: 3px solid #10b981;
}

.alert-icon {
  font-size: 1rem;
}

.alert-text {
  flex: 1;
  color: var(--text-primary);
}

.alert-time {
  color: var(--text-secondary);
  font-size: 0.7rem;
}

/* CTA Section */
.cta-section {
  padding: 100px 0;
  background: linear-gradient(135deg, var(--primary-color), var(--primary-color-dark));
  color: white;
}

.cta-wrapper {
  display: grid;
  grid-template-columns: 1fr 400px;
  gap: 60px;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}

.cta-content {
  text-align: left;
}

.cta-icon {
  width: 80px;
  height: 80px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
  color: white;
}

.cta-content h2 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 20px;
  line-height: 1.2;
}

.cta-content p {
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 30px;
  opacity: 0.9;
}

.cta-actions {
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
}

.cta-actions .btn-primary {
  background: white;
  color: var(--primary-color);
}

.cta-actions .btn-primary:hover {
  background: rgba(255, 255, 255, 0.9);
}

.cta-actions .btn-secondary {
  background: rgba(255, 255, 255, 0.1);
  color: white;
  border-color: rgba(255, 255, 255, 0.3);
}

.cta-actions .btn-secondary:hover {
  background: rgba(255, 255, 255, 0.2);
}

.cta-features {
  display: flex;
  justify-content: center;
  align-items: center;
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  width: 100%;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 15px 20px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  backdrop-filter: blur(10px);
}

.feature-icon {
  font-size: 1.2rem;
}

.feature-text {
  font-weight: 500;
  font-size: 0.9rem;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .content-wrapper {
    grid-template-columns: 1fr;
    gap: 40px;
    text-align: center;
  }
  
  .hero-title {
    font-size: 2.8rem;
  }
  
  .cta-wrapper {
    grid-template-columns: 1fr;
    gap: 40px;
    text-align: center;
  }
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2.2rem;
  }
  
  .security-stats {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .feature-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 1.8rem;
  }
  
  .security-stats {
    grid-template-columns: 1fr;
  }
  
  .hero-actions {
    flex-direction: column;
  }
  
  .cta-actions {
    flex-direction: column;
  }
}
</style>