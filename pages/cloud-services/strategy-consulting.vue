<template>
  <div class="strategy-consulting-page">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-background">
        <div class="gradient-overlay"></div>
      </div>
      
      <div class="hero-content">
        <div class="container">
          <div class="content-wrapper">
            <div class="hero-text">
              <div class="hero-badge">
                <span class="badge-text">企业云战略</span>
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
                </a>
                <a href="#services" class="btn-outline">
                  <span>服务详情</span>
                </a>
              </div>
            </div>
            
            <div class="hero-visual">
              <div class="strategy-overview">
                <div class="overview-header">
                  <h3>云战略概览</h3>
                </div>
                
                <div class="overview-content">
                  <div class="metrics-simple">
                    <div class="metric-item">
                      <div class="metric-value">85%</div>
                      <div class="metric-label">效率提升</div>
                    </div>
                    <div class="metric-item">
                      <div class="metric-value">99.9%</div>
                      <div class="metric-label">可用性</div>
                    </div>
                    <div class="metric-item">
                      <div class="metric-value">60%</div>
                      <div class="metric-label">成本节省</div>
                    </div>
                  </div>
                  
                  <div class="key-benefits">
                    <div class="benefit-item">
                      <span>✓ 云原生架构设计</span>
                    </div>
                    <div class="benefit-item">
                      <span>✓ 成本优化策略</span>
                    </div>
                    <div class="benefit-item">
                      <span>✓ 安全合规保障</span>
                    </div>
                    <div class="benefit-item">
                      <span>✓ 持续运维支持</span>
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
            <span class="badge-text">核心服务</span>
          </div>
          <h2>全方位云战略咨询服务</h2>
          <p>从战略规划到落地实施，提供端到端的专业咨询服务</p>
        </div>
        
        <div class="services-grid">
          <div class="service-card featured">
            <div class="card-header">
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
            <h3>云架构设计优化</h3>
            <p>设计高可用、可扩展的云技术架构，确保系统性能和安全性。</p>
            <div class="service-features">
              <span class="feature-tag">架构设计</span>
              <span class="feature-tag">性能优化</span>
              <span class="feature-tag">安全加固</span>
            </div>
          </div>
          
          <div class="service-card">
            <h3>成本优化分析</h3>
            <p>全面分析云资源使用情况，提供精准的成本优化建议和实施方案。</p>
            <div class="service-features">
              <span class="feature-tag">成本分析</span>
              <span class="feature-tag">资源优化</span>
              <span class="feature-tag">预算规划</span>
            </div>
          </div>
          
          <div class="service-card">
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

    <!-- Case Studies Section -->
    <section id="case-studies" class="case-studies-section">
      <div class="container">
        <div class="section-header">
          <div class="header-badge">
            <span class="badge-text">成功案例</span>
          </div>
          <h2>客户成功案例</h2>
          <p>真实案例见证我们的专业实力和服务质量</p>
        </div>
        
        <div class="cases-grid">
          <div class="case-card">
            <div class="case-header">
              <div class="case-company">
                <div class="company-logo">
                  <span class="logo-text">金融集团</span>
                </div>
                <div class="company-info">
                  <h3>某大型金融集团</h3>
                  <span class="industry-tag">金融服务</span>
                </div>
              </div>
              <div class="case-result">
                <span class="result-value">60%</span>
                <span class="result-label">成本节省</span>
              </div>
            </div>
            <div class="case-content">
              <h4>全面云化转型战略</h4>
              <p>为该金融集团制定了完整的云化转型战略，包括核心业务系统迁移、数据中心整合和安全合规框架建设。</p>
              <div class="case-highlights">
                <div class="highlight-item">
                  <span>系统性能提升85%</span>
                </div>
                <div class="highlight-item">
                  <span>安全等级提升至金融级</span>
                </div>
                <div class="highlight-item">
                  <span>业务响应速度提升3倍</span>
                </div>
              </div>
            </div>
          </div>
          
          <div class="case-card">
            <div class="case-header">
              <div class="case-company">
                <div class="company-logo">
                  <span class="logo-text">制造企业</span>
                </div>
                <div class="company-info">
                  <h3>某制造业龙头企业</h3>
                  <span class="industry-tag">智能制造</span>
                </div>
              </div>
              <div class="case-result">
                <span class="result-value">40%</span>
                <span class="result-label">效率提升</span>
              </div>
            </div>
            <div class="case-content">
              <h4>智能制造云平台建设</h4>
              <p>构建了覆盖生产、供应链、销售全流程的智能制造云平台，实现了数据驱动的精益生产管理。</p>
              <div class="case-highlights">
                <div class="highlight-item">
                  <span>生产效率提升40%</span>
                </div>
                <div class="highlight-item">
                  <span>库存周转率提升50%</span>
                </div>
                <div class="highlight-item">
                  <span>产品质量提升30%</span>
                </div>
              </div>
            </div>
          </div>
          
          <div class="case-card">
            <div class="case-header">
              <div class="case-company">
                <div class="company-logo">
                  <span class="logo-text">零售集团</span>
                </div>
                <div class="company-info">
                  <h3>某新零售集团</h3>
                  <span class="industry-tag">新零售</span>
                </div>
              </div>
              <div class="case-result">
                <span class="result-value">200%</span>
                <span class="result-label">业务增长</span>
              </div>
            </div>
            <div class="case-content">
              <h4>全渠道数字化平台</h4>
              <p>打造了线上线下一体化的新零售平台，实现了全渠道客户体验优化和精准营销。</p>
              <div class="case-highlights">
                <div class="highlight-item">
                  <span>销售额增长200%</span>
                </div>
                <div class="highlight-item">
                  <span>客户满意度提升45%</span>
                </div>
                <div class="highlight-item">
                  <span>移动端转化率提升60%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Technology Advantages Section -->
    <section class="tech-advantages-section">
      <div class="container">
        <div class="section-header">
          <div class="header-badge">
            <span class="badge-text">技术优势</span>
          </div>
          <h2>领先的技术实力</h2>
          <p>基于前沿技术栈，提供企业级云战略解决方案</p>
        </div>
        
        <div class="tech-grid">
          <div class="tech-category">
            <h3>云原生技术</h3>
            <div class="tech-items">
              <div class="tech-item">
                <div class="tech-info">
                  <h4>Kubernetes</h4>
                  <p>容器编排与管理</p>
                </div>
              </div>
              <div class="tech-item">
                <div class="tech-info">
                  <h4>Docker</h4>
                  <p>应用容器化</p>
                </div>
              </div>
              <div class="tech-item">
                <div class="tech-info">
                  <h4>Helm</h4>
                  <p>应用包管理</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="tech-category">
            <h3>DevOps工具链</h3>
            <div class="tech-items">
              <div class="tech-item">
                <div class="tech-info">
                  <h4>Jenkins</h4>
                  <p>持续集成/部署</p>
                </div>
              </div>
              <div class="tech-item">
                <div class="tech-info">
                  <h4>GitLab</h4>
                  <p>代码管理与CI/CD</p>
                </div>
              </div>
              <div class="tech-item">
                <div class="tech-info">
                  <h4>Terraform</h4>
                  <p>基础设施即代码</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="tech-category">
            <h3>监控与运维</h3>
            <div class="tech-items">
              <div class="tech-item">
                <div class="tech-info">
                  <h4>Prometheus</h4>
                  <p>系统监控</p>
                </div>
              </div>
              <div class="tech-item">
                <div class="tech-info">
                  <h4>Grafana</h4>
                  <p>数据可视化</p>
                </div>
              </div>
              <div class="tech-item">
                <div class="tech-info">
                  <h4>ELK Stack</h4>
                  <p>日志分析</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Expert Team Section -->
    <section class="expert-team-section">
      <div class="container">
        <div class="section-header">
          <h2>资深云战略专家</h2>
          <p>汇聚行业顶尖人才，为您提供专业的云战略咨询服务</p>
        </div>
        
        <div class="experts-grid">
          <div class="expert-card">
            <div class="expert-avatar">
              <div class="avatar-placeholder">
                <span class="avatar-initial">张</span>
              </div>
              <div class="expert-badge">首席专家</div>
            </div>
            <div class="expert-info">
              <h3>张云峰</h3>
              <p class="expert-title">云战略首席架构师</p>
              <p class="expert-desc">15年云计算行业经验，曾任职于AWS、阿里云等知名云服务商，主导过100+大型企业云化项目。</p>
              <div class="expert-skills">
                <span class="skill-tag">云架构设计</span>
                <span class="skill-tag">数字化转型</span>
                <span class="skill-tag">企业咨询</span>
              </div>
            </div>
          </div>
          
          <div class="expert-card">
            <div class="expert-avatar">
              <div class="avatar-placeholder">
                <span class="avatar-initial">李</span>
              </div>
              <div class="expert-badge">技术专家</div>
            </div>
            <div class="expert-info">
              <h3>李明华</h3>
              <p class="expert-title">云原生技术专家</p>
              <p class="expert-desc">12年DevOps和云原生技术经验，Kubernetes认证专家，专注于容器化和微服务架构设计。</p>
              <div class="expert-skills">
                <span class="skill-tag">Kubernetes</span>
                <span class="skill-tag">微服务</span>
                <span class="skill-tag">DevOps</span>
              </div>
            </div>
          </div>
          
          <div class="expert-card">
            <div class="expert-avatar">
              <div class="avatar-placeholder">
                <span class="avatar-initial">王</span>
              </div>
              <div class="expert-badge">安全专家</div>
            </div>
            <div class="expert-info">
              <h3>王安全</h3>
              <p class="expert-title">云安全架构师</p>
              <p class="expert-desc">10年网络安全和云安全经验，CISSP认证专家，专注于企业级云安全架构设计和合规性评估。</p>
              <div class="expert-skills">
                <span class="skill-tag">云安全</span>
                <span class="skill-tag">合规评估</span>
                <span class="skill-tag">风险管理</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="faq-section">
      <div class="container">
        <div class="section-header">
          <h2>常见问题解答</h2>
          <p>解答您在云战略规划过程中的疑问</p>
        </div>
        
        <div class="faq-container">
          <div class="faq-item" v-for="(faq, index) in faqList" :key="index">
            <div class="faq-question" @click="toggleFaq(index)">
              <h3>{{ faq.question }}</h3>
              <div class="faq-toggle" :class="{ active: faq.isOpen }">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
            </div>
            <div class="faq-answer" :class="{ active: faq.isOpen }">
              <p>{{ faq.answer }}</p>
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
                <div class="benefit-text">
                  <h4>精准定位</h4>
                  <p>量身定制的战略方案</p>
                </div>
              </div>
              <div class="benefit-item">
                <div class="benefit-text">
                  <h4>快速响应</h4>
                  <p>7x24小时专家支持</p>
                </div>
              </div>
              <div class="benefit-item">
                <div class="benefit-text">
                  <h4>安全保障</h4>
                  <p>企业级安全防护</p>
                </div>
              </div>
              <div class="benefit-item">
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

// FAQ数据
const faqList = ref([
  {
    question: '云战略咨询服务包含哪些内容？',
    answer: '我们的云战略咨询服务包括现状评估、需求分析、架构设计、迁移规划、安全合规、成本优化、人员培训等全方位服务，为企业提供从规划到实施的完整解决方案。',
    isOpen: false
  },
  {
    question: '云化转型需要多长时间？',
    answer: '云化转型的时间因企业规模和复杂度而异。一般来说，中小企业需要3-6个月，大型企业可能需要6-18个月。我们会根据您的具体情况制定详细的时间规划。',
    isOpen: false
  },
  {
    question: '如何保证数据安全和合规性？',
    answer: '我们严格遵循国际安全标准和行业最佳实践，提供多层次的安全防护体系，包括数据加密、访问控制、审计日志等，确保满足各行业的合规要求。',
    isOpen: false
  },
  {
    question: '云化后的成本如何控制？',
    answer: '我们提供专业的成本优化建议，包括资源右配、预留实例、自动伸缩等策略，通常可以帮助企业节省30-60%的IT成本，同时提升系统性能和可靠性。',
    isOpen: false
  },
  {
    question: '是否提供后续的技术支持？',
    answer: '是的，我们提供7x24小时的技术支持服务，包括系统监控、故障处理、性能优化、安全更新等，确保您的云环境稳定高效运行。',
    isOpen: false
  }
])

// FAQ交互方法
const toggleFaq = (index) => {
  faqList.value[index].isOpen = !faqList.value[index].isOpen
}
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

/* Strategy Overview */
.hero-visual {
  display: flex;
  justify-content: center;
  align-items: center;
}

.strategy-overview {
  width: 100%;
  max-width: 500px;
  background: var(--card-bg);
  border-radius: 20px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  border: 1px solid var(--border-color);
  padding: 30px;
}

.overview-header {
  text-align: center;
  margin-bottom: 30px;
}

.overview-header h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--text-color);
  margin: 0;
}

.overview-content {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.metrics-simple {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.metric-item {
  text-align: center;
  padding: 20px 10px;
  background: var(--bg-secondary);
  border-radius: 12px;
  border: 1px solid var(--border-color);
}

.metric-item .metric-value {
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--primary-color);
  margin-bottom: 8px;
}

.metric-item .metric-label {
  font-size: 0.9rem;
  color: var(--text-secondary);
  font-weight: 500;
}

.key-benefits {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.benefit-item {
  padding: 12px 16px;
  background: var(--bg-secondary);
  border-radius: 8px;
  border: 1px solid var(--border-color);
  font-size: 0.95rem;
  color: var(--text-secondary);
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

/* Case Studies Section */
.case-studies-section {
  padding: 120px 0;
  background: var(--bg-color);
}

.cases-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 40px;
  margin-top: 60px;
}

.case-card {
  background: white;
  border-radius: 20px;
  padding: 40px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  border: 1px solid var(--border-color);
}

.case-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
}

.case-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 30px;
}

.case-company {
  display: flex;
  align-items: center;
  gap: 15px;
}

.company-logo {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, var(--primary-color), var(--primary-color-light));
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 600;
  font-size: 0.9rem;
}

.company-info h3 {
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 5px;
  color: var(--text-color);
}

.industry-tag {
  background: var(--primary-color-light);
  color: var(--primary-color);
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
}

.case-result {
  text-align: right;
}

.result-value {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--primary-color);
  display: block;
  line-height: 1;
}

.result-label {
  font-size: 0.9rem;
  color: var(--text-secondary);
  font-weight: 500;
}

.case-content h4 {
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 15px;
  color: var(--text-color);
}

.case-content p {
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 25px;
}

.case-highlights {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.highlight-item {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.95rem;
  color: var(--text-secondary);
}

.highlight-icon {
  font-size: 1.2rem;
}

/* Technology Advantages Section */
.tech-advantages-section {
  padding: 120px 0;
  background: var(--bg-secondary);
}

.tech-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 50px;
  margin-top: 60px;
}

.tech-category {
  background: white;
  border-radius: 20px;
  padding: 40px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  border: 1px solid var(--border-color);
}

.tech-category h3 {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 30px;
  color: var(--text-color);
  text-align: center;
}

.tech-items {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.tech-item {
  padding: 20px;
  background: var(--bg-color);
  border-radius: 12px;
  transition: all 0.3s ease;
}

.tech-item:hover {
  background: var(--primary-color-light);
  transform: translateX(5px);
}

.tech-info h4 {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 5px;
  color: var(--text-color);
}

.tech-info p {
  font-size: 0.95rem;
  color: var(--text-secondary);
  margin: 0;
}

/* Expert Team Section */
.expert-team-section {
  padding: 120px 0;
  background: var(--bg-color);
}

.experts-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 40px;
  margin-top: 60px;
}

.expert-card {
  background: white;
  border-radius: 20px;
  padding: 40px;
  text-align: center;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  border: 1px solid var(--border-color);
}

.expert-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
}

.expert-avatar {
  position: relative;
  display: inline-block;
  margin-bottom: 25px;
}

.avatar-placeholder {
  width: 100px;
  height: 100px;
  background: linear-gradient(135deg, var(--primary-color), var(--primary-color-light));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 2rem;
  font-weight: 600;
}

.expert-badge {
  position: absolute;
  bottom: -5px;
  right: -5px;
  background: var(--accent-color);
  color: white;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
  border: 3px solid white;
}

.expert-info h3 {
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 5px;
  color: var(--text-color);
}

.expert-title {
  color: var(--primary-color);
  font-weight: 500;
  margin-bottom: 15px;
}

.expert-desc {
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 20px;
}

.expert-skills {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: center;
}

.skill-tag {
  background: var(--primary-color-light);
  color: var(--primary-color);
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
}

/* FAQ Section */
.faq-section {
  padding: 120px 0;
  background: var(--bg-secondary);
}

.faq-container {
  max-width: 800px;
  margin: 60px auto 0;
}

.faq-item {
  background: white;
  border-radius: 16px;
  margin-bottom: 20px;
  overflow: hidden;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  border: 1px solid var(--border-color);
}

.faq-question {
  padding: 25px 30px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s ease;
}

.faq-question:hover {
  background: var(--bg-color);
}

.faq-question h3 {
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--text-color);
  margin: 0;
  flex: 1;
}

.faq-toggle {
  width: 30px;
  height: 30px;
  background: var(--primary-color-light);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  color: var(--primary-color);
}

.faq-toggle.active {
  background: var(--primary-color);
  color: white;
  transform: rotate(180deg);
}

.faq-answer {
  max-height: 0;
  overflow: hidden;
  transition: all 0.3s ease;
}

.faq-answer.active {
  max-height: 200px;
}

.faq-answer p {
  padding: 0 30px 25px;
  color: var(--text-secondary);
  line-height: 1.6;
  margin: 0;
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
  
  .cases-grid {
    grid-template-columns: 1fr;
  }
  
  .tech-grid {
    grid-template-columns: 1fr;
  }
  
  .experts-grid {
    grid-template-columns: repeat(2, 1fr);
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
  
  .case-card {
    padding: 30px 25px;
  }
  
  .case-header {
    flex-direction: column;
    gap: 20px;
    text-align: center;
  }
  
  .case-result {
    text-align: center;
  }
  
  .tech-category {
    padding: 30px 25px;
  }
  
  .experts-grid {
    grid-template-columns: 1fr;
  }
  
  .expert-card {
    padding: 30px 25px;
  }
  
  .faq-question {
    padding: 20px 25px;
  }
  
  .faq-answer p {
    padding: 0 25px 20px;
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
  
  .cases-grid {
    grid-template-columns: 1fr;
  }
  
  .case-card {
    padding: 25px 20px;
  }
  
  .tech-category {
    padding: 25px 20px;
  }
  
  .expert-card {
    padding: 25px 20px;
  }
}
</style>