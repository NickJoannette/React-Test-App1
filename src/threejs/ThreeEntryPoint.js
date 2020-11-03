// Import dependencies
import * as THREE from 'three';
import { FirstPersonControls } from 'three/examples/jsm/controls/FirstPersonControls.js';
import * as FBXLoader from 'three/examples/jsm/loaders/FBXLoader.js';


export default function ThreeEntryPoint(sceneRef) {

  var viewPortDiv = document.getElementById("3js1");

	let mixer;
  // Create Scene
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0.08,0.184,0.23);

  // Define a camera, set it to fill the browser window and position it
  const camera = new THREE.PerspectiveCamera(45, viewPortDiv.offsetWidth/ viewPortDiv.offsetHeight, 0.1, 10000);
  camera.position.z = 5;



  // Define a renderer, and set it to fill the browser window
const renderer = new THREE.WebGLRenderer({antialias:true});
//  document.getElementById("3js1").innerHTML=viewPortDiv.width;
  renderer.setSize(viewPortDiv.offsetWidth, viewPortDiv.offsetHeight);

  // Get an element from the DOM and append renderer.domElement to it
  sceneRef.appendChild(renderer.domElement);


        var camControls = new FirstPersonControls(camera);
camControls.lookSpeed = 0.1;
camControls.movementSpeed = 10;

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
				mesh.rotation.x = - Math.PI / 2;
				mesh.receiveShadow = true;
				mesh.position.y = -25;
				scene.add( mesh );


				const grid = new THREE.GridHelper( 2000, 20, 0x000000, 0x000000 );
				grid.material = material;
				//scene.add( grid );

var cb = 1;
				// model
				const loader = new FBXLoader.FBXLoader();
				loader.load( './models/test.fbx', function ( object ) {

					//mixer = new THREE.AnimationMixer( object );

				//	const action = mixer.clipAction( object.animations[ 0 ] );
				//	action.play();
	   
					object.traverse( function ( child ) {
		
						if ( child.isMesh ) {

							child.castShadow = true;
							child.receiveShadow = true;
							child.scale.x = 0.05;
							child.scale.y=0.05;
							child.scale.z=0.05;
							child.material = material;
						}

					} );
		cb = object;
					
					scene.add( object );

				} );

const ambientLight = new THREE.AmbientLight( new THREE.Color(0.5,0.5,0.5)); // soft white light

scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight();
directionalLight.position.x=3;directionalLight.position.y=4;
scene.add(directionalLight);



const listener = new THREE.AudioListener();
camera.add( listener );

// create a global audio source
const sound = new THREE.Audio( listener );

// load a sound and set it as the Audio object's buffer
const audioLoader = new THREE.AudioLoader();
audioLoader.load( './music/test.mp3', function( buffer ) {
	sound.setBuffer( buffer );
	sound.setLoop( true );
	sound.setVolume( 0.5 );
	sound.play();
});


var clock = new THREE.Clock(true);


  // Create an animate function, which will allow you to render your scene and define any movements
  const animate = function () {
    requestAnimationFrame(animate);

  camControls.update(clock.getDelta());
   // mesh.rotation.x += 0.005;

    // mesh.rotation.y += 0.005;
    //mesh.rotation.z += 0.005;
//if (cb!=1) cb.rotation.y += 0.005;
    renderer.render(scene, camera);
  };

  // Call the animate function
  animate();

}