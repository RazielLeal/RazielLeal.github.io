// Importar Three.js y el GLTFLoader como módulos ES6
import * as THREE from '../three/three.module.js';
import { GLTFLoader } from '../loaders/GLTFLoader.js';
// Escena
const scene = new THREE.Scene();

// Cámara
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// Renderizador
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Luz
const light = new THREE.HemisphereLight(0xffffff, 0x444444);
light.position.set(0, 20, 0);
scene.add(light);

// Cargar modelo GLTF
const loader = new GLTFLoader();
loader.load('../models/mustang.glb', (gltf) => {
  scene.add(gltf.scene);
}, undefined, (error) => {
  console.error('Error al cargar el modelo:', error);
});

// Animación
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();
