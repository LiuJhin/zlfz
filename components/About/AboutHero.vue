<template>
  <section class="about-hero">
    <!-- Three.js背景动画 -->
    <ThreeBackground />
    
    <div class="about-hero-container">
      <div class="about-hero-content">
        <!-- 使用文字动画组件 -->
        <AnimatedText 
          text="关于我们" 
          type="heading" 
          animation-type="stagger" 
          :duration="1.2" 
          class="about-hero-title"
        />
        
        <AnimatedText 
          text="区块链技术的创新者和引领者" 
          type="paragraph" 
          animation-type="slideUp" 
          :delay="0.5" 
          class="about-hero-subtitle"
        />
        
        <ScrollAnimations 
          animation="fadeIn" 
          :delay="0.8" 
          :threshold="0.1"
        >
          <p class="about-hero-description">
            我们致力于通过区块链技术解决现实世界的问题，为企业和组织提供安全、透明、高效的解决方案。
            作为行业的先驱，我们不断探索区块链技术的新边界，推动技术创新和应用落地。
          </p>
        </ScrollAnimations>
      </div>
      
      <div class="about-hero-image">
        <!-- 使用SVG动画替代静态图形 -->
        <AnimatedSvg class="about-hero-animated-svg" />
      </div>
    </div>
  </section>
</template>

<script setup>
// 导入动画组件
import ThreeBackground from '@/components/About/ThreeBackground.vue';
import AnimatedText from '@/components/About/AnimatedText.vue';
import AnimatedSvg from '@/components/About/AnimatedSvg.vue';
import ScrollAnimations from '@/components/About/ScrollAnimations.vue';
</script>

<style scoped>
.about-hero {
  padding: 80px 0;
  background-color: var(--bg-color);
  position: relative;
  overflow: hidden;
  min-height: 80vh;
  display: flex;
  align-items: center;
}

.about-hero-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.about-hero-content {
  flex: 1;
  max-width: 600px;
}

.about-hero-title {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, var(--primary-color) 0%, var(--primary-color-light) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.about-hero-subtitle {
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 1.5rem;
  color: var(--text-color);
}

.about-hero-description {
  font-size: 1.1rem;
  line-height: 1.6;
  color: var(--text-color-light);
  margin-bottom: 2rem;
}

.about-hero-image {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.about-hero-animated-svg {
  width: 400px;
  height: 400px;
}

@keyframes float {
  0% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-20px) rotate(5deg);
  }
  100% {
    transform: translateY(0px) rotate(0deg);
  }
}

@media (max-width: 768px) {
  .about-hero-container {
    flex-direction: column;
    text-align: center;
  }
  
  .about-hero-content {
    margin-bottom: 40px;
  }
  
  .about-hero-title {
    font-size: 2.5rem;
  }
  
  .about-hero-subtitle {
    font-size: 1.2rem;
  }
  
  .about-hero-graphic {
    width: 300px;
    height: 300px;
  }
}
</style>