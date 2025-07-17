<template>
  <div class="supply-chain-page">
    <!-- Hero Section with Split Layout -->
    <section class="hero-section">
      <div class="hero-container">
        <div class="hero-left">
          <div class="hero-content">
            <div class="breadcrumb">
              <span>行业方案</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2"/>
              </svg>
              <span>供应链管理</span>
            </div>
            <h1 class="hero-title">
              智能供应链
              <span class="highlight-text">数字化转型</span>
            </h1>
            <p class="hero-subtitle">
              构建透明、高效、智能的供应链生态系统
            </p>
            <p class="hero-description">
              通过区块链、物联网、人工智能等技术，
              打造端到端的供应链可视化平台，
              实现供应链全流程数字化管理。
            </p>
            
            <div class="value-props">
              <div class="value-item">
                <div class="value-icon">📊</div>
                <div class="value-text">
                  <h4>全链路可视化</h4>
                  <p>实时追踪供应链各环节</p>
                </div>
              </div>
              <div class="value-item">
                <div class="value-icon">🔗</div>
                <div class="value-text">
                  <h4>区块链溯源</h4>
                  <p>确保产品来源可信可追</p>
                </div>
              </div>
              <div class="value-item">
                <div class="value-icon">🤖</div>
                <div class="value-text">
                  <h4>AI智能优化</h4>
                  <p>预测需求优化库存</p>
                </div>
              </div>
            </div>
            
            <div class="hero-actions">
              <a href="/contact" class="btn-primary">
                <span>获取方案</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" stroke-width="2"/>
                </svg>
              </a>
              <a href="#demo" class="btn-outline">
                <span>观看演示</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <polygon points="5,3 19,12 5,21" fill="currentColor"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <div class="hero-right">
          <div class="supply-chain-visual">
            <div class="chain-container">
              <div class="chain-node supplier">
                <div class="node-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M21 16V8C21 6.89543 20.1046 6 19 6H5C3.89543 6 3 6.89543 3 8V16C3 17.1046 3.89543 18 5 18H19C20.1046 18 21 17.1046 21 16Z" stroke="currentColor" stroke-width="2"/>
                    <path d="M7 10H17M7 14H13" stroke="currentColor" stroke-width="2"/>
                  </svg>
                </div>
                <div class="node-label">供应商</div>
                <div class="node-status active"></div>
              </div>
              
              <div class="chain-arrow">
                <svg width="40" height="20" viewBox="0 0 40 20" fill="none">
                  <path d="M0 10H35M35 10L30 5M35 10L30 15" stroke="#6366f1" stroke-width="2"/>
                </svg>
              </div>
              
              <div class="chain-node manufacturer">
                <div class="node-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 6V4M6 12H4M18 12H20M12 18V20M7.05 7.05L5.64 5.64M16.95 7.05L18.36 5.64M7.05 16.95L5.64 18.36M16.95 16.95L18.36 18.36" stroke="currentColor" stroke-width="2"/>
                    <circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="2"/>
                  </svg>
                </div>
                <div class="node-label">制造商</div>
                <div class="node-status processing"></div>
              </div>
              
              <div class="chain-arrow">
                <svg width="40" height="20" viewBox="0 0 40 20" fill="none">
                  <path d="M0 10H35M35 10L30 5M35 10L30 15" stroke="#8b5cf6" stroke-width="2"/>
                </svg>
              </div>
              
              <div class="chain-node distributor">
                <div class="node-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" stroke-width="2"/>
                  </svg>
                </div>
                <div class="node-label">分销商</div>
                <div class="node-status pending"></div>
              </div>
              
              <div class="chain-arrow">
                <svg width="40" height="20" viewBox="0 0 40 20" fill="none">
                  <path d="M0 10H35M35 10L30 5M35 10L30 15" stroke="#ec4899" stroke-width="2"/>
                </svg>
              </div>
              
              <div class="chain-node retailer">
                <div class="node-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M3 21H21M4 18H20V10L12 3L4 10V18Z" stroke="currentColor" stroke-width="2"/>
                    <path d="M9 21V15H15V21" stroke="currentColor" stroke-width="2"/>
                  </svg>
                </div>
                <div class="node-label">零售商</div>
                <div class="node-status completed"></div>
              </div>
            </div>
            
            <div class="data-flow">
              <div class="flow-item">
                <div class="flow-icon">📦</div>
                <div class="flow-text">实时库存</div>
              </div>
              <div class="flow-item">
                <div class="flow-icon">🚚</div>
                <div class="flow-text">物流跟踪</div>
              </div>
              <div class="flow-item">
                <div class="flow-icon">💰</div>
                <div class="flow-text">财务结算</div>
              </div>
              <div class="flow-item">
                <div class="flow-icon">📊</div>
                <div class="flow-text">数据分析</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section with Cards Layout -->
    <section class="features-section">
      <div class="container">
        <div class="features-header">
          <div class="header-content">
            <h2>核心功能特性</h2>
            <p>全面覆盖供应链管理各个环节的智能化解决方案</p>
          </div>
          <div class="header-stats">
            <div class="stat">
              <div class="stat-number">30%</div>
              <div class="stat-label">成本降低</div>
            </div>
            <div class="stat">
              <div class="stat-number">50%</div>
              <div class="stat-label">效率提升</div>
            </div>
            <div class="stat">
              <div class="stat-number">99%</div>
              <div class="stat-label">准确率</div>
            </div>
          </div>
        </div>
        
        <div class="features-grid">
          <div class="feature-card primary">
            <div class="card-background">
              <div class="bg-pattern"></div>
            </div>
            <div class="card-content">
              <div class="feature-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                  <path d="M12 1L21.5 6.5V17.5L12 23L2.5 17.5V6.5L12 1Z" stroke="currentColor" stroke-width="2"/>
                  <path d="M9 12L11 14L15 10" stroke="currentColor" stroke-width="2"/>
                </svg>
              </div>
              <h3>区块链溯源</h3>
              <p>基于区块链技术的产品全生命周期追溯，确保每个环节的真实性和不可篡改性。</p>
              <div class="feature-highlights">
                <span class="highlight">不可篡改</span>
                <span class="highlight">全程追溯</span>
                <span class="highlight">透明可信</span>
              </div>
            </div>
          </div>
          
          <div class="feature-card">
            <div class="card-content">
              <div class="feature-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                  <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" stroke-width="2"/>
                </svg>
              </div>
              <h3>智能预测</h3>
              <p>AI驱动的需求预测和库存优化，减少库存积压，提高资金周转率。</p>
              <ul class="feature-list">
                <li>需求预测算法</li>
                <li>库存优化建议</li>
                <li>风险预警机制</li>
              </ul>
            </div>
          </div>
          
          <div class="feature-card">
            <div class="card-content">
              <div class="feature-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                  <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" stroke-width="2"/>
                </svg>
              </div>
              <h3>实时监控</h3>
              <p>物联网设备实时采集供应链各环节数据，提供全方位的可视化监控。</p>
              <ul class="feature-list">
                <li>IoT设备接入</li>
                <li>实时数据采集</li>
                <li>异常自动报警</li>
              </ul>
            </div>
          </div>
          
          <div class="feature-card">
            <div class="card-content">
              <div class="feature-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                  <path d="M12 6V4M6 12H4M18 12H20M12 18V20M7.05 7.05L5.64 5.64M16.95 7.05L18.36 5.64M7.05 16.95L5.64 18.36M16.95 16.95L18.36 18.36" stroke="currentColor" stroke-width="2"/>
                  <circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="2"/>
                </svg>
              </div>
              <h3>协同管理</h3>
              <p>多方协同的供应链管理平台，实现供应商、制造商、分销商的无缝协作。</p>
              <ul class="feature-list">
                <li>多方协同平台</li>
                <li>统一数据标准</li>
                <li>智能合约执行</li>
              </ul>
            </div>
          </div>
          
          <div class="feature-card secondary">
            <div class="card-background">
              <div class="bg-pattern"></div>
            </div>
            <div class="card-content">
              <div class="feature-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                  <path d="M21 16V8C21 6.89543 20.1046 6 19 6H5C3.89543 6 3 6.89543 3 8V16C3 17.1046 3.89543 18 5 18H19C20.1046 18 21 17.1046 21 16Z" stroke="currentColor" stroke-width="2"/>
                  <path d="M7 10H17M7 14H13" stroke="currentColor" stroke-width="2"/>
                </svg>
              </div>
              <h3>数据分析</h3>
              <p>深度数据分析和商业智能，为供应链决策提供科学依据和优化建议。</p>
              <div class="feature-metrics">
                <div class="metric">
                  <span class="metric-value">95%</span>
                  <span class="metric-label">预测准确率</span>
                </div>
                <div class="metric">
                  <span class="metric-value">40%</span>
                  <span class="metric-label">库存优化</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Solutions Timeline -->
    <section class="solutions-section">
      <div class="container">
        <div class="section-header">
          <h2>解决方案架构</h2>
          <p>从数据采集到智能决策的完整供应链数字化流程</p>
        </div>
        
        <div class="timeline">
          <div class="timeline-item">
            <div class="timeline-marker">
              <div class="marker-icon">1</div>
            </div>
            <div class="timeline-content">
              <h3>数据采集层</h3>
              <p>通过IoT设备、RFID标签、传感器等技术手段，实时采集供应链各环节的数据信息。</p>
              <div class="timeline-tech">
                <span class="tech-item">IoT设备</span>
                <span class="tech-item">RFID标签</span>
                <span class="tech-item">传感器网络</span>
                <span class="tech-item">GPS定位</span>
              </div>
            </div>
          </div>
          
          <div class="timeline-item">
            <div class="timeline-marker">
              <div class="marker-icon">2</div>
            </div>
            <div class="timeline-content">
              <h3>数据存储层</h3>
              <p>基于区块链和分布式数据库技术，确保数据的安全性、完整性和不可篡改性。</p>
              <div class="timeline-tech">
                <span class="tech-item">区块链</span>
                <span class="tech-item">分布式数据库</span>
                <span class="tech-item">数据加密</span>
                <span class="tech-item">备份机制</span>
              </div>
            </div>
          </div>
          
          <div class="timeline-item">
            <div class="timeline-marker">
              <div class="marker-icon">3</div>
            </div>
            <div class="timeline-content">
              <h3>数据处理层</h3>
              <p>运用大数据技术和AI算法，对采集的数据进行清洗、分析和挖掘，提取有价值的信息。</p>
              <div class="timeline-tech">
                <span class="tech-item">大数据处理</span>
                <span class="tech-item">机器学习</span>
                <span class="tech-item">数据挖掘</span>
                <span class="tech-item">实时计算</span>
              </div>
            </div>
          </div>
          
          <div class="timeline-item">
            <div class="timeline-marker">
              <div class="marker-icon">4</div>
            </div>
            <div class="timeline-content">
              <h3>应用服务层</h3>
              <p>提供供应链管理的各种应用服务，包括库存管理、物流跟踪、质量控制等功能模块。</p>
              <div class="timeline-tech">
                <span class="tech-item">微服务架构</span>
                <span class="tech-item">API网关</span>
                <span class="tech-item">容器化部署</span>
                <span class="tech-item">负载均衡</span>
              </div>
            </div>
          </div>
          
          <div class="timeline-item">
            <div class="timeline-marker">
              <div class="marker-icon">5</div>
            </div>
            <div class="timeline-content">
              <h3>用户界面层</h3>
              <p>提供直观易用的Web和移动端界面，支持多角色、多权限的供应链管理操作。</p>
              <div class="timeline-tech">
                <span class="tech-item">响应式设计</span>
                <span class="tech-item">移动端适配</span>
                <span class="tech-item">权限管理</span>
                <span class="tech-item">数据可视化</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Industry Applications -->
    <section class="applications-section">
      <div class="container">
        <div class="section-header">
          <h2>行业应用场景</h2>
          <p>我们的供应链解决方案已在多个行业成功应用</p>
        </div>
        
        <div class="applications-grid">
          <div class="application-card">
            <div class="app-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                <path d="M12 6V4M6 12H4M18 12H20M12 18V20M7.05 7.05L5.64 5.64M16.95 7.05L18.36 5.64M7.05 16.95L5.64 18.36M16.95 16.95L18.36 18.36" stroke="currentColor" stroke-width="2"/>
                <circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="2"/>
              </svg>
            </div>
            <h3>制造业</h3>
            <p>从原材料采购到成品交付的全流程管理，实现精益生产和准时交货。</p>
            <div class="app-benefits">
              <div class="benefit">✓ 库存周转率提升40%</div>
              <div class="benefit">✓ 生产效率提高30%</div>
              <div class="benefit">✓ 质量问题追溯100%</div>
            </div>
          </div>
          
          <div class="application-card">
            <div class="app-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                <path d="M21 16V8C21 6.89543 20.1046 6 19 6H5C3.89543 6 3 6.89543 3 8V16C3 17.1046 3.89543 18 5 18H19C20.1046 18 21 17.1046 21 16Z" stroke="currentColor" stroke-width="2"/>
                <path d="M7 10H17M7 14H13" stroke="currentColor" stroke-width="2"/>
              </svg>
            </div>
            <h3>零售业</h3>
            <p>多渠道库存管理和需求预测，优化商品配置，提升客户满意度。</p>
            <div class="app-benefits">
              <div class="benefit">✓ 缺货率降低60%</div>
              <div class="benefit">✓ 库存成本减少25%</div>
              <div class="benefit">✓ 客户满意度提升35%</div>
            </div>
          </div>
          
          <div class="application-card">
            <div class="app-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" stroke-width="2"/>
              </svg>
            </div>
            <h3>食品行业</h3>
            <p>食品安全追溯和冷链物流管理，确保食品质量和消费者健康。</p>
            <div class="app-benefits">
              <div class="benefit">✓ 食品安全事故零发生</div>
              <div class="benefit">✓ 冷链损耗降低50%</div>
              <div class="benefit">✓ 合规性检查通过率100%</div>
            </div>
          </div>
          
          <div class="application-card">
            <div class="app-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" stroke-width="2"/>
              </svg>
            </div>
            <h3>医药行业</h3>
            <p>药品全生命周期管理和合规性追踪，确保药品安全和监管合规。</p>
            <div class="app-benefits">
              <div class="benefit">✓ 假药识别率99.9%</div>
              <div class="benefit">✓ 监管合规100%</div>
              <div class="benefit">✓ 召回效率提升80%</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="container">
        <div class="cta-content">
          <div class="cta-visual">
            <div class="cta-icon">
              <svg width="60" height="60" viewBox="0 0 24 24" fill="none">
                <path d="M12 1L21.5 6.5V17.5L12 23L2.5 17.5V6.5L12 1Z" stroke="currentColor" stroke-width="2"/>
                <path d="M9 12L11 14L15 10" stroke="currentColor" stroke-width="2"/>
              </svg>
            </div>
          </div>
          <div class="cta-text">
            <h2>开启您的供应链数字化之旅</h2>
            <p>
              让我们帮助您构建智能、透明、高效的供应链管理系统，
              在数字化时代保持竞争优势。
            </p>
            <div class="cta-actions">
              <a href="/contact" class="btn-primary">
                <span>立即咨询</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" stroke-width="2"/>
                </svg>
              </a>
              <a href="/case-studies/supply-chain" class="btn-secondary">
                <span>查看案例</span>
              </a>
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
  title: '供应链管理方案 - ZHILING ARK TECHNOLOGY',
  description: 'ZHILING ARK TECHNOLOGY提供智能供应链管理解决方案，基于区块链、IoT、AI技术实现供应链全流程数字化管理'
})

// SEO 头部信息
useHead({
  title: '供应链管理方案 - ZHILING ARK TECHNOLOGY',
  meta: [
    { name: 'description', content: '专业的供应链数字化解决方案，涵盖区块链溯源、智能预测、实时监控、协同管理等功能，助力企业供应链转型升级' },
    { name: 'keywords', content: '供应链管理,区块链溯源,智能供应链,物联网,供应链数字化,库存管理,物流跟踪' }
  ]
})
</script>

<style scoped>
.supply-chain-page {
  min-height: 100vh;
}

/* Hero Section */
.hero-section {
  background: linear-gradient(135deg, var(--bg-color) 0%, var(--bg-secondary) 100%);
  padding: 120px 0 80px;
  position: relative;
  overflow: hidden;
}

.hero-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
}

.hero-left {
  z-index: 2;
}

.breadcrumb {
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--text-secondary);
  font-size: 0.9rem;
  margin-bottom: 20px;
}

.breadcrumb svg {
  opacity: 0.5;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 1rem;
  line-height: 1.2;
}

.highlight-text {
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-subtitle {
  font-size: 1.5rem;
  color: var(--primary-color);
  margin-bottom: 1rem;
  font-weight: 600;
}

.hero-description {
  font-size: 1.2rem;
  color: var(--text-secondary);
  margin-bottom: 2rem;
  line-height: 1.6;
}

.value-props {
  display: grid;
  gap: 20px;
  margin-bottom: 2rem;
}

.value-item {
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 15px;
  background: var(--card-bg);
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.value-icon {
  font-size: 1.5rem;
  width: 50px;
  height: 50px;
  background: var(--primary-color-light);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.value-text h4 {
  color: var(--text-primary);
  margin-bottom: 5px;
  font-size: 1rem;
}

.value-text p {
  color: var(--text-secondary);
  font-size: 0.9rem;
  margin: 0;
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
  background: var(--primary-color);
  color: white;
}

.btn-primary:hover {
  background: var(--primary-color-dark);
  transform: translateY(-2px);
}

.btn-outline {
  background: transparent;
  color: var(--primary-color);
  border: 2px solid var(--primary-color);
}

.btn-outline:hover {
  background: var(--primary-color);
  color: white;
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

/* Supply Chain Visual */
.hero-right {
  display: flex;
  justify-content: center;
  align-items: center;
}

.supply-chain-visual {
  width: 100%;
  max-width: 600px;
}

.chain-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
  padding: 20px;
  background: var(--card-bg);
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.chain-node {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  position: relative;
}

.node-icon {
  width: 60px;
  height: 60px;
  background: var(--primary-color-light);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary-color);
  position: relative;
}

.node-label {
  font-size: 0.8rem;
  color: var(--text-secondary);
  font-weight: 500;
}

.node-status {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  position: absolute;
  top: -2px;
  right: -2px;
}

.node-status.active {
  background: #10b981;
  animation: pulse-green 2s infinite;
}

.node-status.processing {
  background: #f59e0b;
  animation: pulse-yellow 2s infinite;
}

.node-status.pending {
  background: #6b7280;
}

.node-status.completed {
  background: #3b82f6;
}

@keyframes pulse-green {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

@keyframes pulse-yellow {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

.chain-arrow {
  flex-shrink: 0;
}

.data-flow {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
}

.flow-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 16px;
  background: var(--card-bg);
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.flow-icon {
  font-size: 1.2rem;
}

.flow-text {
  font-size: 0.9rem;
  color: var(--text-secondary);
  font-weight: 500;
}

/* Features Section */
.features-section {
  padding: 100px 0;
  background: var(--bg-secondary);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.features-header {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 60px;
  align-items: center;
  margin-bottom: 60px;
}

.header-content h2 {
  font-size: 2.5rem;
  color: var(--text-primary);
  margin-bottom: 1rem;
  font-weight: 700;
}

.header-content p {
  font-size: 1.2rem;
  color: var(--text-secondary);
  line-height: 1.6;
}

.header-stats {
  display: flex;
  gap: 30px;
}

.stat {
  text-align: center;
}

.stat-number {
  font-size: 2rem;
  font-weight: 700;
  color: var(--primary-color);
  display: block;
}

.stat-label {
  font-size: 0.9rem;
  color: var(--text-secondary);
  margin-top: 5px;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 30px;
  height: 600px;
}

.feature-card {
  background: var(--card-bg);
  border-radius: 20px;
  padding: 30px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.feature-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
}

.feature-card.primary {
  grid-row: span 2;
  background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
  color: white;
}

.feature-card.secondary {
  grid-column: span 2;
  background: linear-gradient(135deg, #ec4899 0%, #f97316 100%);
  color: white;
}

.card-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0.1;
}

.bg-pattern {
  width: 100%;
  height: 100%;
  background-image: radial-gradient(circle at 20% 50%, white 2px, transparent 2px),
                    radial-gradient(circle at 80% 50%, white 2px, transparent 2px);
  background-size: 40px 40px;
}

.card-content {
  position: relative;
  z-index: 2;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.feature-icon {
  width: 60px;
  height: 60px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  margin-bottom: 20px;
}

.feature-card:not(.primary):not(.secondary) .feature-icon {
  background: var(--primary-color-light);
  color: var(--primary-color);
}

.feature-card h3 {
  font-size: 1.4rem;
  margin-bottom: 15px;
  font-weight: 600;
}

.feature-card:not(.primary):not(.secondary) h3 {
  color: var(--text-primary);
}

.feature-card p {
  line-height: 1.6;
  margin-bottom: 20px;
  flex-grow: 1;
}

.feature-card:not(.primary):not(.secondary) p {
  color: var(--text-secondary);
}

.feature-highlights {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: auto;
}

.highlight {
  background: rgba(255, 255, 255, 0.2);
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 500;
}

.feature-list {
  list-style: none;
  padding: 0;
  margin: 0;
  margin-top: auto;
}

.feature-list li {
  padding: 5px 0;
  font-size: 0.9rem;
  color: var(--text-secondary);
  position: relative;
  padding-left: 20px;
}

.feature-list li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--primary-color);
  font-weight: bold;
}

.feature-metrics {
  display: flex;
  gap: 20px;
  margin-top: auto;
}

.metric {
  text-align: center;
}

.metric-value {
  display: block;
  font-size: 1.4rem;
  font-weight: 700;
}

.metric-label {
  font-size: 0.8rem;
  opacity: 0.8;
  margin-top: 5px;
}

/* Solutions Section */
.solutions-section {
  padding: 100px 0;
  background: var(--bg-color);
}

.section-header {
  text-align: center;
  margin-bottom: 80px;
}

.section-header h2 {
  font-size: 2.5rem;
  color: var(--text-primary);
  margin-bottom: 1rem;
  font-weight: 700;
}

.section-header p {
  font-size: 1.2rem;
  color: var(--text-secondary);
  line-height: 1.6;
}

.timeline {
  position: relative;
  max-width: 800px;
  margin: 0 auto;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 30px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(to bottom, #6366f1, #8b5cf6, #ec4899);
}

.timeline-item {
  display: flex;
  gap: 30px;
  margin-bottom: 60px;
  position: relative;
}

.timeline-marker {
  flex-shrink: 0;
  position: relative;
  z-index: 2;
}

.marker-icon {
  width: 60px;
  height: 60px;
  background: var(--primary-color);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 700;
  font-size: 1.2rem;
  box-shadow: 0 4px 20px rgba(99, 102, 241, 0.3);
}

.timeline-content {
  background: var(--card-bg);
  padding: 30px;
  border-radius: 16px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  flex-grow: 1;
}

.timeline-content h3 {
  font-size: 1.4rem;
  color: var(--text-primary);
  margin-bottom: 15px;
  font-weight: 600;
}

.timeline-content p {
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 20px;
}

.timeline-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tech-item {
  background: var(--primary-color-light);
  color: var(--primary-color);
  padding: 6px 12px;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 500;
}

/* Applications Section */
.applications-section {
  padding: 100px 0;
  background: var(--bg-secondary);
}

.applications-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
}

.application-card {
  background: var(--card-bg);
  padding: 30px;
  border-radius: 20px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  text-align: center;
}

.application-card:hover {
  transform: translateY(-10px);
}

.app-icon {
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

.application-card h3 {
  font-size: 1.4rem;
  color: var(--text-primary);
  margin-bottom: 15px;
  font-weight: 600;
}

.application-card p {
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 25px;
}

.app-benefits {
  text-align: left;
}

.benefit {
  color: var(--text-secondary);
  margin-bottom: 8px;
  font-size: 0.9rem;
}

/* CTA Section */
.cta-section {
  padding: 100px 0;
  background: var(--bg-color);
}

.cta-content {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 40px;
  align-items: center;
  max-width: 800px;
  margin: 0 auto;
}

.cta-visual {
  display: flex;
  justify-content: center;
}

.cta-icon {
  width: 120px;
  height: 120px;
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  box-shadow: 0 20px 40px rgba(99, 102, 241, 0.3);
  animation: float 3s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

.cta-text h2 {
  font-size: 2.2rem;
  color: var(--text-primary);
  margin-bottom: 20px;
  font-weight: 700;
}

.cta-text p {
  font-size: 1.1rem;
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 30px;
}

.cta-actions {
  display: flex;
  gap: 15px;
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
  
  .features-header {
    grid-template-columns: 1fr;
    gap: 30px;
    text-align: center;
  }
  
  .features-grid {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    height: auto;
  }
  
  .feature-card.primary,
  .feature-card.secondary {
    grid-column: span 1;
    grid-row: span 1;
  }
  
  .cta-content {
    grid-template-columns: 1fr;
    text-align: center;
  }
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2rem;
  }
  
  .chain-container {
    flex-direction: column;
    gap: 20px;
  }
  
  .chain-arrow {
    transform: rotate(90deg);
  }
  
  .data-flow {
    grid-template-columns: 1fr;
  }
  
  .timeline::before {
    left: 15px;
  }
  
  .timeline-item {
    gap: 15px;
  }
  
  .marker-icon {
    width: 40px;
    height: 40px;
    font-size: 1rem;
  }
  
  .applications-grid {
    grid-template-columns: 1fr;
  }
}
</style>