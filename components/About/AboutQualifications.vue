<template>
  <section id="qualifications" class="about-qualifications">
    <div class="about-qualifications-container">
      <ScrollAnimations type="fadeIn" threshold="0.1">
        <div class="section-header">
          <AnimatedText
            tag="h2"
            class="section-title"
            type="slideUp"
            :delay="0.1"
            >{{ $t("about.qualifications.title") }}</AnimatedText
          >
          <AnimatedText
            tag="p"
            class="section-subtitle"
            type="fadeIn"
            :delay="0.3"
            >{{ $t("about.qualifications.subtitle") }}</AnimatedText
          >
          <div class="section-divider"></div>
        </div>
      </ScrollAnimations>

      <ScrollAnimations type="stagger" stagger="0.15" threshold="0.1">
        <div class="qualifications-grid">
          <div
            v-for="(qualification, index) in qualifications"
            :key="index"
            class="qualification-card"
          >
            <div
              class="qualification-icon svg-animate"
              :style="{ backgroundColor: qualification.bgColor }"
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  class="svg-path"
                  d="M12 15C15.866 15 19 11.866 19 8C19 4.13401 15.866 1 12 1C8.13401 1 5 4.13401 5 8C5 11.866 8.13401 15 12 15Z"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  class="svg-path"
                  d="M8.21 13.89L7 23L12 20L17 23L15.79 13.88"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div class="qualification-content">
              <AnimatedText
                tag="h3"
                class="qualification-title"
                type="fadeIn"
                :delay="0.1"
                >{{ qualification.title }}</AnimatedText
              >
              <p class="qualification-description">
                {{ qualification.description }}
              </p>
              <div class="qualification-details">
                <div class="qualification-detail">
                  <span class="detail-label">{{
                    $t("about.qualifications.labels.certNumber")
                  }}</span>
                  <span class="detail-value">{{
                    qualification.certNumber
                  }}</span>
                </div>
                <div class="qualification-detail">
                  <span class="detail-label">{{
                    $t("about.qualifications.labels.issueDate")
                  }}</span>
                  <span class="detail-value">{{
                    qualification.issueDate
                  }}</span>
                </div>
                <div class="qualification-detail">
                  <span class="detail-label">{{
                    $t("about.qualifications.labels.validUntil")
                  }}</span>
                  <span class="detail-value">{{
                    qualification.validUntil
                  }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ScrollAnimations>

      <ScrollAnimations type="fadeIn" threshold="0.1">
        <div class="certifications-section">
          <AnimatedText
            tag="h3"
            class="certifications-title"
            type="wave"
            :delay="0.1"
            >{{ $t("about.qualifications.certifications.title") }}</AnimatedText
          >
          <ScrollAnimations type="stagger" stagger="0.1" threshold="0.1">
            <div class="certifications-grid">
              <div
                v-for="(certification, index) in certifications"
                :key="index"
                class="certification-item"
              >
                <div
                  class="certification-logo shimmer"
                  :style="{ backgroundColor: certification.bgColor }"
                >
                  <span class="certification-abbr">{{
                    certification.abbr
                  }}</span>
                </div>
                <div class="certification-content">
                  <AnimatedText
                    tag="h4"
                    class="certification-name"
                    type="fadeIn"
                    :delay="0.1"
                    >{{ certification.name }}</AnimatedText
                  >
                  <p class="certification-description">
                    {{ certification.description }}
                  </p>
                </div>
              </div>
            </div>
          </ScrollAnimations>
        </div>
      </ScrollAnimations>
    </div>
  </section>
</template>

<script setup>
import { reactive, computed, onMounted, onBeforeUnmount } from "vue";
import AnimatedText from "./AnimatedText.vue";
import ScrollAnimations from "./ScrollAnimations.vue";
import { gsap } from "gsap";

const { t } = useI18n();

// 企业资质数据
const qualifications = computed(() => [
  {
    title: t("about.qualifications.items.highTech.title"),
    description: t("about.qualifications.items.highTech.description"),
    certNumber: "GR202111003456",
    issueDate: "2021-10-15",
    validUntil: "2024-10-14",
    bgColor: "var(--primary-color)",
  },
  {
    title: t("about.qualifications.items.software.title"),
    description: t("about.qualifications.items.software.description"),
    certNumber: "RQ20211100789",
    issueDate: "2021-08-20",
    validUntil: "2024-08-19",
    bgColor: "var(--secondary-color)",
  },
  {
    title: t("about.qualifications.items.iso9001.title"),
    description: t("about.qualifications.items.iso9001.description"),
    certNumber: "ISO9001-CN-123456",
    issueDate: "2022-03-10",
    validUntil: "2025-03-09",
    bgColor: "var(--accent-color)",
  },
  {
    title: t("about.qualifications.items.iso27001.title"),
    description: t("about.qualifications.items.iso27001.description"),
    certNumber: "ISO27001-CN-654321",
    issueDate: "2022-05-18",
    validUntil: "2025-05-17",
    bgColor: "#6366F1",
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

// 初始化 SVG 动画
onMounted(() => {
  // 初始化 SVG 路径动画
  const svgPaths = document.querySelectorAll(".svg-path");
  gsap.set(svgPaths, { strokeDasharray: 1000, strokeDashoffset: 1000 });

  // 使用 IntersectionObserver 监听 SVG 元素进入视口
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const paths = entry.target.querySelectorAll(".svg-path");
          gsap.to(paths, {
            strokeDashoffset: 0,
            duration: 2,
            stagger: 0.1,
            ease: "power2.out",
          });
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  // 监听所有 SVG 动画元素
  document.querySelectorAll(".svg-animate").forEach((svg) => {
    observer.observe(svg);
  });
});

// 清理动画资源
onBeforeUnmount(() => {
  // 清理 GSAP 动画
  gsap.killTweensOf(".svg-path");
});
</script>

<style scoped>
.about-qualifications {
  padding: 80px 0;
  background-color: var(--bg-color);
}

.about-qualifications-container {
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
}

.section-subtitle {
  font-size: 1.2rem;
  color: var(--text-secondary);
  margin-bottom: 20px;
}

.section-divider {
  width: 80px;
  height: 4px;
  background-color: var(--primary-color);
  margin: 0 auto;
  position: relative;
  overflow: hidden;
}

.section-divider::after {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.4),
    transparent
  );
  animation: shimmer 2s infinite;
}

@keyframes shimmer {
  0% {
    left: -100%;
  }
  100% {
    left: 100%;
  }
}

.qualifications-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  margin-bottom: 60px;
}

.qualification-card {
  display: flex;
  background-color: var(--card-bg);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.qualification-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.12);
}

.qualification-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  padding: 20px 0;
  color: white;
}

.svg-animate .svg-path {
  stroke-dasharray: 1000;
  stroke-dashoffset: 1000;
  animation: draw-path 2s forwards;
}

@keyframes draw-path {
  to {
    stroke-dashoffset: 0;
  }
}

.qualification-content {
  flex: 1;
  padding: 20px;
}

.qualification-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--text-color);
  margin-bottom: 10px;
}

.qualification-description {
  font-size: 0.95rem;
  color: var(--text-secondary);
  margin-bottom: 15px;
}

.qualification-details {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
}

.qualification-detail {
  font-size: 0.85rem;
}

.detail-label {
  color: var(--text-tertiary);
  margin-right: 5px;
}

.detail-value {
  color: var(--text-color);
  font-weight: 500;
}

.certifications-section {
  margin-top: 60px;
}

.certifications-title {
  font-size: 1.8rem;
  font-weight: 600;
  color: var(--text-color);
  text-align: center;
  margin-bottom: 40px;
}

.certifications-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

.certification-item {
  background-color: var(--card-bg);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.06);
  transition: transform 0.3s ease;
}

.certification-item:hover {
  transform: translateY(-5px);
}

.certification-logo {
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  position: relative;
  overflow: hidden;
}

.shimmer {
  position: relative;
}

.shimmer::after {
  content: "";
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(
    45deg,
    transparent,
    rgba(255, 255, 255, 0.2),
    transparent
  );
  transform: rotate(30deg);
  animation: shimmer-rotate 3s infinite linear;
}

@keyframes shimmer-rotate {
  0% {
    transform: rotate(30deg) translateX(-100%);
  }
  100% {
    transform: rotate(30deg) translateX(100%);
  }
}

.certification-abbr {
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: 1px;
  position: relative;
  z-index: 1;
}

.certification-content {
  padding: 20px;
}

.certification-name {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--text-color);
  margin-bottom: 10px;
}

.certification-description {
  font-size: 0.9rem;
  color: var(--text-secondary);
  line-height: 1.5;
}

/* 响应式样式 */
@media (max-width: 1024px) {
  .certifications-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .qualifications-grid {
    grid-template-columns: 1fr;
  }

  .section-title {
    font-size: 2rem;
  }

  .certifications-title {
    font-size: 1.5rem;
  }
}

@media (max-width: 576px) {
  .certifications-grid {
    grid-template-columns: 1fr;
  }

  .qualification-details {
    grid-template-columns: 1fr;
  }

  .qualification-icon {
    width: 60px;
  }
}
</style>
