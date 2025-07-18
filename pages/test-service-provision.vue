<template>
  <div class="test-page">
    <ServiceProvision />
  </div>
</template>

<script setup>
import ServiceProvision from '~/components/ServiceProvision.vue'

// 页面元数据
useHead({
  title: 'Service Provision Test - 服务展示测试',
  meta: [
    {
      name: 'description',
      content: '测试ServiceProvision组件的展示效果'
    }
  ]
})
</script>

<style scoped>
.test-page {
  min-height: 100vh;
  background: var(--bg-color);
}
</style>