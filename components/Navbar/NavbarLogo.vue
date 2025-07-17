<template>
  <div class="navbar-logo">
    <NuxtLink to="/" class="logo-link">
      <div class="logo-icon">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 2L2 7L12 12L22 7L12 2Z"
            fill="url(#Polygon-gradient-top)"
          />
          <path
            d="M12 12L2 7L2 17L12 22L22 17L22 7L12 12Z"
            fill="url(#Polygon-gradient-bottom)"
            opacity="0.7"
          />
          <defs>
            <linearGradient
              id="Polygon-gradient-top"
              x1="2"
              y1="7"
              x2="22"
              y2="7"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stop-color="var(--primary-color-light)" />
              <stop offset="100%" stop-color="var(--primary-color-dark)" />
            </linearGradient>
            <linearGradient
              id="Polygon-gradient-bottom"
              x1="2"
              y1="14.5"
              x2="22"
              y2="14.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stop-color="var(--primary-color-light)" />
              <stop offset="100%" stop-color="var(--primary-color-dark)" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <span class="logo-text">ZHILING ARK</span>
    </NuxtLink>
  </div>
</template>

<script setup>
// 可以在这里添加与Logo相关的逻辑
</script>

<style scoped>
/* Logo 样式 */
.navbar-logo {
  display: flex;
  align-items: center;
}

.logo-link {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: var(--navbar-text);
  font-weight: 600;
  font-size: 18px;
  transition: transform 0.3s ease;
}

.logo-link:hover {
  transform: translateY(-1px);
}

.logo-icon {
  margin-right: 10px;
  filter: drop-shadow(0 0 8px rgba(130, 71, 229, 0.3));
  transition: filter 0.3s ease, transform 0.3s ease;
}

.logo-link:hover .logo-icon {
  filter: drop-shadow(0 0 12px rgba(130, 71, 229, 0.5));
  transform: scale(1.05);
}

.logo-text {
  font-weight: 700;
  background: var(--bg-gradient);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

@media (max-width: 640px) {
  .logo-text {
    display: none;
  }
}
</style>
