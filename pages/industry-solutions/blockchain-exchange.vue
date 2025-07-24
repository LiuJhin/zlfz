<template>
  <div class="blockchain-exchange-page">
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
            <span class="badge-icon">🔗</span>
            <span>区块链交易所解决方案</span>
          </div>
          <h1 class="hero-title">
            构建下一代
            <span class="gradient-text">数字资产交易平台</span>
          </h1>
          <p class="hero-description">
            基于区块链技术的安全、高效、透明的数字资产交易平台，
            提供现货交易、期货合约、DeFi集成等全方位交易服务，
            助力构建Web3金融生态。
          </p>
          <div class="hero-stats">
            <div class="stat-item">
              <div class="stat-number">1000+</div>
              <div class="stat-label">交易对</div>
            </div>
            <div class="stat-item">
              <div class="stat-number">99.99%</div>
              <div class="stat-label">系统稳定性</div>
            </div>
            <div class="stat-item">
              <div class="stat-number">10M+</div>
              <div class="stat-label">日交易量</div>
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
          <div class="exchange-illustration">
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
                  <path
                    d="M2 12L12 17L22 12"
                    stroke="currentColor"
                    stroke-width="2"
                  />
                </svg>
              </div>
              <div class="satellite satellite-2">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                    stroke="currentColor"
                    stroke-width="2"
                  />
                </svg>
              </div>
              <div class="satellite satellite-3">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 1L21.5 6.5V17.5L12 23L2.5 17.5V6.5L12 1Z"
                    stroke="currentColor"
                    stroke-width="2"
                  />
                </svg>
              </div>
              <div class="satellite satellite-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M13 2L3 14H12L11 22L21 10H12L13 2Z"
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
          <h2 class="section-title">全方位区块链交易所服务</h2>
          <p class="section-description">
            从现货交易到衍生品，从DeFi集成到跨链互操作，
            我们提供覆盖数字资产交易全生命周期的技术解决方案。
          </p>
        </div>

        <div class="solutions-grid">
          <div class="solution-card featured">
            <div class="card-glow"></div>
            <div class="card-content">
              <div class="card-header">
                <div class="solution-icon">
                  <div class="icon-bg"></div>
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
                    <path
                      d="M2 12L12 17L22 12"
                      stroke="currentColor"
                      stroke-width="2"
                    />
                  </svg>
                </div>
                <div class="solution-category">现货交易</div>
              </div>
              <h3>高性能现货交易引擎</h3>
              <p>
                支持百万级TPS的高频交易引擎，提供深度流动性和极低延迟的交易体验。
              </p>
              <div class="solution-features">
                <div class="feature-item">
                  <span class="feature-icon">⚡</span>
                  <span>毫秒级撮合</span>
                </div>
                <div class="feature-item">
                  <span class="feature-icon">🔒</span>
                  <span>多重安全</span>
                </div>
                <div class="feature-item">
                  <span class="feature-icon">🌐</span>
                  <span>全球部署</span>
                </div>
              </div>
              <div class="solution-metrics">
                <div class="metric">
                  <span class="metric-value">1M+</span>
                  <span class="metric-label">TPS</span>
                </div>
                <div class="metric">
                  <span class="metric-value">0.1ms</span>
                  <span class="metric-label">延迟</span>
                </div>
              </div>
            </div>
          </div>

          <div class="solution-card">
            <div class="card-glow"></div>
            <div class="card-content">
              <div class="card-header">
                <div class="solution-icon">
                  <div class="icon-bg"></div>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                      stroke="currentColor"
                      stroke-width="2"
                    />
                  </svg>
                </div>
                <div class="solution-category">衍生品交易</div>
              </div>
              <h3>期货合约平台</h3>
              <p>
                支持永续合约、期权等多种衍生品交易，提供灵活的杠杆和风险管理工具。
              </p>
              <div class="solution-features">
                <div class="feature-item">
                  <span class="feature-icon">📊</span>
                  <span>多种合约</span>
                </div>
                <div class="feature-item">
                  <span class="feature-icon">⚖️</span>
                  <span>智能风控</span>
                </div>
              </div>
            </div>
          </div>

          <div class="solution-card">
            <div class="card-glow"></div>
            <div class="card-content">
              <div class="card-header">
                <div class="solution-icon">
                  <div class="icon-bg"></div>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 1L21.5 6.5V17.5L12 23L2.5 17.5V6.5L12 1Z"
                      stroke="currentColor"
                      stroke-width="2"
                    />
                  </svg>
                </div>
                <div class="solution-category">DeFi集成</div>
              </div>
              <h3>去中心化金融</h3>
              <p>
                集成AMM、流动性挖矿、借贷等DeFi协议，构建完整的去中心化金融生态。
              </p>
              <div class="solution-features">
                <div class="feature-item">
                  <span class="feature-icon">🔄</span>
                  <span>AMM协议</span>
                </div>
                <div class="feature-item">
                  <span class="feature-icon">💎</span>
                  <span>流动性挖矿</span>
                </div>
              </div>
            </div>
          </div>

          <div class="solution-card">
            <div class="card-glow"></div>
            <div class="card-content">
              <div class="card-header">
                <div class="solution-icon">
                  <div class="icon-bg"></div>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M13 2L3 14H12L11 22L21 10H12L13 2Z"
                      stroke="currentColor"
                      stroke-width="2"
                    />
                  </svg>
                </div>
                <div class="solution-category">跨链技术</div>
              </div>
              <h3>跨链桥接</h3>
              <p>
                支持多链资产互操作，实现不同区块链网络间的无缝资产转移和交易。
              </p>
              <div class="solution-features">
                <div class="feature-item">
                  <span class="feature-icon">🌉</span>
                  <span>多链支持</span>
                </div>
                <div class="feature-item">
                  <span class="feature-icon">🔐</span>
                  <span>安全桥接</span>
                </div>
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
          <h2 class="section-title">企业级技术栈</h2>
          <p class="section-description">
            采用微服务架构和云原生技术，确保系统的高可用性、可扩展性和安全性。
          </p>
        </div>

        <div class="tech-grid">
          <div class="tech-category">
            <div class="category-header">
              <div class="category-icon">
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
                  <path
                    d="M2 12L12 17L22 12"
                    stroke="currentColor"
                    stroke-width="2"
                  />
                </svg>
              </div>
              <h3>区块链层</h3>
            </div>
            <div class="tech-items">
              <div class="tech-item">
                <span class="tech-dot"></span>
                <span>Ethereum</span>
              </div>
              <div class="tech-item">
                <span class="tech-dot"></span>
                <span>Binance Smart Chain</span>
              </div>
              <div class="tech-item">
                <span class="tech-dot"></span>
                <span>Polygon</span>
              </div>
              <div class="tech-item">
                <span class="tech-dot"></span>
                <span>Solana</span>
              </div>
            </div>
          </div>

          <div class="tech-category">
            <div class="category-header">
              <div class="category-icon">
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
              <h3>交易引擎</h3>
            </div>
            <div class="tech-items">
              <div class="tech-item">
                <span class="tech-dot"></span>
                <span>高频撮合引擎</span>
              </div>
              <div class="tech-item">
                <span class="tech-dot"></span>
                <span>内存数据库</span>
              </div>
              <div class="tech-item">
                <span class="tech-dot"></span>
                <span>分布式架构</span>
              </div>
              <div class="tech-item">
                <span class="tech-dot"></span>
                <span>负载均衡</span>
              </div>
            </div>
          </div>

          <div class="tech-category">
            <div class="category-header">
              <div class="category-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                    stroke="currentColor"
                    stroke-width="2"
                  />
                </svg>
              </div>
              <h3>安全防护</h3>
            </div>
            <div class="tech-items">
              <div class="tech-item">
                <span class="tech-dot"></span>
                <span>多重签名</span>
              </div>
              <div class="tech-item">
                <span class="tech-dot"></span>
                <span>冷热钱包分离</span>
              </div>
              <div class="tech-item">
                <span class="tech-dot"></span>
                <span>DDoS防护</span>
              </div>
              <div class="tech-item">
                <span class="tech-dot"></span>
                <span>实时监控</span>
              </div>
            </div>
          </div>

          <div class="tech-category">
            <div class="category-header">
              <div class="category-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M21 16V8A2 2 0 0 0 19 6H5A2 2 0 0 0 3 8V16A2 2 0 0 0 5 18H19A2 2 0 0 0 21 16Z"
                    stroke="currentColor"
                    stroke-width="2"
                  />
                  <path d="M7 10H17" stroke="currentColor" stroke-width="2" />
                </svg>
              </div>
              <h3>基础设施</h3>
            </div>
            <div class="tech-items">
              <div class="tech-item">
                <span class="tech-dot"></span>
                <span>Kubernetes</span>
              </div>
              <div class="tech-item">
                <span class="tech-dot"></span>
                <span>Docker</span>
              </div>
              <div class="tech-item">
                <span class="tech-dot"></span>
                <span>Redis Cluster</span>
              </div>
              <div class="tech-item">
                <span class="tech-dot"></span>
                <span>Kafka</span>
              </div>
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
          <h2 class="section-title">领先的交易所功能</h2>
          <p class="section-description">
            集成最新的区块链技术和金融创新，为用户提供安全、高效、便捷的数字资产交易体验。
          </p>
        </div>

        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-glow"></div>
            <div class="feature-content">
              <div class="feature-icon">
                <div class="icon-bg"></div>
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
              <h3>高性能撮合</h3>
              <p>
                毫秒级订单撮合，支持百万级并发交易，确保交易的实时性和准确性。
              </p>
              <div class="feature-stats">
                <span class="stat">1M+ TPS</span>
                <span class="stat">0.1ms 延迟</span>
              </div>
            </div>
          </div>

          <div class="feature-card">
            <div class="feature-glow"></div>
            <div class="feature-content">
              <div class="feature-icon">
                <div class="icon-bg"></div>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                    stroke="currentColor"
                    stroke-width="2"
                  />
                </svg>
              </div>
              <h3>多重安全</h3>
              <p>
                采用多重签名、冷热钱包分离、实时风控等多层安全机制保护用户资产。
              </p>
              <div class="feature-stats">
                <span class="stat">银行级安全</span>
                <span class="stat">24/7监控</span>
              </div>
            </div>
          </div>

          <div class="feature-card">
            <div class="feature-glow"></div>
            <div class="feature-content">
              <div class="feature-icon">
                <div class="icon-bg"></div>
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
              <h3>流动性聚合</h3>
              <p>整合多个流动性提供商，确保深度流动性和最优价格执行。</p>
              <div class="feature-stats">
                <span class="stat">深度流动性</span>
                <span class="stat">最优价格</span>
              </div>
            </div>
          </div>

          <div class="feature-card">
            <div class="feature-glow"></div>
            <div class="feature-content">
              <div class="feature-icon">
                <div class="icon-bg"></div>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M13 2L3 14H12L11 22L21 10H12L13 2Z"
                    stroke="currentColor"
                    stroke-width="2"
                  />
                </svg>
              </div>
              <h3>智能合约</h3>
              <p>基于智能合约的自动化交易和结算，提高交易透明度和效率。</p>
              <div class="feature-stats">
                <span class="stat">自动执行</span>
                <span class="stat">透明可信</span>
              </div>
            </div>
          </div>

          <div class="feature-card">
            <div class="feature-glow"></div>
            <div class="feature-content">
              <div class="feature-icon">
                <div class="icon-bg"></div>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M21 16V8A2 2 0 0 0 19 6H5A2 2 0 0 0 3 8V16A2 2 0 0 0 5 18H19A2 2 0 0 0 21 16Z"
                    stroke="currentColor"
                    stroke-width="2"
                  />
                  <path d="M7 10H17" stroke="currentColor" stroke-width="2" />
                </svg>
              </div>
              <h3>API接口</h3>
              <p>提供完整的REST和WebSocket API，支持程序化交易和第三方集成。</p>
              <div class="feature-stats">
                <span class="stat">RESTful API</span>
                <span class="stat">WebSocket</span>
              </div>
            </div>
          </div>

          <div class="feature-card">
            <div class="feature-glow"></div>
            <div class="feature-content">
              <div class="feature-icon">
                <div class="icon-bg"></div>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 1L21.5 6.5V17.5L12 23L2.5 17.5V6.5L12 1Z"
                    stroke="currentColor"
                    stroke-width="2"
                  />
                </svg>
              </div>
              <h3>合规支持</h3>
              <p>内置KYC/AML合规模块，支持多国监管要求和合规报告。</p>
              <div class="feature-stats">
                <span class="stat">KYC/AML</span>
                <span class="stat">全球合规</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="cta-background">
        <div class="cta-particles"></div>
        <div class="cta-glow"></div>
      </div>
      <div class="container">
        <div class="cta-content">
          <div class="cta-badge">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
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
              <path
                d="M2 12L12 17L22 12"
                stroke="currentColor"
                stroke-width="2"
              />
            </svg>
            <span>开始您的区块链之旅</span>
          </div>
          <h2>准备构建您的区块链交易所？</h2>
          <p>
            联系我们的专家团队，获取定制化的解决方案和技术支持。从概念设计到部署上线，我们提供全方位的技术服务。
          </p>
          <div class="cta-features">
            <div class="cta-feature">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path
                  d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                  stroke="currentColor"
                  stroke-width="2"
                />
              </svg>
              <span>免费技术咨询</span>
            </div>
            <div class="cta-feature">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
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
              <span>定制化解决方案</span>
            </div>
            <div class="cta-feature">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path
                  d="M13 2L3 14H12L11 22L21 10H12L13 2Z"
                  stroke="currentColor"
                  stroke-width="2"
                />
              </svg>
              <span>快速部署上线</span>
            </div>
          </div>
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
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path
                  d="M21 15V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V15M7 10L12 15L17 10M12 15V3"
                  stroke="currentColor"
                  stroke-width="2"
                />
              </svg>
              <span>下载白皮书</span>
            </a>
            <a href="#solutions" class="btn-outline">
              <span>了解更多</span>
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
  title: "区块链交易所解决方案 - 中联方舟",
  meta: [
    {
      name: "description",
      content:
        "专业的区块链交易所技术解决方案，提供高性能交易引擎、多重安全防护、DeFi集成等全方位服务。",
    },
    {
      name: "keywords",
      content: "区块链交易所,数字资产交易,DeFi,智能合约,加密货币",
    },
  ],
});
</script>

<style scoped>
/* 复用原有的样式结构，调整颜色主题为区块链风格 */
.blockchain-exchange-page {
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
      circle at 30% 20%,
      rgba(59, 130, 246, 0.1) 0%,
      transparent 50%
    ),
    radial-gradient(
      circle at 70% 80%,
      rgba(139, 92, 246, 0.1) 0%,
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
  background: linear-gradient(45deg, #3b82f6, #8b5cf6);
  border-radius: 50%;
  opacity: 0.1;
  animation: float 6s ease-in-out infinite;
}

.element-1 {
  width: 80px;
  height: 80px;
  top: 20%;
  left: 10%;
  animation-delay: 0s;
}

.element-2 {
  width: 120px;
  height: 120px;
  top: 60%;
  right: 15%;
  animation-delay: 2s;
}

.element-3 {
  width: 60px;
  height: 60px;
  bottom: 30%;
  left: 20%;
  animation-delay: 4s;
}

.element-4 {
  width: 100px;
  height: 100px;
  top: 10%;
  right: 30%;
  animation-delay: 1s;
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-20px) rotate(180deg);
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
  background: rgba(59, 130, 246, 0.1);
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
  background: linear-gradient(
    135deg,
    var(--exchange-accent-primary) 0%,
    var(--exchange-accent-secondary) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-description {
  font-size: 1.125rem;
  line-height: 1.7;
  color: #94a3b8;
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
  color: var(--exchange-accent-primary);
  display: block;
}

.stat-label {
  font-size: 0.875rem;
  color: #64748b;
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
  background: linear-gradient(
    135deg,
    var(--exchange-accent-primary) 0%,
    var(--exchange-accent-secondary) 100%
  );
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
  box-shadow: 0 10px 25px rgba(59, 130, 246, 0.3);
}

.btn-secondary {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: transparent;
  color: #e2e8f0;
  padding: 0.875rem 1.5rem;
  border: 1px solid rgba(226, 232, 240, 0.2);
  border-radius: 0.5rem;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
}

.btn-secondary:hover {
  background: rgba(226, 232, 240, 0.1);
  border-color: rgba(226, 232, 240, 0.3);
}

/* Exchange Illustration */
.exchange-illustration {
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
  width: 80px;
  height: 80px;
}

.node-core {
  width: 100%;
  height: 100%;
  background: linear-gradient(
    135deg,
    var(--exchange-accent-primary),
    var(--exchange-accent-secondary)
  );
  border-radius: 50%;
  animation: pulse 2s ease-in-out infinite;
}

.node-ring {
  position: absolute;
  top: -10px;
  left: -10px;
  right: -10px;
  bottom: -10px;
  border: 2px solid rgba(59, 130, 246, 0.3);
  border-radius: 50%;
  animation: rotate 10s linear infinite;
}

@keyframes pulse {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
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

.connection-lines {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.line {
  position: absolute;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(59, 130, 246, 0.5),
    transparent
  );
  height: 2px;
}

.line-1 {
  top: 50%;
  left: 0;
  right: 0;
  animation: flow 3s ease-in-out infinite;
}

.line-2 {
  top: 0;
  bottom: 0;
  left: 50%;
  width: 2px;
  background: linear-gradient(
    180deg,
    transparent,
    rgba(59, 130, 246, 0.5),
    transparent
  );
  animation: flow 3s ease-in-out infinite 0.5s;
}

.line-3 {
  top: 25%;
  bottom: 25%;
  left: 25%;
  right: 25%;
  width: 2px;
  background: linear-gradient(
    45deg,
    transparent,
    rgba(139, 92, 246, 0.5),
    transparent
  );
  transform: rotate(45deg);
  animation: flow 3s ease-in-out infinite 1s;
}

.line-4 {
  top: 25%;
  bottom: 25%;
  left: 25%;
  right: 25%;
  width: 2px;
  background: linear-gradient(
    45deg,
    transparent,
    rgba(139, 92, 246, 0.5),
    transparent
  );
  transform: rotate(-45deg);
  animation: flow 3s ease-in-out infinite 1.5s;
}

@keyframes flow {
  0%,
  100% {
    opacity: 0.3;
  }
  50% {
    opacity: 1;
  }
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
  background: rgba(15, 15, 35, 0.8);
  border: 2px solid rgba(59, 130, 246, 0.3);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #3b82f6;
  backdrop-filter: blur(10px);
}

.satellite-1 {
  top: 20%;
  left: 20%;
  animation: orbit 8s linear infinite;
}

.satellite-2 {
  top: 20%;
  right: 20%;
  animation: orbit 8s linear infinite 2s;
}

.satellite-3 {
  bottom: 20%;
  right: 20%;
  animation: orbit 8s linear infinite 4s;
}

.satellite-4 {
  bottom: 20%;
  left: 20%;
  animation: orbit 8s linear infinite 6s;
}

@keyframes orbit {
  from {
    transform: rotate(0deg) translateX(50px) rotate(0deg);
  }
  to {
    transform: rotate(360deg) translateX(50px) rotate(-360deg);
  }
}

/* Solutions Section */
.solutions-section {
  padding: 8rem 0;
  background: var(--bg-primary);
  position: relative;
  overflow: hidden;
}

.solutions-section::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(
      circle at 20% 30%,
      rgba(var(--exchange-accent-primary-rgb), 0.06) 0%,
      transparent 50%
    ),
    radial-gradient(
      circle at 80% 70%,
      rgba(var(--exchange-accent-secondary-rgb), 0.06) 0%,
      transparent 50%
    ),
    conic-gradient(
      from 45deg at 50% 50%,
      transparent 0deg,
      rgba(var(--exchange-accent-primary-rgb), 0.02) 90deg,
      transparent 180deg,
      rgba(var(--exchange-accent-secondary-rgb), 0.02) 270deg,
      transparent 360deg
    );
  pointer-events: none;
}

.solutions-section::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    135deg,
    transparent 0%,
    var(--bg-secondary) 50%,
    transparent 100%
  );
  opacity: 0.3;
  pointer-events: none;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 1;
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  background: rgba(var(--exchange-accent-primary-rgb), 0.1);
  border: 1px solid rgba(var(--exchange-accent-primary-rgb), 0.2);
  padding: 0.75rem 1.5rem;
  border-radius: 2rem;
  font-size: 0.875rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: var(--exchange-accent-primary);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  cursor: pointer;
}

.section-badge::before {
  content: "🔗";
  font-size: 1.2rem;
  transition: transform 0.3s ease;
}

.section-badge::after {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(var(--exchange-accent-primary-rgb), 0.1),
    transparent
  );
  transition: left 0.6s ease;
}

.section-badge:hover {
  background: rgba(var(--exchange-accent-primary-rgb), 0.15);
  border-color: rgba(var(--exchange-accent-primary-rgb), 0.3);
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(var(--exchange-accent-primary-rgb), 0.2);
}

.section-badge:hover::before {
  transform: scale(1.1) rotate(5deg);
}

.section-badge:hover::after {
  left: 100%;
}

.section-title {
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  color: var(--text-primary);
  background: linear-gradient(
    135deg,
    var(--exchange-accent-primary) 0%,
    var(--exchange-accent-secondary) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.section-description {
  font-size: 1.25rem;
  color: var(--text-secondary);
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.8;
  font-weight: 400;
}

.solutions-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2.5rem;
  margin-top: 4rem;
}

.solution-card {
  position: relative;
  border-radius: 1.5rem;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
  height: 100%;
  background: linear-gradient(
    135deg,
    rgba(var(--exchange-accent-primary-rgb), 0.03) 0%,
    rgba(var(--exchange-accent-secondary-rgb), 0.03) 100%
  );
}

.card-glow {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    135deg,
    rgba(var(--exchange-accent-primary-rgb), 0.1) 0%,
    rgba(var(--exchange-accent-secondary-rgb), 0.1) 100%
  );
  border-radius: 1.5rem;
  opacity: 0;
  transition: all 0.4s ease;
  filter: blur(20px);
  transform: scale(0.8);
}

.card-content {
  position: relative;
  z-index: 2;
  background: linear-gradient(
    135deg,
    var(--card-bg-web3) 0%,
    rgba(var(--exchange-accent-primary-rgb), 0.02) 50%,
    var(--card-bg-web3) 100%
  );
  border: 1px solid rgba(var(--exchange-accent-primary-rgb), 0.15);
  border-radius: 1.5rem;
  padding: 2.5rem;
  backdrop-filter: blur(20px);
  height: 100%;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(var(--exchange-accent-primary-rgb), 0.05);
}

.card-content::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    135deg,
    rgba(var(--exchange-accent-primary-rgb), 0.02) 0%,
    rgba(var(--exchange-accent-secondary-rgb), 0.02) 100%
  );
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
}

.solution-card:hover .card-glow {
  opacity: 1;
  transform: scale(1.05);
}

.solution-card:hover .card-content {
  transform: translateY(-8px);
  border-color: rgba(var(--exchange-accent-primary-rgb), 0.4);
  box-shadow: 0 25px 50px rgba(var(--exchange-accent-primary-rgb), 0.15),
              0 0 0 1px rgba(var(--exchange-accent-secondary-rgb), 0.1);
  background: linear-gradient(
    135deg,
    var(--card-bg-web3) 0%,
    rgba(var(--exchange-accent-primary-rgb), 0.05) 50%,
    var(--card-bg-web3) 100%
  );
}

.solution-card:hover .card-content::before {
  opacity: 1;
}

.solution-card.featured .card-content {
  border-color: rgba(var(--exchange-accent-primary-rgb), 0.3);
  background: linear-gradient(
    135deg,
    rgba(var(--exchange-accent-primary-rgb), 0.08) 0%,
    rgba(var(--exchange-accent-secondary-rgb), 0.08) 100%
  );
}

.solution-card.featured .card-content::after {
  content: "⭐";
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-size: 1.5rem;
  opacity: 0.7;
}

.card-header {
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.icon-bg {
  width: 70px;
  height: 70px;
  border-radius: 1.25rem;
  position: relative;
  flex-shrink: 0;
  overflow: hidden;
}

.icon-bg::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    135deg,
    var(--exchange-accent-primary),
    var(--exchange-accent-secondary)
  );
  transition: all 0.3s ease;
}

.solution-icon {
  position: relative;
  z-index: 2;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
  transition: all 0.3s ease;
}

.solution-card:hover .icon-bg {
  transform: scale(1.1) rotate(5deg);
  box-shadow: 0 12px 35px rgba(var(--exchange-accent-primary-rgb), 0.4);
}

.solution-card:hover .icon-bg::before {
  background: linear-gradient(
    135deg,
    var(--exchange-accent-secondary),
    var(--exchange-accent-primary)
  );
}

.solution-category {
  font-size: 0.875rem;
  color: var(--exchange-accent-primary);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 0.5rem;
}

.solution-card h3 {
  font-size: 1.75rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: var(--text-primary);
  line-height: 1.3;
}

.solution-card p {
  color: var(--text-secondary);
  line-height: 1.7;
  margin-bottom: 2rem;
  font-size: 1rem;
}

.solution-features {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 2rem;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  background: rgba(var(--exchange-accent-primary-rgb), 0.1);
  padding: 0.75rem 1rem;
  border-radius: 0.75rem;
  font-size: 0.875rem;
  color: var(--text-primary);
  border: 1px solid rgba(var(--exchange-accent-primary-rgb), 0.2);
  transition: all 0.3s ease;
  font-weight: 500;
}

.feature-item:hover {
  background: rgba(var(--exchange-accent-primary-rgb), 0.15);
  border-color: rgba(var(--exchange-accent-primary-rgb), 0.3);
  transform: translateY(-2px);
}

.feature-icon {
  font-size: 1.1rem;
  filter: grayscale(0);
}

.solution-metrics {
  display: flex;
  gap: 2rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(var(--exchange-accent-primary-rgb), 0.15);
}

.metric {
  text-align: center;
  flex: 1;
}

.metric-value {
  font-size: 1.75rem;
  font-weight: 800;
  color: var(--exchange-accent-primary);
  display: block;
  margin-bottom: 0.25rem;
}

.metric-label {
  font-size: 0.8rem;
  color: var(--text-muted);
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

/* Technology Section */
.technology-section {
  padding: 8rem 0;
  background: var(--bg-secondary);
  position: relative;
  overflow: hidden;
}

.technology-section::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(
      circle at 15% 25%,
      rgba(var(--exchange-accent-primary-rgb), 0.08) 0%,
      transparent 45%
    ),
    radial-gradient(
      circle at 85% 75%,
      rgba(var(--exchange-accent-secondary-rgb), 0.08) 0%,
      transparent 45%
    ),
    linear-gradient(
      45deg,
      transparent 25%,
      rgba(var(--exchange-accent-primary-rgb), 0.03) 50%,
      transparent 75%
    ),
    conic-gradient(
      from 180deg at 50% 50%,
      transparent 0deg,
      rgba(var(--exchange-accent-secondary-rgb), 0.02) 120deg,
      transparent 240deg
    );
  pointer-events: none;
}

.technology-section::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    135deg,
    var(--bg-primary) 0%,
    transparent 30%,
    transparent 70%,
    var(--bg-primary) 100%
  );
  opacity: 0.4;
  pointer-events: none;
}

.tech-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2.5rem;
  position: relative;
  z-index: 1;
}

.tech-category {
  background: linear-gradient(
    135deg,
    var(--card-bg-web3) 0%,
    rgba(var(--exchange-accent-secondary-rgb), 0.02) 50%,
    var(--card-bg-web3) 100%
  );
  border: 1px solid rgba(var(--exchange-accent-secondary-rgb), 0.15);
  border-radius: 1.5rem;
  padding: 2.5rem;
  backdrop-filter: blur(20px);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(var(--exchange-accent-secondary-rgb), 0.05);
}

.tech-category::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    135deg,
    rgba(var(--exchange-accent-primary-rgb), 0.03) 0%,
    rgba(var(--exchange-accent-secondary-rgb), 0.03) 100%
  );
  opacity: 0;
  transition: opacity 0.3s ease;
}

.tech-category:hover {
  transform: translateY(-8px) scale(1.02);
  border-color: rgba(var(--exchange-accent-secondary-rgb), 0.3);
  box-shadow: 0 20px 40px rgba(var(--exchange-accent-secondary-rgb), 0.15),
    0 0 0 1px rgba(var(--exchange-accent-primary-rgb), 0.1);
  background: linear-gradient(
    135deg,
    var(--card-bg-web3) 0%,
    rgba(var(--exchange-accent-secondary-rgb), 0.05) 50%,
    var(--card-bg-web3) 100%
  );
}

.tech-category:hover::before {
  opacity: 1;
}

.category-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
  position: relative;
  z-index: 1;
}

.category-icon {
  width: 48px;
  height: 48px;
  background: linear-gradient(
    135deg,
    var(--exchange-accent-primary),
    var(--exchange-accent-secondary)
  );
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  box-shadow: 0 8px 25px rgba(var(--exchange-accent-primary-rgb), 0.3);
  transition: all 0.3s ease;
}

.tech-category:hover .category-icon {
  transform: scale(1.1) rotate(5deg);
  box-shadow: 0 12px 35px rgba(var(--exchange-accent-primary-rgb), 0.4);
}

.category-header h3 {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--exchange-accent-primary);
  margin: 0;
}

.tech-items {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: relative;
  z-index: 1;
}

.tech-item {
  background: rgba(var(--exchange-accent-primary-rgb), 0.08);
  padding: 1rem 1.25rem;
  border-radius: 0.75rem;
  color: var(--text-primary);
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  transition: all 0.3s ease;
  border: 1px solid rgba(var(--exchange-accent-primary-rgb), 0.1);
}

.tech-item:hover {
  background: rgba(var(--exchange-accent-primary-rgb), 0.12);
  border-color: rgba(var(--exchange-accent-primary-rgb), 0.2);
  transform: translateX(8px);
}

.tech-dot {
  width: 8px;
  height: 8px;
  background: linear-gradient(
    135deg,
    var(--exchange-accent-primary),
    var(--exchange-accent-secondary)
  );
  border-radius: 50%;
  box-shadow: 0 0 10px rgba(var(--exchange-accent-primary-rgb), 0.4);
  flex-shrink: 0;
  transition: all 0.3s ease;
}

.tech-item:hover .tech-dot {
  transform: scale(1.2);
  box-shadow: 0 0 15px rgba(var(--exchange-accent-primary-rgb), 0.6);
}
/* font-weight: 500; */
/* border: 1px solid rgba(var(--exchange-accent-primary-rgb), 0.15);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
} */

.tech-item::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 3px;
  background: linear-gradient(
    135deg,
    var(--exchange-accent-primary),
    var(--exchange-accent-secondary)
  );
  transform: scaleY(0);
  transition: transform 0.3s ease;
}

.tech-item:hover {
  background: rgba(var(--exchange-accent-primary-rgb), 0.12);
  border-color: rgba(var(--exchange-accent-primary-rgb), 0.25);
  transform: translateX(8px);
  color: var(--text-primary);
}

.tech-item:hover::before {
  transform: scaleY(1);
}

/* 为不同技术类别添加特殊图标 */
.tech-category:nth-child(1) h3::after {
  content: "⛓️";
  margin-left: auto;
  font-size: 1.2rem;
}

.tech-category:nth-child(2) h3::after {
  content: "⚡";
  margin-left: auto;
  font-size: 1.2rem;
}

.tech-category:nth-child(3) h3::after {
  content: "🛡️";
  margin-left: auto;
  font-size: 1.2rem;
}

.tech-category:nth-child(4) h3::after {
  content: "🏗️";
  margin-left: auto;
  font-size: 1.2rem;
}

/* Features Section */
.features-section {
  padding: 8rem 0;
  background: var(--bg-primary);
  position: relative;
  overflow: hidden;
}

.features-section::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(
      circle at 25% 25%,
      rgba(var(--exchange-accent-primary-rgb), 0.08) 0%,
      transparent 55%
    ),
    radial-gradient(
      circle at 75% 75%,
      rgba(var(--exchange-accent-secondary-rgb), 0.08) 0%,
      transparent 55%
    ),
    conic-gradient(
      from 0deg at 50% 50%,
      transparent 0deg,
      rgba(var(--exchange-accent-primary-rgb), 0.03) 60deg,
      transparent 120deg,
      rgba(var(--exchange-accent-secondary-rgb), 0.03) 180deg,
      transparent 240deg
    ),
    linear-gradient(
      45deg,
      rgba(var(--exchange-accent-primary-rgb), 0.01) 0%,
      transparent 50%,
      rgba(var(--exchange-accent-secondary-rgb), 0.01) 100%
    );
  pointer-events: none;
}

.features-section::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    180deg,
    var(--bg-secondary) 0%,
    transparent 25%,
    transparent 75%,
    var(--bg-secondary) 100%
  );
  opacity: 0.5;
  pointer-events: none;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2.5rem;
  position: relative;
  z-index: 1;
}

.feature-card {
  position: relative;
  border-radius: 2rem;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
  height: 100%;
}

.feature-glow {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    135deg,
    rgba(var(--exchange-accent-primary-rgb), 0.15) 0%,
    rgba(var(--exchange-accent-secondary-rgb), 0.15) 100%
  );
  border-radius: 2rem;
  opacity: 0;
  transition: all 0.4s ease;
  filter: blur(25px);
  transform: scale(0.8);
}

.feature-content {
  position: relative;
  z-index: 2;
  background: linear-gradient(
    135deg,
    var(--card-bg-web3) 0%,
    rgba(var(--exchange-accent-primary-rgb), 0.02) 30%,
    rgba(var(--exchange-accent-secondary-rgb), 0.02) 70%,
    var(--card-bg-web3) 100%
  );
  border: 1px solid rgba(var(--exchange-accent-primary-rgb), 0.15);
  border-radius: 2rem;
  padding: 3rem 2rem;
  text-align: center;
  backdrop-filter: blur(20px);
  height: 100%;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
  box-shadow: 0 8px 25px rgba(var(--exchange-accent-primary-rgb), 0.05);
}

.feature-content::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    135deg,
    rgba(var(--exchange-accent-primary-rgb), 0.03) 0%,
    rgba(var(--exchange-accent-secondary-rgb), 0.03) 100%
  );
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
}

.feature-card:hover .feature-glow {
  opacity: 1;
  transform: scale(1.05);
}

.feature-card:hover .feature-content {
  transform: translateY(-12px);
  border-color: rgba(var(--exchange-accent-primary-rgb), 0.4);
  box-shadow: 0 30px 60px rgba(var(--exchange-accent-primary-rgb), 0.15),
              0 0 0 1px rgba(var(--exchange-accent-secondary-rgb), 0.1);
  background: linear-gradient(
    135deg,
    var(--card-bg-web3) 0%,
    rgba(var(--exchange-accent-primary-rgb), 0.05) 30%,
    rgba(var(--exchange-accent-secondary-rgb), 0.05) 70%,
    var(--card-bg-web3) 100%
  );
}

.feature-card:hover .feature-content::before {
  opacity: 1;
}

.feature-icon {
  width: 90px;
  height: 90px;
  margin: 0 auto 2rem;
  position: relative;
}

.feature-icon .icon-bg {
  width: 100%;
  height: 100%;
  border-radius: 1.5rem;
  position: relative;
  overflow: hidden;
}

.feature-icon .icon-bg::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    135deg,
    var(--exchange-accent-primary),
    var(--exchange-accent-secondary)
  );
  transition: all 0.4s ease;
}

.feature-icon .icon-bg::after {
  content: "";
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  background: linear-gradient(
    135deg,
    var(--exchange-accent-primary),
    var(--exchange-accent-secondary)
  );
  border-radius: 1.5rem;
  z-index: -1;
  opacity: 0.3;
  filter: blur(8px);
}

.feature-icon svg {
  position: relative;
  z-index: 2;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 2rem;
  transition: all 0.4s ease;
}

.feature-card:hover .feature-icon .icon-bg {
  transform: scale(1.1) rotate(5deg);
  box-shadow: 0 20px 45px rgba(var(--exchange-accent-primary-rgb), 0.4);
}

.feature-card:hover .feature-icon .icon-bg::before {
  background: linear-gradient(
    135deg,
    var(--exchange-accent-secondary),
    var(--exchange-accent-primary)
  );
}

.feature-stats {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(var(--exchange-accent-primary-rgb), 0.15);
}

.stat {
  text-align: center;
  color: var(--exchange-accent-primary);
  font-weight: 700;
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  position: relative;
}

.stat::before {
  content: "";
  position: absolute;
  top: -8px;
  left: 50%;
  transform: translateX(-50%);
  width: 4px;
  height: 4px;
  background: var(--exchange-accent-primary);
  border-radius: 50%;
  box-shadow: 0 0 8px rgba(var(--exchange-accent-primary-rgb), 0.5);
}

.feature-card h3 {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: var(--text-primary);
  position: relative;
  z-index: 1;
}

.feature-card p {
  color: var(--text-secondary);
  line-height: 1.7;
  font-size: 1rem;
  position: relative;
  z-index: 1;
}

/* 为每个功能卡片添加独特的悬停效果 */
.feature-card:nth-child(odd):hover {
  background: linear-gradient(
    135deg,
    rgba(var(--exchange-accent-primary-rgb), 0.05) 0%,
    rgba(var(--exchange-accent-secondary-rgb), 0.02) 100%
  );
}

.feature-card:nth-child(even):hover {
  background: linear-gradient(
    135deg,
    rgba(var(--exchange-accent-secondary-rgb), 0.05) 0%,
    rgba(var(--exchange-accent-primary-rgb), 0.02) 100%
  );
}

/* CTA Section */
.cta-section {
  padding: 8rem 0;
  position: relative;
  overflow: hidden;
}

.cta-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    135deg,
    rgba(var(--exchange-accent-primary-rgb), 0.08) 0%,
    rgba(var(--exchange-accent-secondary-rgb), 0.08) 50%,
    rgba(var(--exchange-accent-primary-rgb), 0.05) 100%
  );
  border-top: 1px solid rgba(var(--exchange-accent-primary-rgb), 0.15);
}

.cta-particles {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(
      circle at 25% 25%,
      rgba(var(--exchange-accent-primary-rgb), 0.1) 0%,
      transparent 50%
    ),
    radial-gradient(
      circle at 75% 75%,
      rgba(var(--exchange-accent-secondary-rgb), 0.1) 0%,
      transparent 50%
    ),
    linear-gradient(
      45deg,
      transparent 40%,
      rgba(var(--exchange-accent-primary-rgb), 0.03) 50%,
      transparent 60%
    );
  pointer-events: none;
  animation: float 6s ease-in-out infinite;
}

.cta-glow {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 300px;
  height: 300px;
  background: radial-gradient(
    circle,
    rgba(var(--exchange-accent-primary-rgb), 0.15) 0%,
    transparent 70%
  );
  transform: translate(-50%, -50%);
  border-radius: 50%;
  filter: blur(60px);
  pointer-events: none;
  animation: pulse 4s ease-in-out infinite;
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}

@keyframes pulse {
  0%,
  100% {
    opacity: 0.5;
    transform: translate(-50%, -50%) scale(1);
  }
  50% {
    opacity: 0.8;
    transform: translate(-50%, -50%) scale(1.1);
  }
}

.cta-content {
  text-align: center;
  max-width: 700px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.cta-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  background: rgba(var(--exchange-accent-primary-rgb), 0.1);
  border: 1px solid rgba(var(--exchange-accent-primary-rgb), 0.2);
  padding: 1rem 2rem;
  border-radius: 2rem;
  font-size: 0.875rem;
  font-weight: 600;
  margin-bottom: 2rem;
  color: var(--exchange-accent-primary);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
}

.cta-badge:hover {
  background: rgba(var(--exchange-accent-primary-rgb), 0.15);
  border-color: rgba(var(--exchange-accent-primary-rgb), 0.3);
  transform: translateY(-2px);
}

.cta-badge svg {
  width: 20px;
  height: 20px;
}

.cta-features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.cta-feature {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem;
  background: linear-gradient(
    135deg,
    var(--card-bg-web3) 0%,
    rgba(var(--exchange-accent-primary-rgb), 0.03) 50%,
    var(--card-bg-web3) 100%
  );
  border: 1px solid rgba(var(--exchange-accent-primary-rgb), 0.15);
  border-radius: 1rem;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 15px rgba(var(--exchange-accent-primary-rgb), 0.05);
}

.cta-feature:hover {
  background: linear-gradient(
    135deg,
    rgba(var(--exchange-accent-primary-rgb), 0.08) 0%,
    rgba(var(--exchange-accent-secondary-rgb), 0.05) 50%,
    rgba(var(--exchange-accent-primary-rgb), 0.08) 100%
  );
  border-color: rgba(var(--exchange-accent-primary-rgb), 0.25);
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(var(--exchange-accent-primary-rgb), 0.15);
}

.cta-feature svg {
  width: 24px;
  height: 24px;
  color: var(--exchange-accent-primary);
  flex-shrink: 0;
}

.cta-feature span {
  color: var(--text-primary);
  font-weight: 500;
  font-size: 0.9rem;
}

.cta-content h2 {
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  color: var(--text-primary);
  background: linear-gradient(
    135deg,
    var(--exchange-accent-primary) 0%,
    var(--exchange-accent-secondary) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1.2;
}

.cta-content p {
  font-size: 1.25rem;
  color: var(--text-secondary);
  margin-bottom: 3rem;
  line-height: 1.8;
  font-weight: 400;
}

.cta-actions {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

/* 增强CTA按钮样式 */
.cta-actions .btn-primary {
  padding: 1rem 2rem;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 0.75rem;
  box-shadow: 0 10px 25px rgba(var(--exchange-accent-primary-rgb), 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.cta-actions .btn-primary:hover {
  transform: translateY(-3px) scale(1.05);
  box-shadow: 0 15px 35px rgba(var(--exchange-accent-primary-rgb), 0.4),
    inset 0 1px 0 rgba(255, 255, 255, 0.3);
}

.cta-actions .btn-secondary {
  padding: 1rem 2rem;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 0.75rem;
  background: var(--card-bg-web3);
  border: 1px solid rgba(var(--exchange-accent-primary-rgb), 0.3);
  color: var(--text-primary);
  backdrop-filter: blur(10px);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.cta-actions .btn-outline {
  padding: 1rem 2rem;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 0.75rem;
  background: transparent;
  border: 2px solid rgba(var(--exchange-accent-secondary-rgb), 0.4);
  color: var(--exchange-accent-secondary);
  backdrop-filter: blur(10px);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.cta-actions .btn-outline::before {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(var(--exchange-accent-secondary-rgb), 0.1),
    transparent
  );
  transition: left 0.5s ease;
}

.cta-actions .btn-outline:hover {
  background: rgba(var(--exchange-accent-secondary-rgb), 0.1);
  border-color: rgba(var(--exchange-accent-secondary-rgb), 0.6);
  transform: translateY(-3px) scale(1.05);
  box-shadow: 0 10px 25px rgba(var(--exchange-accent-secondary-rgb), 0.3);
}

.cta-actions .btn-outline:hover::before {
  left: 100%;
}

.cta-actions .btn-secondary:hover {
  transform: translateY(-3px);
  background: rgba(var(--exchange-accent-primary-rgb), 0.1);
  border-color: rgba(var(--exchange-accent-primary-rgb), 0.5);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
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

  .exchange-illustration {
    width: 300px;
    height: 300px;
  }

  .solutions-grid,
  .tech-grid,
  .features-grid {
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
