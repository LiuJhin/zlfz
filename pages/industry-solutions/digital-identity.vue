<template>
  <div class="digital-identity-page">
    <!-- Hero Section with Animated Background -->
    <section class="hero-section">
      <div class="hero-background">
        <div class="floating-elements">
          <div class="element element-1"></div>
          <div class="element element-2"></div>
          <div class="element element-3"></div>
          <div class="element element-4"></div>
          <div class="element element-5"></div>
        </div>
      </div>
      
      <div class="hero-container">
        <div class="hero-content">
          <div class="hero-badge">
            <span class="badge-icon">🔐</span>
            <span class="badge-text">数字身份认证解决方案</span>
          </div>
          
          <h1 class="hero-title">
            构建可信的
            <span class="gradient-text">数字身份</span>
            生态系统
          </h1>
          
          <p class="hero-description">
            基于区块链、生物识别、零知识证明等前沿技术，
            为企业和个人提供安全、便捷、隐私保护的数字身份认证服务。
          </p>
          
          <div class="hero-features">
            <div class="feature-item">
              <div class="feature-icon">🛡️</div>
              <span>多重安全防护</span>
            </div>
            <div class="feature-item">
              <div class="feature-icon">🔒</div>
              <span>隐私数据保护</span>
            </div>
            <div class="feature-item">
              <div class="feature-icon">⚡</div>
              <span>快速身份验证</span>
            </div>
            <div class="feature-item">
              <div class="feature-icon">🌐</div>
              <span>跨平台互通</span>
            </div>
          </div>
          
          <div class="hero-actions">
            <a href="/contact" class="btn-primary">
              <span>立即体验</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" stroke-width="2"/>
              </svg>
            </a>
            <a href="#technology" class="btn-ghost">
              <span>了解技术</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M12 5V19M5 12L12 19L19 12" stroke="currentColor" stroke-width="2"/>
              </svg>
            </a>
          </div>
        </div>
        
        <div class="hero-visual">
          <div class="identity-network">
            <div class="central-node">
              <div class="node-core">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                  <path d="M20 21V19C20 16.7909 18.2091 15 16 15H8C5.79086 15 4 16.7909 4 19V21" stroke="currentColor" stroke-width="2"/>
                  <circle cx="12" cy="7" r="4" stroke="currentColor" stroke-width="2"/>
                </svg>
              </div>
              <div class="node-ring ring-1"></div>
              <div class="node-ring ring-2"></div>
              <div class="node-ring ring-3"></div>
            </div>
            
            <div class="satellite-nodes">
              <div class="satellite-node node-1">
                <div class="satellite-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M12 1L21.5 6.5V17.5L12 23L2.5 17.5V6.5L12 1Z" stroke="currentColor" stroke-width="2"/>
                  </svg>
                </div>
                <span class="satellite-label">区块链</span>
              </div>
              
              <div class="satellite-node node-2">
                <div class="satellite-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z" stroke="currentColor" stroke-width="2"/>
                    <path d="M2.458 12C3.732 7.943 7.523 5 12 5C16.478 5 20.268 7.943 21.542 12C20.268 16.057 16.478 19 12 19C7.523 19 3.732 16.057 2.458 12Z" stroke="currentColor" stroke-width="2"/>
                  </svg>
                </div>
                <span class="satellite-label">生物识别</span>
              </div>
              
              <div class="satellite-node node-3">
                <div class="satellite-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" stroke-width="2"/>
                  </svg>
                </div>
                <span class="satellite-label">零知识证明</span>
              </div>
              
              <div class="satellite-node node-4">
                <div class="satellite-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M12 6V4M6 12H4M18 12H20M12 18V20M7.05 7.05L5.64 5.64M16.95 7.05L18.36 5.64M7.05 16.95L5.64 18.36M16.95 16.95L18.36 18.36" stroke="currentColor" stroke-width="2"/>
                    <circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="2"/>
                  </svg>
                </div>
                <span class="satellite-label">AI算法</span>
              </div>
              
              <div class="satellite-node node-5">
                <div class="satellite-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" stroke-width="2"/>
                  </svg>
                </div>
                <span class="satellite-label">云计算</span>
              </div>
              
              <div class="satellite-node node-6">
                <div class="satellite-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M21 16V8C21 6.89543 20.1046 6 19 6H5C3.89543 6 3 6.89543 3 8V16C3 17.1046 3.89543 18 5 18H19C20.1046 18 21 17.1046 21 16Z" stroke="currentColor" stroke-width="2"/>
                  </svg>
                </div>
                <span class="satellite-label">加密技术</span>
              </div>
            </div>
            
            <div class="connection-lines">
              <svg class="connection-svg" viewBox="0 0 400 400">
                <defs>
                  <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#6366f1" stop-opacity="0.6"/>
                    <stop offset="100%" stop-color="#8b5cf6" stop-opacity="0.2"/>
                  </linearGradient>
                </defs>
                <path class="connection-path" d="M200,200 L120,80" stroke="url(#connectionGradient)" stroke-width="2" fill="none"/>
                <path class="connection-path" d="M200,200 L320,80" stroke="url(#connectionGradient)" stroke-width="2" fill="none"/>
                <path class="connection-path" d="M200,200 L350,200" stroke="url(#connectionGradient)" stroke-width="2" fill="none"/>
                <path class="connection-path" d="M200,200 L320,320" stroke="url(#connectionGradient)" stroke-width="2" fill="none"/>
                <path class="connection-path" d="M200,200 L120,320" stroke="url(#connectionGradient)" stroke-width="2" fill="none"/>
                <path class="connection-path" d="M200,200 L50,200" stroke="url(#connectionGradient)" stroke-width="2" fill="none"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Technology Stack Section -->
    <section id="technology" class="technology-section">
      <div class="container">
        <div class="section-header">
          <h2>核心技术架构</h2>
          <p>融合多种前沿技术，构建安全可靠的数字身份认证体系</p>
        </div>
        
        <div class="tech-stack">
          <div class="tech-layer">
            <div class="layer-header">
              <div class="layer-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M21 16V8C21 6.89543 20.1046 6 19 6H5C3.89543 6 3 6.89543 3 8V16C3 17.1046 3.89543 18 5 18H19C20.1046 18 21 17.1046 21 16Z" stroke="currentColor" stroke-width="2"/>
                </svg>
              </div>
              <h3>应用层</h3>
            </div>
            <div class="layer-content">
              <div class="tech-cards">
                <div class="tech-card">
                  <h4>身份钱包</h4>
                  <p>用户身份信息管理</p>
                </div>
                <div class="tech-card">
                  <h4>认证服务</h4>
                  <p>多场景身份验证</p>
                </div>
                <div class="tech-card">
                  <h4>管理控制台</h4>
                  <p>企业身份管理平台</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="tech-layer">
            <div class="layer-header">
              <div class="layer-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12 6V4M6 12H4M18 12H20M12 18V20M7.05 7.05L5.64 5.64M16.95 7.05L18.36 5.64M7.05 16.95L5.64 18.36M16.95 16.95L18.36 18.36" stroke="currentColor" stroke-width="2"/>
                  <circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="2"/>
                </svg>
              </div>
              <h3>服务层</h3>
            </div>
            <div class="layer-content">
              <div class="tech-cards">
                <div class="tech-card">
                  <h4>身份验证</h4>
                  <p>多因子认证服务</p>
                </div>
                <div class="tech-card">
                  <h4>权限管理</h4>
                  <p>细粒度访问控制</p>
                </div>
                <div class="tech-card">
                  <h4>审计日志</h4>
                  <p>完整操作记录</p>
                </div>
                <div class="tech-card">
                  <h4>风险评估</h4>
                  <p>智能风险分析</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="tech-layer">
            <div class="layer-header">
              <div class="layer-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12 1L21.5 6.5V17.5L12 23L2.5 17.5V6.5L12 1Z" stroke="currentColor" stroke-width="2"/>
                </svg>
              </div>
              <h3>核心层</h3>
            </div>
            <div class="layer-content">
              <div class="tech-cards">
                <div class="tech-card">
                  <h4>区块链网络</h4>
                  <p>去中心化身份存储</p>
                </div>
                <div class="tech-card">
                  <h4>零知识证明</h4>
                  <p>隐私保护验证</p>
                </div>
                <div class="tech-card">
                  <h4>生物识别</h4>
                  <p>多模态生物特征</p>
                </div>
                <div class="tech-card">
                  <h4>密码学算法</h4>
                  <p>高强度加密保护</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="tech-layer">
            <div class="layer-header">
              <div class="layer-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" stroke-width="2"/>
                </svg>
              </div>
              <h3>基础设施层</h3>
            </div>
            <div class="layer-content">
              <div class="tech-cards">
                <div class="tech-card">
                  <h4>云计算平台</h4>
                  <p>弹性计算资源</p>
                </div>
                <div class="tech-card">
                  <h4>边缘计算</h4>
                  <p>就近数据处理</p>
                </div>
                <div class="tech-card">
                  <h4>安全硬件</h4>
                  <p>TEE可信执行环境</p>
                </div>
                <div class="tech-card">
                  <h4>网络安全</h4>
                  <p>多层防护体系</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Solutions Showcase -->
    <section class="solutions-section">
      <div class="container">
        <div class="section-header">
          <h2>解决方案展示</h2>
          <p>覆盖多个行业和场景的数字身份认证应用</p>
        </div>
        
        <div class="solutions-showcase">
          <div class="solution-tabs">
            <button class="tab-button active" data-tab="enterprise">
              <span class="tab-icon">🏢</span>
              <span>企业级应用</span>
            </button>
            <button class="tab-button" data-tab="government">
              <span class="tab-icon">🏛️</span>
              <span>政务服务</span>
            </button>
            <button class="tab-button" data-tab="finance">
              <span class="tab-icon">🏦</span>
              <span>金融服务</span>
            </button>
            <button class="tab-button" data-tab="healthcare">
              <span class="tab-icon">🏥</span>
              <span>医疗健康</span>
            </button>
          </div>
          
          <div class="solution-content">
            <div class="tab-panel active" id="enterprise">
              <div class="solution-grid">
                <div class="solution-card">
                  <div class="card-header">
                    <div class="card-icon">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                        <path d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="currentColor" stroke-width="2"/>
                        <path d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z" stroke="currentColor" stroke-width="2"/>
                      </svg>
                    </div>
                    <h3>员工身份管理</h3>
                  </div>
                  <p>统一的员工身份认证和访问控制，支持SSO单点登录，提升工作效率。</p>
                  <div class="card-features">
                    <span class="feature-tag">SSO单点登录</span>
                    <span class="feature-tag">多因子认证</span>
                    <span class="feature-tag">权限管理</span>
                  </div>
                </div>
                
                <div class="solution-card">
                  <div class="card-header">
                    <div class="card-icon">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                        <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" stroke-width="2"/>
                      </svg>
                    </div>
                    <h3>客户身份验证</h3>
                  </div>
                  <p>为客户提供便捷的身份验证服务，支持多种认证方式，提升用户体验。</p>
                  <div class="card-features">
                    <span class="feature-tag">生物识别</span>
                    <span class="feature-tag">快速验证</span>
                    <span class="feature-tag">隐私保护</span>
                  </div>
                </div>
                
                <div class="solution-card">
                  <div class="card-header">
                    <div class="card-icon">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                        <path d="M12 1L21.5 6.5V17.5L12 23L2.5 17.5V6.5L12 1Z" stroke="currentColor" stroke-width="2"/>
                      </svg>
                    </div>
                    <h3>供应链身份</h3>
                  </div>
                  <p>供应链合作伙伴的身份认证和信任管理，确保供应链安全。</p>
                  <div class="card-features">
                    <span class="feature-tag">信任网络</span>
                    <span class="feature-tag">资质验证</span>
                    <span class="feature-tag">风险评估</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="tab-panel" id="government">
              <div class="solution-grid">
                <div class="solution-card">
                  <div class="card-header">
                    <div class="card-icon">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                        <path d="M21 16V8C21 6.89543 20.1046 6 19 6H5C3.89543 6 3 6.89543 3 8V16C3 17.1046 3.89543 18 5 18H19C20.1046 18 21 17.1046 21 16Z" stroke="currentColor" stroke-width="2"/>
                      </svg>
                    </div>
                    <h3>数字身份证</h3>
                  </div>
                  <p>基于区块链的数字身份证，支持线上线下身份验证，提升政务服务效率。</p>
                  <div class="card-features">
                    <span class="feature-tag">区块链存储</span>
                    <span class="feature-tag">防伪验证</span>
                    <span class="feature-tag">跨部门互认</span>
                  </div>
                </div>
                
                <div class="solution-card">
                  <div class="card-header">
                    <div class="card-icon">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                        <path d="M3 21H21M4 18H20V10L12 3L4 10V18Z" stroke="currentColor" stroke-width="2"/>
                      </svg>
                    </div>
                    <h3>政务服务认证</h3>
                  </div>
                  <p>统一的政务服务身份认证平台，实现一次认证，全网通行。</p>
                  <div class="card-features">
                    <span class="feature-tag">统一认证</span>
                    <span class="feature-tag">全网通行</span>
                    <span class="feature-tag">安全可靠</span>
                  </div>
                </div>
                
                <div class="solution-card">
                  <div class="card-header">
                    <div class="card-icon">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                        <path d="M12 6V4M6 12H4M18 12H20M12 18V20M7.05 7.05L5.64 5.64M16.95 7.05L18.36 5.64M7.05 16.95L5.64 18.36M16.95 16.95L18.36 18.36" stroke="currentColor" stroke-width="2"/>
                        <circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="2"/>
                      </svg>
                    </div>
                    <h3>智慧城市身份</h3>
                  </div>
                  <p>智慧城市场景下的统一身份管理，支持交通、医疗、教育等多场景应用。</p>
                  <div class="card-features">
                    <span class="feature-tag">多场景应用</span>
                    <span class="feature-tag">便民服务</span>
                    <span class="feature-tag">数据互通</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="tab-panel" id="finance">
              <div class="solution-grid">
                <div class="solution-card">
                  <div class="card-header">
                    <div class="card-icon">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                        <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" stroke-width="2"/>
                        <path d="M9 12L11 14L15 10" stroke="currentColor" stroke-width="2"/>
                      </svg>
                    </div>
                    <h3>KYC身份验证</h3>
                  </div>
                  <p>符合监管要求的客户身份识别和验证，支持远程开户和交易认证。</p>
                  <div class="card-features">
                    <span class="feature-tag">监管合规</span>
                    <span class="feature-tag">远程开户</span>
                    <span class="feature-tag">风险控制</span>
                  </div>
                </div>
                
                <div class="solution-card">
                  <div class="card-header">
                    <div class="card-icon">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                        <path d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12Z" stroke="currentColor" stroke-width="2"/>
                        <path d="M8 12L11 15L16 9" stroke="currentColor" stroke-width="2"/>
                      </svg>
                    </div>
                    <h3>数字支付认证</h3>
                  </div>
                  <p>安全的数字支付身份认证，支持生物识别和多因子验证。</p>
                  <div class="card-features">
                    <span class="feature-tag">生物识别</span>
                    <span class="feature-tag">多因子认证</span>
                    <span class="feature-tag">交易安全</span>
                  </div>
                </div>
                
                <div class="solution-card">
                  <div class="card-header">
                    <div class="card-icon">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                        <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" stroke-width="2"/>
                      </svg>
                    </div>
                    <h3>反欺诈系统</h3>
                  </div>
                  <p>基于AI的身份欺诈检测和防护，实时识别可疑行为和身份盗用。</p>
                  <div class="card-features">
                    <span class="feature-tag">AI检测</span>
                    <span class="feature-tag">实时防护</span>
                    <span class="feature-tag">行为分析</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="tab-panel" id="healthcare">
              <div class="solution-grid">
                <div class="solution-card">
                  <div class="card-header">
                    <div class="card-icon">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                        <path d="M20 21V19C20 16.7909 18.2091 15 16 15H8C5.79086 15 4 16.7909 4 19V21" stroke="currentColor" stroke-width="2"/>
                        <circle cx="12" cy="7" r="4" stroke="currentColor" stroke-width="2"/>
                      </svg>
                    </div>
                    <h3>患者身份管理</h3>
                  </div>
                  <p>安全的患者身份认证和医疗数据访问控制，保护患者隐私。</p>
                  <div class="card-features">
                    <span class="feature-tag">隐私保护</span>
                    <span class="feature-tag">数据安全</span>
                    <span class="feature-tag">访问控制</span>
                  </div>
                </div>
                
                <div class="solution-card">
                  <div class="card-header">
                    <div class="card-icon">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                        <path d="M21 16V8C21 6.89543 20.1046 6 19 6H5C3.89543 6 3 6.89543 3 8V16C3 17.1046 3.89543 18 5 18H19C20.1046 18 21 17.1046 21 16Z" stroke="currentColor" stroke-width="2"/>
                      </svg>
                    </div>
                    <h3>医护人员认证</h3>
                  </div>
                  <p>医护人员的身份认证和资质验证，确保医疗服务质量和安全。</p>
                  <div class="card-features">
                    <span class="feature-tag">资质验证</span>
                    <span class="feature-tag">权限管理</span>
                    <span class="feature-tag">审计追踪</span>
                  </div>
                </div>
                
                <div class="solution-card">
                  <div class="card-header">
                    <div class="card-icon">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                        <path d="M12 1L21.5 6.5V17.5L12 23L2.5 17.5V6.5L12 1Z" stroke="currentColor" stroke-width="2"/>
                      </svg>
                    </div>
                    <h3>药品溯源认证</h3>
                  </div>
                  <p>药品生产、流通、使用全链条的身份认证和溯源管理。</p>
                  <div class="card-features">
                    <span class="feature-tag">全链溯源</span>
                    <span class="feature-tag">防伪验证</span>
                    <span class="feature-tag">合规管理</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Benefits Section -->
    <section class="benefits-section">
      <div class="container">
        <div class="section-header">
          <h2>核心优势</h2>
          <p>为什么选择我们的数字身份认证解决方案</p>
        </div>
        
        <div class="benefits-grid">
          <div class="benefit-card">
            <div class="benefit-visual">
              <div class="visual-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                  <path d="M12 1L21.5 6.5V17.5L12 23L2.5 17.5V6.5L12 1Z" stroke="currentColor" stroke-width="2"/>
                  <path d="M9 12L11 14L15 10" stroke="currentColor" stroke-width="2"/>
                </svg>
              </div>
              <div class="visual-bg"></div>
            </div>
            <div class="benefit-content">
              <h3>安全可信</h3>
              <p>基于区块链和密码学技术，确保身份数据的安全性和不可篡改性，建立可信的数字身份体系。</p>
              <div class="benefit-metrics">
                <div class="metric">
                  <span class="metric-value">99.9%</span>
                  <span class="metric-label">安全性</span>
                </div>
                <div class="metric">
                  <span class="metric-value">0</span>
                  <span class="metric-label">数据泄露</span>
                </div>
              </div>
            </div>
          </div>
          
          <div class="benefit-card">
            <div class="benefit-visual">
              <div class="visual-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                  <path d="M2.458 12C3.732 7.943 7.523 5 12 5C16.478 5 20.268 7.943 21.542 12C20.268 16.057 16.478 19 12 19C7.523 19 3.732 16.057 2.458 12Z" stroke="currentColor" stroke-width="2"/>
                  <circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="2"/>
                </svg>
              </div>
              <div class="visual-bg"></div>
            </div>
            <div class="benefit-content">
              <h3>隐私保护</h3>
              <p>采用零知识证明技术，在验证身份的同时保护用户隐私，实现隐私计算和数据最小化原则。</p>
              <div class="benefit-metrics">
                <div class="metric">
                  <span class="metric-value">100%</span>
                  <span class="metric-label">隐私保护</span>
                </div>
                <div class="metric">
                  <span class="metric-value">GDPR</span>
                  <span class="metric-label">合规认证</span>
                </div>
              </div>
            </div>
          </div>
          
          <div class="benefit-card">
            <div class="benefit-visual">
              <div class="visual-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                  <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" stroke-width="2"/>
                </svg>
              </div>
              <div class="visual-bg"></div>
            </div>
            <div class="benefit-content">
              <h3>高效便捷</h3>
              <p>支持多种认证方式，提供快速的身份验证服务，大幅提升用户体验和业务效率。</p>
              <div class="benefit-metrics">
                <div class="metric">
                  <span class="metric-value">< 3s</span>
                  <span class="metric-label">验证时间</span>
                </div>
                <div class="metric">
                  <span class="metric-value">99.5%</span>
                  <span class="metric-label">成功率</span>
                </div>
              </div>
            </div>
          </div>
          
          <div class="benefit-card">
            <div class="benefit-visual">
              <div class="visual-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                  <path d="M12 6V4M6 12H4M18 12H20M12 18V20M7.05 7.05L5.64 5.64M16.95 7.05L18.36 5.64M7.05 16.95L5.64 18.36M16.95 16.95L18.36 18.36" stroke="currentColor" stroke-width="2"/>
                  <circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="2"/>
                </svg>
              </div>
              <div class="visual-bg"></div>
            </div>
            <div class="benefit-content">
              <h3>智能化</h3>
              <p>集成AI算法，提供智能风险评估、异常检测和自适应认证，持续优化安全防护能力。</p>
              <div class="benefit-metrics">
                <div class="metric">
                  <span class="metric-value">95%</span>
                  <span class="metric-label">风险识别</span>
                </div>
                <div class="metric">
                  <span class="metric-value">24/7</span>
                  <span class="metric-label">智能监控</span>
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
        <div class="cta-content">
          <div class="cta-header">
            <h2>开启数字身份新时代</h2>
            <p>
              让我们帮助您构建安全、可信、便捷的数字身份认证体系，
              在数字化转型中保护用户隐私，提升业务效率。
            </p>
          </div>
          
          <div class="cta-actions">
            <a href="/contact" class="btn-primary">
              <span>免费咨询</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" stroke-width="2"/>
              </svg>
            </a>
            <a href="#demo" class="btn-secondary">
              <span>预约演示</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <polygon points="5,3 19,12 5,21" fill="currentColor"/>
              </svg>
            </a>
          </div>
          
          <div class="cta-features">
            <div class="cta-feature">
              <span class="feature-icon">🚀</span>
              <span>快速部署</span>
            </div>
            <div class="cta-feature">
              <span class="feature-icon">🔧</span>
              <span>定制开发</span>
            </div>
            <div class="cta-feature">
              <span class="feature-icon">🛠️</span>
              <span>技术支持</span>
            </div>
            <div class="cta-feature">
              <span class="feature-icon">📊</span>
              <span>数据分析</span>
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
  title: '数字身份认证解决方案 - ZHILING ARK TECHNOLOGY',
  description: 'ZHILING ARK TECHNOLOGY提供先进的数字身份认证解决方案，基于区块链、生物识别、零知识证明等技术实现安全可信的身份管理'
})

// SEO 头部信息
useHead({
  title: '数字身份认证解决方案 - ZHILING ARK TECHNOLOGY',
  meta: [
    { name: 'description', content: '专业的数字身份认证解决方案，涵盖区块链身份、生物识别、零知识证明、多因子认证等技术，为企业提供安全可信的身份管理服务' },
    { name: 'keywords', content: '数字身份认证,区块链身份,生物识别,零知识证明,多因子认证,身份管理,隐私保护,KYC' }
  ]
})

// 标签页切换功能
import { onMounted } from 'vue'

onMounted(() => {
  const tabButtons = document.querySelectorAll('.tab-button')
  const tabPanels = document.querySelectorAll('.tab-panel')
  
  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      const targetTab = button.getAttribute('data-tab')
      
      // 移除所有活动状态
      tabButtons.forEach(btn => btn.classList.remove('active'))
      tabPanels.forEach(panel => panel.classList.remove('active'))
      
      // 添加活动状态
      button.classList.add('active')
      document.getElementById(targetTab).classList.add('active')
    })
  })
})
</script>

<style scoped>
.digital-identity-page {
  min-height: 100vh;
}

/* Hero Section */
.hero-section {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: linear-gradient(135deg, var(--bg-color) 0%, var(--bg-secondary) 100%);
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
  position: relative;
  width: 100%;
  height: 100%;
}

.element {
  position: absolute;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(139, 92, 246, 0.1));
  animation: float 6s ease-in-out infinite;
}

.element-1 {
  width: 100px;
  height: 100px;
  top: 10%;
  left: 10%;
  animation-delay: 0s;
}

.element-2 {
  width: 150px;
  height: 150px;
  top: 20%;
  right: 15%;
  animation-delay: 1s;
}

.element-3 {
  width: 80px;
  height: 80px;
  bottom: 30%;
  left: 20%;
  animation-delay: 2s;
}

.element-4 {
  width: 120px;
  height: 120px;
  bottom: 20%;
  right: 10%;
  animation-delay: 3s;
}

.element-5 {
  width: 60px;
  height: 60px;
  top: 50%;
  left: 5%;
  animation-delay: 4s;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
  }
  33% {
    transform: translateY(-20px) rotate(120deg);
  }
  66% {
    transform: translateY(10px) rotate(240deg);
  }
}

.hero-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
  position: relative;
  z-index: 2;
}

.hero-content {
  max-width: 600px;
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

.gradient-text {
  background: linear-gradient(135deg, #6366f1, #8b5cf6, #ec4899);
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

.hero-features {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
  margin-bottom: 2rem;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 16px;
  background: var(--card-bg);
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  font-size: 0.9rem;
  color: var(--text-secondary);
  font-weight: 500;
}

.feature-icon {
  font-size: 1.2rem;
}

.hero-actions {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.btn-primary, .btn-ghost, .btn-secondary {
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
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  color: white;
  box-shadow: 0 4px 20px rgba(99, 102, 241, 0.3);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 30px rgba(99, 102, 241, 0.4);
}

.btn-ghost {
  background: transparent;
  color: var(--text-secondary);
  border: 1px solid var(--border-color);
}

.btn-ghost:hover {
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

/* Identity Network Visual */
.hero-visual {
  display: flex;
  justify-content: center;
  align-items: center;
}

.identity-network {
  position: relative;
  width: 400px;
  height: 400px;
}

.central-node {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
}

.node-core {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  box-shadow: 0 10px 30px rgba(99, 102, 241, 0.3);
  position: relative;
  z-index: 2;
}

.node-ring {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 2px solid rgba(99, 102, 241, 0.2);
  border-radius: 50%;
  animation: pulse 3s ease-in-out infinite;
}

.ring-1 {
  width: 120px;
  height: 120px;
  animation-delay: 0s;
}

.ring-2 {
  width: 160px;
  height: 160px;
  animation-delay: 1s;
}

.ring-3 {
  width: 200px;
  height: 200px;
  animation-delay: 2s;
}

@keyframes pulse {
  0%, 100% {
    opacity: 0.3;
    transform: translate(-50%, -50%) scale(1);
  }
  50% {
    opacity: 0.1;
    transform: translate(-50%, -50%) scale(1.1);
  }
}

.satellite-nodes {
  position: relative;
  width: 100%;
  height: 100%;
}

.satellite-node {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  animation: orbit 20s linear infinite;
}

.satellite-icon {
  width: 50px;
  height: 50px;
  background: var(--card-bg);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary-color);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  border: 2px solid var(--primary-color-light);
}

.satellite-label {
  font-size: 0.7rem;
  color: var(--text-secondary);
  font-weight: 500;
  text-align: center;
  background: var(--card-bg);
  padding: 4px 8px;
  border-radius: 8px;
  white-space: nowrap;
}

.node-1 {
  top: 10%;
  left: 30%;
  animation-delay: 0s;
}

.node-2 {
  top: 10%;
  right: 30%;
  animation-delay: 3.33s;
}

.node-3 {
  top: 50%;
  right: 5%;
  animation-delay: 6.66s;
}

.node-4 {
  bottom: 10%;
  right: 30%;
  animation-delay: 10s;
}

.node-5 {
  bottom: 10%;
  left: 30%;
  animation-delay: 13.33s;
}

.node-6 {
  top: 50%;
  left: 5%;
  animation-delay: 16.66s;
}

@keyframes orbit {
  0% {
    transform: rotate(0deg) translateX(0px) rotate(0deg);
  }
  100% {
    transform: rotate(360deg) translateX(0px) rotate(-360deg);
  }
}

.connection-lines {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.connection-svg {
  width: 100%;
  height: 100%;
}

.connection-path {
  animation: flow 3s ease-in-out infinite;
}

@keyframes flow {
  0%, 100% {
    stroke-dasharray: 5, 5;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 5, 5;
    stroke-dashoffset: 10;
  }
}

/* Technology Section */
.technology-section {
  padding: 100px 0;
  background: var(--bg-secondary);
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

.tech-stack {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.tech-layer {
  background: var(--card-bg);
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.tech-layer:hover {
  transform: translateY(-5px);
}

.layer-header {
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 25px 30px;
  background: linear-gradient(135deg, var(--primary-color), var(--primary-color-dark));
  color: white;
}

.layer-icon {
  width: 50px;
  height: 50px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.layer-header h3 {
  font-size: 1.4rem;
  font-weight: 600;
  margin: 0;
}

.layer-content {
  padding: 30px;
}

.tech-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
}

.tech-card {
  background: var(--bg-secondary);
  padding: 20px;
  border-radius: 12px;
  border: 1px solid var(--border-color);
  transition: all 0.3s ease;
}

.tech-card:hover {
  background: var(--primary-color-light);
  border-color: var(--primary-color);
  transform: translateY(-2px);
}

.tech-card h4 {
  color: var(--text-primary);
  margin-bottom: 8px;
  font-size: 1rem;
  font-weight: 600;
}

.tech-card p {
  color: var(--text-secondary);
  font-size: 0.9rem;
  margin: 0;
}

/* Solutions Section */
.solutions-section {
  padding: 100px 0;
  background: var(--bg-color);
}

.solutions-showcase {
  max-width: 1000px;
  margin: 0 auto;
}

.solution-tabs {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 50px;
  flex-wrap: wrap;
}

.tab-button {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 20px;
  background: var(--card-bg);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  color: var(--text-secondary);
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.tab-button:hover {
  background: var(--primary-color-light);
  color: var(--primary-color);
  border-color: var(--primary-color);
}

.tab-button.active {
  background: var(--primary-color);
  color: white;
  border-color: var(--primary-color);
}

.tab-icon {
  font-size: 1.2rem;
}

.solution-content {
  position: relative;
}

.tab-panel {
  display: none;
  animation: fadeIn 0.5s ease;
}

.tab-panel.active {
  display: block;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.solution-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.solution-card {
  background: var(--card-bg);
  padding: 30px;
  border-radius: 20px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  border: 1px solid var(--border-color);
}

.solution-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
}

.card-header {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 20px;
}

.card-icon {
  width: 60px;
  height: 60px;
  background: var(--primary-color-light);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary-color);
}

.card-header h3 {
  color: var(--text-primary);
  font-size: 1.3rem;
  font-weight: 600;
  margin: 0;
}

.solution-card p {
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 20px;
}

.card-features {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.feature-tag {
  background: var(--primary-color-light);
  color: var(--primary-color);
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 500;
}

/* Benefits Section */
.benefits-section {
  padding: 100px 0;
  background: var(--bg-secondary);
}

.benefits-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 40px;
}

.benefit-card {
  background: var(--card-bg);
  padding: 40px 30px;
  border-radius: 20px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease;
  position: relative;
  overflow: hidden;
}

.benefit-card:hover {
  transform: translateY(-10px);
}

.benefit-visual {
  position: relative;
  margin-bottom: 30px;
  display: flex;
  justify-content: center;
}

.visual-icon {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, var(--primary-color), var(--primary-color-dark));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  position: relative;
  z-index: 2;
  box-shadow: 0 10px 30px rgba(99, 102, 241, 0.3);
}

.visual-bg {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 120px;
  height: 120px;
  background: radial-gradient(circle, rgba(99, 102, 241, 0.1) 0%, transparent 70%);
  border-radius: 50%;
  animation: pulse-bg 3s ease-in-out infinite;
}

@keyframes pulse-bg {
  0%, 100% { transform: translate(-50%, -50%) scale(1); }
  50% { transform: translate(-50%, -50%) scale(1.1); }
}

.benefit-content h3 {
  color: var(--text-primary);
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 15px;
}

.benefit-content p {
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 25px;
}

.benefit-metrics {
  display: flex;
  justify-content: center;
  gap: 30px;
}

.metric {
  text-align: center;
}

.metric-value {
  display: block;
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--primary-color);
  margin-bottom: 5px;
}

.metric-label {
  font-size: 0.8rem;
  color: var(--text-secondary);
  font-weight: 500;
}

/* CTA Section */
.cta-section {
  padding: 100px 0;
  background: var(--bg-color);
}

.cta-content {
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
}

.cta-header h2 {
  font-size: 2.5rem;
  color: var(--text-primary);
  margin-bottom: 20px;
  font-weight: 700;
}

.cta-header p {
  font-size: 1.2rem;
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 40px;
}

.cta-actions {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 50px;
  flex-wrap: wrap;
}

.cta-features {
  display: flex;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;
}

.cta-feature {
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--text-secondary);
  font-size: 0.9rem;
  font-weight: 500;
}

.cta-feature .feature-icon {
  font-size: 1.2rem;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .hero-container {
    grid-template-columns: 1fr;
    gap: 60px;
    text-align: center;
  }
  
  .hero-title {
    font-size: 2.5rem;
  }
  
  .identity-network {
    width: 300px;
    height: 300px;
  }
  
  .tech-cards {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2rem;
  }
  
  .hero-features {
    grid-template-columns: 1fr;
  }
  
  .solution-tabs {
    flex-direction: column;
    align-items: center;
  }
  
  .tab-button {
    width: 200px;
    justify-content: center;
  }
  
  .solution-grid {
    grid-template-columns: 1fr;
  }
  
  .benefits-grid {
    grid-template-columns: 1fr;
  }
  
  .benefit-metrics {
    gap: 20px;
  }
  
  .cta-features {
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
  }
}

@media (max-width: 480px) {
  .hero-actions {
    flex-direction: column;
    align-items: center;
  }
  
  .btn-primary,
  .btn-ghost,
  .btn-secondary {
    width: 100%;
    justify-content: center;
  }
  
  .cta-actions {
    flex-direction: column;
    align-items: center;
  }
  
  .cta-features {
    grid-template-columns: 1fr;
  }
}
</style>