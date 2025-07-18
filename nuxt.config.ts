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
    defaultLocale: "zh",
    locales: [
      { code: "zh", name: "中文", file: "zh.json" },
      { code: "en", name: "English", file: "en.json" },
    ],
    lazy: true,
    langDir: "locales",
    strategy: "no_prefix",
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      redirectOn: "root",
    },
    bundle: {
      optimizeTranslationDirective: false,
    },
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
