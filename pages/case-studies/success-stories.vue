<template>
  <div class="case-studies-page">
    <div class="case-hero">
      <div class="hero-container">
        <div class="hero-content">
          <h1 class="hero-title">{{ $t("successStories.hero.title") }}</h1>
          <p class="hero-subtitle">{{ $t("successStories.hero.subTitle") }}</p>
          <p class="hero-description">
            {{ $t("successStories.hero.description") }}
          </p>
          <div class="hero-buttons">
            <a href="/contact" class="btn-primary">{{
              $t("successStories.hero.consultation")
            }}</a>
            <a href="#case-overview" class="btn-secondary">{{
              $t("successStories.hero.view")
            }}</a>
          </div>
        </div>
        <div class="hero-visual">
          <div class="success-icon">
            <svg width="120" height="120" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z"
                stroke="currentColor"
                stroke-width="2"
                fill="none"
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
              <path
                d="M8 12L11 15L16 9"
                stroke="currentColor"
                stroke-width="2"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>

    <section id="case-overview" class="case-overview">
      <div class="container">
        <div class="section-header">
          <h2>{{ $t("successStories.section.CaseOverview") }}</h2>
          <p>{{ $t("successStories.section.CrossIndustrySuccess") }}</p>
        </div>

        <div class="stats-grid">
          <div class="stat-item">
            <div class="stat-number">250+</div>
            <div class="stat-label">
              {{ $t("successStories.section.SuccessfulProjects") }}
            </div>
            <div class="stat-description">
              {{ $t("successStories.section.GlobalCoverage") }}
            </div>
          </div>

          <div class="stat-item">
            <div class="stat-number">80+</div>
            <div class="stat-label">
              {{ $t("successStories.section.Partners") }}
            </div>
            <div class="stat-description">
              {{ $t("successStories.section.IncludingTheworld") }}
            </div>
          </div>

          <div class="stat-item">
            <div class="stat-number">98%</div>
            <div class="stat-label">
              {{ $t("successStories.section.CustomerSatisfaction") }}
            </div>
            <div class="stat-description">
              {{ $t("successStories.section.Continuous5Year") }}
            </div>
          </div>

          <div class="stat-item">
            <div class="stat-number">24/7</div>
            <div class="stat-label">
              {{ $t("successStories.section.TechnicalSupport") }}
            </div>
            <div class="stat-description">
              {{ $t("successStories.section.AverageResponseTime") }}
            </div>
          </div>

          <div class="stat-item">
            <div class="stat-number">15+</div>
            <div class="stat-label">
              {{ $t("successStories.section.IndustrySolution") }}
            </div>
            <div class="stat-description">
              {{ $t("successStories.section.CustomizedSolution") }}
            </div>
          </div>

          <div class="stat-item">
            <div class="stat-number">60%</div>
            <div class="stat-label">
              {{ $t("successStories.section.AverageROIUpgrade") }}
            </div>
            <div class="stat-description">
              {{ $t("successStories.section.CustomerROIUpgrade") }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="featured-cases">
      <div class="container">
        <div class="section-header">
          <h2>{{ $t("successStories.section.SelectedCases") }}</h2>
          <p>{{ $t("successStories.section.CaseStudy") }}</p>
        </div>

        <div class="cases-grid">
          <div class="case-card featured">
            <div class="case-image">
              <div class="case-icon">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none">
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
            </div>
            <div class="case-content">
              <div class="case-category">
                {{ $t("successStories.section.FinancialTech") }}
              </div>
              <h3>
                {{
                  $t("successStories.section.GlobalBankDigitalTransformation")
                }}
              </h3>
              <p>
                {{ $t("successStories.section.Desc") }}
              </p>
              <div class="case-metrics">
                <div class="metric">
                  <span class="metric-value">300%</span>
                  <span class="metric-label">{{
                    $t("successStories.section.EfficiencyUpgrade")
                  }}</span>
                </div>
                <div class="metric">
                  <span class="metric-value">500%</span>
                  <span class="metric-label">{{
                    $t("successStories.section.SpeedUpgrade")
                  }}</span>
                </div>
                <div class="metric">
                  <span class="metric-value">45%</span>
                  <span class="metric-label">{{
                    $t("successStories.section.CostReduction")
                  }}</span>
                </div>
                <div class="metric">
                  <span class="metric-value">99.9%</span>
                  <span class="metric-label">{{
                    $t("successStories.section.SystemAvailability")
                  }}</span>
                </div>
              </div>
              <a href="/case-studies/financial" class="case-link">{{
                $t("successStories.section.ViewDetails")
              }}</a>
            </div>
          </div>

          <div class="case-card">
            <div class="case-image">
              <div class="case-icon">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none">
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
            </div>
            <div class="case-content">
              <div class="case-category">
                {{ $t("successStories.section.SupplyChainManagement") }}
              </div>
              <h3>
                {{
                  $t(
                    "successStories.section.IntelligentSupplyChainOptimizationPlatform"
                  )
                }}
              </h3>
              <p>
                {{
                  $t(
                    "successStories.section.IntelligentSupplyChainOptimizationPlatformDesc"
                  )
                }}
              </p>
              <div class="case-metrics">
                <div class="metric">
                  <span class="metric-value">40%</span>
                  <span class="metric-label">{{
                    $t("successStories.section.CostReduction")
                  }}</span>
                </div>
                <div class="metric">
                  <span class="metric-value">100%</span>
                  <span class="metric-label">{{
                    $t("successStories.section.transparency")
                  }}</span>
                </div>
                <div class="metric">
                  <span class="metric-value">65%</span>
                  <span class="metric-label">{{
                    $t("successStories.section.logisticsEfficiency")
                  }}</span>
                </div>
              </div>
              <a href="/case-studies/supply-chain" class="case-link">{{
                $t("successStories.section.viewDetails")
              }}</a>
            </div>
          </div>

          <div class="case-card">
            <div class="case-image">
              <div class="case-icon">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M19 14C19 18.4183 15.4183 22 11 22C6.58172 22 3 18.4183 3 14C3 9.58172 6.58172 6 11 6C15.4183 6 19 9.58172 19 14Z"
                    stroke="currentColor"
                    stroke-width="2"
                  />
                  <path
                    d="M9 11L11 13L15 9M22 4L12 14.5L9 11.5"
                    stroke="currentColor"
                    stroke-width="2"
                  />
                </svg>
              </div>
            </div>
            <div class="case-content">
              <div class="case-category">
                {{ $t("successStories.section.medicalHealth") }}
              </div>
              <h3>
                {{ $t("successStories.section.medicalHealthDataPlatform") }}
              </h3>
              <p>
                {{ $t("successStories.section.medicalHealthDataPlatformDesc") }}
              </p>
              <div class="case-metrics">
                <div class="metric">
                  <span class="metric-value">60%</span>
                  <span class="metric-label">{{
                    $t("successStories.section.efficiencyUpgrade")
                  }}</span>
                </div>
                <div class="metric">
                  <span class="metric-value">98%</span>
                  <span class="metric-label">{{
                    $t("successStories.section.satisfaction")
                  }}</span>
                </div>
                <div class="metric">
                  <span class="metric-value">75%</span>
                  <span class="metric-label">{{
                    $t("successStories.section.resourceUtilization")
                  }}</span>
                </div>
              </div>
              <a href="/case-studies/healthcare" class="case-link">{{
                $t("successStories.section.viewDetails")
              }}</a>
            </div>
          </div>

          <div class="case-card">
            <div class="case-image">
              <div class="case-icon">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 1L21.5 6.5V17.5L12 23L2.5 17.5V6.5L12 1Z"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                  />
                  <path
                    d="M12 8V16M8 12H16"
                    stroke="currentColor"
                    stroke-width="2"
                  />
                </svg>
              </div>
            </div>
            <div class="case-content">
              <div class="case-category">
                {{ $t("successStories.section.governmentServices") }}
              </div>
              <h3>
                {{ $t("successStories.section.smartCityManagementSystem") }}
              </h3>
              <p>
                {{ $t("successStories.section.smartCityManagementSystemDesc") }}
              </p>
              <div class="case-metrics">
                <div class="metric">
                  <span class="metric-value">80%</span>
                  <span class="metric-label">{{
                    $t("successStories.section.efficiencyUpgrade")
                  }}</span>
                </div>
                <div class="metric">
                  <span class="metric-value">96%</span>
                  <span class="metric-label">{{
                    $t("successStories.section.satisfaction")
                  }}</span>
                </div>
                <div class="metric">
                  <span class="metric-value">70%</span>
                  <span class="metric-label">{{
                    $t("successStories.section.responseTimeUpgrade")
                  }}</span>
                </div>
              </div>
              <a href="/case-studies/government" class="case-link">{{
                $t("successStories.section.viewDetails")
              }}</a>
            </div>
          </div>

          <div class="case-card">
            <div class="case-image">
              <div class="case-icon">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M3 3V21H21M21 16L17 12L13 16L9 12L5 16"
                    stroke="currentColor"
                    stroke-width="2"
                  />
                  <circle
                    cx="7"
                    cy="8"
                    r="2"
                    stroke="currentColor"
                    stroke-width="2"
                  />
                </svg>
              </div>
            </div>
            <div class="case-content">
              <div class="case-category">
                {{ $t("successStories.section.retailE-commerce") }}
              </div>
              <h3>
                {{ $t("successStories.section.fullChannelRetailSolution") }}
              </h3>
              <p>
                {{ $t("successStories.section.fullChannelRetailSolutionDesc") }}
              </p>
              <div class="case-metrics">
                <div class="metric">
                  <span class="metric-value">85%</span>
                  <span class="metric-label">{{
                    $t("successStories.section.alesGrowth")
                  }}</span>
                </div>
                <div class="metric">
                  <span class="metric-value">50%</span>
                  <span class="metric-label">{{
                    $t("successStories.section.retentionUpgrade")
                  }}</span>
                </div>
                <div class="metric">
                  <span class="metric-value">35%</span>
                  <span class="metric-label">{{
                    $t("successStories.section.costReduction")
                  }}</span>
                </div>
              </div>
              <a href="/case-studies/retail" class="case-link">{{
                $t("successStories.section.viewDetails")
              }}</a>
            </div>
          </div>

          <div class="case-card">
            <div class="case-image">
              <div class="case-icon">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 3L20 7.5V16.5L12 21L4 16.5V7.5L12 3Z"
                    stroke="currentColor"
                    stroke-width="2"
                  />
                  <path
                    d="M12 12L12 21M12 12L20 7.5M12 12L4 7.5"
                    stroke="currentColor"
                    stroke-width="2"
                  />
                </svg>
              </div>
            </div>
            <div class="case-content">
              <div class="case-category">
                {{ $t("successStories.section.smartCampusOverallSolution") }}
              </div>
              <h3>
                {{ $t("successStories.section.smartCampusOverallSolution") }}
              </h3>
              <p>
                {{
                  $t("successStories.section.smartCampusOverallSolutionDesc")
                }}
              </p>
              <div class="case-metrics">
                <div class="metric">
                  <span class="metric-value">55%</span>
                  <span class="metric-label">{{
                    $t("successStories.section.teachingUpgrade")
                  }}</span>
                </div>
                <div class="metric">
                  <span class="metric-value">70%</span>
                  <span class="metric-label">{{
                    $t("successStories.section.efficiencyUpgrade")
                  }}</span>
                </div>
                <div class="metric">
                  <span class="metric-value">92%</span>
                  <span class="metric-label">{{
                    $t("successStories.section.satisfaction")
                  }}</span>
                </div>
              </div>
              <a href="/case-studies/education" class="case-link">{{
                $t("successStories.section.viewDetails")
              }}</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="success-factors">
      <div class="container">
        <div class="section-header">
          <h2>{{ $t("successStories.section.successFactors") }}</h2>
          <p>{{ $t("successStories.section.keyFactors") }}</p>
        </div>

        <div class="factors-grid">
          <div class="factor-item">
            <div class="factor-icon">
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
            <h3>{{ $t("successStories.section.technicalInnovation") }}</h3>
            <p>
              {{ $t("successStories.section.technicalSupportDec") }}
            </p>
          </div>

          <div class="factor-item">
            <div class="factor-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                <path
                  d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88M13 7C13 9.20914 11.2091 11 9 11C6.79086 11 5 9.20914 5 7C5 4.79086 6.79086 3 9 3C11.2091 3 13 4.79086 13 7Z"
                  stroke="currentColor"
                  stroke-width="2"
                />
              </svg>
            </div>
            <h3>{{ $t("successStories.section.professionalTeam") }}</h3>
            <p>
              {{ $t("successStories.section.professionalTeamDesc") }}
            </p>
          </div>

          <div class="factor-item">
            <div class="factor-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                <path
                  d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                  stroke="currentColor"
                  stroke-width="2"
                />
              </svg>
            </div>
            <h3>{{ $t("successStories.section.qualityAssurance") }}</h3>
            <p>
              {{ $t("successStories.section.qualityAssuranceDesc") }}
            </p>
          </div>

          <div class="factor-item">
            <div class="factor-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                <path
                  d="M13 2L3 14H12L11 22L21 10H12L13 2Z"
                  stroke="currentColor"
                  stroke-width="2"
                  fill="none"
                />
              </svg>
            </div>
            <h3>{{ $t("successStories.section.fastResponse") }}</h3>
            <p>
              {{ $t("successStories.section.fastResponseDesc") }}
            </p>
          </div>

          <div class="factor-item">
            <div class="factor-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                <path
                  d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                  stroke="currentColor"
                  stroke-width="2"
                />
                <path
                  d="M12 8V12L15 15"
                  stroke="currentColor"
                  stroke-width="2"
                />
              </svg>
            </div>
            <h3>{{ $t("successStories.section.industryExperience") }}</h3>
            <p>
              {{ $t("successStories.section.industryExperienceDesc") }}
            </p>
          </div>

          <div class="factor-item">
            <div class="factor-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                <path
                  d="M9 22H15M12 17V22M8 2H16L19 7H5L8 2ZM5 7H19V11C19 15.4183 15.4183 19 11 19H13C8.58172 19 5 15.4183 5 11V7Z"
                  stroke="currentColor"
                  stroke-width="2"
                />
              </svg>
            </div>
            <h3>{{ $t("successStories.section.continuousInnovation") }}</h3>
            <p>
              {{ $t("successStories.section.continuousInnovationDesc") }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="client-testimonials">
      <div class="container">
        <div class="section-header">
          <h2>{{ $t("successStories.section.customerReview") }}</h2>
          <p>{{ $t("successStories.section.listenToCustomerReview") }}</p>
        </div>

        <div class="testimonials-grid">
          <div class="testimonial-card">
            <div class="testimonial-content">
              <div class="quote-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M3 21C3 17.4735 4.10625 14.4467 6.31875 11.92C8.53125 9.39333 11.4687 7.73333 15.125 7"
                    stroke="currentColor"
                    stroke-width="2"
                  />
                  <path
                    d="M16 21C16 17.4735 17.1063 14.4467 19.3188 11.92C21.5313 9.39333 24.4687 7.73333 28.125 7"
                    stroke="currentColor"
                    stroke-width="2"
                  />
                </svg>
              </div>
              <p>
                {{ $t("successStories.section.customerReviewDesc") }}
              </p>
              <div class="testimonial-author">
                <div class="author-info">
                  <div class="author-name">
                    {{ $t("successStories.section.customerReviewName") }}
                  </div>
                  <div class="author-title">
                    {{ $t("successStories.section.customerReviewTitle") }}
                    首席技术官
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="testimonial-card">
            <div class="testimonial-content">
              <div class="quote-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M3 21C3 17.4735 4.10625 14.4467 6.31875 11.92C8.53125 9.39333 11.4687 7.73333 15.125 7"
                    stroke="currentColor"
                    stroke-width="2"
                  />
                  <path
                    d="M16 21C16 17.4735 17.1063 14.4467 19.3188 11.92C21.5313 9.39333 24.4687 7.73333 28.125 7"
                    stroke="currentColor"
                    stroke-width="2"
                  />
                </svg>
              </div>
              <p>
                {{ $t("successStories.section.customerReviewDescOne") }}
              </p>
              <div class="testimonial-author">
                <div class="author-info">
                  <div class="author-name">
                    {{ $t("successStories.section.customerReviewDescTwo") }}
                  </div>
                  <div class="author-title">
                    {{ $t("successStories.section.globalManufacturingGroup") }}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="testimonial-card">
            <div class="testimonial-content">
              <div class="quote-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M3 21C3 17.4735 4.10625 14.4467 6.31875 11.92C8.53125 9.39333 11.4687 7.73333 15.125 7"
                    stroke="currentColor"
                    stroke-width="2"
                  />
                  <path
                    d="M16 21C16 17.4735 17.1063 14.4467 19.3188 11.92C21.5313 9.39333 24.4687 7.73333 28.125 7"
                    stroke="currentColor"
                    stroke-width="2"
                  />
                </svg>
              </div>
              <p>
                {{ $t("successStories.section.customerReviewDescThree") }}
              </p>
              <div class="testimonial-author">
                <div class="author-info">
                  <div class="author-name">Jason</div>
                  <div class="author-title">
                    {{ $t("successStories.section.apacMedicalGroupChairman") }}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="testimonial-card">
            <div class="testimonial-content">
              <div class="quote-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M3 21C3 17.4735 4.10625 14.4467 6.31875 11.92C8.53125 9.39333 11.4687 7.73333 15.125 7"
                    stroke="currentColor"
                    stroke-width="2"
                  />
                  <path
                    d="M16 21C16 17.4735 17.1063 14.4467 19.3188 11.92C21.5313 9.39333 24.4687 7.73333 28.125 7"
                    stroke="currentColor"
                    stroke-width="2"
                  />
                </svg>
              </div>
              <p>
                {{
                  $t(
                    "successStories.section.zhilingArkTechnologySmartCitySolution"
                  )
                }}
              </p>
              <div class="testimonial-author">
                <div class="author-info">
                  <div class="author-name">
                    {{ $t("successStories.section.chenGuoQiang") }}
                  </div>
                  <div class="author-title">
                    {{
                      $t("successStories.section.apacMedicalGroupChairmanTitle")
                    }}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="testimonial-card">
            <div class="testimonial-content">
              <div class="quote-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M3 21C3 17.4735 4.10625 14.4467 6.31875 11.92C8.53125 9.39333 11.4687 7.73333 15.125 7"
                    stroke="currentColor"
                    stroke-width="2"
                  />
                  <path
                    d="M16 21C16 17.4735 17.1063 14.4467 19.3188 11.92C21.5313 9.39333 24.4687 7.73333 28.125 7"
                    stroke="currentColor"
                    stroke-width="2"
                  />
                </svg>
              </div>
              <p>
                {{
                  $t(
                    "successStories.section.zhilingArkTechnologySmartCitySolutionDesc"
                  )
                }}
              </p>
              <div class="testimonial-author">
                <div class="author-info">
                  <div class="author-name">
                    {{ $t("successStories.zhaoLina") }}
                  </div>
                  <div class="author-title">
                    {{ $t("successStories.section.apacMedicalGroup") }}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="testimonial-card">
            <div class="testimonial-content">
              <div class="quote-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M3 21C3 17.4735 4.10625 14.4467 6.31875 11.92C8.53125 9.39333 11.4687 7.73333 15.125 7"
                    stroke="currentColor"
                    stroke-width="2"
                  />
                  <path
                    d="M16 21C16 17.4735 17.1063 14.4467 19.3188 11.92C21.5313 9.39333 24.4687 7.73333 28.125 7"
                    stroke="currentColor"
                    stroke-width="2"
                  />
                </svg>
              </div>
              <p>
                {{
                  $t(
                    "successStories.section.zhilingArkTechnologySmartCampusSolution"
                  )
                }}
              </p>
              <div class="testimonial-author">
                <div class="author-info">
                  <div class="author-name">
                    {{ $t("successStories.liUProfessor") }}
                  </div>
                  <div class="author-title">
                    {{ $t("successStories.university") }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="cta-section">
      <div class="container">
        <div class="cta-content">
          <h2>{{ $t("successStories.readyToCreateYourSuccessCase") }}</h2>
          <p>{{ $t("successStories.contactUs") }}</p>
          <div class="cta-benefits">
            <div class="benefit-item">
              <div class="benefit-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <span>{{ $t("successStories.ConsultationAssessment") }}</span>
            </div>
            <div class="benefit-item">
              <div class="benefit-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <span>{{ $t("successStories.customizedSolution") }}</span>
            </div>
            <div class="benefit-item">
              <div class="benefit-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <span>{{ $t("successStories.expertTeamSupport") }}</span>
            </div>
          </div>
          <div class="cta-buttons">
            <a href="/contact" class="btn-primary">{{
              $t("successStories.appointmentConsultation")
            }}</a>
            <a href="/services" class="btn-secondary">{{
              $t("successStories.exploreServiceScheme")
            }}</a>
            <a href="/case-studies" class="btn-outline">{{
              $t("successStories.viewMoreCases")
            }}</a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// 页面元数据
definePageMeta({
  layout: "default",
  title: "成功案例集 - ZHILING ARK TECHNOLOGY",
  description:
    "查看ZHILING ARK TECHNOLOGY的成功案例，见证我们在各行业的创新成果",
});

// SEO 头部信息
useHead({
  title: "成功案例集 - ZHILING ARK TECHNOLOGY",
  meta: [
    {
      name: "description",
      content:
        "展示ZHILING ARK TECHNOLOGY在金融、供应链、医疗、政府等行业的成功案例和创新解决方案",
    },
    {
      name: "keywords",
      content: "成功案例,客户案例,项目案例,解决方案,数字化转型",
    },
  ],
});
</script>

<style scoped>
.case-studies-page {
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

.success-icon {
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
  animation: success-glow 3s ease-in-out infinite;
}

@keyframes success-glow {
  0%,
  100% {
    transform: scale(1);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  }
  50% {
    transform: scale(1.05);
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
  }
}

.case-overview {
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

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
}

.stat-item {
  background: var(--card-bg);
  padding: 40px 30px;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.stat-item:hover {
  transform: translateY(-5px);
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--primary-color);
  margin-bottom: 10px;
}

.stat-label {
  font-size: 1.2rem;
  color: var(--text-primary);
  margin-bottom: 10px;
  font-weight: 600;
}

.stat-description {
  color: var(--text-secondary);
  font-size: 0.9rem;
}

.featured-cases {
  padding: 80px 0;
  background: var(--bg-secondary);
}

.cases-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.case-card {
  background: var(--card-bg);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.case-card:hover {
  transform: translateY(-5px);
}

.case-card.featured {
  grid-column: span 2;
}

.case-image {
  height: 200px;
  background: linear-gradient(
    135deg,
    var(--primary-color-light),
    var(--primary-color)
  );
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.case-icon {
  color: white;
}

.case-content {
  padding: 30px;
}

.case-category {
  background: var(--primary-color-light);
  color: var(--primary-color);
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 500;
  display: inline-block;
  margin-bottom: 15px;
}

.case-content h3 {
  font-size: 1.5rem;
  color: var(--text-primary);
  margin-bottom: 15px;
}

.case-content p {
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 20px;
}

.case-metrics {
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
  flex-wrap: wrap;
}

.metric {
  text-align: center;
}

.metric-value {
  display: block;
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--primary-color);
}

.metric-label {
  font-size: 0.8rem;
  color: var(--text-secondary);
}

.case-link {
  color: var(--primary-color);
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s ease;
}

.case-link:hover {
  color: var(--primary-color-dark);
}

.success-factors {
  padding: 80px 0;
  background: var(--bg-color);
}

.factors-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
}

.factor-item {
  background: var(--card-bg);
  padding: 30px;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.factor-item:hover {
  transform: translateY(-5px);
}

.factor-icon {
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

.factor-item h3 {
  font-size: 1.3rem;
  color: var(--text-primary);
  margin-bottom: 15px;
}

.factor-item p {
  color: var(--text-secondary);
  line-height: 1.6;
}

.client-testimonials {
  padding: 80px 0;
  background: var(--bg-secondary);
}

.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.testimonial-card {
  background: var(--card-bg);
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.testimonial-card:hover {
  transform: translateY(-5px);
}

.quote-icon {
  color: var(--primary-color);
  margin-bottom: 20px;
}

.testimonial-content p {
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 20px;
  font-style: italic;
}

.testimonial-author {
  display: flex;
  align-items: center;
  gap: 15px;
}

.author-name {
  font-weight: 600;
  color: var(--text-primary);
}

.author-title {
  font-size: 0.9rem;
  color: var(--text-secondary);
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

.cta-benefits {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
  margin-bottom: 30px;
}

.benefit-item {
  display: flex;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.1);
  padding: 10px 20px;
  border-radius: 50px;
  transition: all 0.3s ease;
}

.benefit-item:hover {
  background-color: rgba(255, 255, 255, 0.2);
  transform: translateY(-3px);
}

.benefit-icon {
  margin-right: 10px;
  display: flex;
  align-items: center;
}

.benefit-item span {
  font-weight: 500;
  font-size: 1rem;
}

.cta-buttons {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
}

.btn-outline {
  display: inline-block;
  padding: 12px 24px;
  background-color: transparent;
  color: white;
  border: 2px solid white;
  border-radius: 8px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
}

.btn-outline:hover {
  background-color: white;
  color: var(--primary-color);
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
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

  .cases-grid {
    grid-template-columns: 1fr;
  }

  .case-card.featured {
    grid-column: span 1;
  }

  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .factors-grid {
    grid-template-columns: 1fr;
  }

  .testimonials-grid {
    grid-template-columns: 1fr;
  }

  .case-metrics {
    justify-content: center;
  }
}
</style>
