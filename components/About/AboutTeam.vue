<template>
  <section id="team" class="about-team">
    <div class="about-team-container">
      <ScrollAnimations type="fadeIn" threshold="0.1">
        <div class="section-header">
          <AnimatedText tag="h2" class="section-title" type="slideUp" :delay="0.1">{{ $t('about.team.title') }}</AnimatedText>
          <AnimatedText tag="p" class="section-subtitle" type="fadeIn" :delay="0.3">{{ $t('about.team.subtitle') }}</AnimatedText>
          <div class="section-divider"></div>
        </div>
      </ScrollAnimations>
      
      <ScrollAnimations type="stagger" stagger="0.15" threshold="0.1">
        <div class="team-grid">
          <div v-for="(member, index) in teamMembers" :key="index" class="team-member-card">
            <div class="member-avatar">
              <div class="avatar-placeholder pulse-animation" :style="{ backgroundColor: member.avatarColor }">
                {{ member.initials }}
              </div>
            </div>
            <AnimatedText tag="h3" class="member-name" type="fadeIn" :delay="0.1">{{ $t(`about.team.members.${member.key}.name`) }}</AnimatedText>
            <AnimatedText tag="p" class="member-position" type="fadeIn" :delay="0.2">{{ $t(`about.team.members.${member.key}.position`) }}</AnimatedText>
            <p class="member-description">{{ $t(`about.team.members.${member.key}.description`) }}</p>
            <div class="member-social">
              <a v-for="social in member.social" :key="social.platform" :href="social.link" class="social-link" target="_blank">
                <svg v-if="social.platform === 'linkedin'" class="svg-animate" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path class="svg-path" d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path class="svg-path" d="M6 9H2V21H6V9Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path class="svg-path" d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <svg v-if="social.platform === 'twitter'" class="svg-animate" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path class="svg-path" d="M23 3C22.0424 3.67548 20.9821 4.19211 19.86 4.53C19.2577 3.83751 18.4573 3.34669 17.567 3.12393C16.6767 2.90116 15.7395 2.9572 14.8821 3.28445C14.0247 3.61171 13.2884 4.1944 12.773 4.95372C12.2575 5.71303 11.9877 6.61234 12 7.53V8.53C10.2426 8.57557 8.50127 8.18581 6.93101 7.39545C5.36074 6.60508 4.01032 5.43864 3 4C3 4 -1 13 8 17C5.94053 18.398 3.48716 19.0989 1 19C10 24 21 19 21 7.5C20.9991 7.22145 20.9723 6.94359 20.92 6.67C21.9406 5.66349 22.6608 4.39271 23 3Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <svg v-if="social.platform === 'github'" class="svg-animate" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path class="svg-path" d="M9 19C4.7 20.4 4.7 16.5 3 16M15 21V17.5C15 16.5 15.1 16.1 14.5 15.5C17.3 15.2 20 14.1 20 9.50001C19.9988 8.30498 19.5325 7.15732 18.7 6.30001C19.0905 5.26198 19.0545 4.11164 18.6 3.10001C18.6 3.10001 17.5 2.80001 15.1 4.40001C13.0672 3.8706 10.9328 3.8706 8.9 4.40001C6.5 2.80001 5.4 3.10001 5.4 3.10001C4.94548 4.11164 4.90953 5.26198 5.3 6.30001C4.46745 7.15732 4.00122 8.30498 4 9.50001C4 14.1 6.7 15.2 9.5 15.5C8.9 16.1 8.9 16.7 9 17.5V21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </ScrollAnimations>
      
      <ScrollAnimations type="fadeIn" threshold="0.1">
        <div class="join-team-section">
          <AnimatedText tag="h3" class="join-team-title" type="wave" :delay="0.1">{{ $t('about.team.join.title') }}</AnimatedText>
          <p class="join-team-description">
            {{ $t('about.team.join.description') }}
          </p>
          <a href="/contact" class="join-team-button shine-effect">{{ $t('about.team.join.button') }}</a>
        </div>
      </ScrollAnimations>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import AnimatedText from './AnimatedText.vue';
import ScrollAnimations from './ScrollAnimations.vue';
import { gsap } from 'gsap';

let observer;

onMounted(() => {
  // 初始化 SVG 路径动画
  const svgPaths = document.querySelectorAll('.svg-path');
  if (svgPaths.length > 0) {
    gsap.set(svgPaths, { strokeDasharray: 1000, strokeDashoffset: 1000 });
    
    // 使用 IntersectionObserver 监听 SVG 元素进入视口
    observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const paths = entry.target.querySelectorAll('.svg-path');
          gsap.to(paths, {
            strokeDashoffset: 0,
            duration: 2,
            stagger: 0.1,
            ease: 'power2.out'
          });
          // 一旦动画触发，不再观察该元素
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });
    
    // 观察所有包含 SVG 路径的元素
    document.querySelectorAll('.svg-animate').forEach(el => {
      observer.observe(el);
    });
  }
});

onBeforeUnmount(() => {
  // 清理 observer
  if (observer) {
    observer.disconnect();
  }
});

const teamMembers = ref([
  {
    key: 'zhangwei',
    initials: 'ZW',
    avatarColor: '#8247E5',
    social: [
      { platform: 'linkedin', link: '#' },
      { platform: 'twitter', link: '#' }
    ]
  },
  {
    key: 'liming',
    initials: 'LM',
    avatarColor: '#3B82F6',
    social: [
      { platform: 'linkedin', link: '#' },
      { platform: 'github', link: '#' }
    ]
  },
  {
    key: 'wangfang',
    initials: 'WF',
    avatarColor: '#EC4899',
    social: [
      { platform: 'linkedin', link: '#' },
      { platform: 'twitter', link: '#' }
    ]
  },
  {
    key: 'zhaoqiang',
    initials: 'ZQ',
    avatarColor: '#10B981',
    social: [
      { platform: 'linkedin', link: '#' },
      { platform: 'github', link: '#' }
    ]
  },
  {
    key: 'chenjing',
    initials: 'CJ',
    avatarColor: '#F59E0B',
    social: [
      { platform: 'linkedin', link: '#' },
      { platform: 'github', link: '#' }
    ]
  },
  {
    key: 'liuyang',
    initials: 'LY',
    avatarColor: '#6366F1',
    social: [
      { platform: 'linkedin', link: '#' },
      { platform: 'github', link: '#' }
    ]
  }
]);
</script>

<style scoped>
.about-team {
  padding: 80px 0;
  background-color: var(--bg-color);
}

.about-team-container {
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
  position: relative;
  overflow: hidden;
}

.section-divider::after {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
  animation: shimmer 2s infinite;
}

@keyframes shimmer {
  0% { left: -100%; }
  100% { left: 100%; }
}

.svg-path {
  stroke-dasharray: 1000;
  stroke-dashoffset: 1000;
  animation: draw-path 2s forwards;
}

@keyframes draw-path {
  to {
    stroke-dashoffset: 0;
  }
}

.pulse-animation {
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(130, 71, 229, 0.4);
  }
  70% {
    transform: scale(1.05);
    box-shadow: 0 0 0 10px rgba(130, 71, 229, 0);
  }
  100% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(130, 71, 229, 0);
  }
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-bottom: 60px;
}

.team-member-card {
  background-color: var(--card-bg);
  border-radius: 12px;
  padding: 30px;
  box-shadow: var(--card-shadow);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-align: center;
}

.team-member-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.member-avatar {
  margin-bottom: 20px;
}

.avatar-placeholder {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  color: white;
  font-size: 2.5rem;
  font-weight: 600;
}

.member-name {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 8px;
  color: var(--text-color);
}

.member-position {
  font-size: 1.1rem;
  color: var(--primary-color);
  margin-bottom: 16px;
  font-weight: 500;
}

.member-description {
  font-size: 1rem;
  line-height: 1.6;
  color: var(--text-color-light);
  margin-bottom: 20px;
}

.member-social {
  display: flex;
  justify-content: center;
  gap: 15px;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: var(--bg-color);
  color: var(--text-color);
  transition: background-color 0.3s ease, color 0.3s ease;
}

.social-link:hover {
  background-color: var(--primary-color);
  color: white;
}

.join-team-section {
  background-color: var(--card-bg);
  border-radius: 12px;
  padding: 60px;
  text-align: center;
  box-shadow: var(--card-shadow);
}

.join-team-title {
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 20px;
  color: var(--text-color);
}

.join-team-description {
  font-size: 1.1rem;
  line-height: 1.6;
  color: var(--text-color-light);
  max-width: 800px;
  margin: 0 auto 30px;
}

.join-team-button {
  display: inline-block;
  padding: 12px 30px;
  background: linear-gradient(135deg, var(--primary-color) 0%, var(--primary-color-light) 100%);
  color: white;
  font-size: 1.1rem;
  font-weight: 500;
  border-radius: 30px;
  text-decoration: none;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
  overflow: hidden;
}

.join-team-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(130, 71, 229, 0.4);
}

.shine-effect::after {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(60deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transform: rotate(30deg);
  animation: shine 3s infinite;
}

@keyframes shine {
  0% { transform: rotate(30deg) translateX(-300%); }
  100% { transform: rotate(30deg) translateX(300%); }
}

@media (max-width: 992px) {
  .team-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .section-title {
    font-size: 2rem;
  }
  
  .join-team-section {
    padding: 40px 20px;
  }
  
  .join-team-title {
    font-size: 1.8rem;
  }
}

@media (max-width: 576px) {
  .team-grid {
    grid-template-columns: 1fr;
  }
  
  .avatar-placeholder {
    width: 100px;
    height: 100px;
    font-size: 2rem;
  }
  
  .member-name {
    font-size: 1.3rem;
  }
}
</style>