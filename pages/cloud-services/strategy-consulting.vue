<template>
  <div class="cloud-service-page">
    <div class="service-hero">
      <div class="hero-container">
        <div class="hero-content">
          <h1 class="hero-title">云战略咨询规划</h1>
          <p class="hero-subtitle">专业的云战略规划与咨询服务</p>
          <p class="hero-description">
            为企业提供全面的云战略规划，帮助企业制定符合业务发展需求的云计算战略，
            实现数字化转型目标，提升业务竞争力。
          </p>
          <div class="hero-buttons">
            <a href="/contact" class="btn-primary">立即咨询</a>
            <a href="#service-details" class="btn-secondary">了解详情</a>
          </div>
        </div>
        <div class="hero-visual">
          <div class="service-icon">
            <svg width="120" height="120" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L20 7V17L12 22L4 17V7L12 2Z" stroke="currentColor" stroke-width="2" fill="none"/>
              <path d="M12 8V16" stroke="currentColor" stroke-width="2"/>
              <path d="M8 10L16 14" stroke="currentColor" stroke-width="2"/>
              <path d="M8 14L16 10" stroke="currentColor" stroke-width="2"/>
            </svg>
          </div>
        </div>
      </div>
    </div>

    <section id="service-details" class="service-details">
      <div class="container">
        <div class="section-header">
          <h2>服务详情</h2>
          <p>我们的云战略咨询规划服务涵盖以下核心领域</p>
        </div>
        
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                <path d="M9 11H15M9 15H15M17 21H7C5.89543 21 5 20.1046 5 19V5C5 3.89543 5.89543 3 7 3H12.5858C12.851 3 13.1054 3.10536 13.2929 3.29289L19.7071 9.70711C19.8946 9.89464 20 10.149 20 10.4142V19C20 20.1046 19.1046 21 18 21H17Z" stroke="currentColor" stroke-width="2"/>
              </svg>
            </div>
            <h3>云战略评估</h3>
            <p>深入分析企业现状，评估云计算需求，制定个性化的云战略路线图。</p>
          </div>
          
          <div class="feature-card">
            <div class="feature-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" stroke-width="2" fill="none"/>
              </svg>
            </div>
            <h3>技术架构设计</h3>
            <p>设计符合企业需求的云技术架构，确保系统的可扩展性和安全性。</p>
          </div>
          
          <div class="feature-card">
            <div class="feature-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                <path d="M12 6V4M6 12H4M18 12H20M12 18V20M7.05 7.05L5.64 5.64M16.95 7.05L18.36 5.64M7.05 16.95L5.64 18.36M16.95 16.95L18.36 18.36" stroke="currentColor" stroke-width="2"/>
                <circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="2" fill="none"/>
              </svg>
            </div>
            <h3>成本优化</h3>
            <p>分析云资源使用情况，提供成本优化建议，帮助企业降低云计算成本。</p>
          </div>
          
          <div class="feature-card">
            <div class="feature-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" stroke-width="2"/>
              </svg>
            </div>
            <h3>风险评估</h3>
            <p>识别云迁移和部署过程中的潜在风险，制定相应的风险缓解策略。</p>
          </div>
        </div>
      </div>
    </section>

    <section class="service-process">
      <div class="container">
        <div class="section-header">
          <h2>服务流程</h2>
          <p>我们采用标准化的服务流程，确保项目的高质量交付</p>
        </div>
        
        <div class="process-timeline">
          <div class="process-step">
            <div class="step-number">01</div>
            <div class="step-content">
              <h3>需求调研</h3>
              <p>深入了解企业业务需求、技术现状和发展目标</p>
            </div>
          </div>
          
          <div class="process-step">
            <div class="step-number">02</div>
            <div class="step-content">
              <h3>现状评估</h3>
              <p>评估现有IT基础设施、应用系统和数据架构</p>
            </div>
          </div>
          
          <div class="process-step">
            <div class="step-number">03</div>
            <div class="step-content">
              <h3>战略制定</h3>
              <p>制定详细的云战略规划和实施路线图</p>
            </div>
          </div>
          
          <div class="process-step">
            <div class="step-number">04</div>
            <div class="step-content">
              <h3>方案交付</h3>
              <p>提供完整的咨询报告和实施建议</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="cta-section">
      <div class="container">
        <div class="cta-content">
          <h2>准备开始您的云战略规划？</h2>
          <p>联系我们的专家团队，获取个性化的云战略咨询服务</p>
          <a href="/contact" class="btn-primary">立即联系我们</a>
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
  description: '专业的云战略规划与咨询服务，帮助企业制定符合业务发展需求的云计算战略'
})

// SEO 头部信息
useHead({
  title: '云战略咨询规划 - ZHILING ARK TECHNOLOGY',
  meta: [
    { name: 'description', content: '专业的云战略规划与咨询服务，帮助企业制定符合业务发展需求的云计算战略，实现数字化转型目标' },
    { name: 'keywords', content: '云战略,云咨询,云规划,数字化转型,云计算战略' }
  ]
})
</script>

<style scoped>
.cloud-service-page {
  min-height: 100vh;
}

.service-hero {
  background: linear-gradient(135deg, var(--bg-color) 0%, var(--bg-secondary) 100%);
  padding: 120px 0 80px;
  position: relative;
  overflow: hidden;
}

.hero-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
}

.hero-content {
  z-index: 2;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 1rem;
  line-height: 1.2;
}

.hero-subtitle {
  font-size: 1.5rem;
  color: var(--primary-color);
  margin-bottom: 1.5rem;
  font-weight: 600;
}

.hero-description {
  font-size: 1.2rem;
  color: var(--text-secondary);
  margin-bottom: 2rem;
  line-height: 1.6;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.btn-primary, .btn-secondary {
  padding: 12px 24px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  display: inline-block;
}

.btn-primary {
  background: var(--primary-color);
  color: white;
}

.btn-primary:hover {
  background: var(--primary-color-dark);
  transform: translateY(-2px);
}

.btn-secondary {
  background: transparent;
  color: var(--primary-color);
  border: 2px solid var(--primary-color);
}

.btn-secondary:hover {
  background: var(--primary-color);
  color: white;
}

.hero-visual {
  display: flex;
  justify-content: center;
  align-items: center;
}

.service-icon {
  width: 200px;
  height: 200px;
  background: linear-gradient(135deg, var(--primary-color), var(--primary-color-light));
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  box-shadow: 0 20px 40px rgba(0,0,0,0.1);
  animation: float 6s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}

.service-details {
  padding: 80px 0;
  background: var(--bg-color);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.section-header {
  text-align: center;
  margin-bottom: 60px;
}

.section-header h2 {
  font-size: 2.5rem;
  color: var(--text-primary);
  margin-bottom: 1rem;
}

.section-header p {
  font-size: 1.2rem;
  color: var(--text-secondary);
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
}

.feature-card {
  background: var(--card-bg);
  padding: 30px;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
}

.feature-icon {
  width: 80px;
  height: 80px;
  background: var(--primary-color-light);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
  color: var(--primary-color);
}

.feature-card h3 {
  font-size: 1.5rem;
  color: var(--text-primary);
  margin-bottom: 15px;
}

.feature-card p {
  color: var(--text-secondary);
  line-height: 1.6;
}

.service-process {
  padding: 80px 0;
  background: var(--bg-secondary);
}

.process-timeline {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
}

.process-step {
  text-align: center;
  position: relative;
}

.step-number {
  width: 60px;
  height: 60px;
  background: var(--primary-color);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0 auto 20px;
}

.step-content h3 {
  font-size: 1.3rem;
  color: var(--text-primary);
  margin-bottom: 10px;
}

.step-content p {
  color: var(--text-secondary);
  line-height: 1.6;
}

.cta-section {
  padding: 80px 0;
  background: var(--primary-color);
  color: white;
  text-align: center;
}

.cta-content h2 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.cta-content p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  opacity: 0.9;
}

.cta-section .btn-primary {
  background: white;
  color: var(--primary-color);
}

.cta-section .btn-primary:hover {
  background: var(--bg-color);
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .hero-container {
    grid-template-columns: 1fr;
    gap: 40px;
    text-align: center;
  }
  
  .hero-title {
    font-size: 2.5rem;
  }
  
  .features-grid {
    grid-template-columns: 1fr;
  }
  
  .process-timeline {
    grid-template-columns: 1fr;
  }
}
</style>