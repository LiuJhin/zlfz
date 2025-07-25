<template>
  <div class="cloud-service-page">
    <div class="service-hero">
      <div class="hero-container">
        <div class="hero-content">
          <h1 class="hero-title">{{ $t("cloudMigration.hero.title") }}</h1>
          <p class="hero-subtitle">{{ $t("cloudMigration.hero.subtitle") }}</p>
          <p class="hero-description">
            {{ $t("cloudMigration.hero.description") }}
          </p>
          <div class="hero-buttons">
            <a href="/contact" class="btn-primary">{{
              $t("cloudMigration.hero.button")
            }}</a>
            <a href="#service-details" class="btn-secondary">{{
              $t("cloudMigration.hero.learn_more")
            }}</a>
          </div>
        </div>
        <div class="hero-visual">
          <div class="service-icon">
            <svg width="120" height="120" viewBox="0 0 24 24" fill="none">
              <path
                d="M7 16L12 21L17 16M7 8L12 3L17 8"
                stroke="currentColor"
                stroke-width="2"
                fill="none"
              />
              <path d="M12 21V3" stroke="currentColor" stroke-width="2" />
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
                d="M4 12H20"
                stroke="currentColor"
                stroke-width="1"
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
          <h2>{{ $t("cloudMigration.service_details.title") }}</h2>
          <p>{{ $t("cloudMigration.service_details.subtitle") }}</p>
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
            <h3>
              {{ $t("cloudMigration.service_details.MigrationAssessment") }}
            </h3>
            <p>{{ $t("cloudMigration.service_details.MigrationPlan") }}</p>
          </div>

          <div class="feature-card">
            <div class="feature-icon">
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
              {{ $t("cloudMigration.service_details.MigrationExecution") }}
            </h3>
            <p>
              {{
                $t(
                  "cloudMigration.service_details.MigrationExecutionDescription"
                )
              }}
            </p>
          </div>

          <div class="feature-card">
            <div class="feature-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                <path
                  d="M4 7V4C4 2.89543 4.89543 2 6 2H18C19.1046 2 20 2.89543 20 4V7M4 7C2.89543 7 2 7.89543 2 9V19C2 20.1046 2.89543 21 4 21H20C21.1046 21 22 20.1046 22 19V9C22 7.89543 21.1046 7 20 7M4 7H20"
                  stroke="currentColor"
                  stroke-width="2"
                />
                <circle cx="12" cy="14" r="2" fill="currentColor" />
              </svg>
            </div>
            <h3>
              {{ $t("cloudMigration.service_details.MigrationValidation") }}
            </h3>
            <p>
              {{
                $t(
                  "cloudMigration.service_details.MigrationValidationDescription"
                )
              }}
            </p>
          </div>

          <div class="feature-card">
            <div class="feature-icon">
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
              {{ $t("cloudMigration.service_details.InfrastructureMigration") }}
            </h3>
            <p>
              {{
                $t(
                  "cloudMigration.service_details.InfrastructureMigrationDescription"
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
              {{ $t("cloudMigration.service_details.PostMigrationSupport") }}
            </h3>
            <p>
              {{
                $t(
                  "cloudMigration.service_details.PostMigrationSupportDescription"
                )
              }}
            </p>
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
                  d="M9 12L11 14L15 10"
                  stroke="currentColor"
                  stroke-width="2"
                />
              </svg>
            </div>
            <h3>
              {{ $t("cloudMigration.service_details.SecurityAssurance") }}
            </h3>
            <p>
              {{
                $t(
                  "cloudMigration.service_details.SecurityAssuranceDescription"
                )
              }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="migration-strategies">
      <div class="container">
        <div class="section-header">
          <h2>{{ $t("cloudMigration.service_details.MigrationStrategy") }}</h2>
          <p>
            {{
              $t("cloudMigration.service_details.MigrationStrategyDescription")
            }}
          </p>
        </div>

        <div class="strategies-grid">
          <div class="strategy-card">
            <div class="strategy-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                <path
                  d="M7 16L12 21L17 16M7 8L12 3L17 8"
                  stroke="currentColor"
                  stroke-width="2"
                  fill="none"
                />
                <path d="M12 21V3" stroke="currentColor" stroke-width="2" />
              </svg>
            </div>
            <h3>Lift and Shift</h3>
            <p>
              {{ $t("cloudMigration.service_details.FastMigration") }}
            </p>
            <div class="strategy-benefits">
              <span class="benefit-tag">{{
                $t("cloudMigration.service_details.fast")
              }}</span>
              <span class="benefit-tag">{{
                $t("cloudMigration.service_details.low_risk")
              }}</span>
              <span class="benefit-tag">{{
                $t("cloudMigration.service_details.cost_low")
              }}</span>
            </div>
          </div>

          <div class="strategy-card">
            <div class="strategy-icon">
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
              {{ $t("cloudMigration.service_details.replatformization") }}
            </h3>
            <p>
              {{
                $t(
                  "cloudMigration.service_details.replatformizationDescription"
                )
              }}
            </p>
            <div class="strategy-benefits">
              <span class="benefit-tag">{{
                $t("cloudMigration.service_details.OptimizingPerformance")
              }}</span>
              <span class="benefit-tag">{{
                $t("cloudMigration.service_details.cloud_native")
              }}</span>
              <span class="benefit-tag">{{
                $t("cloudMigration.service_details.scalable")
              }}</span>
            </div>
          </div>

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
            <h3>{{ $t("cloudMigration.service_details.ReArchitecting") }}</h3>
            <p>
              {{ $t("cloudMigration.service_details.RestructureDescription") }}
            </p>
            <div class="strategy-benefits">
              <span class="benefit-tag">{{
                $t("cloudMigration.service_details.modernize")
              }}</span>
              <span class="benefit-tag">{{
                $t("cloudMigration.service_details.high_availability")
              }}</span>
              <span class="benefit-tag">{{
                $t("cloudMigration.service_details.agile")
              }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="migration-process">
      <div class="container">
        <div class="section-header">
          <h2>{{ $t("cloudMigration.service_details.migration_process") }}</h2>
          <p>
            {{
              $t("cloudMigration.service_details.migration_process_description")
            }}
          </p>
        </div>

        <div class="process-timeline">
          <div class="process-step">
            <div class="step-number">01</div>
            <div class="step-content">
              <h3>
                {{
                  $t("cloudMigration.service_details.assessment_and_planning")
                }}
              </h3>
              <p>
                {{
                  $t(
                    "cloudMigration.service_details.assessment_and_planning_description"
                  )
                }}
              </p>
              <div class="step-details">
                <span
                  >•
                  {{
                    $t("cloudMigration.service_details.ApplicationListSorting")
                  }}</span
                >
                <span
                  >•
                  {{
                    $t("cloudMigration.service_details.DependencyAnalysis")
                  }}</span
                >
                <span
                  >•
                  {{
                    $t("cloudMigration.service_details.RiskAssessment")
                  }}</span
                >
              </div>
            </div>
          </div>

          <div class="process-step">
            <div class="step-number">02</div>
            <div class="step-content">
              <h3>
                {{
                  $t("cloudMigration.service_details.environmentPreparation")
                }}
              </h3>
              <p>
                {{ $t("cloudMigration.service_details.cloudEnvironmentSetup") }}
              </p>
              <div class="step-details">
                <span
                  >• {{ $t("cloudMigration.service_details.cloudSetup") }}</span
                >
                <span
                  >•
                  {{
                    $t("cloudMigration.service_details.networkConfiguration")
                  }}</span
                >
                <span
                  >•
                  {{
                    $t("cloudMigration.service_details.securitySettings")
                  }}</span
                >
              </div>
            </div>
          </div>

          <div class="process-step">
            <div class="step-number">03</div>
            <div class="step-content">
              <h3>{{ $t("cloudMigration.service_details.pilotMigration") }}</h3>
              <p>
                {{ $t("cloudMigration.service_details.pilotAppSelection") }}
              </p>
              <div class="step-details">
                <span
                  >•
                  {{
                    $t("cloudMigration.service_details.pilotApplication")
                  }}</span
                >
                <span
                  >•
                  {{
                    $t("cloudMigration.service_details.migrationExecution")
                  }}</span
                >
                <span
                  >•
                  {{
                    $t("cloudMigration.service_details.resultVerification")
                  }}</span
                >
              </div>
            </div>
          </div>

          <div class="process-step">
            <div class="step-number">04</div>
            <div class="step-content">
              <h3>{{ $t("cloudMigration.service_details.batchMigration") }}</h3>
              <p>{{ $t("cloudMigration.service_details.phasedMigration") }}</p>
              <div class="step-details">
                <span
                  >•
                  {{
                    $t("cloudMigration.service_details.stepByStepMigration")
                  }}</span
                >
                <span
                  >•
                  {{
                    $t("cloudMigration.service_details.realTimeMonitoring")
                  }}</span
                >
                <span
                  >•
                  {{ $t("cloudMigration.service_details.issueHandling") }}</span
                >
              </div>
            </div>
          </div>

          <div class="process-step">
            <div class="step-number">05</div>
            <div class="step-content">
              <h3>{{ $t("cloudMigration.service_details.testValidation") }}</h3>
              <p>
                {{ $t("cloudMigration.service_details.fullSystemTesting") }}
              </p>
              <div class="step-details">
                <span
                  >•
                  {{
                    $t("cloudMigration.service_details.functionalTesting")
                  }}</span
                >
                <span
                  >•
                  {{
                    $t("cloudMigration.service_details.performanceTesting")
                  }}</span
                >
                <span
                  >•
                  {{
                    $t("cloudMigration.service_details.securityTesting")
                  }}</span
                >
              </div>
            </div>
          </div>

          <div class="process-step">
            <div class="step-number">06</div>
            <div class="step-content">
              <h3>
                {{ $t("cloudMigration.service_details.goLiveAndOptimization") }}
              </h3>
              <p>
                {{ $t("cloudMigration.service_details.productionCutover") }}
              </p>
              <div class="step-details">
                <span
                  >•
                  {{
                    $t("cloudMigration.service_details.performanceTuning")
                  }}</span
                >
                <span
                  >•
                  {{ $t("cloudMigration.service_details.opsHandover") }}</span
                >
                <span
                  >•
                  {{
                    $t("cloudMigration.service_details.migrationToolsAndTech")
                  }}</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="migration-tools">
      <div class="container">
        <div class="section-header">
          <h2>
            {{ $t("cloudMigration.service_details.migrationToolsAndTech") }}
          </h2>
          <p>{{ $t("cloudMigration.service_details.toolsStack") }}</p>
        </div>

        <div class="tools-categories">
          <div class="tool-category">
            <h3>{{ $t("cloudMigration.service_details.assessmentTools") }}</h3>
            <div class="tool-items">
              <div class="tool-item">AWS Application Discovery Service</div>
              <div class="tool-item">Azure Migrate</div>
              <div class="tool-item">Google Cloud Migration Center</div>
              <div class="tool-item">CloudEndure</div>
            </div>
          </div>

          <div class="tool-category">
            <h3>{{ $t("cloudMigration.service_details.migrationTools") }}</h3>
            <div class="tool-items">
              <div class="tool-item">AWS Server Migration Service</div>
              <div class="tool-item">Azure Site Recovery</div>
              <div class="tool-item">VMware vMotion</div>
              <div class="tool-item">Carbonite Migrate</div>
            </div>
          </div>

          <div class="tool-category">
            <h3>{{ $t("cloudMigration.service_details.dataMigration") }}</h3>
            <div class="tool-items">
              <div class="tool-item">AWS Database Migration Service</div>
              <div class="tool-item">Azure Database Migration Service</div>
              <div class="tool-item">Google Cloud Database Migration</div>
              <div class="tool-item">Attunity Replicate</div>
            </div>
          </div>

          <div class="tool-category">
            <h3>{{ $t("cloudMigration.service_details.containerization") }}</h3>
            <div class="tool-items">
              <div class="tool-item">Docker</div>
              <div class="tool-item">Kubernetes</div>
              <div class="tool-item">OpenShift</div>
              <div class="tool-item">Rancher</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="success-metrics">
      <div class="container">
        <div class="section-header">
          <h2>{{ $t("cloudMigration.service_details.successMetrics") }}</h2>
          <p>{{ $t("cloudMigration.service_details.migrationSuccessRate") }}</p>
        </div>

        <div class="metrics-grid">
          <div class="metric-item">
            <div class="metric-number">98%</div>
            <div class="metric-label">
              {{ $t("cloudMigration.service_details.migrationSuccessRates") }}
            </div>
            <div class="metric-description">
              {{ $t("cloudMigration.service_details.zeroDataLoss") }}
            </div>
          </div>

          <div class="metric-item">
            <div class="metric-number">
              < 4{{ $t("cloudMigration.service_details.downtimeHours") }}
            </div>
            <div class="metric-label">
              {{ $t("cloudMigration.service_details.averageDowntime") }}
            </div>
            <div class="metric-description">
              {{ $t("cloudMigration.service_details.minimizedDisruption") }}
            </div>
          </div>

          <div class="metric-item">
            <div class="metric-number">30%</div>
            <div class="metric-label">
              {{ $t("cloudMigration.service_details.performanceImprovement") }}
            </div>
            <div class="metric-description">
              {{
                $t("cloudMigration.service_details.postMigrationPerformance")
              }}
            </div>
          </div>

          <div class="metric-item">
            <div class="metric-number">95%</div>
            <div class="metric-label">
              {{ $t("cloudMigration.service_details.customerSatisfaction") }}
            </div>
            <div class="metric-description">
              {{ $t("cloudMigration.service_details.positiveFeedback") }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="migration-checklist">
      <div class="container">
        <div class="section-header">
          <h2>{{ $t("cloudMigration.service_details.migrationChecklist") }}</h2>
          <p>{{ $t("cloudMigration.service_details.keyReadinessItems") }}</p>
        </div>

        <div class="checklist-grid">
          <div class="checklist-category">
            <h3>
              {{ $t("cloudMigration.service_details.technicalReadiness") }}
            </h3>
            <div class="checklist-items">
              <div class="checklist-item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                    stroke="currentColor"
                    stroke-width="2"
                  />
                </svg>
                <span>{{
                  $t("cloudMigration.service_details.appArchitectureDocs")
                }}</span>
              </div>
              <div class="checklist-item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                    stroke="currentColor"
                    stroke-width="2"
                  />
                </svg>
                <span>{{
                  $t("cloudMigration.service_details.dependencyMapping")
                }}</span>
              </div>
              <div class="checklist-item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                    stroke="currentColor"
                    stroke-width="2"
                  />
                </svg>
                <span>{{
                  $t(
                    "cloudMigration.service_details.performanceBaselineTesting"
                  )
                }}</span>
              </div>
            </div>
          </div>

          <div class="checklist-category">
            <h3>
              {{ $t("cloudMigration.service_details.businessReadiness") }}
            </h3>
            <div class="checklist-items">
              <div class="checklist-item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                    stroke="currentColor"
                    stroke-width="2"
                  />
                </svg>
                <span>{{
                  $t("cloudMigration.service_details.businessImpactAssessment")
                }}</span>
              </div>
              <div class="checklist-item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                    stroke="currentColor"
                    stroke-width="2"
                  />
                </svg>
                <span>{{
                  $t("cloudMigration.service_details.userTrainingPlan")
                }}</span>
              </div>
              <div class="checklist-item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                    stroke="currentColor"
                    stroke-width="2"
                  />
                </svg>
                <span>{{
                  $t("cloudMigration.service_details.rollbackPlan")
                }}</span>
              </div>
            </div>
          </div>

          <div class="checklist-category">
            <h3>
              {{ $t("cloudMigration.service_details.securityCompliance") }}
            </h3>
            <div class="checklist-items">
              <div class="checklist-item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                    stroke="currentColor"
                    stroke-width="2"
                  />
                </svg>
                <span>{{
                  $t("cloudMigration.service_details.dataClassification")
                }}</span>
              </div>
              <div class="checklist-item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                    stroke="currentColor"
                    stroke-width="2"
                  />
                </svg>
                <span>{{
                  $t("cloudMigration.service_details.complianceRequirements")
                }}</span>
              </div>
              <div class="checklist-item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                    stroke="currentColor"
                    stroke-width="2"
                  />
                </svg>
                <span>{{
                  $t("cloudMigration.service_details.securityPolicyConfig")
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
            {{ $t("cloudMigration.service_details.startCloudMigration") }}
          </h2>
          <p>
            {{ $t("cloudMigration.service_details.contactMigrationExperts") }}
          </p>
          <a href="/contact" class="btn-primary">{{
            $t("cloudMigration.service_details.freeAssessment")
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
  title: "云迁移服务 - ZHILING ARK TECHNOLOGY",
  description: "安全、高效的云迁移解决方案，端到端的云迁移服务",
});

// SEO 头部信息
useHead({
  title: "云迁移服务 - ZHILING ARK TECHNOLOGY",
  meta: [
    {
      name: "description",
      content:
        "提供端到端的云迁移服务，帮助企业将传统IT基础设施和应用系统安全、平滑地迁移到云平台",
    },
    {
      name: "keywords",
      content: "云迁移,应用迁移,数据迁移,基础设施迁移,云化改造",
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
  animation: migrate-flow 4s ease-in-out infinite;
}

@keyframes migrate-flow {
  0%,
  100% {
    transform: translateY(0px) scale(1);
  }
  50% {
    transform: translateY(-10px) scale(1.02);
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

.migration-strategies {
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
  transition: transform 0.3s ease;
}

.strategy-card:hover {
  transform: translateY(-5px);
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
  margin-bottom: 15px;
}

.strategy-card p {
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 20px;
}

.strategy-benefits {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.benefit-tag {
  background: var(--primary-color-light);
  color: var(--primary-color);
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 500;
}

.migration-process {
  padding: 80px 0;
  background: var(--bg-color);
}

.process-timeline {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.process-step {
  background: var(--card-bg);
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  position: relative;
}

.step-number {
  width: 50px;
  height: 50px;
  background: var(--primary-color);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 20px;
}

.step-content h3 {
  font-size: 1.3rem;
  color: var(--text-primary);
  margin-bottom: 10px;
}

.step-content p {
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 15px;
}

.step-details {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.step-details span {
  color: var(--text-secondary);
  font-size: 0.9rem;
}

.migration-tools {
  padding: 80px 0;
  background: var(--bg-secondary);
}

.tools-categories {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
}

.tool-category h3 {
  font-size: 1.5rem;
  color: var(--text-primary);
  margin-bottom: 20px;
  text-align: center;
}

.tool-items {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.tool-item {
  background: var(--card-bg);
  padding: 12px 16px;
  border-radius: 8px;
  color: var(--text-secondary);
  text-align: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s ease;
}

.tool-item:hover {
  transform: translateY(-2px);
  color: var(--primary-color);
}

.success-metrics {
  padding: 80px 0;
  background: var(--bg-color);
}

.metrics-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
}

.metric-item {
  background: var(--card-bg);
  padding: 40px 30px;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.metric-number {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--primary-color);
  margin-bottom: 10px;
}

.metric-label {
  font-size: 1.2rem;
  color: var(--text-primary);
  margin-bottom: 10px;
  font-weight: 600;
}

.metric-description {
  color: var(--text-secondary);
  font-size: 0.9rem;
  line-height: 1.4;
}

.migration-checklist {
  padding: 80px 0;
  background: var(--bg-secondary);
}

.checklist-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.checklist-category {
  background: var(--card-bg);
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.checklist-category h3 {
  font-size: 1.5rem;
  color: var(--text-primary);
  margin-bottom: 20px;
  text-align: center;
}

.checklist-items {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.checklist-item {
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--text-secondary);
}

.checklist-item svg {
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

  .strategies-grid {
    grid-template-columns: 1fr;
  }

  .process-timeline {
    grid-template-columns: 1fr;
  }

  .tools-categories {
    grid-template-columns: 1fr;
  }

  .metrics-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .checklist-grid {
    grid-template-columns: 1fr;
  }
}
</style>
