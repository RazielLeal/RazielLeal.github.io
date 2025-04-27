import * as THREE from "../game/three.module.js";
import { GLTFLoader} from "../game/GLTFLoader.js"; 
        
function loadCarModel(containerId, modelPath) {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(20, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById(containerId), alpha: true });
    renderer.setSize(250, 200); // Ajusta el tamaño
    document.getElementById(containerId).parentNode.appendChild(renderer.domElement);

    const light = new THREE.DirectionalLight(0xffffff, 2);  // Luz blanca
    light.position.set(5, 5, 5);  // Posición de la luz
    scene.add(light);

    const loader = new GLTFLoader();
    loader.load(modelPath, function(gltf) {
        const model = gltf.scene;
        scene.add(model);
        model.scale.set(1, 1, 1);
        model.rotation.y = -2*Math.PI/180;
        model.position.x = .2;
        
        function animate() {
            requestAnimationFrame(animate);
            model.rotation.y += 0.01; 
            renderer.render(scene, camera);
        }
        animate();
        // renderer.render(scene, camera);
        
    });
        
    camera.position.set(9, 5, 13);     
    camera.rotation.set(-18*Math.PI/180, 32*Math.PI/180, 10*Math.PI/180);

    document.getElementById(containerId).addEventListener("click", () => {
        window.location.href = "road.html";
    });
}

loadCarModel("GT350-canvas", "CSS/3D/skyline.glb");
loadCarModel("SN95-canvas", "CSS/3D/toyota-supra.glb");
loadCarModel("GT500-canvas", "CSS/3D/toyota-chaser.glb");        