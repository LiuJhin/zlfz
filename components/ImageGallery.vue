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
          :class="[
            `gallery-item-${index + 1}`,
            image.orientation ? `orientation-${image.orientation}` : '',
          ]"
        >
          <!-- 根据是否有图片路径或颜色来决定显示方式 -->
          <div v-if="image.src" class="image-container">
            <img :src="image.src" :alt="image.title" />
            <div class="image-overlay">
              <h3>{{ image.title }}</h3>
              <p>{{ image.description }}</p>
            </div>
          </div>

          <div
            v-else
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
import aws from "../assets/image/credential/aws.jpg";
import Azure from "../assets/image/credential/Azure.jpg";
import GCP from "../assets/image/credential/GCP.jpg";
import oci from "../assets/image/credential/oci.jpg";
import Tencent from "../assets/image/credential/Tencent.jpg";

const galleryImages = [
  {
    title: "AWS",
    description: "亚马逊云服务合作伙伴",
    src: aws,
    orientation: "portrait", // 竖向图片
  },
  {
    title: "腾讯云",
    description: "腾讯云服务合作伙伴",
    src: Tencent,
    orientation: "portrait", // 竖向图片
  },
  {
    title: "Oracle Cloud",
    description: "甲骨文云服务合作伙伴",
    src: oci,
    orientation: "landscape", // 横向图片
  },
  {
    title: "Microsoft Azure",
    description: "微软云服务合作伙伴",
    src: Azure,
    orientation: "landscape", // 横向图片
  },
  {
    title: "Google Cloud",
    description: "谷歌云服务合作伙伴",
    src: GCP,
    orientation: "landscape", // 横向图片
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
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 250px);
  gap: 20px;
  grid-auto-flow: dense; /* 自动填充空白区域 */
}

.gallery-item {
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  transition: transform 0.3s ease;
}

/* 横向图片占据2列2行 */
.orientation-landscape {
  grid-column: span 1;
  grid-row: span 2;
}

/* 纵向图片占据1列2行 */
.orientation-portrait {
  grid-column: span 1;
  grid-row: span 3;
}

/* 默认图片占据1列1行 */
.gallery-item:not(.orientation-landscape):not(.orientation-portrait) {
  grid-column: span 1;
  grid-row: span 1;
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

.image-container {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* 保持图片比例并填充容器 */
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

  /* 在平板上调整布局 */
  .orientation-landscape {
    grid-column: span 1;
    grid-row: span 2;
  }

  .orientation-portrait {
    grid-column: span 1;
    grid-row: span 2;
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

  /* 在中等手机上调整布局 */
  .orientation-landscape {
    grid-column: span 1;
    grid-row: span 2;
  }

  .orientation-portrait {
    grid-column: span 1;
    grid-row: span 2;
  }
}

@media (max-width: 480px) {
  .gallery-grid {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
  }

  /* 在小屏幕上所有图片都占满宽度 */
  .orientation-landscape,
  .orientation-portrait {
    grid-column: span 1;
    grid-row: span 1;
    height: 200px;
  }

  .gallery-item {
    height: 200px;
  }

  .section-title {
    font-size: 1.8rem;
  }
}
</style>
