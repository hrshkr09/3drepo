//basic

// import * as THREE from "three";

// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera(
//   75,
//   window.innerWidth / window.innerHeight,
//   0.1,
//   1000
// );
// const geometry = new THREE.BoxGeometry(1, 1, 1);
// const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
// const cube = new THREE.Mesh(geometry, material);
// scene.add(cube);

// camera.position.z = 5;


// const canvas = document.querySelector("canvas")
// const renderer = new THREE.WebGLRenderer({canvas});
// renderer.setSize(window.innerWidth, window.innerHeight);

// //making responsive . when screen size changes
// window.addEventListener('resize',()=>{
//     renderer.setSize(window.innerWidth , window.innerHeight)
//     camera.aspect= window.innerWidth/window.innerHeight
//     camera.updateProjectionMatrix() // to handle the squzzing , so that it can remain in its original state
// })
// //note: whenever you change any value of camera then you have to update the projection matrix

// function animate() {

//     window.requestAnimationFrame(animate)
//   renderer.render(scene, camera);
//   cube.rotation.x += 0.01;
//   cube.rotation.y += 0.01;
// }

// animate()


//orbit controllers

import * as THREE from "three"
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const scene = new THREE.Scene()

const camera = new THREE.PerspectiveCamera(75, window.innerWidth/ window.innerHeight, 0.1 , 1000)
camera.position.z= 5

const canvas = document.querySelector("canvas")
const renderer = new THREE.WebGLRenderer({canvas})
renderer.setSize(window.innerWidth, window.innerHeight)



const geometry = new THREE.BoxGeometry()
const material = new THREE.MeshBasicMaterial({color: 0x00ff00, w})
const cube = new THREE.Mesh(geometry, material)


scene.add(cube)
const controls = new OrbitControls( camera, renderer.domElement );

function animate(){
    window.requestAnimationFrame(animate)
    cube.rotation.x +=0.01
    cube.rotation.y +=0.01
    controls.update();
    renderer.render(scene, camera)

}

animate()