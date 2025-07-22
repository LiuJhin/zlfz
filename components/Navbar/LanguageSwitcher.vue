<template>
  <div class="language-switcher">
    <button
      class="language-button"
      @click="toggleDropdown"
      :aria-expanded="isOpen"
      aria-haspopup="true"
    >
      <div class="language-current">
        <span class="language-flag">{{ currentLanguage.flag }}</span>
        <span class="language-code">{{ currentLanguage.code }}</span>
      </div>
      <svg
        class="dropdown-icon"
        :class="{ rotate: isOpen }"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6 9L12 15L18 9"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>

    <Transition name="dropdown">
      <div v-if="isOpen" class="language-dropdown">
        <button
          v-for="language in languages"
          :key="language.code"
          class="language-option"
          :class="{ active: language.code === currentLanguage.code }"
          @click="switchLanguage(language.code)"
        >
          <span class="language-flag">{{ language.flag }}</span>
          <span class="language-name">{{ language.name }}</span>
          <svg
            v-if="language.code === currentLanguage.code"
            class="check-icon"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 6L9 17L4 12"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from "vue";

const { locale, setLocale } = useI18n();
const localePath = useLocalePath();

// 下拉菜单状态
const isOpen = ref(false);

// 支持的语言列表
const languages = [
  {
    code: "zh",
    name: "Chinese",
    flag: "🇨🇳",
  },
  {
    code: "en",
    name: "English",
    flag: "🇺🇸",
  },
  {
    code: "jp",
    name: "Japanese",
    flag: "🇯🇵",
  },
];

// 当前语言
const currentLanguage = computed(() => {
  return languages.find((lang) => lang.code === locale.value) || languages[0];
});

// 切换下拉菜单
const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

// 切换语言
const switchLanguage = async (langCode) => {
  try {
    await setLocale(langCode);
    isOpen.value = false;

    // 保存到本地存储
    if (process.client) {
      localStorage.setItem("preferred-language", langCode);
    }
  } catch (error) {
    console.error("Language switch failed:", error);
    isOpen.value = false;
  }
};

// 点击外部关闭下拉菜单
const handleClickOutside = (event) => {
  const languageSwitcher = event.target.closest(".language-switcher");
  if (!languageSwitcher) {
    isOpen.value = false;
  }
};

// 键盘事件处理
const handleKeydown = (event) => {
  if (event.key === "Escape") {
    isOpen.value = false;
  }
};

// 组件挂载时添加事件监听
onMounted(() => {
  document.addEventListener("click", handleClickOutside);
  document.addEventListener("keydown", handleKeydown);

  // 从本地存储恢复语言设置
  if (process.client) {
    const savedLanguage = localStorage.getItem("preferred-language");
    if (
      savedLanguage &&
      languages.some((lang) => lang.code === savedLanguage)
    ) {
      setLocale(savedLanguage);
    }
  }
});

// 组件卸载时移除事件监听
onBeforeUnmount(() => {
  document.removeEventListener("click", handleClickOutside);
  document.removeEventListener("keydown", handleKeydown);
});
</script>

<style scoped>
.language-switcher {
  position: relative;
  display: inline-block;
}

.language-button {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  background-color: transparent;
  border: 1px solid var(--border-color);
  border-radius: 6px;
  color: var(--navbar-text);
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 14px;
  min-width: 80px;
}

.language-button:hover {
  background-color: var(--hover-bg);
  border-color: var(--primary-color);
}

.language-button:focus {
  outline: none;
  border-color: var(--primary-color);
  box-shadow: 0 0 0 2px rgba(var(--primary-color-rgb), 0.2);
}

.language-current {
  display: flex;
  align-items: center;
  gap: 6px;
  flex: 1;
}

.language-flag {
  font-size: 16px;
  line-height: 1;
}

.language-code {
  font-weight: 500;
  text-transform: uppercase;
  font-size: 12px;
  letter-spacing: 0.5px;
}

.dropdown-icon {
  transition: transform 0.2s ease;
  opacity: 0.7;
}

.dropdown-icon.rotate {
  transform: rotate(180deg);
}

.language-dropdown {
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  min-width: 160px;
  background-color: var(--card-bg);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  overflow: hidden;
}

.language-option {
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  padding: 12px 16px;
  background-color: transparent;
  border: none;
  color: var(--text-color);
  cursor: pointer;
  transition: background-color 0.2s ease;
  font-size: 14px;
  text-align: left;
}

.language-option:hover {
  background-color: var(--hover-bg);
}

.language-option.active {
  background-color: var(--primary-color-light);
  color: var(--primary-color);
}

.language-name {
  flex: 1;
  font-weight: 500;
}

.check-icon {
  color: var(--primary-color);
  opacity: 0.8;
}

/* 下拉动画 */
.dropdown-enter-active,
.dropdown-leave-active {
  transition: all 0.2s ease;
}

.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-8px) scale(0.95);
}

.dropdown-enter-to,
.dropdown-leave-from {
  opacity: 1;
  transform: translateY(0) scale(1);
}

/* 响应式设计 */
@media (max-width: 768px) {
  .language-button {
    min-width: 60px;
    padding: 6px 10px;
  }

  .language-code {
    display: none;
  }

  .language-dropdown {
    right: -20px;
    min-width: 140px;
  }
}

/* 暗色主题适配 */
@media (prefers-color-scheme: dark) {
  .language-dropdown {
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  }
}
</style>
