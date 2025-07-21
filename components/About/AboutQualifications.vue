<template>
  <section id="qualifications" class="about-qualifications">
    <div class="about-qualifications-container">
      <div class="section-header">
        <h2 class="section-title">{{ $t("about.qualifications.title") }}</h2>
        <p class="section-subtitle">{{ $t("about.qualifications.subtitle") }}</p>
      </div>

      <div class="qualifications-grid">
        <div
          v-for="(qualification, index) in qualifications"
          :key="index"
          class="qualification-card"
        >
          <div class="qualification-header">
            <div class="qualification-badge" :style="{ backgroundColor: qualification.bgColor }">
              {{ qualification.abbr }}
            </div>
            <h3 class="qualification-title">{{ qualification.title }}</h3>
          </div>
          <p class="qualification-description">{{ qualification.description }}</p>
          <div class="qualification-meta">
            <div class="meta-item">
              <span class="meta-label">证书编号</span>
              <span class="meta-value">{{ qualification.certNumber }}</span>
            </div>
            <div class="meta-item">
              <span class="meta-label">有效期至</span>
              <span class="meta-value">{{ qualification.validUntil }}</span>
            </div>
          </div>
        </div>
      </div>

      <div class="certifications-section">
        <h3 class="certifications-title">{{ $t("about.qualifications.certifications.title") }}</h3>
        <div class="certifications-grid">
          <div
            v-for="(certification, index) in certifications"
            :key="index"
            class="certification-item"
          >
            <div class="certification-icon" :style="{ backgroundColor: certification.bgColor }">
              {{ certification.abbr }}
            </div>
            <div class="certification-info">
              <h4 class="certification-name">{{ certification.name }}</h4>
              <p class="certification-description">{{ certification.description }}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="cloud-credentials-section">
        <h3 class="credentials-title animate-fade-in">云服务商资质认证</h3>
        <div class="credentials-grid">
          <div
            v-for="(credential, index) in cloudCredentials"
            :key="index"
            class="credential-item animate-slide-up"
            :style="{ animationDelay: `${index * 0.2}s` }"
          >
            <div class="credential-image">
              <div class="image-loading-overlay">
                <div class="loading-spinner"></div>
              </div>
              <img 
                :src="credential.image" 
                :alt="credential.name"
                @load="handleImageLoad"
                @error="handleImageError"
                class="credential-logo"
              />
            </div>
            <div class="credential-info">
              <h4 class="credential-name">{{ credential.name }}</h4>
              <p class="credential-description">{{ credential.description }}</p>
              <div class="credential-badge">
                <span class="badge-text">认证合作伙伴</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from "vue";

const { t } = useI18n();

// 企业资质数据
const qualifications = computed(() => [
  {
    title: t("about.qualifications.items.highTech.title"),
    description: t("about.qualifications.items.highTech.description"),
    certNumber: "GR202111003456",
    validUntil: "2024-10-14",
    bgColor: "#3B82F6",
    abbr: "高新",
  },
  {
    title: t("about.qualifications.items.software.title"),
    description: t("about.qualifications.items.software.description"),
    certNumber: "RQ20211100789",
    validUntil: "2024-08-19",
    bgColor: "#10B981",
    abbr: "软著",
  },
  {
    title: t("about.qualifications.items.iso9001.title"),
    description: t("about.qualifications.items.iso9001.description"),
    certNumber: "ISO9001-CN-123456",
    validUntil: "2025-03-09",
    bgColor: "#F59E0B",
    abbr: "ISO",
  },
  {
    title: t("about.qualifications.items.iso27001.title"),
    description: t("about.qualifications.items.iso27001.description"),
    certNumber: "ISO27001-CN-654321",
    validUntil: "2025-05-17",
    bgColor: "#EC4899",
    abbr: "安全",
  },
]);

// 行业认证数据
const certifications = computed(() => [
  {
    name: t("about.qualifications.certificationItems.bsn.name"),
    abbr: "BSN",
    description: t("about.qualifications.certificationItems.bsn.description"),
    bgColor: "#3B82F6",
  },
  {
    name: t("about.qualifications.certificationItems.tcbp.name"),
    abbr: "TCBP",
    description: t("about.qualifications.certificationItems.tcbp.description"),
    bgColor: "#10B981",
  },
  {
    name: t("about.qualifications.certificationItems.mlps.name"),
    abbr: "MLPS",
    description: t("about.qualifications.certificationItems.mlps.description"),
    bgColor: "#F59E0B",
  },
  {
    name: t("about.qualifications.certificationItems.ccss.name"),
    abbr: "CCSS",
    description: t("about.qualifications.certificationItems.ccss.description"),
    bgColor: "#EC4899",
  },
]);

// 云服务商资质认证数据
const cloudCredentials = [
  {
    name: "Amazon Web Services",
    image: "/assets/image/credential/aws.jpg",
    description: "AWS 合作伙伴认证，提供专业的云计算解决方案"
  },
  {
    name: "Microsoft Azure",
    image: "/assets/image/credential/Azure.jpg",
    description: "Azure 认证合作伙伴，专注于企业级云服务"
  },
  {
    name: "Google Cloud Platform",
    image: "/assets/image/credential/Gcp.jpg",
    description: "GCP 认证专家，提供先进的云原生解决方案"
  },
  {
    name: "腾讯云",
    image: "/assets/image/credential/Tencent.jpg",
    description: "腾讯云合作伙伴，专业的国内云服务提供商"
  },
  {
    name: "Oracle Cloud",
    image: "/assets/image/credential/oci.jpg",
    description: "Oracle 云基础设施认证合作伙伴"
  }
];

// 图片加载处理
const handleImageLoad = (event) => {
  const img = event.target;
  const overlay = img.parentElement.querySelector('.image-loading-overlay');
  if (overlay) {
    overlay.style.opacity = '0';
    setTimeout(() => {
      overlay.style.display = 'none';
    }, 300);
  }
  img.style.opacity = '1';
};

const handleImageError = (event) => {
  const img = event.target;
  const overlay = img.parentElement.querySelector('.image-loading-overlay');
  if (overlay) {
    overlay.innerHTML = '<div class="error-icon">❌</div>';
  }
};


</script>

<style scoped>
.about-qualifications {
  padding: 120px 0;
  background: linear-gradient(135deg, var(--bg-gradient) 0%, var(--bg-color) 100%);
  transition: background 0.3s ease;
}

.about-qualifications-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

.section-header {
  text-align: center;
  margin-bottom: 80px;
}

.section-title {
  font-size: 3rem;
  font-weight: 300;
  color: var(--text-color);
  margin-bottom: 16px;
  letter-spacing: -0.02em;
  transition: color 0.3s ease;
}

.section-subtitle {
  font-size: 1.25rem;
  color: var(--text-color);
  opacity: 0.7;
  font-weight: 400;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
  transition: color 0.3s ease;
}

.qualifications-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
  margin-bottom: 100px;
}

.qualification-card {
  background: var(--card-bg);
  border-radius: 16px;
  padding: 32px;
  box-shadow: var(--card-shadow);
  border: 1px solid var(--border-color);
  transition: all 0.3s ease;
}

.qualification-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  border-color: var(--primary-color);
}

.qualification-header {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 20px;
}

.qualification-badge {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 600;
  font-size: 0.9rem;
  flex-shrink: 0;
}

.qualification-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--text-color);
  margin: 0;
  transition: color 0.3s ease;
}

.qualification-description {
  color: var(--text-color);
  opacity: 0.7;
  line-height: 1.6;
  margin-bottom: 24px;
  font-size: 0.95rem;
  transition: color 0.3s ease;
}

.qualification-meta {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.meta-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
  border-bottom: 1px solid var(--border-color);
  transition: border-color 0.3s ease;
}

.meta-item:last-child {
  border-bottom: none;
}

.meta-label {
  color: var(--text-color);
  opacity: 0.6;
  font-size: 0.875rem;
  font-weight: 500;
  transition: color 0.3s ease;
}

.meta-value {
  color: var(--text-color);
  font-weight: 600;
  font-size: 0.875rem;
  transition: color 0.3s ease;
}

.certifications-section {
  margin-top: 40px;
}

.certifications-title {
  font-size: 2rem;
  font-weight: 300;
  color: var(--text-color);
  text-align: center;
  margin-bottom: 48px;
  letter-spacing: -0.01em;
  transition: color 0.3s ease;
}

.certifications-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
}

.certification-item {
  background: var(--card-bg);
  border-radius: 12px;
  padding: 24px;
  box-shadow: var(--card-shadow);
  border: 1px solid var(--border-color);
  display: flex;
  align-items: center;
  gap: 20px;
  transition: all 0.3s ease;
}

.certification-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  border-color: var(--primary-color);
}

.certification-icon {
  width: 56px;
  height: 56px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 700;
  font-size: 1rem;
  flex-shrink: 0;
}

.certification-info {
  flex: 1;
}

.certification-name {
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--text-color);
  margin: 0 0 8px 0;
  transition: color 0.3s ease;
}

.certification-description {
  color: var(--text-color);
  opacity: 0.7;
  line-height: 1.5;
  font-size: 0.9rem;
  margin: 0;
  transition: color 0.3s ease;
}

/* 云服务商资质认证样式 */
.cloud-credentials-section {
  margin-top: 80px;
}

.credentials-title {
  font-size: 2rem;
  font-weight: 300;
  color: var(--text-color);
  text-align: center;
  margin-bottom: 48px;
  letter-spacing: -0.01em;
  transition: color 0.3s ease;
}

.credentials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 32px;
}

.credential-item {
  background: var(--card-bg);
  border-radius: 24px;
  padding: 56px;
  box-shadow: 0 6px 28px rgba(0, 0, 0, 0.1);
  border: 1px solid var(--border-color);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  transition: all 0.3s ease;
  min-height: 580px;
  text-align: center;
}

.credential-item:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.2);
  border-color: var(--primary-color);
}

.credential-image {
  width: 100%;
  max-width: 480px;
  height: 340px;
  border-radius: 24px;
  overflow: hidden;
  flex-shrink: 0;
  background: var(--card-bg);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  border: 4px solid var(--border-color);
  transition: all 0.3s ease;
  position: relative;
}

.credential-logo {
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
  padding: 8px;
  opacity: 0;
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.credential-image:hover .credential-logo {
  transform: scale(1.05);
}

.image-loading-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--card-bg);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.3s ease;
  z-index: 2;
}

.loading-spinner {
  width: 40px;
  height: 40px;
  border: 3px solid var(--border-color);
  border-top: 3px solid var(--primary-color);
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

.error-icon {
  font-size: 2rem;
  opacity: 0.5;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.credential-info {
  width: 100%;
}

.credential-name {
  font-size: 1.375rem;
  font-weight: 700;
  color: var(--text-color);
  margin: 0 0 12px 0;
  letter-spacing: -0.01em;
  transition: color 0.3s ease, transform 0.3s ease;
}

.credential-item:hover .credential-name {
  transform: translateY(-2px);
  color: var(--primary-color);
}

.credential-description {
  color: var(--text-color);
  opacity: 0.7;
  line-height: 1.6;
  font-size: 1rem;
  margin: 0 0 16px 0;
  max-width: 320px;
  margin: 0 auto 16px auto;
  transition: color 0.3s ease;
}

.credential-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, var(--primary-color), var(--primary-color-light));
  color: white;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 600;
  margin-top: 12px;
  box-shadow: 0 2px 8px rgba(130, 71, 229, 0.3);
  transition: all 0.3s ease;
}

.credential-item:hover .credential-badge {
  transform: translateY(-2px);
  box-shadow: 0 4px 16px rgba(130, 71, 229, 0.4);
}

/* 动画效果 */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(60px) scale(0.9);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.02);
  }
}

.animate-fade-in {
  animation: fadeIn 0.8s ease-out;
}

.animate-slide-up {
  animation: slideUp 0.8s ease-out both;
}

.credential-item:hover {
  animation: pulse 2s ease-in-out infinite;
}

/* 暗色主题特殊优化 */
.dark-mode .credential-image {
  background: rgba(255, 255, 255, 0.95);
  border-color: rgba(255, 255, 255, 0.1);
}

.dark-mode .credential-item:hover {
  box-shadow: 0 12px 40px rgba(130, 71, 229, 0.3);
}

.dark-mode .qualification-card:hover {
  box-shadow: 0 20px 40px rgba(130, 71, 229, 0.2);
}

.dark-mode .certification-item:hover {
  box-shadow: 0 8px 25px rgba(130, 71, 229, 0.2);
}

/* 棕褐色主题优化 */
.sepia-mode .credential-image {
  background: rgba(255, 255, 255, 0.9);
  border-color: var(--border-color);
}

.sepia-mode .credential-item:hover {
  box-shadow: 0 12px 40px rgba(107, 91, 149, 0.3);
}

.sepia-mode .qualification-card:hover {
  box-shadow: 0 20px 40px rgba(107, 91, 149, 0.2);
}

.sepia-mode .certification-item:hover {
  box-shadow: 0 8px 25px rgba(107, 91, 149, 0.2);
}

/* 响应式样式 */
@media (max-width: 768px) {
  .about-qualifications {
    padding: 80px 0;
  }

  .about-qualifications-container {
    padding: 0 20px;
  }

  .section-header {
    margin-bottom: 60px;
  }

  .section-title {
    font-size: 2.25rem;
  }

  .section-subtitle {
    font-size: 1.125rem;
  }

  .qualifications-grid {
    grid-template-columns: 1fr;
    gap: 24px;
    margin-bottom: 80px;
  }

  .qualification-card {
    padding: 24px;
  }

  .qualification-header {
    gap: 12px;
  }

  .qualification-badge {
    width: 40px;
    height: 40px;
    font-size: 0.8rem;
  }

  .qualification-title {
    font-size: 1.125rem;
  }

  .certifications-title {
    font-size: 1.75rem;
  }

  .certifications-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .certification-item {
    padding: 20px;
    gap: 16px;
  }

  .certification-icon {
    width: 48px;
    height: 48px;
    font-size: 0.9rem;
  }

  .cloud-credentials-section {
    margin-top: 60px;
  }

  .credentials-title {
    font-size: 1.75rem;
  }

  .credentials-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .credentials-grid {
    grid-template-columns: 1fr;
    gap: 24px;
  }

  .credential-item {
    padding: 40px;
    gap: 32px;
    min-height: 460px;
    flex-direction: column;
    text-align: center;
  }

  .credential-image {
    width: 100%;
    max-width: 360px;
    height: 260px;
  }

  .credential-info {
    width: 100%;
  }

  .credential-name {
    font-size: 1.125rem;
  }

  .credential-description {
    font-size: 0.9rem;
  }
}
</style>
