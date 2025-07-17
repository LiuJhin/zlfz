<template>
  <div class="strategy-consulting-page">
    <!-- Hero Section with Advanced Background -->
    <section class="hero-section">
      <div class="hero-background">
        <div class="geometric-pattern">
          <div class="pattern-layer layer-1">
            <div class="hexagon" v-for="i in 12" :key="i" :style="{ animationDelay: i * 0.2 + 's' }"></div>
          </div>
          <div class="pattern-layer layer-2">
            <div class="circuit-line" v-for="i in 8" :key="i"></div>
          </div>
        </div>
        <div class="floating-elements">
          <div class="element element-1">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L20 7V17L12 22L4 17V7L12 2Z" stroke="currentColor" stroke-width="2"/>
              <path d="M12 8V16M8 10L16 14M8 14L16 10" stroke="currentColor" stroke-width="2"/>
            </svg>
          </div>
          <div class="element element-2">
            <svg width="35" height="35" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="2"/>
              <path d="M12 1V3M12 21V23M4.22 4.22L5.64 5.64M18.36 18.36L19.78 19.78M1 12H3M21 12H23M4.22 19.78L5.64 18.36M18.36 5.64L19.78 4.22" stroke="currentColor" stroke-width="2"/>
            </svg>
          </div>
          <div class="element element-3">
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
              <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" stroke-width="2"/>
            </svg>
          </div>
        </div>
      </div>
      
      <div class="hero-content">
        <div class="container">
          <div class="content-wrapper">
            <div class="hero-text">
              <div class="hero-badge">
                <span class="badge-icon">🚀</span>
                <span class="badge-text">Enterprise Cloud Strategy</span>
              </div>
              
              <h1 class="hero-title">
                智能云战略
                <span class="highlight-text">咨询规划</span>
              </h1>
              
              <p class="hero-description">
                基于前沿技术和丰富经验，为企业量身定制云计算战略蓝图，
                助力数字化转型升级，构建面向未来的智能化IT架构。
              </p>
              
              <div class="hero-stats">
                <div class="stat-item">
                  <div class="stat-number">500+</div>
                  <div class="stat-label">成功案例</div>
                </div>
                <div class="stat-item">
                  <div class="stat-number">98%</div>
                  <div class="stat-label">客户满意度</div>
                </div>
                <div class="stat-item">
                  <div class="stat-number">60%</div>
                  <div class="stat-label">平均成本节省</div>
                </div>
              </div>
              
              <div class="hero-actions">
                <a href="/contact" class="btn-primary">
                  <span>免费咨询</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" stroke-width="2"/>
                  </svg>
                </a>
                <a href="#services" class="btn-outline">
                  <span>服务详情</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M12 5V19M5 12L12 19L19 12" stroke="currentColor" stroke-width="2"/>
                  </svg>
                </a>
              </div>
            </div>
            
            <div class="hero-visual">
              <div class="strategy-dashboard">
                <div class="dashboard-header">
                  <div class="header-title">
                    <span class="title-icon">📊</span>
                    <span>云战略控制台</span>
                  </div>
                  <div class="status-indicator">
                    <span class="status-dot"></span>
                    <span class="status-text">实时分析</span>
                  </div>
                </div>
                
                <div class="dashboard-content">
                  <div class="metrics-grid">
                    <div class="metric-card">
                      <div class="metric-icon">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                          <path d="M3 3V21H21" stroke="currentColor" stroke-width="2"/>
                          <path d="M7 12L12 7L16 11L21 6" stroke="currentColor" stroke-width="2"/>
                        </svg>
                      </div>
                      <div class="metric-info">
                        <div class="metric-value">85%</div>
                        <div class="metric-name">效率提升</div>
                      </div>
                    </div>
                    
                    <div class="metric-card">
                      <div class="metric-icon">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                          <path d="M12 2L20 7V17L12 22L4 17V7L12 2Z" stroke="currentColor" stroke-width="2"/>
                        </svg>
                      </div>
                      <div class="metric-info">
                        <div class="metric-value">99.9%</div>
                        <div class="metric-name">可用性</div>
                      </div>
                    </div>
                  </div>
                  
                  <div class="strategy-chart">
                    <div class="chart-header">
                      <span>云成熟度评估</span>
                    </div>
                    <div class="chart-visual">
                      <div class="progress-rings">
                        <div class="ring-item">
                          <div class="progress-ring" data-progress="75">
                            <svg width="60" height="60">
                              <circle cx="30" cy="30" r="25" stroke="#e5e7eb" stroke-width="4" fill="none"/>
                              <circle cx="30" cy="30" r="25" stroke="#6366f1" stroke-width="4" fill="none" 
                                      stroke-dasharray="157" stroke-dashoffset="39" stroke-linecap="round"/>
                            </svg>
                            <div class="ring-value">75%</div>
                          </div>
                          <div class="ring-label">基础设施</div>
                        </div>
                        
                        <div class="ring-item">
                          <div class="progress-ring" data-progress="60">
                            <svg width="60" height="60">
                              <circle cx="30" cy="30" r="25" stroke="#e5e7eb" stroke-width="4" fill="none"/>
                              <circle cx="30" cy="30" r="25" stroke="#8b5cf6" stroke-width="4" fill="none" 
                                      stroke-dasharray="157" stroke-dashoffset="63" stroke-linecap="round"/>
                            </svg>
                            <div class="ring-value">60%</div>
                          </div>
                          <div class="ring-label">应用现代化</div>
                        </div>
                        
                        <div class="ring-item">
                          <div class="progress-ring" data-progress="90">
                            <svg width="60" height="60">
                              <circle cx="30" cy="30" r="25" stroke="#e5e7eb" stroke-width="4" fill="none"/>
                              <circle cx="30" cy="30" r="25" stroke="#10b981" stroke-width="4" fill="none" 
                                      stroke-dasharray="157" stroke-dashoffset="16" stroke-linecap="round"/>
                            </svg>
                            <div class="ring-value">90%</div>
                          </div>
                          <div class="ring-label">安全合规</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div class="recommendations">
                    <div class="rec-header">
                      <span>智能建议</span>
                    </div>
                    <div class="rec-list">
                      <div class="rec-item">
                        <span class="rec-icon">💡</span>
                        <span class="rec-text">优化容器编排策略</span>
                        <span class="rec-priority high">高</span>
                      </div>
                      <div class="rec-item">
                        <span class="rec-icon">🔧</span>
                        <span class="rec-text">实施自动化运维</span>
                        <span class="rec-priority medium">中</span>
                      </div>
                      <div class="rec-item">
                        <span class="rec-icon">📊</span>
                        <span class="rec-text">部署监控体系</span>
                        <span class="rec-priority low">低</span>
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

    <!-- Services Section -->
    <section id="services" class="services-section">
      <div class="container">
        <div class="section-header">
          <div class="header-badge">
            <span class="badge-icon">⚡</span>
            <span class="badge-text">核心服务</span>
          </div>
          <h2>全方位云战略咨询服务</h2>
          <p>从战略规划到落地实施，提供端到端的专业咨询服务</p>
        </div>
        
        <div class="services-grid">
          <div class="service-card featured">
            <div class="card-header">
              <div class="service-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                  <path d="M9 11H15M9 15H15M17 21H7C5.89543 21 5 20.1046 5 19V5C5 3.89543 5.89543 3 7 3H12.5858C12.851 3 13.1054 3.10536 13.2929 3.29289L19.7071 9.70711C19.8946 9.89464 20 10.149 20 10.4142V19C20 20.1046 19.1046 21 18 21H17Z" stroke="currentColor" stroke-width="2"/>
                </svg>
              </div>
              <div class="featured-badge">推荐</div>
            </div>
            <h3>云战略评估与规划</h3>
            <p>深度分析企业现状，制定个性化云战略路线图，确保数字化转型成功。</p>
            <div class="service-features">
              <span class="feature-tag">现状评估</span>
              <span class="feature-tag">战略规划</span>
              <span class="feature-tag">路线图制定</span>
            </div>
          </div>
          
          <div class="service-card">
            <div class="card-header">
              <div class="service-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                  <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" stroke-width="2"/>
                </svg>
              </div>
            </div>
            <h3>云架构设计优化</h3>
            <p>设计高可用、可扩展的云技术架构，确保系统性能和安全性。</p>
            <div class="service-features">
              <span class="feature-tag">架构设计</span>
              <span class="feature-tag">性能优化</span>
              <span class="feature-tag">安全加固</span>
            </div>
          </div>
          
          <div class="service-card">
            <div class="card-header">
              <div class="service-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                  <path d="M12 6V4M6 12H4M18 12H20M12 18V20M7.05 7.05L5.64 5.64M16.95 7.05L18.36 5.64M7.05 16.95L5.64 18.36M16.95 16.95L18.36 18.36" stroke="currentColor" stroke-width="2"/>
                  <circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="2"/>
                </svg>
              </div>
            </div>
            <h3>成本优化分析</h3>
            <p>全面分析云资源使用情况，提供精准的成本优化建议和实施方案。</p>
            <div class="service-features">
              <span class="feature-tag">成本分析</span>
              <span class="feature-tag">资源优化</span>
              <span class="feature-tag">预算规划</span>
            </div>
          </div>
          
          <div class="service-card">
            <div class="card-header">
              <div class="service-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                  <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" stroke-width="2"/>
                </svg>
              </div>
            </div>
            <h3>风险评估与治理</h3>
            <p>识别潜在风险，制定完善的风险缓解策略和治理框架。</p>
            <div class="service-features">
              <span class="feature-tag">风险识别</span>
              <span class="feature-tag">合规检查</span>
              <span class="feature-tag">治理框架</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Process Section -->
    <section class="process-section">
      <div class="container">
        <div class="section-header">
          <div class="header-badge">
            <span class="badge-icon">🔄</span>
            <span class="badge-text">服务流程</span>
          </div>
          <h2>标准化咨询流程</h2>
          <p>采用成熟的方法论，确保项目高质量交付</p>
        </div>
        
        <div class="process-flow">
          <div class="flow-container">
            <div class="process-step" v-for="(step, index) in processSteps" :key="index">
              <div class="step-connector" v-if="index < processSteps.length - 1"></div>
              <div class="step-circle">
                <span class="step-number">{{ String(index + 1).padStart(2, '0') }}</span>
              </div>
              <div class="step-content">
                <h3>{{ step.title }}</h3>
                <p>{{ step.description }}</p>
                <div class="step-details">
                  <div class="detail-item" v-for="detail in step.details" :key="detail">
                    <span class="detail-icon">✓</span>
                    <span class="detail-text">{{ detail }}</span>
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
                <path d="M12 2L20 7V17L12 22L4 17V7L12 2Z" stroke="currentColor" stroke-width="2"/>
                <path d="M12 8V16M8 10L16 14M8 14L16 10" stroke="currentColor" stroke-width="2"/>
              </svg>
            </div>
            <h2>开启您的云战略转型之旅</h2>
            <p>
              与我们的专家团队合作，制定适合您企业的云战略规划，
              加速数字化转型，抢占市场先机。
            </p>
            <div class="cta-actions">
              <a href="/contact" class="btn-primary">
                <span>立即咨询</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" stroke-width="2"/>
                </svg>
              </a>
              <a href="#case-studies" class="btn-secondary">
                <span>成功案例</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M15 3H21V9M9 21H3V15M21 3L14 10M3 21L10 14" stroke="currentColor" stroke-width="2"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div class="cta-benefits">
            <div class="benefit-grid">
              <div class="benefit-item">
                <span class="benefit-icon">🎯</span>
                <div class="benefit-text">
                  <h4>精准定位</h4>
                  <p>量身定制的战略方案</p>
                </div>
              </div>
              <div class="benefit-item">
                <span class="benefit-icon">⚡</span>
                <div class="benefit-text">
                  <h4>快速响应</h4>
                  <p>7x24小时专家支持</p>
                </div>
              </div>
              <div class="benefit-item">
                <span class="benefit-icon">🛡️</span>
                <div class="benefit-text">
                  <h4>安全保障</h4>
                  <p>企业级安全防护</p>
                </div>
              </div>
              <div class="benefit-item">
                <span class="benefit-icon">📈</span>
                <div class="benefit-text">
                  <h4>持续优化</h4>
                  <p>长期价值提升</p>
                </div>
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
  title: '云战略咨询规划 - ZHILING ARK TECHNOLOGY',
  description: 'ZHILING ARK TECHNOLOGY提供专业的云战略咨询规划服务，助力企业数字化转型升级'
})

// SEO 头部信息
useHead({
  title: '云战略咨询规划 - ZHILING ARK TECHNOLOGY',
  meta: [
    { name: 'description', content: '专业的云战略规划与咨询服务，基于前沿技术和丰富经验，为企业量身定制云计算战略蓝图，助力数字化转型升级' },
    { name: 'keywords', content: '云战略,云咨询,云规划,数字化转型,云计算战略,企业云服务,云架构设计' }
  ]
})

// 流程步骤数据
const processSteps = [
  {
    title: '需求调研分析',
    description: '深入了解企业业务需求、技术现状和发展目标',
    details: ['业务流程梳理', '技术架构评估', '痛点问题识别']
  },
  {
    title: '现状全面评估',
    description: '评估现有IT基础设施、应用系统和数据架构',
    details: ['基础设施审计', '应用系统分析', '数据架构评估']
  },
  {
    title: '战略方案制定',
    description: '制定详细的云战略规划和实施路线图',
    details: ['战略目标设定', '技术路线规划', '实施计划制定']
  },
  {
    title: '方案交付实施',
    description: '提供完整的咨询报告和实施指导',
    details: ['详细报告交付', '实施指导培训', '持续支持服务']
  }
]
</script>

<style scoped>
.strategy-consulting-page {
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

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
}

.geometric-pattern {
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0.1;
}

.pattern-layer {
  position: absolute;
  width: 100%;
  height: 100%;
}

.layer-1 {
  z-index: 1;
}

.layer-2 {
  z-index: 2;
}

.hexagon {
  position: absolute;
  width: 60px;
  height: 60px;
  background: linear-gradient(45deg, var(--primary-color), var(--primary-color-light));
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  animation: hexagonFloat 8s ease-in-out infinite;
}

.hexagon:nth-child(1) { top: 10%; left: 10%; }
.hexagon:nth-child(2) { top: 20%; left: 80%; }
.hexagon:nth-child(3) { top: 40%; left: 15%; }
.hexagon:nth-child(4) { top: 60%; left: 85%; }
.hexagon:nth-child(5) { top: 80%; left: 20%; }
.hexagon:nth-child(6) { top: 15%; left: 60%; }
.hexagon:nth-child(7) { top: 70%; left: 60%; }
.hexagon:nth-child(8) { top: 30%; left: 40%; }
.hexagon:nth-child(9) { top: 50%; left: 70%; }
.hexagon:nth-child(10) { top: 25%; left: 30%; }
.hexagon:nth-child(11) { top: 75%; left: 40%; }
.hexagon:nth-child(12) { top: 45%; left: 90%; }

@keyframes hexagonFloat {
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
    opacity: 0.3;
  }
  33% {
    transform: translateY(-20px) rotate(120deg);
    opacity: 0.7;
  }
  66% {
    transform: translateY(10px) rotate(240deg);
    opacity: 0.5;
  }
}

.circuit-line {
  position: absolute;
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--primary-color), transparent);
  animation: circuitFlow 6s linear infinite;
}

.circuit-line:nth-child(1) { top: 20%; width: 200px; left: 10%; }
.circuit-line:nth-child(2) { top: 40%; width: 150px; right: 10%; }
.circuit-line:nth-child(3) { top: 60%; width: 180px; left: 20%; }
.circuit-line:nth-child(4) { top: 80%; width: 120px; right: 20%; }
.circuit-line:nth-child(5) { top: 30%; width: 160px; left: 50%; }
.circuit-line:nth-child(6) { top: 70%; width: 140px; right: 30%; }
.circuit-line:nth-child(7) { top: 50%; width: 100px; left: 70%; }
.circuit-line:nth-child(8) { top: 90%; width: 130px; left: 40%; }

@keyframes circuitFlow {
  0% {
    opacity: 0;
    transform: translateX(-100%);
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: translateX(100%);
  }
}

.floating-elements {
  position: absolute;
  width: 100%;
  height: 100%;
}

.element {
  position: absolute;
  color: rgba(99, 102, 241, 0.6);
  animation: elementFloat 10s ease-in-out infinite;
}

.element-1 {
  top: 15%;
  left: 20%;
  animation-delay: 0s;
}

.element-2 {
  top: 70%;
  right: 15%;
  animation-delay: 3s;
}

.element-3 {
  bottom: 20%;
  left: 70%;
  animation-delay: 6s;
}

@keyframes elementFloat {
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
    opacity: 0.4;
  }
  50% {
    transform: translateY(-30px) rotate(180deg);
    opacity: 0.8;
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
  background: linear-gradient(135deg, var(--primary-color), var(--primary-color-light));
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

.hero-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
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
  background: linear-gradient(135deg, var(--primary-color), var(--primary-color-dark));
  color: white;
  box-shadow: 0 4px 20px rgba(99, 102, 241, 0.3);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 30px rgba(99, 102, 241, 0.4);
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

/* Strategy Dashboard */
.hero-visual {
  display: flex;
  justify-content: center;
  align-items: center;
}

.strategy-dashboard {
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

.metrics-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
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

.strategy-chart {
  margin-bottom: 25px;
}

.chart-header {
  font-size: 0.9rem;
  color: var(--text-secondary);
  margin-bottom: 15px;
  font-weight: 500;
}

.chart-visual {
  background: var(--bg-secondary);
  border-radius: 12px;
  padding: 20px;
}

.progress-rings {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.ring-item {
  text-align: center;
}

.progress-ring {
  position: relative;
  margin-bottom: 10px;
}

.ring-value {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--text-primary);
}

.ring-label {
  font-size: 0.7rem;
  color: var(--text-secondary);
}

.recommendations {
  background: var(--bg-secondary);
  border-radius: 12px;
  padding: 15px;
}

.rec-header {
  font-size: 0.9rem;
  color: var(--text-secondary);
  margin-bottom: 15px;
  font-weight: 500;
}

.rec-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.rec-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 12px;
  background: var(--card-bg);
  border-radius: 8px;
  font-size: 0.8rem;
}

.rec-icon {
  font-size: 1rem;
}

.rec-text {
  flex: 1;
  color: var(--text-primary);
}

.rec-priority {
  padding: 2px 8px;
  border-radius: 10px;
  font-size: 0.7rem;
  font-weight: 500;
}

.rec-priority.high {
  background: #fef2f2;
  color: #dc2626;
}

.rec-priority.medium {
  background: #fef3c7;
  color: #d97706;
}

.rec-priority.low {
  background: #f0fdf4;
  color: #16a34a;
}

/* Services Section */
.services-section {
  padding: 100px 0;
  background: var(--bg-color);
}

.section-header {
  text-align: center;
  margin-bottom: 60px;
}

.header-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: var(--primary-color-light);
  color: var(--primary-color);
  padding: 6px 16px;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
  margin-bottom: 20px;
}

.section-header h2 {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 1rem;
}

.section-header p {
  font-size: 1.1rem;
  color: var(--text-secondary);
  max-width: 600px;
  margin: 0 auto;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.service-card {
  background: var(--card-bg);
  border-radius: 20px;
  padding: 30px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  border: 1px solid var(--border-color);
  transition: all 0.3s ease;
  position: relative;
}

.service-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

.service-card.featured {
  border: 2px solid var(--primary-color);
  background: linear-gradient(135deg, var(--card-bg), var(--primary-color-light));
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 20px;
}

.service-icon {
  width: 60px;
  height: 60px;
  background: var(--primary-color-light);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary-color);
}

.featured-badge {
  background: var(--primary-color);
  color: white;
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 500;
}

.service-card h3 {
  font-size: 1.3rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 15px;
}

.service-card p {
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 20px;
}

.service-features {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.feature-tag {
  background: var(--bg-secondary);
  color: var(--text-secondary);
  padding: 4px 12px;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 500;
}

/* Process Section */
.process-section {
  padding: 100px 0;
  background: var(--bg-secondary);
}

.process-flow {
  max-width: 1000px;
  margin: 0 auto;
}

.flow-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
}

.process-step {
  position: relative;
  background: var(--card-bg);
  border-radius: 20px;
  padding: 30px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  border: 1px solid var(--border-color);
}

.step-connector {
  position: absolute;
  top: 50%;
  right: -20px;
  width: 40px;
  height: 2px;
  background: var(--primary-color);
  z-index: 1;
}

.step-circle {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, var(--primary-color), var(--primary-color-dark));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  box-shadow: 0 4px 20px rgba(99, 102, 241, 0.3);
}

.step-number {
  color: white;
  font-size: 1.2rem;
  font-weight: 700;
}

.step-content h3 {
  font-size: 1.3rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 10px;
}

.step-content p {
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 15px;
}

.step-details {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.detail-item {
  display: flex;
  align-items: center;
  gap: 8px;
}

.detail-icon {
  width: 16px;
  height: 16px;
  background: var(--primary-color);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.7rem;
  font-weight: 600;
}

.detail-text {
  font-size: 0.9rem;
  color: var(--text-secondary);
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

.cta-benefits {
  display: flex;
  justify-content: center;
  align-items: center;
}

.benefit-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  width: 100%;
}

.benefit-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 15px 20px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  backdrop-filter: blur(10px);
}

.benefit-icon {
  font-size: 1.2rem;
}

.benefit-text h4 {
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 2px;
}

.benefit-text p {
  font-size: 0.8rem;
  opacity: 0.8;
  margin: 0;
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
  
  .flow-container {
    grid-template-columns: 1fr;
  }
  
  .step-connector {
    display: none;
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
  
  .hero-stats {
    grid-template-columns: 1fr;
  }
  
  .services-grid {
    grid-template-columns: 1fr;
  }
  
  .benefit-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 1.8rem;
  }
  
  .hero-actions {
    flex-direction: column;
  }
  
  .cta-actions {
    flex-direction: column;
  }
}
</style>