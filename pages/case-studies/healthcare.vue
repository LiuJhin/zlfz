<template>
  <div class="healthcare-cases-page">
    <div class="case-hero">
      <div class="hero-container">
        <div class="hero-content">
          <h1 class="hero-title">{{ $t("healthcare.hero.title") }}</h1>
          <p class="hero-subtitle">{{ $t("healthcare.hero.subTitle") }}</p>
          <p class="hero-description">
            {{ $t("healthcare.hero.description") }}
          </p>
          <div class="hero-buttons">
            <a href="/contact" class="btn-primary">{{
              $t("healthcare.hero.button")
            }}</a>
            <a href="#case-details" class="btn-secondary">{{
              $t("healthcare.hero.lookMore")
            }}</a>
          </div>
        </div>
        <div class="hero-visual">
          <div class="healthcare-icon">
            <svg width="120" height="120" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 2L13.09 8.26L20 9L14 14L16.18 22L12 18.27L7.82 22L10 14L4 9L10.91 8.26L12 2Z"
                stroke="currentColor"
                stroke-width="2"
                fill="none"
              />
              <circle cx="12" cy="12" r="3" fill="currentColor" opacity="0.3" />
              <path d="M12 8V16M8 12H16" stroke="white" stroke-width="2" />
            </svg>
          </div>
        </div>
      </div>
    </div>

    <section id="case-details" class="industry-overview">
      <div class="container">
        <div class="section-header">
          <h2>{{ $t("healthcare.section.medicalHealthSolution") }}</h2>
          <p>{{ $t("healthcare.section.comprehensiveSmartMedicalService") }}</p>
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
            <h3>
              {{ $t("healthcare.section.electronicMedicalRecordSystem") }}
            </h3>
            <p>
              {{ $t("healthcare.section.electronicMedicalRecordSystemDesc") }}
            </p>
          </div>

          <div class="solution-card">
            <div class="solution-icon">
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
              {{ $t("healthcare.section.AIHelp") }}
            </h3>
            <p>
              {{ $t("healthcare.section.AIHelpDesc") }}
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
              {{ $t("healthcare.section.remoteMedicalPlatform") }}
            </h3>
            <p>
              {{ $t("healthcare.section.remoteMedicalPlatformDesc") }}
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
            <h3>
              {{ $t("healthcare.section.healthManagementSystem") }}
            </h3>
            <p>
              {{ $t("healthcare.section.healthManagementSystemDesc") }}
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
              {{ $t("healthcare.section.keyCases") }}
            </div>
            <h2>
              {{ $t("healthcare.section.threeStarHospital") }}
            </h2>
            <p class="case-description">
              {{ $t("healthcare.section.threeStarHospitalDesc") }}
            </p>

            <div class="case-highlights">
              <div class="highlight-item">
                <div class="highlight-number">70%</div>
                <div class="highlight-label">
                  {{ $t("healthcare.section.treatmentEfficiency") }}
                </div>
              </div>
              <div class="highlight-item">
                <div class="highlight-number">90%</div>
                <div class="highlight-label">
                  {{ $t("healthcare.section.patientSatisfaction") }}
                </div>
              </div>
              <div class="highlight-item">
                <div class="highlight-number">50%</div>
                <div class="highlight-label">
                  {{ $t("healthcare.section.medicalErrorReduction") }}
                </div>
              </div>
              <div class="highlight-item">
                <div class="highlight-number">24/7</div>
                <div class="highlight-label">
                  {{ $t("healthcare.section.systemAvailability") }}
                </div>
              </div>
            </div>

            <div class="case-technologies">
              <h4>
                {{ $t("healthcare.section.coreTechnologies") }}
              </h4>
              <div class="tech-tags">
                <span class="tech-tag">{{
                  $t("healthcare.section.AIDiagnosis")
                }}</span>
                <span class="tech-tag">{{
                  $t("healthcare.section.bigDataAnalysis")
                }}</span>
                <span class="tech-tag">{{
                  $t("healthcare.section.cloudComputing")
                }}</span>
                <span class="tech-tag">{{
                  $t("healthcare.section.InternetOfThings")
                }}</span>
                <span class="tech-tag">{{
                  $t("healthcare.section.blockchain")
                }}</span>
              </div>
            </div>
          </div>

          <div class="case-visual">
            <div class="case-image">
              <div class="image-placeholder">
                <svg width="200" height="150" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 2L13.09 8.26L20 9L14 14L16.18 22L12 18.27L7.82 22L10 14L4 9L10.91 8.26L12 2Z"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                  />
                  <circle
                    cx="12"
                    cy="12"
                    r="3"
                    fill="currentColor"
                    opacity="0.3"
                  />
                  <path d="M12 8V16M8 12H16" stroke="white" stroke-width="2" />
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
          <h2>
            {{ $t("healthcare.section.moreMedicalHealthCases") }}
          </h2>
          <p>
            {{ $t("healthcare.section.ourSuccessfulPracticesInMedicalHealth") }}
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
                {{ $t("healthcare.section.medicalImage") }}
              </div>
            </div>
            <h3>
              {{ $t("healthcare.section.medicalDiagnosisSystem") }}
            </h3>
            <p>
              {{ $t("healthcare.section.medicalDiagnosisSystemDesc") }}
            </p>
            <div class="case-metrics">
              <div class="metric">
                <span class="metric-value">95%</span>
                <span class="metric-label">{{
                  $t("healthcare.section.diagnosisAccuracy")
                }}</span>
              </div>
              <div class="metric">
                <span class="metric-value">80%</span>
                <span class="metric-label">{{
                  $t("healthcare.section.diagnosisTimeReduction")
                }}</span>
              </div>
            </div>
            <div class="case-features">
              <span class="feature-tag">{{
                $t("healthcare.section.deepLearning")
              }}</span>
              <span class="feature-tag">{{
                $t("healthcare.section.imageRecognition")
              }}</span>
              <span class="feature-tag">{{
                $t("healthcare.section.auxiliaryDiagnosis")
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
                {{ $t("healthcare.section.remoteMedical") }}
              </div>
            </div>
            <h3>
              {{ $t("healthcare.section.internetHospitalPlatform") }}
            </h3>
            <p>
              {{ $t("healthcare.section.internetHospitalPlatformDesc") }}
            </p>
            <div class="case-metrics">
              <div class="metric">
                <span class="metric-value">{{
                  $t("healthcare.section.wam")
                }}</span>
                <span class="metric-label">{{
                  $t("healthcare.section.registeredUsers")
                }}</span>
              </div>
              <div class="metric">
                <span class="metric-value">{{
                  $t("healthcare.section.24HourService")
                }}</span>
                <span class="metric-label">{{
                  $t("healthcare.section.onlineService")
                }}</span>
              </div>
            </div>
            <div class="case-features">
              <span class="feature-tag">{{
                $t("healthcare.section.onlineConsultation")
              }}</span>
              <span class="feature-tag">{{
                $t("healthcare.section.electronPrescription")
              }}</span>
              <span class="feature-tag">{{
                $t("healthcare.section.medicalSupply")
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
                {{ $t("healthcare.section.healthManagement") }}
              </div>
            </div>
            <h3>
              {{ $t("healthcare.section.chronicDiseaseManagementPlatform") }}
            </h3>
            <p>
              {{
                $t("healthcare.section.chronicDiseaseManagementPlatformDesc")
              }}
            </p>
            <div class="case-metrics">
              <div class="metric">
                <span class="metric-value">85%</span>
                <span class="metric-label">{{
                  $t("healthcare.section.conditionControlRate")
                }}</span>
              </div>
              <div class="metric">
                <span class="metric-value">60%</span>
                <span class="metric-label">{{
                  $t("healthcare.section.hospitalizationRateReduction")
                }}</span>
              </div>
            </div>
            <div class="case-features">
              <span class="feature-tag">{{
                $t("healthcare.section.smartMonitoring")
              }}</span>
              <span class="feature-tag">{{
                $t("healthcare.section.personalizedSolution")
              }}</span>
              <span class="feature-tag">{{
                $t("healthcare.section.dataAnalysis")
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
                {{ $t("healthcare.section.drugResearch") }}
              </div>
            </div>
            <h3>{{ $t("healthcare.section.drugDiscoveryPlatform") }}</h3>
            <p>
              {{ $t("healthcare.section.drugDiscoveryPlatformDesc") }}
            </p>
            <div class="case-metrics">
              <div class="metric">
                <span class="metric-value">70%</span>
                <span class="metric-label">{{
                  $t("healthcare.section.researchTimeReduction")
                }}</span>
              </div>
              <div class="metric">
                <span class="metric-value">50%</span>
                <span class="metric-label">{{
                  $t("healthcare.section.costReduction")
                }}</span>
              </div>
            </div>
            <div class="case-features">
              <span class="feature-tag">{{
                $t("healthcare.section.molecularModeling")
              }}</span>
              <span class="feature-tag">{{
                $t("healthcare.section.virtualScreening")
              }}</span>
              <span class="feature-tag">{{
                $t("healthcare.section.prediction")
              }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="technology-stack">
      <div class="container">
        <div class="section-header">
          <h2>{{ $t("healthcare.section.medicalHealthTechnologyStack") }}</h2>
          <p>{{ $t("healthcare.section.medicalHealthCoreTechnologies") }}</p>
        </div>

        <div class="tech-categories">
          <div class="tech-category">
            <h3>{{ $t("healthcare.section.artificialIntelligence") }}</h3>
            <div class="tech-items">
              <div class="tech-item">
                {{ $t("healthcare.section.deepLearning") }}
              </div>
              <div class="tech-item">
                {{ $t("healthcare.section.computerVision") }}
              </div>
              <div class="tech-item">
                {{ $t("healthcare.section.naturalLanguageProcessing") }}
              </div>
              <div class="tech-item">
                {{ $t("healthcare.section.machineLearning") }}
              </div>
            </div>
          </div>

          <div class="tech-category">
            <h3>{{ $t("healthcare.section.dataProcessing") }}</h3>
            <div class="tech-items">
              <div class="tech-item">
                {{ $t("healthcare.section.medicalBigData") }}
              </div>
              <div class="tech-item">
                {{ $t("healthcare.section.realTimeAnalysis") }}
              </div>
              <div class="tech-item">
                {{ $t("healthcare.section.dataMining") }}
              </div>
              <div class="tech-item">
                {{ $t("healthcare.section.predictionModeling") }}
              </div>
            </div>
          </div>

          <div class="tech-category">
            <h3>{{ $t("healthcare.section.iot") }}</h3>
            <div class="tech-items">
              <div class="tech-item">
                {{ $t("healthcare.section.wearableDevices") }}
              </div>
              <div class="tech-item">
                {{ $t("healthcare.section.sensorNetwork") }}
              </div>
              <div class="tech-item">
                {{ $t("healthcare.section.remoteMonitoring") }}
              </div>
              <div class="tech-item">
                {{ $t("healthcare.section.smartDevices") }}
              </div>
            </div>
          </div>

          <div class="tech-category">
            <h3>{{ $t("healthcare.section.Compliance") }}</h3>
            <div class="tech-items">
              <div class="tech-item">
                {{ $t("healthcare.section.dataEncryption") }}
              </div>
              <div class="tech-item">
                {{ $t("healthcare.section.privacyProtection") }}
              </div>
              <div class="tech-item">
                {{ $t("healthcare.section.HIPAACompliance") }}
              </div>
              <div class="tech-item">
                {{ $t("healthcare.section.accessControl") }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="industry-insights">
      <div class="container">
        <div class="section-header">
          <h2>{{ $t("healthcare.section.industryInsights") }}</h2>
          <p>
            {{ $t("healthcare.section.medicalHealthDigitalizationTrends") }}
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
            <h3>{{ $t("healthcare.section.PrecisionMedicine") }}</h3>
            <p>
              {{ $t("healthcare.section.PrecisionMedicineDesc") }}
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
            <h3>{{ $t("healthcare.section.digitalTherapy") }}</h3>
            <p>
              {{ $t("healthcare.section.digitalTherapyDesc") }}
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
            <h3>{{ $t("healthcare.section.smartHospital") }}</h3>
            <p>
              {{ $t("healthcare.section.smartHospitalDesc") }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="cta-section">
      <div class="container">
        <div class="cta-content">
          <h2>
            {{
              $t("healthcare.section.advancingYourMedicalDigitalTransformation")
            }}
          </h2>
          <p>{{ $t("healthcare.section.letUsProvideProfessiona") }}</p>
          <a href="/contact" class="btn-primary">{{
            $t("healthcare.section.contactUs")
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
  title: "医疗健康案例 - ZHILING ARK TECHNOLOGY",
  description:
    "查看ZHILING ARK TECHNOLOGY在医疗健康行业的成功案例和创新解决方案",
});

// SEO 头部信息
useHead({
  title: "医疗健康案例 - ZHILING ARK TECHNOLOGY",
  meta: [
    {
      name: "description",
      content:
        "展示ZHILING ARK TECHNOLOGY在医院、诊所、健康科技等医疗健康领域的成功案例和技术解决方案",
    },
    {
      name: "keywords",
      content: "智慧医疗,AI诊断,远程医疗,电子病历,健康管理,医疗大数据",
    },
  ],
});
</script>

<style scoped>
.healthcare-cases-page {
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

.healthcare-icon {
  width: 200px;
  height: 200px;
  background: linear-gradient(135deg, #dc2626, #ef4444);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  box-shadow: 0 20px 40px rgba(220, 38, 38, 0.3);
  animation: healthcare-pulse 3s ease-in-out infinite;
}

@keyframes healthcare-pulse {
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
