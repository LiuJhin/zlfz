<template>
  <section id="partners" class="about-partners">
    <div class="about-partners-container">
      <div class="section-header">
        <h2 class="section-title">{{ $t('about.partners.title') }}</h2>
        <p class="section-subtitle">{{ $t('about.partners.subtitle') }}</p>
        <div class="section-divider"></div>
      </div>
      
      <div class="partners-grid">
        <div v-for="(partner, index) in partners" :key="index" class="partner-card">
          <div class="partner-logo" :style="{ backgroundColor: partner.bgColor }">
            <span class="partner-initial">{{ partner.initial }}</span>
          </div>
          <h3 class="partner-name">{{ $t(`about.partners.items.${partner.key}.name`) }}</h3>
          <p class="partner-description">{{ $t(`about.partners.items.${partner.key}.description`) }}</p>
        </div>
      </div>
      
      <div class="partnership-cta">
        <h3 class="cta-title">{{ $t('about.partners.cta.title') }}</h3>
        <p class="cta-description">
          {{ $t('about.partners.cta.description') }}
        </p>
        <a href="/contact" class="cta-button">{{ $t('about.partners.cta.button') }}</a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const partners = ref([
  {
    key: 'aws',
    initial: 'A',
    bgColor: '#3B82F6'
  },
  {
    key: 'azure',
    initial: 'M',
    bgColor: '#10B981'
  },
  {
    key: 'googleCloud',
    initial: 'G',
    bgColor: '#F59E0B'
  },
  {
    key: 'oracle',
    initial: 'O',
    bgColor: '#EC4899'
  },
  {
    key: 'singapore',
    initial: 'S',
    bgColor: '#8B5CF6'
  },
  {
    key: 'multinational',
    initial: 'M',
    bgColor: '#6366F1'
  },
  {
    key: 'education',
    initial: 'A',
    bgColor: '#14B8A6'
  },
  {
    key: 'retail',
    initial: 'R',
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