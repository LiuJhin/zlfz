<template>
  <div class="quantitative-trading-page">
    <!-- Hero Section -->
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
            <span>AWS for Web3 and Blockchain First Call Deck.</span>
          </div>
          <h1 class="hero-title">
            AWS
            <span class="gradient-text">for Web3 and Blockchain </span>
          </h1>
          <p class="hero-description">
            基于人工智能和机器学习的量化交易平台，
            提供策略开发、回测验证、风险管理等全方位服务，
            助力投资者实现稳定收益和风险控制。
          </p>
          <div class="hero-stats">
            <div class="stat-item">
              <div class="stat-number">500+</div>
              <div class="stat-label">交易策略</div>
            </div>
            <div class="stat-item">
              <div class="stat-number">15%+</div>
              <div class="stat-label">年化收益</div>
            </div>
            <div class="stat-item">
              <div class="stat-number">0.1s</div>
              <div class="stat-label">执行延迟</div>
            </div>
          </div>
          <div class="hero-actions">
            <a href="/contact" class="btn-primary">
              <span>立即咨询</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path
                  d="M5 12H19M19 12L12 5M19 12L12 19"
                  stroke="currentColor"
                  stroke-width="2"
                />
              </svg>
            </a>
            <a href="#solutions" class="btn-secondary">
              <span>了解方案</span>
            </a>
          </div>
        </div>
        <div class="hero-visual">
          <div class="trading-illustration">
            <div class="central-node">
              <div class="node-core"></div>
              <div class="node-ring"></div>
            </div>
            <div class="data-streams">
              <div class="stream stream-1"></div>
              <div class="stream stream-2"></div>
              <div class="stream stream-3"></div>
              <div class="stream stream-4"></div>
            </div>
            <div class="algorithm-nodes">
              <div class="algo-node algo-1">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M9 19C-2 8 2 2 9 5L12 7L15 5C22 2 26 8 15 19L12 22L9 19Z"
                    stroke="currentColor"
                    stroke-width="2"
                  />
                </svg>
              </div>
              <div class="algo-node algo-2">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 2L2 7L12 12L22 7L12 2Z"
                    stroke="currentColor"
                    stroke-width="2"
                  />
                  <path
                    d="M2 17L12 22L22 17"
                    stroke="currentColor"
                    stroke-width="2"
                  />
                </svg>
              </div>
              <div class="algo-node algo-3">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M13 2L3 14H12L11 22L21 10H12L13 2Z"
                    stroke="currentColor"
                    stroke-width="2"
                  />
                </svg>
              </div>
              <div class="algo-node algo-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 6V4M6 12H4M18 12H20M12 18V20"
                    stroke="currentColor"
                    stroke-width="2"
                  />
                  <circle
                    cx="12"
                    cy="12"
                    r="3"
                    stroke="currentColor"
                    stroke-width="2"
                  />
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
          <h2 class="section-title">全方位量化交易服务</h2>
          <p class="section-description">
            从策略研发到风险管理，从高频交易到投资组合优化，
            我们提供覆盖量化交易全流程的智能化解决方案。
          </p>
        </div>

        <div class="solutions-grid">
          <div class="solution-card featured">
            <div class="card-header">
              <div class="solution-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M9 19C-2 8 2 2 9 5L12 7L15 5C22 2 26 8 15 19L12 22L9 19Z"
                    stroke="currentColor"
                    stroke-width="2"
                  />
                </svg>
              </div>
              <div class="solution-category">策略开发</div>
            </div>
            <h3>AI策略引擎</h3>
            <p>
              基于机器学习的智能策略开发平台，支持多因子模型、深度学习等先进算法。
            </p>
            <div class="solution-features">
              <div class="feature-item">
                <span class="feature-icon">🤖</span>
                <span>机器学习</span>
              </div>
              <div class="feature-item">
                <span class="feature-icon">📈</span>
                <span>多因子模型</span>
              </div>
              <div class="feature-item">
                <span class="feature-icon">⚡</span>
                <span>实时优化</span>
              </div>
            </div>
            <div class="solution-metrics">
              <div class="metric">
                <span class="metric-value">500+</span>
                <span class="metric-label">策略模板</span>
              </div>
              <div class="metric">
                <span class="metric-value">95%</span>
                <span class="metric-label">胜率</span>
              </div>
            </div>
          </div>

          <div class="solution-card">
            <div class="card-header">
              <div class="solution-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 2L2 7L12 12L22 7L12 2Z"
                    stroke="currentColor"
                    stroke-width="2"
                  />
                  <path
                    d="M2 17L12 22L22 17"
                    stroke="currentColor"
                    stroke-width="2"
                  />
                </svg>
              </div>
              <div class="solution-category">高频交易</div>
            </div>
            <h3>超低延迟执行</h3>
            <p>毫秒级订单执行系统，支持高频交易策略和市场微观结构分析。</p>
            <div class="solution-features">
              <div class="feature-item">
                <span class="feature-icon">⚡</span>
                <span>毫秒执行</span>
              </div>
              <div class="feature-item">
                <span class="feature-icon">🎯</span>
                <span>精准定价</span>
              </div>
            </div>
          </div>

          <div class="solution-card">
            <div class="card-header">
              <div class="solution-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M13 2L3 14H12L11 22L21 10H12L13 2Z"
                    stroke="currentColor"
                    stroke-width="2"
                  />
                </svg>
              </div>
              <div class="solution-category">风险管理</div>
            </div>
            <h3>智能风控系统</h3>
            <p>实时风险监控和动态对冲策略，确保投资组合的稳定性和安全性。</p>
            <div class="solution-features">
              <div class="feature-item">
                <span class="feature-icon">🛡️</span>
                <span>实时监控</span>
              </div>
              <div class="feature-item">
                <span class="feature-icon">⚖️</span>
                <span>动态对冲</span>
              </div>
            </div>
          </div>

          <div class="solution-card">
            <div class="card-header">
              <div class="solution-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 6V4M6 12H4M18 12H20M12 18V20"
                    stroke="currentColor"
                    stroke-width="2"
                  />
                  <circle
                    cx="12"
                    cy="12"
                    r="3"
                    stroke="currentColor"
                    stroke-width="2"
                  />
                </svg>
              </div>
              <div class="solution-category">回测分析</div>
            </div>
            <h3>历史回测平台</h3>
            <p>高精度历史数据回测，支持多维度性能分析和策略优化建议。</p>
            <div class="solution-features">
              <div class="feature-item">
                <span class="feature-icon">📊</span>
                <span>多维分析</span>
              </div>
              <div class="feature-item">
                <span class="feature-icon">🔍</span>
                <span>精准回测</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Technology Stack -->
    <section class="technology-section">
      <div class="container">
        <div class="section-header">
          <div class="section-badge">技术架构</div>
          <h2 class="section-title">先进的量化技术栈</h2>
          <p class="section-description">
            采用最新的AI算法和高性能计算技术，确保策略的准确性和执行效率。
          </p>
        </div>

        <div class="tech-grid">
          <div class="tech-category">
            <h3>机器学习</h3>
            <div class="tech-items">
              <div class="tech-item">TensorFlow</div>
              <div class="tech-item">PyTorch</div>
              <div class="tech-item">Scikit-learn</div>
              <div class="tech-item">XGBoost</div>
            </div>
          </div>

          <div class="tech-category">
            <h3>数据处理</h3>
            <div class="tech-items">
              <div class="tech-item">Apache Spark</div>
              <div class="tech-item">Pandas</div>
              <div class="tech-item">NumPy</div>
              <div class="tech-item">Apache Kafka</div>
            </div>
          </div>

          <div class="tech-category">
            <h3>执行引擎</h3>
            <div class="tech-items">
              <div class="tech-item">C++ 高频引擎</div>
              <div class="tech-item">FIX协议</div>
              <div class="tech-item">低延迟网络</div>
              <div class="tech-item">FPGA加速</div>
            </div>
          </div>

          <div class="tech-category">
            <h3>基础设施</h3>
            <div class="tech-items">
              <div class="tech-item">GPU集群</div>
              <div class="tech-item">时序数据库</div>
              <div class="tech-item">分布式计算</div>
              <div class="tech-item">云原生架构</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="features-section">
      <div class="container">
        <div class="section-header">
          <div class="section-badge">核心特性</div>
          <h2 class="section-title">领先的量化交易功能</h2>
        </div>

        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                <path
                  d="M9 19C-2 8 2 2 9 5L12 7L15 5C22 2 26 8 15 19L12 22L9 19Z"
                  stroke="currentColor"
                  stroke-width="2"
                />
              </svg>
            </div>
            <h3>智能策略生成</h3>
            <p>基于深度学习的策略自动生成，持续优化交易逻辑和参数配置。</p>
          </div>

          <div class="feature-card">
            <div class="feature-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 2L2 7L12 12L22 7L12 2Z"
                  stroke="currentColor"
                  stroke-width="2"
                />
                <path
                  d="M2 17L12 22L22 17"
                  stroke="currentColor"
                  stroke-width="2"
                />
              </svg>
            </div>
            <h3>多市场覆盖</h3>
            <p>支持股票、期货、外汇、数字货币等多个市场的量化交易策略。</p>
          </div>

          <div class="feature-card">
            <div class="feature-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                <path
                  d="M13 2L3 14H12L11 22L21 10H12L13 2Z"
                  stroke="currentColor"
                  stroke-width="2"
                />
              </svg>
            </div>
            <h3>实时风险控制</h3>
            <p>毫秒级风险监控和自动止损，确保交易安全和资金保护。</p>
          </div>

          <div class="feature-card">
            <div class="feature-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 6V4M6 12H4M18 12H20M12 18V20"
                  stroke="currentColor"
                  stroke-width="2"
                />
                <circle
                  cx="12"
                  cy="12"
                  r="3"
                  stroke="currentColor"
                  stroke-width="2"
                />
              </svg>
            </div>
            <h3>高精度回测</h3>
            <p>基于真实市场数据的高精度回测，提供详细的性能分析报告。</p>
          </div>

          <div class="feature-card">
            <div class="feature-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                <path
                  d="M21 16V8A2 2 0 0 0 19 6H5A2 2 0 0 0 3 8V16A2 2 0 0 0 5 18H19A2 2 0 0 0 21 16Z"
                  stroke="currentColor"
                  stroke-width="2"
                />
                <path d="M7 10H17" stroke="currentColor" stroke-width="2" />
              </svg>
            </div>
            <h3>API集成</h3>
            <p>提供完整的API接口，支持自定义策略开发和第三方系统集成。</p>
          </div>

          <div class="feature-card">
            <div class="feature-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 1L21.5 6.5V17.5L12 23L2.5 17.5V6.5L12 1Z"
                  stroke="currentColor"
                  stroke-width="2"
                />
              </svg>
            </div>
            <h3>云端部署</h3>
            <p>支持云端和本地部署，提供弹性扩展和高可用性保障。</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Performance Section -->
    <section class="performance-section">
      <div class="container">
        <div class="section-header">
          <div class="section-badge">性能表现</div>
          <h2 class="section-title">卓越的量化交易成果</h2>
          <p class="section-description">
            基于真实交易数据的性能统计，展现我们量化策略的优异表现。
          </p>
        </div>

        <div class="performance-grid">
          <div class="performance-card">
            <div class="performance-icon">📈</div>
            <div class="performance-value">15.8%</div>
            <div class="performance-label">年化收益率</div>
            <div class="performance-description">过去3年平均年化收益</div>
          </div>

          <div class="performance-card">
            <div class="performance-icon">🎯</div>
            <div class="performance-value">0.12</div>
            <div class="performance-label">夏普比率</div>
            <div class="performance-description">风险调整后收益指标</div>
          </div>

          <div class="performance-card">
            <div class="performance-icon">📊</div>
            <div class="performance-value">8.5%</div>
            <div class="performance-label">最大回撤</div>
            <div class="performance-description">历史最大资产回撤</div>
          </div>

          <div class="performance-card">
            <div class="performance-icon">⚡</div>
            <div class="performance-value">0.1ms</div>
            <div class="performance-label">执行延迟</div>
            <div class="performance-description">平均订单执行时间</div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="container">
        <div class="cta-content">
          <h2>准备开启您的量化交易之旅？</h2>
          <p>联系我们的量化专家，获取定制化的策略开发和技术支持服务。</p>
          <div class="cta-actions">
            <a href="/contact" class="btn-primary">
              <span>立即咨询</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path
                  d="M5 12H19M19 12L12 5M19 12L12 19"
                  stroke="currentColor"
                  stroke-width="2"
                />
              </svg>
            </a>
            <a href="#" class="btn-secondary">
              <span>策略演示</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// Page metadata
useHead({
  title: "量化交易解决方案 - 中联方舟",
  meta: [
    {
      name: "description",
      content:
        "专业的量化交易技术解决方案，提供AI策略开发、高频交易、风险管理等全方位服务。",
    },
    { name: "keywords", content: "量化交易,算法交易,高频交易,AI策略,机器学习" },
  ],
});
</script>

<style scoped>
/* 量化交易主题样式 */
.quantitative-trading-page {
  min-height: 100vh;
  background: linear-gradient(
    135deg,
    var(--bg-primary) 0%,
    var(--bg-secondary) 50%,
    var(--bg-tertiary) 100%
  );
  color: var(--text-primary);
  transition: all 0.3s ease;
}

/* Hero Section */
.hero-section {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  overflow: hidden;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(
      circle at 20% 30%,
      rgba(139, 92, 246, 0.15) 0%,
      transparent 50%
    ),
    radial-gradient(
      circle at 80% 70%,
      rgba(59, 130, 246, 0.15) 0%,
      transparent 50%
    );
}

.floating-elements {
  position: absolute;
  width: 100%;
  height: 100%;
}

.element {
  position: absolute;
  background: linear-gradient(45deg, #8b5cf6, #3b82f6);
  border-radius: 50%;
  opacity: 0.1;
  animation: float 8s ease-in-out infinite;
}

.element-1 {
  width: 100px;
  height: 100px;
  top: 15%;
  left: 5%;
  animation-delay: 0s;
}

.element-2 {
  width: 80px;
  height: 80px;
  top: 70%;
  right: 10%;
  animation-delay: 2s;
}

.element-3 {
  width: 120px;
  height: 120px;
  bottom: 20%;
  left: 15%;
  animation-delay: 4s;
}

.element-4 {
  width: 90px;
  height: 90px;
  top: 5%;
  right: 25%;
  animation-delay: 1s;
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-30px) rotate(180deg);
  }
}

.hero-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  position: relative;
  z-index: 1;
}

.hero-content {
  max-width: 600px;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(var(--accent-primary-rgb), 0.1);
  border: 1px solid rgba(var(--accent-primary-rgb), 0.2);
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  font-size: 0.875rem;
  font-weight: 500;
  margin-bottom: 1.5rem;
  backdrop-filter: blur(10px);
}

.badge-icon {
  font-size: 1.2rem;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 1.5rem;
}

.gradient-text {
  background: linear-gradient(
    135deg,
    var(--trading-accent-primary) 0%,
    var(--trading-accent-secondary) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-description {
  font-size: 1.125rem;
  line-height: 1.7;
  color: var(--text-secondary);
  margin-bottom: 2rem;
}

.hero-stats {
  display: flex;
  gap: 2rem;
  margin-bottom: 2rem;
}

.stat-item {
  text-align: center;
}

.stat-number {
  font-size: 2rem;
  font-weight: 700;
  color: var(--trading-accent-primary);
  display: block;
}

.stat-label {
  font-size: 0.875rem;
  color: var(--text-muted);
  margin-top: 0.25rem;
}

.hero-actions {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%);
  color: white;
  padding: 0.875rem 1.5rem;
  border-radius: 0.5rem;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(139, 92, 246, 0.3);
}

.btn-secondary {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: transparent;
  color: var(--text-primary);
  padding: 0.875rem 1.5rem;
  border: 1px solid var(--border-color);
  border-radius: 0.5rem;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
}

.btn-secondary:hover {
  background: rgba(var(--text-primary-rgb), 0.1);
  border-color: rgba(var(--text-primary-rgb), 0.3);
}

/* Trading Illustration */
.trading-illustration {
  position: relative;
  width: 400px;
  height: 400px;
  margin: 0 auto;
}

.central-node {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100px;
  height: 100px;
}

.node-core {
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #8b5cf6, #3b82f6);
  border-radius: 50%;
  animation: pulse 3s ease-in-out infinite;
}

.node-ring {
  position: absolute;
  top: -15px;
  left: -15px;
  right: -15px;
  bottom: -15px;
  border: 2px solid rgba(139, 92, 246, 0.3);
  border-radius: 50%;
  animation: rotate 12s linear infinite;
}

@keyframes pulse {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.15);
  }
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.data-streams {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.stream {
  position: absolute;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(139, 92, 246, 0.6),
    transparent
  );
  height: 3px;
  border-radius: 2px;
}

.stream-1 {
  top: 30%;
  left: 0;
  right: 0;
  animation: dataFlow 4s ease-in-out infinite;
}

.stream-2 {
  top: 70%;
  left: 0;
  right: 0;
  animation: dataFlow 4s ease-in-out infinite 1s;
}

.stream-3 {
  top: 0;
  bottom: 0;
  left: 30%;
  width: 3px;
  background: linear-gradient(
    180deg,
    transparent,
    rgba(59, 130, 246, 0.6),
    transparent
  );
  animation: dataFlow 4s ease-in-out infinite 2s;
}

.stream-4 {
  top: 0;
  bottom: 0;
  right: 30%;
  width: 3px;
  background: linear-gradient(
    180deg,
    transparent,
    rgba(59, 130, 246, 0.6),
    transparent
  );
  animation: dataFlow 4s ease-in-out infinite 3s;
}

@keyframes dataFlow {
  0%,
  100% {
    opacity: 0.3;
  }
  50% {
    opacity: 1;
  }
}

.algorithm-nodes {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.algo-node {
  position: absolute;
  width: 70px;
  height: 70px;
  background: rgba(10, 10, 26, 0.9);
  border: 2px solid rgba(139, 92, 246, 0.4);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #8b5cf6;
  backdrop-filter: blur(15px);
  animation: algorithmPulse 6s ease-in-out infinite;
}

.algo-1 {
  top: 10%;
  left: 10%;
  animation-delay: 0s;
}

.algo-2 {
  top: 10%;
  right: 10%;
  animation-delay: 1.5s;
}

.algo-3 {
  bottom: 10%;
  right: 10%;
  animation-delay: 3s;
}

.algo-4 {
  bottom: 10%;
  left: 10%;
  animation-delay: 4.5s;
}

@keyframes algorithmPulse {
  0%,
  100% {
    transform: scale(1);
    border-color: rgba(139, 92, 246, 0.4);
  }
  50% {
    transform: scale(1.1);
    border-color: rgba(139, 92, 246, 0.8);
  }
}

/* Solutions Section */
.solutions-section {
  padding: 6rem 0;
  background: var(--card-bg);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-badge {
  display: inline-block;
  background: rgba(139, 92, 246, 0.1);
  border: 1px solid rgba(139, 92, 246, 0.2);
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  font-size: 0.875rem;
  font-weight: 500;
  margin-bottom: 1rem;
  color: #8b5cf6;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.section-description {
  font-size: 1.125rem;
  color: #94a3b8;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.7;
}

.solutions-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.solution-card {
  background: rgba(10, 10, 26, 0.8);
  border: 1px solid rgba(139, 92, 246, 0.1);
  border-radius: 1rem;
  padding: 2rem;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.solution-card:hover {
  transform: translateY(-5px);
  border-color: rgba(139, 92, 246, 0.3);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

.solution-card.featured {
  border-color: rgba(139, 92, 246, 0.3);
  background: linear-gradient(
    135deg,
    rgba(139, 92, 246, 0.1) 0%,
    rgba(59, 130, 246, 0.1) 100%
  );
}

.card-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.solution-icon {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #8b5cf6, #3b82f6);
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}

.solution-category {
  font-size: 0.875rem;
  color: #8b5cf6;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.solution-card h3 {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #ffffff;
}

.solution-card p {
  color: #94a3b8;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.solution-features {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(139, 92, 246, 0.1);
  padding: 0.5rem 0.75rem;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  color: #e2e8f0;
}

.feature-icon {
  font-size: 1rem;
}

.solution-metrics {
  display: flex;
  gap: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(139, 92, 246, 0.1);
}

.metric {
  text-align: center;
}

.metric-value {
  font-size: 1.5rem;
  font-weight: 700;
  color: #8b5cf6;
  display: block;
}

.metric-label {
  font-size: 0.75rem;
  color: #64748b;
  margin-top: 0.25rem;
}

/* Technology Section */
.technology-section {
  padding: 6rem 0;
  background: rgba(26, 26, 46, 0.5);
}

.tech-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.tech-category {
  background: rgba(10, 10, 26, 0.8);
  border: 1px solid rgba(139, 92, 246, 0.1);
  border-radius: 1rem;
  padding: 2rem;
  backdrop-filter: blur(10px);
}

.tech-category h3 {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: #8b5cf6;
}

.tech-items {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.tech-item {
  background: rgba(139, 92, 246, 0.1);
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  color: #e2e8f0;
  font-size: 0.875rem;
  border: 1px solid rgba(139, 92, 246, 0.2);
  transition: all 0.3s ease;
}

.tech-item:hover {
  background: rgba(139, 92, 246, 0.2);
  border-color: rgba(139, 92, 246, 0.3);
}

/* Features Section */
.features-section {
  padding: 6rem 0;
  background: rgba(10, 10, 26, 0.5);
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.feature-card {
  background: rgba(10, 10, 26, 0.8);
  border: 1px solid rgba(139, 92, 246, 0.1);
  border-radius: 1rem;
  padding: 2rem;
  text-align: center;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.feature-card:hover {
  transform: translateY(-5px);
  border-color: rgba(139, 92, 246, 0.3);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

.feature-icon {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #8b5cf6, #3b82f6);
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  color: white;
}

.feature-card h3 {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #ffffff;
}

.feature-card p {
  color: #94a3b8;
  line-height: 1.6;
}

/* Performance Section */
.performance-section {
  padding: 6rem 0;
  background: rgba(26, 26, 46, 0.5);
}

.performance-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.performance-card {
  background: rgba(10, 10, 26, 0.8);
  border: 1px solid rgba(139, 92, 246, 0.1);
  border-radius: 1rem;
  padding: 2rem;
  text-align: center;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.performance-card:hover {
  transform: translateY(-5px);
  border-color: rgba(139, 92, 246, 0.3);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

.performance-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.performance-value {
  font-size: 2.5rem;
  font-weight: 700;
  color: #8b5cf6;
  margin-bottom: 0.5rem;
}

.performance-label {
  font-size: 1.125rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 0.5rem;
}

.performance-description {
  font-size: 0.875rem;
  color: #94a3b8;
  line-height: 1.5;
}

/* CTA Section */
.cta-section {
  padding: 6rem 0;
  background: linear-gradient(
    135deg,
    rgba(139, 92, 246, 0.1) 0%,
    rgba(59, 130, 246, 0.1) 100%
  );
  border-top: 1px solid rgba(139, 92, 246, 0.1);
}

.cta-content {
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
}

.cta-content h2 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.cta-content p {
  font-size: 1.125rem;
  color: #94a3b8;
  margin-bottom: 2rem;
  line-height: 1.7;
}

.cta-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero-container {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }

  .hero-title {
    font-size: 2.5rem;
  }

  .hero-stats {
    justify-content: center;
  }

  .hero-actions {
    justify-content: center;
    flex-wrap: wrap;
  }

  .trading-illustration {
    width: 300px;
    height: 300px;
  }

  .solutions-grid,
  .tech-grid,
  .features-grid,
  .performance-grid {
    grid-template-columns: 1fr;
  }

  .section-title {
    font-size: 2rem;
  }

  .cta-content h2 {
    font-size: 2rem;
  }

  .cta-actions {
    flex-direction: column;
    align-items: stretch;
  }
}
</style>
