<template>
  <div class="supply-chain-cases-page">
    <div class="case-hero">
      <div class="hero-container">
        <div class="hero-content">
          <h1 class="hero-title">{{ $t("supply-chain.hero.title") }}</h1>
          <p class="hero-subtitle">{{ $t("supply-chain.hero.subTitle") }}</p>
          <p class="hero-description">
            {{ $t("supply-chain.hero.desc") }}
          </p>
          <div class="hero-buttons">
            <a href="/contact" class="btn-primary">{{
              $t("supply-chain.hero.button")
            }}</a>
            <a href="#case-details" class="btn-secondary">{{
              $t("supply-chain.hero.viewMoreCases")
            }}</a>
          </div>
        </div>
        <div class="hero-visual">
          <div class="supply-chain-icon">
            <svg width="120" height="120" viewBox="0 0 24 24" fill="none">
              <path
                d="M3 7V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7Z"
                stroke="currentColor"
                stroke-width="2"
              />
              <path
                d="M8 11L10 13L16 7"
                stroke="currentColor"
                stroke-width="2"
              />
              <circle cx="6" cy="6" r="2" fill="currentColor" opacity="0.3" />
              <circle cx="18" cy="18" r="2" fill="currentColor" opacity="0.3" />
              <path
                d="M6 8L18 16"
                stroke="currentColor"
                stroke-width="1"
                opacity="0.5"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>

    <section id="case-details" class="industry-overview">
      <div class="container">
        <div class="section-header">
          <h2>{{ $t("supply-chain.section.supplyChainSolution") }}</h2>
          <p>
            {{ $t("supply-chain.section.endToEndSupplyChainDigitalService") }}
          </p>
        </div>

        <div class="solutions-grid">
          <div class="solution-card">
            <div class="solution-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                <path
                  d="M21 16V8C21 6.89543 20.1046 6 19 6H5C3.89543 6 3 6.89543 3 8V16C3 17.1046 3.89543 18 5 18H19C20.1046 18 21 17.1046 21 16Z"
                  stroke="currentColor"
                  stroke-width="2"
                />
                <path
                  d="M7 10H17M7 14H13"
                  stroke="currentColor"
                  stroke-width="2"
                />
              </svg>
            </div>
            <h3>{{ $t("supply-chain.section.smartRepositoryManagement") }}</h3>
            <p>
              {{ $t("supply-chain.section.smartRepositoryManagementDesc") }}
            </p>
          </div>

          <div class="solution-card">
            <div class="solution-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                <path
                  d="M13 2L3 14H12L11 22L21 10H12L13 2Z"
                  stroke="currentColor"
                  stroke-width="2"
                  fill="none"
                />
              </svg>
            </div>
            <h3>
              {{ $t("supply-chain.section.logisticsDistributionOptimization") }}
            </h3>
            <p>
              {{
                $t("supply-chain.section.logisticsDistributionOptimizationDesc")
              }}
            </p>
          </div>

          <div class="solution-card">
            <div class="solution-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                <path
                  d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                  stroke="currentColor"
                  stroke-width="2"
                />
              </svg>
            </div>
            <h3>{{ $t("supply-chain.section.supplierCoordination") }}</h3>
            <p>
              {{ $t("supply-chain.section.supplierCoordinationDesc") }}
            </p>
          </div>

          <div class="solution-card">
            <div class="solution-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z"
                  stroke="currentColor"
                  stroke-width="2"
                  fill="none"
                />
              </svg>
            </div>
            <h3>{{ $t("supply-chain.section.demandForecastAnalysis") }}</h3>
            <p>
              {{ $t("supply-chain.section.demandForecastAnalysisDesc") }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="featured-case">
      <div class="container">
        <div class="case-spotlight">
          <div class="case-content">
            <div class="case-badge">
              {{ $t("supply-chain.section.keyCases") }}
            </div>
            <h2>
              {{ $t("supply-chain.section.globalManufacturingEnterprise") }}
            </h2>
            <p class="case-description">
              {{ $t("supply-chain.section.globalManufacturingEnterpriseDesc") }}
            </p>

            <div class="case-highlights">
              <div class="highlight-item">
                <div class="highlight-number">40%</div>
                <div class="highlight-label">
                  {{ $t("supply-chain.section.inventoryCostReduction") }}
                </div>
              </div>
              <div class="highlight-item">
                <div class="highlight-number">60%</div>
                <div class="highlight-label">
                  {{ $t("supply-chain.section.deliveryTimeReduction") }}
                </div>
              </div>
              <div class="highlight-item">
                <div class="highlight-number">95%</div>
                <div class="highlight-label">
                  {{ $t("supply-chain.section.orderAccuracy") }}
                </div>
              </div>
              <div class="highlight-item">
                <div class="highlight-number">30%</div>
                <div class="highlight-label">
                  {{ $t("supply-chain.section.operationalEfficiency") }}
                </div>
              </div>
            </div>

            <div class="case-technologies">
              <h4>{{ $t("supply-chain.section.coreTechnologies") }}</h4>
              <div class="tech-tags">
                <span class="tech-tag">{{
                  $t("supply-chain.section.iotInternetOfThings")
                }}</span>
                <span class="tech-tag">{{
                  $t("supply-chain.section.AIPredictionAnalysis")
                }}</span>
                <span class="tech-tag">{{
                  $t("supply-chain.section.blockchainTracing")
                }}</span>
                <span class="tech-tag">{{
                  $t("supply-chain.section.cloudComputing")
                }}</span>
                <span class="tech-tag">{{
                  $t("supply-chain.section.bigDataAnalysis")
                }}</span>
              </div>
            </div>
          </div>

          <div class="case-visual">
            <div class="case-image">
              <div class="image-placeholder">
                <svg width="200" height="150" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M3 7V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7Z"
                    stroke="currentColor"
                    stroke-width="2"
                  />
                  <path
                    d="M8 11L10 13L16 7"
                    stroke="currentColor"
                    stroke-width="2"
                  />
                  <circle
                    cx="12"
                    cy="12"
                    r="3"
                    fill="currentColor"
                    opacity="0.3"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="case-studies">
      <div class="container">
        <div class="section-header">
          <h2>{{ $t("supply-chain.section.moreSupplyChainCases") }}</h2>
          <p>
            {{ $t("supply-chain.section.ourSuccessfulPracticesInSupplyChain") }}
          </p>
        </div>

        <div class="cases-grid">
          <div class="case-card">
            <div class="case-header">
              <div class="case-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M4 7V4C4 2.89543 4.89543 2 6 2H18C19.1046 2 20 2.89543 20 4V7M4 7C2.89543 7 2 7.89543 2 9V19C2 20.1046 2.89543 21 4 21H20C21.1046 21 22 20.1046 22 19V9C22 7.89543 21.1046 7 20 7M4 7H20"
                    stroke="currentColor"
                    stroke-width="2"
                  />
                  <circle cx="12" cy="14" r="2" fill="currentColor" />
                </svg>
              </div>
              <div class="case-category">
                {{ $t("supply-chain.section.smartManufacturing") }}
              </div>
            </div>
            <h3>{{ $t("supply-chain.section.Cars") }}</h3>
            <p>
              {{ $t("supply-chain.section.CarsDesc") }}
            </p>
            <div class="case-metrics">
              <div class="metric">
                <span class="metric-value">50%</span>
                <span class="metric-label">{{
                  $t("supply-chain.section.inventoryTurnoverPromotion")
                }}</span>
              </div>
              <div class="metric">
                <span class="metric-value">99.5%</span>
                <span class="metric-label">{{
                  $t("supply-chain.section.qualityRate")
                }}</span>
              </div>
            </div>
            <div class="case-features">
              <span class="feature-tag">{{
                $t("supply-chain.section.JIT")
              }}</span>
              <span class="feature-tag">{{
                $t("supply-chain.section.qualityTraceability")
              }}</span>
              <span class="feature-tag">{{
                $t("supply-chain.section.supplierManagement")
              }}</span>
            </div>
          </div>

          <div class="case-card">
            <div class="case-header">
              <div class="case-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                  />
                </svg>
              </div>
              <div class="case-category">
                {{ $t("supply-chain.section.retailE-commerce") }}
              </div>
            </div>
            <h3>
              {{ $t("supply-chain.section.fullChannelRetailSupplyChain") }}
            </h3>
            <p>
              {{ $t("supply-chain.section.fullChannelRetailSupplyChainDesc") }}
            </p>
            <div class="case-metrics">
              <div class="metric">
                <span class="metric-value">35%</span>
                <span class="metric-label">{{
                  $t("supply-chain.section.deliveryCostReduction")
                }}</span>
              </div>
              <div class="metric">
                <span class="metric-value">{{
                  $t("supply-chain.section.24HourService")
                }}</span>
                <span class="metric-label">{{
                  $t("supply-chain.section.deliveryTime")
                }}</span>
              </div>
            </div>
            <div class="case-features">
              <span class="feature-tag">{{
                $t("supply-chain.section.fullChannelInventory")
              }}</span>
              <span class="feature-tag">{{
                $t("supply-chain.section.smartDistribution")
              }}</span>
              <span class="feature-tag">{{
                $t("supply-chain.section.customerExperience")
              }}</span>
            </div>
          </div>

          <div class="case-card">
            <div class="case-header">
              <div class="case-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88M13 7C13 9.20914 11.2091 11 9 11C6.79086 11 5 9.20914 5 7C5 4.79086 6.79086 3 9 3C11.2091 3 13 4.79086 13 7Z"
                    stroke="currentColor"
                    stroke-width="2"
                  />
                </svg>
              </div>
              <div class="case-category">
                {{ $t("supply-chain.section.coolChainLogistics") }}
              </div>
            </div>
            <h3>
              {{ $t("supply-chain.section.freshFrozenChainManagementSystem") }}
            </h3>
            <p>
              {{
                $t("supply-chain.section.freshFrozenChainManagementSystemDesc")
              }}
            </p>
            <div class="case-metrics">
              <div class="metric">
                <span class="metric-value">98%</span>
                <span class="metric-label">{{
                  $t("supply-chain.section.temperatureControlRate")
                }}</span>
              </div>
              <div class="metric">
                <span class="metric-value">20%</span>
                <span class="metric-label">{{
                  $t("supply-chain.section.lossRateReduction")
                }}</span>
              </div>
            </div>
            <div class="case-features">
              <span class="feature-tag">{{
                $t("supply-chain.section.temperatureMonitoring")
              }}</span>
              <span class="feature-tag">{{
                $t("supply-chain.section.qualityTraceabilitys")
              }}</span>
              <span class="feature-tag">{{
                $t("supply-chain.section.smartWarning")
              }}</span>
            </div>
          </div>

          <div class="case-card">
            <div class="case-header">
              <div class="case-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                    stroke="currentColor"
                    stroke-width="2"
                  />
                </svg>
              </div>
              <div class="case-category">
                {{ $t("supply-chain.section.crossBorderTrade") }}
              </div>
            </div>
            <h3>
              {{ $t("supply-chain.section.crossBorderE-commerceSupplyChain") }}
            </h3>
            <p>
              {{
                $t("supply-chain.section.crossBorderE-commerceSupplyChainDesc")
              }}
            </p>
            <div class="case-metrics">
              <div class="metric">
                <span class="metric-value">30+</span>
                <span class="metric-label">{{
                  $t("supply-chain.section.coverCountries")
                }}</span>
              </div>
              <div class="metric">
                <span class="metric-value">{{
                  $t("supply-chain.section.7DayService")
                }}</span>
                <span class="metric-label">{{
                  $t("supply-chain.section.averageDeliveryTime")
                }}</span>
              </div>
            </div>
            <div class="case-features">
              <span class="feature-tag">{{
                $t("supply-chain.section.overseaRepository")
              }}</span>
              <span class="feature-tag">{{
                $t("supply-chain.section.smartClearance")
              }}</span>
              <span class="feature-tag">{{
                $t("supply-chain.section.globalDistribution")
              }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="technology-stack">
      <div class="container">
        <div class="section-header">
          <h2>{{ $t("supply-chain.section.supplyChainTechnologyStack") }}</h2>
          <p>{{ $t("supply-chain.section.supplyChainCoreTechnologies") }}</p>
        </div>

        <div class="tech-categories">
          <div class="tech-category">
            <h3>{{ $t("supply-chain.section.iotInternetOfThingse") }}</h3>
            <div class="tech-items">
              <div class="tech-item">{{ $t("supply-chain.section.RFID") }}</div>
              <div class="tech-item">
                {{ $t("supply-chain.section.sensorNetwork") }}
              </div>
              <div class="tech-item">{{ $t("supply-chain.section.GPS") }}</div>
              <div class="tech-item">
                {{ $t("supply-chain.section.temperatureMonitoring") }}
              </div>
            </div>
          </div>

          <div class="tech-category">
            <h3>{{ $t("supply-chain.section.dataAnalysis") }}</h3>
            <div class="tech-items">
              <div class="tech-item">
                {{ $t("supply-chain.section.demandForecast") }}
              </div>
              <div class="tech-item">
                {{ $t("supply-chain.section.inventoryOptimization") }}
              </div>
              <div class="tech-item">
                {{ $t("supply-chain.section.pathPlanning") }}
              </div>
              <div class="tech-item">
                {{ $t("supply-chain.section.riskAssessment") }}
              </div>
            </div>
          </div>

          <div class="tech-category">
            <h3>{{ $t("supply-chain.section.automationTechnology") }}</h3>
            <div class="tech-items">
              <div class="tech-item">
                {{ $t("supply-chain.section.robotPicking") }}
              </div>
              <div class="tech-item">
                {{ $t("supply-chain.section.automaticSorting") }}
              </div>
              <div class="tech-item">
                {{ $t("supply-chain.section.autonomousDelivery") }}
              </div>
              <div class="tech-item">
                {{ $t("supply-chain.section.smartDispatch") }}
              </div>
            </div>
          </div>

          <div class="tech-category">
            <h3>{{ $t("supply-chain.section.blockchainTechnology") }}</h3>
            <div class="tech-items">
              <div class="tech-item">
                {{ $t("supply-chain.section.productTraceability") }}
              </div>
              <div class="tech-item">
                {{ $t("supply-chain.section.supplierAuthentication") }}
              </div>
              <div class="tech-item">
                {{ $t("supply-chain.section.smartContract") }}
              </div>
              <div class="tech-item">
                {{ $t("supply-chain.section.trustMechanism") }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="industry-insights">
      <div class="container">
        <div class="section-header">
          <h2>{{ $t("supply-chain.section.industryInsights") }}</h2>
          <p>
            {{ $t("supply-chain.section.supplyChainDigitalizationTrends") }}
          </p>
        </div>

        <div class="insights-grid">
          <div class="insight-card">
            <div class="insight-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 6V4M6 12H4M18 12H20M12 18V20M7.05 7.05L5.64 5.64M16.95 7.05L18.36 5.64M7.05 16.95L5.64 18.36M16.95 16.95L18.36 18.36"
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
            <h3>{{ $t("supply-chain.section.intelligentUpgrade") }}</h3>
            <p>
              {{ $t("supply-chain.section.intelligentUpgradeDesc") }}
            </p>
          </div>

          <div class="insight-card">
            <div class="insight-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 1L21.5 6.5V17.5L12 23L2.5 17.5V6.5L12 1Z"
                  stroke="currentColor"
                  stroke-width="2"
                  fill="none"
                />
                <path
                  d="M9 12L11 14L15 10"
                  stroke="currentColor"
                  stroke-width="2"
                />
              </svg>
            </div>
            <h3>{{ $t("supply-chain.section.transparentManagement") }}</h3>
            <p>
              {{ $t("supply-chain.section.transparentManagementDesc") }}
            </p>
          </div>

          <div class="insight-card">
            <div class="insight-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                <path
                  d="M13 2L3 14H12L11 22L21 10H12L13 2Z"
                  stroke="currentColor"
                  stroke-width="2"
                  fill="none"
                />
              </svg>
            </div>
            <h3>{{ $t("supply-chain.section.agileResponse") }}</h3>
            <p>
              {{ $t("supply-chain.section.agileResponseDesc") }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="cta-section">
      <div class="container">
        <div class="cta-content">
          <h2>
            {{ $t("supply-chain.section.optimizeYourSupplyChainManagement") }}
          </h2>
          <p>
            {{
              $t(
                "supply-chain.section.letUsProvideProfessionalDigitalSolutions"
              )
            }}
          </p>
          <a href="/contact" class="btn-primary">{{
            $t("supply-chain.section.contactUs")
          }}</a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// 页面元数据
definePageMeta({
  layout: "default",
  title: "供应链行业案例 - ZHILING ARK TECHNOLOGY",
  description: "查看ZHILING ARK TECHNOLOGY在供应链行业的成功案例和创新解决方案",
});

// SEO 头部信息
useHead({
  title: "供应链行业案例 - ZHILING ARK TECHNOLOGY",
  meta: [
    {
      name: "description",
      content:
        "展示ZHILING ARK TECHNOLOGY在制造业、零售业、物流业等供应链领域的成功案例和技术解决方案",
    },
    {
      name: "keywords",
      content: "供应链管理,智能仓储,物流优化,供应商协同,需求预测,IoT物联网",
    },
  ],
});
</script>

<style scoped>
.supply-chain-cases-page {
  min-height: 100vh;
}

.case-hero {
  background: linear-gradient(
    135deg,
    var(--bg-color) 0%,
    var(--bg-secondary) 100%
  );
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

.btn-primary,
.btn-secondary {
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

.supply-chain-icon {
  width: 200px;
  height: 200px;
  background: linear-gradient(135deg, #059669, #10b981);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  box-shadow: 0 20px 40px rgba(5, 150, 105, 0.3);
  animation: supply-chain-pulse 3s ease-in-out infinite;
}

@keyframes supply-chain-pulse {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
}

.industry-overview {
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

.solutions-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
}

.solution-card {
  background: var(--card-bg);
  padding: 30px;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.solution-card:hover {
  transform: translateY(-5px);
}

.solution-icon {
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

.solution-card h3 {
  font-size: 1.3rem;
  color: var(--text-primary);
  margin-bottom: 15px;
}

.solution-card p {
  color: var(--text-secondary);
  line-height: 1.6;
}

.featured-case {
  padding: 80px 0;
  background: var(--bg-secondary);
}

.case-spotlight {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
}

.case-badge {
  background: var(--primary-color);
  color: white;
  padding: 6px 16px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  display: inline-block;
  margin-bottom: 20px;
}

.case-content h2 {
  font-size: 2.2rem;
  color: var(--text-primary);
  margin-bottom: 20px;
}

.case-description {
  font-size: 1.1rem;
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 30px;
}

.case-highlights {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-bottom: 30px;
}

.highlight-item {
  text-align: center;
  padding: 20px;
  background: var(--card-bg);
  border-radius: 8px;
}

.highlight-number {
  font-size: 2rem;
  font-weight: 700;
  color: var(--primary-color);
  display: block;
}

.highlight-label {
  font-size: 0.9rem;
  color: var(--text-secondary);
  margin-top: 5px;
}

.case-technologies h4 {
  color: var(--text-primary);
  margin-bottom: 15px;
}

.tech-tags {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.tech-tag {
  background: var(--primary-color-light);
  color: var(--primary-color);
  padding: 6px 12px;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 500;
}

.case-visual {
  display: flex;
  justify-content: center;
}

.case-image {
  width: 100%;
  max-width: 400px;
  height: 300px;
  background: var(--card-bg);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.image-placeholder {
  color: var(--text-secondary);
  opacity: 0.5;
}

.case-studies {
  padding: 80px 0;
  background: var(--bg-color);
}

.cases-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.case-card {
  background: var(--card-bg);
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.case-card:hover {
  transform: translateY(-5px);
}

.case-header {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 20px;
}

.case-icon {
  width: 60px;
  height: 60px;
  background: var(--primary-color-light);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary-color);
}

.case-category {
  background: var(--primary-color-light);
  color: var(--primary-color);
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 500;
}

.case-card h3 {
  font-size: 1.3rem;
  color: var(--text-primary);
  margin-bottom: 15px;
}

.case-card p {
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 20px;
}

.case-metrics {
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
}

.metric {
  text-align: center;
}

.metric-value {
  display: block;
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--primary-color);
}

.metric-label {
  font-size: 0.8rem;
  color: var(--text-secondary);
}

.case-features {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.feature-tag {
  background: var(--bg-secondary);
  color: var(--text-secondary);
  padding: 4px 8px;
  border-radius: 8px;
  font-size: 0.7rem;
}

.technology-stack {
  padding: 80px 0;
  background: var(--bg-secondary);
}

.tech-categories {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
}

.tech-category h3 {
  font-size: 1.3rem;
  color: var(--text-primary);
  margin-bottom: 20px;
  text-align: center;
}

.tech-items {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.tech-item {
  background: var(--card-bg);
  padding: 12px 16px;
  border-radius: 8px;
  color: var(--text-secondary);
  text-align: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s ease;
}

.tech-item:hover {
  transform: translateY(-2px);
  color: var(--primary-color);
}

.industry-insights {
  padding: 80px 0;
  background: var(--bg-color);
}

.insights-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.insight-card {
  background: var(--card-bg);
  padding: 30px;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.insight-card:hover {
  transform: translateY(-5px);
}

.insight-icon {
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

.insight-card h3 {
  font-size: 1.3rem;
  color: var(--text-primary);
  margin-bottom: 15px;
}

.insight-card p {
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

  .case-spotlight {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .case-highlights {
    grid-template-columns: 1fr;
  }

  .solutions-grid {
    grid-template-columns: 1fr;
  }

  .cases-grid {
    grid-template-columns: 1fr;
  }

  .tech-categories {
    grid-template-columns: 1fr;
  }

  .insights-grid {
    grid-template-columns: 1fr;
  }
}
</style>
