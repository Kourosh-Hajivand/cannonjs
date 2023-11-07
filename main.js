import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  45,
  window.innerWidth / window.innerHeight
);
scene.add(camera);
camera.position.z = 45;
const helperaxes = new THREE.AxesHelper(10);
scene.add(helperaxes);

const geo = new THREE.SphereGeometry(5, 64, 64);
const mat = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
const mesh = new THREE.Mesh(geo, mat);
scene.add(mesh);
const animation = () => {
  Rendrer.render(scene, camera);
};
const light = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(light);
const directionalLight = new THREE.DirectionalLight(0xffffff, 11);
const dirhelp = new THREE.DirectionalLightHelper(directionalLight, 5);
scene.add(dirhelp);
directionalLight.position.set(15, 5, 10);
scene.add(directionalLight);
const plane = new THREE.PlaneGeometry(50, 50);
const planeMat = new THREE.MeshBasicMaterial({
  color: 0xffffff,
  side: THREE.DoubleSide,
});
const planemesh = new THREE.Mesh(plane, planeMat);
scene.add(planemesh);
planemesh.position.y = 0.5 * Math.PI;
const canvas = document.querySelector(".WebGl");
const Rendrer = new THREE.WebGLRenderer({ canvas });
const orbit = new OrbitControls(camera, canvas);
orbit.update();
Rendrer.setSize(window.innerWidth, window.innerHeight);
Rendrer.setAnimationLoop(animation);

window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  Rendrer.setSize(window.innerWidth, window.innerHeight);
});
