<template>
  <div ref="threeContainer" class="three-background"></div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const threeContainer = ref(null);
let scene, camera, renderer, controls;
let particles, particlesMaterial;
let clock;
let animationFrameId;

// 初始化Three.js场景
const initThree = () => {
  // 创建场景
  scene = new THREE.Scene();
  
  // 创建透视相机
  const { width, height } = threeContainer.value.getBoundingClientRect();
  camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
  camera.position.z = 30;
  
  // 创建渲染器
  renderer = new THREE.WebGLRenderer({ 
    antialias: true,
    alpha: true // 透明背景
  });
  renderer.setSize(width, height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  threeContainer.value.appendChild(renderer.domElement);
  
  // 添加轨道控制器
  controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.05;
  controls.enableZoom = false;
  
  // 创建时钟对象
  clock = new THREE.Clock();
  
  // 创建粒子系统
  createParticles();
  
  // 添加窗口大小变化监听
  window.addEventListener('resize', onWindowResize);
  
  // 开始动画循环
  animate();
};

// 创建粒子系统
const createParticles = () => {
  // 创建粒子几何体
  const particlesGeometry = new THREE.BufferGeometry();
  const count = 2000;
  
  // 创建粒子位置数组
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);
  
  // 设置粒子的随机位置和颜色
  for (let i = 0; i < count * 3; i += 3) {
    // 位置 - 创建一个球形分布
    const radius = 20 + Math.random() * 10;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    
    positions[i] = radius * Math.sin(phi) * Math.cos(theta);
    positions[i + 1] = radius * Math.sin(phi) * Math.sin(theta);
    positions[i + 2] = radius * Math.cos(phi);
    
    // 颜色 - 使用品牌颜色
    const colorChoice = Math.random();
    if (colorChoice < 0.33) {
      // 主色调
      colors[i] = 0.0; // R
      colors[i + 1] = 0.5; // G
      colors[i + 2] = 1.0; // B
    } else if (colorChoice < 0.66) {
      // 次色调
      colors[i] = 0.0; // R
      colors[i + 1] = 0.8; // G
      colors[i + 2] = 0.6; // B
    } else {
      // 强调色
      colors[i] = 1.0; // R
      colors[i + 1] = 0.5; // G
      colors[i + 2] = 0.0; // B
    }
  }
  
  // 设置几何体属性
  particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
  
  // 创建粒子材质
  particlesMaterial = new THREE.PointsMaterial({
    size: 0.1,
    sizeAttenuation: true,
    transparent: true,
    alphaMap: createCircleTexture(),
    vertexColors: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending
  });
  
  // 创建粒子系统
  particles = new THREE.Points(particlesGeometry, particlesMaterial);
  scene.add(particles);
};

// 创建圆形纹理用于粒子
const createCircleTexture = () => {
  const canvas = document.createElement('canvas');
  canvas.width = 64;
  canvas.height = 64;
  
  const context = canvas.getContext('2d');
  context.beginPath();
  context.arc(32, 32, 32, 0, Math.PI * 2);
  context.closePath();
  
  // 创建径向渐变
  const gradient = context.createRadialGradient(32, 32, 0, 32, 32, 32);
  gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
  gradient.addColorStop(0.5, 'rgba(255, 255, 255, 0.5)');
  gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
  
  context.fillStyle = gradient;
  context.fill();
  
  const texture = new THREE.Texture(canvas);
  texture.needsUpdate = true;
  return texture;
};

// 窗口大小变化处理
const onWindowResize = () => {
  const { width, height } = threeContainer.value.getBoundingClientRect();
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
  renderer.setSize(width, height);
};

// 动画循环
const animate = () => {
  animationFrameId = requestAnimationFrame(animate);
  
  const elapsedTime = clock.getElapsedTime();
  
  // 旋转粒子系统
  particles.rotation.x = elapsedTime * 0.05;
  particles.rotation.y = elapsedTime * 0.03;
  
  // 更新控制器
  controls.update();
  
  // 渲染场景
  renderer.render(scene, camera);
};

// 组件挂载时初始化Three.js
onMounted(() => {
  initThree();
});

// 组件卸载前清理资源
onBeforeUnmount(() => {
  window.removeEventListener('resize', onWindowResize);
  cancelAnimationFrame(animationFrameId);
  
  // 清理Three.js资源
  if (renderer) {
    renderer.dispose();
    threeContainer.value.removeChild(renderer.domElement);
  }
  
  if (particles) {
    scene.remove(particles);
    particles.geometry.dispose();
    particlesMaterial.dispose();
  }
  
  scene = null;
  camera = null;
  renderer = null;
  controls = null;
  particles = null;
  particlesMaterial = null;
  clock = null;
});
</script>

<style scoped>
.three-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  pointer-events: none;
}
</style>