<template>
  <section class="projects-section">
    <div class="projects-container">
      <div class="section-header">
        <h2 class="section-title">
          {{ $t("projects.title") }}
          <span class="highlight">#onZHILING ARK</span>
        </h2>
      </div>

      <div class="projects-showcase">
        <div class="project-card">
          <div class="project-number">01</div>
          <div class="project-content">
            <div class="project-meta">
              <span class="project-category">云原生架构</span>
              <span class="project-status">已完成</span>
            </div>
            <h3 class="project-title">企业级微服务容器化迁移平台</h3>
            <p class="project-description">
              基于AWS
              EKS构建的企业级微服务架构，实现传统单体应用向云原生架构的平滑迁移。采用Docker容器化、Kubernetes编排，结合AWS
              Lambda无服务器计算，为客户节省60%的基础设施成本。
            </p>
            <div class="project-tech-stack">
              <span class="tech-tag">AWS EKS</span>
              <span class="tech-tag">Docker</span>
              <span class="tech-tag">Kubernetes</span>
              <span class="tech-tag">Lambda</span>
            </div>
            <div class="project-metrics">
              <div class="metric">
                <span class="metric-value">60%</span>
                <span class="metric-label">成本节省</span>
              </div>
              <div class="metric">
                <span class="metric-value">99.9%</span>
                <span class="metric-label">可用性</span>
              </div>
            </div>
            <a href="#" class="project-link">
              查看案例详情
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path
                  d="M7 17L17 7M17 7H7M17 7V17"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </a>
          </div>
          <div class="project-image">
            <div class="image-placeholder aws-project">
              <svg width="120" height="80" viewBox="0 0 120 80" fill="none">
                <!-- AWS EKS图标 -->
                <rect
                  x="10"
                  y="20"
                  width="100"
                  height="40"
                  rx="8"
                  fill="var(--primary-color)"
                  opacity="0.1"
                />
                <circle
                  cx="30"
                  cy="35"
                  r="8"
                  fill="var(--primary-color)"
                  opacity="0.8"
                />
                <circle
                  cx="60"
                  cy="35"
                  r="8"
                  fill="var(--primary-color)"
                  opacity="0.6"
                />
                <circle
                  cx="90"
                  cy="35"
                  r="8"
                  fill="var(--primary-color)"
                  opacity="0.8"
                />
                <path
                  d="M22 35L38 35M52 35L68 35M82 35L98 35"
                  stroke="var(--primary-color)"
                  stroke-width="2"
                />
                <text
                  x="60"
                  y="50"
                  text-anchor="middle"
                  fill="var(--primary-color)"
                  font-size="10"
                  font-weight="600"
                >
                  EKS
                </text>
              </svg>
            </div>
          </div>
        </div>

        <div class="project-card">
          <div class="project-number">02</div>
          <div class="project-content">
            <div class="project-meta">
              <span class="project-category">数据分析</span>
              <span class="project-status">进行中</span>
            </div>
            <h3 class="project-title">实时大数据处理与AI智能分析平台</h3>
            <p class="project-description">
              利用AWS
              Kinesis、Redshift和SageMaker构建的实时数据处理平台，支持PB级数据分析和机器学习模型训练。为金融客户提供实时风控和智能投顾服务，处理效率提升300%。
            </p>
            <div class="project-tech-stack">
              <span class="tech-tag">Kinesis</span>
              <span class="tech-tag">Redshift</span>
              <span class="tech-tag">SageMaker</span>
              <span class="tech-tag">EMR</span>
            </div>
            <div class="project-metrics">
              <div class="metric">
                <span class="metric-value">300%</span>
                <span class="metric-label">效率提升</span>
              </div>
              <div class="metric">
                <span class="metric-value">PB级</span>
                <span class="metric-label">数据处理</span>
              </div>
            </div>
            <a href="#" class="project-link">
              查看案例详情
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path
                  d="M7 17L17 7M17 7H7M17 7V17"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </a>
          </div>
          <div class="project-image">
            <div class="image-placeholder data-project">
              <svg width="120" height="80" viewBox="0 0 120 80" fill="none">
                <!-- 数据流图标 -->
                <rect
                  x="10"
                  y="10"
                  width="20"
                  height="60"
                  rx="4"
                  fill="var(--primary-color)"
                  opacity="0.3"
                />
                <rect
                  x="40"
                  y="20"
                  width="20"
                  height="40"
                  rx="4"
                  fill="var(--primary-color)"
                  opacity="0.6"
                />
                <rect
                  x="70"
                  y="15"
                  width="20"
                  height="50"
                  rx="4"
                  fill="var(--primary-color)"
                  opacity="0.8"
                />
                <rect
                  x="100"
                  y="25"
                  width="10"
                  height="30"
                  rx="2"
                  fill="var(--primary-color)"
                />
                <path
                  d="M30 40L40 40M60 40L70 40M90 40L100 40"
                  stroke="var(--primary-color)"
                  stroke-width="2"
                  marker-end="url(#arrow)"
                />
                <defs>
                  <marker
                    id="arrow"
                    markerWidth="10"
                    markerHeight="7"
                    refX="9"
                    refY="3.5"
                    orient="auto"
                  >
                    <polygon
                      points="0 0, 10 3.5, 0 7"
                      fill="var(--primary-color)"
                    />
                  </marker>
                </defs>
              </svg>
            </div>
          </div>
        </div>

        <div class="project-card">
          <div class="project-number">03</div>
          <div class="project-content">
            <div class="project-meta">
              <span class="project-category">安全合规</span>
              <span class="project-status">已完成</span>
            </div>
            <h3 class="project-title">多云安全治理与合规管理系统</h3>
            <p class="project-description">
              基于AWS Security
              Hub、GuardDuty和Config构建的企业级安全治理平台，实现多云环境统一安全监控、自动化合规检查和威胁检测，帮助客户通过SOC2、ISO27001等认证。
            </p>
            <div class="project-tech-stack">
              <span class="tech-tag">Security Hub</span>
              <span class="tech-tag">GuardDuty</span>
              <span class="tech-tag">Config</span>
              <span class="tech-tag">CloudTrail</span>
            </div>
            <div class="project-metrics">
              <div class="metric">
                <span class="metric-value">100%</span>
                <span class="metric-label">合规达标</span>
              </div>
              <div class="metric">
                <span class="metric-value">24/7</span>
                <span class="metric-label">安全监控</span>
              </div>
            </div>
            <a href="#" class="project-link">
              查看案例详情
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path
                  d="M7 17L17 7M17 7H7M17 7V17"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </a>
          </div>
          <div class="project-image">
            <div class="image-placeholder security-project">
              <svg width="120" height="80" viewBox="0 0 120 80" fill="none">
                <!-- 安全盾牌图标 -->
                <path
                  d="M60 10L40 20V45C40 55 50 65 60 70C70 65 80 55 80 45V20L60 10Z"
                  fill="var(--primary-color)"
                  opacity="0.2"
                />
                <path
                  d="M60 15L45 22V42C45 50 52 58 60 62C68 58 75 50 75 42V22L60 15Z"
                  fill="var(--primary-color)"
                  opacity="0.6"
                />
                <circle cx="60" cy="40" r="8" fill="var(--primary-color)" />
                <path
                  d="M56 40L59 43L64 37"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>

        <div class="project-card">
          <div class="project-number">04</div>
          <div class="project-content">
            <div class="project-meta">
              <span class="project-category">DevOps</span>
              <span class="project-status">已完成</span>
            </div>
            <h3 class="project-title">CI/CD自动化部署与运维平台</h3>
            <p class="project-description">
              采用AWS
              CodePipeline、CodeBuild和CodeDeploy构建的全自动化DevOps平台，实现从代码提交到生产部署的全流程自动化，部署频率提升500%，故障恢复时间缩短至分钟级。
            </p>
            <div class="project-tech-stack">
              <span class="tech-tag">CodePipeline</span>
              <span class="tech-tag">CodeBuild</span>
              <span class="tech-tag">CodeDeploy</span>
              <span class="tech-tag">CloudFormation</span>
            </div>
            <div class="project-metrics">
              <div class="metric">
                <span class="metric-value">500%</span>
                <span class="metric-label">部署提升</span>
              </div>
              <div class="metric">
                <span class="metric-value">< 5min</span>
                <span class="metric-label">故障恢复</span>
              </div>
            </div>
            <a href="#" class="project-link">
              查看案例详情
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path
                  d="M7 17L17 7M17 7H7M17 7V17"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </a>
          </div>
          <div class="project-image">
            <div class="image-placeholder devops-project">
              <svg width="120" height="80" viewBox="0 0 120 80" fill="none">
                <!-- CI/CD流水线图标 -->
                <rect
                  x="10"
                  y="30"
                  width="15"
                  height="20"
                  rx="3"
                  fill="var(--primary-color)"
                  opacity="0.8"
                />
                <rect
                  x="35"
                  y="30"
                  width="15"
                  height="20"
                  rx="3"
                  fill="var(--primary-color)"
                  opacity="0.6"
                />
                <rect
                  x="60"
                  y="30"
                  width="15"
                  height="20"
                  rx="3"
                  fill="var(--primary-color)"
                  opacity="0.8"
                />
                <rect
                  x="85"
                  y="30"
                  width="15"
                  height="20"
                  rx="3"
                  fill="var(--primary-color)"
                />
                <path
                  d="M25 40L35 40M50 40L60 40M75 40L85 40"
                  stroke="var(--primary-color)"
                  stroke-width="2"
                />
                <circle cx="30" r="3" cy="40" fill="var(--primary-color)" />
                <circle cx="55" r="3" cy="40" fill="var(--primary-color)" />
                <circle cx="80" r="3" cy="40" fill="var(--primary-color)" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div class="projects-pagination">
        <button class="pagination-dot active"></button>
        <button class="pagination-dot"></button>
        <button class="pagination-dot"></button>
        <button class="pagination-dot"></button>
      </div>
    </div>
  </section>
</template>

<script setup>
// Projects组件逻辑
</script>

<style scoped>
.projects-section {
  padding: 80px 0;
  background-color: var(--bg-color);
}

.projects-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.section-header {
  text-align: center;
  margin-bottom: 60px;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--text-color);
  margin-bottom: 16px;
  line-height: 1.2;
}

.highlight {
  color: var(--primary-color);
}

.projects-showcase {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.project-card {
  display: grid;
  grid-template-columns: 60px 1fr 300px;
  gap: 30px;
  background-color: var(--card-bg);
  border-radius: 16px;
  padding: 40px;
  transition: all 0.3s ease;
  border: 1px solid var(--border-color);
  align-items: center;
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  border-color: var(--primary-color);
}

.project-number {
  font-size: 2rem;
  font-weight: 800;
  color: var(--primary-color);
  opacity: 0.7;
}

/* 项目元数据样式 */
.project-meta {
  display: flex;
  gap: 12px;
  margin-bottom: 16px;
}

.project-category {
  background: linear-gradient(
    135deg,
    var(--primary-color) 0%,
    var(--accent-color) 100%
  );
  color: white;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.project-status {
  background: var(--success-color, #10b981);
  color: white;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
}

.project-title {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 16px;
  color: var(--text-color);
}

.project-description {
  font-size: 1rem;
  line-height: 1.6;
  color: var(--text-color);
  opacity: 0.8;
  margin-bottom: 20px;
}

/* 技术栈标签样式 */
.project-tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 20px;
}

.tech-tag {
  background: var(--card-bg-secondary);
  color: var(--primary-color);
  padding: 6px 12px;
  border-radius: 12px;
  font-size: 0.9rem;
  font-weight: 500;
  border: 1px solid var(--border-color);
  transition: all 0.3s ease;
}

.tech-tag:hover {
  background: var(--primary-color);
  color: white;
  transform: translateY(-2px);
}

/* 项目指标样式 */
.project-metrics {
  display: flex;
  gap: 24px;
  margin-bottom: 25px;
}

.metric {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.metric-value {
  font-size: 1.8rem;
  font-weight: 800;
  color: var(--primary-color);
  line-height: 1;
  margin-bottom: 4px;
}

.metric-label {
  font-size: 0.85rem;
  color: var(--text-color);
  opacity: 0.7;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.project-link {
  color: var(--primary-color);
  text-decoration: none;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transition: all 0.3s ease;
}

.project-link:hover {
  color: var(--primary-color-dark);
  text-decoration: underline;
  transform: translateX(5px);
}

.project-link svg {
  transition: transform 0.3s ease;
}

.project-link:hover svg {
  transform: rotate(45deg);
}

.project-image {
  display: flex;
  justify-content: center;
  align-items: center;
}

.image-placeholder {
  width: 200px;
  height: 200px;
  background-color: rgba(130, 71, 229, 0.1);
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
}

.image-placeholder::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    45deg,
    transparent 30%,
    rgba(255, 255, 255, 0.1) 50%,
    transparent 70%
  );
  transform: translateX(-100%);
  transition: transform 0.6s ease;
}

.project-card:hover .image-placeholder {
  transform: scale(1.05);
}

.project-card:hover .image-placeholder::before {
  transform: translateX(100%);
}

/* 不同项目类型的特殊样式 */
.aws-project {
  background: linear-gradient(135deg, #ff9500 0%, #ff6b35 100%);
}

.data-project {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.security-project {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
}

.devops-project {
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
}

.projects-pagination {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 40px;
}

.pagination-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: var(--border-color);
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
}

.pagination-dot.active {
  background-color: var(--primary-color);
  transform: scale(1.2);
}

/* 响应式设计 */
@media (max-width: 1024px) {
  .project-card {
    grid-template-columns: 40px 1fr 200px;
    padding: 30px;
  }

  .image-placeholder {
    width: 150px;
    height: 150px;
  }

  .project-metrics {
    gap: 16px;
  }

  .metric-value {
    font-size: 1.5rem;
  }
}

@media (max-width: 768px) {
  .section-title {
    font-size: 2rem;
  }

  .project-card {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto;
    gap: 20px;
    text-align: center;
  }

  .project-number {
    font-size: 1.5rem;
  }

  .project-meta {
    justify-content: center;
  }

  .project-metrics {
    justify-content: center;
    gap: 20px;
  }

  .project-tech-stack {
    justify-content: center;
  }

  .image-placeholder {
    width: 100%;
    height: 200px;
  }
}

@media (max-width: 480px) {
  .project-meta {
    flex-direction: column;
    align-items: center;
    gap: 8px;
  }

  .project-metrics {
    flex-direction: column;
    gap: 12px;
  }

  .project-tech-stack {
    gap: 6px;
  }

  .tech-tag {
    font-size: 0.8rem;
    padding: 4px 8px;
  }

  .metric-value {
    font-size: 1.3rem;
  }
}
</style>
