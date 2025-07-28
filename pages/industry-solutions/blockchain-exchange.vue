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
          <div class="section-badge">Web3 愿景</div>
          <h2 class="section-title">构建更好的互联网未来</h2>
          <p class="section-description">
            Web3 是新一代更好互联网的愿景。其核心是利用区块链技术，
            以所有权的形式将权力交还给用户。
          </p>
        </div>

        <!-- Web3 Quote Section -->
        <div class="web3-quote-section">
          <div class="quote-container">
            <div class="quote-mark">"</div>
            <blockquote class="web3-quote">
              Web3 is the vision of a new, better internet. At its core, Web3
              uses blockchain technology giving power back to the users in the
              form of ownership.
            </blockquote>
            <div class="quote-mark closing">"</div>
          </div>

          <div class="web3-principles">
            <span class="principle">Decentralized</span>
            <span class="separator">|</span>
            <span class="principle">Permissionless</span>
            <span class="separator">|</span>
            <span class="principle">Native Payments</span>
            <span class="separator">|</span>
            <span class="principle">Trustless</span>
          </div>

          <div class="quote-attribution">– Ethereum Foundation Definition</div>
        </div>

        <!-- AWS Web3 Architecture Diagram -->
        <div class="aws-web3-architecture">
          <div class="architecture-header">
            <h2>AWS powers BUIDLers across Web3</h2>
          </div>
          <div class="architecture-diagram">
            <!-- Layer 3 - Application -->
            <div class="layer-row layer-3">
              <div class="layer-label">
                <div class="layer-arrow">↑</div>
                <div class="layer-number">LAYER 3</div>
                <div class="layer-name">Application</div>
              </div>
              <div class="layer-content">
                <div class="content-grid">
                  <div class="content-box app-icon-box">
                    <div class="app-icon">💻</div>
                  </div>
                  <div class="content-box app-category defi">DeFi</div>
                  <div class="content-box app-category nfts">NFTs</div>
                  <div class="content-box app-category metaverse">Metaverse</div>
                  <div class="content-box app-category gamefi">GameFi</div>
                </div>
              </div>
              <div class="ecosystem-column">
                <div class="ecosystem-label">Ecosystem</div>
              </div>
            </div>

            <!-- Layer 2 - Smart Contracts -->
            <div class="layer-row layer-2">
              <div class="layer-label">
                <div class="layer-number">LAYER 2</div>
                <div class="layer-name">
                  Smart Contracts<br/>Scalability<br/>Efficiency
                </div>
              </div>
              <div class="layer-content">
                <div class="content-grid">
                  <div class="content-box layer-main-box">
                    <div class="layer-icon">⚙️</div>
                    <div class="layer-title">Layer 2 Blockchains</div>
                  </div>
                  <div class="content-box services-box">
                    <div class="service-text">
                      Infrastructure | Dev Tools | Identity |<br/>
                      Privacy & Security | Analytics | DAO | Wallets...
                    </div>
                  </div>
                </div>
              </div>
              <div class="ecosystem-column">
                <div class="ecosystem-spacer"></div>
              </div>
            </div>

            <!-- Layer 1 - Consensus -->
            <div class="layer-row layer-1">
              <div class="layer-label">
                <div class="layer-number">LAYER 1</div>
                <div class="layer-name">Consensus<br/>Compute</div>
              </div>
              <div class="layer-content">
                <div class="content-grid">
                  <div class="content-box layer-main-box">
                    <div class="layer-icon">📦</div>
                    <div class="layer-title">Layer 1 Blockchains</div>
                  </div>
                  <div class="content-box compute-box">
                    <div class="compute-icon">🖥️</div>
                    <div class="compute-text">
                      Processor | Memory | Nodes |<br/>
                      Validators | Mining
                    </div>
                  </div>
                </div>
              </div>
              <div class="ecosystem-column">
                <div class="ecosystem-spacer"></div>
              </div>
            </div>

            <!-- Layer 0 - Networking -->
            <div class="layer-row layer-0">
              <div class="layer-label">
                <div class="layer-number">LAYER 0</div>
                <div class="layer-name">Networking</div>
              </div>
              <div class="layer-content full-width">
                <div class="content-box layer-main-box full-width-box">
                  <div class="layer-icon">🔗</div>
                  <div class="layer-title">Interoperability | SDKs</div>
                </div>
              </div>
              <div class="ecosystem-column">
                <div class="ecosystem-spacer"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- AWS Web3 Growth Section -->
    <section class="aws-growth-section">
      <div class="container">
        <div class="growth-header">
          <h2>AWS drives growth for Web3 companies with infrastructure, Go-to-Market support, and visibility with stringent security and compliance requirements</h2>
        </div>
        
        <div class="growth-grid">
          <div class="growth-card">
            <div class="growth-icon">
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" stroke-width="2"/>
                <path d="M2 17L12 22L22 17" stroke="currentColor" stroke-width="2"/>
                <path d="M2 12L12 17L22 12" stroke="currentColor" stroke-width="2"/>
              </svg>
              <div class="icon-accent"></div>
            </div>
            <h3>Make decisions faster with world-class <span class="highlight">infrastructure</span></h3>
            <p>With 200+ Services, AWS has the broadest and deepest solutions for Compute, Storage, Analytics, and AI/ML purpose built to suit the wide variety of Web3 companies' Infrastructure needs. By 2025, all AWS Services will be powered by 100% renewable energy.</p>
          </div>

          <div class="growth-card">
            <div class="growth-icon">
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none">
                <path d="M16 21V19A2 2 0 0 0 14 17H10A2 2 0 0 0 8 19V21" stroke="currentColor" stroke-width="2"/>
                <path d="M9 7H15L17 9V15H7V9L9 7Z" stroke="currentColor" stroke-width="2"/>
                <circle cx="12" cy="11" r="2" stroke="currentColor" stroke-width="2"/>
              </svg>
              <div class="icon-accent"></div>
            </div>
            <h3>Build <span class="highlight">GTM</span> and <span class="highlight">partnerships</span> across the Web3 ecosystem</h3>
            <p>AWS has deep startup expertise for Web3 natives and specialist teams dedicated to relevant industries in the ecosystem, including Fintech, TradFi, GameFi, Sports, and Media & Entertainment, built through years of partnering with organizations and investors globally</p>
          </div>

          <div class="growth-card">
            <div class="growth-icon">
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
                <path d="M2 12H6" stroke="currentColor" stroke-width="2"/>
                <path d="M18 12H22" stroke="currentColor" stroke-width="2"/>
                <path d="M12 2V6" stroke="currentColor" stroke-width="2"/>
                <path d="M12 18V22" stroke="currentColor" stroke-width="2"/>
              </svg>
              <div class="icon-accent"></div>
            </div>
            <h3>Go global and gain <span class="highlight">visibility</span> in minutes</h3>
            <p>With a global infrastructure spanning 87 Availability Zones and 27 geographic regions, AWS enables Web3 companies to build and grow with high availability and reach</p>
          </div>

          <div class="growth-card">
            <div class="growth-icon">
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none">
                <path d="M9 12L11 14L15 10" stroke="currentColor" stroke-width="2"/>
                <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" stroke-width="2"/>
              </svg>
              <div class="icon-accent"></div>
            </div>
            <h3>Strengthen <span class="highlight">security</span> and compliance</h3>
            <p>AWS is designed to meet the most stringent security requirements and offers 15+ security services, including a comprehensive AWS Security Hub, to help customers build with confidence. AWS has 98 security standards, more than any other cloud provider</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 1inch Case Study Section -->
    <section class="case-study-section">
      <div class="container">
        <div class="case-study-header">
          <h2>1inch reduced cloud expenditure by 30% migrating to AWS Graviton3</h2>
        </div>
        
        <div class="case-study-content">
          <div class="case-study-left">
            <div class="company-logo">
              <div class="logo-container">
                <div class="logo-circle">
                  <svg width="60" height="60" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" stroke-width="2" fill="currentColor"/>
                    <path d="M2 17L12 22L22 17" stroke="currentColor" stroke-width="2"/>
                    <path d="M2 12L12 17L22 12" stroke="currentColor" stroke-width="2"/>
                  </svg>
                </div>
                <div class="company-name">1inch</div>
                <div class="company-subtitle">NETWORK</div>
              </div>
            </div>
            
            <div class="testimonial">
              <div class="quote-mark">"</div>
              <p>Amazon is a famous, respected, reliable, and fast cloud provider with a number of superior solutions which help companies like ours to get ahead of competitors from technology and performance perspective with excellent time-to-market.</p>
              <div class="quote-mark closing">"</div>
              
              <div class="author">
                <div class="author-name">Sergej Kunz</div>
                <div class="author-title">Co-Founder, 1inch Network</div>
              </div>
            </div>
          </div>
          
          <div class="case-study-right">
            <div class="info-cards">
              <div class="info-card">
                <div class="info-icon">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                    <path d="M3 7V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V7" stroke="currentColor" stroke-width="2"/>
                    <path d="M21 7L12 13L3 7" stroke="currentColor" stroke-width="2"/>
                    <rect x="3" y="5" width="18" height="2" rx="1" fill="currentColor"/>
                  </svg>
                </div>
                <div class="info-content">
                  <p>1inch Network is a decentralized exchange (DEX) aggregator that aims to solve the liquidity problem of blockchain by offering a platform that helps traders find the best rate for token swap transactions across various liquidity sources.</p>
                </div>
              </div>
              
              <div class="info-card">
                <div class="info-icon">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="2"/>
                    <path d="M12 1V6" stroke="currentColor" stroke-width="2"/>
                    <path d="M12 18V23" stroke="currentColor" stroke-width="2"/>
                    <path d="M4.22 4.22L7.86 7.86" stroke="currentColor" stroke-width="2"/>
                    <path d="M16.14 16.14L19.78 19.78" stroke="currentColor" stroke-width="2"/>
                    <path d="M1 12H6" stroke="currentColor" stroke-width="2"/>
                    <path d="M18 12H23" stroke="currentColor" stroke-width="2"/>
                    <path d="M4.22 19.78L7.86 16.14" stroke="currentColor" stroke-width="2"/>
                    <path d="M16.14 7.86L19.78 4.22" stroke="currentColor" stroke-width="2"/>
                  </svg>
                </div>
                <div class="info-content">
                  <p>1inch leverages a wide variety AWS solutions, including the specialized CPU with <span class="highlight">Amazon Graviton</span> to build high-load data processing, the managed Kubernetes solutions with <span class="highlight">Amazon EKS</span> to save time in launching workloads, <span class="highlight">AWS Serverless Computing</span> to save money on recurring maintenance, and <span class="highlight">Amazon S3</span> for storage.</p>
                </div>
              </div>
              
              <div class="info-card result-card">
                <div class="info-icon">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
                    <path d="M8 12L10.5 14.5L16 9" stroke="currentColor" stroke-width="2"/>
                    <path d="M12 6V2" stroke="currentColor" stroke-width="2"/>
                    <path d="M12 22V18" stroke="currentColor" stroke-width="2"/>
                  </svg>
                </div>
                <div class="info-content">
                  <p>After migrating to AWS Graviton3, 1inch was able to double their performance and achieved cost reduction by 30% for cloud expenditure and infrastructure maintenance.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Coinbase Case Study Section -->
    <section class="case-study-section coinbase-section">
      <div class="container">
        <div class="case-study-header">
          <h2>Coinbase runs Machine Learning on AWS for online ID authentication</h2>
        </div>
        
        <div class="case-study-content">
          <div class="case-study-left">
            <div class="company-logo">
              <div class="logo-container">
                <div class="logo-text">
                  <span class="coinbase-logo">coinbase</span>
                </div>
              </div>
            </div>
            
            <div class="testimonial">
              <div class="quote-mark">"</div>
              <p>One of the biggest risk factors that a cryptocurrency exchange must get right is fraud, and machine learning forms the linchpin of our anti-fraud system.</p>
              <div class="quote-mark closing">"</div>
              
              <div class="author">
                <div class="author-name">Soups Ranjan</div>
                <div class="author-title">Director of Data Science, Coinbase</div>
              </div>
            </div>
          </div>
          
          <div class="case-study-right">
            <div class="info-cards">
              <div class="info-card">
                <div class="info-icon">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" stroke-width="2"/>
                    <path d="M2 17L12 22L22 17" stroke="currentColor" stroke-width="2"/>
                    <path d="M2 12L12 17L22 12" stroke="currentColor" stroke-width="2"/>
                  </svg>
                </div>
                <div class="info-content">
                  <p>Coinbase relies on AWS AI/ML tools to provide a seamless experience for consumers while taking steps to secure the environment in which they operate.</p>
                </div>
              </div>
              
              <div class="info-card">
                <div class="info-icon">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="2"/>
                    <path d="M12 1V6" stroke="currentColor" stroke-width="2"/>
                    <path d="M12 18V23" stroke="currentColor" stroke-width="2"/>
                    <path d="M4.22 4.22L7.86 7.86" stroke="currentColor" stroke-width="2"/>
                    <path d="M16.14 16.14L19.78 19.78" stroke="currentColor" stroke-width="2"/>
                    <path d="M1 12H6" stroke="currentColor" stroke-width="2"/>
                    <path d="M18 12H23" stroke="currentColor" stroke-width="2"/>
                    <path d="M4.22 19.78L7.86 16.14" stroke="currentColor" stroke-width="2"/>
                    <path d="M16.14 7.86L19.78 4.22" stroke="currentColor" stroke-width="2"/>
                  </svg>
                </div>
                <div class="info-content">
                  <p>Using <span class="highlight">Amazon SageMaker</span>, engineers at Coinbase developed machine learning algorithms for image analysis that recognizes mismatches and anomalies in sources of user identification.</p>
                  <div class="service-tag">Amazon SageMaker</div>
                </div>
              </div>
              
              <div class="info-card result-card">
                <div class="info-icon">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                    <rect x="3" y="4" width="18" height="12" rx="2" stroke="currentColor" stroke-width="2"/>
                    <path d="M7 8H17" stroke="currentColor" stroke-width="2"/>
                    <path d="M7 12H13" stroke="currentColor" stroke-width="2"/>
                    <circle cx="16" cy="12" r="1" fill="currentColor"/>
                    <path d="M3 20H21" stroke="currentColor" stroke-width="2"/>
                  </svg>
                </div>
                <div class="info-content">
                  <p>For example, scammers often use the same photo for multiple IDs. A face-similarity algorithm can quickly detect the forgery.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ADDX Case Study Section -->
    <section class="case-study-section addx-section">
      <div class="container">
        <div class="case-study-header">
          <h2>ADDX builds a secure digitized securities platform on AWS</h2>
        </div>
        
        <div class="case-study-content">
          <div class="case-study-left">
            <div class="company-logo">
              <div class="logo-container">
                <div class="addx-logo">
                  <span class="addx-text">ADDX</span>
                  <div class="addx-subtitle">previously iSTOX</div>
                </div>
              </div>
            </div>
            
            <div class="testimonial">
              <div class="quote-mark">"</div>
              <p>We chose AWS because we wanted the cloud service provider that puts us in the best interest to meet MAS' security standards.</p>
              <div class="quote-mark closing">"</div>
              
              <div class="author">
                <div class="author-name">Daruis Liu</div>
                <div class="author-title">Co-founder and Chief Operating Officer, ADDX</div>
              </div>
            </div>
          </div>
          
          <div class="case-study-right">
            <div class="info-cards">
              <div class="info-card">
                <div class="info-icon">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                    <rect x="3" y="4" width="18" height="12" rx="2" stroke="currentColor" stroke-width="2"/>
                    <path d="M7 8H17" stroke="currentColor" stroke-width="2"/>
                    <path d="M7 12H13" stroke="currentColor" stroke-width="2"/>
                    <circle cx="16" cy="12" r="1" fill="currentColor"/>
                  </svg>
                </div>
                <div class="info-content">
                  <p>As a trading platform for digitized securities, ADDX needs to ensure it provides a safe, secure, and reliable platform for its customers that meets the Monetary Authority of Singapore's (MAS) security regulations</p>
                </div>
              </div>
              
              <div class="info-card">
                <div class="info-icon">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
                    <path d="M12 6V12L16 14" stroke="currentColor" stroke-width="2"/>
                    <path d="M8 2V6" stroke="currentColor" stroke-width="2"/>
                    <path d="M16 2V6" stroke="currentColor" stroke-width="2"/>
                  </svg>
                </div>
                <div class="info-content">
                  <p>ADDX leverages <span class="highlight">Amazon VPC</span>, <span class="highlight">Amazon Config</span>, and <span class="highlight">Amazon GuardDuty</span> to manage security of its application environment. Using <span class="highlight">Amazon RDS</span> also allows it to easily replicate environments quickly and easily.</p>
                </div>
              </div>
              
              <div class="info-card result-card">
                <div class="info-icon">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                    <path d="M3 12L7 8L11 12L21 2" stroke="currentColor" stroke-width="2"/>
                    <path d="M21 12V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3H13" stroke="currentColor" stroke-width="2"/>
                  </svg>
                </div>
                <div class="info-content">
                  <p>Using <span class="highlight">AWS Managed services</span>, such as <span class="highlight">Amazon RDS</span>, has greatly reduced time spent on managing infrastructure, enabling faster time to market for new innovations and features.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Bitkub Case Study Section -->
    <section class="case-study-section bitkub-section">
      <div class="container">
        <div class="case-study-header">
          <h2>Bitkub scales with containers on AWS</h2>
        </div>
        
        <div class="case-study-content">
          <div class="case-study-left">
            <div class="company-logo">
              <div class="logo-container">
                <div class="bitkub-logo">
                  <svg width="60" height="60" viewBox="0 0 100 100" fill="none">
                    <path d="M20 20L40 40L20 60L40 80L60 60L80 80L60 40L80 20L60 40L40 20L20 40L40 60L60 40L40 20Z" fill="#00D4AA"/>
                    <path d="M60 20L80 40L60 60L40 40L60 20Z" fill="#0052FF"/>
                  </svg>
                  <span class="bitkub-text">bitkub</span>
                </div>
              </div>
            </div>
            
            <div class="testimonial">
              <div class="quote-mark">"</div>
              <p>We intend to expand our target base internationally next year and AWS would be the ideal cloud service provider to help us realize Bitkub's full potential.</p>
              <div class="quote-mark closing">"</div>
              
              <div class="author">
                <div class="author-name">K. Topp</div>
                <div class="author-title">Founder & Group CEO, Bitkub</div>
              </div>
            </div>
          </div>
          
          <div class="case-study-right">
            <div class="info-cards">
              <div class="info-card">
                <div class="info-icon">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                    <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" stroke-width="2"/>
                    <path d="M6 8H18" stroke="currentColor" stroke-width="2"/>
                    <path d="M6 12H14" stroke="currentColor" stroke-width="2"/>
                    <path d="M6 16H10" stroke="currentColor" stroke-width="2"/>
                  </svg>
                </div>
                <div class="info-content">
                  <p>Bitkub, a Cryptocurrency and Digital Asset Exchange in Thailand, is using over 50 different applications to help the company work in a smarter way. Bitkub wanted to support growing demand and increasing transactions, as well as add new features to its platform.</p>
                </div>
              </div>
              
              <div class="info-card">
                <div class="info-icon">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="2"/>
                    <path d="M12 1V3" stroke="currentColor" stroke-width="2"/>
                    <path d="M12 21V23" stroke="currentColor" stroke-width="2"/>
                    <path d="M4.22 4.22L5.64 5.64" stroke="currentColor" stroke-width="2"/>
                    <path d="M18.36 18.36L19.78 19.78" stroke="currentColor" stroke-width="2"/>
                    <path d="M1 12H3" stroke="currentColor" stroke-width="2"/>
                    <path d="M21 12H23" stroke="currentColor" stroke-width="2"/>
                    <path d="M4.22 19.78L5.64 18.36" stroke="currentColor" stroke-width="2"/>
                    <path d="M18.36 5.64L19.78 4.22" stroke="currentColor" stroke-width="2"/>
                  </svg>
                </div>
                <div class="info-content">
                  <p>Bitkub utilized <span class="highlight">Amazon EKS</span>, <span class="highlight">Amazon RDS</span>, <span class="highlight">Amazon S3</span>, <span class="highlight">Amazon Redshift</span>, and other managed services to support expansion. With AWS, Bitkub can evaluate new services and increase reliability, security, scalability, and provision the right amount of resources.</p>
                </div>
              </div>
              
              <div class="info-card result-card">
                <div class="info-icon">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                    <path d="M3 12L7 8L11 12L21 2" stroke="currentColor" stroke-width="2"/>
                    <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
                  </svg>
                </div>
                <div class="info-content">
                  <p>With AWS, Bitkub can scale to keep up with its growth. AWS also provides Bitkub with the ability to provide 24/7 support to its online business and teams while growing in a compliant way.</p>
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
  background: radial-gradient(
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

/* Web3 Quote Section */
.web3-quote-section {
  margin: 60px 0;
  text-align: center;
  position: relative;
}

.quote-container {
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  padding: 40px;
  background: linear-gradient(
    135deg,
    rgba(var(--exchange-accent-primary-rgb), 0.05) 0%,
    rgba(var(--exchange-accent-secondary-rgb), 0.03) 100%
  );
  border: 1px solid rgba(var(--exchange-accent-primary-rgb), 0.1);
  border-radius: 20px;
  backdrop-filter: blur(10px);
}

.quote-mark {
  font-size: 4rem;
  color: rgba(var(--exchange-accent-primary-rgb), 0.6);
  font-family: Georgia, serif;
  line-height: 1;
  position: absolute;
}

.quote-mark:first-child {
  top: 10px;
  left: 20px;
}

.quote-mark.closing {
  bottom: 10px;
  right: 20px;
  transform: rotate(180deg);
}

.web3-quote {
  font-size: 1.5rem;
  line-height: 1.6;
  color: var(--text-primary);
  font-style: italic;
  margin: 20px 0;
  font-weight: 300;
  letter-spacing: 0.5px;
}

.web3-principles {
  margin: 30px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 15px;
}

.principle {
  color: var(--exchange-accent-primary);
  font-weight: 600;
  font-size: 1.1rem;
  letter-spacing: 0.5px;
}

.separator {
  color: rgba(var(--exchange-accent-secondary-rgb), 0.6);
  font-weight: 300;
}

.quote-attribution {
  color: var(--text-secondary);
  font-size: 1rem;
  margin-top: 20px;
  font-style: normal;
}

@media (max-width: 768px) {
  .web3-quote {
    font-size: 1.2rem;
  }

  .web3-principles {
    flex-direction: column;
    gap: 10px;
  }

  .separator {
    display: none;
  }

  .quote-container {
    padding: 30px 20px;
  }

  .quote-mark {
    font-size: 3rem;
  }
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

/* AWS Web3 Growth Section */
.aws-growth-section {
  padding: 5rem 0;
  background: linear-gradient(
    135deg,
    rgba(var(--exchange-accent-primary-rgb), 0.02) 0%,
    rgba(var(--exchange-accent-secondary-rgb), 0.02) 100%
  );
  position: relative;
  overflow: hidden;
}

.aws-growth-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(
    circle at 20% 80%,
    rgba(var(--exchange-accent-primary-rgb), 0.05) 0%,
    transparent 50%
  ),
  radial-gradient(
    circle at 80% 20%,
    rgba(var(--exchange-accent-secondary-rgb), 0.05) 0%,
    transparent 50%
  );
  pointer-events: none;
}

.growth-header {
  text-align: center;
  margin-bottom: 4rem;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
}

.growth-header h2 {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--text-primary);
  line-height: 1.2;
  margin: 0;
  background: linear-gradient(
    135deg,
    var(--exchange-accent-primary),
    var(--exchange-accent-secondary)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.growth-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.growth-card {
  background: var(--card-bg);
  border: 1px solid rgba(var(--exchange-accent-primary-rgb), 0.1);
  border-radius: 1.5rem;
  padding: 2.5rem;
  text-align: center;
  position: relative;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}

.growth-card::before {
  content: '';
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

.growth-card:hover {
  transform: translateY(-8px);
  border-color: rgba(var(--exchange-accent-primary-rgb), 0.3);
  box-shadow: 0 20px 40px rgba(var(--exchange-accent-primary-rgb), 0.15);
}

.growth-card:hover::before {
  opacity: 1;
}

.growth-icon {
  position: relative;
  width: 80px;
  height: 80px;
  margin: 0 auto 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    135deg,
    rgba(var(--exchange-accent-primary-rgb), 0.1),
    rgba(var(--exchange-accent-secondary-rgb), 0.1)
  );
  border-radius: 50%;
  border: 2px solid rgba(var(--exchange-accent-primary-rgb), 0.2);
  transition: all 0.4s ease;
}

.growth-icon svg {
  color: var(--exchange-accent-primary);
  transition: all 0.3s ease;
}

.growth-card:hover .growth-icon {
  transform: scale(1.1) rotate(5deg);
  background: linear-gradient(
    135deg,
    rgba(var(--exchange-accent-primary-rgb), 0.2),
    rgba(var(--exchange-accent-secondary-rgb), 0.2)
  );
  border-color: rgba(var(--exchange-accent-primary-rgb), 0.4);
  box-shadow: 0 8px 25px rgba(var(--exchange-accent-primary-rgb), 0.3);
}

.growth-card:hover .growth-icon svg {
  transform: scale(1.1);
  color: var(--exchange-accent-secondary);
}

.icon-accent {
  position: absolute;
  top: -2px;
  right: -2px;
  width: 20px;
  height: 20px;
  background: linear-gradient(
    135deg,
    var(--exchange-accent-primary),
    var(--exchange-accent-secondary)
  );
  border-radius: 50%;
  border: 2px solid var(--card-bg);
  transition: all 0.3s ease;
}

.growth-card:hover .icon-accent {
  transform: scale(1.2);
  box-shadow: 0 4px 12px rgba(var(--exchange-accent-primary-rgb), 0.4);
}

.growth-card h3 {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 1.5rem;
  line-height: 1.3;
}

.growth-card .highlight {
  background: linear-gradient(
    135deg,
    var(--exchange-accent-primary),
    var(--exchange-accent-secondary)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: 800;
}

.growth-card p {
  color: var(--text-secondary);
  line-height: 1.7;
  font-size: 1rem;
  margin: 0;
}

/* Dark mode adjustments */
[data-theme="dark"] .aws-growth-section {
  background: linear-gradient(
    135deg,
    rgba(var(--exchange-accent-primary-rgb), 0.05) 0%,
    rgba(var(--exchange-accent-secondary-rgb), 0.05) 100%
  );
}

[data-theme="dark"] .growth-card {
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}

[data-theme="dark"] .growth-card:hover {
  box-shadow: 0 20px 40px rgba(var(--exchange-accent-primary-rgb), 0.2);
}

/* Responsive design */
@media (max-width: 768px) {
  .growth-header h2 {
    font-size: 2rem;
  }
  
  .growth-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .growth-card {
    padding: 2rem;
  }
  
  .growth-icon {
    width: 70px;
    height: 70px;
  }
}

/* 1inch Case Study Section */
.case-study-section {
  padding: 5rem 0;
  background: linear-gradient(
    135deg,
    rgba(var(--exchange-accent-primary-rgb), 0.03) 0%,
    rgba(var(--exchange-accent-secondary-rgb), 0.03) 100%
  );
  position: relative;
  overflow: hidden;
}

.case-study-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(
    circle at 30% 70%,
    rgba(var(--exchange-accent-primary-rgb), 0.08) 0%,
    transparent 50%
  );
  pointer-events: none;
}

.case-study-header {
  text-align: center;
  margin-bottom: 4rem;
}

.case-study-header h2 {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--text-primary);
  line-height: 1.2;
  margin: 0;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
}

.case-study-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;
  max-width: 1400px;
  margin: 0 auto;
}

.case-study-left {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.company-logo {
  text-align: center;
}

.logo-container {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.logo-circle {
  width: 100px;
  height: 100px;
  background: linear-gradient(
    135deg,
    var(--exchange-accent-primary),
    var(--exchange-accent-secondary)
  );
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8px 30px rgba(var(--exchange-accent-primary-rgb), 0.3);
  transition: all 0.3s ease;
}

.logo-circle:hover {
  transform: scale(1.05) rotate(5deg);
  box-shadow: 0 12px 40px rgba(var(--exchange-accent-primary-rgb), 0.4);
}

.logo-circle svg {
  color: white;
}

.company-name {
  font-size: 2.5rem;
  font-weight: 800;
  color: var(--text-primary);
  letter-spacing: -0.02em;
}

.company-subtitle {
  font-size: 1rem;
  font-weight: 600;
  color: var(--exchange-accent-primary);
  letter-spacing: 0.2em;
  text-transform: uppercase;
}

.testimonial {
  position: relative;
  background: var(--card-bg);
  border: 1px solid rgba(var(--exchange-accent-primary-rgb), 0.1);
  border-radius: 1.5rem;
  padding: 2.5rem;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
  backdrop-filter: blur(10px);
}

.quote-mark {
  font-size: 4rem;
  font-weight: 700;
  color: var(--exchange-accent-primary);
  line-height: 1;
  position: absolute;
  top: 1rem;
  left: 2rem;
}

.quote-mark.closing {
  bottom: 1rem;
  right: 2rem;
  top: auto;
  left: auto;
  transform: rotate(180deg);
}

.testimonial p {
  font-size: 1.1rem;
  line-height: 1.7;
  color: var(--text-secondary);
  margin: 2rem 0;
  font-style: italic;
  position: relative;
  z-index: 1;
}

.author {
  border-top: 1px solid rgba(var(--exchange-accent-primary-rgb), 0.15);
  padding-top: 1.5rem;
  margin-top: 2rem;
}

.author-name {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 0.25rem;
}

.author-title {
  font-size: 0.9rem;
  color: var(--text-muted);
  font-weight: 500;
}

.case-study-right {
  display: flex;
  flex-direction: column;
}

.info-cards {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.info-card {
  display: flex;
  gap: 1.5rem;
  align-items: flex-start;
  background: var(--card-bg);
  border: 1px solid rgba(var(--exchange-accent-primary-rgb), 0.1);
  border-radius: 1rem;
  padding: 2rem;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.info-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 4px;
  height: 100%;
  background: linear-gradient(
    to bottom,
    var(--exchange-accent-primary),
    var(--exchange-accent-secondary)
  );
  opacity: 0;
  transition: opacity 0.3s ease;
}

.info-card:hover {
  transform: translateX(8px);
  border-color: rgba(var(--exchange-accent-primary-rgb), 0.3);
  box-shadow: 0 8px 25px rgba(var(--exchange-accent-primary-rgb), 0.15);
}

.info-card:hover::before {
  opacity: 1;
}

.info-icon {
  flex-shrink: 0;
  width: 60px;
  height: 60px;
  background: linear-gradient(
    135deg,
    rgba(var(--exchange-accent-primary-rgb), 0.1),
    rgba(var(--exchange-accent-secondary-rgb), 0.1)
  );
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid rgba(var(--exchange-accent-primary-rgb), 0.2);
  transition: all 0.3s ease;
}

.info-card:hover .info-icon {
  background: linear-gradient(
    135deg,
    rgba(var(--exchange-accent-primary-rgb), 0.2),
    rgba(var(--exchange-accent-secondary-rgb), 0.2)
  );
  border-color: rgba(var(--exchange-accent-primary-rgb), 0.4);
  transform: scale(1.1);
}

.info-icon svg {
  color: var(--exchange-accent-primary);
  transition: all 0.3s ease;
}

.info-card:hover .info-icon svg {
  color: var(--exchange-accent-secondary);
  transform: scale(1.1);
}

.info-content p {
  color: var(--text-secondary);
  line-height: 1.7;
  margin: 0;
  font-size: 1rem;
}

.info-content .highlight {
  background: linear-gradient(
    135deg,
    var(--exchange-accent-primary),
    var(--exchange-accent-secondary)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: 700;
}

.result-card {
  background: linear-gradient(
    135deg,
    rgba(var(--exchange-accent-primary-rgb), 0.05),
    rgba(var(--exchange-accent-secondary-rgb), 0.05)
  );
  border: 2px solid rgba(var(--exchange-accent-primary-rgb), 0.2);
}

.result-card .info-icon {
  background: linear-gradient(
    135deg,
    var(--exchange-accent-primary),
    var(--exchange-accent-secondary)
  );
  border-color: transparent;
}

.result-card .info-icon svg {
  color: white;
}

.result-card:hover .info-icon {
  transform: scale(1.1) rotate(5deg);
  box-shadow: 0 8px 25px rgba(var(--exchange-accent-primary-rgb), 0.4);
}

/* Dark mode adjustments */
[data-theme="dark"] .case-study-section {
  background: linear-gradient(
    135deg,
    rgba(var(--exchange-accent-primary-rgb), 0.08) 0%,
    rgba(var(--exchange-accent-secondary-rgb), 0.08) 100%
  );
}

[data-theme="dark"] .testimonial,
[data-theme="dark"] .info-card {
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
}

[data-theme="dark"] .info-card:hover {
  box-shadow: 0 8px 25px rgba(var(--exchange-accent-primary-rgb), 0.2);
}

/* Responsive design */
@media (max-width: 1024px) {
  .case-study-content {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
  
  .case-study-header h2 {
    font-size: 2rem;
  }
}

@media (max-width: 768px) {
  .case-study-section {
    padding: 3rem 0;
  }
  
  .case-study-header h2 {
    font-size: 1.75rem;
  }
  
  .company-name {
    font-size: 2rem;
  }
  
  .logo-circle {
    width: 80px;
    height: 80px;
  }
  
  .testimonial,
  .info-card {
    padding: 1.5rem;
  }
  
  .quote-mark {
    font-size: 3rem;
    top: 0.5rem;
    left: 1.5rem;
  }
  
  .quote-mark.closing {
    bottom: 0.5rem;
    right: 1.5rem;
  }
  
  .info-card {
    flex-direction: column;
    text-align: center;
    gap: 1rem;
  }
  
  .info-icon {
    width: 50px;
    height: 50px;
    margin: 0 auto;
  }
}

/* Coinbase Section Specific Styles */
.coinbase-section {
  background: linear-gradient(
    135deg,
    rgba(59, 130, 246, 0.03) 0%,
    rgba(16, 185, 129, 0.03) 100%
  );
}

.coinbase-section::before {
  background: radial-gradient(
    circle at 70% 30%,
    rgba(59, 130, 246, 0.08) 0%,
    transparent 50%
  );
}

.logo-text {
  text-align: center;
  padding: 2rem 0;
}

.coinbase-logo {
  font-size: 3rem;
  font-weight: 700;
  color: #0052ff;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  letter-spacing: -0.02em;
  text-transform: lowercase;
  position: relative;
  display: inline-block;
}

.coinbase-logo::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(
    90deg,
    #0052ff 0%,
    #00d4aa 100%
  );
  border-radius: 2px;
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.coinbase-section .company-logo:hover .coinbase-logo::after {
  transform: scaleX(1);
}

.service-tag {
  display: inline-block;
  background: linear-gradient(
    135deg,
    rgba(59, 130, 246, 0.1),
    rgba(16, 185, 129, 0.1)
  );
  color: #0052ff;
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  margin-top: 1rem;
  border: 1px solid rgba(59, 130, 246, 0.2);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  transition: all 0.3s ease;
}

.coinbase-section .info-card:hover .service-tag {
  background: linear-gradient(
    135deg,
    rgba(59, 130, 246, 0.2),
    rgba(16, 185, 129, 0.2)
  );
  border-color: rgba(59, 130, 246, 0.4);
  transform: translateY(-2px);
}

/* Coinbase specific color overrides */
.coinbase-section .info-icon svg {
  color: #0052ff;
}

.coinbase-section .info-card:hover .info-icon svg {
  color: #00d4aa;
}

.coinbase-section .info-card::before {
  background: linear-gradient(
    to bottom,
    #0052ff,
    #00d4aa
  );
}

.coinbase-section .result-card .info-icon {
  background: linear-gradient(
    135deg,
    #0052ff,
    #00d4aa
  );
}

.coinbase-section .quote-mark {
  color: #0052ff;
}

.coinbase-section .highlight {
  background: linear-gradient(
    135deg,
    #0052ff,
    #00d4aa
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Dark mode adjustments for Coinbase */
[data-theme="dark"] .coinbase-section {
  background: linear-gradient(
    135deg,
    rgba(59, 130, 246, 0.08) 0%,
    rgba(16, 185, 129, 0.08) 100%
  );
}

[data-theme="dark"] .coinbase-logo {
  color: #3b82f6;
}

[data-theme="dark"] .service-tag {
  color: #60a5fa;
  border-color: rgba(59, 130, 246, 0.3);
}

/* Responsive adjustments for Coinbase logo */
@media (max-width: 768px) {
  .coinbase-logo {
    font-size: 2.5rem;
  }
}

/* ADDX Section Specific Styles */
.addx-section {
  background: linear-gradient(
    135deg,
    rgba(37, 99, 235, 0.03) 0%,
    rgba(29, 78, 216, 0.03) 100%
  );
}

.addx-section::before {
  background: radial-gradient(
    circle at 30% 70%,
    rgba(37, 99, 235, 0.08) 0%,
    transparent 50%
  );
}

.addx-section .logo-text {
  text-align: center;
  padding: 2rem 0;
}

.addx-logo {
  text-align: center;
}

.addx-text {
  font-size: 3.2rem;
  font-weight: 800;
  color: #2563eb;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  letter-spacing: 0.1em;
  display: block;
  position: relative;
}

.addx-text::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 50%;
  transform: translateX(-50%);
  width: 80%;
  height: 3px;
  background: linear-gradient(
    90deg,
    #2563eb 0%,
    #1d4ed8 100%
  );
  border-radius: 2px;
  transform: translateX(-50%) scaleX(0);
  transition: transform 0.3s ease;
}

.addx-section .company-logo:hover .addx-text::after {
  transform: translateX(-50%) scaleX(1);
}

.addx-subtitle {
  color: rgba(37, 99, 235, 0.7);
  font-size: 0.9rem;
  font-weight: 500;
  margin-top: 0.5rem;
  letter-spacing: 0.05em;
  text-transform: lowercase;
  font-style: italic;
}

/* ADDX specific color overrides */
.addx-section .info-icon svg {
  color: #2563eb;
}

.addx-section .info-card:hover .info-icon svg {
  color: #1d4ed8;
}

.addx-section .info-card::before {
  background: linear-gradient(
    to bottom,
    #2563eb,
    #1d4ed8
  );
}

.addx-section .result-card .info-icon {
  background: linear-gradient(
    135deg,
    #2563eb,
    #1d4ed8
  );
}

.addx-section .quote-mark {
  color: #2563eb;
}

.addx-section .highlight {
  background: linear-gradient(
    135deg,
    #2563eb,
    #1d4ed8
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Dark mode adjustments for ADDX */
[data-theme="dark"] .addx-section {
  background: linear-gradient(
    135deg,
    rgba(37, 99, 235, 0.08) 0%,
    rgba(29, 78, 216, 0.08) 100%
  );
}

[data-theme="dark"] .addx-text {
  color: #60a5fa;
}

[data-theme="dark"] .addx-subtitle {
  color: rgba(96, 165, 250, 0.7);
}

/* Responsive adjustments for ADDX logo */
@media (max-width: 768px) {
  .addx-text {
    font-size: 2.6rem;
  }
  
  .addx-subtitle {
    font-size: 0.8rem;
  }
}

/* Bitkub Section Specific Styles */
.bitkub-section {
  background: linear-gradient(
    135deg,
    rgba(0, 212, 170, 0.03) 0%,
    rgba(0, 82, 255, 0.03) 100%
  );
}

.bitkub-section::before {
  background: radial-gradient(
    circle at 80% 20%,
    rgba(0, 212, 170, 0.08) 0%,
    transparent 50%
  );
}

.bitkub-section .logo-text {
  text-align: center;
  padding: 2rem 0;
}

.bitkub-logo {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

.bitkub-logo svg {
  transition: all 0.3s ease;
}

.bitkub-section .company-logo:hover .bitkub-logo svg {
  transform: scale(1.1) rotate(5deg);
}

.bitkub-text {
  font-size: 2.8rem;
  font-weight: 600;
  color: #00D4AA;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  letter-spacing: -0.02em;
  text-transform: lowercase;
  position: relative;
}

.bitkub-text::after {
  content: '';
  position: absolute;
  bottom: -6px;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(
    90deg,
    #00D4AA 0%,
    #0052FF 100%
  );
  border-radius: 2px;
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.bitkub-section .company-logo:hover .bitkub-text::after {
  transform: scaleX(1);
}

/* Bitkub specific color overrides */
.bitkub-section .info-icon svg {
  color: #00D4AA;
}

.bitkub-section .info-card:hover .info-icon svg {
  color: #0052FF;
}

.bitkub-section .info-card::before {
  background: linear-gradient(
    to bottom,
    #00D4AA,
    #0052FF
  );
}

.bitkub-section .result-card .info-icon {
  background: linear-gradient(
    135deg,
    #00D4AA,
    #0052FF
  );
}

.bitkub-section .quote-mark {
  color: #00D4AA;
}

.bitkub-section .highlight {
  background: linear-gradient(
    135deg,
    #00D4AA,
    #0052FF
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Dark mode adjustments for Bitkub */
[data-theme="dark"] .bitkub-section {
  background: linear-gradient(
    135deg,
    rgba(0, 212, 170, 0.08) 0%,
    rgba(0, 82, 255, 0.08) 100%
  );
}

[data-theme="dark"] .bitkub-text {
  color: #34d399;
}

/* Responsive adjustments for Bitkub logo */
@media (max-width: 768px) {
  .bitkub-text {
    font-size: 2.2rem;
  }
  
  .bitkub-logo {
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .bitkub-logo svg {
    width: 50px;
    height: 50px;
  }
}

/* AWS Web3 Architecture */
.aws-web3-architecture {
  padding: 5rem 0;
  background: linear-gradient(
    135deg,
    rgba(var(--exchange-accent-primary-rgb), 0.03) 0%,
    rgba(var(--exchange-accent-secondary-rgb), 0.03) 100%
  );
  position: relative;
  overflow: hidden;
}

.aws-web3-architecture::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(
    circle at 50% 50%,
    rgba(var(--exchange-accent-primary-rgb), 0.08) 0%,
    transparent 50%
  );
  pointer-events: none;
}

.architecture-header {
  text-align: center;
  margin-bottom: 3rem;
  position: relative;
  z-index: 1;
}

.architecture-header h2 {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--text-primary);
  margin: 0;
  background: linear-gradient(
    135deg,
    var(--exchange-accent-primary),
    var(--exchange-accent-secondary)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;
}

.architecture-header h2::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 4px;
  background: linear-gradient(
    90deg,
    var(--exchange-accent-primary),
    var(--exchange-accent-secondary)
  );
  border-radius: 2px;
}

[data-theme="dark"] .aws-web3-architecture {
  background: linear-gradient(
    135deg,
    rgba(var(--exchange-accent-primary-rgb), 0.08) 0%,
    rgba(var(--exchange-accent-secondary-rgb), 0.08) 100%
  );
}

.architecture-diagram {
  border: 1px solid rgba(var(--exchange-accent-primary-rgb), 0.1);
  border-radius: 1.5rem;
  overflow: hidden;
  max-width: 1200px;
  margin: 0 auto;
  background: var(--card-bg);
  box-shadow: 0 20px 40px rgba(var(--exchange-accent-primary-rgb), 0.1);
  backdrop-filter: blur(10px);
  position: relative;
  z-index: 1;
}

.architecture-diagram::before {
  content: '';
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
  pointer-events: none;
}

[data-theme="dark"] .architecture-diagram {
  border: 1px solid rgba(var(--exchange-accent-primary-rgb), 0.2);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

.layer-row {
  display: grid;
  grid-template-columns: 200px 1fr 100px;
  border-bottom: 1px solid rgba(var(--exchange-accent-primary-rgb), 0.1);
  min-height: 120px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  z-index: 1;
}

.layer-row:last-child {
  border-bottom: none;
}

.layer-row:hover {
  background: linear-gradient(
    135deg,
    rgba(var(--exchange-accent-primary-rgb), 0.03) 0%,
    rgba(var(--exchange-accent-secondary-rgb), 0.03) 100%
  );
  transform: translateY(-2px);
}

[data-theme="dark"] .layer-row {
  border-bottom: 1px solid rgba(var(--exchange-accent-primary-rgb), 0.15);
}

[data-theme="dark"] .layer-row:hover {
  background: linear-gradient(
    135deg,
    rgba(var(--exchange-accent-primary-rgb), 0.08) 0%,
    rgba(var(--exchange-accent-secondary-rgb), 0.08) 100%
  );
}

.layer-label {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.5rem;
  border-right: 1px solid rgba(var(--exchange-accent-primary-rgb), 0.15);
  background: linear-gradient(
    135deg,
    rgba(var(--exchange-accent-primary-rgb), 0.05) 0%,
    rgba(var(--exchange-accent-secondary-rgb), 0.05) 100%
  );
  text-align: center;
  position: relative;
  transition: all 0.3s ease;
}

.layer-label::before {
  content: '';
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
}

.layer-row:hover .layer-label::before {
  opacity: 1;
}

[data-theme="dark"] .layer-label {
  border-right: 1px solid rgba(var(--exchange-accent-primary-rgb), 0.2);
  background: linear-gradient(
    135deg,
    rgba(var(--exchange-accent-primary-rgb), 0.08) 0%,
    rgba(var(--exchange-accent-secondary-rgb), 0.08) 100%
  );
}

.layer-arrow {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: #ec4899;
}

.layer-number {
  font-size: 0.8rem;
  font-weight: 600;
  opacity: 0.8;
  margin-bottom: 0.25rem;
}

.layer-name {
  font-size: 0.9rem;
  font-weight: 500;
  line-height: 1.2;
}

.layer-content {
  display: flex;
  align-items: center;
  padding: 1.5rem;
  border-right: 1px solid rgba(var(--exchange-accent-primary-rgb), 0.1);
  background: linear-gradient(
    135deg,
    rgba(var(--exchange-accent-primary-rgb), 0.02) 0%,
    rgba(var(--exchange-accent-secondary-rgb), 0.02) 100%
  );
  position: relative;
  z-index: 1;
}

.layer-content.full-width {
  border-right: none;
  grid-column: 2 / 4;
}

[data-theme="dark"] .layer-content {
  border-right: 1px solid rgba(var(--exchange-accent-primary-rgb), 0.15);
  background: linear-gradient(
    135deg,
    rgba(var(--exchange-accent-primary-rgb), 0.05) 0%,
    rgba(var(--exchange-accent-secondary-rgb), 0.05) 100%
  );
}

/* Layer 3 specific styles */
.layer-3 .layer-label {
  background: rgba(236, 72, 153, 0.08);
}

.layer-3 .layer-number,
.layer-3 .layer-name,
.layer-3 .layer-arrow {
  color: #be185d;
}

[data-theme="dark"] .layer-3 .layer-label {
  background: rgba(236, 72, 153, 0.1);
}

[data-theme="dark"] .layer-3 .layer-number,
[data-theme="dark"] .layer-3 .layer-name,
[data-theme="dark"] .layer-3 .layer-arrow {
  color: #ec4899;
}

.content-grid {
  display: flex;
  gap: 1rem;
  align-items: center;
  width: 100%;
}

.content-box {
  padding: 1rem 1.25rem;
  background: linear-gradient(
    135deg,
    rgba(var(--exchange-accent-primary-rgb), 0.05) 0%,
    rgba(var(--exchange-accent-secondary-rgb), 0.05) 100%
  );
  border: 1px solid rgba(var(--exchange-accent-primary-rgb), 0.15);
  border-radius: 1rem;
  font-size: 0.9rem;
  font-weight: 500;
  text-align: center;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: blur(10px);
  position: relative;
  overflow: hidden;
}

.content-box::before {
  content: '';
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
  opacity: 0;
  transition: opacity 0.3s ease;
}

.content-box:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 25px rgba(var(--exchange-accent-primary-rgb), 0.15);
}

.content-box:hover::before {
  opacity: 1;
}

[data-theme="dark"] .content-box {
  background: linear-gradient(
    135deg,
    rgba(var(--exchange-accent-primary-rgb), 0.08) 0%,
    rgba(var(--exchange-accent-secondary-rgb), 0.08) 100%
  );
  border: 1px solid rgba(var(--exchange-accent-primary-rgb), 0.2);
}

[data-theme="dark"] .content-box:hover {
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
}

.app-icon-box {
  width: 60px;
  flex-shrink: 0;
}

.app-icon {
  font-size: 1.5rem;
  margin: 0;
}

.app-category {
  flex: 1;
  min-width: 80px;
  color: #be185d;
  border: 2px dashed rgba(236, 72, 153, 0.4);
}

.defi { background: linear-gradient(135deg, #059669, #047857); color: white; border: none; }
.nfts { background: linear-gradient(135deg, #7c3aed, #6d28d9); color: white; border: none; }
.metaverse { background: linear-gradient(135deg, #d97706, #b45309); color: white; border: none; }
.gamefi { background: linear-gradient(135deg, #dc2626, #b91c1c); color: white; border: none; }

[data-theme="dark"] .app-category {
  color: #ec4899;
  border: 2px dashed rgba(236, 72, 153, 0.3);
}

[data-theme="dark"] .defi { background: linear-gradient(135deg, #10b981, #059669); }
[data-theme="dark"] .nfts { background: linear-gradient(135deg, #8b5cf6, #7c3aed); }
[data-theme="dark"] .metaverse { background: linear-gradient(135deg, #f59e0b, #d97706); }
[data-theme="dark"] .gamefi { background: linear-gradient(135deg, #ef4444, #dc2626); }

/* Layer 2 specific styles */
.layer-2 .layer-label {
  background: rgba(251, 146, 60, 0.08);
}

.layer-2 .layer-number,
.layer-2 .layer-name {
  color: #ea580c;
}

[data-theme="dark"] .layer-2 .layer-label {
  background: rgba(251, 146, 60, 0.1);
}

[data-theme="dark"] .layer-2 .layer-number,
[data-theme="dark"] .layer-2 .layer-name {
  color: #fb923c;
}

.layer-2 .layer-content {
  align-items: center;
}

.layer-main-box {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  color: #ea580c;
  border: 2px dashed rgba(251, 146, 60, 0.4);
}

.services-box {
  flex: 2;
  text-align: left;
  color: #ea580c;
}

[data-theme="dark"] .layer-main-box {
  color: #fb923c;
  border: 2px dashed rgba(251, 146, 60, 0.3);
}

[data-theme="dark"] .services-box {
  color: #fb923c;
}

.layer-icon {
  font-size: 1.5rem;
}

.layer-title {
  font-size: 1rem;
  font-weight: 500;
}

.service-text {
  font-size: 0.85rem;
  opacity: 0.8;
  line-height: 1.4;
}

/* Layer 1 specific styles */
.layer-1 .layer-label {
  background: rgba(234, 179, 8, 0.08);
}

.layer-1 .layer-number,
.layer-1 .layer-name {
  color: #ca8a04;
}

.layer-1 .layer-content {
  align-items: center;
}

.layer-1 .layer-main-box {
  color: #ca8a04;
  border: 2px dashed rgba(234, 179, 8, 0.4);
}

.layer-1 .layer-title {
  color: #ca8a04;
}

.compute-box {
  flex: 2;
  display: flex;
  align-items: center;
  gap: 1rem;
  text-align: left;
  color: #ca8a04;
}

[data-theme="dark"] .layer-1 .layer-label {
  background: rgba(234, 179, 8, 0.1);
}

[data-theme="dark"] .layer-1 .layer-number,
[data-theme="dark"] .layer-1 .layer-name {
  color: #eab308;
}

[data-theme="dark"] .layer-1 .layer-main-box {
  color: #eab308;
  border: 2px dashed rgba(234, 179, 8, 0.3);
}

[data-theme="dark"] .layer-1 .layer-title {
  color: #eab308;
}

[data-theme="dark"] .compute-box {
  color: #eab308;
}

.compute-icon {
  font-size: 1.5rem;
  flex-shrink: 0;
}

.compute-text {
  font-size: 0.85rem;
  opacity: 0.8;
  line-height: 1.4;
}

/* Layer 0 specific styles */
.layer-0 .layer-label {
  background: rgba(34, 197, 94, 0.08);
}

.layer-0 .layer-number,
.layer-0 .layer-name {
  color: #16a34a;
}

.layer-0 .layer-main-box {
  color: #16a34a;
  border: 2px dashed rgba(34, 197, 94, 0.4);
}

.layer-0 .layer-title {
  color: #16a34a;
}

[data-theme="dark"] .layer-0 .layer-label {
  background: rgba(34, 197, 94, 0.1);
}

[data-theme="dark"] .layer-0 .layer-number,
[data-theme="dark"] .layer-0 .layer-name {
  color: #22c55e;
}

[data-theme="dark"] .layer-0 .layer-main-box {
  color: #22c55e;
  border: 2px dashed rgba(34, 197, 94, 0.3);
}

[data-theme="dark"] .layer-0 .layer-title {
  color: #22c55e;
}

.full-width-box {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  justify-content: center;
}

/* Ecosystem Column */
.ecosystem-column {
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(139, 92, 246, 0.08);
  border-left: 2px solid rgba(139, 92, 246, 0.25);
}

.ecosystem-label {
  font-size: 1rem;
  font-weight: 600;
  color: #7c3aed;
  text-align: center;
  transform: rotate(-90deg);
  white-space: nowrap;
}

.ecosystem-spacer {
  background: rgba(139, 92, 246, 0.03);
}

[data-theme="dark"] .ecosystem-column {
  background: rgba(139, 92, 246, 0.1);
  border-left: 2px solid rgba(139, 92, 246, 0.3);
}

[data-theme="dark"] .ecosystem-label {
  color: #8b5cf6;
}

[data-theme="dark"] .ecosystem-spacer {
  background: rgba(139, 92, 246, 0.05);
}

/* Responsive Design */
@media (max-width: 1024px) {
  .layer-row {
    grid-template-columns: 150px 1fr 60px;
  }
  
  .layer-label {
    padding: 0.75rem;
  }
  
  .layer-content {
    padding: 0.75rem;
  }
}

@media (max-width: 768px) {
  .layer-row {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
  }
  
  .layer-label {
    border-right: none;
    border-bottom: 2px solid rgba(255, 255, 255, 0.1);
  }
  
  .layer-content {
    border-right: none;
  }
  
  .layer-content.full-width {
    grid-column: 1;
  }
  
  .ecosystem-column,
  .ecosystem-spacer {
    display: none;
  }
  
  .app-grid {
    flex-wrap: wrap;
    gap: 0.5rem;
  }
  
  .app-item {
    min-width: 60px;
    padding: 0.5rem;
    font-size: 0.8rem;
  }
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
  background: radial-gradient(
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
  background: radial-gradient(
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
