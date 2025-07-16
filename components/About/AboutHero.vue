<template>
  <section class="about-hero">
    <div class="about-hero-container">
      <div class="about-hero-content">
        <h1 class="about-hero-title">关于我们</h1>
        <p class="about-hero-subtitle">区块链技术的创新者和引领者</p>
        <p class="about-hero-description">
          我们致力于通过区块链技术解决现实世界的问题，为企业和组织提供安全、透明、高效的解决方案。
          作为行业的先驱，我们不断探索区块链技术的新边界，推动技术创新和应用落地。
        </p>
      </div>
      <div class="about-hero-image">
        <div class="about-hero-graphic"></div>
      </div>
    </div>
  </section>
</template>

<script setup>
// AboutHero组件逻辑
</script>

<style scoped>
.about-hero {
  padding: 80px 0;
  background-color: var(--bg-color);
  position: relative;
  overflow: hidden;
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

.about-hero-graphic {
  width: 400px;
  height: 400px;
  background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400"><path d="M200 20L380 200L200 380L20 200L200 20Z" fill="none" stroke="%238247e5" stroke-width="2"/><path d="M200 60L340 200L200 340L60 200L200 60Z" fill="none" stroke="%238247e5" stroke-width="2"/><path d="M200 100L300 200L200 300L100 200L200 100Z" fill="none" stroke="%238247e5" stroke-width="2"/><path d="M200 140L260 200L200 260L140 200L200 140Z" fill="none" stroke="%238247e5" stroke-width="2"/><circle cx="200" cy="200" r="20" fill="%238247e5"/></svg>') no-repeat center center;
  opacity: 0.8;
  animation: float 6s ease-in-out infinite;
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