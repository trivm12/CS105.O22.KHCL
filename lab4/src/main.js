import * as THREE from 'three';
import {OrbitControls} from 'three/addons/controls/OrbitControls.js';


var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth/window.innerHeight,
    0.1,
    1000
);

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const cube_geometry = new THREE.BoxGeometry( 1, 1, 1 );
const cube_material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( cube_geometry, cube_material );
cube.position.set(-1, 0, 0);
scene.add( cube );

const cube_material_line = new THREE.LineBasicMaterial({ color: 0x000f0, linewidth: 1 })
const cube_edges= new THREE.EdgesGeometry( cube_geometry ); 
const cube_line = new THREE.LineSegments( cube_edges, cube_material_line ); 
cube_line.position.set(-1, 0, 0);
scene.add( cube_line );

// const sphere_geometry = new THREE.SphereGeometry(1, 32, 16);
// const sphere_material = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
// const sphere = new THREE.Mesh( sphere_geometry, sphere_material );
// sphere.position.set(-4, 3, -2);
// scene.add( sphere );

// const sphere_material_line = new THREE.LineBasicMaterial({ color: 0x000f0, linewidth: 1 })
// const sphere_edges= new THREE.EdgesGeometry( sphere_geometry ); 
// const sphere_line = new THREE.LineSegments( sphere_edges, sphere_material_line ); 
// sphere_line.position.set(-4, 3, -2);
// scene.add( sphere_line );

// const cone_geometry = new THREE.ConeGeometry( 1, 2, 32 ); 
// const cone_material = new THREE.MeshBasicMaterial( {color: 0xfff0000} );
// const cone = new THREE.Mesh( cone_geometry, cone_material );
// cone.position.set(2, 1.5, -2);
// scene.add( cone );

// const cone_material_line = new THREE.LineBasicMaterial({ color: 0xFFECA1, linewidth: 1 })
// const cone_edges = new THREE.EdgesGeometry( cone_geometry ); 
// const cone_line = new THREE.LineSegments(cone_edges, cone_material_line ); 
// cone_line.position.set(2, 1.5, -2);
// scene.add( cone_line );

// const capsule_geometry = new THREE.CapsuleGeometry( 1, 1, 4, 8 ); 
// const capsule_material = new THREE.MeshBasicMaterial( {color: 0xCC6CE7} ); 
// const capsule = new THREE.Mesh( capsule_geometry, capsule_material ); 
// capsule.position.set(-1, 3, -2);
// scene.add( capsule );

// const capsule_material_line = new THREE.LineBasicMaterial({ color: 0xE2EAF4, linewidth: 1 })
// const capsule_edges = new THREE.EdgesGeometry( capsule_geometry ); 
// const capsule_line = new THREE.LineSegments(capsule_edges, capsule_material_line ); 
// capsule_line.position.set(-1, 3, -2);
// scene.add( capsule_line );

// const cylinder_geometry = new THREE.CylinderGeometry( 1, 1, 2, 32 ); 
// const cylinder_material = new THREE.MeshBasicMaterial( {color: 0xfff0f0} ); 
// const cylinder = new THREE.Mesh( cylinder_geometry, cylinder_material ); 
// cylinder.position.set(1.5, 5, -2);
// scene.add( cylinder );

// const cylinder_material_line = new THREE.LineBasicMaterial({ color: 0x00000, linewidth: 1 })
// const cylinder_edges = new THREE.EdgesGeometry(cylinder_geometry ); 
// const cylinder_line = new THREE.LineSegments(cylinder_edges, cylinder_material_line ); 
// cylinder_line.position.set(1.5, 5, -2);
// scene.add( cylinder_line );

const geometry_plane = new THREE.PlaneGeometry( 10, 10, 10, 10 );
const material_plane = new THREE.MeshBasicMaterial( {color: 0x7c857e, side: THREE.DoubleSide} );
const plane = new THREE.Mesh( geometry_plane, material_plane );
const grid_plane = new THREE.GridHelper(10, 10, 0xffffff, 0xffffff);
plane.position.set( 0, -1, 0 );
grid_plane.position.set( 0, -0.99, 0 );
plane.rotation.x =  90 * (Math.PI / 180);
scene.add( plane );
scene.add( grid_plane );

camera.position.x = 0;
camera.position.y = 1;
camera.position.z = 8;

var decreaseButtonTransitionXaxisValue = document.getElementById("decrease-transition-x-axis-value-button");
var increaseButtonTransitionXaxisValue = document.getElementById("increase-transition-x-axis-value-button");
var decreaseButtonTransitionYaxisValue = document.getElementById("decrease-transition-y-axis-value-button");
var increaseButtonTransitionYaxisValue = document.getElementById("increase-transition-y-axis-value-button");
var decreaseButtonTransitionZaxisValue = document.getElementById("decrease-transition-z-axis-value-button");
var increaseButtonTransitionZaxisValue = document.getElementById("increase-transition-z-axis-value-button");
var decreaseButtonScaleXaxisValue = document.getElementById("decrease-scale-x-axis-value-button");
var increaseButtonScaleXaxisValue = document.getElementById("increase-scale-x-axis-value-button");
var decreaseButtonScaleYaxisValue = document.getElementById("decrease-scale-y-axis-value-button");
var increaseButtonScaleYaxisValue = document.getElementById("increase-scale-y-axis-value-button");
var decreaseButtonScaleZaxisValue = document.getElementById("decrease-scale-z-axis-value-button");
var increaseButtonScaleZaxisValue = document.getElementById("increase-scale-z-axis-value-button");  


decreaseButtonTransitionXaxisValue.addEventListener("click", decrease_button_transition_x_axis_value_clicked, false);
increaseButtonTransitionXaxisValue.addEventListener("click", increase_button_transition_x_axis_value_clicked, false);
decreaseButtonTransitionYaxisValue.addEventListener("click", decrease_button_transition_y_axis_value_clicked, false);
increaseButtonTransitionYaxisValue.addEventListener("click", increase_button_transition_y_axis_value_clicked, false);
decreaseButtonTransitionZaxisValue.addEventListener("click", decrease_button_transition_z_axis_value_clicked, false);
increaseButtonTransitionZaxisValue.addEventListener("click", increase_button_transition_z_axis_value_clicked, false);
decreaseButtonScaleXaxisValue.addEventListener("click", decrease_button_scale_x_axis_value_clicked, false);
increaseButtonScaleXaxisValue.addEventListener("click", increase_button_scale_x_axis_value_clicked, false);
decreaseButtonScaleYaxisValue.addEventListener("click", decrease_button_scale_y_axis_value_clicked, false);
increaseButtonScaleYaxisValue.addEventListener("click", increase_button_scale_y_axis_value_clicked, false);
decreaseButtonScaleZaxisValue.addEventListener("click", decrease_button_scale_z_axis_value_clicked, false);
increaseButtonScaleZaxisValue.addEventListener("click", increase_button_scale_z_axis_value_clicked, false);

function decrease_button_transition_x_axis_value_clicked() {
	let transitionValue = document.getElementById("transition-x-axis-value");
	let step = document.getElementById("step");
	transitionValue.textContent = (parseFloat(transitionValue.textContent) - parseFloat(step.value)).toFixed(1);
	cube.position.x -= parseFloat(step.value);
	cube_line.position.x -= parseFloat(step.value);
	
}
function decrease_button_transition_y_axis_value_clicked() {
	let transitionValue = document.getElementById("transition-y-axis-value");
	let step = document.getElementById("step");
	transitionValue.textContent = (parseFloat(transitionValue.textContent) - parseFloat(step.value)).toFixed(1);
	cube.position.y -= parseFloat(step.value);
	cube_line.position.y -= parseFloat(step.value);
	
}
function decrease_button_transition_z_axis_value_clicked() {
	let transitionValue = document.getElementById("transition-z-axis-value");
	let step = document.getElementById("step");
	transitionValue.textContent = (parseFloat(transitionValue.textContent) - parseFloat(step.value)).toFixed(1);
	cube.position.z -= parseFloat(step.value);
	cube_line.position.z -= parseFloat(step.value);
	
}
function decrease_button_scale_x_axis_value_clicked() {
	let scaleValueX = document.getElementById("scale-x-axis-value");
	let scaleValueY = document.getElementById("scale-y-axis-value");
	let scaleValueZ = document.getElementById("scale-z-axis-value");
	let step = document.getElementById("step");
	scaleValueX.textContent = (parseFloat(scaleValueX.textContent) - parseFloat(step.value)).toFixed(1);
	cube.scale.set(parseFloat(scaleValueX.textContent), parseFloat(scaleValueY.textContent), parseFloat(scaleValueZ.textContent));
	cube_line.scale.set(parseFloat(scaleValueX.textContent), parseFloat(scaleValueY.textContent), parseFloat(scaleValueZ.textContent));
	
}
function decrease_button_scale_y_axis_value_clicked() {
	let scaleValueX = document.getElementById("scale-x-axis-value");
	let scaleValueY = document.getElementById("scale-y-axis-value");
	let scaleValueZ = document.getElementById("scale-z-axis-value");
	let step = document.getElementById("step");
	scaleValueY.textContent = (parseFloat(scaleValueY.textContent) - parseFloat(step.value)).toFixed(1);
	cube.scale.set(parseFloat(scaleValueX.textContent), parseFloat(scaleValueY.textContent), parseFloat(scaleValueZ.textContent));
	cube_line.scale.set(parseFloat(scaleValueX.textContent), parseFloat(scaleValueY.textContent), parseFloat(scaleValueZ.textContent));
	
}
function decrease_button_scale_z_axis_value_clicked() {
	let scaleValueX = document.getElementById("scale-x-axis-value");
	let scaleValueY = document.getElementById("scale-y-axis-value");
	let scaleValueZ = document.getElementById("scale-z-axis-value");
	let step = document.getElementById("step");
	scaleValueZ.textContent = (parseFloat(scaleValueZ.textContent) - parseFloat(step.value)).toFixed(1);
	cube.scale.set(parseFloat(scaleValueX.textContent), parseFloat(scaleValueY.textContent), parseFloat(scaleValueZ.textContent));
	cube_line.scale.set(parseFloat(scaleValueX.textContent), parseFloat(scaleValueY.textContent), parseFloat(scaleValueZ.textContent));
	
}

function increase_button_transition_x_axis_value_clicked() {
	let transitionValue = document.getElementById("transition-x-axis-value");
	let step = document.getElementById("step");
	transitionValue.textContent = (parseFloat(transitionValue.textContent) + parseFloat(step.value)).toFixed(1);
	cube.position.x += parseFloat(step.value);
	cube_line.position.x += parseFloat(step.value);
	
}
function increase_button_transition_y_axis_value_clicked() {
	let transitionValue = document.getElementById("transition-y-axis-value");
	let step = document.getElementById("step");
	transitionValue.textContent = (parseFloat(transitionValue.textContent) + parseFloat(step.value)).toFixed(1);
	cube.position.y += parseFloat(step.value);
	cube_line.position.y += parseFloat(step.value);
	
}
function increase_button_transition_z_axis_value_clicked() {
	let transitionValue = document.getElementById("transition-z-axis-value");
	let step = document.getElementById("step");
	transitionValue.textContent = (parseFloat(transitionValue.textContent) + parseFloat(step.value)).toFixed(1);
	cube.position.z += parseFloat(step.value);
	cube_line.position.z += parseFloat(step.value);
	
}
function increase_button_scale_x_axis_value_clicked() {
	let scaleValueX = document.getElementById("scale-x-axis-value");
	let scaleValueY = document.getElementById("scale-y-axis-value");
	let scaleValueZ = document.getElementById("scale-z-axis-value");
	let step = document.getElementById("step");
	scaleValueX.textContent = (parseFloat(scaleValueX.textContent) + parseFloat(step.value)).toFixed(1);
	cube.scale.set(parseFloat(scaleValueX.textContent), parseFloat(scaleValueY.textContent), parseFloat(scaleValueZ.textContent));
	cube_line.scale.set(parseFloat(scaleValueX.textContent), parseFloat(scaleValueY.textContent), parseFloat(scaleValueZ.textContent));
	
}
function increase_button_scale_y_axis_value_clicked() {
	let scaleValueX = document.getElementById("scale-x-axis-value");
	let scaleValueY = document.getElementById("scale-y-axis-value");
	let scaleValueZ = document.getElementById("scale-z-axis-value");
	let step = document.getElementById("step");
	scaleValueY.textContent = (parseFloat(scaleValueY.textContent) + parseFloat(step.value)).toFixed(1);
	cube.scale.set(parseFloat(scaleValueX.textContent), parseFloat(scaleValueY.textContent), parseFloat(scaleValueZ.textContent));
	cube_line.scale.set(parseFloat(scaleValueX.textContent), parseFloat(scaleValueY.textContent), parseFloat(scaleValueZ.textContent));
	
}
function increase_button_scale_z_axis_value_clicked() {
	let scaleValueX = document.getElementById("scale-x-axis-value");
	let scaleValueY = document.getElementById("scale-y-axis-value");
	let scaleValueZ = document.getElementById("scale-z-axis-value");
	let step = document.getElementById("step");
	scaleValueZ.textContent = (parseFloat(scaleValueZ.textContent) + parseFloat(step.value)).toFixed(1);
	cube.scale.set(parseFloat(scaleValueX.textContent), parseFloat(scaleValueY.textContent), parseFloat(scaleValueZ.textContent));
	cube_line.scale.set(parseFloat(scaleValueX.textContent), parseFloat(scaleValueY.textContent), parseFloat(scaleValueZ.textContent));
	
}
var originalFov = camera.fov;

document.getElementById('fovSlider').addEventListener('input', function() {
    var fov = parseInt(this.value);
    updateFovDisplay(fov);
    camera.fov = fov;
    camera.updateProjectionMatrix();
});

function updateFovDisplay(fov) {
    var fovPercentage = (fov / originalFov) * 100;
    document.getElementById('fovPercentage').innerText = fovPercentage.toFixed(0) + '%';
}


var originalRatio = camera.aspect;

document.getElementById('aspectRatioSlider').addEventListener('input', function() {
    var ratio = parseFloat(this.value);
    updateAspectRatioDisplay(ratio);
    camera.aspect = ratio;
    camera.updateProjectionMatrix();
});

function updateAspectRatioDisplay(ratio) {
    var ratioPer = (ratio / originalRatio) * 100;
    document.getElementById('RatioPer').innerText = ratioPer.toFixed(0) + "%";
}


var originalNear = camera.near;

document.getElementById('nearSlider').addEventListener('input', function() {
    var near = parseFloat(this.value);
    updateNearDisplay(near);
    camera.near = near;
    camera.updateProjectionMatrix();
});

function updateNearDisplay(near) {
    var nearPer = (near / originalNear) * 100;
    document.getElementById('nearPer').innerText = nearPer.toFixed() + "%";
}

var originalFar = camera.far / 100;

document.getElementById('farSlider').addEventListener('input', function() {
    var far = parseFloat(this.value);
    updateFarDisplay(far);
    camera.far = far;
    camera.updateProjectionMatrix();
});

function updateFarDisplay(far) {
    var farPer = (far / originalFar) * 100;
    document.getElementById('farPer').innerText = farPer.toFixed() + "%";
}


var initialFov = originalFov;
var initialAspectRatio = originalRatio;
var initialNear = originalNear;
var initialFar = originalFar;
document.getElementById('resetButton').addEventListener('click', function() {
    // Đặt lại giá trị của slider về giá trị ban đầu
    fovSlider.value = initialFov;
    updateFovDisplay(initialFov);
    camera.fov = initialFov;

    aspectRatioSlider.value = initialAspectRatio;
    updateAspectRatioDisplay(initialAspectRatio);
    camera.aspect = initialAspectRatio;

    nearSlider.value = initialNear;
    updateNearDisplay(initialNear);
    camera.near = initialNear;

    farSlider.value = initialFar;
    updateFarDisplay(initialFar);
    camera.far = initialFar;

    camera.updateProjectionMatrix();
});

var controls = new OrbitControls( camera, renderer.domElement );
controls.addEventListener( 'change', ()=>{renderer.render(scene, camera)} );


function animate() {
	requestAnimationFrame( animate );


    cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;
    cube_line.rotation.x += 0.01;
	cube_line.rotation.y += 0.01;

    // sphere.rotation.x += 0.01;
	// sphere.rotation.y += 0.01;
    // sphere_line.rotation.x += 0.01;
	// sphere_line.rotation.y += 0.01;

    // cone.rotation.x += 0.01;
	// cone.rotation.y += 0.01;
    // cone_line.rotation.x += 0.01;
	// cone_line.rotation.y += 0.01;

    // cylinder.rotation.x += 0.01;
    // cylinder.rotation.y += 0.01;
    // cylinder_line.rotation.x += 0.01;
    // cylinder_line.rotation.y += 0.01;

    // capsule.rotation.x += 0.01;
    // capsule.rotation.y += 0.01;
    // capsule_line.rotation.x += 0.01;
    // capsule_line.rotation.y += 0.01;

	renderer.render( scene, camera );
}


animate();

