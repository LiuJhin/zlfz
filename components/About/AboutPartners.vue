<template>
  <section id="partners" class="about-partners">
    <div class="about-partners-container">
      <div class="section-header">
        <h2 class="section-title">合作伙伴</h2>
        <p class="section-subtitle">与行业领导者共同创新</p>
        <div class="section-divider"></div>
      </div>
      
      <div class="partners-grid">
        <div v-for="(partner, index) in partners" :key="index" class="partner-card">
          <div class="partner-logo" :style="{ backgroundColor: partner.bgColor }">
            <span class="partner-initial">{{ partner.initial }}</span>
          </div>
          <h3 class="partner-name">{{ partner.name }}</h3>
          <p class="partner-description">{{ partner.description }}</p>
        </div>
      </div>
      
      <div class="partnership-cta">
        <h3 class="cta-title">成为我们的合作伙伴</h3>
        <p class="cta-description">
          我们欢迎各行各业的企业和组织与我们合作，共同探索区块链技术的应用场景和商业价值。
          无论您是寻求技术解决方案，还是希望建立战略合作关系，我们都期待与您沟通交流。
        </p>
        <a href="/contact" class="cta-button">联系我们</a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const partners = ref([
  {
    name: '科技创新集团',
    initial: 'T',
    description: '全球领先的科技企业，专注于人工智能和区块链技术的研发与应用。我们与其合作开发了多个创新项目。',
    bgColor: '#3B82F6'
  },
  {
    name: '金融科技公司',
    initial: 'F',
    description: '专注于金融科技领域的创新企业，我们共同打造了基于区块链的金融解决方案，提升交易效率和安全性。',
    bgColor: '#10B981'
  },
  {
    name: '供应链管理平台',
    initial: 'S',
    description: '全球知名的供应链管理平台，我们合作开发了区块链溯源系统，提高了供应链的透明度和可追溯性。',
    bgColor: '#F59E0B'
  },
  {
    name: '医疗健康集团',
    initial: 'H',
    description: '领先的医疗健康服务提供商，我们共同研发了基于区块链的医疗数据管理系统，保障患者数据安全。',
    bgColor: '#EC4899'
  },
  {
    name: '能源科技公司',
    initial: 'E',
    description: '专注于可再生能源领域的创新企业，我们合作开发了区块链能源交易平台，促进清洁能源的高效利用。',
    bgColor: '#8B5CF6'
  },
  {
    name: '政府机构',
    initial: 'G',
    description: '多个政府部门与我们合作，共同探索区块链技术在公共服务、数据共享和政务透明等领域的应用。',
    bgColor: '#6366F1'
  },
  {
    name: '教育科研机构',
    initial: 'A',
    description: '知名高校和研究机构，我们共同开展区块链技术研究，培养专业人才，推动技术创新和应用。',
    bgColor: '#14B8A6'
  },
  {
    name: '零售商业集团',
    initial: 'R',
    description: '大型零售企业，我们合作开发了区块链忠诚度计划和防伪溯源系统，提升客户体验和品牌价值。',
    bgColor: '#F97316'
  }
]);
</script>

<style scoped>
.about-partners {
  padding: 80px 0;
  background-color: var(--bg-color);
}

.about-partners-container {
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
  margin-bottom: 0.5rem;
  color: var(--text-color);
}

.section-subtitle {
  font-size: 1.2rem;
  color: var(--text-color-light);
  margin-bottom: 1rem;
}

.section-divider {
  width: 80px;
  height: 4px;
  background: linear-gradient(135deg, var(--primary-color) 0%, var(--primary-color-light) 100%);
  margin: 0 auto;
  border-radius: 2px;
}

.partners-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  margin-bottom: 60px;
}

.partner-card {
  background-color: var(--card-bg);
  border-radius: 12px;
  padding: 30px;
  box-shadow: var(--card-shadow);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-align: center;
}

.partner-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.partner-logo {
  width: 80px;
  height: 80px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
  color: white;
}

.partner-initial {
  font-size: 2.5rem;
  font-weight: 700;
}

.partner-name {
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 12px;
  color: var(--text-color);
}

.partner-description {
  font-size: 0.95rem;
  line-height: 1.6;
  color: var(--text-color-light);
}

.partnership-cta {
  background-color: var(--card-bg);
  border-radius: 12px;
  padding: 60px;
  text-align: center;
  box-shadow: var(--card-shadow);
  margin-top: 40px;
}

.cta-title {
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 20px;
  color: var(--text-color);
}

.cta-description {
  font-size: 1.1rem;
  line-height: 1.6;
  color: var(--text-color-light);
  max-width: 800px;
  margin: 0 auto 30px;
}

.cta-button {
  display: inline-block;
  padding: 12px 30px;
  background: linear-gradient(135deg, var(--primary-color) 0%, var(--primary-color-light) 100%);
  color: white;
  font-size: 1.1rem;
  font-weight: 500;
  border-radius: 30px;
  text-decoration: none;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.cta-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(130, 71, 229, 0.4);
}

@media (max-width: 1024px) {
  .partners-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 768px) {
  .partners-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .partnership-cta {
    padding: 40px 20px;
  }
  
  .cta-title {
    font-size: 1.8rem;
  }
}

@media (max-width: 576px) {
  .partners-grid {
    grid-template-columns: 1fr;
  }
  
  .partner-logo {
    width: 70px;
    height: 70px;
  }
  
  .partner-initial {
    font-size: 2rem;
  }
  
  .partner-name {
    font-size: 1.2rem;
  }
}
</style>