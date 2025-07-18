// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  modules: ["@nuxtjs/i18n", "@nuxtjs/color-mode"],

  // 开发服务器配置
  devServer: {
    port: 8000,
    host: "0.0.0.0",
  },
  i18n: {
    // 保留i18n配置但禁用自动加载翻译文件
    defaultLocale: "en",
    locales: [
      { code: "en", name: "English" },
      { code: "zh", name: "中文" },
    ],
    // 禁用自动加载翻译文件
    lazy: false,
    strategy: "no_prefix",
  },

  colorMode: {
    preference: "system", // 默认主题偏好，可以是'light'、'dark'或'system'
    fallback: "light", // 当系统主题不可用时的回退主题
    hid: "nuxt-color-mode-script",
    globalName: "__NUXT_COLOR_MODE__",
    componentName: "ColorScheme",
    classPrefix: "",
    classSuffix: "-mode",
    storageKey: "nuxt-color-mode",
  },
});
