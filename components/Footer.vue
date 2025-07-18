<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-grid">
        <div class="footer-brand">
          <div class="footer-logo">
            <img src="../assets/image/Bright-Graphic-logo.png" style="width: 70px;"/>
            <span class="logo-text">ZHILING ARK</span>
          </div>
          <p class="brand-description">
            Enabling an infinitely scalable web of sovereign blockchains that
            feels like a single chain.
          </p>
        </div>

        <div class="footer-links">
          <div class="footer-column">
            <h3 class="column-title">Products</h3>
            <ul class="link-list">
              <li><a href="#">ZHILING ARK</a></li>
              <li><a href="#">Polygon zkEVM</a></li>
              <li><a href="#">Miden</a></li>
              <li><a href="#">Agglayer CDK</a></li>
            </ul>
          </div>

          <div class="footer-column">
            <h3 class="column-title">Developers</h3>
            <ul class="link-list">
              <li><a href="#">Documentation</a></li>
              <li><a href="#">API Reference</a></li>
              <li><a href="#">Tutorials</a></li>
              <li><a href="#">SDKs</a></li>
            </ul>
          </div>

          <div class="footer-column">
            <h3 class="column-title">Community</h3>
            <ul class="link-list">
              <li><a href="#">Forum</a></li>
              <li><a href="#">Events</a></li>
              <li><a href="#">Contribute</a></li>
              <li><a href="#">Bug Bounty</a></li>
            </ul>
          </div>

          <div class="footer-column">
            <h3 class="column-title">Company</h3>
            <ul class="link-list">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <div class="copyright">
          &copy; {{ new Date().getFullYear() }} Polygon Labs. All rights
          reserved.
        </div>
        <div class="legal-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Cookie Policy</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
// Footer组件逻辑
</script>

<style scoped>
.footer {
  background-color: var(--bg-color);
  border-top: 1px solid var(--border-color);
  padding: 80px 0 40px;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.footer-grid {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 60px;
  margin-bottom: 60px;
}

.footer-brand {
  display: flex;
  flex-direction: column;
}

.footer-logo {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.logo-text {
  font-size: 1.5rem;
  font-weight: 700;
  margin-left: 12px;
  color: var(--text-color);
}

.brand-description {
  font-size: 1rem;
  line-height: 1.6;
  color: var(--text-color);
  opacity: 0.8;
  margin-bottom: 24px;
}

.footer-links {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
}

.column-title {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 20px;
  color: var(--text-color);
}

.link-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.link-list li {
  margin-bottom: 12px;
}

.link-list a {
  color: var(--text-color);
  opacity: 0.7;
  text-decoration: none;
  transition: all 0.2s ease;
  font-size: 0.9rem;
}

.link-list a:hover {
  color: var(--primary-color);
  opacity: 1;
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 30px;
  border-top: 1px solid var(--border-color);
  font-size: 0.9rem;
}

.copyright {
  color: var(--text-color);
  opacity: 0.7;
}

.legal-links {
  display: flex;
  gap: 20px;
}

.legal-links a {
  color: var(--text-color);
  opacity: 0.7;
  text-decoration: none;
  transition: color 0.2s ease;
}

.legal-links a:hover {
  color: var(--primary-color);
  opacity: 1;
}

/* 响应式设计 */
@media (max-width: 1024px) {
  .footer-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .footer-links {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .footer {
    padding: 60px 0 30px;
  }

  .footer-bottom {
    flex-direction: column;
    gap: 20px;
    text-align: center;
  }
}

@media (max-width: 480px) {
  .footer-links {
    grid-template-columns: 1fr;
  }
}
</style>
