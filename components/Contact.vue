<template>
  <section class="contact-section">
    <div class="contact-container">
      <div class="section-header">
        <h2 class="section-title">STAY UP TO DATE</h2>
        <p class="section-subtitle">Get our newsletter</p>
      </div>
      
      <div class="newsletter-form">
        <div class="form-group">
          <input type="email" placeholder="Enter your email" class="form-input" />
          <button class="submit-button">Subscribe</button>
        </div>
        <div class="form-message">
          <div class="success-message">Thank You! We've received your submission!</div>
          <div class="error-message">Oops! Something went wrong while submitting the form.</div>
        </div>
      </div>
      
      <div class="social-links">
        <a href="#" class="social-link">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22 4.01c-1 .49-1.98.689-3 .99-1.121-1.265-2.783-1.335-4.38-.737S11.977 6.323 12 8v1c-3.245.083-6.135-1.395-8-4 0 0-4.182 7.433 4 11-1.872 1.247-3.739 2.088-6 2 3.308 1.803 6.913 2.423 10.034 1.517 3.58-1.04 6.522-3.723 7.651-7.742a13.84 13.84 0 0 0 .497-3.753C20.18 7.773 21.692 5.25 22 4.009z" fill="currentColor" />
          </svg>
        </a>
        <a href="#" class="social-link">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" fill="currentColor" />
          </svg>
        </a>
        <a href="#" class="social-link">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" fill="currentColor" />
          </svg>
        </a>
        <a href="#" class="social-link">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="currentColor" />
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
// Contact组件逻辑
</script>

<style scoped>
.contact-section {
  padding: 80px 0;
  background-color: var(--bg-color);
  border-top: 1px solid var(--border-color);
}

.contact-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;
  text-align: center;
}

.section-header {
  margin-bottom: 40px;
}

.section-title {
  font-size: 2rem;
  font-weight: 700;
  color: var(--text-color);
  margin-bottom: 8px;
  line-height: 1.2;
}

.section-subtitle {
  font-size: 1.2rem;
  color: var(--text-color);
  opacity: 0.8;
}

.newsletter-form {
  margin-bottom: 40px;
}

.form-group {
  display: flex;
  max-width: 500px;
  margin: 0 auto;
  border-radius: 30px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.form-input {
  flex-grow: 1;
  padding: 16px 24px;
  border: none;
  font-size: 1rem;
  background-color: var(--card-bg);
  color: var(--text-color);
}

.form-input:focus {
  outline: none;
}

.submit-button {
  padding: 16px 24px;
  background-color: var(--primary-color);
  color: white;
  border: none;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.submit-button:hover {
  background-color: var(--primary-color-dark);
}

.form-message {
  margin-top: 16px;
  font-size: 0.9rem;
}

.success-message {
  color: #4CAF50;
  display: none;
}

.error-message {
  color: #F44336;
  display: none;
}

.social-links {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 40px;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: var(--card-bg);
  color: var(--text-color);
  transition: all 0.2s ease;
  border: 1px solid var(--border-color);
}

.social-link:hover {
  transform: translateY(-5px);
  background-color: var(--primary-color);
  color: white;
  border-color: var(--primary-color);
  box-shadow: 0 4px 12px rgba(130, 71, 229, 0.3);
}

/* 响应式设计 */
@media (max-width: 768px) {
  .section-title {
    font-size: 1.8rem;
  }
  
  .form-group {
    flex-direction: column;
    border-radius: 16px;
  }
  
  .form-input {
    padding: 16px;
    border-radius: 16px 16px 0 0;
  }
  
  .submit-button {
    border-radius: 0 0 16px 16px;
  }
}
</style>