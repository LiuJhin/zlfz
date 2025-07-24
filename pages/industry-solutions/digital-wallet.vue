<template>
  <div class="digital-wallet-page">
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
            <span class="badge-icon">💳</span>
            <span>数字钱包解决方案</span>
          </div>
          <h1 class="hero-title">
            安全便捷的
            <span class="gradient-text">数字资产管理</span>
          </h1>
          <p class="hero-description">
            基于区块链技术的多链数字钱包解决方案，
            提供安全存储、便捷支付、DeFi集成等全方位服务，
            为用户打造一站式数字资产管理平台。
          </p>
          <div class="hero-stats">
            <div class="stat-item">
              <div class="stat-number">50+</div>
              <div class="stat-label">支持币种</div>
            </div>
            <div class="stat-item">
              <div class="stat-number">99.9%</div>
              <div class="stat-label">安全等级</div>
            </div>
            <div class="stat-item">
              <div class="stat-number">1M+</div>
              <div class="stat-label">活跃用户</div>
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
          <div class="wallet-illustration">
            <div class="central-wallet">
              <div class="wallet-core"></div>
              <div class="security-ring"></div>
            </div>
            <div class="asset-orbits">
              <div class="orbit orbit-1">
                <div class="asset-node btc">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
                    <path d="M8 12H16M8 8H16M8 16H13" stroke="currentColor" stroke-width="2"/>
                  </svg>
                </div>
              </div>
              <div class="orbit orbit-2">
                <div class="asset-node eth">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2L4 12L12 16L20 12L12 2Z" stroke="currentColor" stroke-width="2"/>
                    <path d="M4 12L12 22L20 12" stroke="currentColor" stroke-width="2"/>
                  </svg>
                </div>
              </div>
              <div class="orbit orbit-3">
                <div class="asset-node usdt">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
                    <path d="M12 6V18M8 10H16" stroke="currentColor" stroke-width="2"/>
                  </svg>
                </div>
              </div>
            </div>
            <div class="connection-lines">
              <div class="line line-1"></div>
              <div class="line line-2"></div>
              <div class="line line-3"></div>
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
          <h2 class="section-title">全方位数字钱包服务</h2>
          <p class="section-description">
            从多链资产管理到DeFi集成，从支付结算到NFT收藏，
            我们提供覆盖数字资产全生命周期的钱包解决方案。
          </p>
        </div>
        
        <div class="solutions-grid">
          <div class="solution-card featured">
            <div class="card-header">
              <div class="solution-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                  <path d="M21 16V8A2 2 0 0 0 19 6H5A2 2 0 0 0 3 8V16A2 2 0 0 0 5 18H19A2 2 0 0 0 21 16Z" stroke="currentColor" stroke-width="2"/>
                  <path d="M7 10H17" stroke="currentColor" stroke-width="2"/>
                </svg>
              </div>
              <div class="solution-category">多链钱包</div>
            </div>
            <h3>多链资产管理</h3>
            <p>支持主流区块链网络的多链钱包，统一管理BTC、ETH、BSC等多种数字资产。</p>
            <div class="solution-features">
              <div class="feature-item">
                <span class="feature-icon">🔗</span>
                <span>多链支持</span>
              </div>
              <div class="feature-item">
                <span class="feature-icon">💰</span>
                <span>资产统计</span>
              </div>
              <div class="feature-item">
                <span class="feature-icon">🔄</span>
                <span>跨链转账</span>
              </div>
            </div>
            <div class="solution-metrics">
              <div class="metric">
                <span class="metric-value">50+</span>
                <span class="metric-label">支持币种</span>
              </div>
              <div class="metric">
                <span class="metric-value">10+</span>
                <span class="metric-label">区块链网络</span>
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
              <div class="solution-category">安全防护</div>
            </div>
            <h3>多重安全机制</h3>
            <p>采用硬件安全模块、生物识别、多重签名等多层安全防护机制。</p>
            <div class="solution-features">
              <div class="feature-item">
                <span class="feature-icon">🔐</span>
                <span>硬件加密</span>
              </div>
              <div class="feature-item">
                <span class="feature-icon">👆</span>
                <span>生物识别</span>
              </div>
            </div>
          </div>
          
          <div class="solution-card">
            <div class="card-header">
              <div class="solution-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                  <path d="M12 1L21.5 6.5V17.5L12 23L2.5 17.5V6.5L12 1Z" stroke="currentColor" stroke-width="2"/>
                </svg>
              </div>
              <div class="solution-category">DeFi集成</div>
            </div>
            <h3>DeFi生态接入</h3>
            <p>无缝集成主流DeFi协议，支持流动性挖矿、借贷、交易等DeFi服务。</p>
            <div class="solution-features">
              <div class="feature-item">
                <span class="feature-icon">🌾</span>
                <span>流动性挖矿</span>
              </div>
              <div class="feature-item">
                <span class="feature-icon">💸</span>
                <span>借贷服务</span>
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
              <div class="solution-category">支付结算</div>
            </div>
            <h3>便捷支付体验</h3>
            <p>支持扫码支付、NFC支付等多种支付方式，提供快速便捷的支付体验。</p>
            <div class="solution-features">
              <div class="feature-item">
                <span class="feature-icon">📱</span>
                <span>扫码支付</span>
              </div>
              <div class="feature-item">
                <span class="feature-icon">📡</span>
                <span>NFC支付</span>
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
          <h2 class="section-title">企业级安全技术栈</h2>
          <p class="section-description">
            采用银行级安全标准和先进的区块链技术，确保数字资产的安全性和可靠性。
          </p>
        </div>
        
        <div class="tech-grid">
          <div class="tech-category">
            <h3>安全技术</h3>
            <div class="tech-items">
              <div class="tech-item">硬件安全模块</div>
              <div class="tech-item">多重签名</div>
              <div class="tech-item">生物识别</div>
              <div class="tech-item">端到端加密</div>
            </div>
          </div>
          
          <div class="tech-category">
            <h3>区块链支持</h3>
            <div class="tech-items">
              <div class="tech-item">Bitcoin</div>
              <div class="tech-item">Ethereum</div>
              <div class="tech-item">Binance Smart Chain</div>
              <div class="tech-item">Polygon</div>
            </div>
          </div>
          
          <div class="tech-category">
            <h3>移动开发</h3>
            <div class="tech-items">
              <div class="tech-item">React Native</div>
              <div class="tech-item">Flutter</div>
              <div class="tech-item">Swift/Kotlin</div>
              <div class="tech-item">Web3.js</div>
            </div>
          </div>
          
          <div class="tech-category">
            <h3>后端服务</h3>
            <div class="tech-items">
              <div class="tech-item">Node.js</div>
              <div class="tech-item">Redis</div>
              <div class="tech-item">PostgreSQL</div>
              <div class="tech-item">Docker</div>
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
          <h2 class="section-title">领先的钱包功能</h2>
        </div>
        
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" stroke-width="2"/>
              </svg>
            </div>
            <h3>银行级安全</h3>
            <p>采用硬件安全模块和多重加密技术，确保私钥和资产的绝对安全。</p>
          </div>
          
          <div class="feature-card">
            <div class="feature-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                <path d="M21 16V8A2 2 0 0 0 19 6H5A2 2 0 0 0 3 8V16A2 2 0 0 0 5 18H19A2 2 0 0 0 21 16Z" stroke="currentColor" stroke-width="2"/>
                <path d="M7 10H17" stroke="currentColor" stroke-width="2"/>
              </svg>
            </div>
            <h3>多链支持</h3>
            <p>支持主流区块链网络，一个钱包管理所有数字资产。</p>
          </div>
          
          <div class="feature-card">
            <div class="feature-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                <path d="M12 1L21.5 6.5V17.5L12 23L2.5 17.5V6.5L12 1Z" stroke="currentColor" stroke-width="2"/>
              </svg>
            </div>
            <h3>DeFi集成</h3>
            <p>无缝接入DeFi生态，享受去中心化金融服务的便利。</p>
          </div>
          
          <div class="feature-card">
            <div class="feature-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" stroke-width="2"/>
              </svg>
            </div>
            <h3>快速支付</h3>
            <p>支持多种支付方式，提供快速便捷的数字货币支付体验。</p>
          </div>
          
          <div class="feature-card">
            <div class="feature-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                <path d="M12 6V4M6 12H4M18 12H20M12 18V20" stroke="currentColor" stroke-width="2"/>
                <circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="2"/>
              </svg>
            </div>
            <h3>实时行情</h3>
            <p>提供实时价格行情和市场分析，帮助用户做出明智的投资决策。</p>
          </div>
          
          <div class="feature-card">
            <div class="feature-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" stroke-width="2"/>
                <path d="M2 17L12 22L22 17" stroke="currentColor" stroke-width="2"/>
              </svg>
            </div>
            <h3>NFT收藏</h3>
            <p>支持NFT资产的存储、展示和交易，打造个人数字收藏馆。</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Security Section -->
    <section class="security-section">
      <div class="container">
        <div class="section-header">
          <div class="section-badge">安全保障</div>
          <h2 class="section-title">多层安全防护体系</h2>
          <p class="section-description">
            采用多重安全机制，从硬件到软件，从本地到云端，全方位保护用户资产安全。
          </p>
        </div>
        
        <div class="security-grid">
          <div class="security-card">
            <div class="security-icon">🔐</div>
            <h3>硬件安全模块</h3>
            <p>采用专业的硬件安全芯片，私钥永不离开安全环境，确保绝对安全。</p>
          </div>
          
          <div class="security-card">
            <div class="security-icon">👆</div>
            <h3>生物识别认证</h3>
            <p>支持指纹、面部识别等生物识别技术，提供便捷且安全的身份验证。</p>
          </div>
          
          <div class="security-card">
            <div class="security-icon">🔒</div>
            <h3>多重签名机制</h3>
            <p>支持多重签名钱包，重要交易需要多方确认，降低单点风险。</p>
          </div>
          
          <div class="security-card">
            <div class="security-icon">🛡️</div>
            <h3>端到端加密</h3>
            <p>所有数据传输采用端到端加密，确保通信过程的绝对安全。</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="container">
        <div class="cta-content">
          <h2>准备构建您的数字钱包？</h2>
          <p>联系我们的专家团队，获取定制化的数字钱包解决方案和技术支持。</p>
          <div class="cta-actions">
            <a href="/contact" class="btn-primary">
              <span>立即咨询</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" stroke-width="2"/>
              </svg>
            </a>
            <a href="#" class="btn-secondary">
              <span>产品演示</span>
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
  title: '数字钱包解决方案 - 中联方舟',
  meta: [
    { name: 'description', content: '专业的数字钱包技术解决方案，提供多链资产管理、安全防护、DeFi集成等全方位服务。' },
    { name: 'keywords', content: '数字钱包,多链钱包,区块链钱包,DeFi,数字资产管理' }
  ]
})
</script>

<style scoped>
/* 数字钱包主题样式 */
.digital-wallet-page {
  min-height: 100vh;
  background: linear-gradient(135deg, var(--bg-primary) 0%, var(--bg-secondary) 50%, var(--bg-tertiary) 100%);
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
  background: radial-gradient(circle at 25% 25%, rgba(var(--wallet-accent-primary-rgb), 0.1) 0%, transparent 50%),
              radial-gradient(circle at 75% 75%, rgba(var(--wallet-accent-secondary-rgb), 0.1) 0%, transparent 50%);
}

.floating-elements {
  position: absolute;
  width: 100%;
  height: 100%;
}

.element {
  position: absolute;
  background: linear-gradient(45deg, var(--wallet-accent-primary), var(--wallet-accent-secondary));
  border-radius: 50%;
  opacity: 0.1;
  animation: float 7s ease-in-out infinite;
}

.element-1 {
  width: 90px;
  height: 90px;
  top: 20%;
  left: 8%;
  animation-delay: 0s;
}

.element-2 {
  width: 110px;
  height: 110px;
  top: 65%;
  right: 12%;
  animation-delay: 2s;
}

.element-3 {
  width: 70px;
  height: 70px;
  bottom: 25%;
  left: 18%;
  animation-delay: 4s;
}

.element-4 {
  width: 95px;
  height: 95px;
  top: 8%;
  right: 28%;
  animation-delay: 1s;
}

@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-25px) rotate(180deg); }
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
  background: var(--bg-accent-subtle);
  border: 1px solid var(--border-color-web3);
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
  background: linear-gradient(135deg, var(--wallet-accent-primary) 0%, var(--wallet-accent-secondary) 100%);
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
  color: var(--wallet-accent-primary);
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
  background: linear-gradient(135deg, var(--wallet-accent-primary) 0%, var(--wallet-accent-secondary) 100%);
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
  box-shadow: 0 10px 25px rgba(var(--wallet-accent-primary-rgb), 0.3);
}

.btn-secondary {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: transparent;
  color: var(--text-primary);
  padding: 0.875rem 1.5rem;
  border: 1px solid var(--border-color-secondary);
  border-radius: 0.5rem;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
}

.btn-secondary:hover {
  background: rgba(var(--text-primary-rgb), 0.1);
  border-color: rgba(var(--text-primary-rgb), 0.3);
}

/* Wallet Illustration */
.wallet-illustration {
  position: relative;
  width: 400px;
  height: 400px;
  margin: 0 auto;
}

.central-wallet {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 120px;
  height: 120px;
}

.wallet-core {
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, var(--wallet-accent-primary), var(--wallet-accent-secondary));
  border-radius: 20px;
  animation: walletPulse 4s ease-in-out infinite;
  position: relative;
}

.wallet-core::before {
  content: '';
  position: absolute;
  top: 20%;
  left: 20%;
  right: 20%;
  bottom: 20%;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
}

.security-ring {
  position: absolute;
  top: -20px;
  left: -20px;
  right: -20px;
  bottom: -20px;
  border: 3px solid rgba(var(--wallet-accent-primary-rgb), 0.3);
  border-radius: 30px;
  animation: securityRotate 15s linear infinite;
}

@keyframes walletPulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
}

@keyframes securityRotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.asset-orbits {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.orbit {
  position: absolute;
  border: 2px solid rgba(var(--wallet-accent-primary-rgb), 0.2);
  border-radius: 50%;
  animation: orbitRotate 20s linear infinite;
}

.orbit-1 {
  top: 20%;
  left: 20%;
  right: 20%;
  bottom: 20%;
  animation-duration: 15s;
}

.orbit-2 {
  top: 10%;
  left: 10%;
  right: 10%;
  bottom: 10%;
  animation-duration: 25s;
  animation-direction: reverse;
}

.orbit-3 {
  top: 5%;
  left: 5%;
  right: 5%;
  bottom: 5%;
  animation-duration: 30s;
}

@keyframes orbitRotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.asset-node {
  position: absolute;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(10px);
  animation: nodeCounter 20s linear infinite;
}

.btc {
  background: rgba(247, 147, 26, 0.2);
  border: 2px solid rgba(247, 147, 26, 0.5);
  color: #f7931a;
  top: -25px;
  left: 50%;
  transform: translateX(-50%);
}

.eth {
  background: rgba(98, 126, 234, 0.2);
  border: 2px solid rgba(98, 126, 234, 0.5);
  color: #627eea;
  top: 50%;
  right: -25px;
  transform: translateY(-50%);
}

.usdt {
  background: rgba(38, 160, 95, 0.2);
  border: 2px solid rgba(38, 160, 95, 0.5);
  color: #26a05f;
  bottom: -25px;
  left: 50%;
  transform: translateX(-50%);
}

@keyframes nodeCounter {
  from { transform: rotate(0deg) translateX(50px) rotate(0deg); }
  to { transform: rotate(-360deg) translateX(50px) rotate(360deg); }
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
  background: linear-gradient(90deg, transparent, rgba(var(--wallet-accent-primary-rgb), 0.5), transparent);
  height: 2px;
}

.line-1 {
  top: 50%;
  left: 0;
  right: 0;
  animation: lineFlow 5s ease-in-out infinite;
}

.line-2 {
  top: 0;
  bottom: 0;
  left: 50%;
  width: 2px;
  background: linear-gradient(180deg, transparent, rgba(var(--wallet-accent-primary-rgb), 0.5), transparent);
  animation: lineFlow 5s ease-in-out infinite 1.5s;
}

.line-3 {
  top: 25%;
  bottom: 25%;
  left: 25%;
  right: 25%;
  width: 2px;
  background: linear-gradient(45deg, transparent, rgba(var(--wallet-accent-secondary-rgb), 0.5), transparent);
  transform: rotate(45deg);
  animation: lineFlow 5s ease-in-out infinite 3s;
}

@keyframes lineFlow {
  0%, 100% { opacity: 0.3; }
  50% { opacity: 1; }
}

/* Solutions Section */
.solutions-section {
  padding: 6rem 0;
  background: var(--bg-secondary);
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
  background: rgba(var(--wallet-accent-primary-rgb), 0.1);
  border: 1px solid rgba(var(--wallet-accent-primary-rgb), 0.2);
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  font-size: 0.875rem;
  font-weight: 500;
  margin-bottom: 1rem;
  color: var(--wallet-accent-primary);
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: var(--text-primary);
}

.section-description {
  font-size: 1.125rem;
  color: var(--text-secondary);
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
  background: linear-gradient(135deg, var(--card-bg-web3) 0%, rgba(var(--wallet-accent-primary-rgb), 0.03) 100%);
  border: 1px solid rgba(var(--wallet-accent-primary-rgb), 0.2);
  border-radius: 1rem;
  padding: 2rem;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 20px rgba(var(--wallet-accent-primary-rgb), 0.05);
}

.solution-card:hover {
  transform: translateY(-5px);
  background: linear-gradient(135deg, rgba(var(--wallet-accent-primary-rgb), 0.08) 0%, rgba(var(--wallet-accent-secondary-rgb), 0.05) 50%, rgba(var(--wallet-accent-primary-rgb), 0.03) 100%);
  border-color: rgba(var(--wallet-accent-primary-rgb), 0.4);
  box-shadow: 0 20px 40px rgba(var(--wallet-accent-primary-rgb), 0.15), 0 8px 32px rgba(var(--wallet-accent-secondary-rgb), 0.1);
}

.solution-card.featured {
  border-color: rgba(var(--wallet-accent-primary-rgb), 0.4);
  background: linear-gradient(135deg, rgba(var(--wallet-accent-primary-rgb), 0.12) 0%, rgba(var(--wallet-accent-secondary-rgb), 0.08) 100%);
  box-shadow: 0 8px 32px rgba(var(--wallet-accent-primary-rgb), 0.12), 0 4px 16px rgba(var(--wallet-accent-secondary-rgb), 0.08);
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
  background: linear-gradient(135deg, var(--wallet-accent-primary), var(--wallet-accent-secondary));
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}

.solution-category {
  font-size: 0.875rem;
  color: var(--wallet-accent-primary);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.solution-card h3 {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: var(--text-primary);
}

.solution-card p {
  color: var(--text-secondary);
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
  background: rgba(var(--wallet-accent-primary-rgb), 0.1);
  padding: 0.5rem 0.75rem;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  color: var(--text-primary);
}

.feature-icon {
  font-size: 1rem;
}

.solution-metrics {
  display: flex;
  gap: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(var(--wallet-accent-primary-rgb), 0.1);
}

.metric {
  text-align: center;
}

.metric-value {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--wallet-accent-primary);
  display: block;
}

.metric-label {
  font-size: 0.75rem;
  color: var(--text-muted);
  margin-top: 0.25rem;
}

/* Technology Section */
.technology-section {
  padding: 6rem 0;
  background: var(--bg-tertiary);
}

.tech-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.tech-category {
  background: linear-gradient(135deg, var(--card-bg-web3) 0%, rgba(var(--wallet-accent-secondary-rgb), 0.03) 100%);
  border: 1px solid rgba(var(--wallet-accent-secondary-rgb), 0.2);
  border-radius: 1rem;
  padding: 2rem;
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 20px rgba(var(--wallet-accent-secondary-rgb), 0.05);
  transition: all 0.3s ease;
}

.tech-category:hover {
  transform: translateY(-3px);
  background: linear-gradient(135deg, rgba(var(--wallet-accent-secondary-rgb), 0.08) 0%, rgba(var(--wallet-accent-primary-rgb), 0.05) 100%);
  border-color: rgba(var(--wallet-accent-secondary-rgb), 0.4);
  box-shadow: 0 12px 32px rgba(var(--wallet-accent-secondary-rgb), 0.15);
}

.tech-category h3 {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: var(--wallet-accent-primary);
}

.tech-items {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.tech-item {
  background: rgba(var(--wallet-accent-primary-rgb), 0.1);
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  color: var(--text-primary);
  font-size: 0.875rem;
  border: 1px solid rgba(var(--wallet-accent-primary-rgb), 0.2);
  transition: all 0.3s ease;
}

.tech-item:hover {
  background: rgba(var(--wallet-accent-primary-rgb), 0.2);
  border-color: rgba(var(--wallet-accent-primary-rgb), 0.3);
}

/* Features Section */
.features-section {
  padding: 6rem 0;
  background: var(--bg-secondary);
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.feature-card {
  background: linear-gradient(135deg, var(--card-bg-web3) 0%, rgba(var(--wallet-accent-primary-rgb), 0.02) 50%, rgba(var(--wallet-accent-secondary-rgb), 0.02) 100%);
  border: 1px solid rgba(var(--wallet-accent-primary-rgb), 0.15);
  border-radius: 1rem;
  padding: 2rem;
  text-align: center;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 20px rgba(var(--wallet-accent-primary-rgb), 0.04);
}

.feature-card:hover {
  transform: translateY(-5px);
  background: linear-gradient(135deg, rgba(var(--wallet-accent-primary-rgb), 0.08) 0%, rgba(var(--wallet-accent-secondary-rgb), 0.06) 50%, rgba(var(--wallet-accent-primary-rgb), 0.04) 100%);
  border-color: rgba(var(--wallet-accent-primary-rgb), 0.35);
  box-shadow: 0 20px 40px rgba(var(--wallet-accent-primary-rgb), 0.12), 0 8px 32px rgba(var(--wallet-accent-secondary-rgb), 0.08);
}

.feature-icon {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, var(--wallet-accent-primary), var(--wallet-accent-secondary));
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
  color: var(--text-primary);
}

.feature-card p {
  color: var(--text-secondary);
  line-height: 1.6;
}

/* Security Section */
.security-section {
  padding: 6rem 0;
  background: var(--bg-tertiary);
}

.security-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.security-card {
  background: linear-gradient(135deg, var(--card-bg-web3) 0%, rgba(var(--wallet-accent-secondary-rgb), 0.03) 100%);
  border: 1px solid rgba(var(--wallet-accent-secondary-rgb), 0.18);
  border-radius: 1rem;
  padding: 2rem;
  text-align: center;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 20px rgba(var(--wallet-accent-secondary-rgb), 0.06);
}

.security-card:hover {
  transform: translateY(-5px);
  background: linear-gradient(135deg, rgba(var(--wallet-accent-secondary-rgb), 0.08) 0%, rgba(var(--wallet-accent-primary-rgb), 0.05) 100%);
  border-color: rgba(var(--wallet-accent-secondary-rgb), 0.4);
  box-shadow: 0 20px 40px rgba(var(--wallet-accent-secondary-rgb), 0.15), 0 8px 32px rgba(var(--wallet-accent-primary-rgb), 0.08);
}

.security-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.security-card h3 {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: var(--text-primary);
}

.security-card p {
  color: var(--text-secondary);
  line-height: 1.6;
}

/* CTA Section */
.cta-section {
  padding: 6rem 0;
  background: linear-gradient(135deg, rgba(var(--wallet-accent-primary-rgb), 0.1) 0%, rgba(var(--wallet-accent-secondary-rgb), 0.1) 100%);
  border-top: 1px solid rgba(var(--wallet-accent-primary-rgb), 0.1);
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
  color: var(--text-primary);
}

.cta-content p {
  font-size: 1.125rem;
  color: var(--text-secondary);
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
  
  .wallet-illustration {
    width: 300px;
    height: 300px;
  }
  
  .solutions-grid,
  .tech-grid,
  .features-grid,
  .security-grid {
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