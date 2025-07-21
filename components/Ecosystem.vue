<template>
  <section class="ecosystem-section">
    <div class="ecosystem-container">
      <div class="section-header">
        <h2 class="section-title">The largest and most thriving ecosystem</h2>
      </div>

      <div class="ecosystem-stats">
        <div class="stat-item">
          <div class="stat-value">28K+</div>
          <div class="stat-label">Total Contract Creators</div>
        </div>
        <div class="stat-item">
          <div class="stat-value">219.11M+</div>
          <div class="stat-label">Unique Addresses</div>
        </div>
        <div class="stat-item">
          <div class="stat-value">2.44B+</div>
          <div class="stat-label">Transactions</div>
        </div>
        <div class="stat-item">
          <div class="stat-value">12.80B+</div>
          <div class="stat-label">NFT Sales Volume</div>
        </div>
        <div class="stat-item">
          <div class="stat-value">~$0.015</div>
          <div class="stat-label">Avg. Cost per txn</div>
        </div>
        <div class="stat-item">
          <div class="stat-value">1.17M+</div>
          <div class="stat-label">Deployed Smart Contracts</div>
        </div>
      </div>

      <div class="partners-section">
        <h3 class="partners-title">Industry Giants We Are Trusted By</h3>
        <div class="partners-grid">
          <div class="partner-logo" v-for="partner in partners" :key="partner.id">
            <div class="logo-placeholder">
              <img
                :src="partner.logo"
                :alt="partner.name"
                @error="handleImageError"
                loading="lazy"
              />
              <div class="partner-info">
                <span class="partner-name">{{ partner.name }}</span>
                <span class="partner-category">{{ partner.category }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// 图片加载错误处理
const handleImageError = (event) => {
  event.target.style.display = 'none';
  event.target.nextElementSibling.style.display = 'block';
};

// 合作伙伴数据
const partners = [
  {
    id: 1,
    name: 'Amazon Web Services',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg',
    category: 'Cloud Provider'
  },
  {
    id: 2,
    name: 'Microsoft Azure',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg',
    category: 'Cloud Provider'
  },
  {
    id: 3,
    name: 'Google Cloud',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg',
    category: 'Cloud Provider'
  },
  {
    id: 4,
    name: 'Docker',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Docker_%28container_engine%29_logo.svg',
    category: 'Container Platform'
  },
  {
    id: 5,
    name: 'Kubernetes',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/3/39/Kubernetes_logo_without_workmark.svg',
    category: 'Orchestration'
  },
  {
    id: 6,
    name: 'Terraform',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/0/04/Terraform_Logo.svg',
    category: 'Infrastructure as Code'
  },
  {
    id: 7,
    name: 'Jenkins',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e9/Jenkins_logo.svg',
    category: 'CI/CD'
  },
  {
    id: 8,
    name: 'GitLab',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/1/18/GitLab_Logo.svg',
    category: 'DevOps Platform'
  },
  {
    id: 9,
    name: 'MongoDB',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg',
    category: 'Database'
  },
  {
    id: 10,
    name: 'Redis',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/6/64/Logo-redis.svg',
    category: 'Cache & Database'
  },
  {
    id: 11,
    name: 'Elasticsearch',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/f/f4/Elasticsearch_logo.svg',
    category: 'Search Engine'
  },
  {
    id: 12,
    name: 'Grafana',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a1/Grafana_logo.svg',
    category: 'Monitoring'
  },
  {
    id: 13,
    name: 'Prometheus',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/3/38/Prometheus_software_logo.svg',
    category: 'Monitoring'
  },
  {
    id: 14,
    name: 'NGINX',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c5/Nginx_logo.svg',
    category: 'Web Server'
  },
  {
    id: 15,
    name: 'Apache Kafka',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Apache_kafka.svg',
    category: 'Message Broker'
  },
  {
    id: 16,
    name: 'Istio',
    logo: 'https://landscape.cncf.io/logos/istio.svg',
    category: 'Service Mesh'
  },
  {
    id: 17,
    name: 'Helm',
    logo: 'https://landscape.cncf.io/logos/helm.svg',
    category: 'Package Manager'
  },
  {
    id: 18,
    name: 'Consul',
    logo: 'https://landscape.cncf.io/logos/consul.svg',
    category: 'Service Discovery'
  },
  {
    id: 19,
    name: 'Vault',
    logo: 'https://landscape.cncf.io/logos/vault.svg',
    category: 'Secret Management'
  },
  {
    id: 20,
    name: 'Datadog',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Datadog_logo.svg',
    category: 'Monitoring'
  },
  {
    id: 21,
    name: 'Splunk',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e8/Splunk-Logo.svg',
    category: 'Analytics'
  },
  {
    id: 22,
    name: 'Snowflake',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/f/ff/Snowflake_Logo.svg',
    category: 'Data Warehouse'
  },
  {
    id: 23,
    name: 'Tableau',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Tableau_Logo.png',
    category: 'Business Intelligence'
  },
  {
    id: 24,
    name: 'Slack',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg',
    category: 'Communication'
  }
];
</script>

<style scoped>
.ecosystem-section {
  padding: 80px 0;
  background-color: var(--bg-color);
}

.ecosystem-container {
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

.ecosystem-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 30px;
  margin-bottom: 80px;
}

.stat-item {
  text-align: center;
  padding: 20px;
  background-color: var(--card-bg);
  border-radius: 16px;
  border: 1px solid var(--border-color);
  transition: all 0.3s ease;
}

.stat-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  border-color: var(--primary-color);
}

.stat-value {
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--primary-color);
  margin-bottom: 8px;
}

.stat-label {
  font-size: 0.9rem;
  color: var(--text-color);
  opacity: 0.8;
}

.partners-section {
  margin-top: 80px;
}

.partners-title {
  font-size: 1.8rem;
  font-weight: 600;
  text-align: center;
  margin-bottom: 40px;
  color: var(--text-color);
}

.partners-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 30px;
}

.partner-logo {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  background-color: var(--card-bg);
  border-radius: 12px;
  border: 1px solid var(--border-color);
  transition: all 0.3s ease;
}

.partner-logo:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  border-color: var(--primary-color);
}

.logo-placeholder {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 16px;
  height: 100%;
  text-align: center;
}

.logo-placeholder img {
  max-width: 80px;
  max-height: 40px;
  object-fit: contain;
  margin-bottom: 12px;
  transition: transform 0.3s ease;
}

.partner-logo:hover .logo-placeholder img {
  transform: scale(1.1);
}

.partner-info {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.partner-name {
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--text-color);
  margin-bottom: 4px;
  line-height: 1.2;
}

.partner-category {
  font-size: 0.75rem;
  color: var(--text-secondary);
  opacity: 0.8;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .section-title {
    font-size: 2rem;
  }

  .ecosystem-stats {
    grid-template-columns: repeat(2, 1fr);
  }

  .partners-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .ecosystem-stats {
    grid-template-columns: 1fr;
  }
}
</style>
