<template>
  <section class="features-section">
    <div class="features-container">
      <div class="section-header">
        <h2 class="section-title">专业云服务</h2>
        <p class="section-description">
          我们提供全方位的云服务解决方案，从战略咨询到迁移实施，从开发管理到运维管理，满足企业数字化转型的全生命周期需求
        </p>
        <div class="section-badges">
          <span class="badge">AWS</span>
          <span class="badge">Azure</span>
          <span class="badge">Google Cloud</span>
          <span class="badge">Oracle</span>
          <span class="badge">阿里云</span>
          <span class="badge">腾讯云</span>
          <span class="badge">华为云</span>
        </div>
        <div class="learn-more-btn">
          <a href="#" class="btn-primary">了解更多</a>
        </div>
      </div>

      <div class="features-layout">
        <!-- 左侧菜单 -->
        <div class="features-menu">
          <div
            v-for="(item, index) in featureItems"
            :key="index"
            class="menu-item"
            :class="{ active: index === activeCard }"
            @click="setActiveCard(index)"
          >
            <div class="menu-icon">
              <component :is="getMenuIcon(index)" />
            </div>
            <div class="menu-text">{{ item.title }}</div>
          </div>
        </div>

        <!-- 右侧内容区域 -->
        <div class="features-content">
          <div class="feature-header">
            <h3 class="feature-title">
              {{ featureItems[activeCard].title }}
            </h3>
            <p class="feature-subtitle">{{ getSubtitle(activeCard) }}</p>
          </div>
          <div class="feature-cards">
            <div
              v-for="(desc, i) in getDescriptions(activeCard)"
              :key="i"
              class="feature-card"
            >
              <div class="card-icon">
                <component :is="getCardIcon(i)" class="icon-primary" />
              </div>
              <div class="card-content">
                <h4 class="card-title">{{ getCardTitle(activeCard, i) }}</h4>
                <div class="card-text">{{ desc }}</div>
              </div>
            </div>
          </div>
          <div class="feature-footer">
            <div class="feature-stats">
              <div class="stat-item">
                <span class="stat-number">10+</span>
                <span class="stat-label">年行业经验</span>
              </div>
              <div class="stat-item">
                <span class="stat-number">200+</span>
                <span class="stat-label">成功案例</span>
              </div>
              <div class="stat-item">
                <span class="stat-number">50+</span>
                <span class="stat-label">专业顾问</span>
              </div>
              <div class="stat-item">
                <span class="stat-number">30%</span>
                <span class="stat-label">成本节省</span>
              </div>
              <div class="stat-item">
                <span class="stat-number">99.9%</span>
                <span class="stat-label">服务可用性</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, h } from "vue";

// 设置当前激活的卡片
const activeCard = ref(0);

const setActiveCard = (index) => {
  activeCard.value = index;
};

// 特性项目数据
const featureItems = [
  {
    title: "战略咨询",
    description:
      "业务战略分析，云架构评估，数字化转型规划，技术选型咨询，成本优化分析，合规性评估",
    subtitle: "专业的战略咨询服务，帮助企业制定完整的云战略和数字化转型路线图",
    icon: "BusinessIcon",
    cardTitles: [
      "业务战略分析",
      "云架构评估",
      "数字化转型规划",
      "技术选型咨询",
    ],
  },
  {
    title: "迁移实施",
    description:
      "应用迁移评估，数据迁移方案，混合云架构设计，迁移风险管理，性能优化，迁移后验证",
    subtitle: "专业的云迁移服务，确保业务系统平稳高效地迁移到云环境",
    icon: "MigrationIcon",
    cardTitles: [
      "应用迁移评估",
      "数据迁移方案",
      "混合云架构设计",
      "迁移风险管理",
    ],
  },
  {
    title: "开发管理",
    description:
      "DevOps流程实施，CI/CD管道构建，微服务架构开发，容器化应用开发，API管理，自动化测试",
    subtitle: "现代化的开发管理服务，提升开发效率和软件质量",
    icon: "SolutionIcon",
    cardTitles: [
      "DevOps流程实施",
      "CI/CD管道构建",
      "微服务架构开发",
      "容器化应用开发",
    ],
  },
  {
    title: "运维管理",
    description:
      "云资源监控，自动化运维，安全合规管理，成本优化，灾备方案，性能调优，日志分析",
    subtitle: "全面的云运维管理服务，确保系统稳定运行和业务连续性",
    icon: "ArchitectureIcon",
    cardTitles: ["云资源监控", "自动化运维", "安全合规管理", "成本优化"],
  },
];

// 获取子标题
const getSubtitle = (index) => {
  return featureItems[index].subtitle || "";
  // 直接返回中文内容，不再使用国际化字符串
};

// 获取描述列表
const getDescriptions = (index) => {
  const description = featureItems[index].description;
  return description ? description.split("，") : [];
};

// 获取卡片标题
const getCardTitle = (cardIndex, itemIndex) => {
  const titles = featureItems[cardIndex].cardTitles;
  return titles && titles[itemIndex] ? titles[itemIndex] : "";
};

// 菜单图标组件
const BusinessIcon = () =>
  h(
    "svg",
    {
      width: 24,
      height: 24,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
    },
    [
      h("path", {
        d: "M16 2H8C4 2 2 4 2 8V21C2 21.55 2.45 22 3 22H16C20 22 22 20 22 16V8C22 4 20 2 16 2Z",
        stroke: "currentColor",
        "stroke-width": 1.5,
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
      }),
      h("path", {
        d: "M12.91 7.84L7.72 13.03C7.52 13.23 7.33 13.62 7.29 13.9L7.01 15.88C6.91 16.6 7.41 17.1 8.13 17L10.11 16.72C10.39 16.68 10.78 16.49 10.98 16.29L16.17 11.1C17.06 10.21 17.49 9.17 16.17 7.85C14.85 6.52 13.81 6.94 12.91 7.84Z",
        stroke: "currentColor",
        "stroke-width": 1.5,
        "stroke-miterlimit": 10,
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
      }),
      h("path", {
        d: "M12.17 8.58C12.61 10.15 13.84 11.39 15.42 11.83",
        stroke: "currentColor",
        "stroke-width": 1.5,
        "stroke-miterlimit": 10,
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
      }),
    ]
  );

const SolutionIcon = () =>
  h(
    "svg",
    {
      width: 24,
      height: 24,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
    },
    [
      h("path", {
        d: "M21 7v10c0 3-1.5 5-5 5H8c-3.5 0-5-2-5-5V7c0-3 1.5-5 5-5h8c3.5 0 5 2 5 5Z",
        stroke: "currentColor",
        "stroke-width": 1.5,
        "stroke-miterlimit": 10,
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
      }),
      h("path", {
        d: "M14.5 4.5v2c0 1.1.9 2 2 2h2M10 13l-2 2l-2-2M10 17l-2-2M14 13h.01M18 13h.01M18 17h.01M14 17h.01",
        stroke: "currentColor",
        "stroke-width": 1.5,
        "stroke-miterlimit": 10,
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
      }),
    ]
  );

const ArchitectureIcon = () =>
  h(
    "svg",
    {
      width: 24,
      height: 24,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
    },
    [
      h("path", {
        d: "M2 22h20M12 2v20M2 12h20M2 7h10M2 17h10M14 17h8M14 7h8",
        stroke: "currentColor",
        "stroke-width": 1.5,
        "stroke-miterlimit": 10,
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
      }),
    ]
  );

const MigrationIcon = () =>
  h(
    "svg",
    {
      width: 24,
      height: 24,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
    },
    [
      h("path", {
        d: "M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7Z",
        stroke: "currentColor",
        "stroke-width": 1.5,
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
      }),
      h("path", {
        d: "M10.59 13.34h2.42c.83 0 1.5-.67 1.5-1.5 0-.82-.67-1.5-1.5-1.5h-2.42v3ZM10.59 10.34H13c.83 0 1.5-.67 1.5-1.5 0-.82-.67-1.5-1.5-1.5h-2.41v3ZM10.73 13.34v2.66M8.59 10.34v-2.5M8.59 16v-5.66M14.5 10.34v2.5",
        stroke: "currentColor",
        "stroke-width": 1.5,
        "stroke-miterlimit": 10,
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
      }),
    ]
  );

// 卡片图标组件
const cardIcons = [
  // 金字塔图标
  () =>
    h(
      "svg",
      {
        width: 40,
        height: 40,
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
      },
      [
        h("path", {
          d: "M12 2L2 7L12 12L22 7L12 2Z",
          fill: "currentColor",
        }),
        h("path", {
          d: "M12 12L2 7L2 17L12 22L22 17L22 7L12 12Z",
          fill: "currentColor",
          opacity: 0.5,
        }),
      ]
    ),
  // 图表图标
  () =>
    h(
      "svg",
      {
        width: 40,
        height: 40,
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
      },
      [
        h("path", {
          d: "M18 20V10M12 20V4M6 20v-6",
          stroke: "currentColor",
          "stroke-width": 2,
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
        }),
      ]
    ),
  // 云图标
  () =>
    h(
      "svg",
      {
        width: 40,
        height: 40,
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
      },
      [
        h("path", {
          d: "M7.5 17H7c-3 0-5-1.5-5-5 0-2.76 2.24-5 5-5 .5-2.5 2.72-4 5.5-4 2.54 0 4.63 1.65 5.32 4h.68c2.21 0 4 1.79 4 4 0 2.5-2 4.5-4.5 4.5h-1",
          stroke: "currentColor",
          "stroke-width": 1.5,
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
        }),
        h("path", {
          d: "M15 17l-3 3-3-3M12 14v6",
          stroke: "currentColor",
          "stroke-width": 1.5,
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
        }),
      ]
    ),
  // 设置图标
  () =>
    h(
      "svg",
      {
        width: 40,
        height: 40,
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
      },
      [
        h("path", {
          d: "M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z",
          stroke: "currentColor",
          "stroke-width": 1.5,
          "stroke-miterlimit": 10,
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
        }),
        h("path", {
          d: "M2 12.88v-1.76c0-1.04.85-1.9 1.9-1.9 1.81 0 2.55-1.28 1.64-2.85-.52-.9-.21-2.07.7-2.59l1.73-.99c.79-.47 1.81-.19 2.28.6l.11.19c.9 1.57 2.38 1.57 3.29 0l.11-.19c.47-.79 1.49-1.07 2.28-.6l1.73.99c.91.52 1.22 1.69.7 2.59-.91 1.57-.17 2.85 1.64 2.85 1.04 0 1.9.85 1.9 1.9v1.76c0 1.04-.85 1.9-1.9 1.9-1.81 0-2.55 1.28-1.64 2.85.52.91.21 2.07-.7 2.59l-1.73.99c-.79.47-1.81.19-2.28-.6l-.11-.19c-.9-1.57-2.38-1.57-3.29 0l-.11.19c-.47.79-1.49 1.07-2.28.6l-1.73-.99a1.899 1.899 0 0 1-.7-2.59c.91-1.57.17-2.85-1.64-2.85-1.05 0-1.9-.86-1.9-1.9Z",
          stroke: "currentColor",
          "stroke-width": 1.5,
          "stroke-miterlimit": 10,
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
        }),
      ]
    ),
  // 数据库图标
  () =>
    h(
      "svg",
      {
        width: 40,
        height: 40,
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
      },
      [
        h("path", {
          d: "M20 14v2c0 3-1.79 5-5 5H9c-3.21 0-5-2-5-5V8c0-3 1.79-5 5-5h6c3.21 0 5 2 5 5",
          stroke: "currentColor",
          "stroke-width": 1.5,
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
        }),
        h("path", {
          d: "M19.5 9a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM12 15c1.1 0 2-.9 2-2v-2c0-1.1-.9-2-2-2s-2 .9-2 2v2c0 1.1.9 2 2 2Z",
          stroke: "currentColor",
          "stroke-width": 1.5,
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
        }),
      ]
    ),
  // 安全图标
  () =>
    h(
      "svg",
      {
        width: 40,
        height: 40,
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
      },
      [
        h("path", {
          d: "M10.49 2.23 5.5 4.11c-1.15.43-2.09 1.79-2.09 3.01v7.43c0 1.18.78 2.73 1.73 3.44l4.3 3.21c1.41 1.06 3.73 1.06 5.14 0l4.3-3.21c.95-.71 1.73-2.26 1.73-3.44V7.12c0-1.23-.94-2.59-2.09-3.02l-4.99-1.87c-.85-.31-2.21-.31-3.04 0Z",
          stroke: "currentColor",
          "stroke-width": 1.5,
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
        }),
        h("path", {
          d: "M12 12.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM12 12.5v3",
          stroke: "currentColor",
          "stroke-width": 1.5,
          "stroke-miterlimit": 10,
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
        }),
      ]
    ),
];

// 获取菜单图标
const getMenuIcon = (index) => {
  const icons = [BusinessIcon, SolutionIcon, ArchitectureIcon, MigrationIcon];
  return icons[index];
};

// 获取卡片图标
const getCardIcon = (index) => {
  return cardIcons[index % cardIcons.length];
};
</script>

<style scoped>
.features-section {
  padding: 80px 0;
  background-color: var(--bg-color);
  color: var(--text-color);
  position: relative;
  overflow: hidden;
}

/* 背景装饰元素 */
.features-section::before,
.features-section::after {
  content: "";
  position: absolute;
  border-radius: 50%;
  z-index: 0;
}

.features-section::before {
  width: 300px;
  height: 300px;
  background: radial-gradient(
    circle,
    var(--primary-color-light, #9b6ff6) 0%,
    transparent 70%
  );
  top: -100px;
  left: -100px;
  opacity: 0.1;
}

.features-section::after {
  width: 400px;
  height: 400px;
  background: radial-gradient(
    circle,
    var(--primary-color, #8247e5) 0%,
    transparent 70%
  );
  bottom: -200px;
  right: -200px;
  opacity: 0.05;
}

.features-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
  z-index: 1;
}

.section-header {
  text-align: center;
  margin-bottom: 60px;
  position: relative;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--text-color);
  margin-bottom: 16px;
  line-height: 1.2;
  position: relative;
  display: inline-block;
}

.section-title::after {
  content: "";
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 3px;
  background-color: var(--primary-color, #8247e5);
  border-radius: 3px;
}

.section-description {
  font-size: 1.1rem;
  max-width: 700px;
  margin: 0 auto 20px;
  color: var(--text-color);
  opacity: 0.8;
}

.section-badges {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 20px;
}

.badge {
  display: inline-block;
  padding: 6px 12px;
  background-color: rgba(130, 71, 229, 0.1);
  color: var(--primary-color, #8247e5);
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
  border: 1px solid rgba(130, 71, 229, 0.2);
  transition: all 0.3s ease;
}

.badge:hover {
  background-color: var(--primary-color, #8247e5);
  color: white;
  transform: translateY(-2px);
}

.learn-more-btn {
  margin-bottom: 40px;
}

.btn-primary {
  display: inline-block;
  background-color: var(--primary-color, #8247e5);
  color: white;
  padding: 12px 24px;
  border-radius: 30px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(130, 71, 229, 0.3);
}

.btn-primary:hover {
  background-color: var(--primary-color-dark, #6b38c1);
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(130, 71, 229, 0.4);
}

.features-layout {
  display: flex;
  gap: 40px;
  min-height: 500px;
  margin-top: 40px;
}

/* 左侧菜单样式 */
.features-menu {
  width: 240px;
  flex-shrink: 0;
  background-color: var(--card-bg);
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid var(--border-color);
  box-shadow: var(--card-shadow);
  transition: all 0.3s ease;
}

.menu-item {
  display: flex;
  align-items: center;
  padding: 18px 24px;
  cursor: pointer;
  transition: all 0.3s ease;
  border-left: 4px solid transparent;
  position: relative;
  margin-bottom: 4px;
}

.menu-item:hover,
.menu-item.active {
  background-color: rgba(130, 71, 229, 0.08);
  border-left-color: var(--primary-color, #8247e5);
  transform: translateX(5px);
}

.menu-item:last-child {
  margin-bottom: 0;
}

.menu-icon {
  margin-right: 16px;
  color: var(--primary-color, #8247e5);
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(130, 71, 229, 0.1);
  padding: 8px;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.menu-item:hover .menu-icon,
.menu-item.active .menu-icon {
  background-color: rgba(130, 71, 229, 0.2);
  color: var(--primary-color, #8247e5);
  transform: scale(1.1);
}

.menu-text {
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--text-color);
  transition: all 0.3s ease;
}

.menu-item:hover .menu-text,
.menu-item.active .menu-text {
  color: var(--primary-color, #8247e5);
}

/* 右侧内容区域样式 */
.features-content {
  flex-grow: 1;
  background-color: var(--card-bg);
  border-radius: 12px;
  padding: 40px;
  border: 1px solid var(--border-color);
  display: flex;
  flex-direction: column;
  box-shadow: var(--card-shadow);
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
}

.features-content::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  width: 150px;
  height: 150px;
  background: radial-gradient(
    circle,
    rgba(130, 71, 229, 0.1) 0%,
    transparent 70%
  );
  border-radius: 50%;
  z-index: 0;
}

.feature-header {
  margin-bottom: 40px;
  position: relative;
  z-index: 1;
}

.feature-title {
  font-size: 2rem;
  font-weight: 700;
  color: var(--text-color);
  margin-bottom: 0;
  position: relative;
  display: inline-block;
}

.feature-title::after {
  content: "";
  position: absolute;
  bottom: -10px;
  left: 0;
  width: 60px;
  height: 3px;
  background-color: var(--primary-color, #8247e5);
  border-radius: 3px;
}

.feature-subtitle {
  font-size: 1.1rem;
  color: var(--text-color);
  opacity: 0.7;
  margin-top: 15px;
  line-height: 1.6;
  max-width: 90%;
}

.feature-cards {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  position: relative;
  z-index: 1;
}

.feature-card {
  background-color: var(--card-bg);
  border-radius: 12px;
  padding: 24px;
  transition: all 0.3s ease;
  border: 1px solid var(--border-color);
  display: flex;
  align-items: flex-start;
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(5px);
  box-shadow: var(--card-shadow);
}

.feature-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 4px;
  height: 0;
  background-color: var(--primary-color, #8247e5);
  transition: height 0.3s ease;
  border-radius: 0 2px 2px 0;
}

.feature-card:hover::before {
  height: 100%;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  border-color: var(--primary-color-light, #9b6ff6);
  background-color: var(--card-bg);
}

.dark-theme .feature-card:hover {
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
}

.card-icon {
  margin-right: 18px;
  color: var(--primary-color, #8247e5);
  flex-shrink: 0;
  background-color: rgba(130, 71, 229, 0.1);
  padding: 10px;
  border-radius: 10px;
  transition: all 0.3s ease;
}

.feature-card:hover .card-icon {
  background-color: rgba(130, 71, 229, 0.2);
  transform: scale(1.1);
}

.card-content {
  flex: 1;
}

.card-title {
  font-size: 1.15rem;
  font-weight: 600;
  color: var(--text-color);
  margin: 0 0 8px 0;
  transition: all 0.3s ease;
}

.feature-card:hover .card-title {
  color: var(--primary-color, #8247e5);
}

.card-text {
  font-size: 1rem;
  line-height: 1.7;
  color: var(--text-color);
  opacity: 0.8;
  font-weight: 400;
  transition: all 0.3s ease;
}

.feature-card:hover .card-text {
  color: var(--text-color);
  opacity: 1;
}

.feature-footer {
  margin-top: 40px;
  border-top: 1px solid var(--border-color);
  padding-top: 30px;
}

.feature-stats {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 20px;
}

.stat-item {
  text-align: center;
  padding: 15px;
  border-radius: 10px;
  background-color: rgba(130, 71, 229, 0.05);
  min-width: 120px;
  transition: all 0.3s ease;
}

.stat-item:hover {
  transform: translateY(-5px);
  background-color: rgba(130, 71, 229, 0.1);
}

.stat-number {
  display: block;
  font-size: 2rem;
  font-weight: 700;
  color: var(--primary-color, #8247e5);
  margin-bottom: 5px;
}

.stat-label {
  font-size: 0.9rem;
  color: var(--text-color);
  opacity: 0.8;
}

.icon-primary {
  color: var(--primary-color, #8247e5);
}

/* 响应式设计 */
@media (max-width: 1200px) {
  .feature-cards {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  .features-container {
    padding: 0 30px;
  }

  .features-layout {
    gap: 30px;
  }
}

@media (max-width: 992px) {
  .features-layout {
    flex-direction: column;
  }

  .features-menu {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 10px;
  }

  .menu-item {
    border-left: none;
    border-bottom: 4px solid transparent;
    padding: 15px 20px;
    margin: 0 5px 10px;
    width: calc(50% - 10px);
    justify-content: flex-start;
    border-radius: 8px;
  }

  .menu-item:hover,
  .menu-item.active {
    border-left-color: transparent;
    border-bottom-color: var(--primary-color, #8247e5);
    transform: translateY(-3px);
  }

  .features-content {
    padding: 30px;
  }

  .feature-title {
    font-size: 1.8rem;
  }

  .feature-title::after {
    width: 50px;
  }

  .section-title::after {
    width: 70px;
  }
}

@media (max-width: 768px) {
  .section-title {
    font-size: 2rem;
  }

  .feature-cards {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .feature-card {
    padding: 20px;
  }

  .feature-title {
    font-size: 1.6rem;
  }

  .feature-subtitle {
    font-size: 1rem;
    max-width: 100%;
  }

  .menu-text {
    font-size: 0.95rem;
  }

  .card-icon {
    padding: 8px;
  }

  .card-title {
    font-size: 1.05rem;
  }

  .features-section {
    padding: 60px 0;
  }

  .feature-stats {
    gap: 15px;
  }

  .stat-item {
    padding: 12px;
    min-width: 100px;
  }

  .stat-number {
    font-size: 1.8rem;
  }

  .stat-label {
    font-size: 0.85rem;
  }

  .badge {
    font-size: 0.8rem;
    padding: 5px 10px;
  }

  .section-header {
    margin-bottom: 40px;
  }

  .features-section::before {
    width: 200px;
    height: 200px;
    top: -50px;
    left: -50px;
  }

  .features-section::after {
    width: 250px;
    height: 250px;
    bottom: -100px;
    right: -100px;
  }
}

@media (max-width: 576px) {
  .menu-item {
    width: 100%;
    justify-content: flex-start;
    margin-bottom: 8px;
  }

  .features-content {
    padding: 25px 20px;
  }

  .feature-header {
    margin-bottom: 30px;
  }

  .feature-title {
    font-size: 1.4rem;
  }

  .feature-subtitle {
    font-size: 0.95rem;
  }

  .card-title {
    font-size: 1rem;
  }

  .card-text {
    font-size: 0.95rem;
  }

  .section-description {
    font-size: 1rem;
  }

  .section-title::after {
    width: 60px;
  }

  .btn-primary {
    padding: 10px 20px;
    font-size: 0.95rem;
  }

  .feature-footer {
    margin-top: 30px;
    padding-top: 20px;
  }

  .feature-stats {
    flex-direction: column;
    gap: 10px;
  }

  .stat-item {
    width: 100%;
    padding: 10px;
  }

  .section-badges {
    gap: 5px;
  }

  .badge {
    font-size: 0.75rem;
    padding: 4px 8px;
  }
}
</style>
