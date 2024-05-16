import * as THREE from 'three';
import {OrbitControls} from 'three/addons/controls/OrbitControls.js';
import WebGL from 'three/addons/capabilities/WebGL.js';


var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth/window.innerHeight,
    0.1,
    1000
);

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
document.body.appendChild( renderer.domElement );

const textureLoader = new THREE.TextureLoader();

var texture = textureLoader.load('assets/Tiles129B_1K/Tiles129B_1K-PNG_Color.png');
const cube_geometry = new THREE.BoxGeometry( 4, 4, 4 );
const cube_material = new THREE.MeshPhongMaterial( { color: 0x0fffff, map: texture} );
const cube = new THREE.Mesh( cube_geometry, cube_material );
cube.position.set(0, 3, 0);
cube.castShadow = true;
scene.add( cube );




texture = textureLoader.load('assets/Bricks092_1K/Bricks092_1K-PNG_Color.png');
const geometry = new THREE.PlaneGeometry( 24, 24, 8, 8);
const material = new THREE.MeshStandardMaterial( {color: 0xdddddd, side: THREE.DoubleSide, map: texture} );
const plane = new THREE.Mesh( geometry, material );
plane.position.set( 0, -1, 0 );
plane.rotation.x += -90 * (Math.PI/180);
plane.receiveShadow = true;
scene.add( plane );


camera.position.x = 0;
camera.position.y = 5;
camera.position.z = 15;


var controls = new OrbitControls( camera, renderer.domElement );
controls.addEventListener( 'change', ()=>{renderer.render(scene, camera)} );

// Add Point Light (emits light in all directions)
const pointLight = new THREE.PointLight(0xfffffff, 200, 10000000000000); // color, intensity, distance
pointLight.position.set(6, 10, 0);
pointLight.castShadow = true;
pointLight.shadow.mapSize.width = 2048;
pointLight.shadow.mapSize.height = 2048;
pointLight.shadow.bias = 0.001;
scene.add(pointLight);

const sphereSize = 0.5;
const pointLightHelper = new THREE.PointLightHelper( pointLight, sphereSize );
scene.add( pointLightHelper );

var oscillationPointLight_x = -1;
var PointLight_x = 0;

function animate() {
	requestAnimationFrame( animate );


    cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;
	if (pointLight.position.x >= 5)
		oscillationPointLight_x = -1
	else if (pointLight.position.x <= -5)
		oscillationPointLight_x = 1;
	PointLight_x += oscillationPointLight_x*0.05;
	pointLight.position.x = PointLight_x;
	pointLightHelper.update();


	renderer.render( scene, camera );
}


animate();

