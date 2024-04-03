import * as THREE from 'three';


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

const sphere_geometry = new THREE.SphereGeometry(1, 32, 16);
const sphere_material = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
const sphere = new THREE.Mesh( sphere_geometry, sphere_material );
sphere.position.set(-4, 3, -2);
scene.add( sphere );

const sphere_material_line = new THREE.LineBasicMaterial({ color: 0x000f0, linewidth: 1 })
const sphere_edges= new THREE.EdgesGeometry( sphere_geometry ); 
const sphere_line = new THREE.LineSegments( sphere_edges, sphere_material_line ); 
sphere_line.position.set(-4, 3, -2);
scene.add( sphere_line );

const cone_geometry = new THREE.ConeGeometry( 1, 2, 32 ); 
const cone_material = new THREE.MeshBasicMaterial( {color: 0xfff0000} );
const cone = new THREE.Mesh( cone_geometry, cone_material );
cone.position.set(2, 1.5, -2);
scene.add( cone );

const cone_material_line = new THREE.LineBasicMaterial({ color: 0xFFECA1, linewidth: 1 })
const cone_edges = new THREE.EdgesGeometry( cone_geometry ); 
const cone_line = new THREE.LineSegments(cone_edges, cone_material_line ); 
cone_line.position.set(2, 1.5, -2);
scene.add( cone_line );

const capsule_geometry = new THREE.CapsuleGeometry( 1, 1, 4, 8 ); 
const capsule_material = new THREE.MeshBasicMaterial( {color: 0xCC6CE7} ); 
const capsule = new THREE.Mesh( capsule_geometry, capsule_material ); 
capsule.position.set(-1, 3, -2);
scene.add( capsule );

const capsule_material_line = new THREE.LineBasicMaterial({ color: 0xE2EAF4, linewidth: 1 })
const capsule_edges = new THREE.EdgesGeometry( capsule_geometry ); 
const capsule_line = new THREE.LineSegments(capsule_edges, capsule_material_line ); 
capsule_line.position.set(-1, 3, -2);
scene.add( capsule_line );

const cylinder_geometry = new THREE.CylinderGeometry( 1, 1, 2, 32 ); 
const cylinder_material = new THREE.MeshBasicMaterial( {color: 0xfff0f0} ); 
const cylinder = new THREE.Mesh( cylinder_geometry, cylinder_material ); 
cylinder.position.set(1.5, 5, -2);
scene.add( cylinder );

const cylinder_material_line = new THREE.LineBasicMaterial({ color: 0x00000, linewidth: 1 })
const cylinder_edges = new THREE.EdgesGeometry(cylinder_geometry ); 
const cylinder_line = new THREE.LineSegments(cylinder_edges, cylinder_material_line ); 
cylinder_line.position.set(1.5, 5, -2);
scene.add( cylinder_line );

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

function animate() {
	requestAnimationFrame( animate );

    cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;
    cube_line.rotation.x += 0.01;
	cube_line.rotation.y += 0.01;

    sphere.rotation.x += 0.01;
	sphere.rotation.y += 0.01;
    sphere_line.rotation.x += 0.01;
	sphere_line.rotation.y += 0.01;

    cone.rotation.x += 0.01;
	cone.rotation.y += 0.01;
    cone_line.rotation.x += 0.01;
	cone_line.rotation.y += 0.01;

    cylinder.rotation.x += 0.01;
    cylinder.rotation.y += 0.01;
    cylinder_line.rotation.x += 0.01;
    cylinder_line.rotation.y += 0.01;

    capsule.rotation.x += 0.01;
    capsule.rotation.y += 0.01;
    capsule_line.rotation.x += 0.01;
    capsule_line.rotation.y += 0.01;

	renderer.render( scene, camera );
}

animate();
