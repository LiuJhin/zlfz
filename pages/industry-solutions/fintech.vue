<template>
  <div class="fintech-solution-page">
    <!-- Hero Section with Animated Background -->
    <section class="hero-section">
      <div class="hero-background">
        <div class="floating-elements">
          <div class="element element-1"></div>
          <div class="element element-2"></div>
          <div class="element element-3"></div>
          <div class="element element-4"></div>
        </div>
      </div>
      <div class="hero-container">
        <div class="hero-content">
          <div class="hero-badge">
            <span class="badge-icon">💰</span>
            <span>金融科技解决方案</span>
          </div>
          <h1 class="hero-title">
            重塑金融服务
            <span class="gradient-text">数字化未来</span>
          </h1>
          <p class="hero-description">
            通过区块链、人工智能、大数据等前沿技术，
            为金融机构提供安全、高效、创新的数字化解决方案，
            助力金融服务转型升级。
          </p>
          <div class="hero-stats">
            <div class="stat-item">
              <div class="stat-number">500+</div>
              <div class="stat-label">金融客户</div>
            </div>
            <div class="stat-item">
              <div class="stat-number">99.9%</div>
              <div class="stat-label">系统可用性</div>
            </div>
            <div class="stat-item">
              <div class="stat-number">50%</div>
              <div class="stat-label">成本降低</div>
            </div>
          </div>
          <div class="hero-actions">
            <a href="/contact" class="btn-primary">
              <span>立即咨询</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" stroke-width="2"/>
              </svg>
            </a>
            <a href="#solutions" class="btn-secondary">
              <span>了解方案</span>
            </a>
          </div>
        </div>
        <div class="hero-visual">
          <div class="fintech-illustration">
            <div class="central-node">
              <div class="node-core"></div>
              <div class="node-ring"></div>
            </div>
            <div class="connection-lines">
              <div class="line line-1"></div>
              <div class="line line-2"></div>
              <div class="line line-3"></div>
              <div class="line line-4"></div>
            </div>
            <div class="satellite-nodes">
              <div class="satellite satellite-1">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2V6M12 18V22M4.93 4.93L7.76 7.76M16.24 16.24L19.07 19.07M2 12H6M18 12H22M4.93 19.07L7.76 16.24M16.24 7.76L19.07 4.93" stroke="currentColor" stroke-width="2"/>
                </svg>
              </div>
              <div class="satellite satellite-2">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" stroke-width="2"/>
                </svg>
              </div>
              <div class="satellite satellite-3">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12 1L21.5 6.5V17.5L12 23L2.5 17.5V6.5L12 1Z" stroke="currentColor" stroke-width="2"/>
                </svg>
              </div>
              <div class="satellite satellite-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" stroke-width="2"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Solutions Overview -->
    <section id="solutions" class="solutions-section">
      <div class="container">
        <div class="section-header">
          <div class="section-badge">核心解决方案</div>
          <h2 class="section-title">全方位金融科技服务</h2>
          <p class="section-description">
            从数字支付到智能风控，从区块链金融到AI投顾，
            我们提供覆盖金融全业务链的技术解决方案。
          </p>
        </div>
        
        <div class="solutions-grid">
          <div class="solution-card featured">
            <div class="card-header">
              <div class="solution-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                  <path d="M12 1L21.5 6.5V17.5L12 23L2.5 17.5V6.5L12 1Z" stroke="currentColor" stroke-width="2"/>
                  <path d="M9 12L11 14L15 10" stroke="currentColor" stroke-width="2"/>
                </svg>
              </div>
              <div class="solution-category">区块链金融</div>
            </div>
            <h3>去中心化金融平台</h3>
            <p>基于区块链技术的DeFi平台，提供去中心化借贷、交易、资产管理等服务。</p>
            <div class="solution-features">
              <div class="feature-item">
                <span class="feature-icon">🔒</span>
                <span>安全透明</span>
              </div>
              <div class="feature-item">
                <span class="feature-icon">⚡</span>
                <span>高效处理</span>
              </div>
              <div class="feature-item">
                <span class="feature-icon">🌐</span>
                <span>全球互通</span>
              </div>
            </div>
            <div class="solution-metrics">
              <div class="metric">
                <span class="metric-value">$10B+</span>
                <span class="metric-label">交易量</span>
              </div>
              <div class="metric">
                <span class="metric-value">1M+</span>
                <span class="metric-label">用户数</span>
              </div>
            </div>
          </div>
          
          <div class="solution-card">
            <div class="card-header">
              <div class="solution-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                  <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" stroke-width="2"/>
                </svg>
              </div>
              <div class="solution-category">数字支付</div>
            </div>
            <h3>智能支付系统</h3>
            <p>支持多币种、跨境的智能支付解决方案，集成AI风控和实时反欺诈。</p>
            <div class="solution-features">
              <div class="feature-item">
                <span class="feature-icon">💳</span>
                <span>多币种支持</span>
              </div>
              <div class="feature-item">
                <span class="feature-icon">🛡️</span>
                <span>AI风控</span>
              </div>
            </div>
          </div>
          
          <div class="solution-card">
            <div class="card-header">
              <div class="solution-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                  <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" stroke-width="2"/>
                </svg>
              </div>
              <div class="solution-category">智能投顾</div>
            </div>
            <h3>AI投资顾问</h3>
            <p>基于机器学习的智能投资建议系统，提供个性化资产配置方案。</p>
            <div class="solution-features">
              <div class="feature-item">
                <span class="feature-icon">🤖</span>
                <span>AI算法</span>
              </div>
              <div class="feature-item">
                <span class="feature-icon">📊</span>
                <span>数据分析</span>
              </div>
            </div>
          </div>
          
          <div class="solution-card">
            <div class="card-header">
              <div class="solution-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                  <path d="M12 6V4M6 12H4M18 12H20M12 18V20M7.05 7.05L5.64 5.64M16.95 7.05L18.36 5.64M7.05 16.95L5.64 18.36M16.95 16.95L18.36 18.36" stroke="currentColor" stroke-width="2"/>
                  <circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="2"/>
                </svg>
              </div>
              <div class="solution-category">风险管理</div>
            </div>
            <h3>智能风控平台</h3>
            <p>实时风险监测和预警系统，基于大数据和AI技术的风险评估模型。</p>
            <div class="solution-features">
              <div class="feature-item">
                <span class="feature-icon">⚠️</span>
                <span>实时监控</span>
              </div>
              <div class="feature-item">
                <span class="feature-icon">📈</span>
                <span>风险建模</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Technology Stack -->
    <section class="technology-section">
      <div class="container">
        <div class="tech-layout">
          <div class="tech-content">
            <div class="section-badge">技术架构</div>
            <h2>领先的金融科技栈</h2>
            <p>
              我们采用最新的技术栈构建金融解决方案，
              确保系统的安全性、可扩展性和高性能。
            </p>
            
            <div class="tech-categories">
              <div class="tech-category">
                <h4>区块链技术</h4>
                <div class="tech-tags">
                  <span class="tech-tag">Ethereum</span>
                  <span class="tech-tag">Hyperledger</span>
                  <span class="tech-tag">ZHILING ARK</span>
                  <span class="tech-tag">Solidity</span>
                </div>
              </div>
              
              <div class="tech-category">
                <h4>人工智能</h4>
                <div class="tech-tags">
                  <span class="tech-tag">TensorFlow</span>
                  <span class="tech-tag">PyTorch</span>
                  <span class="tech-tag">Scikit-learn</span>
                  <span class="tech-tag">OpenAI</span>
                </div>
              </div>
              
              <div class="tech-category">
                <h4>大数据处理</h4>
                <div class="tech-tags">
                  <span class="tech-tag">Apache Spark</span>
                  <span class="tech-tag">Kafka</span>
                  <span class="tech-tag">Elasticsearch</span>
                  <span class="tech-tag">Redis</span>
                </div>
              </div>
              
              <div class="tech-category">
                <h4>云原生</h4>
                <div class="tech-tags">
                  <span class="tech-tag">Kubernetes</span>
                  <span class="tech-tag">Docker</span>
                  <span class="tech-tag">Istio</span>
                  <span class="tech-tag">Prometheus</span>
                </div>
              </div>
            </div>
          </div>
          
          <div class="tech-visual">
            <div class="tech-diagram">
              <div class="layer layer-1">
                <div class="layer-label">应用层</div>
                <div class="layer-items">
                  <div class="layer-item">Web App</div>
                  <div class="layer-item">Mobile App</div>
                  <div class="layer-item">API Gateway</div>
                </div>
              </div>
              <div class="layer layer-2">
                <div class="layer-label">服务层</div>
                <div class="layer-items">
                  <div class="layer-item">支付服务</div>
                  <div class="layer-item">风控服务</div>
                  <div class="layer-item">AI服务</div>
                </div>
              </div>
              <div class="layer layer-3">
                <div class="layer-label">数据层</div>
                <div class="layer-items">
                  <div class="layer-item">区块链</div>
                  <div class="layer-item">数据库</div>
                  <div class="layer-item">缓存</div>
                </div>
              </div>
              <div class="layer layer-4">
                <div class="layer-label">基础设施</div>
                <div class="layer-items">
                  <div class="layer-item">云平台</div>
                  <div class="layer-item">容器化</div>
                  <div class="layer-item">监控</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Success Stories -->
    <section class="success-section">
      <div class="container">
        <div class="section-header">
          <div class="section-badge">成功案例</div>
          <h2 class="section-title">客户成功故事</h2>
          <p class="section-description">
            我们已为众多金融机构提供了创新的技术解决方案，
            帮助他们实现数字化转型和业务增长。
          </p>
        </div>
        
        <div class="stories-grid">
          <div class="story-card">
            <div class="story-header">
              <div class="client-logo">
                <div class="logo-placeholder">Bank A</div>
              </div>
              <div class="story-category">数字银行</div>
            </div>
            <h3>全球领先银行数字化转型</h3>
            <p>为某全球性银行构建了完整的数字银行平台，包括移动银行、在线支付、智能客服等功能。</p>
            <div class="story-results">
              <div class="result-item">
                <span class="result-number">300%</span>
                <span class="result-label">用户增长</span>
              </div>
              <div class="result-item">
                <span class="result-number">60%</span>
                <span class="result-label">成本降低</span>
              </div>
              <div class="result-item">
                <span class="result-number">99.9%</span>
                <span class="result-label">系统可用性</span>
              </div>
            </div>
          </div>
          
          <div class="story-card">
            <div class="story-header">
              <div class="client-logo">
                <div class="logo-placeholder">FinTech B</div>
              </div>
              <div class="story-category">支付平台</div>
            </div>
            <h3>跨境支付平台建设</h3>
            <p>为金融科技公司打造的跨境支付平台，支持多币种实时结算，服务覆盖全球50+国家。</p>
            <div class="story-results">
              <div class="result-item">
                <span class="result-number">$5B+</span>
                <span class="result-label">年交易额</span>
              </div>
              <div class="result-item">
                <span class="result-number">2s</span>
                <span class="result-label">平均处理时间</span>
              </div>
            </div>
          </div>
          
          <div class="story-card">
            <div class="story-header">
              <div class="client-logo">
                <div class="logo-placeholder">Fund C</div>
              </div>
              <div class="story-category">资产管理</div>
            </div>
            <h3>AI智能投顾系统</h3>
            <p>为资产管理公司开发的AI投顾系统，通过机器学习算法提供个性化投资建议。</p>
            <div class="story-results">
              <div class="result-item">
                <span class="result-number">15%</span>
                <span class="result-label">平均收益提升</span>
              </div>
              <div class="result-item">
                <span class="result-number">100K+</span>
                <span class="result-label">活跃用户</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="container">
        <div class="cta-content">
          <div class="cta-badge">
            <span class="badge-icon">🚀</span>
            <span>开启金融科技之旅</span>
          </div>
          <h2>准备好革新您的金融服务了吗？</h2>
          <p>
            让我们的专家团队为您量身定制金融科技解决方案，
            助力您在数字化时代保持竞争优势。
          </p>
          <div class="cta-actions">
            <a href="/contact" class="btn-primary">
              <span>免费咨询</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" stroke-width="2"/>
              </svg>
            </a>
            <a href="/case-studies/financial" class="btn-secondary">
              <span>查看案例</span>
            </a>
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
  title: '金融科技解决方案 - ZHILING ARK TECHNOLOGY',
  description: 'ZHILING ARK TECHNOLOGY提供全方位的金融科技解决方案，包括区块链金融、数字支付、智能投顾、风险管理等创新服务'
})

// SEO 头部信息
useHead({
  title: '金融科技解决方案 - ZHILING ARK TECHNOLOGY',
  meta: [
    { name: 'description', content: '专业的金融科技解决方案提供商，涵盖区块链金融、数字支付、AI投顾、智能风控等领域，助力金融机构数字化转型' },
    { name: 'keywords', content: '金融科技,区块链金融,数字支付,智能投顾,风险管理,DeFi,金融AI,数字银行' }
  ]
})
</script>

<style scoped>
.fintech-solution-page {
  min-height: 100vh;
  overflow-x: hidden;
}

/* Hero Section */
.hero-section {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: linear-gradient(135deg, #0f0f23 0%, #1a1a3e 50%, #2d1b69 100%);
  overflow: hidden;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
}

.floating-elements {
  position: absolute;
  width: 100%;
  height: 100%;
}

.element {
  position: absolute;
  background: linear-gradient(45deg, #6366f1, #8b5cf6);
  border-radius: 50%;
  opacity: 0.1;
  animation: float 6s ease-in-out infinite;
}

.element-1 {
  width: 100px;
  height: 100px;
  top: 20%;
  left: 10%;
  animation-delay: 0s;
}

.element-2 {
  width: 60px;
  height: 60px;
  top: 60%;
  right: 15%;
  animation-delay: 2s;
}

.element-3 {
  width: 80px;
  height: 80px;
  bottom: 30%;
  left: 20%;
  animation-delay: 4s;
}

.element-4 {
  width: 120px;
  height: 120px;
  top: 10%;
  right: 25%;
  animation-delay: 1s;
}

@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(180deg); }
}

.hero-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
  position: relative;
  z-index: 2;
}

.hero-content {
  color: white;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 0.9rem;
  margin-bottom: 20px;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.badge-icon {
  font-size: 1.2rem;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 20px;
}

.gradient-text {
  background: linear-gradient(135deg, #6366f1, #8b5cf6, #ec4899);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-description {
  font-size: 1.2rem;
  line-height: 1.6;
  opacity: 0.9;
  margin-bottom: 30px;
}

.hero-stats {
  display: flex;
  gap: 40px;
  margin-bottom: 40px;
}

.stat-item {
  text-align: center;
}

.stat-number {
  font-size: 2rem;
  font-weight: 700;
  color: #6366f1;
  display: block;
}

.stat-label {
  font-size: 0.9rem;
  opacity: 0.8;
  margin-top: 5px;
}

.hero-actions {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

.btn-primary, .btn-secondary {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 14px 28px;
  border-radius: 12px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  border: 2px solid transparent;
}

.btn-primary {
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  color: white;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(99, 102, 241, 0.4);
}

.btn-secondary {
  background: transparent;
  color: white;
  border-color: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(10px);
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.5);
}

/* Hero Visual */
.hero-visual {
  display: flex;
  justify-content: center;
  align-items: center;
}

.fintech-illustration {
  position: relative;
  width: 400px;
  height: 400px;
}

.central-node {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 120px;
  height: 120px;
}

.node-core {
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 2;
  animation: pulse 2s ease-in-out infinite;
}

.node-ring {
  position: absolute;
  top: -10px;
  left: -10px;
  right: -10px;
  bottom: -10px;
  border: 2px solid rgba(99, 102, 241, 0.3);
  border-radius: 50%;
  animation: rotate 10s linear infinite;
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
}

@keyframes rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.connection-lines {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.line {
  position: absolute;
  background: linear-gradient(90deg, transparent, #6366f1, transparent);
  height: 2px;
  animation: flow 3s ease-in-out infinite;
}

.line-1 {
  top: 50%;
  left: 0;
  right: 0;
  animation-delay: 0s;
}

.line-2 {
  top: 0;
  bottom: 0;
  left: 50%;
  width: 2px;
  background: linear-gradient(0deg, transparent, #8b5cf6, transparent);
  animation-delay: 0.75s;
}

.line-3 {
  top: 25%;
  left: 25%;
  right: 25%;
  transform: rotate(45deg);
  animation-delay: 1.5s;
}

.line-4 {
  top: 25%;
  left: 25%;
  right: 25%;
  transform: rotate(-45deg);
  animation-delay: 2.25s;
}

@keyframes flow {
  0%, 100% { opacity: 0.3; }
  50% { opacity: 1; }
}

.satellite-nodes {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.satellite {
  position: absolute;
  width: 60px;
  height: 60px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  animation: orbit 8s linear infinite;
}

.satellite-1 {
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
}

.satellite-2 {
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  animation-delay: 2s;
}

.satellite-3 {
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  animation-delay: 4s;
}

.satellite-4 {
  left: 20px;
  top: 50%;
  transform: translateY(-50%);
  animation-delay: 6s;
}

@keyframes orbit {
  0%, 100% { transform: translateX(-50%) scale(1); }
  50% { transform: translateX(-50%) scale(1.1); }
}

/* Solutions Section */
.solutions-section {
  padding: 100px 0;
  background: var(--bg-color);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.section-header {
  text-align: center;
  margin-bottom: 80px;
}

.section-badge {
  display: inline-block;
  background: var(--primary-color-light);
  color: var(--primary-color);
  padding: 8px 20px;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 20px;
}

.section-title {
  font-size: 2.5rem;
  color: var(--text-primary);
  margin-bottom: 20px;
  font-weight: 700;
}

.section-description {
  font-size: 1.2rem;
  color: var(--text-secondary);
  line-height: 1.6;
  max-width: 600px;
  margin: 0 auto;
}

.solutions-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 30px;
  height: 600px;
}

.solution-card {
  background: var(--card-bg);
  border-radius: 20px;
  padding: 30px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
}

.solution-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #6366f1, #8b5cf6, #ec4899);
}

.solution-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
}

.solution-card.featured {
  grid-row: span 2;
  background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
  color: white;
}

.card-header {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 20px;
}

.solution-icon {
  width: 60px;
  height: 60px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}

.solution-card:not(.featured) .solution-icon {
  background: var(--primary-color-light);
  color: var(--primary-color);
}

.solution-category {
  background: rgba(255, 255, 255, 0.2);
  color: white;
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 500;
}

.solution-card:not(.featured) .solution-category {
  background: var(--primary-color-light);
  color: var(--primary-color);
}

.solution-card h3 {
  font-size: 1.4rem;
  margin-bottom: 15px;
  font-weight: 600;
}

.solution-card:not(.featured) h3 {
  color: var(--text-primary);
}

.solution-card p {
  line-height: 1.6;
  margin-bottom: 20px;
  flex-grow: 1;
}

.solution-card:not(.featured) p {
  color: var(--text-secondary);
}

.solution-features {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 20px;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 6px;
  background: rgba(255, 255, 255, 0.1);
  padding: 6px 12px;
  border-radius: 12px;
  font-size: 0.8rem;
}

.solution-card:not(.featured) .feature-item {
  background: var(--bg-secondary);
  color: var(--text-secondary);
}

.feature-icon {
  font-size: 1rem;
}

.solution-metrics {
  display: flex;
  gap: 20px;
  margin-top: auto;
}

.metric {
  text-align: center;
}

.metric-value {
  display: block;
  font-size: 1.2rem;
  font-weight: 700;
}

.metric-label {
  font-size: 0.8rem;
  opacity: 0.8;
}

/* Technology Section */
.technology-section {
  padding: 100px 0;
  background: var(--bg-secondary);
}

.tech-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
}

.tech-content h2 {
  font-size: 2.2rem;
  color: var(--text-primary);
  margin-bottom: 20px;
  font-weight: 700;
}

.tech-content p {
  font-size: 1.1rem;
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 40px;
}

.tech-categories {
  display: grid;
  gap: 30px;
}

.tech-category h4 {
  color: var(--text-primary);
  margin-bottom: 15px;
  font-size: 1.1rem;
}

.tech-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tech-tag {
  background: var(--card-bg);
  color: var(--text-secondary);
  padding: 8px 16px;
  border-radius: 12px;
  font-size: 0.9rem;
  border: 1px solid var(--border-color);
  transition: all 0.3s ease;
}

.tech-tag:hover {
  background: var(--primary-color);
  color: white;
  transform: translateY(-2px);
}

.tech-visual {
  display: flex;
  justify-content: center;
}

.tech-diagram {
  width: 100%;
  max-width: 400px;
}

.layer {
  background: var(--card-bg);
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 15px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.layer:hover {
  transform: translateX(10px);
}

.layer-label {
  font-size: 0.9rem;
  color: var(--primary-color);
  font-weight: 600;
  margin-bottom: 10px;
}

.layer-items {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.layer-item {
  background: var(--bg-secondary);
  color: var(--text-secondary);
  padding: 6px 12px;
  border-radius: 8px;
  font-size: 0.8rem;
}

/* Success Section */
.success-section {
  padding: 100px 0;
  background: var(--bg-color);
}

.stories-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
}

.story-card {
  background: var(--card-bg);
  border-radius: 20px;
  padding: 30px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.story-card:hover {
  transform: translateY(-5px);
}

.story-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
}

.client-logo {
  width: 60px;
  height: 60px;
  background: var(--primary-color-light);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo-placeholder {
  color: var(--primary-color);
  font-weight: 600;
  font-size: 0.8rem;
}

.story-category {
  background: var(--primary-color-light);
  color: var(--primary-color);
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 500;
}

.story-card h3 {
  font-size: 1.3rem;
  color: var(--text-primary);
  margin-bottom: 15px;
  font-weight: 600;
}

.story-card p {
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 25px;
}

.story-results {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

.result-item {
  text-align: center;
}

.result-number {
  display: block;
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--primary-color);
}

.result-label {
  font-size: 0.8rem;
  color: var(--text-secondary);
  margin-top: 5px;
}

/* CTA Section */
.cta-section {
  padding: 100px 0;
  background: linear-gradient(135deg, #0f0f23 0%, #1a1a3e 50%, #2d1b69 100%);
  color: white;
  text-align: center;
}

.cta-content {
  max-width: 600px;
  margin: 0 auto;
}

.cta-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 0.9rem;
  margin-bottom: 20px;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.cta-content h2 {
  font-size: 2.5rem;
  margin-bottom: 20px;
  font-weight: 700;
}

.cta-content p {
  font-size: 1.2rem;
  line-height: 1.6;
  opacity: 0.9;
  margin-bottom: 40px;
}

.cta-actions {
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .hero-container {
    grid-template-columns: 1fr;
    gap: 40px;
    text-align: center;
  }
  
  .hero-title {
    font-size: 2.5rem;
  }
  
  .solutions-grid {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    height: auto;
  }
  
  .solution-card.featured {
    grid-row: span 1;
  }
  
  .tech-layout {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  
  .stories-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2rem;
  }
  
  .hero-stats {
    gap: 20px;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .cta-content h2 {
    font-size: 2rem;
  }
  
  .cta-actions {
    flex-direction: column;
    align-items: center;
  }
}
</style>