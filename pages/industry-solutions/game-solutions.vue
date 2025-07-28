<template>
  <div class="game-solution-page">
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
            <span class="badge-icon">🎮</span>
            <span>游戏解决方案</span>
          </div>
          <h1 class="hero-title">
            沉浸式的
            <span class="gradient-text">游戏体验平台</span>
          </h1>
          <p class="hero-description">
            基于云原生技术的全栈游戏解决方案，
            提供高性能服务器、实时多人对战、数据分析等全方位服务，
            为开发者打造一站式游戏开发与运营平台。
          </p>
          <div class="hero-stats">
            <div class="stat-item">
              <div class="stat-number">100M+</div>
              <div class="stat-label">并发玩家</div>
            </div>
            <div class="stat-item">
              <div class="stat-number">99.9%</div>
              <div class="stat-label">可用性</div>
            </div>
            <div class="stat-item">
              <div class="stat-number">10ms</div>
              <div class="stat-label">延迟</div>
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
          <div class="game-illustration">
            <div class="central-game">
              <div class="game-core"></div>
              <div class="performance-ring"></div>
            </div>
            <div class="game-orbits">
              <div class="orbit orbit-1">
                <div class="game-node mobile">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <rect
                      x="5"
                      y="2"
                      width="14"
                      height="20"
                      rx="2"
                      ry="2"
                      stroke="currentColor"
                      stroke-width="2"
                    />
                    <line
                      x1="12"
                      y1="18"
                      x2="12.01"
                      y2="18"
                      stroke="currentColor"
                      stroke-width="2"
                    />
                  </svg>
                </div>
              </div>
              <div class="orbit orbit-2">
                <div class="game-node pc">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <rect
                      x="2"
                      y="3"
                      width="20"
                      height="14"
                      rx="2"
                      ry="2"
                      stroke="currentColor"
                      stroke-width="2"
                    />
                    <line
                      x1="8"
                      y1="21"
                      x2="16"
                      y2="21"
                      stroke="currentColor"
                      stroke-width="2"
                    />
                    <line
                      x1="12"
                      y1="17"
                      x2="12"
                      y2="21"
                      stroke="currentColor"
                      stroke-width="2"
                    />
                  </svg>
                </div>
              </div>
              <div class="orbit orbit-3">
                <div class="game-node console">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <rect
                      x="2"
                      y="8"
                      width="20"
                      height="8"
                      rx="2"
                      ry="2"
                      stroke="currentColor"
                      stroke-width="2"
                    />
                    <circle
                      cx="8"
                      cy="12"
                      r="1"
                      stroke="currentColor"
                      stroke-width="2"
                    />
                    <circle
                      cx="16"
                      cy="12"
                      r="1"
                      stroke="currentColor"
                      stroke-width="2"
                    />
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
    <section id="solutions" class="epic-data-architecture-section">
      <div class="container">
        <div class="section-header">
          <div class="section-badge">企业级案例</div>
          <h2 class="section-title">Epic Games 的数据分析架构</h2>
          <p class="section-description">
            以 Fortnite 为例，展示企业级游戏数据分析架构的完整实现
          </p>
        </div>

        <!-- Brand Header -->
        <div class="brand-header">
          <div class="epic-brand">
            <div class="epic-logo">
              <div class="epic-text">EPIC</div>
              <div class="games-text">GAMES</div>
            </div>
            <div class="fortnite-logo">
              <h3 class="fortnite-title">FORTNITE</h3>
            </div>
          </div>
        </div>

        <!-- Architecture Overview -->
        <div class="architecture-overview">
          <!-- Main Architecture Diagram -->
          <div class="architecture-main">
            <div class="data-flow-diagram">
              <!-- Game Components -->
              <div class="flow-section">
                <h4 class="flow-title">🎮 游戏组件</h4>
                <div class="flow-components">
                  <div class="component-item">Game Clients</div>
                  <div class="component-item">Game Servers</div>
                  <div class="component-item">Launcher</div>
                  <div class="component-item">Game Services</div>
                </div>
              </div>

              <!-- Flow Arrow -->
              <div class="flow-arrow">
                <span style="font-size: 2rem;">⬇️</span>
              </div>

              <!-- Data Ingestion -->
              <div class="flow-section">
                <h4 class="flow-title">📥 数据摄取</h4>
                <div class="kinesis-component">
                  <span class="service-icon">⚡</span>
                  <span>Amazon Kinesis</span>
                </div>
              </div>

              <!-- Flow Arrow -->
              <div class="flow-arrow">
                <span style="font-size: 2rem;">⬇️</span>
              </div>

              <!-- Processing Pipelines -->
              <div class="flow-section">
                <h4 class="flow-title">🔄 数据处理管道</h4>
                <div class="processing-pipelines">
                  <div class="pipeline">
                    <div class="pipeline-header">
                      <span class="pipeline-icon">🔥</span>
                      <span>实时分析管道</span>
                    </div>
                    <div class="pipeline-services">
                      <div class="service-item">Spark on EMR</div>
                      <div class="service-item">User ETL</div>
                      <div class="service-item">Data Collection</div>
                    </div>
                  </div>
                  <div class="pipeline">
                    <div class="pipeline-header">
                      <span class="pipeline-icon">📦</span>
                      <span>批处理分析管道</span>
                    </div>
                    <div class="pipeline-services">
                      <div class="service-item">S3 Data Lake</div>
                      <div class="service-item">ETL using EMR</div>
                      <div class="service-item">Databases</div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Flow Arrow -->
              <div class="flow-arrow">
                <span style="font-size: 2rem;">⬇️</span>
              </div>

              <!-- Output Services -->
              <div class="flow-section">
                <h4 class="flow-title">📊 输出服务</h4>
                <div class="output-services">
                  <div class="output-item">Grafana</div>
                  <div class="output-item">Scoreboards API</div>
                  <div class="output-item">Tableau/BI</div>
                  <div class="output-item">Ad-hoc SQL</div>
                  <div class="output-item">Real-time Data</div>
                </div>
              </div>
            </div>

            <!-- Team Information -->
            <div class="team-info">
              <div class="team-stats">
                <div class="team-stat">
                  <span class="stat-number">2</span>
                  <span class="stat-label">全职数据运维人员</span>
                </div>
                <div class="team-stat">
                  <span class="stat-number">150</span>
                  <span class="stat-label">数据分析人员</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Statistics Sidebar -->
          <div class="statistics-sidebar">
            <!-- Real-time Data Stats -->
            <div class="stats-section">
              <h3 class="stats-title">📊 实时采集</h3>
              <div class="stats-grid">
                <div class="stat-card">
                  <span class="stat-icon">🎮</span>
                  <div class="stat-content">
                    <span class="stat-value">1.25 亿</span>
                    <div class="stat-desc">峰值每分钟游戏事件</div>
                  </div>
                </div>
                <div class="stat-card">
                  <span class="stat-icon">📊</span>
                  <div class="stat-content">
                    <span class="stat-value">800 亿</span>
                    <div class="stat-desc">每天游戏事件</div>
                  </div>
                </div>
                <div class="stat-card">
                  <span class="stat-icon">💾</span>
                  <div class="stat-content">
                    <span class="stat-value">61 GB</span>
                    <div class="stat-desc">峰值每分钟输入</div>
                  </div>
                </div>
                <div class="stat-card">
                  <span class="stat-icon">⚡</span>
                  <div class="stat-content">
                    <span class="stat-value">5,000</span>
                    <div class="stat-desc">Kinesis shards</div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Data Warehouse Stats -->
            <div class="stats-section">
              <h3 class="stats-title">🗄️ 数据仓库</h3>
              <div class="stats-grid">
                <div class="stat-card">
                  <span class="stat-icon">📈</span>
                  <div class="stat-content">
                    <span class="stat-value">5 PB</span>
                    <div class="stat-desc">每月新增数据</div>
                  </div>
                </div>
                <div class="stat-card">
                  <span class="stat-icon">💽</span>
                  <div class="stat-content">
                    <span class="stat-value">>35 PB</span>
                    <div class="stat-desc">活跃数据量</div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Management Clusters Stats -->
            <div class="stats-section">
              <h3 class="stats-title">⚙️ 管理集群</h3>
              <div class="stats-grid">
                <div class="stat-card">
                  <span class="stat-icon">🔄</span>
                  <div class="stat-content">
                    <span class="stat-value">8,000+</span>
                    <div class="stat-desc">每天批处理作业</div>
                  </div>
                </div>
                <div class="stat-card">
                  <span class="stat-icon">⚡</span>
                  <div class="stat-content">
                    <span class="stat-value">22</span>
                    <div class="stat-desc">生产 EMR 集群</div>
                  </div>
                </div>
                <div class="stat-card">
                  <span class="stat-icon">🖥️</span>
                  <div class="stat-content">
                    <span class="stat-value">4,000+</span>
                    <div class="stat-desc">EC2 分析实例</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Key Benefits Section -->
        <div class="benefits-section">
          <h3 class="benefits-title">🎯 核心优势</h3>
          <div class="benefits-grid">
            <div class="benefit-card">
              <span class="benefit-icon">🔍</span>
              <h4>服务健康监控</h4>
              <p>实时监控游戏服务状态，快速发现和解决性能问题，确保最佳游戏体验。</p>
            </div>
            <div class="benefit-card">
              <span class="benefit-icon">🏆</span>
              <h4>实时竞技系统</h4>
              <p>为 Fortnite 等竞技游戏提供实时排行榜和比赛数据分析，支持全球玩家竞技。</p>
            </div>
            <div class="benefit-card">
              <span class="benefit-icon">📊</span>
              <h4>基础指标分析</h4>
              <p>提供游戏核心指标的实时分析，包括用户活跃度、留存率等关键业务数据。</p>
            </div>
            <div class="benefit-card">
              <span class="benefit-icon">🔬</span>
              <h4>深度数据分析</h4>
              <p>支持复杂的数据挖掘和机器学习分析，为游戏优化和商业决策提供深度洞察。</p>
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
          <h2 class="section-title">企业级游戏技术栈</h2>
          <p class="section-description">
            采用业界领先的游戏开发技术和云原生架构，确保游戏的高性能和可扩展性。
          </p>
        </div>

        <div class="tech-grid">
          <div class="tech-category">
            <h3>游戏引擎</h3>
            <div class="tech-items">
              <div class="tech-item">Unity 3D</div>
              <div class="tech-item">Unreal Engine</div>
              <div class="tech-item">Cocos2d-x</div>
              <div class="tech-item">Godot</div>
            </div>
          </div>

          <div class="tech-category">
            <h3>图形渲染</h3>
            <div class="tech-items">
              <div class="tech-item">Vulkan</div>
              <div class="tech-item">DirectX 12</div>
              <div class="tech-item">OpenGL ES</div>
              <div class="tech-item">Metal</div>
            </div>
          </div>

          <div class="tech-category">
            <h3>网络架构</h3>
            <div class="tech-items">
              <div class="tech-item">WebSocket</div>
              <div class="tech-item">UDP</div>
              <div class="tech-item">Photon</div>
              <div class="tech-item">Mirror</div>
            </div>
          </div>

          <div class="tech-category">
            <h3>后端服务</h3>
            <div class="tech-items">
              <div class="tech-item">Node.js</div>
              <div class="tech-item">Redis</div>
              <div class="tech-item">MongoDB</div>
              <div class="tech-item">Kubernetes</div>
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
          <h2 class="section-title">领先的游戏功能</h2>
        </div>

        <div class="features-grid">
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
            <h3>高性能渲染</h3>
            <p>
              采用先进的图形渲染技术，提供流畅的60FPS+游戏体验和逼真的视觉效果。
            </p>
          </div>

          <div class="feature-card">
            <div class="feature-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                <path
                  d="M17 21V19C17 16.7909 15.2091 15 13 15H5C2.79086 15 1 16.7909 1 19V21M23 21V19C23 16.7909 21.2091 15 19 15H18M13 7C13 9.20914 11.2091 11 9 11C6.79086 11 5 9.20914 5 7C5 4.79086 6.79086 3 9 3C11.2091 3 13 4.79086 13 7Z"
                  stroke="currentColor"
                  stroke-width="2"
                />
              </svg>
            </div>
            <h3>多人在线</h3>
            <p>支持大规模多人在线游戏，提供稳定的网络连接和实时同步。</p>
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
            <h3>跨平台支持</h3>
            <p>一次开发，多平台部署，支持PC、移动端、主机等多种游戏平台。</p>
          </div>

          <div class="feature-card">
            <div class="feature-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                <path d="M3 3V21H21" stroke="currentColor" stroke-width="2" />
                <path
                  d="M7 12L12 7L16 11L21 6"
                  stroke="currentColor"
                  stroke-width="2"
                />
              </svg>
            </div>
            <h3>数据分析</h3>
            <p>实时收集游戏数据，提供详细的玩家行为分析和游戏运营洞察。</p>
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
            <h3>AI智能</h3>
            <p>集成人工智能技术，提供智能NPC、动态难度调整和个性化游戏体验。</p>
          </div>

          <div class="feature-card">
            <div class="feature-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                <path
                  d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                  stroke="currentColor"
                  stroke-width="2"
                />
              </svg>
            </div>
            <h3>安全防护</h3>
            <p>完善的反作弊系统和数据安全保护，确保公平的游戏环境。</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Security Section -->
    <section class="security-section">
      <div class="container">
        <div class="section-header">
          <div class="section-badge">性能保障</div>
          <h2 class="section-title">企业级游戏保障体系</h2>
          <p class="section-description">
            采用多重技术保障，从性能优化到安全防护，从服务器到客户端，全方位保证游戏体验。
          </p>
        </div>

        <div class="security-grid">
          <div class="security-card">
            <div class="security-icon">⚡</div>
            <h3>性能优化</h3>
            <p>采用先进的性能优化技术，确保游戏在各种设备上都能流畅运行。</p>
          </div>

          <div class="security-card">
            <div class="security-icon">🛡️</div>
            <h3>反作弊系统</h3>
            <p>
              集成多层反作弊检测机制，实时监控异常行为，维护公平的游戏环境。
            </p>
          </div>

          <div class="security-card">
            <div class="security-icon">🌐</div>
            <h3>全球部署</h3>
            <p>
              支持全球多地区服务器部署，就近接入，降低网络延迟，提升游戏体验。
            </p>
          </div>

          <div class="security-card">
            <div class="security-icon">📊</div>
            <h3>实时监控</h3>
            <p>
              7x24小时实时监控游戏服务状态，快速响应异常情况，确保服务稳定性。
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="container">
        <div class="cta-content">
          <h2>准备开发您的游戏项目？</h2>
          <p>联系我们的专家团队，获取定制化的游戏开发解决方案和技术支持。</p>
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
  title: "游戏解决方案 - 中联方舟",
  meta: [
    {
      name: "description",
      content:
        "专业的游戏开发技术解决方案，提供高性能游戏引擎、多人在线服务、数据分析等全方位服务。",
    },
    {
      name: "keywords",
      content: "游戏开发,游戏引擎,多人在线游戏,云游戏,游戏数据分析",
    },
  ],
});
</script>

<style scoped>
/* 数字钱包主题样式 */
.game-solution-page {
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
      circle at 25% 25%,
      rgba(var(--wallet-accent-primary-rgb), 0.1) 0%,
      transparent 50%
    ),
    radial-gradient(
      circle at 75% 75%,
      rgba(var(--wallet-accent-secondary-rgb), 0.1) 0%,
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
  background: linear-gradient(
    45deg,
    var(--wallet-accent-primary),
    var(--wallet-accent-secondary)
  );
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
  0%,
  100% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-25px) rotate(180deg);
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
  background: linear-gradient(
    135deg,
    var(--wallet-accent-primary) 0%,
    var(--wallet-accent-secondary) 100%
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
  background: linear-gradient(
    135deg,
    var(--wallet-accent-primary) 0%,
    var(--wallet-accent-secondary) 100%
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
  background: linear-gradient(
    135deg,
    var(--wallet-accent-primary),
    var(--wallet-accent-secondary)
  );
  border-radius: 20px;
  animation: walletPulse 4s ease-in-out infinite;
  position: relative;
}

.wallet-core::before {
  content: "";
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
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
}

@keyframes securityRotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
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
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
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
  from {
    transform: rotate(0deg) translateX(50px) rotate(0deg);
  }
  to {
    transform: rotate(-360deg) translateX(50px) rotate(360deg);
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
    rgba(var(--wallet-accent-primary-rgb), 0.5),
    transparent
  );
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
  background: linear-gradient(
    180deg,
    transparent,
    rgba(var(--wallet-accent-primary-rgb), 0.5),
    transparent
  );
  animation: lineFlow 5s ease-in-out infinite 1.5s;
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
    rgba(var(--wallet-accent-secondary-rgb), 0.5),
    transparent
  );
  transform: rotate(45deg);
  animation: lineFlow 5s ease-in-out infinite 3s;
}

@keyframes lineFlow {
  0%,
  100% {
    opacity: 0.3;
  }
  50% {
    opacity: 1;
  }
}

/* Epic Data Architecture Section */
.epic-data-architecture-section {
  padding: 6rem 0;
  background: var(--bg-secondary);
  color: var(--text-primary);
  transition: all 0.3s ease;
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

/* Brand Header */
.brand-header {
  text-align: center;
  margin: 3rem 0;
}

.epic-brand {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
}

.epic-logo {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(135deg, var(--wallet-accent-primary), var(--wallet-accent-secondary));
  padding: 1rem 1.5rem;
  border-radius: 1rem;
  color: white;
}

.epic-text {
  font-size: 1.5rem;
  font-weight: 900;
  letter-spacing: 0.1em;
}

.games-text {
  font-size: 0.875rem;
  opacity: 0.9;
  letter-spacing: 0.05em;
}

.fortnite-logo {
  background: linear-gradient(45deg, #ff6b35, #f7931e, #ffcc02);
  padding: 1rem 2rem;
  border-radius: 1rem;
  box-shadow: 0 8px 32px rgba(255, 107, 53, 0.3);
}

.fortnite-title {
  font-size: 2rem;
  font-weight: 900;
  color: white;
  margin: 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

/* Architecture Overview */
.architecture-overview {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 3rem;
  margin-top: 4rem;
  align-items: start;
}

.architecture-main {
  background: var(--card-bg-web3);
  border: 1px solid rgba(var(--wallet-accent-primary-rgb), 0.1);
  border-radius: 1.5rem;
  padding: 2rem;
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 32px rgba(var(--wallet-accent-primary-rgb), 0.1);
}

/* Data Flow Diagram */
.data-flow-diagram {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.flow-section {
  text-align: center;
}

.flow-title {
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--wallet-accent-primary);
  margin-bottom: 1rem;
}

.flow-components {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 0.75rem;
}

.component-item {
  background: rgba(var(--wallet-accent-primary-rgb), 0.1);
  border: 1px solid rgba(var(--wallet-accent-primary-rgb), 0.2);
  padding: 0.75rem;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  color: var(--text-primary);
  transition: all 0.3s ease;
}

.component-item:hover {
  background: rgba(var(--wallet-accent-primary-rgb), 0.2);
  border-color: rgba(var(--wallet-accent-primary-rgb), 0.4);
}

.flow-arrow {
  display: flex;
  justify-content: center;
  color: var(--wallet-accent-primary);
  margin: 1rem 0;
}

.kinesis-component {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background: linear-gradient(135deg, var(--wallet-accent-primary), var(--wallet-accent-secondary));
  color: white;
  padding: 1rem 1.5rem;
  border-radius: 0.75rem;
  font-weight: 600;
  box-shadow: 0 4px 16px rgba(var(--wallet-accent-primary-rgb), 0.3);
}

.service-icon {
  font-size: 1.25rem;
}

/* Processing Pipelines */
.processing-pipelines {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.pipeline {
  background: rgba(var(--wallet-accent-secondary-rgb), 0.05);
  border: 1px solid rgba(var(--wallet-accent-secondary-rgb), 0.2);
  border-radius: 1rem;
  padding: 1.5rem;
  transition: all 0.3s ease;
}

.pipeline:hover {
  background: rgba(var(--wallet-accent-secondary-rgb), 0.1);
  border-color: rgba(var(--wallet-accent-secondary-rgb), 0.3);
  transform: translateY(-2px);
}

.pipeline-header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
  font-weight: 600;
  color: var(--wallet-accent-secondary);
}

.pipeline-icon {
  font-size: 1.25rem;
}

.pipeline-services {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.service-item {
  background: rgba(var(--text-primary-rgb), 0.05);
  padding: 0.5rem 0.75rem;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  color: var(--text-primary);
  border: 1px solid rgba(var(--text-primary-rgb), 0.1);
}

.output-services {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 0.75rem;
}

.output-item {
  background: rgba(34, 197, 94, 0.1);
  border: 1px solid rgba(34, 197, 94, 0.3);
  padding: 0.75rem;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  color: rgb(34, 197, 94);
  text-align: center;
  transition: all 0.3s ease;
}

.output-item:hover {
  background: rgba(34, 197, 94, 0.2);
  border-color: rgba(34, 197, 94, 0.5);
}

/* Team Information */
.team-info {
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(var(--wallet-accent-primary-rgb), 0.1);
}

.team-stats {
  display: flex;
  justify-content: center;
  gap: 3rem;
}

.team-stat {
  text-align: center;
}

.stat-number {
  display: block;
  font-size: 2rem;
  font-weight: 700;
  color: var(--wallet-accent-primary);
}

.stat-label {
  font-size: 0.875rem;
  color: var(--text-secondary);
  margin-top: 0.25rem;
}

/* Statistics Sidebar */
.statistics-sidebar {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.stats-section {
  background: var(--card-bg-web3);
  border: 1px solid rgba(var(--wallet-accent-primary-rgb), 0.1);
  border-radius: 1rem;
  padding: 1.5rem;
  backdrop-filter: blur(10px);
}

.stats-title {
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--wallet-accent-primary);
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid rgba(var(--wallet-accent-primary-rgb), 0.2);
}

.stats-grid {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.stat-card {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: rgba(var(--wallet-accent-primary-rgb), 0.05);
  border: 1px solid rgba(var(--wallet-accent-primary-rgb), 0.1);
  border-radius: 0.75rem;
  transition: all 0.3s ease;
}

.stat-card:hover {
  background: rgba(var(--wallet-accent-primary-rgb), 0.1);
  border-color: rgba(var(--wallet-accent-primary-rgb), 0.2);
  transform: translateY(-2px);
}

.stat-card .stat-icon {
  font-size: 1.5rem;
  opacity: 0.8;
}

.stat-content {
  flex: 1;
}

.stat-value {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--text-primary);
  display: block;
}

.stat-desc {
  font-size: 0.875rem;
  color: var(--text-secondary);
  margin-top: 0.25rem;
}

/* Benefits Section */
.benefits-section {
  margin-top: 4rem;
  grid-column: 1 / -1;
}

.benefits-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--text-primary);
  text-align: center;
  margin-bottom: 2rem;
}

.benefits-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.benefit-card {
  background: var(--card-bg-web3);
  border: 1px solid rgba(var(--wallet-accent-primary-rgb), 0.1);
  border-radius: 1rem;
  padding: 1.5rem;
  text-align: center;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.benefit-card:hover {
  background: rgba(var(--wallet-accent-primary-rgb), 0.05);
  border-color: rgba(var(--wallet-accent-primary-rgb), 0.3);
  transform: translateY(-5px);
  box-shadow: 0 12px 32px rgba(var(--wallet-accent-primary-rgb), 0.15);
}

.benefit-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  display: block;
}

.benefit-card h4 {
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 0.75rem;
}

.benefit-card p {
   color: var(--text-secondary);
   line-height: 1.6;
   font-size: 0.875rem;
 }

 /* Responsive Design */
 @media (max-width: 1024px) {
   .architecture-overview {
     grid-template-columns: 1fr;
     gap: 2rem;
   }

   .statistics-sidebar {
     order: -1;
   }

   .processing-pipelines {
     grid-template-columns: 1fr;
   }

   .team-stats {
     gap: 2rem;
   }
 }

 @media (max-width: 768px) {
   .container {
     padding: 0 1rem;
   }

   .section-title {
     font-size: 2rem;
   }

   .section-description {
     font-size: 1rem;
   }

   .epic-brand {
     flex-direction: column;
     gap: 1rem;
   }

   .epic-text {
     font-size: 1.25rem;
   }

   .fortnite-title {
     font-size: 1.5rem;
   }

   .flow-components {
     grid-template-columns: repeat(2, 1fr);
   }

   .output-services {
     grid-template-columns: repeat(2, 1fr);
   }

   .team-stats {
     flex-direction: column;
     gap: 1rem;
   }

   .benefits-grid {
     grid-template-columns: 1fr;
   }

   .stats-grid {
     gap: 0.75rem;
   }

   .stat-card {
     padding: 0.75rem;
   }

   .stat-value {
     font-size: 1rem;
   }
 }

 @media (max-width: 480px) {
   .epic-data-architecture-section {
     padding: 3rem 0;
   }

   .section-title {
     font-size: 1.75rem;
   }

   .architecture-main {
     padding: 1rem;
   }

   .flow-components {
     grid-template-columns: 1fr;
   }

   .output-services {
     grid-template-columns: 1fr;
   }

   .component-item,
   .service-item,
   .output-item {
     font-size: 0.75rem;
     padding: 0.5rem;
   }

   .kinesis-component {
     padding: 0.75rem 1rem;
     font-size: 0.875rem;
   }

   .pipeline {
     padding: 1rem;
   }

   .benefit-card {
     padding: 1rem;
   }

   .benefit-icon {
     font-size: 2rem;
   }
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
  background: linear-gradient(
    135deg,
    var(--card-bg-web3) 0%,
    rgba(var(--wallet-accent-secondary-rgb), 0.03) 100%
  );
  border: 1px solid rgba(var(--wallet-accent-secondary-rgb), 0.2);
  border-radius: 1rem;
  padding: 2rem;
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 20px rgba(var(--wallet-accent-secondary-rgb), 0.05);
  transition: all 0.3s ease;
}

.tech-category:hover {
  transform: translateY(-3px);
  background: linear-gradient(
    135deg,
    rgba(var(--wallet-accent-secondary-rgb), 0.08) 0%,
    rgba(var(--wallet-accent-primary-rgb), 0.05) 100%
  );
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
  background: linear-gradient(
    135deg,
    var(--card-bg-web3) 0%,
    rgba(var(--wallet-accent-primary-rgb), 0.02) 50%,
    rgba(var(--wallet-accent-secondary-rgb), 0.02) 100%
  );
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
  background: linear-gradient(
    135deg,
    rgba(var(--wallet-accent-primary-rgb), 0.08) 0%,
    rgba(var(--wallet-accent-secondary-rgb), 0.06) 50%,
    rgba(var(--wallet-accent-primary-rgb), 0.04) 100%
  );
  border-color: rgba(var(--wallet-accent-primary-rgb), 0.35);
  box-shadow: 0 20px 40px rgba(var(--wallet-accent-primary-rgb), 0.12),
    0 8px 32px rgba(var(--wallet-accent-secondary-rgb), 0.08);
}

.feature-icon {
  width: 80px;
  height: 80px;
  background: linear-gradient(
    135deg,
    var(--wallet-accent-primary),
    var(--wallet-accent-secondary)
  );
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
  background: linear-gradient(
    135deg,
    var(--card-bg-web3) 0%,
    rgba(var(--wallet-accent-secondary-rgb), 0.03) 100%
  );
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
  background: linear-gradient(
    135deg,
    rgba(var(--wallet-accent-secondary-rgb), 0.08) 0%,
    rgba(var(--wallet-accent-primary-rgb), 0.05) 100%
  );
  border-color: rgba(var(--wallet-accent-secondary-rgb), 0.4);
  box-shadow: 0 20px 40px rgba(var(--wallet-accent-secondary-rgb), 0.15),
    0 8px 32px rgba(var(--wallet-accent-primary-rgb), 0.08);
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
  background: linear-gradient(
    135deg,
    rgba(var(--wallet-accent-primary-rgb), 0.1) 0%,
    rgba(var(--wallet-accent-secondary-rgb), 0.1) 100%
  );
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

  .epic-architecture-container {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .fortnite-title {
    font-size: 2rem;
  }
  
  .architecture-flow {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  
  .feature-cards {
    grid-template-columns: 1fr;
  }

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