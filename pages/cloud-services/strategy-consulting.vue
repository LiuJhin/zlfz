<template>
  <div class="strategy-consulting-page">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-background">
        <div class="gradient-overlay"></div>
        <div class="animated-particles"></div>
      </div>

      <div class="hero-content">
        <div class="container">
          <div class="content-wrapper">
            <div class="hero-text animate-on-scroll fadeInLeft">
              <div class="hero-badge">
                <span class="badge-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2L20 7V17L12 22L4 17V7L12 2Z" stroke="currentColor" stroke-width="2" />
                  </svg>
                </span>
                <span class="badge-text">{{ $t("strategyConsulting.hero.tag") }}</span>
              </div>

              <h1 class="hero-title">
                {{ $t("strategyConsulting.hero.title") }}
                <span class="highlight-text">{{ $t("strategyConsulting.hero.titleMini") }}</span>
              </h1>

              <p class="hero-description">
                {{ $t("strategyConsulting.hero.content") }}
              </p>

              <div class="hero-stats">
                <div class="stat-item animate-on-scroll fadeInUp" style="animation-delay: 0.1s">
                  <div class="stat-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M16 6l2 2-10 10-6-6 2-2 4 4 8-8z" stroke="currentColor" stroke-width="2" />
                    </svg>
                  </div>
                  <div class="stat-content">
                    <div class="stat-number">500<span class="stat-plus">+</span></div>
                    <div class="stat-label"> {{ $t("strategyConsulting.hero.SuccessStories") }}</div>
                  </div>
                </div>
                <div class="stat-item animate-on-scroll fadeInUp" style="animation-delay: 0.2s">
                  <div class="stat-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" stroke="currentColor" stroke-width="2" />
                    </svg>
                  </div>
                  <div class="stat-content">
                    <div class="stat-number">98<span class="stat-plus">%</span></div>
                    <div class="stat-label">{{ $t("strategyConsulting.hero.CustomerSatisfaction") }}</div>
                  </div>
                </div>
                <div class="stat-item animate-on-scroll fadeInUp" style="animation-delay: 0.3s">
                  <div class="stat-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm8.94 3A8.994 8.994 0 0 0 13 3.06V1h-2v2.06A8.994 8.994 0 0 0 3.06 11H1v2h2.06A8.994 8.994 0 0 0 11 20.94V23h2v-2.06A8.994 8.994 0 0 0 20.94 13H23v-2h-2.06zM12 19c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z" stroke="currentColor" stroke-width="2" />
                    </svg>
                  </div>
                  <div class="stat-content">
                    <div class="stat-number">60<span class="stat-plus">%</span></div>
                    <div class="stat-label">{{ $t("strategyConsulting.hero.AverageCostSavings") }}</div>
                  </div>
                </div>
              </div>

              <div class="hero-actions animate-on-scroll fadeInUp" style="animation-delay: 0.4s">
                <a href="/contact" class="btn-primary">
                  <span>{{ $t("strategyConsulting.hero.FreeConsultation") }}</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12h14M19 12l-7-7m7 7l-7 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </a>
                <a href="#services" class="btn-outline">
                  <span>{{ $t("strategyConsulting.hero.ServiceDetails") }}</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M7 10l5 5 5-5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </a>
              </div>
            </div>

            <div class="hero-visual animate-on-scroll fadeInRight">
              <div class="strategy-overview">
                <div class="overview-header">
                  <div class="overview-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M12 2L20 7V17L12 22L4 17V7L12 2Z" stroke="currentColor" stroke-width="2" />
                      <path d="M12 8V16M8 10L16 14M8 14L16 10" stroke="currentColor" stroke-width="2" />
                    </svg>
                  </div>
                  <h3>{{ $t("strategyConsulting.hero.CardTitle") }}</h3>
                </div>

                <div class="overview-content">
                  <div class="metrics-simple">
                    <div class="metric-item">
                      <div class="metric-value">85<span class="metric-percent">%</span></div>
                      <div class="metric-label">{{ $t("strategyConsulting.hero.EfficiencyImprovement") }}</div>
                    </div>
                    <div class="metric-item">
                      <div class="metric-value">99.9<span class="metric-percent">%</span></div>
                      <div class="metric-label">{{ $t("strategyConsulting.hero.usability") }}</div>
                    </div>
                    <div class="metric-item">
                      <div class="metric-value">60<span class="metric-percent">%</span></div>
                      <div class="metric-label">{{ $t("strategyConsulting.hero.CostSavings") }}</div>
                    </div>
                  </div>

                  <div class="key-benefits">
                    <div class="benefit-item">
                      <span class="benefit-icon">✓</span>
                      <span>{{ $t("strategyConsulting.hero.cloudNativeArchitectureDesign") }}</span>
                    </div>
                    <div class="benefit-item">
                      <span class="benefit-icon">✓</span>
                      <span>{{ $t("strategyConsulting.hero.costOptimizationStrategy") }}</span>
                    </div>
                    <div class="benefit-item">
                      <span class="benefit-icon">✓</span>
                      <span>{{ $t("strategyConsulting.hero.securityComplianceAssurance") }}</span>
                    </div>
                    <div class="benefit-item">
                      <span class="benefit-icon">✓</span>
                      <span>{{ $t("strategyConsulting.hero.continuousOpsSupport") }}</span>
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
        <div class="section-header animate-on-scroll fadeInUp">
          <div class="header-badge">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L20 7V17L12 22L4 17V7L12 2Z" stroke="currentColor" stroke-width="2" />
              <path d="M12 6L16 8.5V13.5L12 16L8 13.5V8.5L12 6Z" stroke="currentColor" stroke-width="2" />
            </svg>
            <span class="badge-text">{{ $t("strategyConsulting.project.tag") }}</span>
          </div>
          <h2>{{ $t("strategyConsulting.project.title") }}</h2>
          <p>{{ $t("strategyConsulting.project.subtitle") }}</p>
        </div>

        <div class="services-grid">
          <div class="service-card featured animate-on-scroll fadeInUp" style="animation-delay: 0.1s">
            <div class="card-header">
              <div class="service-icon animate-on-scroll pulse">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 2L20 7V17L12 22L4 17V7L12 2Z"
                    stroke="currentColor"
                    stroke-width="2"
                  />
                  <path
                    d="M12 8V16M8 10L16 14M8 14L16 10"
                    stroke="currentColor"
                    stroke-width="2"
                  />
                </svg>
              </div>
              <div class="featured-badge">推荐</div>
            </div>
            <h3>{{ $t("strategyConsulting.project.itemOne.title") }}</h3>
            <p>
              {{ $t("strategyConsulting.project.itemOne.content") }}
            </p>
            <div class="service-features">
              <span class="feature-tag">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L20 7V17L12 22L4 17V7L12 2Z" stroke="currentColor" stroke-width="2" />
                </svg>
                {{ $t("strategyConsulting.project.itemOne.tagOne") }}
              </span>
              <span class="feature-tag">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L20 7V17L12 22L4 17V7L12 2Z" stroke="currentColor" stroke-width="2" />
                </svg>
                {{ $t("strategyConsulting.project.itemOne.tagTwo") }}
              </span>
              <span class="feature-tag">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L20 7V17L12 22L4 17V7L12 2Z" stroke="currentColor" stroke-width="2" />
                </svg>
                {{ $t("strategyConsulting.project.itemOne.tagThree") }}
              </span>
              <span class="feature-tag">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L20 7V17L12 22L4 17V7L12 2Z" stroke="currentColor" stroke-width="2" />
                </svg>
                {{ $t("strategyConsulting.project.itemOne.tagFour") }}
              </span>
            </div>
          </div>

          <div class="service-card animate-on-scroll fadeInUp" style="animation-delay: 0.2s">
            <div class="card-header">
              <div class="service-icon animate-on-scroll pulse">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M4 4H20V20H4V4Z"
                    stroke="currentColor"
                    stroke-width="2"
                  />
                  <path
                    d="M9 9H15V15H9V9Z"
                    stroke="currentColor"
                    stroke-width="2"
                  />
                  <path
                    d="M9 1V7M15 1V7M9 17V23M15 17V23M1 9H7M17 9H23M1 15H7M17 15H23"
                    stroke="currentColor"
                    stroke-width="2"
                  />
                </svg>
              </div>
            </div>
            <h3>{{ $t("strategyConsulting.project.itemTwo.title") }}</h3>
            <p>
              {{ $t("strategyConsulting.project.itemTwo.content") }}
            </p>
            <div class="service-features">
              <span class="feature-tag">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L20 7V17L12 22L4 17V7L12 2Z" stroke="currentColor" stroke-width="2" />
                </svg>
                {{ $t("strategyConsulting.project.itemTwo.tagOne") }}
              </span>
              <span class="feature-tag">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L20 7V17L12 22L4 17V7L12 2Z" stroke="currentColor" stroke-width="2" />
                </svg>
                {{ $t("strategyConsulting.project.itemTwo.tagTwo") }}
              </span>
              <span class="feature-tag">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L20 7V17L12 22L4 17V7L12 2Z" stroke="currentColor" stroke-width="2" />
                </svg>
                {{ $t("strategyConsulting.project.itemTwo.tagThree") }}
              </span>
              <span class="feature-tag">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L20 7V17L12 22L4 17V7L12 2Z" stroke="currentColor" stroke-width="2" />
                </svg>
                {{ $t("strategyConsulting.project.itemTwo.tagFour") }}
              </span>
            </div>
          </div>

          <div class="service-card animate-on-scroll fadeInUp" style="animation-delay: 0.3s">
            <div class="card-header">
              <div class="service-icon animate-on-scroll pulse">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 1V23M17 5H9.5A3.5 3.5 0 0 0 6 8.5V8.5A3.5 3.5 0 0 0 9.5 12H14.5A3.5 3.5 0 0 1 18 15.5V15.5A3.5 3.5 0 0 1 14.5 19H6"
                    stroke="currentColor"
                    stroke-width="2"
                  />
                </svg>
              </div>
            </div>
            <h3>{{ $t("strategyConsulting.project.itemThree.title") }}</h3>
            <p>
              {{ $t("strategyConsulting.project.itemThree.content") }}
            </p>
            <div class="service-features">
              <span class="feature-tag">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L20 7V17L12 22L4 17V7L12 2Z" stroke="currentColor" stroke-width="2" />
                </svg>
                {{ $t("strategyConsulting.project.itemThree.tagOne") }}
              </span>
              <span class="feature-tag">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L20 7V17L12 22L4 17V7L12 2Z" stroke="currentColor" stroke-width="2" />
                </svg>
                {{ $t("strategyConsulting.project.itemThree.tagTwo") }}
              </span>
              <span class="feature-tag">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L20 7V17L12 22L4 17V7L12 2Z" stroke="currentColor" stroke-width="2" />
                </svg>
                {{ $t("strategyConsulting.project.itemThree.tagThree") }}
              </span>
              <span class="feature-tag">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L20 7V17L12 22L4 17V7L12 2Z" stroke="currentColor" stroke-width="2" />
                </svg>
                {{ $t("strategyConsulting.project.itemThree.tagFour") }}
              </span>
            </div>
          </div>

          <div class="service-card animate-on-scroll fadeInUp" style="animation-delay: 0.4s">
            <div class="card-header">
              <div class="service-icon animate-on-scroll pulse">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 22S8 18 8 13V6L12 4L16 6V13C16 18 12 22 12 22Z"
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
            </div>
            <h3>{{ $t("strategyConsulting.project.itemFour.title") }}</h3>
            <p>
              {{ $t("strategyConsulting.project.itemFour.content") }}
            </p>
            <div class="service-features">
              <span class="feature-tag">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L20 7V17L12 22L4 17V7L12 2Z" stroke="currentColor" stroke-width="2" />
                </svg>
                {{ $t("strategyConsulting.project.itemFour.tagOne") }}
              </span>
              <span class="feature-tag">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L20 7V17L12 22L4 17V7L12 2Z" stroke="currentColor" stroke-width="2" />
                </svg>
                {{ $t("strategyConsulting.project.itemFour.tagTwo") }}
              </span>
              <span class="feature-tag">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L20 7V17L12 22L4 17V7L12 2Z" stroke="currentColor" stroke-width="2" />
                </svg>
                {{ $t("strategyConsulting.project.itemFour.tagThree") }}
              </span>
              <span class="feature-tag">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L20 7V17L12 22L4 17V7L12 2Z" stroke="currentColor" stroke-width="2" />
                </svg>
                {{ $t("strategyConsulting.project.itemFour.tagFour") }}
              </span>
            </div>
          </div>

          <div class="service-card animate-on-scroll fadeInUp" style="animation-delay: 0.5s">
            <div class="card-header">
              <div class="service-icon animate-on-scroll pulse">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M21 16V8A2 2 0 0 0 19 6H5A2 2 0 0 0 3 8V16A2 2 0 0 0 5 18H19A2 2 0 0 0 21 16Z"
                    stroke="currentColor"
                    stroke-width="2"
                  />
                  <path
                    d="M7 10L12 15L17 10"
                    stroke="currentColor"
                    stroke-width="2"
                  />
                </svg>
              </div>
            </div>
            <h3>{{ $t("strategyConsulting.project.itemFive.title") }}</h3>
            <p>
              {{ $t("strategyConsulting.project.itemFive.content") }}
            </p>
            <div class="service-features">
              <span class="feature-tag">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L20 7V17L12 22L4 17V7L12 2Z" stroke="currentColor" stroke-width="2" />
                </svg>
                {{ $t("strategyConsulting.project.itemFive.tagOne") }}
              </span>
              <span class="feature-tag">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L20 7V17L12 22L4 17V7L12 2Z" stroke="currentColor" stroke-width="2" />
                </svg>
                {{ $t("strategyConsulting.project.itemFive.tagTwo") }}
              </span>
              <span class="feature-tag">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L20 7V17L12 22L4 17V7L12 2Z" stroke="currentColor" stroke-width="2" />
                </svg>
                {{ $t("strategyConsulting.project.itemFive.tagThree") }}
              </span>
              <span class="feature-tag">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L20 7V17L12 22L4 17V7L12 2Z" stroke="currentColor" stroke-width="2" />
                </svg>
                {{ $t("strategyConsulting.project.itemFive.tagFour") }}
              </span>
            </div>
          </div>

          <div class="service-card animate-on-scroll fadeInUp" style="animation-delay: 0.6s">
            <div class="card-header">
              <div class="service-icon animate-on-scroll pulse">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M16 4H18A2 2 0 0 1 20 6V18A2 2 0 0 1 18 20H6A2 2 0 0 1 4 18V6A2 2 0 0 1 6 4H8"
                    stroke="currentColor"
                    stroke-width="2"
                  />
                  <path
                    d="M15 2H9A1 1 0 0 0 8 3V5A1 1 0 0 0 9 6H15A1 1 0 0 0 16 5V3A1 1 0 0 0 15 2Z"
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
            </div>
            <h3>{{ $t("strategyConsulting.project.itemSix.title") }}</h3>
            <p>
              {{ $t("strategyConsulting.project.itemSix.content") }}
            </p>
            <div class="service-features">
              <span class="feature-tag">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L20 7V17L12 22L4 17V7L12 2Z" stroke="currentColor" stroke-width="2" />
                </svg>
                {{ $t("strategyConsulting.project.itemSix.tagOne") }}
              </span>
              <span class="feature-tag">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L20 7V17L12 22L4 17V7L12 2Z" stroke="currentColor" stroke-width="2" />
                </svg>
                {{ $t("strategyConsulting.project.itemSix.tagTwo") }}
              </span>
              <span class="feature-tag">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L20 7V17L12 22L4 17V7L12 2Z" stroke="currentColor" stroke-width="2" />
                </svg>
                {{ $t("strategyConsulting.project.itemSix.tagThree") }}
              </span>
              <span class="feature-tag">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L20 7V17L12 22L4 17V7L12 2Z" stroke="currentColor" stroke-width="2" />
                </svg>
                {{ $t("strategyConsulting.project.itemSix.tagFour") }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Process Section -->
    <section class="process-section">
      <div class="container">
        <div class="section-header animate-on-scroll fadeInUp">
          <div class="header-badge">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" class="badge-icon">
              <path d="M12 2L20 7V17L12 22L4 17V7L12 2Z" stroke="currentColor" stroke-width="2" />
              <path d="M12 6L16 8.5V13.5L12 16L8 13.5V8.5L12 6Z" stroke="currentColor" stroke-width="2" />
            </svg>
            <span class="badge-text">{{ $t("strategyConsulting.processSection.badgeText") }}</span>
          </div>
          <h2 class="section-title">{{ $t("strategyConsulting.processSection.title") }}</h2>
          <p class="section-subtitle">{{ $t("strategyConsulting.processSection.subtitle") }}</p>
        </div>

        <div class="process-timeline">
          <div class="timeline-track"></div>
          <div class="process-steps">
            <div
              class="process-step animate-on-scroll fadeInUp"
              v-for="(step, index) in processSteps"
              :key="index"
              :style="`animation-delay: ${0.1 * (index + 1)}s`"
              :class="{'step-right': index % 2 !== 0}"
            >
              <div class="step-connector" v-if="index < processSteps.length - 1"></div>
              
              <div class="step-circle animate-on-scroll bounceIn" :style="`animation-delay: ${0.15 * (index + 1)}s`">
                <span class="step-number">{{ String(index + 1).padStart(2, "0") }}</span>
                <div class="pulse-ring"></div>
              </div>
              
              <div class="step-card">
                <div class="step-header">
                  <h3 class="animate-on-scroll fadeInDown" :style="`animation-delay: ${0.2 * (index + 1)}s`">{{ step.title }}</h3>
                  <div class="step-icon animate-on-scroll rotateIn" :style="`animation-delay: ${0.25 * (index + 1)}s`">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M12 2L20 7V17L12 22L4 17V7L12 2Z" stroke="currentColor" stroke-width="2" />
                    </svg>
                  </div>
                </div>
                
                <p class="animate-on-scroll fadeIn" :style="`animation-delay: ${0.3 * (index + 1)}s`">{{ step.description }}</p>
                
                <div class="step-details">
                  <div
                    class="detail-item animate-on-scroll slideInRight"
                    v-for="(detail, detailIndex) in step.details"
                    :key="detail"
                    :style="`animation-delay: ${0.1 * (detailIndex + 1) + 0.3}s`"
                  >
                    <span class="detail-icon">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" stroke-width="2"/>
                        <path d="M8 12L11 15L16 9" stroke="currentColor" stroke-width="2"/>
                      </svg>
                    </span>
                    <span class="detail-text">{{ detail }}</span>
                  </div>
                </div>
                
                <div class="step-progress-bar animate-on-scroll scaleInX" :style="`animation-delay: ${0.4 * (index + 1)}s`">
                  <div class="progress-fill" :style="`width: ${(index + 1) / processSteps.length * 100}%`"></div>
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
        <div class="section-header animate-on-scroll fadeInUp">
          <div class="header-badge">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L20 7V17L12 22L4 17V7L12 2Z" stroke="currentColor" stroke-width="2" />
              <path d="M12 6L16 8.5V13.5L12 16L8 13.5V8.5L12 6Z" stroke="currentColor" stroke-width="2" />
            </svg>
            <span class="badge-text">成功案例</span>
          </div>
          <h2>客户成功案例</h2>
          <p>真实案例见证我们的专业实力和服务质量</p>
        </div>

        <div class="cases-grid">
          <div class="case-card animate-on-scroll fadeInUp" style="animation-delay: 0.1s">
            <div class="case-header">
              <div class="case-company">
                <div class="company-logo animate-on-scroll pulse" style="animation-delay: 0.3s">
                  <span class="logo-text">金融集团</span>
                </div>
                <div class="company-info">
                  <h3>某大型金融集团</h3>
                  <span class="industry-tag animate-on-scroll scaleIn" style="animation-delay: 0.4s">金融服务</span>
                </div>
              </div>
              <div class="case-result animate-on-scroll fadeInRight" style="animation-delay: 0.2s">
                <span class="result-value">60%</span>
                <span class="result-label">成本节省</span>
              </div>
            </div>
            <div class="case-content">
              <h4>全面云化转型战略</h4>
              <p>
                为该金融集团制定了完整的云化转型战略，包括核心业务系统迁移、数据中心整合和安全合规框架建设。项目涉及200+应用系统，服务3000万+用户。
              </p>
              <div class="case-highlights">
                <div class="highlight-item animate-on-scroll fadeInLeft" style="animation-delay: 0.1s">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" stroke-width="2"/>
                    <path d="M8 12L11 15L16 9" stroke="currentColor" stroke-width="2"/>
                  </svg>
                  <span>系统性能提升85%</span>
                </div>
                <div class="highlight-item animate-on-scroll fadeInLeft" style="animation-delay: 0.2s">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" stroke-width="2"/>
                    <path d="M8 12L11 15L16 9" stroke="currentColor" stroke-width="2"/>
                  </svg>
                  <span>安全等级提升至金融级</span>
                </div>
                <div class="highlight-item animate-on-scroll fadeInLeft" style="animation-delay: 0.3s">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" stroke-width="2"/>
                    <path d="M8 12L11 15L16 9" stroke="currentColor" stroke-width="2"/>
                  </svg>
                  <span>业务响应速度提升3倍</span>
                </div>
                <div class="highlight-item animate-on-scroll fadeInLeft" style="animation-delay: 0.4s">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" stroke-width="2"/>
                    <path d="M8 12L11 15L16 9" stroke="currentColor" stroke-width="2"/>
                  </svg>
                  <span>通过等保三级认证</span>
                </div>
              </div>
            </div>
          </div>

          <div class="case-card animate-on-scroll fadeInUp" style="animation-delay: 0.2s">
            <div class="case-header">
              <div class="case-company">
                <div class="company-logo animate-on-scroll pulse" style="animation-delay: 0.3s">
                  <span class="logo-text">制造企业</span>
                </div>
                <div class="company-info">
                  <h3>某制造业龙头企业</h3>
                  <span class="industry-tag animate-on-scroll scaleIn" style="animation-delay: 0.4s">智能制造</span>
                </div>
              </div>
              <div class="case-result animate-on-scroll fadeInRight" style="animation-delay: 0.2s">
                <span class="result-value">40%</span>
                <span class="result-label">效率提升</span>
              </div>
            </div>
            <div class="case-content">
              <h4>智能制造云平台建设</h4>
              <p>
                构建了覆盖生产、供应链、销售全流程的智能制造云平台，实现了数据驱动的精益生产管理。整合50+工厂，连接10万+设备。
              </p>
              <div class="case-highlights">
                <div class="highlight-item animate-on-scroll fadeInLeft" style="animation-delay: 0.1s">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" stroke-width="2"/>
                    <path d="M8 12L11 15L16 9" stroke="currentColor" stroke-width="2"/>
                  </svg>
                  <span>生产效率提升40%</span>
                </div>
                <div class="highlight-item animate-on-scroll fadeInLeft" style="animation-delay: 0.2s">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" stroke-width="2"/>
                    <path d="M8 12L11 15L16 9" stroke="currentColor" stroke-width="2"/>
                  </svg>
                  <span>库存周转率提升50%</span>
                </div>
                <div class="highlight-item animate-on-scroll fadeInLeft" style="animation-delay: 0.3s">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" stroke-width="2"/>
                    <path d="M8 12L11 15L16 9" stroke="currentColor" stroke-width="2"/>
                  </svg>
                  <span>产品质量提升30%</span>
                </div>
                <div class="highlight-item animate-on-scroll fadeInLeft" style="animation-delay: 0.4s">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" stroke-width="2"/>
                    <path d="M8 12L11 15L16 9" stroke="currentColor" stroke-width="2"/>
                  </svg>
                  <span>能耗降低25%</span>
                </div>
              </div>
            </div>
          </div>

          <div class="case-card animate-on-scroll fadeInUp" style="animation-delay: 0.3s">
            <div class="case-header">
              <div class="case-company">
                <div class="company-logo animate-on-scroll pulse" style="animation-delay: 0.3s">
                  <span class="logo-text">零售集团</span>
                </div>
                <div class="company-info">
                  <h3>某新零售集团</h3>
                  <span class="industry-tag animate-on-scroll scaleIn" style="animation-delay: 0.4s">新零售</span>
                </div>
              </div>
              <div class="case-result animate-on-scroll fadeInRight" style="animation-delay: 0.2s">
                <span class="result-value">200%</span>
                <span class="result-label">业务增长</span>
              </div>
            </div>
            <div class="case-content">
              <h4>全渠道数字化平台</h4>
              <p>
                打造了线上线下一体化的新零售平台，实现了全渠道客户体验优化和精准营销。覆盖5000+门店，服务2000万+会员。
              </p>
              <div class="case-highlights">
                <div class="highlight-item animate-on-scroll fadeInLeft" style="animation-delay: 0.1s">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" stroke-width="2"/>
                    <path d="M8 12L11 15L16 9" stroke="currentColor" stroke-width="2"/>
                  </svg>
                  <span>销售额增长200%</span>
                </div>
                <div class="highlight-item animate-on-scroll fadeInLeft" style="animation-delay: 0.2s">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" stroke-width="2"/>
                    <path d="M8 12L11 15L16 9" stroke="currentColor" stroke-width="2"/>
                  </svg>
                  <span>客户满意度提升45%</span>
                </div>
                <div class="highlight-item animate-on-scroll fadeInLeft" style="animation-delay: 0.3s">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" stroke-width="2"/>
                    <path d="M8 12L11 15L16 9" stroke="currentColor" stroke-width="2"/>
                  </svg>
                  <span>移动端转化率提升60%</span>
                </div>
                <div class="highlight-item animate-on-scroll fadeInLeft" style="animation-delay: 0.4s">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" stroke-width="2"/>
                    <path d="M8 12L11 15L16 9" stroke="currentColor" stroke-width="2"/>
                  </svg>
                  <span>库存周转提升35%</span>
                </div>
              </div>
            </div>
          </div>

          <div class="case-card animate-on-scroll fadeInUp" style="animation-delay: 0.4s">
            <div class="case-header">
              <div class="case-company">
                <div class="company-logo animate-on-scroll pulse" style="animation-delay: 0.4s">
                  <span class="logo-text">医疗集团</span>
                </div>
                <div class="company-info">
                  <h3>某大型医疗集团</h3>
                  <span class="industry-tag animate-on-scroll scaleIn" style="animation-delay: 0.5s">医疗健康</span>
                </div>
              </div>
              <div class="case-result animate-on-scroll fadeInRight" style="animation-delay: 0.3s">
                <span class="result-value">99.9%</span>
                <span class="result-label">系统可用性</span>
              </div>
            </div>
            <div class="case-content">
              <h4>医疗云平台建设</h4>
              <p>
                构建了安全可靠的医疗云平台，实现了医疗数据的统一管理和智能分析。连接300+医院，服务1000万+患者。
              </p>
              <div class="case-highlights">
                <div class="highlight-item animate-on-scroll fadeInLeft" style="animation-delay: 0.2s">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" stroke-width="2"/>
                    <path d="M8 12L11 15L16 9" stroke="currentColor" stroke-width="2"/>
                  </svg>
                  <span>诊疗效率提升50%</span>
                </div>
                <div class="highlight-item animate-on-scroll fadeInLeft" style="animation-delay: 0.3s">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" stroke-width="2"/>
                    <path d="M8 12L11 15L16 9" stroke="currentColor" stroke-width="2"/>
                  </svg>
                  <span>数据安全等级AAA</span>
                </div>
                <div class="highlight-item animate-on-scroll fadeInLeft" style="animation-delay: 0.4s">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" stroke-width="2"/>
                    <path d="M8 12L11 15L16 9" stroke="currentColor" stroke-width="2"/>
                  </svg>
                  <span>远程诊疗覆盖率90%</span>
                </div>
                <div class="highlight-item animate-on-scroll fadeInLeft" style="animation-delay: 0.5s">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" stroke-width="2"/>
                    <path d="M8 12L11 15L16 9" stroke="currentColor" stroke-width="2"/>
                  </svg>
                  <span>医疗成本降低30%</span>
                </div>
              </div>
            </div>
          </div>

          <div class="case-card animate-on-scroll fadeInUp" style="animation-delay: 0.5s">
            <div class="case-header">
              <div class="case-company">
                <div class="company-logo animate-on-scroll pulse" style="animation-delay: 0.5s">
                  <span class="logo-text">教育集团</span>
                </div>
                <div class="company-info">
                  <h3>某知名教育集团</h3>
                  <span class="industry-tag animate-on-scroll scaleIn" style="animation-delay: 0.6s">在线教育</span>
                </div>
              </div>
              <div class="case-result animate-on-scroll fadeInRight" style="animation-delay: 0.4s">
                <span class="result-value">300%</span>
                <span class="result-label">用户增长</span>
              </div>
            </div>
            <div class="case-content">
              <h4>在线教育云平台</h4>
              <p>
                打造了智能化的在线教育云平台，支持大规模并发学习，提供个性化学习体验。服务500万+学员，覆盖全球50+国家。
              </p>
              <div class="case-highlights">
                <div class="highlight-item animate-on-scroll fadeInLeft" style="animation-delay: 0.3s">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" stroke-width="2"/>
                    <path d="M8 12L11 15L16 9" stroke="currentColor" stroke-width="2"/>
                  </svg>
                  <span>并发用户数100万+</span>
                </div>
                <div class="highlight-item animate-on-scroll fadeInLeft" style="animation-delay: 0.4s">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" stroke-width="2"/>
                    <path d="M8 12L11 15L16 9" stroke="currentColor" stroke-width="2"/>
                  </svg>
                  <span>学习完成率提升80%</span>
                </div>
                <div class="highlight-item animate-on-scroll fadeInLeft" style="animation-delay: 0.5s">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" stroke-width="2"/>
                    <path d="M8 12L11 15L16 9" stroke="currentColor" stroke-width="2"/>
                  </svg>
                  <span>系统响应时间<100ms</span>
                </div>
                <div class="highlight-item animate-on-scroll fadeInLeft" style="animation-delay: 0.6s">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" stroke-width="2"/>
                    <path d="M8 12L11 15L16 9" stroke="currentColor" stroke-width="2"/>
                  </svg>
                  <span>AI推荐准确率95%</span>
                </div>
              </div>
            </div>
          </div>

          <div class="case-card animate-on-scroll fadeInUp" style="animation-delay: 0.6s">
            <div class="case-header">
              <div class="case-company">
                <div class="company-logo animate-on-scroll pulse" style="animation-delay: 0.6s">
                  <span class="logo-text">物流企业</span>
                </div>
                <div class="company-info">
                  <h3>某国际物流企业</h3>
                  <span class="industry-tag animate-on-scroll scaleIn" style="animation-delay: 0.7s">智慧物流</span>
                </div>
              </div>
              <div class="case-result animate-on-scroll fadeInRight" style="animation-delay: 0.5s">
                <span class="result-value">70%</span>
                <span class="result-label">运营效率提升</span>
              </div>
            </div>
            <div class="case-content">
              <h4>智慧物流云平台</h4>
              <p>
                构建了全球化的智慧物流云平台，实现了供应链的可视化管理和智能调度。覆盖200+城市，管理10万+车辆。
              </p>
              <div class="case-highlights">
                <div class="highlight-item animate-on-scroll fadeInLeft" style="animation-delay: 0.4s">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" stroke-width="2"/>
                    <path d="M8 12L11 15L16 9" stroke="currentColor" stroke-width="2"/>
                  </svg>
                  <span>配送时效提升40%</span>
                </div>
                <div class="highlight-item animate-on-scroll fadeInLeft" style="animation-delay: 0.5s">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" stroke-width="2"/>
                    <path d="M8 12L11 15L16 9" stroke="currentColor" stroke-width="2"/>
                  </svg>
                  <span>运输成本降低35%</span>
                </div>
                <div class="highlight-item animate-on-scroll fadeInLeft" style="animation-delay: 0.6s">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" stroke-width="2"/>
                    <path d="M8 12L11 15L16 9" stroke="currentColor" stroke-width="2"/>
                  </svg>
                  <span>客户满意度98%</span>
                </div>
                <div class="highlight-item animate-on-scroll fadeInLeft" style="animation-delay: 0.7s">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" stroke-width="2"/>
                    <path d="M8 12L11 15L16 9" stroke="currentColor" stroke-width="2"/>
                  </svg>
                  <span>碳排放减少20%</span>
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
                  <p>容器编排与管理，支持大规模集群部署</p>
                </div>
              </div>
              <div class="tech-item">
                <div class="tech-info">
                  <h4>Docker</h4>
                  <p>应用容器化，提升部署效率和一致性</p>
                </div>
              </div>
              <div class="tech-item">
                <div class="tech-info">
                  <h4>Helm</h4>
                  <p>Kubernetes应用包管理工具</p>
                </div>
              </div>
              <div class="tech-item">
                <div class="tech-info">
                  <h4>Istio</h4>
                  <p>服务网格，微服务通信管理</p>
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
                  <p>持续集成/部署，自动化构建流水线</p>
                </div>
              </div>
              <div class="tech-item">
                <div class="tech-info">
                  <h4>GitLab CI/CD</h4>
                  <p>代码管理与自动化部署一体化</p>
                </div>
              </div>
              <div class="tech-item">
                <div class="tech-info">
                  <h4>Terraform</h4>
                  <p>基础设施即代码，云资源自动化管理</p>
                </div>
              </div>
              <div class="tech-item">
                <div class="tech-info">
                  <h4>Ansible</h4>
                  <p>配置管理和应用部署自动化</p>
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
                  <p>云原生监控系统，实时指标采集</p>
                </div>
              </div>
              <div class="tech-item">
                <div class="tech-info">
                  <h4>Grafana</h4>
                  <p>数据可视化平台，丰富的监控仪表板</p>
                </div>
              </div>
              <div class="tech-item">
                <div class="tech-info">
                  <h4>ELK Stack</h4>
                  <p>日志收集、分析和可视化解决方案</p>
                </div>
              </div>
              <div class="tech-item">
                <div class="tech-info">
                  <h4>Jaeger</h4>
                  <p>分布式链路追踪，性能分析</p>
                </div>
              </div>
            </div>
          </div>

          <div class="tech-category">
            <h3>云平台服务</h3>
            <div class="tech-items">
              <div class="tech-item">
                <div class="tech-info">
                  <h4>AWS</h4>
                  <p>亚马逊云服务，全球领先的云平台</p>
                </div>
              </div>
              <div class="tech-item">
                <div class="tech-info">
                  <h4>Microsoft Azure</h4>
                  <p>微软云平台，企业级混合云解决方案</p>
                </div>
              </div>
              <div class="tech-item">
                <div class="tech-info">
                  <h4>阿里云</h4>
                  <p>国内领先的云计算服务提供商</p>
                </div>
              </div>
              <div class="tech-item">
                <div class="tech-info">
                  <h4>腾讯云</h4>
                  <p>腾讯云计算平台，游戏和社交领域优势</p>
                </div>
              </div>
            </div>
          </div>

          <div class="tech-category">
            <h3>大数据与AI</h3>
            <div class="tech-items">
              <div class="tech-item">
                <div class="tech-info">
                  <h4>Apache Spark</h4>
                  <p>大数据处理引擎，支持批处理和流处理</p>
                </div>
              </div>
              <div class="tech-item">
                <div class="tech-info">
                  <h4>Apache Kafka</h4>
                  <p>分布式流处理平台，实时数据管道</p>
                </div>
              </div>
              <div class="tech-item">
                <div class="tech-info">
                  <h4>TensorFlow</h4>
                  <p>机器学习框架，AI模型训练和部署</p>
                </div>
              </div>
              <div class="tech-item">
                <div class="tech-info">
                  <h4>Elasticsearch</h4>
                  <p>分布式搜索和分析引擎</p>
                </div>
              </div>
            </div>
          </div>

          <div class="tech-category">
            <h3>安全与合规</h3>
            <div class="tech-items">
              <div class="tech-item">
                <div class="tech-info">
                  <h4>零信任架构</h4>
                  <p>基于身份验证的安全模型</p>
                </div>
              </div>
              <div class="tech-item">
                <div class="tech-info">
                  <h4>端到端加密</h4>
                  <p>数据传输和存储全程加密保护</p>
                </div>
              </div>
              <div class="tech-item">
                <div class="tech-info">
                  <h4>身份认证IAM</h4>
                  <p>统一身份管理和访问控制</p>
                </div>
              </div>
              <div class="tech-item">
                <div class="tech-info">
                  <h4>合规审计</h4>
                  <p>满足等保、SOX、GDPR等合规要求</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Expert Team Section -->
<!--    <section class="expert-team-section">-->
<!--      <div class="container">-->
<!--        <div class="section-header">-->
<!--          <h2>资深云战略专家</h2>-->
<!--          <p>汇聚行业顶尖人才，为您提供专业的云战略咨询服务</p>-->
<!--        </div>-->

<!--        <div class="experts-grid">-->
<!--          <div class="expert-card">-->
<!--            <div class="expert-avatar">-->
<!--              <div class="avatar-placeholder">-->
<!--                <span class="avatar-initial">张</span>-->
<!--              </div>-->
<!--              <div class="expert-badge">首席专家</div>-->
<!--            </div>-->
<!--            <div class="expert-info">-->
<!--              <h3>张云峰</h3>-->
<!--              <p class="expert-title">云战略首席架构师</p>-->
<!--              <p class="expert-desc">-->
<!--                15年云计算行业经验，曾任职于AWS、阿里云等知名云服务商，主导过100+大型企业云化项目，服务客户包括金融、制造、零售等多个行业的头部企业。-->
<!--              </p>-->
<!--              <div class="expert-achievements">-->
<!--                <div class="achievement-item">✓ AWS解决方案架构师认证</div>-->
<!--                <div class="achievement-item">✓ 阿里云MVP专家</div>-->
<!--                <div class="achievement-item">✓ 《企业云战略实践》作者</div>-->
<!--              </div>-->
<!--              <div class="expert-skills">-->
<!--                <span class="skill-tag">云架构设计</span>-->
<!--                <span class="skill-tag">数字化转型</span>-->
<!--                <span class="skill-tag">企业咨询</span>-->
<!--                <span class="skill-tag">成本优化</span>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->

<!--          <div class="expert-card">-->
<!--            <div class="expert-avatar">-->
<!--              <div class="avatar-placeholder">-->
<!--                <span class="avatar-initial">李</span>-->
<!--              </div>-->
<!--              <div class="expert-badge">技术专家</div>-->
<!--            </div>-->
<!--            <div class="expert-info">-->
<!--              <h3>李明华</h3>-->
<!--              <p class="expert-title">云原生技术专家</p>-->
<!--              <p class="expert-desc">-->
<!--                12年DevOps和云原生技术经验，Kubernetes认证专家，专注于容器化和微服务架构设计，曾帮助多家企业实现云原生转型。-->
<!--              </p>-->
<!--              <div class="expert-achievements">-->
<!--                <div class="achievement-item">✓ CKA/CKS认证专家</div>-->
<!--                <div class="achievement-item">✓ CNCF技术委员会成员</div>-->
<!--                <div class="achievement-item">✓ KubeCon演讲嘉宾</div>-->
<!--              </div>-->
<!--              <div class="expert-skills">-->
<!--                <span class="skill-tag">Kubernetes</span>-->
<!--                <span class="skill-tag">微服务</span>-->
<!--                <span class="skill-tag">DevOps</span>-->
<!--                <span class="skill-tag">容器化</span>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->

<!--          <div class="expert-card">-->
<!--            <div class="expert-avatar">-->
<!--              <div class="avatar-placeholder">-->
<!--                <span class="avatar-initial">王</span>-->
<!--              </div>-->
<!--              <div class="expert-badge">安全专家</div>-->
<!--            </div>-->
<!--            <div class="expert-info">-->
<!--              <h3>王安全</h3>-->
<!--              <p class="expert-title">云安全架构师</p>-->
<!--              <p class="expert-desc">-->
<!--                10年网络安全和云安全经验，CISSP认证专家，专注于企业级云安全架构设计和合规性评估，在金融、医疗等高安全要求行业有丰富实践。-->
<!--              </p>-->
<!--              <div class="expert-achievements">-->
<!--                <div class="achievement-item">✓ CISSP/CISM双认证</div>-->
<!--                <div class="achievement-item">✓ 等保测评师资质</div>-->
<!--                <div class="achievement-item">✓ ISO27001主任审核员</div>-->
<!--              </div>-->
<!--              <div class="expert-skills">-->
<!--                <span class="skill-tag">云安全</span>-->
<!--                <span class="skill-tag">合规评估</span>-->
<!--                <span class="skill-tag">风险管理</span>-->
<!--                <span class="skill-tag">零信任</span>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->

<!--          <div class="expert-card">-->
<!--            <div class="expert-avatar">-->
<!--              <div class="avatar-placeholder">-->
<!--                <span class="avatar-initial">陈</span>-->
<!--              </div>-->
<!--              <div class="expert-badge">数据专家</div>-->
<!--            </div>-->
<!--            <div class="expert-info">-->
<!--              <h3>陈数据</h3>-->
<!--              <p class="expert-title">大数据与AI架构师</p>-->
<!--              <p class="expert-desc">-->
<!--                8年大数据和人工智能领域经验，曾在BAT等互联网公司负责大数据平台建设，擅长数据湖、数据中台和AI平台架构设计。-->
<!--              </p>-->
<!--              <div class="expert-achievements">-->
<!--                <div class="achievement-item">✓ 大数据技术专家认证</div>-->
<!--                <div class="achievement-item">✓ TensorFlow开发者认证</div>-->
<!--                <div class="achievement-item">✓ Spark贡献者</div>-->
<!--              </div>-->
<!--              <div class="expert-skills">-->
<!--                <span class="skill-tag">大数据</span>-->
<!--                <span class="skill-tag">机器学习</span>-->
<!--                <span class="skill-tag">数据湖</span>-->
<!--                <span class="skill-tag">实时计算</span>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->

<!--          <div class="expert-card">-->
<!--            <div class="expert-avatar">-->
<!--              <div class="avatar-placeholder">-->
<!--                <span class="avatar-initial">刘</span>-->
<!--              </div>-->
<!--              <div class="expert-badge">业务专家</div>-->
<!--            </div>-->
<!--            <div class="expert-info">-->
<!--              <h3>刘业务</h3>-->
<!--              <p class="expert-title">数字化转型顾问</p>-->
<!--              <p class="expert-desc">-->
<!--                13年企业数字化转型咨询经验，曾在麦肯锡、德勤等知名咨询公司任职，深度参与多个行业的数字化转型项目，具备丰富的业务洞察力。-->
<!--              </p>-->
<!--              <div class="expert-achievements">-->
<!--                <div class="achievement-item">✓ PMP项目管理认证</div>-->
<!--                <div class="achievement-item">✓ 数字化转型专家</div>-->
<!--                <div class="achievement-item">✓ 行业白皮书主编</div>-->
<!--              </div>-->
<!--              <div class="expert-skills">-->
<!--                <span class="skill-tag">业务分析</span>-->
<!--                <span class="skill-tag">流程优化</span>-->
<!--                <span class="skill-tag">变革管理</span>-->
<!--                <span class="skill-tag">ROI评估</span>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->

<!--          <div class="expert-card">-->
<!--            <div class="expert-avatar">-->
<!--              <div class="avatar-placeholder">-->
<!--                <span class="avatar-initial">赵</span>-->
<!--              </div>-->
<!--              <div class="expert-badge">运维专家</div>-->
<!--            </div>-->
<!--            <div class="expert-info">-->
<!--              <h3>赵运维</h3>-->
<!--              <p class="expert-title">SRE与运维架构师</p>-->
<!--              <p class="expert-desc">-->
<!--                11年运维和SRE经验，曾在Google、Netflix等公司工作，专注于大规模分布式系统的可靠性工程，在高可用架构设计方面有深厚造诣。-->
<!--              </p>-->
<!--              <div class="expert-achievements">-->
<!--                <div class="achievement-item">✓ Google SRE认证</div>-->
<!--                <div class="achievement-item">✓ 高可用系统设计专家</div>-->
<!--                <div class="achievement-item">✓ 《SRE实践指南》译者</div>-->
<!--              </div>-->
<!--              <div class="expert-skills">-->
<!--                <span class="skill-tag">SRE</span>-->
<!--                <span class="skill-tag">高可用</span>-->
<!--                <span class="skill-tag">性能优化</span>-->
<!--                <span class="skill-tag">故障处理</span>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </section>-->

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
                  <path
                    d="M6 9L12 15L18 9"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
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
                <path
                  d="M12 2L20 7V17L12 22L4 17V7L12 2Z"
                  stroke="currentColor"
                  stroke-width="2"
                />
                <path
                  d="M12 8V16M8 10L16 14M8 14L16 10"
                  stroke="currentColor"
                  stroke-width="2"
                />
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
                  <path
                    d="M5 12H19M19 12L12 5M19 12L12 19"
                    stroke="currentColor"
                    stroke-width="2"
                  />
                </svg>
              </a>
              <a href="#case-studies" class="btn-secondary">
                <span>成功案例</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M15 3H21V9M9 21H3V15M21 3L14 10M3 21L10 14"
                    stroke="currentColor"
                    stroke-width="2"
                  />
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
import { ref, onMounted, onUnmounted } from 'vue';

// 页面元数据
definePageMeta({
  layout: "default",
  title: "云战略咨询规划 - ZHILING ARK TECHNOLOGY",
  description:
    "ZHILING ARK TECHNOLOGY提供专业的云战略咨询规划服务，助力企业数字化转型升级",
});

// SEO 头部信息
useHead({
  title: "云战略咨询规划 - ZHILING ARK TECHNOLOGY",
  meta: [
    {
      name: "description",
      content:
        "专业的云战略规划与咨询服务，基于前沿技术和丰富经验，为企业量身定制云计算战略蓝图，助力数字化转型升级",
    },
    {
      name: "keywords",
      content:
        "云战略,云咨询,云规划,数字化转型,云计算战略,企业云服务,云架构设计",
    },
  ],
});

// 流程步骤数据
const processSteps = [
  {
    title: "需求调研分析",
    description: "深入了解企业业务需求、技术现状和发展目标",
    details: ["业务流程梳理", "技术架构评估", "痛点问题识别"],
  },
  {
    title: "现状全面评估",
    description: "评估现有IT基础设施、应用系统和数据架构",
    details: ["基础设施审计", "应用系统分析", "数据架构评估"],
  },
  {
    title: "战略方案制定",
    description: "制定详细的云战略规划和实施路线图",
    details: ["战略目标设定", "技术路线规划", "实施计划制定"],
  },
  {
    title: "方案交付实施",
    description: "提供完整的咨询报告和实施指导",
    details: ["详细报告交付", "实施指导培训", "持续支持服务"],
  },
];

// FAQ数据
const faqList = ref([
  {
    question: "云战略咨询服务包含哪些内容？",
    answer:
      "我们的云战略咨询服务包括现状评估、需求分析、架构设计、迁移规划、安全合规、成本优化、人员培训等全方位服务，为企业提供从规划到实施的完整解决方案。",
    isOpen: false,
  },
  {
    question: "云化转型需要多长时间？",
    answer:
      "云化转型的时间因企业规模和复杂度而异。一般来说，中小企业需要3-6个月，大型企业可能需要6-18个月。我们会根据您的具体情况制定详细的时间规划。",
    isOpen: false,
  },
  {
    question: "如何保证数据安全和合规性？",
    answer:
      "我们严格遵循国际安全标准和行业最佳实践，提供多层次的安全防护体系，包括数据加密、访问控制、审计日志等，确保满足各行业的合规要求。",
    isOpen: false,
  },
  {
    question: "云化后的成本如何控制？",
    answer:
      "我们提供专业的成本优化建议，包括资源右配、预留实例、自动伸缩等策略，通常可以帮助企业节省30-60%的IT成本，同时提升系统性能和可靠性。",
    isOpen: false,
  },
  {
    question: "是否提供后续的技术支持？",
    answer:
      "是的，我们提供7x24小时的技术支持服务，包括系统监控、故障处理、性能优化、安全更新等，确保您的云环境稳定高效运行。",
    isOpen: false,
  },
]);

// FAQ交互方法
const toggleFaq = (index) => {
  faqList.value[index].isOpen = !faqList.value[index].isOpen;
};

// 滚动动画系统
let observers = [];

const initScrollAnimations = () => {
  const animatedElements = document.querySelectorAll('.animate-on-scroll');
  
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };
  
  const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  };
  
  animatedElements.forEach(element => {
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    observer.observe(element);
    observers.push(observer);
  });
};

onMounted(() => {
  // 初始化滚动动画
  setTimeout(() => {
    initScrollAnimations();
  }, 100);
});

onUnmounted(() => {
  // 清理所有观察者
  observers.forEach(observer => observer.disconnect());
  observers = [];
});
</script>

<style scoped>
/* 添加页面滚动动画系统 */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes pulse {
  0% {
    transform: scale(1);
    opacity: 0.8;
  }
  50% {
    transform: scale(1.1);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 0.8;
  }
}

@keyframes float {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0px);
  }
}

@keyframes shimmer {
  0% {
    background-position: -100% 0;
  }
  100% {
    background-position: 100% 0;
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

.animate-on-scroll {
  opacity: 0;
  transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

.animate-on-scroll.fadeInUp {
  transform: translateY(30px);
}

.animate-on-scroll.fadeInLeft {
  transform: translateX(-30px);
}

.animate-on-scroll.fadeInRight {
  transform: translateX(30px);
}

.animate-on-scroll.scaleIn {
  transform: scale(0.9);
}

.animate-on-scroll.visible {
  opacity: 1;
  transform: translate(0) scale(1);
}

.animate-on-scroll.pulse.visible {
  animation: pulse 2s infinite ease-in-out;
}

.animate-on-scroll.float.visible {
  animation: float 3s infinite ease-in-out;
}

.shimmer-effect {
  background: linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0) 100%);
  background-size: 200% 100%;
  animation: shimmer 2s infinite;
}

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
  background: linear-gradient(
    135deg,
    var(--bg-color) 0%,
    var(--bg-secondary) 100%
  );
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
  background: linear-gradient(
    45deg,
    var(--primary-color),
    var(--primary-color-light)
  );
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  animation: hexagonFloat 8s ease-in-out infinite;
}

.hexagon:nth-child(1) {
  top: 10%;
  left: 10%;
}
.hexagon:nth-child(2) {
  top: 20%;
  left: 80%;
}
.hexagon:nth-child(3) {
  top: 40%;
  left: 15%;
}
.hexagon:nth-child(4) {
  top: 60%;
  left: 85%;
}
.hexagon:nth-child(5) {
  top: 80%;
  left: 20%;
}
.hexagon:nth-child(6) {
  top: 15%;
  left: 60%;
}
.hexagon:nth-child(7) {
  top: 70%;
  left: 60%;
}
.hexagon:nth-child(8) {
  top: 30%;
  left: 40%;
}
.hexagon:nth-child(9) {
  top: 50%;
  left: 70%;
}
.hexagon:nth-child(10) {
  top: 25%;
  left: 30%;
}
.hexagon:nth-child(11) {
  top: 75%;
  left: 40%;
}
.hexagon:nth-child(12) {
  top: 45%;
  left: 90%;
}

@keyframes hexagonFloat {
  0%,
  100% {
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
  background: linear-gradient(
    90deg,
    transparent,
    var(--primary-color),
    transparent
  );
  animation: circuitFlow 6s linear infinite;
}

.circuit-line:nth-child(1) {
  top: 20%;
  width: 200px;
  left: 10%;
}
.circuit-line:nth-child(2) {
  top: 40%;
  width: 150px;
  right: 10%;
}
.circuit-line:nth-child(3) {
  top: 60%;
  width: 180px;
  left: 20%;
}
.circuit-line:nth-child(4) {
  top: 80%;
  width: 120px;
  right: 20%;
}
.circuit-line:nth-child(5) {
  top: 30%;
  width: 160px;
  left: 50%;
}
.circuit-line:nth-child(6) {
  top: 70%;
  width: 140px;
  right: 30%;
}
.circuit-line:nth-child(7) {
  top: 50%;
  width: 100px;
  left: 70%;
}
.circuit-line:nth-child(8) {
  top: 90%;
  width: 130px;
  left: 40%;
}

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
  0%,
  100% {
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
  background: linear-gradient(
    135deg,
    var(--primary-color),
    var(--primary-color-light)
  );
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

.btn-primary,
.btn-outline,
.btn-secondary {
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
  background: linear-gradient(
    135deg,
    var(--primary-color),
    var(--primary-color-dark)
  );
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
  background: linear-gradient(
    135deg,
    var(--card-bg),
    var(--primary-color-light)
  );
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
  padding: 120px 0;
  background: var(--bg-secondary);
  position: relative;
  overflow: hidden;
}

.process-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: radial-gradient(circle at 10% 20%, rgba(99, 102, 241, 0.05) 0%, transparent 50%),
                    radial-gradient(circle at 90% 80%, rgba(99, 102, 241, 0.05) 0%, transparent 50%);
  z-index: 0;
}

.process-section .section-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, var(--primary-color), var(--primary-color-dark));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
}

.process-section .section-subtitle {
  font-size: 1.1rem;
  max-width: 700px;
  margin: 0 auto 3rem;
  color: var(--text-secondary);
}

.process-section .header-badge {
  position: relative;
  overflow: hidden;
}

.process-section .badge-icon {
  animation: spin 10s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.process-timeline {
  max-width: 1200px;
  margin: 60px auto 0;
  position: relative;
  padding: 20px 0;
}

.timeline-track {
  position: absolute;
  top: 0;
  left: 50%;
  width: 4px;
  height: 100%;
  background: linear-gradient(to bottom, var(--primary-color-light), var(--primary-color-dark));
  transform: translateX(-50%);
  z-index: 1;
  border-radius: 4px;
  box-shadow: 0 0 15px rgba(99, 102, 241, 0.3);
}

.process-steps {
  position: relative;
  z-index: 2;
}

.process-step {
  display: flex;
  margin-bottom: 80px;
  position: relative;
  z-index: 2;
}

.process-step:last-child {
  margin-bottom: 0;
}

.step-right {
  flex-direction: row-reverse;
}

.step-connector {
  position: absolute;
  top: 30px;
  width: 100px;
  height: 3px;
  background: linear-gradient(90deg, var(--primary-color-light), var(--primary-color));
  z-index: 1;
}

.process-step:not(.step-right) .step-connector {
  left: 60px;
}

.step-right .step-connector {
  right: 60px;
}

.step-circle {
  width: 60px;
  height: 60px;
  background: linear-gradient(
    135deg,
    var(--primary-color),
    var(--primary-color-dark)
  );
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 3;
  box-shadow: 0 4px 20px rgba(99, 102, 241, 0.3);
  margin: 0 40px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.step-circle:hover {
  transform: scale(1.1);
  box-shadow: 0 8px 30px rgba(99, 102, 241, 0.5);
}

.pulse-ring {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: rgba(99, 102, 241, 0.3);
  z-index: -1;
  animation: pulse-ring 2s cubic-bezier(0.215, 0.61, 0.355, 1) infinite;
}

@keyframes pulse-ring {
  0% {
    transform: scale(0.95);
    opacity: 0.7;
  }
  50% {
    transform: scale(1.2);
    opacity: 0;
  }
  100% {
    transform: scale(0.95);
    opacity: 0;
  }
}

.step-number {
  color: white;
  font-size: 1.2rem;
  font-weight: 700;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.step-card {
  flex: 1;
  background: var(--card-bg);
  border-radius: 20px;
  padding: 30px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  border: 1px solid var(--border-color);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
  overflow: hidden;
  max-width: 500px;
}

.step-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 5px;
  background: linear-gradient(90deg, var(--primary-color), var(--primary-color-dark));
}

.step-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.12);
}

.step-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  border-bottom: 1px solid var(--border-color);
  padding-bottom: 15px;
}

.step-header h3 {
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--text-primary);
  margin: 0;
}

.step-icon {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary-color);
  transition: transform 0.3s ease;
}

.step-card:hover .step-icon {
  transform: rotate(45deg);
}

.step-card p {
  color: var(--text-secondary);
  line-height: 1.7;
  margin-bottom: 20px;
  font-size: 1rem;
}

.step-details {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 20px;
  padding: 15px;
  background: var(--bg-secondary);
  border-radius: 12px;
}

.detail-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 12px;
  border-radius: 8px;
  transition: all 0.3s ease;
  background: rgba(255, 255, 255, 0.05);
}

.detail-item:hover {
  background: rgba(99, 102, 241, 0.1);
  transform: translateX(5px);
}

.detail-icon {
  width: 24px;
  height: 24px;
  background: var(--primary-color);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  font-weight: 600;
  transition: all 0.3s ease;
}

.detail-item:hover .detail-icon {
  transform: scale(1.1);
  background: linear-gradient(135deg, var(--primary-color), var(--primary-color-dark));
}

.detail-text {
  font-size: 0.95rem;
  color: var(--text-secondary);
  font-weight: 500;
  transition: color 0.3s ease;
}

.detail-item:hover .detail-text {
  color: var(--text-primary);
}

.step-progress-bar {
  height: 6px;
  background: rgba(99, 102, 241, 0.1);
  border-radius: 3px;
  overflow: hidden;
  margin-top: 20px;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, var(--primary-color-light), var(--primary-color));
  border-radius: 3px;
  transition: width 1s ease;
}

/* Animation for scaleInX */
@keyframes scaleInX {
  from {
    transform: scaleX(0);
    opacity: 0;
  }
  to {
    transform: scaleX(1);
    opacity: 1;
  }
}

.scaleInX {
  animation-name: scaleInX;
  transform-origin: left;
}

/* Animation for bounceIn */
@keyframes bounceIn {
  0%, 20%, 40%, 60%, 80%, 100% {
    transition-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
  }
  0% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
  20% {
    transform: scale3d(1.1, 1.1, 1.1);
  }
  40% {
    transform: scale3d(0.9, 0.9, 0.9);
  }
  60% {
    opacity: 1;
    transform: scale3d(1.03, 1.03, 1.03);
  }
  80% {
    transform: scale3d(0.97, 0.97, 0.97);
  }
  100% {
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }
}

.bounceIn {
  animation-name: bounceIn;
  animation-duration: 0.75s;
}

/* Animation for rotateIn */
@keyframes rotateIn {
  from {
    transform-origin: center;
    transform: rotate3d(0, 0, 1, -200deg);
    opacity: 0;
  }
  to {
    transform-origin: center;
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}

.rotateIn {
  animation-name: rotateIn;
}

/* Animation for slideInRight */
@keyframes slideInRight {
  from {
    transform: translate3d(50px, 0, 0);
    opacity: 0;
  }
  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}

.slideInRight {
  animation-name: slideInRight;
}

/* Responsive styles */
@media (max-width: 992px) {
  .timeline-track {
    left: 30px;
  }
  
  .process-step, .step-right {
    flex-direction: row;
    margin-left: 30px;
  }
  
  .step-circle {
    margin: 0 20px 0 0;
  }
  
  .step-card {
    max-width: 100%;
  }
  
  .step-connector {
    display: none;
  }
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
  position: relative;
  overflow: hidden;
}

.case-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
}

.case-card:hover::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0) 100%);
  z-index: 1;
  animation: shimmer 1.5s forwards;
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
  background: linear-gradient(
    135deg,
    var(--primary-color),
    var(--primary-color-light)
  );
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 600;
  font-size: 0.9rem;
  position: relative;
  z-index: 2;
}

.company-logo.float.visible {
  animation: float 3s infinite ease-in-out;
}

.company-logo::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 12px;
  background: inherit;
  filter: blur(10px);
  opacity: 0.5;
  z-index: -1;
  transition: all 0.3s ease;
}

.company-logo:hover::after {
  opacity: 0.8;
  filter: blur(15px);
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
  position: relative;
  overflow: hidden;
  display: inline-block;
  transition: all 0.3s ease;
}

.industry-tag:hover {
  transform: scale(1.05);
  box-shadow: 0 5px 15px rgba(var(--primary-color-rgb), 0.3);
}

.industry-tag.scaleIn.visible {
  animation: scaleIn 0.5s ease-out forwards;
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
  position: relative;
  transition: all 0.3s ease;
}

.result-value::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 3px;
  background: var(--primary-color);
  transition: width 0.5s ease;
}

.case-result:hover .result-value::after {
  width: 100%;
}

.case-result.fadeInRight.visible .result-value {
  animation: fadeInRight 0.5s ease-out forwards, pulse 3s infinite ease-in-out 0.5s;
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
  padding: 8px 12px;
  border-radius: 8px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.highlight-item:hover {
  background: rgba(var(--primary-color-rgb), 0.05);
  transform: translateX(5px);
  color: var(--text-primary);
}

.highlight-item svg {
  transition: all 0.3s ease;
  flex-shrink: 0;
}

.highlight-item:hover svg {
  transform: scale(1.2);
  color: var(--primary-color);
}

.highlight-item.fadeInLeft.visible {
  animation: fadeInLeft 0.5s ease-out forwards;
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
  background: linear-gradient(
    135deg,
    var(--primary-color),
    var(--primary-color-light)
  );
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

.expert-achievements {
  background: var(--bg-color);
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 20px;
  text-align: left;
}

.achievement-item {
  color: var(--text-secondary);
  font-size: 0.9rem;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  gap: 8px;
}

.achievement-item:last-child {
  margin-bottom: 0;
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
  background: linear-gradient(
    135deg,
    var(--primary-color),
    var(--primary-color-dark)
  );
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
