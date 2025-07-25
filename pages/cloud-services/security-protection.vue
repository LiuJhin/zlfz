<template>
  <div class="cloud-service-page">
    <div class="service-hero">
      <div class="hero-container">
        <div class="hero-content">
          <h1 class="hero-title">
            {{ $t("cloudSecurityProtection.hero.title") }}
          </h1>
          <p class="hero-subtitle">
            {{ $t("cloudSecurityProtection.hero.subtitle") }}
          </p>
          <p class="hero-description">
            {{ $t("cloudSecurityProtection.hero.description") }}
          </p>
          <div class="hero-buttons">
            <a href="/contact" class="btn-primary">
              {{ $t("cloudSecurityProtection.hero.button") }}
            </a>
            <a href="#service-details" class="btn-secondary">
              {{ $t("cloudSecurityProtection.hero.learn_more") }}
            </a>
          </div>
        </div>
        <div class="hero-visual">
          <div class="service-icon">
            <svg width="120" height="120" viewBox="0 0 24 24" fill="none">
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
              <circle
                cx="12"
                cy="12"
                r="8"
                stroke="currentColor"
                stroke-width="1"
                fill="none"
                opacity="0.3"
              />
              <circle
                cx="12"
                cy="12"
                r="5"
                stroke="currentColor"
                stroke-width="1"
                fill="none"
                opacity="0.5"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>

    <section id="service-details" class="service-details">
      <div class="container">
        <div class="section-header">
          <h2>
            {{ $t("cloudSecurityProtection.section.security_service_title") }}
          </h2>
          <p>
            {{
              $t("cloudSecurityProtection.section.security_service_subtitle")
            }}
          </p>
        </div>

        <div class="features-grid">
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
                  d="M9 12L11 14L15 10"
                  stroke="currentColor"
                  stroke-width="2"
                />
              </svg>
            </div>
            <h3>
              {{ $t("cloudSecurityProtection.section.threat_detection") }}
            </h3>
            <p>
              {{ $t("cloudSecurityProtection.section.threat_detection_desc") }}
            </p>
          </div>

          <div class="feature-card">
            <div class="feature-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                <path
                  d="M6 10C6 7.79086 7.79086 6 10 6H14C16.2091 6 18 7.79086 18 10V11H19C20.1046 11 21 11.8954 21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V13C3 11.8954 3.89543 11 5 11H6V10Z"
                  stroke="currentColor"
                  stroke-width="2"
                />
                <circle cx="12" cy="16" r="2" fill="currentColor" />
              </svg>
            </div>
            <h3>{{ $t("cloudSecurityProtection.section.data_encryption") }}</h3>
            <p>
              {{ $t("cloudSecurityProtection.section.data_encryption_desc") }}
            </p>
          </div>

          <div class="feature-card">
            <div class="feature-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                <path
                  d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"
                  stroke="currentColor"
                  stroke-width="2"
                />
                <path
                  d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z"
                  stroke="currentColor"
                  stroke-width="2"
                />
                <path d="M12 11V14" stroke="currentColor" stroke-width="2" />
              </svg>
            </div>
            <h3>{{ $t("cloudSecurityProtection.section.identity_access") }}</h3>
            <p>
              {{ $t("cloudSecurityProtection.section.identity_access_desc") }}
            </p>
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
            <h3>{{ $t("cloudSecurityProtection.section.compliance_mgmt") }}</h3>
            <p>
              {{ $t("cloudSecurityProtection.section.compliance_mgmt_desc") }}
            </p>
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
            <h3>
              {{
                $t("cloudSecurityProtection.section.security_monitoring_center")
              }}
            </h3>
            <p>
              {{
                $t(
                  "cloudSecurityProtection.section.security_monitoring_center_desc"
                )
              }}
            </p>
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
            <h3>{{ $t("cloudSecurityProtection.section.security_audit") }}</h3>
            <p>{{ $t("cloudSecurityProtection.section.audit_report_desc") }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="security-framework">
      <div class="container">
        <div class="section-header">
          <h2>
            {{ $t("cloudSecurityProtection.section.security_framework") }}
          </h2>
          <p>
            {{ $t("cloudSecurityProtection.section.security_framework_desc") }}
          </p>
        </div>

        <div class="framework-layers">
          <div class="security-layer">
            <div class="layer-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                <path
                  d="M3 3H21V21H3V3Z"
                  stroke="currentColor"
                  stroke-width="2"
                  fill="none"
                />
                <path
                  d="M9 9H15V15H9V9Z"
                  stroke="currentColor"
                  stroke-width="2"
                  fill="none"
                />
              </svg>
            </div>
            <h3>{{ $t("cloudSecurityProtection.section.network_layer") }}</h3>
            <p>
              {{ $t("cloudSecurityProtection.section.network_layer_desc") }}
            </p>
          </div>

          <div class="security-layer">
            <div class="layer-icon">
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
            <h3>{{ $t("cloudSecurityProtection.section.app_layer") }}</h3>
            <p>{{ $t("cloudSecurityProtection.section.app_layer_desc") }}</p>
          </div>

          <div class="security-layer">
            <div class="layer-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                <path
                  d="M4 7V4C4 2.89543 4.89543 2 6 2H18C19.1046 2 20 2.89543 20 4V7M4 7C2.89543 7 2 7.89543 2 9V19C2 20.1046 2.89543 21 4 21H20C21.1046 21 22 20.1046 22 19V9C22 7.89543 21.1046 7 20 7M4 7H20"
                  stroke="currentColor"
                  stroke-width="2"
                />
                <circle cx="12" cy="14" r="2" fill="currentColor" />
              </svg>
            </div>
            <h3>{{ $t("cloudSecurityProtection.section.data_layer") }}</h3>
            <p>{{ $t("cloudSecurityProtection.section.data_layer_desc") }}</p>
          </div>

          <div class="security-layer">
            <div class="layer-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                <path
                  d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"
                  stroke="currentColor"
                  stroke-width="2"
                />
                <path
                  d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z"
                  stroke="currentColor"
                  stroke-width="2"
                />
              </svg>
            </div>
            <h3>{{ $t("cloudSecurityProtection.section.identity_layer") }}</h3>
            <p>
              {{ $t("cloudSecurityProtection.section.identity_layer_desc") }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="threat-intelligence">
      <div class="container">
        <div class="section-header">
          <h2>
            {{ $t("cloudSecurityProtection.section.threat_intel_response") }}
          </h2>
          <p>
            {{
              $t("cloudSecurityProtection.section.threat_intel_response_desc")
            }}
          </p>
        </div>

        <div class="intelligence-features">
          <div class="intelligence-item">
            <div class="item-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 2L2 7L12 12L22 7L12 2Z"
                  stroke="currentColor"
                  stroke-width="2"
                  fill="none"
                />
                <path
                  d="M2 17L12 22L22 17M2 12L12 17L22 12"
                  stroke="currentColor"
                  stroke-width="2"
                />
              </svg>
            </div>
            <h3>
              {{
                $t("cloudSecurityProtection.section.realtime_threat_detection")
              }}
            </h3>
            <p>
              {{
                $t(
                  "cloudSecurityProtection.section.realtime_threat_detection_desc"
                )
              }}
            </p>
          </div>

          <div class="intelligence-item">
            <div class="item-icon">
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
              {{ $t("cloudSecurityProtection.section.automated_response") }}
            </h3>
            <p>
              {{
                $t("cloudSecurityProtection.section.automated_response_desc")
              }}
            </p>
          </div>

          <div class="intelligence-item">
            <div class="item-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                <path
                  d="M21 21L16.514 16.506M19 10.5C19 15.194 15.194 19 10.5 19C5.806 19 2 15.194 2 10.5C2 5.806 5.806 2 10.5 2C15.194 2 19 5.806 19 10.5Z"
                  stroke="currentColor"
                  stroke-width="2"
                />
              </svg>
            </div>
            <h3>{{ $t("cloudSecurityProtection.section.threat_tracking") }}</h3>
            <p>
              {{ $t("cloudSecurityProtection.section.threat_tracking_desc") }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="compliance-standards">
      <div class="container">
        <div class="section-header">
          <h2>
            {{ $t("cloudSecurityProtection.section.compliance_support") }}
          </h2>
          <p>
            {{ $t("cloudSecurityProtection.section.compliance_support_desc") }}
          </p>
        </div>

        <div class="standards-grid">
          <div class="standard-item">
            <div class="standard-logo">ISO 27001</div>
            <p>{{ $t("cloudSecurityProtection.section.iso27001") }}</p>
          </div>

          <div class="standard-item">
            <div class="standard-logo">SOC 2</div>
            <p>{{ $t("cloudSecurityProtection.section.soc") }}</p>
          </div>

          <div class="standard-item">
            <div class="standard-logo">GDPR</div>
            <p>{{ $t("cloudSecurityProtection.section.gdpr") }}</p>
          </div>

          <div class="standard-item">
            <div class="standard-logo">PCI DSS</div>
            <p>{{ $t("cloudSecurityProtection.section.pci_dss") }}</p>
          </div>

          <div class="standard-item">
            <div class="standard-logo">HIPAA</div>
            <p>{{ $t("cloudSecurityProtection.section.hipaa") }}</p>
          </div>

          <div class="standard-item">
            <div class="standard-logo">SOX</div>
            <p>{{ $t("cloudSecurityProtection.section.sox") }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="security-assessment">
      <div class="container">
        <div class="section-header">
          <h2>
            {{ $t("cloudSecurityProtection.section.security_assessment") }}
          </h2>
          <p>
            {{ $t("cloudSecurityProtection.section.security_assessment_desc") }}
          </p>
        </div>

        <div class="assessment-process">
          <div class="process-step">
            <div class="step-number">01</div>
            <div class="step-content">
              <h3>
                {{ $t("cloudSecurityProtection.section.security_status_eval") }}
              </h3>
              <p>
                {{
                  $t(
                    "cloudSecurityProtection.section.security_status_eval_desc"
                  )
                }}
              </p>
            </div>
          </div>

          <div class="process-step">
            <div class="step-number">02</div>
            <div class="step-content">
              <h3>
                {{ $t("cloudSecurityProtection.section.vulnerability_scan") }}
              </h3>
              <p>
                {{
                  $t("cloudSecurityProtection.section.vulnerability_scan_desc")
                }}
              </p>
            </div>
          </div>

          <div class="process-step">
            <div class="step-number">03</div>
            <div class="step-content">
              <h3>{{ $t("cloudSecurityProtection.section.risk_report") }}</h3>
              <p>
                {{ $t("cloudSecurityProtection.section.risk_report_desc") }}
              </p>
            </div>
          </div>

          <div class="process-step">
            <div class="step-number">04</div>
            <div class="step-content">
              <h3>
                {{ $t("cloudSecurityProtection.section.improvement_plan") }}
              </h3>
              <p>
                {{
                  $t("cloudSecurityProtection.section.improvement_plan_desc")
                }}
              </p>
            </div>
          </div>

          <div class="process-step">
            <div class="step-number">05</div>
            <div class="step-content">
              <h3>
                {{
                  $t(
                    "cloudSecurityProtection.section.implementation_verification"
                  )
                }}
              </h3>
              <p>
                {{
                  $t(
                    "cloudSecurityProtection.section.implementation_verification_desc"
                  )
                }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="cta-section">
      <div class="container">
        <div class="cta-content">
          <h2>
            {{ $t("cloudSecurityProtection.section.cloud_security_slogan") }}
          </h2>
          <p>
            {{ $t("cloudSecurityProtection.section.cloud_security_contact") }}
          </p>
          <a href="/contact" class="btn-primary">{{
            $t("cloudSecurityProtection.section.contact_us_now")
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
  title: "云安全防护服务 - ZHILING ARK TECHNOLOGY",
  description: "全方位的云安全解决方案，威胁检测、数据保护、合规管理",
});

// SEO 头部信息
useHead({
  title: "云安全防护服务 - ZHILING ARK TECHNOLOGY",
  meta: [
    {
      name: "description",
      content:
        "提供企业级云安全防护服务，包括威胁检测、数据保护、合规管理等，构建多层次安全防护体系",
    },
    {
      name: "keywords",
      content: "云安全,威胁检测,数据保护,合规管理,安全监控,身份管理",
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
  animation: shield-glow 3s ease-in-out infinite;
}

@keyframes shield-glow {
  0%,
  100% {
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  }
  50% {
    box-shadow: 0 20px 60px rgba(var(--primary-color-rgb), 0.3);
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

.security-framework {
  padding: 80px 0;
  background: var(--bg-secondary);
}

.framework-layers {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
}

.security-layer {
  background: var(--card-bg);
  padding: 30px;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.security-layer:hover {
  transform: translateY(-5px);
}

.layer-icon {
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

.security-layer h3 {
  font-size: 1.3rem;
  color: var(--text-primary);
  margin-bottom: 10px;
}

.security-layer p {
  color: var(--text-secondary);
  font-size: 0.9rem;
}

.threat-intelligence {
  padding: 80px 0;
  background: var(--bg-color);
}

.intelligence-features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
}

.intelligence-item {
  background: var(--card-bg);
  padding: 40px 30px;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.item-icon {
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

.intelligence-item h3 {
  font-size: 1.5rem;
  color: var(--text-primary);
  margin-bottom: 15px;
}

.intelligence-item p {
  color: var(--text-secondary);
  line-height: 1.6;
}

.compliance-standards {
  padding: 80px 0;
  background: var(--bg-secondary);
}

.standards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 30px;
}

.standard-item {
  background: var(--card-bg);
  padding: 30px 20px;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.standard-logo {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--primary-color);
  margin-bottom: 15px;
  padding: 20px;
  background: var(--primary-color-light);
  border-radius: 8px;
}

.standard-item p {
  color: var(--text-secondary);
  font-size: 0.9rem;
  line-height: 1.4;
}

.security-assessment {
  padding: 80px 0;
  background: var(--bg-color);
}

.assessment-process {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 30px;
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

  .framework-layers {
    grid-template-columns: 1fr;
  }

  .intelligence-features {
    grid-template-columns: 1fr;
  }

  .standards-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .assessment-process {
    grid-template-columns: 1fr;
  }
}
</style>
