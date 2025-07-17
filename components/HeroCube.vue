<template>
  <div ref="threeContainer" class="hero-cube-container"></div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import * as THREE from "three";

const threeContainer = ref(null);
let scene, camera, renderer;
let cube;
let clock;
let animationFrameId;
let cubeCamera, cubeRenderTarget; // 添加环境贴图相关变量
let cubeSize = 0.8; // 每个小立方体的大小
let gap = 0.07; // 小立方体之间的间隙

// 缓动函数 - 使动画更自然
const easeInOutCubic = (t) => {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
};

// 初始化Three.js场景
const initThree = () => {
  // 创建场景
  scene = new THREE.Scene();

  // 创建透视相机
  const { width, height } = threeContainer.value.getBoundingClientRect();
  camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
  camera.position.z = 6.5;

  // 创建渲染器
  renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true, // 透明背景
  });
  renderer.setSize(width, height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  threeContainer.value.appendChild(renderer.domElement);

  // 创建时钟对象
  clock = new THREE.Clock();

  // 创建立方体
  createCube();

  // 添加窗口大小变化监听
  window.addEventListener("resize", onWindowResize);

  // 开始动画循环
  animate();
};

// 创建立方体
const createCube = () => {
  // 创建魔方结构 - 3x3x3的小立方体组
  const offset = cubeSize + gap; // 偏移量

  // 创建小立方体的几何体
  const geometry = new THREE.BoxGeometry(cubeSize, cubeSize, cubeSize);

  // 创建组对象来容纳所有小立方体
  cube = new THREE.Group();

  // 存储每个小立方体的目标位置
  const targetPositions = [];

  // 创建渐变纹理的函数
  const createGradientTexture = (color1, color2) => {
    const canvas = document.createElement("canvas");
    canvas.width = 512; // 高分辨率
    canvas.height = 512;

    const context = canvas.getContext("2d");

    // 创建径向渐变
    const gradient = context.createRadialGradient(256, 256, 50, 256, 256, 300);

    gradient.addColorStop(0, color1);
    gradient.addColorStop(1, color2);

    context.fillStyle = gradient;
    context.fillRect(0, 0, 512, 512);

    // 添加一些光泽效果
    context.globalCompositeOperation = "lighter";
    context.fillStyle = "rgba(255, 255, 255, 0.3)";
    context.fillRect(0, 0, 512, 256);

    // 添加边缘发光效果
    context.globalCompositeOperation = "source-over";
    context.strokeStyle = "rgba(255, 255, 255, 0.7)";
    context.lineWidth = 8;
    context.strokeRect(8, 8, 496, 496);

    const texture = new THREE.CanvasTexture(canvas);
    texture.anisotropy = renderer.capabilities.getMaxAnisotropy();
    return texture;
  };

  // 创建不同颜色的材质
  const purpleTexture = createGradientTexture("#A78BFA", "#8B5CF6");
  const blueTexture = createGradientTexture("#93C5FD", "#3B82F6");

  // 创建基础材质属性
  const createMaterial = (texture) => {
    return new THREE.MeshPhysicalMaterial({
      map: texture,
      transparent: true,
      opacity: 0.85,
      metalness: 0.2,
      roughness: 0.1,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
      transmission: 0.5, // 半透明玻璃效果
      thickness: 0.5,
      envMapIntensity: 1.5,
      side: THREE.DoubleSide,
    });
  };

  const purpleMaterial = createMaterial(purpleTexture);
  const blueMaterial = createMaterial(blueTexture);

  // 创建3x3x3魔方结构
  for (let x = -1; x <= 1; x++) {
    for (let y = -1; y <= 1; y++) {
      for (let z = -1; z <= 1; z++) {
        // 跳过中心立方体，创建空心结构
        if (x === 0 && y === 0 && z === 0) continue;

        // 交替使用两种材质
        const material = (x + y + z) % 2 === 0 ? purpleMaterial : blueMaterial;

        const smallCube = new THREE.Mesh(geometry, material);

        // 存储目标位置（完整魔方时的位置）
        const targetPosition = new THREE.Vector3(
          x * offset,
          y * offset,
          z * offset
        );

        // 设置初始随机位置（杂乱状态）
        const randomOffset = 6.5; // 随机分散的范围
        smallCube.position.set(
          (Math.random() - 0.5) * randomOffset,
          (Math.random() - 0.5) * randomOffset,
          (Math.random() - 0.5) * randomOffset
        );

        // 为每个小立方体添加随机旋转（杂乱状态）
        smallCube.rotation.set(
          Math.random() * Math.PI * 2,
          Math.random() * Math.PI * 2,
          Math.random() * Math.PI * 2
        );

        // 存储目标位置和旋转信息到小立方体的userData中
        smallCube.userData.targetPosition = targetPosition;
        smallCube.userData.targetRotation = new THREE.Vector3(0, 0, 0);
        smallCube.userData.initialPosition = smallCube.position.clone();
        smallCube.userData.initialRotation = smallCube.rotation.clone();

        // 将小立方体添加到组中
        cube.add(smallCube);
      }
    }
  }

  // 将整个魔方组添加到场景
  scene.add(cube);

  // 创建环境贴图以增强玻璃效果
  cubeRenderTarget = new THREE.WebGLCubeRenderTarget(256);
  cubeCamera = new THREE.CubeCamera(0.1, 1000, cubeRenderTarget);
  scene.add(cubeCamera);

  // 将环境贴图应用到所有材质
  cube.traverse((object) => {
    if (object.isMesh) {
      object.material.envMap = cubeRenderTarget.texture;
    }
  });

  // 添加环境光
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
  scene.add(ambientLight);

  // 添加方向光
  const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
  directionalLight.position.set(6, 6, 6);
  scene.add(directionalLight);

  // 添加多个彩色点光源
  const colors = [0x8b5cf6, 0x3b82f6, 0xec4899];
  colors.forEach((color, index) => {
    const pointLight = new THREE.PointLight(color, 1, 10);
    const angle = (index / colors.length) * Math.PI * 2;
    pointLight.position.set(Math.cos(angle) * 4, Math.sin(angle) * 4, 2.5);
    scene.add(pointLight);
  });

  // 创建光晕效果
  addGlow();
};

// 窗口大小变化处理
const onWindowResize = () => {
  const { width, height } = threeContainer.value.getBoundingClientRect();
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
  renderer.setSize(width, height);
};

// 创建光晕效果
const addGlow = () => {
  // 创建一个略大的球体作为整体光晕
  const glowGeometry = new THREE.SphereGeometry(3.2, 32, 32);
  const glowMaterial = new THREE.ShaderMaterial({
    uniforms: {
      glowColor: { value: new THREE.Color(0xa78bfa) },
      secondColor: { value: new THREE.Color(0x3b82f6) },
      time: { value: 0 },
    },
    vertexShader: `
      varying vec3 vNormal;
      varying vec3 vPosition;
      void main() {
        vNormal = normalize(normalMatrix * normal);
        vPosition = position;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform vec3 glowColor;
      uniform vec3 secondColor;
      uniform float time;
      varying vec3 vNormal;
      varying vec3 vPosition;
      
      void main() {
        // 创建更复杂的光晕效果
        float intensity = pow(0.6 - dot(vNormal, vec3(0, 0, 1.0)), 3.0);
        
        // 添加时间变化的脉冲效果
        float pulse = 0.5 + 0.5 * sin(time * 1.5);
        intensity = intensity * (1.0 + 0.3 * pulse);
        
        // 混合两种颜色
        vec3 color = mix(glowColor, secondColor, 0.5 + 0.5 * sin(time + vPosition.x + vPosition.y));
        
        // 添加一些噪点效果
        float noise = fract(sin(dot(vPosition.xy, vec2(12.9898, 78.233)) * 43758.5453) * 0.15);
        
        gl_FragColor = vec4(color, (intensity + noise * 0.1) * 0.5);
      }
    `,
    side: THREE.BackSide,
    blending: THREE.AdditiveBlending,
    transparent: true,
  });

  const glowMesh = new THREE.Mesh(glowGeometry, glowMaterial);
  scene.add(glowMesh);

  // 为每个小立方体添加单独的光晕
  cube.children.forEach((smallCube) => {
    const smallGlowGeometry = new THREE.BoxGeometry(
      cubeSize * 1.2,
      cubeSize * 1.2,
      cubeSize * 1.2
    );

    const smallGlowMaterial = new THREE.ShaderMaterial({
      uniforms: {
        glowColor: {
          value: smallCube.material.color
            ? smallCube.material.color
            : new THREE.Color(0xa78bfa),
        },
        time: { value: 0 },
      },
      vertexShader: `
        varying vec3 vNormal;
        void main() {
          vNormal = normalize(normalMatrix * normal);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform vec3 glowColor;
        uniform float time;
        varying vec3 vNormal;
        void main() {
          float intensity = pow(0.7 - dot(vNormal, vec3(0, 0, 1.0)), 2.0);
          intensity = intensity * 1.5 + 0.5 * sin(time * 3.0 + gl_FragCoord.x * 0.01);
          gl_FragColor = vec4(glowColor, intensity * 0.4);
        }
      `,
      side: THREE.BackSide,
      blending: THREE.AdditiveBlending,
      transparent: true,
    });

    const smallGlowMesh = new THREE.Mesh(smallGlowGeometry, smallGlowMaterial);
    smallCube.add(smallGlowMesh);
  });
};

// 动画循环
const animate = () => {
  animationFrameId = requestAnimationFrame(animate);

  const elapsedTime = clock.getElapsedTime();

  // 更新场景中所有光晕效果的时间参数
  if (scene && typeof scene.traverse === 'function') {
    scene.traverse((object) => {
      if (
        object &&
        object.material &&
        object.material.uniforms &&
        object.material.uniforms.time !== undefined
      ) {
        object.material.uniforms.time.value = elapsedTime;
      }
    });
  }

  // 动画阶段控制
  const animationDuration = 6.0; // 从杂乱到完整的动画持续时间（秒）
  const animationProgress = Math.min(elapsedTime / animationDuration, 1.0); // 0到1之间的进度值
  const easeProgress = easeInOutCubic(animationProgress); // 使用缓动函数使动画更自然

  // 更新魔方整体旋转 - 只在动画完成后添加整体旋转
  if (cube) {
    if (animationProgress >= 1.0) {
      // 动画完成后的整体旋转
      const postAnimationTime = elapsedTime - animationDuration;
      cube.rotation.x =
        Math.sin(postAnimationTime * 0.2) * 0.15 + postAnimationTime * 0.1;
      cube.rotation.y =
        Math.cos(postAnimationTime * 0.15) * 0.2 + postAnimationTime * 0.15;
      cube.rotation.z = Math.sin(postAnimationTime * 0.1) * 0.05;

      // 添加轻微的位置浮动
      cube.position.y = Math.sin(postAnimationTime * 0.7) * 0.1;
    } else {
      // 在动画过程中，保持整体不旋转
      cube.rotation.set(0, 0, 0);
      cube.position.y = 0;
    }

    // 更新每个小立方体的动画
    if (cube.children && cube.children.length > 0) {
      cube.children.forEach((smallCube, index) => {
        // 跳过光晕对象
        if (!smallCube.isMesh) return;

        // 获取目标位置和初始位置
        const targetPos = smallCube.userData.targetPosition;
        const initialPos = smallCube.userData.initialPosition;

        // 根据动画进度插值计算当前位置
        if (animationProgress < 1.0) {
          // 在动画阶段，从初始随机位置移动到目标位置
          smallCube.position.lerpVectors(initialPos, targetPos, easeProgress);

          // 旋转也逐渐归零
          smallCube.rotation.x =
            smallCube.userData.initialRotation.x * (1 - easeProgress);
          smallCube.rotation.y =
            smallCube.userData.initialRotation.y * (1 - easeProgress);
          smallCube.rotation.z =
            smallCube.userData.initialRotation.z * (1 - easeProgress);
        } else {
          // 动画完成后，添加微小的独立运动
          const offsetTime = elapsedTime + index * 0.2;

          // 轻微的呼吸效果 - 小立方体轻微缩放
          const breathScale = 1 + Math.sin(offsetTime * 2) * 0.03;
          smallCube.scale.set(breathScale, breathScale, breathScale);

          // 轻微的位置偏移 - 使魔方看起来更有活力
          smallCube.position.x =
            targetPos.x +
            Math.sin(offsetTime * 1.5) * 0.02 * Math.sign(targetPos.x);
          smallCube.position.y =
            targetPos.y +
            Math.sin(offsetTime * 1.7) * 0.02 * Math.sign(targetPos.y);
          smallCube.position.z =
            targetPos.z +
            Math.sin(offsetTime * 1.3) * 0.02 * Math.sign(targetPos.z);
        }

        // 更新小立方体的光晕效果
        if (
          smallCube.children &&
          smallCube.children.length > 0 &&
          smallCube.children[0] &&
          smallCube.children[0].material &&
          smallCube.children[0].material.uniforms &&
          smallCube.children[0].material.uniforms.time !== undefined
        ) {
          smallCube.children[0].material.uniforms.time.value =
            elapsedTime + index * 0.2;
        }
      });
    }
  }

  // 更新环境贴图
  if (cubeCamera && cubeCamera.update && renderer && scene) {
    cubeCamera.update(renderer, scene);
  }

  // 渲染场景
  if (renderer && scene && camera) {
    renderer.render(scene, camera);
  }
};

// 组件挂载时初始化Three.js
onMounted(() => {
  initThree();
});

// 组件卸载前清理资源
onBeforeUnmount(() => {
  window.removeEventListener("resize", onWindowResize);
  cancelAnimationFrame(animationFrameId);

  // 清理Three.js资源
  if (renderer) {
    renderer.dispose();
    if (
      threeContainer.value &&
      threeContainer.value.contains(renderer.domElement)
    ) {
      threeContainer.value.removeChild(renderer.domElement);
    }
  }

  // 清理立方体组及其子对象
  if (cube && typeof cube.traverse === 'function') {
    // 递归清理所有小立方体及其材质
    cube.traverse((object) => {
      if (object && object.isMesh) {
        if (object.geometry) object.geometry.dispose();

        // 处理材质
        if (object.material) {
          if (Array.isArray(object.material)) {
            object.material.forEach((material) => {
              if (material && material.map) material.map.dispose();
              if (material) material.dispose();
            });
          } else {
            if (object.material.map) object.material.map.dispose();
            object.material.dispose();
          }
        }
      }
    });

    if (scene) {
      scene.remove(cube);
    }
  }

  // 清理环境贴图资源
  if (cubeRenderTarget) {
    cubeRenderTarget.dispose();
  }

  if (cubeCamera && scene) {
    scene.remove(cubeCamera);
  }

  // 清理场景中的所有光源
  if (scene && typeof scene.traverse === 'function') {
    scene.traverse((object) => {
      if (object && object.isLight) {
        scene.remove(object);
      }
    });
  }

  // 设置所有变量为null
  scene = null;
  camera = null;
  renderer = null;
  cube = null;
  clock = null;
  cubeCamera = null;
  cubeRenderTarget = null;
});
</script>

<style scoped>
.hero-cube-container {
  width: 100%;
  height: 100%;
  position: relative;
}
</style>
