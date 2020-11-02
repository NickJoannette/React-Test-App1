// Import dependencies
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import * as FBXLoader from 'three/examples/jsm/loaders/FBXLoader.js';
export default function ThreeEntryPoint(sceneRef) {
	

	


	let mixer;
  // Create Scene
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0.03,0.02,0.02);

  // Define a camera, set it to fill the browser window and position it
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 10000);
  camera.position.z = 5;

  // Define a renderer, and set it to fill the browser window
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);

  // Get an element from the DOM and append renderer.domElement to it
  sceneRef.appendChild(renderer.domElement);


  // Add controls, targetting the same DOM element
  let controls = new OrbitControls(camera, sceneRef);
  controls.target.set(0, 0, 0);
  controls.rotateSpeed = 0.5;
  controls.update();

  // Define (or import) your object's geometry
  const geometry = new THREE.SphereGeometry( 5, 6, 6 );

  // Define your object's material
  const material = new THREE.MeshStandardMaterial({
    color: new THREE.Color(0,0.25,0.65),
    emissive: 0x111111,
    specular: 0xffffff,
    metalness: 0.45,
    roughness: 0.05,
  });

	const mesh = new THREE.Mesh( new THREE.PlaneBufferGeometry( 2000, 2000 ), new THREE.MeshPhongMaterial( { color: 0x999999, depthWrite: false } ) );
				//mesh.rotation.x = - Math.PI / 2;
				mesh.receiveShadow = true;
				//scene.add( mesh );

				const grid = new THREE.GridHelper( 2000, 20, 0x000000, 0x000000 );
				grid.material = material;
				//scene.add( grid );

var cb = 1;
				// model
				const loader = new FBXLoader.FBXLoader();
				loader.load( './models/earth_lowpoly.fbx', function ( object ) {

					//mixer = new THREE.AnimationMixer( object );

				//	const action = mixer.clipAction( object.animations[ 0 ] );
				//	action.play();
	   
					object.traverse( function ( child ) {
		
						if ( child.isMesh ) {

							child.castShadow = true;
							child.receiveShadow = true;
							child.scale.x = 0.5;
							child.scale.y=0.5;
							child.scale.z=0.5;
					
						}

					} );
		cb = object;
					
					scene.add( object );

				} );

const light = new THREE.AmbientLight( new THREE.Color(0.5,0.5,0.5)); // soft white light

scene.add( light );
  // Create an animate function, which will allow you to render your scene and define any movements
  const animate = function () {
    requestAnimationFrame(animate);

   // mesh.rotation.x += 0.005;

    // mesh.rotation.y += 0.005;
    //mesh.rotation.z += 0.005;
if (cb!=1) cb.rotation.y += 0.005;
    renderer.render(scene, camera);
  };

  // Call the animate function
  animate();

}