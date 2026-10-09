import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

const MODEL_URL = new URL("../assets/images/hufan_style_superhero_basic_3d.glb", import.meta.url);
const MODEL_HEIGHT = 3.25;

export const createHeroModel = async (canvas, context) => {
  const renderer = new THREE.WebGLRenderer({
    canvas,
    context,
    alpha: true,
    antialias: true,
    powerPreference: "low-power",
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.15;

  const scene = new THREE.Scene();
  scene.add(new THREE.HemisphereLight(0xffffff, 0x77717a, 2.2));

  const keyLight = new THREE.DirectionalLight(0xffffff, 2.5);
  keyLight.position.set(-3, 5, 6);
  scene.add(keyLight);

  const fillLight = new THREE.DirectionalLight(0xffc08a, 1.1);
  fillLight.position.set(4, 2, 3);
  scene.add(fillLight);

  const camera = new THREE.PerspectiveCamera(32, 1, 0.1, 30);
  camera.position.set(0, 1.65, 7.2);
  camera.lookAt(0, 1.65, 0);

  let gltf;
  try {
    gltf = await new GLTFLoader().loadAsync(MODEL_URL.href);
  } catch (error) {
    renderer.dispose();
    throw error;
  }

  const model = gltf.scene;
  const arm = new THREE.Group();
  arm.position.set(0.42, 0, 2.7);
  model.add(arm);

  const upperArm = model.getObjectByName("Right upper arm");
  const elbow = model.getObjectByName("Right elbow armor");
  if (upperArm && elbow) {
    const lowerArmParts = [];
    model.traverse((part) => {
      if (
        part.name === "Right forearm" ||
        part.name === "Right wrist cuff" ||
        part.name === "Right hand" ||
        part.name.startsWith("Right fingers")
      ) {
        lowerArmParts.push(part);
      }
    });

    model.updateMatrixWorld(true);
    arm.attach(upperArm);
    arm.attach(elbow);

    const forearm = new THREE.Group();
    forearm.position.set(0.18, 0, -0.35);
    arm.add(forearm);

    model.updateMatrixWorld(true);
    lowerArmParts.forEach((part) => forearm.attach(part));
    model.userData.wavingArm = arm;
    model.userData.wavingForearm = forearm;
  }

  const character = new THREE.Group();
  character.rotation.x = -Math.PI / 2;
  character.add(model);
  scene.add(character);

  const bounds = new THREE.Box3().setFromObject(character);
  const size = bounds.getSize(new THREE.Vector3());
  const center = bounds.getCenter(new THREE.Vector3());
  const scale = MODEL_HEIGHT / size.y;
  character.scale.setScalar(scale);
  character.position.set(-center.x * scale, -bounds.min.y * scale, -center.z * scale);

  const render = () => {
    const width = Math.max(1, canvas.clientWidth);
    const height = Math.max(1, canvas.clientHeight);
    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.render(scene, camera);
  };

  render();

  const resizeObserver = new ResizeObserver(render);
  resizeObserver.observe(canvas);

  let animationFrame = 0;
  let disposed = false;

  return {
    wave() {
      const wavingArm = model.userData.wavingArm;
      const wavingForearm = model.userData.wavingForearm;
      if (!wavingArm || !wavingForearm || disposed) {
        return;
      }

      const startedAt = performance.now();
      const duration = 2500;
      const raiseDuration = 450;
      const returnDuration = 350;
      const easeOut = (value) => 1 - (1 - value) ** 3;

      const animate = (now) => {
        if (disposed) {
          return;
        }

        const elapsed = now - startedAt;
        const progress = Math.min(elapsed / duration, 1);
        if (elapsed < raiseDuration) {
          wavingArm.rotation.y = -0.9 * easeOut(elapsed / raiseDuration);
        } else if (elapsed > duration - returnDuration) {
          wavingArm.rotation.y = -0.9 * (1 - easeOut((elapsed - duration + returnDuration) / returnDuration));
        } else {
          const waveProgress = (elapsed - raiseDuration) / (duration - raiseDuration - returnDuration);
          wavingArm.rotation.y = -0.9 + Math.sin(waveProgress * Math.PI * 6) * 0.12;
          wavingForearm.rotation.y = Math.sin(waveProgress * Math.PI * 6) * 0.22;
        }

        if (progress >= 1) {
          wavingArm.rotation.y = 0;
          wavingForearm.rotation.y = 0;
          render();
          animationFrame = 0;
          return;
        }

        render();
        animationFrame = requestAnimationFrame(animate);
      };

      if (!animationFrame) {
        animationFrame = requestAnimationFrame(animate);
      }
    },
    dispose() {
      disposed = true;
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
      resizeObserver.disconnect();
      renderer.dispose();
    },
  };
};
