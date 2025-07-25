<template>
  <div class="cloud-service-page">
    <div class="service-hero">
      <div class="hero-container">
        <div class="hero-content">
          <h1 class="hero-title">{{ $t("operations.hero.title") }}</h1>
          <p class="hero-subtitle">{{ $t("operations.hero.subtitle") }}</p>
          <p class="hero-description">
            {{ $t("operations.hero.description") }}
          </p>
          <div class="hero-buttons">
            <a href="/contact" class="btn-primary">{{
              $t("operations.hero.button")
            }}</a>
            <a href="#service-details" class="btn-secondary">{{
              $t("operations.hero.learn_more")
            }}</a>
          </div>
        </div>
        <div class="hero-visual">
          <div class="service-icon">
            <svg width="120" height="120" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z"
                fill="currentColor"
              />
              <circle
                cx="12"
                cy="12"
                r="3"
                stroke="currentColor"
                stroke-width="2"
                fill="none"
              />
              <path
                d="M12 1V3M12 21V23M4.22 4.22L5.64 5.64M18.36 18.36L19.78 19.78M1 12H3M21 12H23M4.22 19.78L5.64 18.36M18.36 5.64L19.78 4.22"
                stroke="currentColor"
                stroke-width="2"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>

    <section id="service-details" class="service-details">
      <div class="container">
        <div class="section-header">
          <h2>{{ $t("operations.section.service_details_title") }}</h2>
          <p>{{ $t("operations.section.service_details_subtitle") }}</p>
        </div>

        <div class="features-grid">
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
            <h3>{{ $t("operations.section.real_time_monitoring") }}</h3>
            <p>{{ $t("operations.section.real_time_monitoring_desc") }}</p>
          </div>

          <div class="feature-card">
            <div class="feature-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                <path
                  d="M13 2L3 14H12L11 22L21 10H12L13 2Z"
                  stroke="currentColor"
                  stroke-width="2"
                  fill="none"
                />
              </svg>
            </div>
            <h3>{{ $t("operations.section.automated_operations") }}</h3>
            <p>{{ $t("operations.section.automated_operations_desc") }}</p>
          </div>

          <div class="feature-card">
            <div class="feature-icon">
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
            <h3>{{ $t("operations.section.professional_support") }}</h3>
            <p>{{ $t("operations.section.professional_support_desc") }}</p>
          </div>

          <div class="feature-card">
            <div class="feature-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 1L21.5 6.5V17.5L12 23L2.5 17.5V6.5L12 1Z"
                  stroke="currentColor"
                  stroke-width="2"
                  fill="none"
                />
                <path
                  d="M12 8C13.1046 8 14 7.10457 14 6C14 4.89543 13.1046 4 12 4C10.8954 4 10 4.89543 10 6C10 7.10457 10.8954 8 12 8Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <h3>{{ $t("operations.section.security_management") }}</h3>
            <p>{{ $t("operations.section.security_management_desc") }}</p>
          </div>

          <div class="feature-card">
            <div class="feature-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                <path
                  d="M3 7V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7Z"
                  stroke="currentColor"
                  stroke-width="2"
                />
                <path
                  d="M8 12H16M8 9H12M8 15H14"
                  stroke="currentColor"
                  stroke-width="2"
                />
              </svg>
            </div>
            <h3>{{ $t("operations.section.backup_recovery") }}</h3>
            <p>{{ $t("operations.section.backup_recovery_desc") }}</p>
          </div>

          <div class="feature-card">
            <div class="feature-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                <path
                  d="M16 4H18C19.1046 4 20 4.89543 20 6V18C20 19.1046 19.1046 20 18 20H6C4.89543 20 4 19.1046 4 18V6C4 4.89543 4.89543 4 6 4H8M16 4C16 2.89543 15.1046 2 14 2H10C8.89543 2 8 2.89543 8 4M16 4C16 5.10457 15.1046 6 14 6H10C8.89543 6 8 5.10457 8 4"
                  stroke="currentColor"
                  stroke-width="2"
                />
                <path
                  d="M9 12L11 14L15 10"
                  stroke="currentColor"
                  stroke-width="2"
                />
              </svg>
            </div>
            <h3>{{ $t("operations.section.compliance_audit") }}</h3>
            <p>{{ $t("operations.section.compliance_audit_desc") }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="monitoring-dashboard">
      <div class="container">
        <div class="section-header">
          <h2>
            {{ $t("operations.section.intelligent_monitoring_platform") }}
          </h2>
          <p>
            {{ $t("operations.section.intelligent_monitoring_platform_desc") }}
          </p>
        </div>

        <div class="dashboard-features">
          <div class="dashboard-feature">
            <div class="feature-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                <path
                  d="M3 3V21H21V3H3Z"
                  stroke="currentColor"
                  stroke-width="2"
                  fill="none"
                />
                <path
                  d="M9 9L15 15M15 9L9 15"
                  stroke="currentColor"
                  stroke-width="2"
                />
              </svg>
            </div>
            <h3>{{ $t("operations.section.real_time_dashboard") }}</h3>
            <p>{{ $t("operations.section.real_time_dashboard_desc") }}</p>
          </div>

          <div class="dashboard-feature">
            <div class="feature-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                <path
                  d="M18 20V10M12 20V4M6 20V14"
                  stroke="currentColor"
                  stroke-width="2"
                />
                <circle
                  cx="18"
                  cy="7"
                  r="3"
                  stroke="currentColor"
                  stroke-width="2"
                />
                <circle
                  cx="12"
                  cy="1"
                  r="3"
                  stroke="currentColor"
                  stroke-width="2"
                />
                <circle
                  cx="6"
                  cy="11"
                  r="3"
                  stroke="currentColor"
                  stroke-width="2"
                />
              </svg>
            </div>
            <h3>{{ $t("operations.section.intelligent_alert") }}</h3>
            <p>{{ $t("operations.section.intelligent_alert_desc") }}</p>
          </div>

          <div class="dashboard-feature">
            <div class="feature-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                <path
                  d="M3 3H21V21H3V3Z"
                  stroke="currentColor"
                  stroke-width="2"
                  fill="none"
                />
                <path
                  d="M7 8H17M7 12H17M7 16H13"
                  stroke="currentColor"
                  stroke-width="2"
                />
              </svg>
            </div>
            <h3>{{ $t("operations.section.detailed_report") }}</h3>
            <p>{{ $t("operations.section.detailed_report_desc") }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="service-levels">
      <div class="container">
        <div class="section-header">
          <h2>{{ $t("operations.section.service_level") }}</h2>
          <p>{{ $t("operations.section.service_level_desc") }}</p>
        </div>

        <div class="service-tiers">
          <div class="service-tier">
            <div class="tier-header">
              <h3>{{ $t("operations.section.basic_version") }}</h3>
              <div class="tier-price">
                ¥5,000/{{ $t("operations.section.monthly_fee") }}
              </div>
            </div>
            <div class="tier-features">
              <div class="feature-item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                    stroke="currentColor"
                    stroke-width="2"
                  />
                </svg>
                <span>{{
                  $t("operations.section.basic_monitoring_service")
                }}</span>
              </div>
              <div class="feature-item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                    stroke="currentColor"
                    stroke-width="2"
                  />
                </svg>
                <span>{{
                  $t("operations.section.work_time_technical_support")
                }}</span>
              </div>
              <div class="feature-item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                    stroke="currentColor"
                    stroke-width="2"
                  />
                </svg>
                <span>{{
                  $t("operations.section.monthly_maintenance_report")
                }}</span>
              </div>
            </div>
          </div>

          <div class="service-tier featured">
            <div class="tier-header">
              <h3>{{ $t("operations.section.professional_version") }}</h3>
              <div class="tier-price">
                ¥15,000/{{ $t("operations.section.monthly_fee") }}
              </div>
              <div class="tier-badge">
                {{ $t("operations.section.recommended") }}
              </div>
            </div>
            <div class="tier-features">
              <div class="feature-item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                    stroke="currentColor"
                    stroke-width="2"
                  />
                </svg>
                <span>{{ $t("operations.section.hourMonitoring") }}</span>
              </div>
              <div class="feature-item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                    stroke="currentColor"
                    stroke-width="2"
                  />
                </svg>
                <span>{{ $t("operations.section.automatedOperations") }}</span>
              </div>
              <div class="feature-item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                    stroke="currentColor"
                    stroke-width="2"
                  />
                </svg>
                <span>{{
                  $t("operations.section.performanceOptimization")
                }}</span>
              </div>
              <div class="feature-item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                    stroke="currentColor"
                    stroke-width="2"
                  />
                </svg>
                <span>{{
                  $t("operations.section.exclusiveTechnicalConsultant")
                }}</span>
              </div>
            </div>
          </div>

          <div class="service-tier">
            <div class="tier-header">
              <h3>{{ $t("operations.section.enterpriseVersion") }}</h3>
              <div class="tier-price">
                {{ $t("operations.section.customQuote") }}
              </div>
            </div>
            <div class="tier-features">
              <div class="feature-item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                    stroke="currentColor"
                    stroke-width="2"
                  />
                </svg>
                <span>{{ $t("operations.section.customizedSolution") }}</span>
              </div>
              <div class="feature-item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                    stroke="currentColor"
                    stroke-width="2"
                  />
                </svg>
                <span>{{
                  $t("operations.section.exclusiveOperationsTeam")
                }}</span>
              </div>
              <div class="feature-item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                    stroke="currentColor"
                    stroke-width="2"
                  />
                </svg>
                <span>{{ $t("operations.section.guarantee") }}</span>
              </div>
              <div class="feature-item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                    stroke="currentColor"
                    stroke-width="2"
                  />
                </svg>
                <span>{{
                  $t("operations.section.priorityTechnicalSupport")
                }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="cta-section">
      <div class="container">
        <div class="cta-content">
          <h2>
            {{
              $t("operations.section.needProfessionalCloudOperationsService")
            }}
          </h2>
          <p>{{ $t("operations.section.letOurProfessionalTeam") }}</p>
          <a href="/contact" class="btn-primary">{{
            $t("contact.section.contactUs")
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
  title: "云运维管理服务 - ZHILING ARK TECHNOLOGY",
  description: "7x24小时专业云运维保障，智能监控、自动化运维和专业团队支持",
});

// SEO 头部信息
useHead({
  title: "云运维管理服务 - ZHILING ARK TECHNOLOGY",
  meta: [
    {
      name: "description",
      content:
        "提供全天候的云基础设施运维管理服务，通过智能监控、自动化运维和专业团队支持，确保系统稳定运行",
    },
    {
      name: "keywords",
      content: "云运维,监控服务,自动化运维,性能优化,安全管理,备份恢复",
    },
  ],
});
</script>

<style scoped>
.cloud-service-page {
  min-height: 100vh;
}

.service-hero {
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

.service-icon {
  width: 200px;
  height: 200px;
  background: linear-gradient(
    135deg,
    var(--primary-color),
    var(--primary-color-light)
  );
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  animation: pulse 4s ease-in-out infinite;
}

@keyframes pulse {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
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
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
}

.feature-card {
  background: var(--card-bg);
  padding: 30px;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
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

.monitoring-dashboard {
  padding: 80px 0;
  background: var(--bg-secondary);
}

.dashboard-features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
}

.dashboard-feature {
  background: var(--card-bg);
  padding: 40px 30px;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.dashboard-feature .feature-icon {
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

.dashboard-feature h3 {
  font-size: 1.5rem;
  color: var(--text-primary);
  margin-bottom: 15px;
}

.dashboard-feature p {
  color: var(--text-secondary);
  line-height: 1.6;
}

.service-levels {
  padding: 80px 0;
  background: var(--bg-color);
}

.service-tiers {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.service-tier {
  background: var(--card-bg);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  position: relative;
}

.service-tier:hover {
  transform: translateY(-5px);
}

.service-tier.featured {
  border: 2px solid var(--primary-color);
  transform: scale(1.05);
}

.tier-header {
  background: var(--primary-color-light);
  padding: 30px;
  text-align: center;
  position: relative;
}

.service-tier.featured .tier-header {
  background: var(--primary-color);
  color: white;
}

.tier-badge {
  position: absolute;
  top: -10px;
  right: 20px;
  background: var(--accent-color);
  color: white;
  padding: 5px 15px;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 600;
}

.tier-header h3 {
  font-size: 1.8rem;
  margin-bottom: 10px;
}

.tier-price {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--primary-color);
}

.service-tier.featured .tier-price {
  color: white;
}

.tier-features {
  padding: 30px;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 15px;
  color: var(--text-secondary);
}

.feature-item svg {
  color: var(--primary-color);
  flex-shrink: 0;
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

  .dashboard-features {
    grid-template-columns: 1fr;
  }

  .service-tiers {
    grid-template-columns: 1fr;
  }

  .service-tier.featured {
    transform: none;
  }
}
</style>
