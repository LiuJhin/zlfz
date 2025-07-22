<template>
  <div class="home-page">
    <Hero />
    <ServiceProvision />
    <Features />
    <Projects />
    <Ecosystem />
    <Contact />
  </div>
</template>

<script setup>
import Hero from "@/components/Hero.vue";
import Features from "@/components/Features.vue";
import ServiceProvision from "@/components/ServiceProvision.vue";
import Projects from "@/components/Projects.vue";
import Ecosystem from "@/components/Ecosystem.vue";
import Contact from "@/components/Contact.vue";

// 使用默认布局（可以省略，因为默认就是使用default布局）
definePageMeta({
  layout: "default",
});
</script>

<style>
.home-page {
  width: 100%;
}

.buttons button:hover {
  background-color: var(--button-hover-bg);
  cursor: pointer;
  transition: background-color 0.3s ease;
}
</style>
