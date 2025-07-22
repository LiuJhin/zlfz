<template>
  <div class="loading-overlay" v-if="isLoading">
    <div ref="threeContainer" class="three-container"></div>
    <div class="loading-text">
      <div class="loading-title">
        <span class="letter" style="--delay: 0s">Z</span>
        <span class="letter" style="--delay: 0.1s">H</span>
        <span class="letter" style="--delay: 0.2s">I</span>
        <span class="letter" style="--delay: 0.3s">L</span>
        <span class="letter" style="--delay: 0.4s">I</span>
        <span class="letter" style="--delay: 0.5s">N</span>
        <span class="letter" style="--delay: 0.6s">G</span>
        <span class="letter" style="--delay: 0.7s">&nbsp;</span>
        <span class="letter" style="--delay: 0.8s">A</span>
        <span class="letter" style="--delay: 0.9s">R</span>
        <span class="letter" style="--delay: 1s">K</span>
      </div>
      <div class="loading-subtitle">创新科技 · 引领未来</div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import * as THREE from "three";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader.js";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry.js";

// 控制加载状态
const isLoading = ref(true);
const threeContainer = ref(null);

// Three.js 变量
let scene, camera, renderer;
let animationFrameId;
let hexagonGroup, textMesh, particleSystem;
let clock;

// 初始化Three.js场景
const initThree = () => {
  // 创建场景
  scene = new THREE.Scene();

  // 创建透视相机
  const { width, height } = threeContainer.value.getBoundingClientRect();
  camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
  camera.position.z = 15;

  // 创建渲染器
  renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: false, // 不透明背景
  });
  renderer.setClearColor(0x121212, 1); // 设置背景色为深色
  renderer.setSize(width, height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  threeContainer.value.appendChild(renderer.domElement);

  // 创建时钟对象
  clock = new THREE.Clock();

  // 创建六边形标志
  createHexagonLogo();

  // 创建粒子系统
  createParticleSystem();

  // 添加环境光
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
  scene.add(ambientLight);

  // 添加点光源
  const pointLight = new THREE.PointLight(0x8247e5, 1, 100);
  pointLight.position.set(5, 5, 5);
  scene.add(pointLight);

  // 添加窗口大小变化监听
  window.addEventListener("resize", onWindowResize);

  // 开始动画循环
  animate();
};

// 创建3D文字标志
const createHexagonLogo = () => {
  hexagonGroup = new THREE.Group();

  // 使用FontLoader加载字体
  const fontLoader = new FontLoader();

  // 使用内置字体
  fontLoader.load(
    "/node_modules/three/examples/fonts/helvetiker_bold.typeface.json",
    (font) => {
      // 创建主标题文字 - Z
      const textGeometryZ = new TextGeometry("Z", {
        font: font,
        size: 3,
        height: 0.5,
        curveSegments: 12,
        bevelEnabled: true,
        bevelThickness: 0.1,
        bevelSize: 0.05,
        bevelOffset: 0,
        bevelSegments: 5,
      });

      // 创建主标题文字 - A
      const textGeometryA = new TextGeometry("A", {
        font: font,
        size: 3,
        height: 0.5,
        curveSegments: 12,
        bevelEnabled: true,
        bevelThickness: 0.1,
        bevelSize: 0.05,
        bevelOffset: 0,
        bevelSegments: 5,
      });

      // 创建发光材质
      const textMaterial = new THREE.MeshPhongMaterial({
        color: 0x8247e5,
        emissive: 0x8247e5,
        emissiveIntensity: 0.6,
        specular: 0xffffff,
        shininess: 100,
        transparent: true,
        opacity: 0.9,
      });

      // 创建Z网格并添加到组
      const textMeshZ = new THREE.Mesh(textGeometryZ, textMaterial);
      textGeometryZ.computeBoundingBox();
      const textWidthZ =
        textGeometryZ.boundingBox.max.x - textGeometryZ.boundingBox.min.x;
      textMeshZ.position.set(-textWidthZ / 2 - 2, -1.5, 0);
      hexagonGroup.add(textMeshZ);

      // 创建A网格并添加到组
      const textMeshA = new THREE.Mesh(textGeometryA, textMaterial);
      textGeometryA.computeBoundingBox();
      const textWidthA =
        textGeometryA.boundingBox.max.x - textGeometryA.boundingBox.min.x;
      textMeshA.position.set(-textWidthA / 2 + 2, -1.5, 0);
      hexagonGroup.add(textMeshA);

      // 添加粒子效果连接两个字母
      const particlesCount = 100;
      const particlesGeometry = new THREE.BufferGeometry();
      const particlesPositions = new Float32Array(particlesCount * 3);

      for (let i = 0; i < particlesCount; i++) {
        // 在Z和A之间创建一条弧线上的粒子
        const t = i / particlesCount;
        const x = -2 + t * 4; // 从Z到A的水平位置
        const y = -1.5 + Math.sin(t * Math.PI) * 1.5; // 弧线高度
        const z = Math.cos(t * Math.PI * 2) * 0.5; // 添加一些深度变化

        particlesPositions[i * 3] = x;
        particlesPositions[i * 3 + 1] = y;
        particlesPositions[i * 3 + 2] = z;
      }

      particlesGeometry.setAttribute(
        "position",
        new THREE.BufferAttribute(particlesPositions, 3)
      );

      const particlesMaterial = new THREE.PointsMaterial({
        color: 0xa47eff,
        size: 0.1,
        transparent: true,
        opacity: 0.8,
        alphaMap: createCircleTexture(),
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      });

      const letterConnector = new THREE.Points(
        particlesGeometry,
        particlesMaterial
      );
      hexagonGroup.add(letterConnector);

      // 添加光环效果
      const ringGeometry = new THREE.RingGeometry(5, 5.2, 64);
      const ringMaterial = new THREE.MeshBasicMaterial({
        color: 0x8247e5,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.5,
      });
      const ring = new THREE.Mesh(ringGeometry, ringMaterial);
      ring.rotation.x = Math.PI / 2;
      hexagonGroup.add(ring);
    }
  );

  scene.add(hexagonGroup);
};

// 创建粒子系统 - 简化版本
const createParticleSystem = () => {
  const particlesGeometry = new THREE.BufferGeometry();
  const count = 800; // 减少粒子数量，简化背景

  // 创建粒子位置数组
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);

  // 设置粒子的随机位置和颜色
  for (let i = 0; i < count * 3; i += 3) {
    // 位置 - 创建一个平面分布，减少深度感，简化背景
    const radius = 15 + Math.random() * 5;
    const angle = Math.random() * Math.PI * 2;

    positions[i] = Math.cos(angle) * radius; // x
    positions[i + 1] = Math.sin(angle) * radius; // y
    positions[i + 2] = (Math.random() - 0.5) * 5; // z - 减少深度范围

    // 颜色 - 使用更淡的品牌颜色，减少视觉干扰
    const colorChoice = Math.random();
    if (colorChoice < 0.7) {
      // 增加主色调比例
      // 主色调 - 更淡
      colors[i] = 130 / 255; // R
      colors[i + 1] = 71 / 255; // G
      colors[i + 2] = 229 / 255; // B
    } else {
      // 次色调 - 更淡
      colors[i] = 180 / 255; // R - 更亮
      colors[i + 1] = 150 / 255; // G - 更亮
      colors[i + 2] = 255 / 255; // B - 更亮
    }
  }

  // 设置几何体属性
  particlesGeometry.setAttribute(
    "position",
    new THREE.BufferAttribute(positions, 3)
  );
  particlesGeometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

  // 创建粒子材质 - 更小、更透明的粒子
  const particlesMaterial = new THREE.PointsMaterial({
    size: 0.1, // 减小粒子尺寸
    sizeAttenuation: true,
    transparent: true,
    alphaMap: createCircleTexture(),
    vertexColors: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    opacity: 0.6, // 降低不透明度
  });

  // 创建粒子系统
  particleSystem = new THREE.Points(particlesGeometry, particlesMaterial);
  scene.add(particleSystem);
};

// 创建圆形纹理用于粒子
const createCircleTexture = () => {
  const canvas = document.createElement("canvas");
  canvas.width = 64;
  canvas.height = 64;

  const context = canvas.getContext("2d");
  context.beginPath();
  context.arc(32, 32, 32, 0, Math.PI * 2);
  context.closePath();

  // 创建径向渐变
  const gradient = context.createRadialGradient(32, 32, 0, 32, 32, 32);
  gradient.addColorStop(0, "rgba(255, 255, 255, 1)");
  gradient.addColorStop(0.5, "rgba(255, 255, 255, 0.5)");
  gradient.addColorStop(1, "rgba(255, 255, 255, 0)");

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

  // 动画3D字母组
  if (hexagonGroup) {
    // 整体旋转效果 - 更缓慢、更大气的旋转
    hexagonGroup.rotation.y = Math.sin(elapsedTime * 0.15) * 0.1; // 减少旋转幅度
    hexagonGroup.rotation.x = Math.sin(elapsedTime * 0.1) * 0.05; // 减少旋转幅度

    // 为字母添加浮动和脉动效果
    hexagonGroup.children.forEach((child, index) => {
      if (child.isMesh) {
        // 字母上下浮动 - 增强效果
        child.position.y =
          -1.5 + Math.sin(elapsedTime * 0.7 + index * 0.5) * 0.2;

        // 字母轻微脉动 - 增强效果
        const pulseScale = 1 + Math.sin(elapsedTime * 0.6 + index * 0.5) * 0.05;
        child.scale.set(pulseScale, pulseScale, pulseScale);

        // 添加发光强度变化
        if (child.material) {
          child.material.emissiveIntensity =
            0.6 + Math.sin(elapsedTime * 0.8 + index) * 0.3;
        }
      }

      // 粒子连接器动画
      if (child.isPoints) {
        // 更新粒子位置，创建流动效果
        const positions = child.geometry.attributes.position.array;
        for (let i = 0; i < positions.length / 3; i++) {
          const i3 = i * 3;
          // 创建更动态的波浪效果
          const t = i / (positions.length / 3);
          positions[i3] = -2 + t * 4; // 从Z到A的水平位置
          positions[i3 + 1] =
            -1.5 + Math.sin(t * Math.PI + elapsedTime * 1.5) * 1.2;
          positions[i3 + 2] = Math.cos(t * Math.PI * 2 + elapsedTime) * 0.3;
        }
        child.geometry.attributes.position.needsUpdate = true;

        // 粒子大小变化
        if (child.material) {
          child.material.size = 0.1 + Math.sin(elapsedTime) * 0.05;
        }
      }

      // 光环效果
      if (child.geometry && child.geometry.type === "RingGeometry") {
        // 光环脉动 - 更明显的效果
        const ringPulse = 1 + Math.sin(elapsedTime * 0.7) * 0.15;
        child.scale.x = ringPulse;
        child.scale.y = ringPulse;

        // 光环透明度变化 - 更明显的效果
        child.material.opacity = 0.2 + Math.sin(elapsedTime * 0.5) * 0.3;
      }
    });
  }

  // 旋转粒子系统 - 更缓慢的旋转
  if (particleSystem) {
    particleSystem.rotation.y = elapsedTime * 0.02; // 减慢旋转速度

    // 添加轻微的波浪效果
    const positions = particleSystem.geometry.attributes.position.array;
    for (let i = 0; i < positions.length / 30; i++) {
      // 只处理部分粒子以提高性能
      const i3 = i * 3;
      const x = positions[i3];
      const y = positions[i3 + 1];
      const distance = Math.sqrt(x * x + y * y);

      // 根据距离和时间添加轻微的波动
      positions[i3 + 2] += Math.sin(distance * 0.2 + elapsedTime) * 0.01;
    }
    particleSystem.geometry.attributes.position.needsUpdate = true;
  }

  // 渲染场景
  renderer.render(scene, camera);
};

// 模拟加载过程
const simulateLoading = () => {
  // 检查是否是首次访问
  const hasVisited = localStorage.getItem("hasVisitedBefore");
  const displayDuration = !hasVisited ? 3500 : 2000; // 首次访问3.5秒，非首次访问2秒

  // 简单延时后隐藏加载动画
  setTimeout(() => {
    isLoading.value = false;
    if (!hasVisited) {
      localStorage.setItem("hasVisitedBefore", "true");
    }
  }, displayDuration);
};

// 组件挂载时初始化Three.js
onMounted(() => {
  initThree();
  simulateLoading();
});

// 组件卸载前清理资源
onBeforeUnmount(() => {
  window.removeEventListener("resize", onWindowResize);
  cancelAnimationFrame(animationFrameId);

  // 清理Three.js资源
  if (renderer) {
    renderer.dispose();
    threeContainer.value.removeChild(renderer.domElement);
  }

  if (particleSystem) {
    scene.remove(particleSystem);
    particleSystem.geometry.dispose();
    particleSystem.material.dispose();
  }

  if (hexagonGroup) {
    scene.remove(hexagonGroup);
    hexagonGroup.traverse((child) => {
      if (child.geometry) child.geometry.dispose();
      if (child.material) {
        if (Array.isArray(child.material)) {
          child.material.forEach((material) => material.dispose());
        } else {
          child.material.dispose();
        }
      }
    });
  }

  scene = null;
  camera = null;
  renderer = null;
  hexagonGroup = null;
  particleSystem = null;
  clock = null;
});
</script>

<style scoped>
.loading-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #121212; /* 深色背景 */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  animation: fadeIn 0.5s ease-in-out;
}

.three-container {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}

.loading-text {
  position: absolute;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
}

.loading-title {
  font-size: 5rem;
  font-weight: 900;
  margin-bottom: 15px;
  letter-spacing: 8px;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
}

.loading-title .letter {
  display: inline-block;
  background: linear-gradient(135deg, #8247e5 0%, #6b38c1 70%, #a47eff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 30px rgba(130, 71, 229, 0.9);
  position: relative;
  animation: letter-appear 0.8s forwards cubic-bezier(0.2, 0.8, 0.2, 1),
    letter-float 3s infinite ease-in-out, letter-pulse 2s infinite ease-in-out,
    letter-glow 4s infinite ease-in-out;
  animation-delay: var(--delay), calc(var(--delay) + 0.8s),
    calc(var(--delay) + 0.8s), calc(var(--delay) + 0.8s);
  opacity: 0;
  transform: translateY(20px);
}

.loading-title .letter::before {
  content: "";
  position: absolute;
  top: -10px;
  left: 50%;
  width: 2px;
  height: 10px;
  background: linear-gradient(
    to bottom,
    rgba(130, 71, 229, 0),
    rgba(130, 71, 229, 0.8)
  );
  transform: translateX(-50%);
  animation: letter-spark 2s infinite;
  animation-delay: calc(var(--delay) + 0.4s);
  opacity: 0;
}

.loading-title .letter::after {
  content: "";
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(
    to right,
    rgba(130, 71, 229, 0),
    rgba(130, 71, 229, 0.8),
    rgba(130, 71, 229, 0)
  );
  animation: letter-underline 3s infinite ease-in-out;
  animation-delay: calc(var(--delay) + 1s);
  transform: scaleX(0);
  transform-origin: center;
}

.loading-subtitle {
  font-size: 1.5rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.9);
  letter-spacing: 3px;
  text-shadow: 0 0 15px rgba(130, 71, 229, 0.7);
  animation: fade-pulse 3s infinite ease-in-out,
    float 6s infinite ease-in-out reverse;
  position: relative;
  padding: 10px 20px;
  margin-top: 10px;
  overflow: hidden;
}

.loading-subtitle::before {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(130, 71, 229, 0.2),
    transparent
  );
  animation: subtitle-shine 3s infinite ease-in-out;
}

@keyframes subtitle-shine {
  0% {
    left: -100%;
  }
  50% {
    left: 100%;
  }
  100% {
    left: 100%;
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes pulse-text {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
}

@keyframes fade-pulse {
  0%,
  100% {
    opacity: 0.9;
  }
  50% {
    opacity: 1;
  }
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-15px);
  }
}

@keyframes shimmer {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

/* 字母动画 */
@keyframes letter-appear {
  0% {
    opacity: 0;
    transform: translateY(20px) scale(0.8) rotateX(30deg);
    filter: blur(5px);
  }
  50% {
    filter: blur(0);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1) rotateX(0);
    filter: blur(0);
  }
}

@keyframes letter-float {
  0% {
    transform: translateY(0) rotateZ(0deg);
  }
  25% {
    transform: translateY(-5px) rotateZ(1deg);
  }
  50% {
    transform: translateY(-10px) rotateZ(0deg);
  }
  75% {
    transform: translateY(-5px) rotateZ(-1deg);
  }
  100% {
    transform: translateY(0) rotateZ(0deg);
  }
}

@keyframes letter-pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes letter-glow {
  0% {
    text-shadow: 0 0 30px rgba(130, 71, 229, 0.6);
  }
  25% {
    text-shadow: 0 0 35px rgba(130, 71, 229, 0.8),
      0 0 10px rgba(255, 255, 255, 0.3);
  }
  50% {
    text-shadow: 0 0 40px rgba(130, 71, 229, 1),
      0 0 20px rgba(255, 255, 255, 0.5);
  }
  75% {
    text-shadow: 0 0 35px rgba(130, 71, 229, 0.8),
      0 0 10px rgba(255, 255, 255, 0.3);
  }
  100% {
    text-shadow: 0 0 30px rgba(130, 71, 229, 0.6);
  }
}

@keyframes letter-spark {
  0% {
    opacity: 0;
    height: 0;
  }
  50% {
    opacity: 1;
    height: 15px;
  }
  100% {
    opacity: 0;
    height: 0;
    top: -20px;
  }
}

@keyframes letter-underline {
  0% {
    transform: scaleX(0);
    opacity: 0;
  }
  20% {
    transform: scaleX(1);
    opacity: 1;
  }
  80% {
    transform: scaleX(1);
    opacity: 1;
  }
  100% {
    transform: scaleX(0);
    opacity: 0;
  }
}

/* 暗黑模式适配 */
:global(.dark) .loading-overlay {
  background: #121212; /* 深色背景 */
}

/* 响应式设计 */
@media (max-width: 992px) {
  .loading-title {
    font-size: 4rem;
    letter-spacing: 6px;
  }

  .loading-title .letter {
    text-shadow: 0 0 25px rgba(130, 71, 229, 0.8);
  }

  .loading-subtitle {
    font-size: 1.3rem;
  }

  @keyframes letter-float {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-8px);
    }
  }
}

@media (max-width: 768px) {
  .loading-title {
    font-size: 3rem;
    letter-spacing: 4px;
  }

  .loading-title .letter {
    text-shadow: 0 0 20px rgba(130, 71, 229, 0.8);
  }

  .loading-subtitle {
    font-size: 1.1rem;
    letter-spacing: 2px;
  }

  @keyframes letter-float {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-6px);
    }
  }

  @keyframes letter-pulse {
    0%,
    100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.08);
    }
  }
}

@media (max-width: 480px) {
  .loading-title {
    font-size: 2.2rem;
    letter-spacing: 3px;
  }

  .loading-title .letter {
    text-shadow: 0 0 15px rgba(130, 71, 229, 0.7);
  }

  .loading-subtitle {
    font-size: 0.9rem;
    letter-spacing: 1px;
  }

  @keyframes letter-float {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-4px);
    }
  }

  @keyframes letter-pulse {
    0%,
    100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.05);
    }
  }
}
</style>
