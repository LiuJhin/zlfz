<template>
  <div class="test-page">
    <h1>{{ $t("testScenarios.title") }}</h1>
    <p>{{ $t("messages.welcome") }}</p>
    <p>{{ $t("messages.description") }}</p>

    <div class="current-locale">
      <strong>{{ $t("language") }}: {{ $i18n.locale }}</strong>
    </div>

    <div class="test-buttons">
      <button @click="switchToZh">切换到中文</button>
      <button @click="switchToEn">Switch to English</button>
    </div>

    <!-- 基础用法测试 -->
    <div class="test-section">
      <h3>{{ $t("testScenarios.basicUsage.title") }}</h3>
      <div class="test-item">
        <label>{{ $t("testScenarios.basicUsage.simpleText") }}:</label>
        <span>{{ $t("welcome") }}</span>
      </div>
      <div class="test-item">
        <label>{{ $t("testScenarios.basicUsage.nestedObject") }}:</label>
        <span>{{ $t("messages.welcome") }}</span>
      </div>
    </div>

    <!-- 动态内容测试 -->
    <div class="test-section">
      <h3>{{ $t("testScenarios.dynamicContent.title") }}</h3>
      <div class="test-item">
        <label>{{ $t("testScenarios.dynamicContent.userGreeting", { name: userName }) }}</label>
      </div>
      <div class="test-item">
        <label>{{ $t("testScenarios.dynamicContent.itemCount", { count: itemCount }) }}</label>
      </div>
      <div class="test-item">
        <label>{{ $t("testScenarios.dynamicContent.timeRemaining", { time: timeRemaining }) }}</label>
      </div>
      <div class="controls">
        <button @click="itemCount++">增加项目</button>
        <button @click="itemCount = Math.max(0, itemCount - 1)">减少项目</button>
      </div>
    </div>

    <!-- 复数形式测试 -->
    <div class="test-section">
      <h3>{{ $t("testScenarios.pluralization.title") }}</h3>
      <div class="test-item">
        <label>{{ getPluralText(pluralCount) }}</label>
      </div>
      <div class="controls">
        <button @click="pluralCount++">增加</button>
        <button @click="pluralCount = Math.max(0, pluralCount - 1)">减少</button>
        <span class="count-display">当前数量: {{ pluralCount }}</span>
      </div>
    </div>

    <!-- 日期时间测试 -->
    <div class="test-section">
      <h3>{{ $t("testScenarios.dateTime.title") }}</h3>
      <div class="test-item">
        <label>{{ $t("testScenarios.dateTime.currentDate") }}:</label>
        <span>{{ formatDate(currentDate) }}</span>
      </div>
      <div class="test-item">
        <label>{{ $t("testScenarios.dateTime.lastUpdated") }}:</label>
        <span>{{ formatDate(lastUpdated) }}</span>
      </div>
    </div>

    <!-- 表单元素测试 -->
    <div class="test-section">
      <h3>{{ $t("testScenarios.forms.title") }}</h3>
      <form class="test-form">
        <div class="form-group">
          <label>{{ $t("testScenarios.forms.name") }}:</label>
          <input 
            type="text" 
            v-model="formData.name"
            :placeholder="$t('testScenarios.forms.placeholders.enterName')"
          />
          <span v-if="!formData.name" class="error">{{ $t("testScenarios.forms.validation.required") }}</span>
        </div>
        <div class="form-group">
          <label>{{ $t("testScenarios.forms.email") }}:</label>
          <input 
            type="email" 
            v-model="formData.email"
            :placeholder="$t('testScenarios.forms.placeholders.enterEmail')"
          />
          <span v-if="formData.email && !isValidEmail(formData.email)" class="error">
            {{ $t("testScenarios.forms.validation.invalidEmail") }}
          </span>
        </div>
        <div class="form-group">
          <label>{{ $t("testScenarios.forms.message") }}:</label>
          <textarea 
            v-model="formData.message"
            :placeholder="$t('testScenarios.forms.placeholders.enterMessage')"
          ></textarea>
          <span v-if="formData.message && formData.message.length < 10" class="error">
            {{ $t("testScenarios.forms.validation.minLength", { min: 10 }) }}
          </span>
        </div>
      </form>
    </div>

    <!-- 状态信息测试 -->
    <div class="test-section">
      <h3>{{ $t("testScenarios.status.title") }}</h3>
      <div class="status-examples">
        <div class="status-item loading">{{ $t("testScenarios.status.loading") }}</div>
        <div class="status-item success">{{ $t("testScenarios.status.success") }}</div>
        <div class="status-item error">{{ $t("testScenarios.status.error") }}</div>
        <div class="status-item warning">{{ $t("testScenarios.status.warning") }}</div>
        <div class="status-item info">{{ $t("testScenarios.status.info") }}</div>
      </div>
    </div>

    <!-- 导航元素测试 -->
    <div class="test-section">
      <h3>{{ $t("testScenarios.navigation.title") }}</h3>
      <div class="navigation-examples">
        <button class="nav-btn">{{ $t("testScenarios.navigation.previous") }}</button>
        <button class="nav-btn">{{ $t("testScenarios.navigation.next") }}</button>
        <button class="nav-btn">{{ $t("testScenarios.navigation.goBack") }}</button>
        <button class="nav-btn">{{ $t("testScenarios.navigation.goHome") }}</button>
      </div>
    </div>

    <!-- 原有的导航栏测试 -->
    <div class="test-section">
      <h3>{{ $t("navbar.solutions") }} {{ $t("testScenarios.basicUsage.title") }}:</h3>
      <p>{{ $t("navbar.solutions") }}: {{ $t("navbar.solutions") }}</p>
      <p>{{ $t("navbar.community") }}: {{ $t("navbar.community") }}</p>
      <p>{{ $t("navbar.aboutUs") }}: {{ $t("navbar.aboutUs") }}</p>
    </div>
  </div>
</template>

<script setup>
const { locale, setLocale, t } = useI18n();

// 响应式数据
const userName = ref('张三');
const itemCount = ref(5);
const timeRemaining = ref(30);
const pluralCount = ref(0);
const currentDate = ref(new Date());
const lastUpdated = ref(new Date(Date.now() - 24 * 60 * 60 * 1000)); // 昨天

// 表单数据
const formData = reactive({
  name: '',
  email: '',
  message: ''
});

// 语言切换方法
const switchToZh = () => {
  setLocale("zh");
  userName.value = '张三';
};

const switchToEn = () => {
  setLocale("en");
  userName.value = 'John';
};

// 复数形式处理
const getPluralText = (count) => {
  if (count === 0) {
    return t('testScenarios.pluralization.noItems');
  } else if (count === 1) {
    return t('testScenarios.pluralization.oneItem');
  } else {
    return t('testScenarios.pluralization.multipleItems', { count });
  }
};

// 日期格式化
const formatDate = (date) => {
  return new Intl.DateTimeFormat(locale.value === 'zh' ? 'zh-CN' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  }).format(date);
};

// 邮箱验证
const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// 定时更新时间
onMounted(() => {
  const timer = setInterval(() => {
    if (timeRemaining.value > 0) {
      timeRemaining.value--;
    }
  }, 60000); // 每分钟更新一次
  
  onUnmounted(() => {
    clearInterval(timer);
  });
});
</script>

<style scoped>
.test-page {
  padding: 40px;
  max-width: 1000px;
  margin: 0 auto;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.current-locale {
  margin: 20px 0;
  padding: 15px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 8px;
  text-align: center;
  font-size: 18px;
}

.test-buttons {
  margin: 30px 0;
  text-align: center;
}

.test-buttons button {
  margin: 0 10px;
  padding: 12px 24px;
  background: linear-gradient(135deg, #007bff 0%, #0056b3 100%);
  color: white;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 123, 255, 0.3);
}

.test-buttons button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 123, 255, 0.4);
}

.test-section {
  margin: 40px 0;
  padding: 25px;
  border: 1px solid #e1e5e9;
  border-radius: 12px;
  background: #ffffff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.test-section h3 {
  margin: 0 0 20px 0;
  color: #2c3e50;
  font-size: 20px;
  font-weight: 600;
  border-bottom: 2px solid #3498db;
  padding-bottom: 10px;
}

.test-item {
  margin: 15px 0;
  padding: 12px;
  background: #f8f9fa;
  border-radius: 6px;
  border-left: 4px solid #3498db;
}

.test-item label {
  font-weight: 500;
  color: #34495e;
  margin-right: 10px;
}

.test-item span {
  color: #2c3e50;
}

.controls {
  margin: 20px 0;
  display: flex;
  align-items: center;
  gap: 10px;
}

.controls button {
  padding: 8px 16px;
  background: #28a745;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  transition: background 0.3s ease;
}

.controls button:hover {
  background: #218838;
}

.count-display {
  margin-left: 15px;
  padding: 5px 10px;
  background: #e9ecef;
  border-radius: 4px;
  font-weight: 500;
}

.test-form {
  max-width: 600px;
}

.form-group {
  margin: 20px 0;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
  color: #34495e;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 12px;
  border: 2px solid #e1e5e9;
  border-radius: 6px;
  font-size: 14px;
  transition: border-color 0.3s ease;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #3498db;
}

.form-group textarea {
  height: 100px;
  resize: vertical;
}

.error {
  display: block;
  margin-top: 5px;
  color: #e74c3c;
  font-size: 12px;
  font-weight: 500;
}

.status-examples {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
  margin: 20px 0;
}

.status-item {
  padding: 12px 16px;
  border-radius: 6px;
  text-align: center;
  font-weight: 500;
  color: white;
}

.status-item.loading {
  background: #6c757d;
  animation: pulse 2s infinite;
}

.status-item.success {
  background: #28a745;
}

.status-item.error {
  background: #dc3545;
}

.status-item.warning {
  background: #ffc107;
  color: #212529;
}

.status-item.info {
  background: #17a2b8;
}

@keyframes pulse {
  0% { opacity: 1; }
  50% { opacity: 0.7; }
  100% { opacity: 1; }
}

.navigation-examples {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin: 20px 0;
}

.nav-btn {
  padding: 10px 20px;
  background: #6f42c1;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.3s ease;
}

.nav-btn:hover {
  background: #5a32a3;
  transform: translateY(-1px);
}

/* 响应式设计 */
@media (max-width: 768px) {
  .test-page {
    padding: 20px;
  }
  
  .test-buttons {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  
  .test-buttons button {
    margin: 0;
  }
  
  .controls {
    flex-direction: column;
    align-items: stretch;
  }
  
  .navigation-examples {
    flex-direction: column;
  }
  
  .status-examples {
    grid-template-columns: 1fr;
  }
}
</style>
