<template>
  <div class="cloud-service-page">
    <div class="service-hero">
      <div class="hero-container">
        <div class="hero-content">
          <h1 class="hero-title">
            {{ $t("cloudCostOptimization.hero.title") }}
          </h1>
          <p class="hero-subtitle">
            {{ $t("cloudCostOptimization.hero.subtitle") }}
          </p>
          <p class="hero-description">
            {{ $t("cloudCostOptimization.hero.description") }}
          </p>
          <div class="hero-buttons">
            <a href="/contact" class="btn-primary">{{
              $t("cloudCostOptimization.hero.button")
            }}</a>
            <a href="#service-details" class="btn-secondary">{{
              $t("cloudCostOptimization.hero.learn_more")
            }}</a>
          </div>
        </div>
        <div class="hero-visual">
          <div class="service-icon">
            <svg width="120" height="120" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 2L15.09 8.26L22 9L16 14.74L17.18 21.02L12 18.77L6.82 21.02L8 14.74L2 9L8.91 8.26L12 2Z"
                fill="currentColor"
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
                d="M8 12H16M12 8V16"
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
          <h2>
            {{ $t("cloudCostOptimization.section.costOptimizationService") }}
          </h2>
          <p>
            {{
              $t(
                "cloudCostOptimization.section.comprehensiveCloudCostManagement"
              )
            }}
          </p>
        </div>

        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                <path
                  d="M3 3V21H21V3H3Z"
                  stroke="currentColor"
                  stroke-width="2"
                  fill="none"
                />
                <path
                  d="M7 8L17 8M7 12L17 12M7 16L13 16"
                  stroke="currentColor"
                  stroke-width="2"
                />
              </svg>
            </div>
            <h3>
              {{ $t("cloudCostOptimization.section.costAnalysisReport") }}
            </h3>
            <p>
              {{
                $t("cloudCostOptimization.section.detailedCostUsageAnalysis")
              }}
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
                $t(
                  "cloudCostOptimization.section.resourceRightsizingOptimization"
                )
              }}
            </h3>
            <p>
              {{
                $t(
                  "cloudCostOptimization.section.adjustResourcesAccordingToUsage"
                )
              }}
            </p>
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
            <h3>
              {{ $t("cloudCostOptimization.section.automatedScheduling") }}
            </h3>
            <p>
              {{
                $t("cloudCostOptimization.section.dynamicResourceAdjustment")
              }}
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
            <h3>
              {{
                $t("cloudCostOptimization.section.reservedInstanceManagement")
              }}
            </h3>
            <p>
              {{
                $t(
                  "cloudCostOptimization.section.reservedInstancePurchaseOptimization"
                )
              }}
            </p>
          </div>

          <div class="feature-card">
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
            <h3>
              {{ $t("cloudCostOptimization.section.costMonitoringAndAlerts") }}
            </h3>
            <p>
              {{
                $t(
                  "cloudCostOptimization.section.realTimeCostMonitoringAndBudgetAlert"
                )
              }}
            </p>
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
            <h3>{{ $t("cloudCostOptimization.section.complianceCheck") }}</h3>
            <p>
              {{
                $t("cloudCostOptimization.section.ensureComplianceWithPolicies")
              }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="cost-savings">
      <div class="container">
        <div class="section-header">
          <h2>{{ $t("cloudCostOptimization.section.costSavingPotential") }}</h2>
          <p>
            {{ $t("cloudCostOptimization.section.averageCustomerSavings") }}
          </p>
        </div>

        <div class="savings-stats">
          <div class="stat-item">
            <div class="stat-number">30-50%</div>
            <div class="stat-label">
              {{ $t("cloudCostOptimization.section.averageCostSavings") }}
            </div>
          </div>

          <div class="stat-item">
            <div class="stat-number">
              90{{ $t("cloudCostOptimization.section.days") }}
            </div>
            <div class="stat-label">
              {{ $t("cloudCostOptimization.section.optimizationCycle") }}
            </div>
          </div>

          <div class="stat-item">
            <div class="stat-number">24/7</div>
            <div class="stat-label">
              {{ $t("cloudCostOptimization.section.continuousMonitoring") }}
            </div>
          </div>

          <div class="stat-item">
            <div class="stat-number">100+</div>
            <div class="stat-label">
              {{ $t("cloudCostOptimization.section.successCases") }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="optimization-strategies">
      <div class="container">
        <div class="section-header">
          <h2>
            {{ $t("cloudCostOptimization.section.optimizationStrategy") }}
          </h2>
          <p>
            {{
              $t(
                "cloudCostOptimization.section.multiDimensionalCostOptimization"
              )
            }}
          </p>
        </div>

        <div class="strategies-grid">
          <div class="strategy-card">
            <div class="strategy-icon">
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
              {{
                $t(
                  "cloudCostOptimization.section.resourceConfigurationOptimization"
                )
              }}
            </h3>
            <ul>
              <li>
                {{
                  $t("cloudCostOptimization.section.instanceTypeOptimization")
                }}
              </li>
              <li>
                {{ $t("cloudCostOptimization.section.storageTypeAdjustment") }}
              </li>
              <li>
                {{
                  $t(
                    "cloudCostOptimization.section.networkConfigurationOptimization"
                  )
                }}
              </li>
              <li>
                {{
                  $t("cloudCostOptimization.section.databasePerformanceTuning")
                }}
              </li>
            </ul>
          </div>

          <div class="strategy-card">
            <div class="strategy-icon">
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
              {{ $t("cloudCostOptimization.section.automationManagement") }}
            </h3>
            <ul>
              <li>{{ $t("cloudCostOptimization.section.autoScaling") }}</li>
              <li>
                {{ $t("cloudCostOptimization.section.scheduledStartStop") }}
              </li>
              <li>
                {{
                  $t("cloudCostOptimization.section.loadBalancerOptimization")
                }}
              </li>
              <li>
                {{
                  $t(
                    "cloudCostOptimization.section.resourceLifecycleManagement"
                  )
                }}
              </li>
            </ul>
          </div>

          <div class="strategy-card">
            <div class="strategy-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 2L15.09 8.26L22 9L16 14.74L17.18 21.02L12 18.77L6.82 21.02L8 14.74L2 9L8.91 8.26L12 2Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <h3>
              {{
                $t(
                  "cloudCostOptimization.section.procurementStrategyOptimization"
                )
              }}
            </h3>
            <ul>
              <li>
                {{
                  $t("cloudCostOptimization.section.reservedInstancePlanning")
                }}
              </li>
              <li>
                {{
                  $t("cloudCostOptimization.section.spotInstanceUtilization")
                }}
              </li>
              <li>
                {{
                  $t("cloudCostOptimization.section.multiCloudCostComparison")
                }}
              </li>
              <li>
                {{
                  $t("cloudCostOptimization.section.contractNegotiationSupport")
                }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="cost-monitoring">
      <div class="container">
        <div class="section-header">
          <h2>
            {{ $t("cloudCostOptimization.section.costMonitoringPlatform") }}
          </h2>
          <p>
            {{
              $t("cloudCostOptimization.section.realTimeVisualCostDashboard")
            }}
          </p>
        </div>

        <div class="monitoring-features">
          <div class="monitoring-item">
            <div class="item-icon">
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
            <h3>
              {{ $t("cloudCostOptimization.section.realTimeCostDashboard") }}
            </h3>
            <p>
              {{
                $t(
                  "cloudCostOptimization.section.intuitiveCostStatusAndTrendAnalysis"
                )
              }}
            </p>
          </div>

          <div class="monitoring-item">
            <div class="item-icon">
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
            <h3>{{ $t("cloudCostOptimization.section.budgetManagement") }}</h3>
            <p>
              {{
                $t(
                  "cloudCostOptimization.section.budgetLimitAndAutoAlertControl"
                )
              }}
            </p>
          </div>

          <div class="monitoring-item">
            <div class="item-icon">
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
            <h3>{{ $t("cloudCostOptimization.section.costAllocation") }}</h3>
            <p>
              {{
                $t(
                  "cloudCostOptimization.section.costAllocationByDepartmentProjectOrTag"
                )
              }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="optimization-process">
      <div class="container">
        <div class="section-header">
          <h2>{{ $t("cloudCostOptimization.section.optimizationProcess") }}</h2>
          <p>
            {{
              $t(
                "cloudCostOptimization.section.systematicCostOptimizationImplementationProcess"
              )
            }}
          </p>
        </div>

        <div class="process-timeline">
          <div class="process-step">
            <div class="step-number">01</div>
            <div class="step-content">
              <h3>
                {{
                  $t("cloudCostOptimization.section.currentStatusAssessment")
                }}
              </h3>
              <p>
                {{
                  $t(
                    "cloudCostOptimization.section.comprehensiveAnalysisOfCurrentCloudResourceUsageAndCost"
                  )
                }}
              </p>
            </div>
          </div>

          <div class="process-step">
            <div class="step-number">02</div>
            <div class="step-content">
              <h3>
                {{
                  $t("cloudCostOptimization.section.opportunityIdentification")
                }}
              </h3>
              <p>
                {{
                  $t(
                    "cloudCostOptimization.section.identifyCostOptimizationOpportunitiesAndPotentialSavings"
                  )
                }}
              </p>
            </div>
          </div>

          <div class="process-step">
            <div class="step-number">03</div>
            <div class="step-content">
              <h3>
                {{ $t("cloudCostOptimization.section.strategyDevelopment") }}
              </h3>
              <p>
                {{
                  $t(
                    "cloudCostOptimization.section.developPersonalizedCostOptimizationStrategy"
                  )
                }}
              </p>
            </div>
          </div>

          <div class="process-step">
            <div class="step-number">04</div>
            <div class="step-content">
              <h3>
                {{
                  $t("cloudCostOptimization.section.optimizationImplementation")
                }}
              </h3>
              <p>
                {{
                  $t(
                    "cloudCostOptimization.section.executeOptimizationMeasuresAndMonitorEffect"
                  )
                }}
              </p>
            </div>
          </div>

          <div class="process-step">
            <div class="step-number">05</div>
            <div class="step-content">
              <h3>
                {{ $t("cloudCostOptimization.section.continuousMonitoring") }}
              </h3>
              <p>
                {{
                  $t(
                    "cloudCostOptimization.section.continuousMonitoringAndStrategyAdjustment"
                  )
                }}
              </p>
            </div>
          </div>

          <div class="process-step">
            <div class="step-number">06</div>
            <div class="step-content">
              <h3>
                {{ $t("cloudCostOptimization.section.effectEvaluation") }}
              </h3>
              <p>
                {{
                  $t(
                    "cloudCostOptimization.section.regularEvaluationOfOptimizationEffectAndROI"
                  )
                }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="pricing-models">
      <div class="container">
        <div class="section-header">
          <h2>{{ $t("cloudCostOptimization.section.serviceModel") }}</h2>
          <p>
            {{
              $t("cloudCostOptimization.section.flexibleServiceModelSelection")
            }}
          </p>
        </div>

        <div class="pricing-grid">
          <div class="pricing-card">
            <div class="pricing-header">
              <h3>
                {{ $t("cloudCostOptimization.section.consultingService") }}
              </h3>
              <div class="pricing-price">
                {{ $t("cloudCostOptimization.section.startingAt50000Yuan") }}
              </div>
            </div>
            <div class="pricing-features">
              <div class="feature-item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                    stroke="currentColor"
                    stroke-width="2"
                  />
                </svg>
                <span>{{
                  $t("cloudCostOptimization.section.costAssessmentReport")
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
                  $t(
                    "cloudCostOptimization.section.optimizationRecommendationPlan"
                  )
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
                  $t("cloudCostOptimization.section.implementationGuidance")
                }}</span>
              </div>
            </div>
          </div>

          <div class="pricing-card featured">
            <div class="pricing-header">
              <h3>{{ $t("cloudCostOptimization.section.managedService") }}</h3>
              <div class="pricing-price">
                {{ $t("cloudCostOptimization.section.amountOfSavings") }}20%
              </div>
              <div class="pricing-badge">
                {{ $t("cloudCostOptimization.section.recommended") }}
              </div>
            </div>
            <div class="pricing-features">
              <div class="feature-item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                    stroke="currentColor"
                    stroke-width="2"
                  />
                </svg>
                <span>{{
                  $t(
                    "cloudCostOptimization.section.fullyManagedOptimizationService"
                  )
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
                  $t(
                    "cloudCostOptimization.section.continuousMonitoringManagement"
                  )
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
                  $t("cloudCostOptimization.section.payPerPerformance")
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
                  $t("cloudCostOptimization.section.dedicatedAccountManager")
                }}</span>
              </div>
            </div>
          </div>

          <div class="pricing-card">
            <div class="pricing-header">
              <h3>
                {{ $t("cloudCostOptimization.section.platformAuthorization") }}
              </h3>
              <div class="pricing-price">
                ¥20,000/{{
                  $t("cloudCostOptimization.section.startingAtPerMonth")
                }}
              </div>
            </div>
            <div class="pricing-features">
              <div class="feature-item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                    stroke="currentColor"
                    stroke-width="2"
                  />
                </svg>
                <span>{{
                  $t("cloudCostOptimization.section.costManagementPlatform")
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
                  $t(
                    "cloudCostOptimization.section.selfServiceOptimizationTools"
                  )
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
                  $t("cloudCostOptimization.section.technicalSupport")
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
              $t("cloudCostOptimization.section.startOptimizingYourCloudCosts")
            }}
          </h2>
          <p>
            {{
              $t(
                "cloudCostOptimization.section.contactOurCostOptimizationExpertsForFreeAssessment"
              )
            }}
          </p>
          <a href="/contact" class="btn-primary">{{
            $t("cloudCostOptimization.section.freeAssessment")
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
  title: "云成本优化服务 - ZHILING ARK TECHNOLOGY",
  description: "智能化云成本管理与优化，帮助企业降低云支出，提升资源利用率",
});

// SEO 头部信息
useHead({
  title: "云成本优化服务 - ZHILING ARK TECHNOLOGY",
  meta: [
    {
      name: "description",
      content:
        "通过专业的成本分析和优化策略，帮助企业降低云支出，提升资源利用率，实现云投资回报最大化",
    },
    {
      name: "keywords",
      content: "云成本优化,资源优化,成本管理,预算控制,云支出分析",
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
  animation: coin-spin 8s linear infinite;
}

@keyframes coin-spin {
  0% {
    transform: rotateY(0deg);
  }
  100% {
    transform: rotateY(360deg);
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

.cost-savings {
  padding: 80px 0;
  background: var(--primary-color);
  color: white;
}

.savings-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 40px;
}

.stat-item {
  text-align: center;
}

.stat-number {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 10px;
}

.stat-label {
  font-size: 1.2rem;
  opacity: 0.9;
}

.optimization-strategies {
  padding: 80px 0;
  background: var(--bg-secondary);
}

.strategies-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.strategy-card {
  background: var(--card-bg);
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.strategy-icon {
  width: 80px;
  height: 80px;
  background: var(--primary-color-light);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  color: var(--primary-color);
}

.strategy-card h3 {
  font-size: 1.5rem;
  color: var(--text-primary);
  margin-bottom: 20px;
}

.strategy-card ul {
  list-style: none;
  padding: 0;
}

.strategy-card li {
  color: var(--text-secondary);
  margin-bottom: 10px;
  padding-left: 20px;
  position: relative;
}

.strategy-card li::before {
  content: "•";
  color: var(--primary-color);
  position: absolute;
  left: 0;
  font-weight: bold;
}

.cost-monitoring {
  padding: 80px 0;
  background: var(--bg-color);
}

.monitoring-features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
}

.monitoring-item {
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

.monitoring-item h3 {
  font-size: 1.5rem;
  color: var(--text-primary);
  margin-bottom: 15px;
}

.monitoring-item p {
  color: var(--text-secondary);
  line-height: 1.6;
}

.optimization-process {
  padding: 80px 0;
  background: var(--bg-secondary);
}

.process-timeline {
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

.pricing-models {
  padding: 80px 0;
  background: var(--bg-color);
}

.pricing-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.pricing-card {
  background: var(--card-bg);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  position: relative;
}

.pricing-card:hover {
  transform: translateY(-5px);
}

.pricing-card.featured {
  border: 2px solid var(--primary-color);
  transform: scale(1.05);
}

.pricing-header {
  background: var(--primary-color-light);
  padding: 30px;
  text-align: center;
  position: relative;
}

.pricing-card.featured .pricing-header {
  background: var(--primary-color);
  color: white;
}

.pricing-badge {
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

.pricing-header h3 {
  font-size: 1.8rem;
  margin-bottom: 10px;
}

.pricing-price {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--primary-color);
}

.pricing-card.featured .pricing-price {
  color: white;
}

.pricing-features {
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

  .savings-stats {
    grid-template-columns: repeat(2, 1fr);
  }

  .strategies-grid {
    grid-template-columns: 1fr;
  }

  .monitoring-features {
    grid-template-columns: 1fr;
  }

  .process-timeline {
    grid-template-columns: 1fr;
  }

  .pricing-grid {
    grid-template-columns: 1fr;
  }

  .pricing-card.featured {
    transform: none;
  }
}
</style>
