<template>
  <div class="technical-services-page">
    <!-- Hero Section with 3D Background -->
    <section class="hero-section">
      <div class="hero-background">
        <!-- Three.js 3D背景 -->
        <ThreeBackground />
      </div>

      <div class="hero-content">
        <div class="container">
          <div class="content-wrapper">
            <div class="hero-text">
              <div class="hero-badge">
                <span class="badge-text">{{
                  $t("technical_services.hero.tag")
                }}</span>
              </div>

              <h1 class="hero-title">
                {{ $t("technical_services.hero.title") }}
                <span class="highlight-text">{{
                  $t("technical_services.hero.subtitle")
                }}</span>
              </h1>

              <div class="typing-text">
                <span class="cursor">|</span>
                <span ref="typingElement" class="typing-content"></span>
              </div>

              <p class="hero-description">
                {{ $t("technical_services.hero.description") }}
              </p>

              <div class="tech-stats">
                <div class="stat-item">
                  <div class="stat-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M13 2L3 14H12L11 22L21 10H12L13 2Z"
                        stroke="currentColor"
                        stroke-width="2"
                      />
                    </svg>
                  </div>
                  <div class="stat-info">
                    <div class="stat-number">99.9%</div>
                    <div class="stat-label">
                      {{ $t("technical_services.hero.system_availability") }}
                    </div>
                  </div>
                </div>
                <div class="stat-item">
                  <div class="stat-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M12 2L20 7V17L12 22L4 17V7L12 2Z"
                        stroke="currentColor"
                        stroke-width="2"
                      />
                    </svg>
                  </div>
                  <div class="stat-info">
                    <div class="stat-number">10x</div>
                    <div class="stat-label">
                      {{
                        $t(
                          "technical_services.hero.deployment_efficiency_improvement"
                        )
                      }}
                    </div>
                  </div>
                </div>
                <div class="stat-item">
                  <div class="stat-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M3 3V21H21"
                        stroke="currentColor"
                        stroke-width="2"
                      />
                      <path
                        d="M7 12L12 7L16 11L21 6"
                        stroke="currentColor"
                        stroke-width="2"
                      />
                    </svg>
                  </div>
                  <div class="stat-info">
                    <div class="stat-number">70%</div>
                    <div class="stat-label">
                      {{ $t("technical_services.hero.cost_optimization") }}
                    </div>
                  </div>
                </div>
              </div>

              <div class="hero-actions">
                <a href="/contact" class="btn-primary">
                  <span>{{
                    $t("technical_services.hero.start_consultation")
                  }}</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M5 12H19M19 12L12 5M19 12L12 19"
                      stroke="currentColor"
                      stroke-width="2"
                    />
                  </svg>
                </a>
                <a href="#services" class="btn-tech">
                  <span>{{
                    $t("technical_services.hero.technical_architecture")
                  }}</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 2L20 7V17L12 22L4 17V7L12 2Z"
                      stroke="currentColor"
                      stroke-width="2"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <div class="hero-visual">
              <div class="tech-terminal">
                <div class="terminal-header">
                  <div class="terminal-controls">
                    <span class="control-dot red"></span>
                    <span class="control-dot yellow"></span>
                    <span class="control-dot green"></span>
                  </div>
                  <div class="terminal-title">cloud-services@production</div>
                </div>
                <div class="terminal-content">
                  <div class="terminal-line">
                    <span class="prompt">$</span>
                    <span class="command"
                      >kubectl get pods --all-namespaces</span
                    >
                  </div>
                  <div class="terminal-output">
                    <div class="output-line">
                      <span class="namespace">kube-system</span>
                      <span class="pod-name">coredns-558bd4d5db-xyz</span>
                      <span class="status running">Running</span>
                    </div>
                    <div class="output-line">
                      <span class="namespace">production</span>
                      <span class="pod-name">api-gateway-7f8b9c-abc</span>
                      <span class="status running">Running</span>
                    </div>
                    <div class="output-line">
                      <span class="namespace">production</span>
                      <span class="pod-name">microservice-a-6d7e8f-def</span>
                      <span class="status running">Running</span>
                    </div>
                  </div>
                  <div class="terminal-line">
                    <span class="prompt">$</span>
                    <span class="command typing-command"
                      >docker build -t app:latest .</span
                    >
                    <span class="cursor-terminal">_</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Section with 3D Cards -->
    <section id="services" class="services-section">
      <div class="container">
        <div class="section-header">
          <div class="header-badge">
            <span class="badge-icon">🔧</span>
            <span class="badge-text">Core Services</span>
          </div>
          <h2>
            {{
              $t(
                "technical_services.hero.professional_technical_services_matrix"
              )
            }}
          </h2>
          {
          <p>
            {{
              $t(
                "technical_services.hero.professional_technical_services_matrix_desc"
              )
            }}
          </p>
          }
        </div>

        <div class="services-grid">
          <div
            class="service-card"
            v-for="(service, index) in services"
            :key="index"
            :style="{ animationDelay: index * 0.1 + 's' }"
          >
            <div class="card-glow"></div>
            <div class="card-header">
              <div class="service-icon">
                <div class="icon-bg"></div>
                <div class="icon-content" v-html="service.icon"></div>
              </div>
              <div class="service-meta">
                <span class="service-category">{{ service.category }}</span>
                <span class="service-level">{{ service.level }}</span>
              </div>
            </div>
            <h3>{{ service.title }}</h3>
            <p>{{ service.description }}</p>
            <div class="tech-tags">
              <span
                class="tech-tag"
                v-for="tech in service.technologies"
                :key="tech"
              >
                {{ tech }}
              </span>
            </div>
            <div class="service-metrics">
              <div class="metric">
                <span class="metric-value">{{ service.performance }}</span>
                <span class="metric-label">{{
                  $t("technical_services.performance_improvement")
                }}</span>
              </div>
              <div class="metric">
                <span class="metric-value">{{ service.reliability }}</span>
                <span class="metric-label">{{
                  $t("technical_services.reliability")
                }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Technology Stack 3D Visualization -->
    <section class="tech-stack-section">
      <div class="container">
        <div class="section-header">
          <div class="header-badge">
            <span class="badge-icon">🚀</span>
            <span class="badge-text">Technology Stack</span>
          </div>
          <h2>
            {{ $t("technical_services.hero.technical_stack_ecosystem") }}
          </h2>
          <p>
            {{
              $t(
                "technical_services.hero.building_modern_cloud_native_architecture"
              )
            }}
          </p>
        </div>

        <div class="tech-visualization">
          <div class="tech-layers">
            <div
              class="tech-layer"
              v-for="(layer, index) in techStack"
              :key="index"
            >
              <div class="layer-header">
                <h3>{{ layer.name }}</h3>
                <span class="layer-description">{{ layer.description }}</span>
              </div>
              <div class="layer-technologies">
                <div
                  class="tech-node"
                  v-for="tech in layer.technologies"
                  :key="tech.name"
                  :class="{ active: tech.featured }"
                >
                  <div class="node-icon" v-html="tech.icon"></div>
                  <div class="node-info">
                    <span class="node-name">{{ tech.name }}</span>
                    <span class="node-version">{{ tech.version }}</span>
                  </div>
                  <div class="node-connections">
                    <div
                      class="connection"
                      v-for="i in tech.connections"
                      :key="i"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="architecture-diagram">
            <canvas
              ref="architectureCanvas"
              class="architecture-canvas"
            ></canvas>
          </div>
        </div>
      </div>
    </section>

    <!-- Process Flow with Interactive Timeline -->
    <section class="process-section">
      <div class="container">
        <div class="section-header">
          <div class="header-badge">
            <span class="badge-text">{{
              $t("technical_services.hero.Implementation")
            }}</span>
          </div>
          <h2>
            {{ $t("technical_services.hero.implementation_process") }}
          </h2>
          <p>
            {{
              $t(
                "technical_services.hero.standardized_devops_implementation_process"
              )
            }}
          </p>
        </div>

        <div class="process-timeline">
          <div class="timeline-container">
            <div class="timeline-line"></div>
            <div
              class="process-step"
              v-for="(step, index) in processSteps"
              :key="index"
              :class="{ active: activeStep >= index }"
            >
              <div
                class="step-connector"
                v-if="index < processSteps.length - 1"
              ></div>
              <div class="step-circle">
                <div class="circle-bg"></div>
                <div class="step-icon" v-html="step.icon"></div>
                <div class="step-number">
                  {{ String(index + 1).padStart(2, "0") }}
                </div>
              </div>
              <div class="step-content">
                <h3>{{ step.title }}</h3>
                <p>{{ step.description }}</p>
                <div class="step-details">
                  <div
                    class="detail-item"
                    v-for="detail in step.details"
                    :key="detail"
                  >
                    <span class="detail-icon">→</span>
                    <span class="detail-text">{{ detail }}</span>
                  </div>
                </div>
                <div class="step-tech">
                  <span
                    class="tech-badge"
                    v-for="tech in step.technologies"
                    :key="tech"
                  >
                    {{ tech }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section with Holographic Effect -->
    <section class="cta-section">
      <div class="cta-background">
        <div class="elegant-waves">
          <div
            class="wave-layer"
            v-for="i in 3"
            :key="i"
            :style="{ '--layer': i }"
          ></div>
        </div>
        <div class="gradient-orbs">
          <div
            class="orb"
            v-for="i in 5"
            :key="i"
            :style="{ '--orb-index': i }"
          ></div>
        </div>
        <div class="subtle-grid">
          <div class="grid-overlay"></div>
        </div>
      </div>

      <div class="container">
        <div class="cta-content">
          <div class="cta-icon">
            <div class="icon-layers">
              <div class="layer layer-1">
                <svg width="80" height="80" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 2L20 7V17L12 22L4 17V7L12 2Z"
                    stroke="currentColor"
                    stroke-width="2"
                  />
                </svg>
              </div>
              <div class="layer layer-2">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M13 2L3 14H12L11 22L21 10H12L13 2Z"
                    stroke="currentColor"
                    stroke-width="2"
                  />
                </svg>
              </div>
            </div>
          </div>

          <h2>{{ $t("technical_services.hero.building_architecture") }}</h2>
          <p>
            {{ $t("technical_services.hero.building_architecture_desc") }}
          </p>

          <div class="cta-features">
            <div class="feature-item">
              <span class="feature-text">{{
                $t("technical_services.hero.microservice_architecture_design")
              }}</span>
            </div>
            <div class="feature-item">
              <span class="feature-text">{{
                $t("technical_services.hero.containerized_deployment")
              }}</span>
            </div>
            <div class="feature-item">
              <span class="feature-text">{{
                $t("technical_services.hero.devsecops_process")
              }}</span>
            </div>
            <div class="feature-item">
              <span class="feature-text">{{
                $t("technical_services.hero.observability_monitoring")
              }}</span>
            </div>
          </div>

          <div class="cta-actions">
            <a href="/contact" class="btn-primary">
              <span>{{
                $t("technical_services.hero.start_technical_consultation")
              }}</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path
                  d="M5 12H19M19 12L12 5M19 12L12 19"
                  stroke="currentColor"
                  stroke-width="2"
                />
              </svg>
            </a>
            <a href="#architecture" class="btn-outline">
              <span>{{
                $t("technical_services.hero.view_architecture_cases")
              }}</span>
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
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useI18n } from "vue-i18n";
import ThreeBackground from "~/components/About/ThreeBackground.vue";

const { t } = useI18n();
// 注册GSAP插件
gsap.registerPlugin(ScrollTrigger);

// 页面元数据
definePageMeta({
  layout: "default",
  title: "云技术专业服务 - ZHILING ARK TECHNOLOGY",
  description: "基于云原生技术栈的专业技术服务，提供企业级云技术实施与优化",
});

// SEO 头部信息
useHead({
  title: "云技术专业服务 - ZHILING ARK TECHNOLOGY",
  meta: [
    {
      name: "description",
      content:
        "基于前沿云原生技术栈，提供企业级云技术实施与优化服务，包括微服务架构、容器化部署、DevOps流程等",
    },
    {
      name: "keywords",
      content: "云技术,云原生,微服务,容器化,DevOps,Kubernetes,Docker,技术架构",
    },
  ],
});

// 响应式引用
const typingElement = ref(null);
const activeStep = ref(0);

// 代码片段
const codeSnippets = [
  "kubectl apply -f deployment.yaml",
  "docker build -t app:latest .",
  "terraform plan -out=tfplan",
  "helm install app ./chart",
  "git push origin main",
  "npm run build:prod",
  "ansible-playbook deploy.yml",
  "curl -X POST /api/deploy",
];

// 流动代码
function getFlowCode(index) {
  const codes = [
    "function deploy()",
    "const api = new API()",
    "await cloud.connect()",
    "docker build -t app",
    "kubectl apply -f",
    "terraform init",
    "npm run build",
    "git push origin",
    "ssh user@server",
    "curl -X POST",
    "SELECT * FROM",
    "import { useState }",
    "export default",
    "async function",
    "return response",
  ];
  return codes[index % codes.length];
}

// 连接路径
function getConnectionPath(index) {
  const paths = [
    "M10,20 Q50,10 90,30",
    "M20,80 Q60,50 80,20",
    "M5,50 Q30,20 70,60",
    "M80,70 Q40,40 15,80",
    "M30,10 Q70,30 90,70",
    "M70,90 Q30,70 10,40",
    "M50,5 Q80,40 60,85",
    "M90,50 Q60,80 20,60",
    "M15,30 Q50,60 85,40",
    "M40,90 Q70,60 95,30",
    "M25,70 Q60,40 75,10",
    "M60,95 Q30,50 5,70",
  ];
  return paths[index % paths.length];
}

// 打字机文本
const typingTexts = computed(() => [
  t("technical_services.hero.building_cloud_native_architecture"),
  t("technical_services.hero.implementing_microservice_governance"),
  t("technical_services.hero.optimizing_container_orchestration"),
  t("technical_services.hero.improving_system_performance"),
]);

// 服务数据
const services = computed(() => [
  {
    category: "Infrastructure",
    level: "Enterprise",
    title: t("technical_services.service.one.title"),
    description: t("technical_services.service.one.description"),
    icon: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none"><path d="M21 16V8C21 6.89543 20.1046 6 19 6H5C3.89543 6 3 6.89543 3 8V16C3 17.1046 3.89543 18 5 18H19C20.1046 18 21 17.1046 21 16Z" stroke="currentColor" stroke-width="2"/></svg>',
    technologies: ["Kubernetes", "Docker", "Istio"],
    performance: "300%",
    reliability: "99.9%",
  },
  {
    category: "DevOps",
    level: "Advanced",
    title: t("technical_services.service.two.title"),
    description: t("technical_services.service.two.description"),
    icon: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none"><path d="M12 3L20 7.5V16.5L12 21L4 16.5V7.5L12 3Z" stroke="currentColor" stroke-width="2"/></svg>',
    technologies: ["Jenkins", "GitLab CI", "ArgoCD"],
    performance: "500%",
    reliability: "99.8%",
  },
  {
    category: "Monitoring",
    level: "Professional",
    title: t("technical_services.service.three.title"),
    description: t("technical_services.service.three.description"),
    icon: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none"><path d="M3 3V21H21" stroke="currentColor" stroke-width="2"/><path d="M7 12L12 7L16 11L21 6" stroke="currentColor" stroke-width="2"/></svg>',
    technologies: ["Prometheus", "Grafana", "Jaeger"],
    performance: "200%",
    reliability: "99.95%",
  },
  {
    category: "Security",
    level: "Enterprise",
    title: t("technical_services.service.four.title"),
    description: t("technical_services.service.four.description"),
    icon: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none"><path d="M12 1L21.5 6.5V17.5L12 23L2.5 17.5V6.5L12 1Z" stroke="currentColor" stroke-width="2"/></svg>',
    technologies: ["Falco", "OPA", "Vault"],
    performance: "150%",
    reliability: "99.99%",
  },
  {
    category: "Performance",
    level: "Expert",
    title: t("technical_services.service.five.title"),
    description: t("technical_services.service.five.description"),
    icon: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none"><path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" stroke-width="2"/></svg>',
    technologies: ["eBPF", "Envoy", "Redis"],
    performance: "400%",
    reliability: "99.9%",
  },
  {
    category: "Data",
    level: "Advanced",
    title: t("technical_services.service.six.title"),
    description: t("technical_services.service.six.description"),
    icon: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none"><path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" stroke-width="2"/><path d="M2 17L12 22L22 17M2 12L12 17L22 12" stroke="currentColor" stroke-width="2"/></svg>',
    technologies: ["Kafka", "Spark", "Elasticsearch"],
    performance: "600%",
    reliability: "99.7%",
  },
]);

// 技术栈数据
const techStack = computed(() => [
  {
    name: t("technical_services.techStack.one.title"),
    description: "Container Orchestration",
    technologies: [
      {
        name: "Kubernetes",
        version: "v1.28",
        icon: "☸️",
        featured: true,
        connections: 3,
      },
      {
        name: "Docker",
        version: "v24.0",
        featured: true,
        connections: 2,
      },
      {
        name: "Containerd",
        version: "v1.7",
        featured: false,
        connections: 1,
      },
    ],
  },
  {
    name: t("technical_services.techStack.two.title"),
    description: "Service Mesh",
    technologies: [
      {
        name: "Istio",
        version: "v1.19",
        featured: true,
        connections: 4,
      },
      {
        name: "Envoy",
        version: "v1.27",
        featured: true,
        connections: 3,
      },
      {
        name: "Linkerd",
        version: "v2.14",
        featured: false,
        connections: 2,
      },
    ],
  },
  {
    name: t("technical_services.techStack.three.title"),
    description: "Observability",
    technologies: [
      {
        name: "Prometheus",
        version: "v2.47",
        featured: true,
        connections: 5,
      },
      {
        name: "Grafana",
        version: "v10.1",
        featured: true,
        connections: 4,
      },
      {
        name: "Jaeger",
        version: "v1.49",
        featured: true,
        connections: 3,
      },
    ],
  },
  {
    name: t("technical_services.techStack.four.title"),
    description: "Infrastructure",
    technologies: [
      {
        name: "Terraform",
        version: "v1.6",
        featured: true,
        connections: 3,
      },
      {
        name: "Ansible",
        version: "v8.5",
        featured: true,
        connections: 2,
      },
      {
        name: "Helm",
        version: "v3.13",
        featured: true,
        connections: 4,
      },
    ],
  },
]);

// 流程步骤
const processSteps = computed(() => [
  {
    title: t("technical_services.processSteps.one.title"),
    description: t("technical_services.processSteps.one.description"),
    icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M9 11H15M9 15H15M17 21H7C5.89543 21 5 20.1046 5 19V5C5 3.89543 5.89543 3 7 3H12.5858C12.851 3 13.1054 3.10536 13.2929 3.29289L19.7071 9.70711C19.8946 9.89464 20 10.149 20 10.4142V19C20 20.1046 19.1046 21 18 21H17Z" stroke="currentColor" stroke-width="2"/></svg>',
    details: [
      t("technical_services.processSteps.one.business_requirement_survey"),
      t("technical_services.processSteps.one.technical_architecture_design"),
      t("technical_services.processSteps.one.technology_selection_evaluation"),
      t("technical_services.processSteps.one.implementation_scheme"),
    ],
    technologies: ["Kubernetes", "Microservices", "API Gateway"],
  },
  {
    title: t("technical_services.processSteps.two.title"),
    description: t("technical_services.processSteps.two.description"),
    icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 3L20 7.5V16.5L12 21L4 16.5V7.5L12 3Z" stroke="currentColor" stroke-width="2"/></svg>',
    details: [
      t("technical_services.processSteps.two.cluster_environment_setup"),
      t("technical_services.processSteps.two.infrastructure_setup"),
      t("technical_services.processSteps.two.storage_scheme_deployment"),
      t("technical_services.processSteps.two.security_policy_configuration"),
    ],
    technologies: ["Terraform", "Ansible", "Helm"],
  },
  {
    title: t("technical_services.processSteps.three.title"),
    description: t("technical_services.processSteps.three.description"),
    icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M21 16V8C21 6.89543 20.1046 6 19 6H5C3.89543 6 3 6.89543 3 8V16C3 17.1046 3.89543 18 5 18H19C20.1046 18 21 17.1046 21 16Z" stroke="currentColor" stroke-width="2"/></svg>',
    details: [
      t("technical_services.processSteps.three.application_containerization"),
      t("technical_services.processSteps.three.microservice_deployment"),
      t(
        "technical_services.processSteps.three.service_deployment_configuration"
      ),
      t("technical_services.processSteps.three.load_balancing_settings"),
    ],
    technologies: ["Docker", "Kubernetes", "Istio"],
  },
  {
    title: t("technical_services.processSteps.four.title"),
    description: t("technical_services.processSteps.four.description"),
    icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" stroke-width="2"/></svg>',
    details: [
      t("technical_services.processSteps.four.code_quality_check"),
      t("technical_services.processSteps.four.automated_testing"),
      t("technical_services.processSteps.four.image_build_publish"),
      t("technical_services.processSteps.four.automated_deployment"),
    ],
    technologies: ["Jenkins", "GitLab CI", "ArgoCD"],
  },
  {
    title: t("technical_services.processSteps.five.title"),
    description: t("technical_services.processSteps.five.description"),
    icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M3 3V21H21" stroke="currentColor" stroke-width="2"/><path d="M7 12L12 7L16 11L21 6" stroke="currentColor" stroke-width="2"/></svg>',
    details: [
      t("technical_services.processSteps.five.metric_monitoring_configuration"),
      t("technical_services.processSteps.five.log_aggregation_analysis"),
      t("technical_services.processSteps.five.link_tracking_deployment"),
      t("technical_services.processSteps.five.alert_rule_configuration"),
    ],
    technologies: ["Prometheus", "Grafana", "Jaeger"],
  },
  {
    title: t("technical_services.processSteps.six.title"),
    description: t("technical_services.processSteps.six.description"),
    icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" stroke-width="2"/></svg>',
    details: [
      t("technical_services.processSteps.six.performance_monitoring"),
      t("technical_services.processSteps.six.performance_optimization"),
      t("technical_services.processSteps.six.user_experience_improvement"),
      t("technical_services.processSteps.six.maintenance_support_services"),
    ],
    technologies: ["eBPF", "APM", "Load Testing"],
  },
]);

// 浮动代码
const floatingCodes = [
  { text: "kubectl apply", x: 10, y: 20, delay: 0 },
  { text: "docker build", x: 80, y: 30, delay: 1 },
  { text: "helm install", x: 15, y: 70, delay: 2 },
  { text: "terraform plan", x: 70, y: 80, delay: 3 },
  { text: "git push", x: 40, y: 15, delay: 4 },
  { text: "npm run build", x: 85, y: 60, delay: 5 },
];

// 移除Three.js相关变量

// 组件挂载后初始化
onMounted(() => {
  initTypingAnimation();
  initScrollAnimations();
  initProcessAnimation();
});

// 组件卸载时清理
onUnmounted(() => {
  // 清理GSAP动画
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
});

// Three.js相关函数已全部移除

// 初始化打字机动画
function initTypingAnimation() {
  if (!typingElement.value) return;

  let currentTextIndex = 0;
  let currentCharIndex = 0;
  let isDeleting = false;

  function typeText() {
    // 安全检查：确保 typingTexts 数组不为空且当前文本存在
    if (!typingTexts.value || typingTexts.value.length === 0) {
      setTimeout(typeText, 100); // 等待 i18n 加载完成
      return;
    }

    const currentText = typingTexts.value[currentTextIndex];

    // 安全检查：确保 currentText 不为 undefined 或 null
    if (!currentText || typeof currentText !== "string") {
      setTimeout(typeText, 100); // 等待翻译加载完成
      return;
    }

    if (isDeleting) {
      typingElement.value.textContent = currentText.substring(
        0,
        currentCharIndex - 1
      );
      currentCharIndex--;
    } else {
      typingElement.value.textContent = currentText.substring(
        0,
        currentCharIndex + 1
      );
      currentCharIndex++;
    }

    let typeSpeed = isDeleting ? 80 : 120; // 稍微减慢速度减少DOM操作

    if (!isDeleting && currentCharIndex === currentText.length) {
      typeSpeed = 2000;
      isDeleting = true;
    } else if (isDeleting && currentCharIndex === 0) {
      isDeleting = false;
      currentTextIndex = (currentTextIndex + 1) % typingTexts.value.length;
      typeSpeed = 500;
    }

    // 使用requestAnimationFrame优化性能
    if (typeSpeed < 100) {
      requestAnimationFrame(() => setTimeout(typeText, typeSpeed));
    } else {
      setTimeout(typeText, typeSpeed);
    }
  }

  typeText();
}

// 初始化滚动动画（优化性能）
function initScrollAnimations() {
  // 服务卡片动画 - 简化动画属性
  gsap.fromTo(
    ".service-card",
    {
      y: 50,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 0.6,
      stagger: 0.15,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".services-section",
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    }
  );

  // 技术栈动画 - 减少复杂变换
  gsap.fromTo(
    ".tech-node",
    {
      scale: 0.8,
      opacity: 0,
    },
    {
      scale: 1,
      opacity: 1,
      duration: 0.4,
      stagger: 0.08,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".tech-stack-section",
        start: "top 70%",
        toggleActions: "play none none reverse",
      },
    }
  );
}

// 初始化流程动画
function initProcessAnimation() {
  // 监听滚动，激活步骤
  ScrollTrigger.create({
    trigger: ".process-section",
    start: "top 50%",
    end: "bottom 50%",
    onUpdate: (self) => {
      const progress = self.progress;
      activeStep.value = Math.floor(progress * processSteps.length);
    },
  });
}
</script>

<style scoped>
.technical-services-page {
  min-height: 100vh;
  background: var(--bg-color);
  /* 启用硬件加速 */
  transform: translateZ(0);
  backface-visibility: hidden;
  perspective: 1000px;
}

/* Hero Section */
.hero-section {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  overflow: hidden;
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%);
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  /* 优化Three.js渲染性能 */
  transform: translateZ(0);
  will-change: transform;
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
  background: rgba(99, 102, 241, 0.1);
  color: #6366f1;
  padding: 8px 16px;
  border-radius: 20px;
  border: 1px solid rgba(99, 102, 241, 0.3);
  font-size: 0.9rem;
  font-weight: 500;
  margin-bottom: 20px;
  backdrop-filter: blur(10px);
}

.badge-icon {
  font-size: 1.2rem;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 700;
  color: white;
  margin-bottom: 1.5rem;
  line-height: 1.2;
}

.highlight-text {
  background: linear-gradient(135deg, #6366f1, #8b5cf6, #06b6d4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: gradientShift 3s ease-in-out infinite;
}

@keyframes gradientShift {
  0%,
  100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

/* 优化动画性能 */
.highlight-text {
  will-change: auto;
}

/* 减少重绘 */
.service-card,
.tech-node {
  will-change: transform, opacity;
}

.service-card:hover {
  will-change: auto;
}

.typing-text {
  display: flex;
  align-items: center;
  gap: 5px;
  margin-bottom: 1.5rem;
  min-height: 40px;
}

.typing-content {
  font-size: 1.3rem;
  color: #06b6d4;
  font-weight: 600;
}

.cursor {
  font-size: 1.3rem;
  color: #06b6d4;
  animation: blink 1s infinite;
}

@keyframes blink {
  0%,
  50% {
    opacity: 1;
  }
  51%,
  100% {
    opacity: 0;
  }
}

.hero-description {
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  margin-bottom: 2rem;
}

.tech-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-bottom: 2rem;
}

.stat-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 15px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
}

.stat-icon {
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}

.stat-info {
  flex: 1;
}

.stat-number {
  font-size: 1.2rem;
  font-weight: 700;
  color: white;
  margin-bottom: 2px;
}

.stat-label {
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.7);
}

.hero-actions {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.btn-primary,
.btn-tech,
.btn-outline {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.btn-primary {
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  color: white;
  box-shadow: 0 4px 20px rgba(99, 102, 241, 0.4);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 30px rgba(99, 102, 241, 0.6);
}

.btn-tech {
  background: rgba(6, 182, 212, 0.1);
  color: #06b6d4;
  border: 1px solid rgba(6, 182, 212, 0.3);
  backdrop-filter: blur(10px);
}

.btn-tech:hover {
  background: rgba(6, 182, 212, 0.2);
  transform: translateY(-2px);
}

.btn-outline {
  background: transparent;
  color: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.3);
}

.btn-outline:hover {
  background: rgba(255, 255, 255, 0.1);
  color: white;
}

/* Tech Terminal */
.hero-visual {
  display: flex;
  justify-content: center;
  align-items: center;
}

.tech-terminal {
  width: 100%;
  max-width: 500px;
  background: rgba(0, 0, 0, 0.8);
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(20px);
}

.terminal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 20px;
  background: rgba(255, 255, 255, 0.05);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.terminal-controls {
  display: flex;
  gap: 8px;
}

.control-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

.control-dot.red {
  background: #ff5f56;
}

.control-dot.yellow {
  background: #ffbd2e;
}

.control-dot.green {
  background: #27ca3f;
}

.terminal-title {
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.9rem;
  font-family: "Courier New", monospace;
}

.terminal-content {
  padding: 20px;
  font-family: "Courier New", monospace;
  font-size: 0.9rem;
  line-height: 1.6;
}

.terminal-line {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
}

.prompt {
  color: #06b6d4;
  font-weight: bold;
}

.command {
  color: #10b981;
}

.terminal-output {
  margin: 15px 0;
  padding-left: 20px;
}

.output-line {
  display: flex;
  gap: 15px;
  margin-bottom: 5px;
  font-size: 0.8rem;
}

.namespace {
  color: #8b5cf6;
  min-width: 80px;
}

.pod-name {
  color: rgba(255, 255, 255, 0.8);
  flex: 1;
}

.status.running {
  color: #10b981;
}

.typing-command {
  color: #10b981;
}

.cursor-terminal {
  color: #06b6d4;
  animation: blink 1s infinite;
}

/* Services Section */
.services-section {
  padding: 100px 0;
  background: linear-gradient(
    135deg,
    var(--bg-color) 0%,
    var(--bg-secondary) 100%
  );
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
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
}

.service-card {
  position: relative;
  background: var(--card-bg);
  border-radius: 20px;
  padding: 30px;
  border: 1px solid var(--border-color);
  transition: all 0.3s ease;
  overflow: hidden;
}

.service-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
}

.service-card:hover .card-glow {
  opacity: 1;
}

.card-glow {
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  background: linear-gradient(135deg, #6366f1, #8b5cf6, #06b6d4);
  border-radius: 20px;
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: -1;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 20px;
}

.service-icon {
  position: relative;
  width: 60px;
  height: 60px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.icon-bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    135deg,
    var(--primary-color),
    var(--primary-color-light)
  );
  opacity: 0.1;
}

.icon-content {
  position: relative;
  z-index: 1;
  color: var(--primary-color);
}

.service-meta {
  text-align: right;
}

.service-category {
  display: block;
  font-size: 0.8rem;
  color: var(--text-secondary);
  margin-bottom: 4px;
}

.service-level {
  display: inline-block;
  background: var(--primary-color-light);
  color: var(--primary-color);
  padding: 2px 8px;
  border-radius: 10px;
  font-size: 0.7rem;
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

.tech-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 20px;
}

.tech-tag {
  background: var(--bg-secondary);
  color: var(--text-secondary);
  padding: 4px 12px;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 500;
  border: 1px solid var(--border-color);
}

.service-metrics {
  display: flex;
  gap: 20px;
}

.metric {
  text-align: center;
}

.metric-value {
  display: block;
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--primary-color);
  margin-bottom: 2px;
}

.metric-label {
  font-size: 0.7rem;
  color: var(--text-secondary);
}

/* Tech Stack Section */
.tech-stack-section {
  padding: 100px 0;
  background: var(--bg-secondary);
}

.tech-visualization {
  display: grid;
  grid-template-columns: 1fr 400px;
  gap: 60px;
  align-items: center;
}

.tech-layers {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.tech-layer {
  background: var(--card-bg);
  border-radius: 16px;
  padding: 25px;
  border: 1px solid var(--border-color);
}

.layer-header {
  margin-bottom: 20px;
}

.layer-header h3 {
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 5px;
}

.layer-description {
  font-size: 0.9rem;
  color: var(--text-secondary);
}

.layer-technologies {
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
}

.tech-node {
  position: relative;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 16px;
  background: var(--bg-secondary);
  border-radius: 12px;
  border: 1px solid var(--border-color);
  transition: all 0.3s ease;
  cursor: pointer;
}

.tech-node:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.tech-node.active {
  background: var(--primary-color-light);
  border-color: var(--primary-color);
}

.node-icon {
  font-size: 1.2rem;
}

.node-info {
  display: flex;
  flex-direction: column;
}

.node-name {
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--text-primary);
}

.node-version {
  font-size: 0.7rem;
  color: var(--text-secondary);
}

.node-connections {
  position: absolute;
  top: -5px;
  right: -5px;
  display: flex;
  gap: 2px;
}

.connection {
  width: 4px;
  height: 4px;
  background: var(--primary-color);
  border-radius: 50%;
  animation: connectionPulse 2s ease-in-out infinite;
}

@keyframes connectionPulse {
  0%,
  100% {
    opacity: 0.3;
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(1.5);
  }
}

.architecture-diagram {
  display: flex;
  justify-content: center;
  align-items: center;
}

.architecture-canvas {
  width: 100%;
  height: 400px;
  background: var(--card-bg);
  border-radius: 16px;
  border: 1px solid var(--border-color);
}

/* Process Section */
.process-section {
  padding: 100px 0;
  background: var(--bg-color);
}

.process-timeline {
  max-width: 1000px;
  margin: 0 auto;
}

.timeline-container {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.timeline-line {
  position: absolute;
  left: 30px;
  top: 30px;
  bottom: 30px;
  width: 2px;
  background: linear-gradient(
    to bottom,
    var(--primary-color),
    var(--primary-color-light)
  );
  opacity: 0.3;
}

.process-step {
  position: relative;
  display: flex;
  align-items: flex-start;
  gap: 30px;
  opacity: 0.5;
  transition: all 0.5s ease;
}

.process-step.active {
  opacity: 1;
}

.process-step.active .step-circle {
  transform: scale(1.1);
}

.step-connector {
  position: absolute;
  left: 30px;
  top: 60px;
  width: 2px;
  height: 40px;
  background: var(--primary-color);
  opacity: 0.3;
}

.step-circle {
  position: relative;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  z-index: 2;
}

.circle-bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    135deg,
    var(--primary-color),
    var(--primary-color-light)
  );
  border-radius: 50%;
  opacity: 0.1;
}

.step-icon {
  position: relative;
  z-index: 2;
  color: var(--primary-color);
}

.step-number {
  position: absolute;
  bottom: -25px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--text-secondary);
}

.step-content {
  flex: 1;
  padding-top: 10px;
}

.step-content h3 {
  font-size: 1.3rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 10px;
}

.step-content p {
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 15px;
}

.step-details {
  margin-bottom: 15px;
}

.detail-item {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 5px;
}

.detail-icon {
  color: var(--primary-color);
  font-size: 0.8rem;
}

.detail-text {
  font-size: 0.9rem;
  color: var(--text-secondary);
}

.step-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tech-badge {
  background: var(--primary-color-light);
  color: var(--primary-color);
  padding: 2px 8px;
  border-radius: 10px;
  font-size: 0.7rem;
  font-weight: 500;
}

/* CTA Section */
.cta-section {
  position: relative;
  padding: 100px 0;
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%);
  overflow: hidden;
}

.cta-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
}

.geometric-animation {
  position: absolute;
  width: 100%;
  height: 100%;
}

.floating-shape {
  position: absolute;
  opacity: 0.1;
  animation: floatShape var(--duration, 10s) ease-in-out infinite;
  animation-delay: var(--delay, 0s);
}

.shape-1 {
  width: 60px;
  height: 60px;
  background: linear-gradient(45deg, #6366f1, #06b6d4);
  border-radius: 50%;
  top: 20%;
  left: 10%;
}

.shape-2 {
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, #06b6d4, #8b5cf6);
  transform: rotate(45deg);
  top: 60%;
  right: 15%;
}

.shape-3 {
  width: 0;
  height: 0;
  border-left: 25px solid transparent;
  border-right: 25px solid transparent;
  border-bottom: 43px solid rgba(99, 102, 241, 0.3);
  top: 80%;
  left: 30%;
}

.shape-4 {
  width: 50px;
  height: 50px;
  background: linear-gradient(90deg, #8b5cf6, #06b6d4);
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
  top: 40%;
  right: 40%;
}

@keyframes floatShape {
  0%,
  100% {
    transform: translateY(0px) rotate(0deg);
    opacity: 0.1;
  }
  25% {
    transform: translateY(-30px) rotate(90deg);
    opacity: 0.3;
  }
  50% {
    transform: translateY(-60px) rotate(180deg);
    opacity: 0.2;
  }
  75% {
    transform: translateY(-30px) rotate(270deg);
    opacity: 0.3;
  }
}

.code-flow {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.flow-line {
  position: absolute;
  width: 100%;
  height: 2px;
  top: calc(var(--index) * 6.67%);
  animation: codeFlow 12s linear infinite;
  animation-delay: var(--animation-delay, 0s);
}

.flow-text {
  position: absolute;
  left: -200px;
  color: #06b6d4;
  font-family: "Courier New", monospace;
  font-size: 12px;
  opacity: 0.4;
  text-shadow: 0 0 10px rgba(6, 182, 212, 0.5);
  white-space: nowrap;
}

@keyframes codeFlow {
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  10% {
    opacity: 0.6;
  }
  90% {
    opacity: 0.6;
  }
  100% {
    transform: translateX(100vw);
    opacity: 0;
  }
}

.neural-network {
  position: absolute;
  width: 100%;
  height: 100%;
}

.network-node {
  position: absolute;
  width: 8px;
  height: 8px;
  background: radial-gradient(circle, #6366f1, transparent);
  border-radius: 50%;
  opacity: 0.6;
  animation: nodeGlow 3s ease-in-out infinite;
  animation-delay: calc(var(--node-index) * 0.3s);
}

.network-node:nth-child(1) {
  top: 20%;
  left: 15%;
}
.network-node:nth-child(2) {
  top: 35%;
  right: 20%;
}
.network-node:nth-child(3) {
  top: 60%;
  left: 25%;
}
.network-node:nth-child(4) {
  top: 75%;
  right: 30%;
}
.network-node:nth-child(5) {
  top: 45%;
  left: 60%;
}
.network-node:nth-child(6) {
  top: 25%;
  right: 45%;
}
.network-node:nth-child(7) {
  top: 80%;
  left: 70%;
}
.network-node:nth-child(8) {
  top: 15%;
  left: 80%;
}

@keyframes nodeGlow {
  0%,
  100% {
    transform: scale(1);
    opacity: 0.6;
  }
  50% {
    transform: scale(1.5);
    opacity: 1;
  }
}

.network-connections {
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0.2;
}

.connection-line {
  fill: none;
  stroke: #06b6d4;
  stroke-width: 0.5;
  stroke-dasharray: 5, 5;
  animation: connectionFlow 4s linear infinite;
  animation-delay: var(--line-delay, 0s);
}

@keyframes connectionFlow {
  0% {
    stroke-dashoffset: 0;
    opacity: 0.2;
  }
  50% {
    opacity: 0.6;
  }
  100% {
    stroke-dashoffset: 20;
    opacity: 0.2;
  }
}

.cta-content {
  position: relative;
  z-index: 3;
  text-align: center;
  color: white;
}

.cta-icon {
  margin-bottom: 30px;
}

.icon-layers {
  position: relative;
  display: inline-block;
}

.layer {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: layerRotate 8s linear infinite;
}

.layer-1 {
  color: #6366f1;
  animation-direction: normal;
}

.layer-2 {
  color: #06b6d4;
  animation-direction: reverse;
  animation-duration: 6s;
}

@keyframes layerRotate {
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  100% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}

.cta-content h2 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 20px;
  background: linear-gradient(135deg, #ffffff, #06b6d4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.cta-content p {
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  margin-bottom: 30px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.cta-features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-bottom: 40px;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 15px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
}

.feature-icon {
  font-size: 1.2rem;
}

.feature-text {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.9);
}

.cta-actions {
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .content-wrapper {
    grid-template-columns: 1fr;
    gap: 40px;
    text-align: center;
  }

  .tech-visualization {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .architecture-canvas {
    height: 300px;
  }
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }

  .tech-stats {
    grid-template-columns: 1fr;
  }

  .services-grid {
    grid-template-columns: 1fr;
  }

  .tech-layers {
    gap: 20px;
  }

  .layer-technologies {
    flex-direction: column;
  }

  .cta-features {
    grid-template-columns: 1fr;
  }

  .cta-actions {
    flex-direction: column;
    align-items: center;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 2rem;
  }

  .hero-description {
    font-size: 1rem;
  }

  .section-header h2 {
    font-size: 2rem;
  }

  .service-card {
    padding: 20px;
  }

  .tech-terminal {
    max-width: 100%;
  }
}
</style>
