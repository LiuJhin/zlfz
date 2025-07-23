<template>
  <section class="image-gallery-section">
    <div class="container">
      <h2 class="section-title">{{ $t("homePage.imageGallery.title") }}</h2>
      <p class="section-description">
        {{ $t("homePage.imageGallery.description") }}
      </p>

      <div class="gallery-grid">
        <div
          v-for="(image, index) in galleryImages"
          :key="index"
          class="gallery-item"
          :class="`gallery-item-${index + 1}`"
        >
          <!-- 这里使用色块代替图片，后续可以替换为实际图片 -->
          <div
            class="placeholder-block"
            :style="{ backgroundColor: image.color }"
          >
            <div class="image-overlay">
              <h3>{{ image.title }}</h3>
              <p>{{ image.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const galleryImages = [
  {
    title: "云计算解决方案",
    description: "企业级云基础设施与应用",
    color: "#3498db", // 蓝色
  },
  {
    title: "数据安全服务",
    description: "全方位数据保护与合规",
    color: "#2ecc71", // 绿色
  },
  {
    title: "数字化转型",
    description: "业务流程优化与创新",
    color: "#9b59b6", // 紫色
  },
  {
    title: "技术咨询服务",
    description: "专业技术团队支持",
    color: "#e74c3c", // 红色
  },
  {
    title: "行业解决方案",
    description: "针对不同行业的定制服务",
    color: "#f39c12", // 橙色
  },
  {
    title: "客户成功案例",
    description: "我们的成功项目展示",
    color: "#1abc9c", // 青绿色
  },
  {
    title: "金融科技应用",
    description: "金融行业数字化解决方案",
    color: "#34495e", // 深蓝色
  },
  {
    title: "医疗健康平台",
    description: "医疗数据安全与分析系统",
    color: "#16a085", // 深绿色
  },
  {
    title: "智慧零售系统",
    description: "零售行业数字化转型方案",
    color: "#8e44ad", // 深紫色
  },
  {
    title: "供应链管理",
    description: "全球供应链优化与追踪",
    color: "#c0392b", // 深红色
  },
  {
    title: "智能制造平台",
    description: "工业4.0数字化工厂方案",
    color: "#d35400", // 深橙色
  },
  {
    title: "政务云服务",
    description: "政府数字化转型解决方案",
    color: "#27ae60", // 深绿色
  },
];
</script>

<style scoped>
.image-gallery-section {
  padding: 80px 0;
  background-color: var(--bg-color);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.section-title {
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 20px;
  color: var(--text-color);
}

.section-description {
  text-align: center;
  max-width: 800px;
  margin: 0 auto 50px;
  color: var(--text-secondary);
  font-size: 1.1rem;
  line-height: 1.6;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 500px);
  gap: 20px;
}

.gallery-item {
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  transition: transform 0.3s ease;
}

.gallery-item:hover {
  transform: translateY(-5px);
}

.placeholder-block {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.image-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 15px;
  transform: translateY(100%);
  transition: transform 0.3s ease;
}

.gallery-item:hover .image-overlay {
  transform: translateY(0);
}

.image-overlay h3 {
  margin: 0 0 5px 0;
  font-size: 1.2rem;
}

.image-overlay p {
  margin: 0;
  font-size: 0.9rem;
  opacity: 0.8;
}

/* 响应式设计 */
@media (max-width: 1024px) {
  .gallery-grid {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(4, 180px);
  }
}

@media (max-width: 768px) {
  .section-title {
    font-size: 2rem;
  }

  .section-description {
    font-size: 1rem;
  }

  .gallery-grid {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(6, 160px);
  }
}

@media (max-width: 480px) {
  .gallery-grid {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(12, 180px);
  }

  .section-title {
    font-size: 1.8rem;
  }
}
</style>
