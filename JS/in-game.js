function loadCarModel(containerId, modelPath) {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(20, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById(containerId), alpha: true });
    const canvas = document.getElementById("miCanvas3D");
    const img = document.querySelector(".map img"); 
    canvas.width = img.clientWidth;
    canvas.height = img.clientHeight;
    renderer.setSize(250, 200); // Ajusta el tamaño
    document.getElementById(containerId).parentNode.appendChild(renderer.domElement);

    const light = new THREE.DirectionalLight(0xffffff, 3);   
    light.position.set(5, 10, 7.5);  
    scene.add(light);


    const loader = new THREE.GLTFLoader();
    loader.load(modelPath, function(gltf) {
        const model = gltf.scene;
        scene.add(model);
        model.scale.set(1, 1, 1);
        model.rotation.y = -2*Math.PI/180;

        //  function animate() {
        //        requestAnimationFrame(animate);
        //        model.rotation.y += 0.01; 
        //        renderer.render(scene, camera);
        //  }
        //  animate();
        renderer.render(scene, camera);
        
    });
        
    camera.position.set(9, 5, 13);     
    camera.rotation.set(-18*Math.PI/180, 32*Math.PI/180, 10*Math.PI/180);

    document.getElementById(containerId).addEventListener("click", () => {
        window.location.href = "road.html";
    });
}

loadCarModel("miCanvas3D", "CSS/3D/toyota-supra.glb");
