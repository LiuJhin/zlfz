<template>
  <div class="navbar-controls">
    <!-- 社交图标 -->
    <div class="social-icons">
      <a
        href="https://twitter.com"
        target="_blank"
        class="social-icon"
        title="Twitter"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M22 4.01C21 4.5 20.02 4.69 19 4.82C20.03 4.1 20.85 3 21 1.7C20.08 2.27 18.9 2.67 18 2.87C17.46 2.28 16.73 1.87 15.92 1.65C15.12 1.44 14.27 1.45 13.47 1.68C12.67 1.91 11.96 2.35 11.43 2.95C10.9 3.55 10.57 4.29 10.5 5.07C10.5 5.39 10.54 5.7 10.61 6C9.02 5.92 7.47 5.51 6.06 4.79C4.65 4.08 3.41 3.08 2.39 1.85C1.93 2.67 1.75 3.61 1.88 4.54C2.01 5.46 2.45 6.31 3.13 6.95C2.45 6.94 1.78 6.74 1.19 6.39V6.44C1.19 7.32 1.49 8.18 2.04 8.88C2.58 9.58 3.33 10.08 4.18 10.3C3.55 10.48 2.87 10.51 2.22 10.37C2.47 11.14 2.97 11.82 3.65 12.3C4.32 12.79 5.13 13.05 5.97 13.06C4.6 14.15 2.9 14.74 1.15 14.74C0.77 14.74 0.38 14.71 0 14.66C1.78 15.85 3.85 16.47 5.97 16.46C13.14 16.46 17.07 10.55 17.07 5.44C17.07 5.26 17.07 5.09 17.06 4.91C18 4.2 18.74 3.3 19.34 2.28L22 4.01Z"
            fill="currentColor"
          />
        </svg>
      </a>
      <a
        href="https://github.com"
        target="_blank"
        class="social-icon"
        title="GitHub"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 2C6.48 2 2 6.48 2 12C2 16.42 4.87 20.17 8.84 21.5C9.34 21.58 9.5 21.27 9.5 21C9.5 20.77 9.5 20.14 9.5 19.31C6.73 19.91 6.14 17.97 6.14 17.97C5.68 16.81 5.03 16.5 5.03 16.5C4.12 15.88 5.1 15.9 5.1 15.9C6.1 15.97 6.63 16.93 6.63 16.93C7.5 18.45 8.97 18 9.54 17.76C9.63 17.11 9.89 16.67 10.17 16.42C7.95 16.17 5.62 15.31 5.62 11.5C5.62 10.39 6 9.5 6.65 8.79C6.55 8.54 6.2 7.5 6.75 6.15C6.75 6.15 7.59 5.88 9.5 7.17C10.29 6.95 11.15 6.84 12 6.84C12.85 6.84 13.71 6.95 14.5 7.17C16.41 5.88 17.25 6.15 17.25 6.15C17.8 7.5 17.45 8.54 17.35 8.79C18 9.5 18.38 10.39 18.38 11.5C18.38 15.32 16.04 16.16 13.81 16.41C14.17 16.72 14.5 17.33 14.5 18.26C14.5 19.6 14.5 20.68 14.5 21C14.5 21.27 14.66 21.59 15.17 21.5C19.14 20.16 22 16.42 22 12C22 6.48 17.52 2 12 2Z"
            fill="currentColor"
          />
        </svg>
      </a>
      <a
        href="https://discord.com"
        target="_blank"
        class="social-icon"
        title="Discord"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4C14.89 4.21 14.76 4.48 14.67 4.7C13.06 4.47 11.46 4.47 9.85 4.7C9.76 4.48 9.63 4.21 9.52 4C8.02 4.26 6.58 4.71 5.25 5.33C2.05 10.11 1.28 14.78 1.67 19.38C3.47 20.76 5.2 21.63 6.91 22.21C7.29 21.69 7.63 21.14 7.92 20.56C7.31 20.33 6.72 20.05 6.16 19.72C6.26 19.65 6.35 19.57 6.44 19.5C9.32 20.86 12.43 20.86 15.28 19.5C15.37 19.57 15.47 19.65 15.56 19.72C15 20.05 14.41 20.33 13.8 20.56C14.09 21.14 14.43 21.69 14.81 22.21C16.52 21.63 18.25 20.76 20.05 19.38C20.51 14.14 19.3 9.5 16.73 5.33H19.27ZM7.5 16.5C6.56 16.5 5.79 15.65 5.79 14.62C5.79 13.59 6.54 12.74 7.5 12.74C8.46 12.74 9.21 13.59 9.21 14.62C9.21 15.65 8.45 16.5 7.5 16.5ZM16.21 16.5C15.27 16.5 14.5 15.65 14.5 14.62C14.5 13.59 15.25 12.74 16.21 12.74C17.17 12.74 17.92 13.59 17.92 14.62C17.92 15.65 17.17 16.5 16.21 16.5Z"
            fill="currentColor"
          />
        </svg>
      </a>
    </div>

    <!-- 主题切换 -->
    <ThemeSwitcher />

    <!-- CTA 按钮 -->
    <a href="#" class="cta-button">Polygon Docs</a>
  </div>
</template>

<script setup>
import ThemeSwitcher from "./ThemeSwitcher.vue";
</script>

<style scoped>
.navbar-controls {
  display: flex;
  align-items: center;
  gap: 16px;
}

.social-icons {
  display: flex;
  gap: 12px;
}

.social-icon {
  color: var(--navbar-text);
  opacity: 0.7;
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.social-icon:hover {
  opacity: 1;
  transform: translateY(-2px);
}

.cta-button {
  background-color: var(--cta-button-bg);
  color: var(--cta-button-text);
  padding: 8px 16px;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
  transition: background-color 0.2s ease;
}

.cta-button:hover {
  background-color: var(--cta-button-hover-bg);
}

/* 响应式设计 */
@media (max-width: 768px) {
  .social-icons {
    display: none;
  }
}

@media (max-width: 640px) {
  .cta-button {
    display: none;
  }
}
</style>
