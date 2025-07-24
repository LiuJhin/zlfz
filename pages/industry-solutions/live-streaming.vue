<template>
  <div class="live-streaming-page">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-background">
        <div class="streaming-waves">
          <div class="wave wave-1"></div>
          <div class="wave wave-2"></div>
          <div class="wave wave-3"></div>
        </div>
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
            <span class="badge-icon">📺</span>
            <span>直播点播解决方案</span>
          </div>
          <h1 class="hero-title">
            专业级
            <span class="gradient-text">音视频服务平台</span>
          </h1>
          <p class="hero-description">
            提供高清流畅的直播点播技术解决方案，
            支持多终端、多协议、全球CDN加速，
            为企业打造专业的音视频服务平台。
          </p>
          <div class="hero-stats">
            <div class="stat-item">
              <div class="stat-number">99.9%</div>
              <div class="stat-label">服务可用性</div>
            </div>
            <div class="stat-item">
              <div class="stat-number">< 300ms</div>
              <div class="stat-label">全球延迟</div>
            </div>
            <div class="stat-item">
              <div class="stat-number">4K</div>
              <div class="stat-label">超高清支持</div>
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
          <div class="streaming-illustration">
            <div class="central-server">
              <div class="server-core"></div>
              <div class="data-flow"></div>
            </div>
            <div class="streaming-nodes">
              <div class="node node-1">
                <div class="node-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="2"/>
                    <path d="M12 1V3M12 21V23M4.22 4.22L5.64 5.64M18.36 18.36L19.78 19.78M1 12H3M21 12H23M4.22 19.78L5.64 18.36M18.36 5.64L19.78 4.22" stroke="currentColor" stroke-width="2"/>
                  </svg>
                </div>
                <span>直播推流</span>
              </div>
              <div class="node node-2">
                <div class="node-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M21 16V8A2 2 0 0 0 19 6H5A2 2 0 0 0 3 8V16A2 2 0 0 0 5 18H19A2 2 0 0 0 21 16Z" stroke="currentColor" stroke-width="2"/>
                    <path d="M7 10L12 15L17 10" stroke="currentColor" stroke-width="2"/>
                  </svg>
                </div>
                <span>云端转码</span>
              </div>
              <div class="node node-3">
                <div class="node-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" stroke-width="2"/>
                    <path d="M2 17L12 22L22 17" stroke="currentColor" stroke-width="2"/>
                  </svg>
                </div>
                <span>CDN分发</span>
              </div>
              <div class="node node-4">
                <div class="node-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" stroke="currentColor" stroke-width="2"/>
                    <path d="M8 21L16 21" stroke="currentColor" stroke-width="2"/>
                    <path d="M12 17L12 21" stroke="currentColor" stroke-width="2"/>
                  </svg>
                </div>
                <span>多端播放</span>
              </div>
            </div>
            <div class="connection-streams">
              <div class="stream stream-1"></div>
              <div class="stream stream-2"></div>
              <div class="stream stream-3"></div>
              <div class="stream stream-4"></div>
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
          <h2 class="section-title">全场景音视频服务</h2>
          <p class="section-description">
            从直播推流到点播回看，从实时互动到内容分发，
            我们提供覆盖音视频全链路的技术解决方案。
          </p>
        </div>
        
        <div class="solutions-grid">
          <div class="solution-card featured">
            <div class="card-header">
              <div class="solution-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="2"/>
                  <path d="M12 1V3M12 21V23M4.22 4.22L5.64 5.64M18.36 18.36L19.78 19.78M1 12H3M21 12H23M4.22 19.78L5.64 18.36M18.36 5.64L19.78 4.22" stroke="currentColor" stroke-width="2"/>
                </svg>
              </div>
              <div class="solution-category">实时直播</div>
            </div>
            <h3>超低延迟直播</h3>
            <p>支持RTMP、WebRTC等多种推流协议，提供毫秒级延迟的实时直播体验。</p>
            <div class="solution-features">
              <div class="feature-item">
                <span class="feature-icon">⚡</span>
                <span>超低延迟</span>
              </div>
              <div class="feature-item">
                <span class="feature-icon">🔄</span>
                <span>多协议支持</span>
              </div>
              <div class="feature-item">
                <span class="feature-icon">📱</span>
                <span>多端推流</span>
              </div>
            </div>
            <div class="solution-metrics">
              <div class="metric">
                <span class="metric-value">< 300ms</span>
                <span class="metric-label">延迟时间</span>
              </div>
              <div class="metric">
                <span class="metric-value">4K</span>
                <span class="metric-label">最高画质</span>
              </div>
            </div>
          </div>
          
          <div class="solution-card">
            <div class="card-header">
              <div class="solution-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                  <path d="M21 16V8A2 2 0 0 0 19 6H5A2 2 0 0 0 3 8V16A2 2 0 0 0 5 18H19A2 2 0 0 0 21 16Z" stroke="currentColor" stroke-width="2"/>
                  <path d="M7 10L12 15L17 10" stroke="currentColor" stroke-width="2"/>
                </svg>
              </div>
              <div class="solution-category">点播服务</div>
            </div>
            <h3>智能点播系统</h3>
            <p>提供视频上传、转码、存储、分发的一站式点播解决方案。</p>
            <div class="solution-features">
              <div class="feature-item">
                <span class="feature-icon">🎬</span>
                <span>智能转码</span>
              </div>
              <div class="feature-item">
                <span class="feature-icon">☁️</span>
                <span>云端存储</span>
              </div>
            </div>
          </div>
          
          <div class="solution-card">
            <div class="card-header">
              <div class="solution-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" stroke-width="2"/>
                  <path d="M2 17L12 22L22 17" stroke="currentColor" stroke-width="2"/>
                </svg>
              </div>
              <div class="solution-category">内容分发</div>
            </div>
            <h3>全球CDN加速</h3>
            <p>覆盖全球的CDN节点网络，确保用户就近访问，提升观看体验。</p>
            <div class="solution-features">
              <div class="feature-item">
                <span class="feature-icon">🌍</span>
                <span>全球覆盖</span>
              </div>
              <div class="feature-item">
                <span class="feature-icon">🚀</span>
                <span>智能调度</span>
              </div>
            </div>
          </div>
          
          <div class="solution-card">
            <div class="card-header">
              <div class="solution-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                  <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" stroke-width="2"/>
                  <circle cx="9" cy="7" r="4" stroke="currentColor" stroke-width="2"/>
                  <path d="M23 21V19C23 18.1645 22.7155 17.3541 22.2094 16.7007C21.7033 16.0473 20.9999 15.5922 20.2 15.4172" stroke="currentColor" stroke-width="2"/>
                  <path d="M16 3.13C16.8003 3.30491 17.5037 3.75904 18.0098 4.41242C18.5159 5.06579 18.8004 5.87622 18.8004 6.71154C18.8004 7.54685 18.5159 8.35728 18.0098 9.01066C17.5037 9.66404 16.8003 10.1182 16 10.2931" stroke="currentColor" stroke-width="2"/>
                </svg>
              </div>
              <div class="solution-category">互动功能</div>
            </div>
            <h3>实时互动体验</h3>
            <p>支持弹幕、连麦、礼物打赏等丰富的互动功能，提升用户参与度。</p>
            <div class="solution-features">
              <div class="feature-item">
                <span class="feature-icon">💬</span>
                <span>实时弹幕</span>
              </div>
              <div class="feature-item">
                <span class="feature-icon">🎤</span>
                <span>语音连麦</span>
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
          <h2 class="section-title">先进的音视频技术栈</h2>
          <p class="section-description">
            基于云原生架构，采用业界领先的音视频编解码技术，确保高质量的服务体验。
          </p>
        </div>
        
        <div class="tech-grid">
          <div class="tech-category">
            <h3>推流技术</h3>
            <div class="tech-items">
              <div class="tech-item">RTMP</div>
              <div class="tech-item">WebRTC</div>
              <div class="tech-item">SRT</div>
              <div class="tech-item">RTSP</div>
            </div>
          </div>
          
          <div class="tech-category">
            <h3>编解码</h3>
            <div class="tech-items">
              <div class="tech-item">H.264/AVC</div>
              <div class="tech-item">H.265/HEVC</div>
              <div class="tech-item">VP9</div>
              <div class="tech-item">AV1</div>
            </div>
          </div>
          
          <div class="tech-category">
            <h3>播放协议</h3>
            <div class="tech-items">
              <div class="tech-item">HLS</div>
              <div class="tech-item">DASH</div>
              <div class="tech-item">FLV</div>
              <div class="tech-item">WebRTC</div>
            </div>
          </div>
          
          <div class="tech-category">
            <h3>云服务</h3>
            <div class="tech-items">
              <div class="tech-item">AWS</div>
              <div class="tech-item">阿里云</div>
              <div class="tech-item">腾讯云</div>
              <div class="tech-item">华为云</div>
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
          <h2 class="section-title">专业级服务能力</h2>
        </div>
        
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" stroke-width="2"/>
              </svg>
            </div>
            <h3>超低延迟</h3>
            <p>采用先进的传输协议和边缘计算技术，实现毫秒级的直播延迟。</p>
          </div>
          
          <div class="feature-card">
            <div class="feature-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" stroke-width="2"/>
                <path d="M2 17L12 22L22 17" stroke="currentColor" stroke-width="2"/>
              </svg>
            </div>
            <h3>全球加速</h3>
            <p>覆盖全球的CDN节点网络，确保用户就近访问，提升观看体验。</p>
          </div>
          
          <div class="feature-card">
            <div class="feature-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2" stroke="currentColor" stroke-width="2"/>
                <path d="M8 21L16 21" stroke="currentColor" stroke-width="2"/>
                <path d="M12 17L12 21" stroke="currentColor" stroke-width="2"/>
              </svg>
            </div>
            <h3>多端适配</h3>
            <p>支持PC、移动端、智能电视等多种终端设备的播放适配。</p>
          </div>
          
          <div class="feature-card">
            <div class="feature-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" stroke-width="2"/>
              </svg>
            </div>
            <h3>高可用性</h3>
            <p>99.9%的服务可用性保障，多重容灾备份确保服务稳定运行。</p>
          </div>
          
          <div class="feature-card">
            <div class="feature-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                <path d="M12 6V4M6 12H4M18 12H20M12 18V20" stroke="currentColor" stroke-width="2"/>
                <circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="2"/>
              </svg>
            </div>
            <h3>智能转码</h3>
            <p>自适应码率转码，根据网络状况自动调整画质，确保流畅播放。</p>
          </div>
          
          <div class="feature-card">
            <div class="feature-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                <path d="M12 1L21.5 6.5V17.5L12 23L2.5 17.5V6.5L12 1Z" stroke="currentColor" stroke-width="2"/>
              </svg>
            </div>
            <h3>安全防护</h3>
            <p>提供防盗链、访问控制、内容加密等多重安全防护机制。</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Performance Section -->
    <section class="performance-section">
      <div class="container">
        <div class="section-header">
          <div class="section-badge">性能指标</div>
          <h2 class="section-title">行业领先的服务性能</h2>
          <p class="section-description">
            通过持续的技术优化和基础设施升级，我们为客户提供业界领先的服务性能。
          </p>
        </div>
        
        <div class="performance-grid">
          <div class="performance-card">
            <div class="performance-icon">⚡</div>
            <div class="performance-value">< 300ms</div>
            <div class="performance-label">全球平均延迟</div>
            <div class="performance-description">基于全球CDN网络的智能调度</div>
          </div>
          
          <div class="performance-card">
            <div class="performance-icon">📊</div>
            <div class="performance-value">99.9%</div>
            <div class="performance-label">服务可用性</div>
            <div class="performance-description">多重容灾备份保障</div>
          </div>
          
          <div class="performance-card">
            <div class="performance-icon">🎯</div>
            <div class="performance-value">4K@60fps</div>
            <div class="performance-label">最高画质支持</div>
            <div class="performance-description">超高清视频流畅播放</div>
          </div>
          
          <div class="performance-card">
            <div class="performance-icon">🌐</div>
            <div class="performance-value">200+</div>
            <div class="performance-label">全球节点数</div>
            <div class="performance-description">覆盖六大洲的CDN网络</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Use Cases Section -->
    <section class="use-cases-section">
      <div class="container">
        <div class="section-header">
          <div class="section-badge">应用场景</div>
          <h2 class="section-title">广泛的行业应用</h2>
          <p class="section-description">
            我们的音视频解决方案已在多个行业得到成功应用，为不同场景提供定制化服务。
          </p>
        </div>
        
        <div class="use-cases-grid">
          <div class="use-case-card">
            <div class="use-case-icon">🎓</div>
            <h3>在线教育</h3>
            <p>支持大规模在线课堂、互动教学、课程录播等教育场景。</p>
            <div class="use-case-features">
              <span>互动白板</span>
              <span>屏幕共享</span>
              <span>课程回放</span>
            </div>
          </div>
          
          <div class="use-case-card">
            <div class="use-case-icon">🛒</div>
            <h3>电商直播</h3>
            <p>为电商平台提供商品展示、实时互动、购买转化的直播解决方案。</p>
            <div class="use-case-features">
              <span>商品展示</span>
              <span>实时下单</span>
              <span>数据分析</span>
            </div>
          </div>
          
          <div class="use-case-card">
            <div class="use-case-icon">🎮</div>
            <h3>游戏直播</h3>
            <p>专为游戏直播优化的低延迟、高画质传输解决方案。</p>
            <div class="use-case-features">
              <span>超低延迟</span>
              <span>高帧率</span>
              <span>弹幕互动</span>
            </div>
          </div>
          
          <div class="use-case-card">
            <div class="use-case-icon">🏢</div>
            <h3>企业会议</h3>
            <p>提供高清视频会议、屏幕共享、会议录制等企业级服务。</p>
            <div class="use-case-features">
              <span>多方会议</span>
              <span>屏幕共享</span>
              <span>会议录制</span>
            </div>
          </div>
          
          <div class="use-case-card">
            <div class="use-case-icon">🎵</div>
            <h3>娱乐直播</h3>
            <p>支持音乐、表演、聊天等娱乐内容的直播平台解决方案。</p>
            <div class="use-case-features">
              <span>美颜滤镜</span>
              <span>礼物打赏</span>
              <span>PK连麦</span>
            </div>
          </div>
          
          <div class="use-case-card">
            <div class="use-case-icon">📺</div>
            <h3>媒体广播</h3>
            <p>为传统媒体提供数字化转型的直播点播技术支持。</p>
            <div class="use-case-features">
              <span>多路信号</span>
              <span>实时切换</span>
              <span>内容分发</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="container">
        <div class="cta-content">
          <h2>准备构建您的音视频平台？</h2>
          <p>联系我们的技术专家，获取定制化的直播点播解决方案和专业技术支持。</p>
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
  title: '直播点播解决方案 - 中联方舟',
  meta: [
    { name: 'description', content: '专业的直播点播技术解决方案，提供超低延迟直播、智能转码、全球CDN加速等音视频服务。' },
    { name: 'keywords', content: '直播,点播,音视频,CDN,实时流媒体,视频云服务' }
  ]
})
</script>

<style scoped>
/* 直播点播主题样式 */
.live-streaming-page {
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
  background: radial-gradient(circle at 25% 25%, rgba(var(--streaming-accent-primary-rgb), 0.1) 0%, transparent 50%),
              radial-gradient(circle at 75% 75%, rgba(var(--streaming-accent-secondary-rgb), 0.1) 0%, transparent 50%);
}

.streaming-waves {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.wave {
  position: absolute;
  width: 200%;
  height: 200%;
  background: linear-gradient(45deg, transparent, rgba(var(--streaming-accent-primary-rgb), 0.1), transparent);
  animation: waveMove 15s ease-in-out infinite;
}

.wave-1 {
  top: -50%;
  left: -50%;
  animation-delay: 0s;
}

.wave-2 {
  top: -50%;
  left: -50%;
  animation-delay: 5s;
  background: linear-gradient(45deg, transparent, rgba(var(--streaming-accent-secondary-rgb), 0.1), transparent);
}

.wave-3 {
  top: -50%;
  left: -50%;
  animation-delay: 10s;
  background: linear-gradient(45deg, transparent, rgba(var(--streaming-accent-tertiary-rgb), 0.1), transparent);
}

@keyframes waveMove {
  0%, 100% { transform: rotate(0deg) scale(1); }
  50% { transform: rotate(180deg) scale(1.2); }
}

.floating-elements {
  position: absolute;
  width: 100%;
  height: 100%;
}

.element {
  position: absolute;
  background: linear-gradient(45deg, var(--streaming-accent-primary), var(--streaming-accent-secondary));
  border-radius: 50%;
  opacity: 0.1;
  animation: float 8s ease-in-out infinite;
}

.element-1 {
  width: 80px;
  height: 80px;
  top: 15%;
  left: 10%;
  animation-delay: 0s;
}

.element-2 {
  width: 100px;
  height: 100px;
  top: 70%;
  right: 15%;
  animation-delay: 2s;
}

.element-3 {
  width: 60px;
  height: 60px;
  bottom: 20%;
  left: 20%;
  animation-delay: 4s;
}

.element-4 {
  width: 90px;
  height: 90px;
  top: 10%;
  right: 25%;
  animation-delay: 1s;
}

@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-30px) rotate(180deg); }
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
  background: rgba(var(--streaming-accent-primary-rgb), 0.1);
  border: 1px solid rgba(var(--streaming-accent-primary-rgb), 0.2);
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
  background: linear-gradient(135deg, var(--streaming-accent-primary) 0%, var(--streaming-accent-secondary) 100%);
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
  color: var(--streaming-accent-primary);
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
  background: linear-gradient(135deg, var(--streaming-accent-primary) 0%, var(--streaming-accent-secondary) 100%);
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
  box-shadow: 0 10px 25px rgba(var(--streaming-accent-primary-rgb), 0.3);
}

.btn-secondary {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: transparent;
  color: var(--text-primary);
  padding: 0.875rem 1.5rem;
  border: 1px solid rgba(var(--text-primary-rgb), 0.2);
  border-radius: 0.5rem;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
}

.btn-secondary:hover {
  background: rgba(var(--text-primary-rgb), 0.1);
  border-color: rgba(var(--text-primary-rgb), 0.3);
}

/* Streaming Illustration */
.streaming-illustration {
  position: relative;
  width: 400px;
  height: 400px;
  margin: 0 auto;
}

.central-server {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100px;
  height: 100px;
}

.server-core {
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, var(--streaming-accent-primary), var(--streaming-accent-secondary));
  border-radius: 15px;
  animation: serverPulse 3s ease-in-out infinite;
  position: relative;
}

.server-core::before {
  content: '';
  position: absolute;
  top: 25%;
  left: 25%;
  right: 25%;
  bottom: 25%;
  background: rgba(var(--text-primary-rgb), 0.3);
  border-radius: 8px;
}

.data-flow {
  position: absolute;
  top: -15px;
  left: -15px;
  right: -15px;
  bottom: -15px;
  border: 2px solid rgba(var(--streaming-accent-primary-rgb), 0.3);
  border-radius: 20px;
  animation: dataRotate 10s linear infinite;
}

@keyframes serverPulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
}

@keyframes dataRotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.streaming-nodes {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.node {
  position: absolute;
  width: 80px;
  height: 80px;
  background: rgba(var(--bg-primary-rgb), 0.9);
  border: 2px solid rgba(var(--streaming-accent-primary-rgb), 0.3);
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  backdrop-filter: blur(10px);
  animation: nodeFloat 6s ease-in-out infinite;
}

.node-1 {
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  animation-delay: 0s;
}

.node-2 {
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
  animation-delay: 1.5s;
}

.node-3 {
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  animation-delay: 3s;
}

.node-4 {
  top: 50%;
  left: 20px;
  transform: translateY(-50%);
  animation-delay: 4.5s;
}

@keyframes nodeFloat {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

.node-icon {
  width: 30px;
  height: 30px;
  color: var(--streaming-accent-primary);
}

.node span {
  font-size: 0.75rem;
  color: var(--text-secondary);
  text-align: center;
}

.connection-streams {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.stream {
  position: absolute;
  background: linear-gradient(90deg, transparent, rgba(var(--streaming-accent-primary-rgb), 0.6), transparent);
  height: 3px;
  animation: streamFlow 4s ease-in-out infinite;
}

.stream-1 {
  top: 50%;
  left: 50%;
  right: 20%;
  transform: translateY(-50%);
  animation-delay: 0s;
}

.stream-2 {
  top: 20%;
  left: 50%;
  width: 3px;
  height: 30%;
  background: linear-gradient(180deg, transparent, rgba(var(--streaming-accent-primary-rgb), 0.6), transparent);
  transform: translateX(-50%);
  animation-delay: 1s;
}

.stream-3 {
  bottom: 20%;
  left: 20%;
  right: 50%;
  transform: translateY(50%);
  animation-delay: 2s;
}

.stream-4 {
  top: 50%;
  left: 20%;
  width: 3px;
  height: 30%;
  background: linear-gradient(180deg, transparent, rgba(var(--streaming-accent-primary-rgb), 0.6), transparent);
  transform: translateX(-50%) translateY(-50%);
  animation-delay: 3s;
}

@keyframes streamFlow {
  0%, 100% { opacity: 0.3; }
  50% { opacity: 1; }
}

/* Solutions Section */
.solutions-section {
  padding: 6rem 0;
  background: rgba(var(--bg-primary-rgb), 0.5);
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
  background: rgba(var(--streaming-accent-primary-rgb), 0.1);
  border: 1px solid rgba(var(--streaming-accent-primary-rgb), 0.2);
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  font-size: 0.875rem;
  font-weight: 500;
  margin-bottom: 1rem;
  color: var(--streaming-accent-primary);
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
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
  background: rgba(var(--bg-primary-rgb), 0.8);
  border: 1px solid rgba(var(--streaming-accent-primary-rgb), 0.1);
  border-radius: 1rem;
  padding: 2rem;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.solution-card:hover {
  transform: translateY(-5px);
  border-color: rgba(var(--streaming-accent-primary-rgb), 0.3);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

.solution-card.featured {
  border-color: rgba(var(--streaming-accent-primary-rgb), 0.3);
  background: linear-gradient(135deg, rgba(var(--streaming-accent-primary-rgb), 0.1) 0%, rgba(var(--streaming-accent-secondary-rgb), 0.1) 100%);
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
  background: linear-gradient(135deg, var(--streaming-accent-primary), var(--streaming-accent-secondary));
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}

.solution-category {
  font-size: 0.875rem;
  color: var(--streaming-accent-primary);
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
  background: rgba(var(--streaming-accent-primary-rgb), 0.1);
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
  border-top: 1px solid rgba(var(--streaming-accent-primary-rgb), 0.1);
}

.metric {
  text-align: center;
}

.metric-value {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--streaming-accent-primary);
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
  background: rgba(var(--bg-secondary-rgb), 0.5);
}

.tech-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.tech-category {
  background: rgba(var(--bg-primary-rgb), 0.8);
  border: 1px solid rgba(var(--streaming-accent-primary-rgb), 0.1);
  border-radius: 1rem;
  padding: 2rem;
  backdrop-filter: blur(10px);
}

.tech-category h3 {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: var(--streaming-accent-primary);
}

.tech-items {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.tech-item {
  background: rgba(var(--streaming-accent-primary-rgb), 0.1);
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  color: var(--text-primary);
  font-size: 0.875rem;
  border: 1px solid rgba(var(--streaming-accent-primary-rgb), 0.2);
  transition: all 0.3s ease;
}

.tech-item:hover {
  background: rgba(var(--streaming-accent-primary-rgb), 0.2);
  border-color: rgba(var(--streaming-accent-primary-rgb), 0.3);
}

/* Features Section */
.features-section {
  padding: 6rem 0;
  background: rgba(var(--bg-primary-rgb), 0.5);
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.feature-card {
  background: rgba(var(--bg-primary-rgb), 0.8);
  border: 1px solid rgba(var(--streaming-accent-primary-rgb), 0.1);
  border-radius: 1rem;
  padding: 2rem;
  text-align: center;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.feature-card:hover {
  transform: translateY(-5px);
  border-color: rgba(var(--streaming-accent-primary-rgb), 0.3);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

.feature-icon {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, var(--streaming-accent-primary), var(--streaming-accent-secondary));
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

/* Performance Section */
.performance-section {
  padding: 6rem 0;
  background: rgba(var(--bg-secondary-rgb), 0.5);
}

.performance-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.performance-card {
  background: rgba(var(--bg-primary-rgb), 0.8);
  border: 1px solid rgba(var(--streaming-accent-primary-rgb), 0.1);
  border-radius: 1rem;
  padding: 2rem;
  text-align: center;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.performance-card:hover {
  transform: translateY(-5px);
  border-color: rgba(var(--streaming-accent-primary-rgb), 0.3);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

.performance-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.performance-value {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--streaming-accent-primary);
  margin-bottom: 0.5rem;
}

.performance-label {
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
}

.performance-description {
  font-size: 0.875rem;
  color: var(--text-secondary);
}

/* Use Cases Section */
.use-cases-section {
  padding: 6rem 0;
  background: rgba(var(--bg-primary-rgb), 0.5);
}

.use-cases-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.use-case-card {
  background: rgba(var(--bg-primary-rgb), 0.8);
  border: 1px solid rgba(var(--streaming-accent-primary-rgb), 0.1);
  border-radius: 1rem;
  padding: 2rem;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.use-case-card:hover {
  transform: translateY(-5px);
  border-color: rgba(var(--streaming-accent-primary-rgb), 0.3);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

.use-case-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.use-case-card h3 {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: var(--text-primary);
}

.use-case-card p {
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.use-case-features {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.use-case-features span {
  background: rgba(var(--streaming-accent-primary-rgb), 0.1);
  color: var(--text-primary);
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.75rem;
  border: 1px solid rgba(var(--streaming-accent-primary-rgb), 0.2);
}

/* CTA Section */
.cta-section {
  padding: 6rem 0;
  background: linear-gradient(135deg, rgba(var(--streaming-accent-primary-rgb), 0.1) 0%, rgba(var(--streaming-accent-secondary-rgb), 0.1) 100%);
  border-top: 1px solid rgba(var(--streaming-accent-primary-rgb), 0.1);
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
  
  .streaming-illustration {
    width: 300px;
    height: 300px;
  }
  
  .solutions-grid,
  .tech-grid,
  .features-grid,
  .performance-grid,
  .use-cases-grid {
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