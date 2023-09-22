import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OBJLoader } from 'three/addons/loaders/OBJLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { MTLLoader } from 'three/addons/loaders/MTLLoader.js';

function siuu(){
    const scene = new THREE.Scene();
    scene.background = null;
    const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

    const container = document.getElementById("3d-container");
    const renderer = new THREE.WebGLRenderer({ alpha: true });

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.target.set(15, 30, 0);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.rotateSpeed = 0.1;
    controls.zoomSpeed = 1.2;

    // Function to update renderer size based on the container 
    function resizeRenderer() {
        const containerWidth = container.clientWidth;
        const containerHeight = container.clientHeight;
        
        // Update the renderer size to match the container
        renderer.setSize(containerWidth, containerHeight);
        
        // Update the camera's aspect ratio to match the new size
        camera.aspect = containerWidth / containerHeight;
        camera.updateProjectionMatrix();
    }

    // Append the renderer's canvas to the "3d-container" div
    container.appendChild(renderer.domElement);

    // ...

    // Listen for window resize events and update renderer size
    window.addEventListener('resize', resizeRenderer);

    // Initial call to set the renderer size
    resizeRenderer();

    // Append the renderer's canvas to the "3d-container" div
    container.appendChild(renderer.domElement);

    let objModel;
    const objLoader = new OBJLoader();
    const mtlLoader = new MTLLoader();
    mtlLoader.load('models/project.mtl', (mtl) => {
        mtl.preload();
        objLoader.setMaterials(mtl);
        objLoader.load('models/project_v1.obj', (object) => {
        object.scale.x = object.scale.y = object.scale.z = 0.125;
        object.rotation.x -= 0.5
        object.rotation.y -= 0.2
        object.rotation.z -= 0.2

        scene.add(object)
        objModel = object;
        });
    });




    // const objLoader = new OBJLoader();
    // objLoader.load('models/project.obj', (object) => {
    //     object.scale.x = object.scale.y = object.scale.z = 1;
    //     object.rotation.x -= 0.5
    //     object.rotation.y -= 0.2
    //     object.rotation.z -= 0.2
// 
    //     scene.add(object)
    //     objModel = object;
    // });



    // const loader = new OBJLoader();
    // // load a resource
    // loader.load(
    //     // resource URL
    //     'models/project.obj',
    //     // called when resource is loaded
    //     function ( object ) {
    //         object.scale.x = object.scale.y = object.scale.z = 1;
    //         object.rotation.x -= 0.5
    //         object.rotation.y -= 0.2
    //         object.rotation.z -= 0.2
// 
    //         scene.add(object)
// 
    //         objModel = object;
// 
    //     },
    //     // called when loading is in progresses
    //     function ( xhr ) {
// 
    //         console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
// 
    //     },
    //     // called when loading has errors
    //     function ( error ) {
// 
    //         console.log( error );
// 
    //     }
    // );
    //const loader = new GLTFLoader();
    //
    //loader.load( 'public/tdb.gltf', function ( gltf ) {
    //
    //	scene.add( gltf.scene );
    //
    //}, undefined, function ( error ) {
    //
    //	console.error( error );
    //
    //} );

    const ambientLight = new THREE.AmbientLight( 0xffffff, 0.4 );
    scene.add( ambientLight );

    const directionalLight = new THREE.DirectionalLight( 0xffffff, 0.8 );
    directionalLight.position.set( 100, 100, 0 );
    scene.add( directionalLight );

    camera.position.set(15,30,100);


    function animate() {
        requestAnimationFrame( animate );

        // if (objModel) {
        //     // Rotate the loaded object
        //     objModel.rotation.y += 0.01;
        // }
        // controls.update();

        renderer.render( scene, camera );
    }

    animate();
}

siuu()
document.addEventListener('astro:after-swap', siuu);