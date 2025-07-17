<template>
  <div class="contact-page">
    <h1>联系我们</h1>
    <p>这是另一个使用自定义布局的页面示例。</p>
    
    <div class="contact-form">
      <div class="form-group">
        <label for="name">姓名</label>
        <input type="text" id="name" placeholder="请输入您的姓名">
      </div>
      
      <div class="form-group">
        <label for="email">邮箱</label>
        <input type="email" id="email" placeholder="请输入您的邮箱">
      </div>
      
      <div class="form-group">
        <label for="message">留言</label>
        <textarea id="message" rows="5" placeholder="请输入您的留言"></textarea>
      </div>
      
      <button class="submit-button">提交</button>
    </div>
    
    <div class="contact-info">
      <h3>其他联系方式</h3>
      <p><strong>邮箱：</strong> info@example.com</p>
      <p><strong>电话：</strong> +86 123 4567 8910</p>
      <p><strong>地址：</strong> 中国上海市浦东新区张江高科技园区</p>
    </div>
    
    <div class="back-link">
      <NuxtLink to="/">返回首页</NuxtLink>
    </div>
  </div>
</template>

<script setup>
// 使用默认布局
definePageMeta({
  layout: 'default'
});
</script>

<style>
.contact-page {
  text-align: center;
  padding: 2rem;
  background-color: var(--card-bg);
  border-radius: 8px;
  box-shadow: var(--card-shadow);
}

.contact-form {
  max-width: 600px;
  margin: 2rem auto;
  text-align: left;
}

.form-group {
  margin-bottom: 1.5rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
}

input, textarea {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid var(--border-color);
  border-radius: 4px;
  background-color: var(--bg-color);
  color: var(--text-color);
  font-family: inherit;
  font-size: 1rem;
  transition: border-color 0.3s ease;
}

input:focus, textarea:focus {
  outline: none;
  border-color: var(--navbar-hover);
}

.submit-button {
  display: block;
  width: 100%;
  padding: 0.75rem;
  background-color: var(--button-bg);
  color: var(--button-text);
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.submit-button:hover {
  background-color: var(--button-hover-bg);
}

.contact-info {
  margin: 2rem 0;
  padding: 1.5rem;
  background-color: var(--bg-color);
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.back-link {
  margin-top: 2rem;
}

.back-link a {
  display: inline-block;
  padding: 0.5rem 1rem;
  background-color: var(--button-bg);
  color: var(--button-text);
  text-decoration: none;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}

.back-link a:hover {
  background-color: var(--button-hover-bg);
}
</style>